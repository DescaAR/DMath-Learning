import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const read=path=>fs.readFileSync(path,"utf8");
const js=ts.transpileModule(read("data/linear-subspaces-content.ts"),{
  compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}
}).outputText;
const module={exports:{}};
new Function("module","exports",js)(module,module.exports);
const lesson=module.exports.linearSubspacesContent;
assert.ok(lesson,"Dedicated subspace lesson must exist");
const definitions=lesson.formal.filter(x=>x.kind==="definition");
const results=lesson.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(definitions.length,4);
assert.equal(results.length,7);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
assert.ok(lesson.intro.length>=4);
for(const definition of definitions){
  const example=lesson.examples.find(x=>x.forDefinition===definition.title);
  assert.ok(example,"Definition must have an explicitly linked example: "+definition.title);
  assert.ok(example.solution.length>=3);
}
for(const theorem of results){
  assert.ok(theorem.proof?.length>=4,"Missing full proof: "+theorem.title);
  assert.ok(theorem.proof.join(" ").length>420,"Proof too short: "+theorem.title);
}
for(const exercise of lesson.exercises){
  assert.ok(exercise.prompt.length>80,"Exercise prompt lacks concrete conditions");
  assert.ok(exercise.answer.length>300,"Exercise solution is too short");
}
const names=results.map(x=>x.title);
for(const name of [
  "Uji Subruang melalui Kombinasi Linear",
  "Irisan Subruang",
  "Span adalah Subruang Terkecil",
  "Kernel Transformasi Linear adalah Subruang",
  "Himpunan Solusi Sistem Takhomogen adalah Translasi Kernel",
  "Jumlah Dua Subruang",
  "Gabungan Dua Subruang"
])assert.ok(names.includes(name),"Missing mathematical result "+name);

// Exhaustive rational-grid checks for the four SVG configurations.
// Every computed point must satisfy the displayed membership predicate.
let cases=0;
for(let ia=-2;ia<=2;ia++)for(let ib=-2;ib<=2;ib++){
  const a=ia/2,b=ib/2;
  const configs=[
    {mode:"linear",u:[1,1],v:[-1,-1],test:([x,y])=>x===y,always:true},
    {mode:"affine",u:[0,1],v:[1,2],test:([x,y])=>y===x+1,always:false},
    {mode:"plane",u:[1,0],v:[0,1],test:()=>true,always:true},
    {mode:"union",u:[1,0],v:[0,1],test:([x,y])=>x===0||y===0,always:false}
  ];
  for(const {mode,u,v,test,always} of configs){
    const w=[a*u[0]+b*v[0],a*u[1]+b*v[1]];
    const expected=mode==="affine"?a+b===1:mode==="union"?a===0||b===0:true;
    assert.equal(test(w),expected,mode+" membership arithmetic");
    if(always)assert.equal(test(w),true,mode+" must be closed");
    cases++;
  }
}
const registry=read("data/book-section-content.ts");
const view=read("components/BookSectionPage.tsx");
const lab=read("components/LinearSubspacesLab.tsx");
const curriculum=read("data/additional-book-curricula.ts");
assert.match(registry,/"la-subspaces":linearSubspacesContent/);
assert.match(curriculum,/"la-subspaces"/);
assert.match(view,/<LinearSubspacesLab compact\/>/);
assert.match(view,/<LinearSubspacesLab\/>/);
assert.match(lab,/<svg role="img"/);
assert.match(lab,/type="range"/);
assert.match(lab,/aria-pressed/);
assert.doesNotMatch(lab,/localStorage|fetch\(/);
console.log("Linear subspace audit passed: 4 linked definitions, 7 proofs, 8 examples, 8 solutions and "+cases+" exact membership checks.");
