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
const lesson=load("data/graphical-lp-content.ts").graphicalLinearProgrammingContent;
const defs=lesson.formal.filter(f=>f.kind==="definition");
const results=lesson.formal.filter(f=>["lemma","proposition","theorem","corollary"].includes(f.kind));
assert.equal(defs.length,4);
assert.equal(results.length,7);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
for(const d of defs){
  assert.ok(d.statement.length>150,"Definition too short: "+d.title);
  const example=lesson.examples.find(e=>e.forDefinition===d.title);
  assert.ok(example&&example.solution.length>=4,"Missing linked worked example: "+d.title);
}
for(const r of results){
  assert.ok(r.statement.length>140,"Formal hypotheses too brief: "+r.title);
  assert.ok(r.proof?.length>=5,"Proof incomplete: "+r.title);
  assert.match(r.proof.at(-1),/\\square/,"Missing proof closure: "+r.title);
  assert.ok(r.proof.join(" ").length>420,"Proof too brief: "+r.title);
}
for(const e of lesson.exercises)assert.ok(e.answer.length>320,"Exercise solution too short");
const {lpVertices,lpFeasible,analyzeGraphicalLP}=load("lib/graphical-lp-explorer.ts");
assert.equal(lpVertices.length,4);
for(const v of lpVertices)assert.ok(lpFeasible(v.x,v.y));
assert.equal(lpFeasible(3,2),false);
assert.equal(lpFeasible(2,3),true);
let checks=0;
for(let c1=1;c1<=6;c1++)for(let c2=1;c2<=8;c2++){
  const a=analyzeGraphicalLP(c1,c2);
  assert.equal(a.maximum,Math.max(...lpVertices.map(v=>c1*v.x+c2*v.y)));
  assert.ok(a.winners.length>=1);
  for(const winner of a.winners)assert.equal(c1*winner.x+c2*winner.y,a.maximum);
  for(let x=0;x<=4;x+=.125)for(let y=0;y<=5;y+=.125)if(lpFeasible(x,y)){
    assert.ok(c1*x+c2*y<=a.maximum+1e-9,"Feasible point exceeds optimum");
    checks++;
  }
  if(a.certificate){
    assert.ok(a.certificate.lambda1>=0&&a.certificate.lambda2>=0);
    assert.ok(Math.abs(a.certificate.bound-a.maximum)<1e-9);
  }
}
assert.deepEqual(analyzeGraphicalLP(3,4).winners.map(v=>v.label),["B"]);
assert.equal(analyzeGraphicalLP(3,4).maximum,18);
assert.deepEqual(analyzeGraphicalLP(3,1).winners.map(v=>v.label),["A","B"]);
assert.deepEqual(analyzeGraphicalLP(1,2).winners.map(v=>v.label),["B","C"]);
assert.throws(()=>analyzeGraphicalLP(0,4),RangeError);
const registry=read("data/book-section-content.ts");
const page=read("components/BookSectionPage.tsx");
const lab=read("components/GraphicalLPLab.tsx");
assert.match(registry,/"or-lp-grafik":graphicalLinearProgrammingContent/);
assert.match(page,/section\.slug==="or-lp-grafik"\?<GraphicalLPLab compact\/>/);
assert.match(page,/section\.slug==="or-lp-grafik"\?<GraphicalLPLab\/>/);
assert.match(lab,/<svg/);
assert.match(lab,/role="img"/);
assert.match(lab,/aria-label/);
assert.doesNotMatch(lesson.intro.join(" "),/daftar notasi|kesalahan umum|prasyarat/i);
console.log("Graphical LP audit passed: 4 definitions, 7 proved results, 8 examples, 8 exercises, "+checks+" feasible-grid checks.");
