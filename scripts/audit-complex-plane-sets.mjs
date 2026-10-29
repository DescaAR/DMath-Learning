import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const read=p=>fs.readFileSync(p,"utf8");
const load=(path)=>{
  const js=ts.transpileModule(read(path),{
    compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}
  }).outputText;
  const module={exports:{}};
  new Function("module","exports",js)(module,module.exports);
  return module.exports;
};
const lesson=load("data/complex-plane-sets-content.ts").complexPlaneSetsContent;
assert.ok(lesson,"Complex-plane topology lesson must exist");
const defs=lesson.formal.filter(x=>x.kind==="definition");
const results=lesson.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(defs.length,6);
assert.equal(results.length,8);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
assert.ok(lesson.intro.length>=4);
for(const definition of defs){
  const linked=lesson.examples.find(x=>x.forDefinition===definition.title);
  assert.ok(linked,"Definition needs a directly linked example: "+definition.title);
  assert.ok(linked.solution.length>=3,"Definition example too short: "+definition.title);
}
for(const result of results){
  assert.ok(result.proof?.length>=4,"Incomplete proof: "+result.title);
  assert.ok(result.proof.join(" ").length>360,"Proof too short: "+result.title);
  assert.match(result.proof.at(-1),/\\square/,"Missing end of proof: "+result.title);
}
for(const exercise of lesson.exercises){
  assert.ok(exercise.prompt.length>90,"Exercise needs concrete mathematical conditions");
  assert.ok(exercise.answer.length>320,"Exercise solution needs substantive reasoning");
}
for(const name of [
  "Setiap Cakram Terbuka Benar-benar Terbuka",
  "Gabungan Sembarang Himpunan Terbuka",
  "Irisan Hingga Himpunan Terbuka",
  "Batas Cakram adalah Lingkaran",
  "Cakram adalah Konveks dan Terhubung Lintasan",
  "Terhubung Lintasan Mengakibatkan Terhubung",
  "Anulus adalah Domain",
  "Kriteria Kontinuitas melalui Pra-Citra Terbuka"
])assert.ok(results.some(x=>x.title===name),"Missing theorem: "+name);

const {isInComplexSet,complexSetFacts}=load("lib/complex-plane-explorer.ts");
const near=(a,b)=>Math.abs(a-b)<1e-9;
assert.equal(Object.keys(complexSetFacts).length,5);
let cases=0;
for(const mode of Object.keys(complexSetFacts)){
  for(let ix=-30;ix<=30;ix++)for(let iy=-30;iy<=30;iy++){
    const x=ix/10,y=iy/10,r=Math.hypot(x,y);
    const expected=mode==="disk"?r<2:mode==="closed"?r<=2:
      mode==="annulus"?1<r&&r<2:mode==="punctured"?0<r&&r<2:
      Math.hypot(x+1.6,y)<.9||Math.hypot(x-1.6,y)<.9;
    assert.equal(isInComplexSet(mode,[x,y],1),expected,mode+" at "+x+","+y);
    cases++;
  }
}
for(const inner of [.5,.6,.8,1,1.2,1.5]){
  assert.equal(isInComplexSet("annulus",[inner,0],inner),false);
  assert.equal(isInComplexSet("annulus",[(inner+2)/2,0],inner),true);
  assert.equal(isInComplexSet("annulus",[2,0],inner),false);
}
assert.equal(isInComplexSet("punctured",[0,0]),false);
assert.equal(isInComplexSet("closed",[2,0]),true);
assert.equal(isInComplexSet("disk",[2,0]),false);
assert.equal(isInComplexSet("disconnected",[0,0]),false);
assert.equal(isInComplexSet("disconnected",[-1.6,0]),true);
assert.equal(isInComplexSet("disconnected",[1.6,0]),true);
assert.equal(near(Math.hypot(3,4),5),true);
assert.equal(complexSetFacts.annulus.domain,true);
assert.equal(complexSetFacts.annulus.simplyConnectedDomain,false);
assert.equal(complexSetFacts.closed.domain,false);
assert.equal(complexSetFacts.disconnected.pathConnected,false);
const registry=read("data/book-section-content.ts");
const view=read("components/BookSectionPage.tsx");
const curriculum=read("data/book-curricula.ts");
const lab=read("components/ComplexPlaneSetsLab.tsx");
assert.match(registry,/"himpunan-di-bidang-kompleks":complexPlaneSetsContent/);
assert.match(curriculum,/"himpunan-di-bidang-kompleks"/);
assert.match(view,/<ComplexPlaneSetsLab compact\/>/);
assert.match(view,/<ComplexPlaneSetsLab\/>/);
assert.match(lab,/<svg role="img"/);
assert.match(lab,/aria-pressed/);
assert.match(lab,/type="range"/);
assert.match(lab,/isInComplexSet/);
assert.doesNotMatch(lab,/localStorage|fetch\(/);
console.log("Complex-plane topology audit passed: six linked definitions, eight complete proofs, eight examples, eight solutions, five SVG modes and "+cases+" exact membership checks.");
