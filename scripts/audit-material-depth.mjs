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
      const withExtension=resolveLocal(path.relative(root,fromFile));
      return loadSource(withExtension);
    }
    return nativeRequire(specifier);
  };
  const execute=new Function("require","module","exports",compiled);
  execute(sourceRequire,module,module.exports);
  return module.exports;
}

const {bookSubjects}=loadSource(path.join(root,"data/book-curricula.ts"));
const {getBookSectionContent}=loadSource(path.join(root,"data/book-section-content.ts"));
const {getCuratedDefinitionExample}=loadSource(path.join(root,"data/definition-examples.ts"));
const acceptedProof=(proof)=>Array.isArray(proof)&&proof.length>=2&&proof.every(step=>typeof step==="string"&&step.trim());
const isDefinition=(item)=>item.kind==="definition"
 && !["mempelajari ","membahas ","pembahasan ","konsep utama ","submateri ini ","halaman ini ","fokus pada "].some(p=>item.statement.trim().toLowerCase().startsWith(p));

const report=[];
const concerns=[];
for(const subject of bookSubjects){
  const row={
    subject:subject.title,
    slug:subject.slug,
    pages:0,
    pagesWithIntro:0,
    pagesWithExercises:0,
    definitions:0,
    definitionsWithExample:0,
    results:0,
    resultsWithProof:0,
    pagesWithGenericIntro:0
  };
  for(const chapter of subject.chapters){
    for(const section of chapter.sections){
      row.pages++;
      const content=getBookSectionContent(section.slug);
      if(!content){
        concerns.push({subject:subject.title,section:section.slug,problem:"missing content"});
        continue;
      }
      if(content.intro.length>=2)row.pagesWithIntro++;
      if(content.exercises.length>0)row.pagesWithExercises++;
      if(content.intro.some(s=>s.includes("Submateri ini membahas")||s.includes("Pembahasan menekankan objek matematika"))){
        row.pagesWithGenericIntro++;
      }
      const definitions=content.formal.filter(isDefinition);
      row.definitions+=definitions.length;
      for(const definition of definitions){
        const t=definition.title.trim().toLocaleLowerCase("id-ID");
        const explicit=content.examples.some(example=>example.forDefinition?.trim().toLocaleLowerCase("id-ID")===t
          || example.title.trim().toLocaleLowerCase("id-ID")===t);
        const single=definitions.length===1&&content.examples.length===1;
        const curated=!!getCuratedDefinitionExample(subject.slug,definition.title);
        if(explicit||single||curated)row.definitionsWithExample++;
        else concerns.push({subject:subject.title,section:section.slug,problem:"no verified example",title:definition.title});
      }
      for(const item of content.formal.filter(x=>["theorem","lemma","proposition","corollary"].includes(x.kind))){
        row.results++;
        if(acceptedProof(item.proof))row.resultsWithProof++;
        else concerns.push({subject:subject.title,section:section.slug,problem:"unproved formal result",title:item.title});
      }
      if(content.examples.length===0)
        concerns.push({subject:subject.title,section:section.slug,problem:"no worked examples"});
      if(content.exercises.length===0)
        concerns.push({subject:subject.title,section:section.slug,problem:"no practice"});
    }
  }
  report.push(row);
}

const totals=report.reduce((out,row)=>{
  for(const [key,value] of Object.entries(row)){
    if(typeof value==="number")out[key]=(out[key]??0)+value;
  }
  return out;
},{});
console.log("DMath material-depth audit:");
console.table(report.map(row=>({
  Subject:row.subject,Pages:row.pages,
  Definitions:row.definitions,
  "Def+Example":row.definitionsWithExample,
  Results:row.results,
  "With proof":row.resultsWithProof,
  "Generic intros":row.pagesWithGenericIntro
})));
console.log(JSON.stringify({totals,unresolved:concerns.length},null,2));

if(process.argv.includes("--json")){
  const filename=path.join(root,"material-depth-report.json");
  fs.writeFileSync(filename,JSON.stringify({totals,subjects:report,concerns},null,2)+"\n");
  console.log("Full gap report: "+filename);
}
