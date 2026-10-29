import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const read=p=>fs.readFileSync(p,"utf8");
const load=p=>{
  const output=ts.transpileModule(read(p),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022},reportDiagnostics:true});
  assert.equal(output.diagnostics?.length??0,0,"TypeScript transpilation errors in "+p);
  const module={exports:{}};
  new Function("module","exports",output.outputText)(module,module.exports);
  return module.exports;
};
const lesson=load("data/bisection-content.ts").bisectionContent;
const defs=lesson.formal.filter(x=>x.kind==="definition");
const results=lesson.formal.filter(x=>["theorem","lemma","proposition","corollary"].includes(x.kind));
assert.equal(defs.length,4);
assert.equal(results.length,7);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
for(const d of defs){
  assert.ok(d.statement.length>150);
  const ex=lesson.examples.find(x=>x.forDefinition===d.title);
  assert.ok(ex&&ex.solution.length>=3,"Definition must have direct worked example: "+d.title);
}
for(const r of results){
  assert.ok(r.proof?.length>=4,"Missing full proof: "+r.title);
  assert.ok(r.proof.join(" ").length>500,"Proof too brief: "+r.title);
  assert.match(r.proof.at(-1),/\\square/,"Missing QED: "+r.title);
}
for(const e of lesson.exercises)assert.ok(e.answer.length>320,"Short exercise solution: "+e.prompt);
const {bisectionCases,evaluateBisection,runBisection}=load("lib/bisection-explorer.ts");
let checks=0;
for(const p of bisectionCases){
  for(let n=0;n<=20;n++){
    const result=runBisection(p.key,n);
    if(p.key==="tangent"){
      assert.equal(result.valid,false);
      assert.equal(result.history.length,0);
      assert.equal(result.bound,null);
    }else{
      assert.equal(result.valid,true);
      if(result.rootAt!==null){
        assert.ok(Math.abs(evaluateBisection(p.key,result.rootAt))<1e-14);
        assert.equal(result.bound,0);
      }else{
        assert.ok(evaluateBisection(p.key,result.a)*evaluateBisection(p.key,result.b)<0);
        assert.ok(Math.abs(result.b-result.a-(p.b-p.a)/Math.pow(2,n))<1e-11);
        assert.ok(Math.abs(result.bound-(p.b-p.a)/Math.pow(2,n+1))<1e-11);
      }
      for(const s of result.history){
        assert.ok(s.a<=s.mid&&s.mid<=s.b);
        assert.ok(s.nextA>=s.a&&s.nextB<=s.b);
        assert.ok(Math.abs(s.fm-evaluateBisection(p.key,s.mid))<1e-14);
      }
    }
    checks++;
  }
}
for(const n of [-1,1.5,25])assert.throws(()=>runBisection("square",n),RangeError);
const registry=read("data/book-section-content.ts");
const view=read("components/BookSectionPage.tsx");
const lab=read("components/BisectionLab.tsx");
assert.match(registry,/"num-bisection":bisectionContent/);
assert.match(view,/section\.slug==="num-bisection"\?<BisectionLab compact\/>/);
assert.match(view,/section\.slug==="num-bisection"\?<BisectionLab\/>/);
assert.match(lab,/<svg/);
assert.match(lab,/role="img"/);
assert.match(lab,/aria-label/);
assert.match(lab,/runBisection/);
assert.doesNotMatch(lesson.intro.join(" "),/daftar notasi|kesalahan umum|prasyarat/i);
console.log("Bisection audit passed: 4 definitions, 7 proved results, 8 examples, 8 exercises, "+checks+" scenarios.");
