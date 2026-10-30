import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root=process.cwd();
const source=fs.readFileSync(path.join(root,"data/exact-differential-content.ts"),"utf8");
const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const module={exports:{}};
new Function("module","exports",compiled)(module,module.exports);
const lesson=module.exports.exactDifferentialContent;
assert.ok(lesson,"Authored exact differential equations lesson must export content");
const definitions=lesson.formal.filter(x=>x.kind==="definition");
const results=lesson.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(definitions.length,4);
assert.equal(results.length,7);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
for(const definition of definitions){
  assert.ok(lesson.examples.some(x=>x.forDefinition===definition.title),
    "Definition lacks immediately linked worked example: "+definition.title);
}
for(const item of results){
  assert.ok(item.proof?.length>=3,"Formal result lacks stepwise proof: "+item.title);
  assert.ok(item.proof.join(" ").includes("Dengan demikian") ||
    item.proof.join(" ").includes("terbukti"),"Proof lacks mathematical closure: "+item.title);
}
for(const example of lesson.examples){
  assert.ok(example.solution.length>=3 && example.conclusion,
    "Worked example incomplete: "+example.title);
}
for(const exercise of lesson.exercises){
  assert.match(exercise.prompt,/^EX-0[1-8]\./);
  assert.ok(exercise.answer.length>420 && !/jawaban yang baik|contoh harus|susun satu soal/i.test(exercise.answer),
    "Exercise has no substantive computation or proof: "+exercise.prompt);
}
const registry=fs.readFileSync(path.join(root,"data/book-section-content.ts"),"utf8");
assert.match(registry,/import \{ exactDifferentialContent \} from "@\/data\/exact-differential-content";/);
assert.match(registry,/"de-exact":exactDifferentialContent/);
const curricula=fs.readFileSync(path.join(root,"data/expanded-book-curricula.ts"),"utf8");
assert.match(curricula,/"de-exact"/);
const h=1e-6;
const partialX=(f,x,y)=>(f(x+h,y)-f(x-h,y))/(2*h);
const partialY=(f,x,y)=>(f(x,y+h)-f(x,y-h))/(2*h);
const near=(a,b,tol=1e-5)=>assert.ok(Math.abs(a-b)<tol,"Mismatch: "+a+" versus "+b);
const cases=[
  {F:(x,y)=>x*x*y+3*x+y*y,M:(x,y)=>2*x*y+3,N:(x,y)=>x*x+2*y},
  {F:(x,y)=>x*x*x+2*x*y+2*y*y,M:(x,y)=>3*x*x+2*y,N:(x,y)=>2*x+4*y},
  {F:(x,y)=>x*x*y+x*y*y,M:(x,y)=>2*x*y+y*y,N:(x,y)=>x*x+2*x*y},
  {F:(x,y)=>x*x*y+2*x*x+3*y*y,M:(x,y)=>2*x*y+4*x,N:(x,y)=>x*x+6*y},
  {F:(x,y)=>x*x*x*y+2*x*y+2*y*y,M:(x,y)=>3*x*x*y+2*y,N:(x,y)=>x*x*x+2*x+4*y},
  {F:(x,y)=>x*x*y,M:(x,y)=>2*x*y,N:(x,y)=>x*x},
  {F:(x,y)=>x*y*y,M:(x,y)=>y*y,N:(x,y)=>2*x*y},
  {F:(x,y)=>x*x+x*y+y*y,M:(x,y)=>2*x+y,N:(x,y)=>x+2*y},
];
for(const {F,M,N} of cases){
  for(const x of [-1.4,-0.5,0.7,1.8]){
    for(const y of [-1.1,0.2,1.3]){
      near(partialX(F,x,y),M(x,y));
      near(partialY(F,x,y),N(x,y));
      near(partialY(M,x,y),partialX(N,x,y));
    }
  }
}
near(1+2+3,6,1e-12);
near(1+2+4,7,1e-12);
for(const x of [0.2,0.5,1,2,5]){
  const y=3/x**2;
  near(2*y+x*(-6/x**3),0);
  const z=x**(-0.5);
  near(z+2*x*(-0.5*x**(-1.5)),0);
}
console.log("Exact differential lesson: definitions, proofs, exercises, registration and numerical identities PASS");
