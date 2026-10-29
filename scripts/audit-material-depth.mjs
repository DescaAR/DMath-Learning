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
        concerns.push({subject:subject.title,section:section.slug,page:"/materi/"+subject.slug+"/"+section.slug,problem:"missing content"});
        continue;
      }
      if(content.intro.length>=2)row.pagesWithIntro++;
      if(content.exercises.length>0)row.pagesWithExercises++;
      if(content.intro.some(s=>s.includes("Submateri ini membahas")||s.includes("Pembahasan menekankan objek matematika"))){
        row.pagesWithGenericIntro++;
        concerns.push({subject:subject.title,section:section.slug,page:"/materi/"+subject.slug+"/"+section.slug,problem:"generic introduction"});
      }
      const definitions=content.formal.filter(isDefinition);
      row.definitions+=definitions.length;
      for(const definition of definitions){
        const t=definition.title.trim().toLocaleLowerCase("id-ID");
        const explicit=content.examples.some(example=>example.forDefinition?.trim().toLocaleLowerCase("id-ID")===t
          || example.title.trim().toLocaleLowerCase("id-ID")===t);
        const curated=!!getCuratedDefinitionExample(subject.slug,definition.title);
        if(explicit||curated)row.definitionsWithExample++;
        else concerns.push({subject:subject.title,section:section.slug,page:"/materi/"+subject.slug+"/"+section.slug,problem:"no verified example",title:definition.title});
      }
      for(const item of content.formal.filter(x=>["theorem","lemma","proposition","corollary"].includes(x.kind))){
        row.results++;
        if(acceptedProof(item.proof)){
          row.resultsWithProof++;
          const text=item.proof.join(" ");
          if(text.length<125 || /(?:argumen serupa|pembuktian mengikuti|bukti diserahkan|serupa dapat dibuktikan)/i.test(text))
            concerns.push({subject:subject.title,section:section.slug,page:"/materi/"+subject.slug+"/"+section.slug,problem:"proof requires detailed mathematical review",title:item.title});
        }else concerns.push({subject:subject.title,section:section.slug,page:"/materi/"+subject.slug+"/"+section.slug,problem:"unproved formal result",title:item.title});
      }
      if(content.examples.length===0)
        concerns.push({subject:subject.title,section:section.slug,page:"/materi/"+subject.slug+"/"+section.slug,problem:"no worked examples"});
      if(content.exercises.length===0)
        concerns.push({subject:subject.title,section:section.slug,page:"/materi/"+subject.slug+"/"+section.slug,problem:"no practice"});
    }
  }
  report.push(row);
}


// Public non-book pages are a separate content system. Audit their rendered
// definition/example pairs, formal statements, and independent practice banks.
const {deepMaterials}=loadSource(path.join(root,"data/deep-materials.ts"));
const {formalChapterContent}=loadSource(path.join(root,"data/formal-chapter-content.ts"));
const {materialPractice}=loadSource(path.join(root,"data/material-practice.ts"));
const {materialPracticeExtra}=loadSource(path.join(root,"data/material-practice-extra.ts"));
const nonBook=[],nonBookConcerns=[];
for(const material of deepMaterials){
  const formal=formalChapterContent[material.slug];
  const url="/materi/"+material.slug;
  const definitions=[...material.definitions.map(x=>x.title),
    ...(formal?.blocks??[]).filter(x=>x.kind==="definition").map(x=>x.title.id)];
  const examples=[...material.examples.map(x=>({title:x.title,linked:x.title})),
    ...(formal?.examples??[]).map(x=>({title:x.title.id,linked:x.forDefinition?.id??x.title.id}))];
  const results=[...material.theorems.map(x=>({title:x.title,proof:x.proof})),
    ...(formal?.blocks??[]).filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind))
      .map(x=>({title:x.title.id,proof:(x.proof??[]).map(y=>y.id)}))];
  const practice=[...(materialPractice[material.slug]??[]),...(materialPracticeExtra[material.slug]??[])];
  const row={subject:material.subject,slug:material.slug,url,definitions:definitions.length,
    definitionsWithExample:0,results:results.length,resultsWithProof:0,
    workedExamples:examples.length,exercises:practice.length};
  for(const title of definitions){
    if(examples.some(x=>x.linked.trim().toLowerCase()===title.trim().toLowerCase()))
      row.definitionsWithExample++;
    else nonBookConcerns.push({subject:material.subject,slug:material.slug,page:url,
      problem:"definition without directly linked example",title});
  }
  for(const result of results){
    if(acceptedProof(result.proof))row.resultsWithProof++;
    else nonBookConcerns.push({subject:material.subject,slug:material.slug,page:url,
      problem:"unproved non-book formal result",title:result.title});
  }
  if(practice.length===0)nonBookConcerns.push({subject:material.subject,slug:material.slug,page:url,problem:"no independent practice"});
  if(examples.length===0)nonBookConcerns.push({subject:material.subject,slug:material.slug,page:url,problem:"no worked example"});
  nonBook.push(row);
}
const fractionRow=nonBook.find(x=>x.slug==="pecahan");
assertFraction(fractionRow);
function assertFraction(row){
  if(!row || row.definitions!==row.definitionsWithExample || row.results!==row.resultsWithProof || row.exercises!==10)
    throw new Error("Fractions non-book content is missing definition examples, proofs, or exercises");
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
console.log(JSON.stringify({totals,unresolved:concerns.length,nonBookPages:nonBook.length,nonBookUnresolved:nonBookConcerns.length,
  byProblem:Object.entries(concerns.reduce((out,item)=>(out[item.problem]=(out[item.problem]??0)+1,out),{}))
    .sort((a,b)=>b[1]-a[1])},null,2));

if(process.argv.includes("--json")){
  const filename=path.join(root,"material-depth-report.json");
  fs.writeFileSync(filename,JSON.stringify({scope:"17 book curricula plus non-book deep materials",totals,subjects:report,concerns,nonBook:{pages:nonBook.length,subjects:nonBook,concerns:nonBookConcerns}},null,2)+"\n");
  console.log("Full gap report: "+filename);
}
