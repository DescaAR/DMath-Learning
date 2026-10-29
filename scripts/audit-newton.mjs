import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {createRequire} from "node:module";

const root=path.resolve(import.meta.dirname,"..");
const require=createRequire(import.meta.url);
const ts=require("typescript");
const source=fs.readFileSync(path.join(root,"data/newton-method-content.ts"),"utf8");
const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const module={exports:{}};
new Function("module","exports",compiled)(module,module.exports);
const lesson=module.exports.newtonMethodContent;
assert.ok(lesson,"Newton lesson export missing");
assert.ok(lesson.intro.length>=3,"Newton-specific conceptual introduction missing");
const defs=lesson.formal.filter(item=>item.kind==="definition");
const results=lesson.formal.filter(item=>["lemma","theorem","proposition","corollary"].includes(item.kind));
assert.equal(defs.length,4);
assert.ok(results.length>=6);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
for(const d of defs){
 assert.ok(lesson.examples.some(e=>e.forDefinition===d.title && e.solution.length>=3),"Missing direct worked example: "+d.title);
}
for(const r of results){
 assert.ok(r.statement.length>100,"Incomplete statement: "+r.title);
 assert.ok((r.proof??[]).length>=2,"Unproved result: "+r.title);
 assert.ok(r.proof.at(-1).includes("\\square"),"Unclosed proof: "+r.title);
}
for(const [i,e] of lesson.examples.entries()){
 assert.ok(e.solution.length>=3 && e.solution.join(" ").length>=360,"Example incomplete: "+(i+1));
}
for(const [i,e] of lesson.exercises.entries()){
 assert.ok(e.answer.length>=380,"Exercise incomplete: "+(i+1));
 assert.ok(!/jawaban yang baik|contoh harus|susun langkah|perbandingan harus/i.test(e.answer),"Generic rubric in exercise "+(i+1));
}
const map=fs.readFileSync(path.join(root,"data/book-section-content.ts"),"utf8");
assert.match(map,/"num-newton":newtonMethodContent/,"Rendered book mapping missing");
const directory=fs.readFileSync(path.join(root,"data/site-data.ts"),"utf8");
assert.match(directory,/subject: "Metode Numerik"[\s\S]*?href: "\/materi\/analisis-numerik\/num-newton"/,"Public 26-field directory mapping missing");
const newton=(f,df,x)=>x-f(x)/df(x);
const sq2=Math.sqrt(2);
const f=x=>x*x-2,df=x=>2*x;
assert.ok(Math.abs(newton(f,df,1.5)-17/12)<1e-14);
assert.ok(Math.abs(newton(f,df,17/12)-577/408)<1e-14);
assert.equal(577*577-2*408*408,1);
assert.equal(newton(x=>x**3-2*x+2,x=>3*x*x-2,0),1);
assert.equal(newton(x=>x**3-2*x+2,x=>3*x*x-2,1),0);
for(let i=1;i<=1000;i++){
 const x=1+i/1000;
 const next=newton(f,df,x);
 assert.ok(Math.abs(next-sq2)<=0.5*Math.abs(x-sq2)**2+1e-12,"Quadratic bound violated at "+x);
}
for(const k of [2,3,4,7]){
 for(const x of [0.2,0.5,2,5]){
  const next=newton(z=>(z-1)**k,z=>k*(z-1)**(k-1),x);
  assert.ok(Math.abs((next-1)-(1-1/k)*(x-1))<1e-11);
 }
}
for(const x of [0.1,0.5,1,2,5,10]){
 const a=5, next=(x+a/x)/2;
 assert.ok(next>0 && next>=Math.sqrt(a)-1e-12);
}
console.log("Newton audit PASS: 4 definitions, 6 proved results, 8 worked examples, 8 solved exercises; 1,000 local error bounds, cycles, multiple roots, positive square-root iterates.");
