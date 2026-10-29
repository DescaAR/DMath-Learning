import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const read=path=>fs.readFileSync(path,"utf8");
const load=path=>{
  const compiled=ts.transpileModule(read(path),{
    compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}
  }).outputText;
  const module={exports:{}};
  new Function("module","exports",compiled)(module,module.exports);
  return module.exports;
};
const lesson=load("data/linear-first-order-content.ts").linearFirstOrderContent;
assert.ok(lesson);
const definitions=lesson.formal.filter(item=>item.kind==="definition");
const results=lesson.formal.filter(item=>["theorem","lemma","proposition","corollary"].includes(item.kind));
assert.equal(definitions.length,4);
assert.equal(results.length,7);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
assert.ok(lesson.intro.length>=4);
for(const def of definitions){
  const example=lesson.examples.find(x=>x.forDefinition===def.title);
  assert.ok(example,"Missing direct definition example: "+def.title);
  assert.ok(example.solution.length>=3,"Definition example lacks explanation: "+def.title);
  assert.ok(def.statement.length>130);
}
for(const result of results){
  assert.ok(result.proof?.length>=4,"Incomplete formal proof: "+result.title);
  assert.ok(result.proof.join(" ").length>550,"Formal proof too brief: "+result.title);
  assert.match(result.proof.at(-1),/\\square/,"Proof must end explicitly: "+result.title);
}
for(const exercise of lesson.exercises){
  assert.ok(exercise.prompt.length>95,"Exercise requires mathematical data");
  assert.ok(exercise.answer.length>330,"Exercise solution too short");
}
for(const title of [
  "Rumus Faktor Integrasi dan Eksistensi Solusi",
  "Ketunggalan Solusi Masalah Nilai Awal",
  "Keluarga Seluruh Solusi dan Prinsip Selisih",
  "Rumus Koefisien Konstan dan Titik Setimbang",
  "Peluruhan Selisih Dua Solusi",
  "Prinsip Positivitas",
  "Rumus Iterasi Euler dan Stabilitas Titik Setimbang"
])assert.ok(results.some(x=>x.title===title),"Missing theorem: "+title);

const {exactLinearOde,linearOdeTrajectory}=load("lib/linear-first-order-explorer.ts");
const close=(a,b,tol=1e-9)=>Math.abs(a-b)<=tol*(1+Math.max(Math.abs(a),Math.abs(b)));
let checks=0;
for(const a of [-2,-1,-.5,0,.5,1,2,3]){
  for(const b of [-3,-1,0,1,3]){
    for(const y0 of [-2,0,1,4]){
      for(const steps of [2,4,8,16,32,64]){
        const T=3;
        const model=linearOdeTrajectory({a,b,y0,T,steps});
        const h=T/steps;
        assert.equal(model.euler.length,steps+1);
        assert.equal(model.exact.length,121);
        assert.ok(close(model.exact[0].y,y0));
        assert.ok(close(model.euler[0].y,y0));
        assert.ok(close(model.errorAtEnd,Math.abs(model.euler.at(-1).y-exactLinearOde(a,b,y0,T))));
        const eq=a===0?null:b/a;
        const expectedEnd=a===0?y0+b*T:eq+(y0-eq)*Math.pow(1-a*h,steps);
        assert.ok(close(model.euler.at(-1).y,expectedEnd,1e-8),
          "Euler recurrence mismatch: "+JSON.stringify({a,b,y0,steps}));
        if(a===0)assert.ok(close(model.errorAtEnd,0,1e-8),"Euler must be exact for y'=b");
        if(a>0)assert.equal(model.stableToEquilibrium,Math.abs(1-a*h)<1);
        else assert.equal(model.stableToEquilibrium,null);
        for(let k=0;k<model.exact.length;k++){
          const point=model.exact[k];
          assert.ok(close(point.y,exactLinearOde(a,b,y0,point.t)));
        }
        checks++;
      }
    }
  }
}
for(const args of [
  {a:1,b:2,y0:0,T:0,steps:4},
  {a:1,b:2,y0:0,T:3,steps:0},
  {a:1,b:2,y0:0,T:3,steps:2.5},
  {a:1,b:2,y0:0,T:3,steps:201}
])assert.throws(()=>linearOdeTrajectory(args),RangeError);

const registry=read("data/book-section-content.ts");
const curriculum=read("data/expanded-book-curricula.ts");
const view=read("components/BookSectionPage.tsx");
const lab=read("components/LinearFirstOrderLab.tsx");
assert.match(registry,/"de-linear-first":linearFirstOrderContent/);
assert.match(curriculum,/"de-linear-first","Persamaan Linear Orde Satu"/);
assert.match(view,/section\.slug==="de-linear-first"\?<LinearFirstOrderLab compact\/>/);
assert.match(view,/section\.slug==="de-linear-first"\?<LinearFirstOrderLab\/>/);
assert.match(lab,/<svg/);
assert.match(lab,/role="img"/);
assert.match(lab,/aria-label/);
assert.match(lab,/linearOdeTrajectory/);
assert.match(lab,/slopeSegments/);
assert.match(lab,/errorAtEnd/);
assert.doesNotMatch(lesson.intro.join(" "),/daftar notasi|kesalahan umum|prasyarat/i);
console.log("First-order linear ODE audit passed: 4 definitions, 7 rigorous results, 8 worked examples, 8 exercises, "+checks+" trajectory parameter sets.");
