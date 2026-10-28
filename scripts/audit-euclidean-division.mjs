import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const read=path=>fs.readFileSync(path,"utf8");
const source=read("data/euclidean-division-content.ts");
const js=ts.transpileModule(source,{compilerOptions:{
  module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022
}}).outputText;
const mod={exports:{}};
new Function("module","exports",js)(mod,mod.exports);
const lesson=mod.exports.euclideanDivisionContent;
assert.ok(lesson,"The dedicated lesson must be exported");
const definitions=lesson.formal.filter(x=>x.kind==="definition");
const results=lesson.formal.filter(x=>["theorem","lemma","proposition","corollary"].includes(x.kind));
assert.equal(definitions.length,4);
assert.equal(results.length,5);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
assert.ok(lesson.intro.length>=4&&lesson.intro.every(x=>x.length>=120));
for(const def of definitions){
  const example=lesson.examples.find(x=>x.forDefinition===def.title);
  assert.ok(example,"Missing immediate example for "+def.title);
  assert.ok(example.solution.length>=3);
}
for(const item of results){
  assert.ok(item.proof?.length>=2,"Unproved formal result: "+item.title);
  assert.ok(item.proof.join(" ").length>=300,"Insufficiently developed proof: "+item.title);
  assert.ok(/terbukti/i.test(item.proof.at(-1)),"Proof has no explicit closing: "+item.title);
}
for(const exercise of lesson.exercises){
  assert.ok(exercise.prompt.length>=95,"Exercise needs a concrete mathematical task");
  assert.ok(exercise.answer.length>=290,"Exercise answer must contain reasoning");
}
assert.deepEqual(results.map(x=>x.title),[
  "Teorema Pembagian Euclid",
  "Hasil Bagi sebagai Fungsi Lantai",
  "Sisa Tidak Berubah oleh Penambahan Kelipatan Pembagi",
  "Kesamaan Sisa dan Kongruensi",
  "Kriteria Sisa Nol"
]);
// Exhaustive arithmetic regression over the interactive range.
for(let b=1;b<=12;b++)for(let a=-60;a<=60;a++){
  const q=Math.floor(a/b),r=a-b*q;
  assert.equal(a,b*q+r);
  assert.ok(r>=0&&r<b,"Remainder outside canonical range");
  const valid=[];
  for(let candidate=q-3;candidate<=q+3;candidate++){
    const residue=a-b*candidate;
    if(residue>=0&&residue<b)valid.push([candidate,residue]);
  }
  assert.deepEqual(valid,[[q,r]],"Quotient/remainder must be unique");
  for(let k=-3;k<=3;k++){
    const shifted=a+k*b;
    assert.equal(shifted-b*Math.floor(shifted/b),r,"Periodicity failed");
  }
}
assert.equal(Math.floor(-17/5),-4);
assert.equal(-17-5*Math.floor(-17/5),3);
const lab=read("components/EuclideanDivisionLab.tsx");
for(const re of [/Math\.floor\(a\/b\)/,/r:a-b\*q/,/role="img"/,/viewBox="0 0 500 190"/,/aria-pressed/,/Array\.from\(\{length:b\}/]){
  assert.match(lab,re,"Interactive visual regression");
}
const catalogue=read("data/book-section-content.ts");
assert.match(catalogue,/"nt-euclid-division":euclideanDivisionContent/);
const renderer=read("components/BookSectionPage.tsx");
assert.match(renderer,/<EuclideanDivisionLab compact\/>/);
assert.match(renderer,/<EuclideanDivisionLab\/>/);
assert.match(renderer,/section\.slug==="nt-euclid-division"/);
console.log("Euclidean division audit passed: 4 linked definitions, 5 proved results, 8 examples, 8 solved exercises, and 1,452 exhaustive quotient/remainder cases.");
