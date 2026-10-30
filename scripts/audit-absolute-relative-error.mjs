import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import katex from "katex";

const sourcePath="data/absolute-relative-error-content.ts";
const source=fs.readFileSync(sourcePath,"utf8");
const registry=fs.readFileSync("data/book-section-content.ts","utf8");
assert.match(registry,/"num-galat-absolut-relatif":absoluteRelativeErrorContent/,"Authored lesson must override the generated public content");
const transpiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022},fileName:sourcePath}).outputText;
const module={exports:{}};
new Function("require","module","exports",transpiled)(()=>{throw Error("Unexpected runtime import");},module,module.exports);
const lesson=module.exports.absoluteRelativeErrorContent;
assert.ok(lesson);
const defs=lesson.formal.filter(x=>x.kind==="definition");
const results=lesson.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(defs.length,4);
assert.equal(results.length,6);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
for(const definition of defs){
  assert.ok(lesson.examples.some(x=>x.forDefinition===definition.title),"Definition lacks a directly associated example: "+definition.title);
}
for(const item of results){
  assert.ok(item.proof?.length>=3 && item.proof.join(" ").length>450,"Incomplete proof: "+item.title);
  assert.match(item.proof.at(-1),/\\square/,"Missing proof closure: "+item.title);
}
for(const example of lesson.examples){
  assert.ok(example.solution.length>=3 && example.solution.join(" ").length>350,"Incomplete worked example: "+example.title);
}
for(const exercise of lesson.exercises){
  assert.ok(exercise.answer.length>=400 && !/jawaban yang baik|contoh harus|soal yang baik/i.test(exercise.answer),"Rubric or short solution: "+exercise.prompt);
}
let mathCount=0;
const inspect=(value)=>{
  if(typeof value==="string"){
    for(const match of value.matchAll(/\$([^$]+)\$/g)){
      try{katex.renderToString(match[1],{throwOnError:true,output:"html"});}
      catch(e){throw Error("Invalid KaTeX "+JSON.stringify(match[1])+": "+e.message);}
      mathCount++;
    }
  }else if(Array.isArray(value))value.forEach(inspect);
  else if(value && typeof value==="object")Object.values(value).forEach(inspect);
};
inspect(lesson);
assert.ok(mathCount>=150,"Unexpectedly few mathematical expressions");
const near=(a,b,tol=1e-12)=>assert.ok(Math.abs(a-b)<=tol,String(a)+" differs from "+String(b));
near(Math.abs(0.125-0.12),0.005);
near(Math.abs(0.125-0.12)/0.125,0.04);
near(Math.abs(0.625-0.63)/0.625,0.008);
near(Math.abs((12.3-12.2)-(12.29-12.21)),0.02);
near(Math.abs((12.3-12.2)-(12.29-12.21))/Math.abs(12.3-12.2),0.2);
near(Math.abs(2.02/3.96-2/4),1/99);
near((4*0.02+2*0.04)/(4*(4-0.04)),1/99);
for(const p of [-8,8])for(const delta of [0,0.025,0.2]){
  for(let k=-25;k<=25;k++){
    const approx=p+k/100;
    const lhs=Math.abs(p-approx)/Math.abs(p)<=delta+1e-12;
    const rhs=approx>=p-delta*Math.abs(p)-1e-12 && approx<=p+delta*Math.abs(p)+1e-12;
    assert.equal(lhs,rhs);
  }
}
console.log("Absolute/relative error regression PASS:",defs.length,"definitions,",results.length,"proofs,",lesson.examples.length,"worked examples,",lesson.exercises.length,"solved exercises,",mathCount,"KaTeX expressions");
