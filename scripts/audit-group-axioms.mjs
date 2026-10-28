import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const read=path=>fs.readFileSync(path,"utf8");
const evaluate=source=>{
  const js=ts.transpileModule(source,{compilerOptions:{
    module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022
  }}).outputText;
  const module={exports:{}};
  new Function("module","exports",js)(module,module.exports);
  return module.exports;
};
const lesson=evaluate(read("data/group-axioms-content.ts")).groupAxiomsContent;
assert.ok(lesson,"Group lesson must export actual content");
const definitions=lesson.formal.filter(x=>x.kind==="definition");
const results=lesson.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(definitions.length,4);
assert.equal(results.length,8);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
assert.ok(lesson.intro.length>=4&&lesson.intro.every(p=>p.length>=140));
for(const d of definitions){
  const example=lesson.examples.find(x=>x.forDefinition===d.title);
  assert.ok(example,"Missing direct definition example: "+d.title);
  assert.ok(example.solution.length>=3,"Example too short: "+d.title);
}
for(const result of results){
  assert.ok(result.proof?.length>=3,"Proof too short: "+result.title);
  assert.ok(result.proof.join(" ").length>=340,"Proof lacks detail: "+result.title);
}
for(const exercise of lesson.exercises){
  assert.ok(exercise.prompt.length>=100,"Exercise is not concrete enough");
  assert.ok(exercise.answer.length>=320,"Exercise lacks stepwise solution");
}
for(const title of [
  "Ketunggalan Identitas","Ketunggalan Invers","Hukum Pembatalan Kiri dan Kanan",
  "Penyelesaian Persamaan di Dalam Grup","Invers dari Hasil Kali dan Invers Ganda",
  "Grup Aditif Kelas Sisa","Grup Unit Modulo n","Semua Unsur Berorde Paling Banyak Dua"
])assert.ok(results.some(x=>x.title===title),"Missing theorem: "+title);

const {finiteOperation,gcd}=evaluate(read("lib/group-axioms-explorer.ts"));
let checks=0;
for(let n=2;n<=12;n++){
  for(const mode of ["add","units","multiply"]){
    const s=finiteOperation(n,mode);
    assert.ok(s.closed&&s.associative&&s.commutative,"Modular structure invariant");
    assert.equal(s.table.length,s.elements.length);
    for(let i=0;i<s.elements.length;i++){
      assert.equal(s.table[i].length,s.elements.length);
      for(let j=0;j<s.elements.length;j++){
        const a=s.elements[i],b=s.elements[j];
        assert.equal(s.table[i][j],mode==="add"?(a+b)%n:(a*b)%n);
        checks++;
      }
      if(mode!=="multiply"){
        assert.ok(s.inverses[i]!==null,"Every group element needs inverse");
        assert.equal(new Set(s.table[i]).size,s.elements.length,"Translation must be a permutation");
      }
    }
    if(mode==="add"){
      assert.equal(s.elements.length,n);
      assert.equal(s.identity,0);
      assert.equal(s.isGroup,true);
    }else if(mode==="units"){
      assert.deepEqual(s.elements,Array.from({length:n-1},(_,i)=>i+1).filter(x=>gcd(x,n)===1));
      assert.equal(s.identity,1);
      assert.equal(s.isGroup,true);
    }else{
      assert.equal(s.identity,1);
      assert.equal(s.isGroup,false,"Zero must obstruct group structure");
      assert.equal(s.inverses[0],null);
      assert.equal(new Set(s.table[0]).size,1,"Multiplication by zero must collapse");
    }
  }
}
assert.throws(()=>finiteOperation(1,"add"),RangeError);
assert.throws(()=>finiteOperation(13,"units"),RangeError);

const registry=read("data/book-section-content.ts");
const view=read("components/BookSectionPage.tsx");
const lab=read("components/GroupAxiomsLab.tsx");
const curriculum=read("data/additional-book-curricula.ts");
assert.match(registry,/"alg-groups":groupAxiomsContent/);
assert.match(curriculum,/"alg-groups"/);
assert.match(view,/<GroupAxiomsLab compact\/>/);
assert.match(view,/<GroupAxiomsLab\/>/);
assert.match(lab,/role="img"/);
assert.match(lab,/aria-label="Tabel Cayley/);
assert.match(lab,/aria-pressed/);
assert.doesNotMatch(lab,/localStorage|fetch\(/);
console.log("Group-axiom audit passed: 4 linked definitions, 8 proofs, 8 examples, 8 solutions, and "+checks+" exact Cayley cells.");
