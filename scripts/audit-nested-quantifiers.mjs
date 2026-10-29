import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const read=p=>fs.readFileSync(p,"utf8");
function load(path){
  const out=ts.transpileModule(read(path),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022},reportDiagnostics:true});
  assert.equal(out.diagnostics?.length??0,0,"TypeScript transpilation failed: "+path);
  const module={exports:{}};
  new Function("module","exports",out.outputText)(module,module.exports);
  return module.exports;
}
const lesson=load("data/nested-quantifiers-content.ts").nestedQuantifiersContent;
const defs=lesson.formal.filter(f=>f.kind==="definition");
const results=lesson.formal.filter(f=>["lemma","proposition","theorem","corollary"].includes(f.kind));
assert.equal(defs.length,4);
assert.equal(results.length,8);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
for(const d of defs){
  assert.ok(d.statement.length>=170,"Definition too short: "+d.title);
  const example=lesson.examples.find(e=>e.forDefinition===d.title);
  assert.ok(example&&example.solution.length>=4,"Missing direct worked example for "+d.title);
}
for(const result of results){
  assert.ok(result.statement.length>=150,"Formal hypotheses too brief: "+result.title);
  assert.ok(result.proof?.length>=5,"Proof too short: "+result.title);
  assert.ok(result.proof.join(" ").length>650,"Proof lacks steps: "+result.title);
  assert.match(result.proof.at(-1),/\\square/,"Proof must end with QED: "+result.title);
}
for(const e of lesson.exercises)assert.ok(e.answer.length>=320,"Exercise solution too short");
const {relationPresets,relationValue,analyzeRelation}=load("lib/nested-quantifiers-explorer.ts");
let checks=0;
for(let n=2;n<=6;n++)for(const preset of relationPresets){
  const a=analyzeRelation(preset.key,n);
  assert.equal(a.matrix.length,n);
  for(let i=1;i<=n;i++)for(let j=1;j<=n;j++){
    assert.equal(a.matrix[i-1][j-1],relationValue(preset.key,i,j,n));
    checks++;
  }
  assert.equal(a.everyXSomeY,a.matrix.every(row=>row.some(Boolean)));
  assert.equal(a.someYEveryX,Array.from({length:n},(_,j)=>a.matrix.every(row=>row[j])).some(Boolean));
  assert.equal(a.everyYSomeX,Array.from({length:n},(_,j)=>a.matrix.some(row=>row[j])).every(Boolean));
  assert.equal(a.someXEveryY,a.matrix.some(row=>row.every(Boolean)));
  assert.equal(a.negationEveryXSomeY,!a.everyXSomeY);
  assert.equal(a.negationSomeYEveryX,!a.someYEveryX);
  assert.ok(!a.someYEveryX||a.everyXSomeY,"Uniform witness must imply local witnesses");
  if(preset.key==="equality"||preset.key==="cycle"){
    assert.equal(a.everyXSomeY,true);
    assert.equal(a.someYEveryX,false);
  }
  if(preset.key==="missing")assert.equal(a.everyXSomeY,false);
  if(preset.key==="lessEqual"||preset.key==="fixed"||preset.key==="all")assert.equal(a.someYEveryX,true);
  checks+=8;
}
for(const [key,n] of [["equality",1],["all",9],["equality",2.5]])assert.throws(()=>analyzeRelation(key,n),RangeError);
assert.throws(()=>relationValue("equality",0,1,3),RangeError);
const registry=read("data/book-section-content.ts");
const page=read("components/BookSectionPage.tsx");
const lab=read("components/NestedQuantifiersLab.tsx");
assert.match(registry,/"md-kuantor-bertingkat":nestedQuantifiersContent/);
assert.match(page,/section\.slug==="md-kuantor-bertingkat"\?<NestedQuantifiersLab compact\/>/);
assert.match(page,/section\.slug==="md-kuantor-bertingkat"\?<NestedQuantifiersLab\/>/);
assert.match(lab,/<svg/);
assert.match(lab,/role="img"/);
assert.match(lab,/aria-label/);
assert.match(lab,/analyzeRelation/);
assert.doesNotMatch(lesson.intro.join(" "),/daftar notasi|kesalahan umum|prasyarat/i);
console.log("Nested-quantifiers audit passed: 4 definitions, 8 proved results, 8 examples, 8 exercises, "+checks+" finite-relation checks.");
