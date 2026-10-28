import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

const root=process.cwd();
const nativeRequire=createRequire(import.meta.url);
const moduleCache=new Map();

function resolveLocal(specifier){
  const local=specifier.startsWith("@/")
    ? specifier.slice(2)
    : specifier.startsWith("./")||specifier.startsWith("../")
      ? specifier
      : null;
  if(!local)return null;
  const absolute=path.resolve(root,local);
  for(const candidate of [absolute,absolute+".ts",absolute+".tsx",path.join(absolute,"index.ts")]){
    if(fs.existsSync(candidate)&&fs.statSync(candidate).isFile())return candidate;
  }
  throw new Error("Missing local source: "+specifier);
}

function loadSource(filename){
  const absolute=path.resolve(filename);
  if(moduleCache.has(absolute))return moduleCache.get(absolute).exports;
  const module={exports:{}};
  moduleCache.set(absolute,module);
  const original=fs.readFileSync(absolute,"utf8");
  const compiled=ts.transpileModule(original,{compilerOptions:{
    module:ts.ModuleKind.CommonJS,
    target:ts.ScriptTarget.ES2022,
    jsx:ts.JsxEmit.ReactJSX,
    esModuleInterop:true
  },fileName:absolute}).outputText;
  const sourceRequire=(specifier)=>{
    if(specifier.startsWith("@/")){
      const local=resolveLocal(specifier);
      return loadSource(local);
    }
    if(specifier.startsWith("./")||specifier.startsWith("../")){
      const fromFile=path.resolve(path.dirname(absolute),specifier);
      const localFile=[fromFile,fromFile+".ts",fromFile+".tsx",path.join(fromFile,"index.ts")]
        .find(candidate=>fs.existsSync(candidate)&&fs.statSync(candidate).isFile());
      if(!localFile)throw new Error("Missing relative source: "+specifier+" imported by "+absolute);
      return loadSource(localFile);
    }
    return nativeRequire(specifier);
  };
  const execute=new Function("require","module","exports",compiled);
  execute(sourceRequire,module,module.exports);
  return module.exports;
}


const assert=nativeRequire("node:assert/strict");
const {bookSubjects}=loadSource(path.join(root,"data/book-curricula.ts"));
const {getBookSectionContent}=loadSource(path.join(root,"data/book-section-content.ts"));
const {enrichedMeasureExamples}=loadSource(path.join(root,"data/enriched-measure-examples.ts"));
const {enrichedAlgebraNumericalExamples}=loadSource(path.join(root,"data/enriched-algebra-numerical-examples.ts"));
const {enrichedDifferentialExamples}=loadSource(path.join(root,"data/enriched-differential-examples.ts"));
const {academicEnrichment}=loadSource(path.join(root,"data/academic-enrichment.ts"));

const authored={...enrichedMeasureExamples,...enrichedAlgebraNumericalExamples,...enrichedDifferentialExamples};
const expectedExampleCount=50,expectedSectionCount=23;
assert.equal(Object.keys(authored).length,expectedExampleCount,"Total individual examples changed unexpectedly");
assert.equal(Object.keys(academicEnrichment).length,expectedSectionCount,"Incomplete enrichment chapter coverage");
const issues=[];
const subjectMap=new Map(bookSubjects.map(s=>[s.slug,s]));
const slugMap=new Map();
for(const subject of bookSubjects)for(const chapter of subject.chapters)for(const section of chapter.sections){
  slugMap.set(section.slug,{subject,section});
}
for(const [key,example] of Object.entries(authored)){
  const separator=key.indexOf(":");
  const subject=subjectMap.get(key.slice(0,separator));
  const def=key.slice(separator+1);
  if(!subject){issues.push(key+": subject not in active catalogue");continue;}
  if(example.forDefinition!==def)issues.push(key+": explicit definition title mismatch");
  const links=subject.chapters.flatMap(ch=>ch.sections).filter(section=>{
    const page=getBookSectionContent(section.slug);
    return page?.formal.some(item=>item.kind==="definition"&&item.title===def);
  });
  if(!links.length)issues.push(key+": no actual matching definition");
  if(example.solution.length<2||example.solution.some(s=>s.trim().length<35))
    issues.push(key+": incomplete worked reasoning");
  if(!example.problem.includes("$")||!example.conclusion?.trim())
    issues.push(key+": problem or conclusion incomplete");
}
for(const [slug,enrich] of Object.entries(academicEnrichment)){
  const target=slugMap.get(slug),page=getBookSectionContent(slug);
  if(!target||!page){issues.push(slug+": cannot resolve target page");continue;}
  if(!enrich.intro.length||!enrich.exercises.length||!enrich.formal.length)
    issues.push(slug+": incomplete enrichment elements");
  for(const item of enrich.formal){
    if(!page.formal.some(f=>f.kind===item.kind&&f.title===item.title))
      issues.push(slug+": formal statement not attached "+item.title);
    if(item.kind!=="definition"&&(!item.proof||item.proof.length<2||item.proof.some(p=>p.trim().length<50)))
      issues.push(slug+": formal argument needs expansion "+item.title);
  }
  for(const exercise of enrich.exercises){
    if(!page.exercises.some(e=>e.prompt===exercise.prompt))
      issues.push(slug+": exercise missing from output "+exercise.prompt.slice(0,35));
    if(exercise.answer.trim().length<120)issues.push(slug+": exercise is under-explained");
  }
}
assert.deepEqual(issues,[],issues.join("\n"));
const formalCount=Object.values(academicEnrichment).flatMap(e=>e.formal);
console.log("DMath enrichment audit passed:",Object.keys(authored).length,"verified definition-linked examples,",Object.keys(academicEnrichment).length,"enriched sections,",formalCount.filter(x=>x.kind!=="definition").length,"proved results and",Object.values(academicEnrichment).reduce((n,e)=>n+e.exercises.length,0),"new fully worked exercises.");
