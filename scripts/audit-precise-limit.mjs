import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const read=file=>fs.readFileSync(file,"utf8");
function evaluate(source){
  const compiled=ts.transpileModule(source,{compilerOptions:{
    module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022
  }}).outputText;
  const module={exports:{}};
  new Function("module","exports",compiled)(module,module.exports);
  return module.exports;
}

const lesson=evaluate(read("data/precise-limit-content.ts")).preciseLimitContent;
assert.ok(lesson,"Dedicated epsilon-delta lesson is missing");
const definitions=lesson.formal.filter(x=>x.kind==="definition");
const results=lesson.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(definitions.length,6);
assert.equal(results.length,8);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
assert.ok(lesson.intro.length>=5&&lesson.intro.every(p=>p.length>=120));
for(const def of definitions){
  const example=lesson.examples.find(e=>e.forDefinition===def.title);
  assert.ok(example,"Definition lacks a directly linked worked example: "+def.title);
  assert.ok(example.solution.length>=3,"Definition example is not stepwise: "+def.title);
  assert.ok(def.statement.length>=150,"Definition lacks formal hypotheses: "+def.title);
}
for(const result of results){
  assert.ok(result.proof?.length>=3,"Formal result lacks a complete proof: "+result.title);
  assert.ok(result.proof.join(" ").length>=450,"Proof lacks detailed reasoning: "+result.title);
  assert.ok(result.explanation?.length>=100,"Missing conceptual explanation: "+result.title);
}
for(const example of lesson.examples){
  assert.ok(example.problem.length>=90,"Example problem is not specific");
  assert.ok(example.solution.length>=3&&example.conclusion?.length>=65,
    "Example solution or conclusion incomplete");
}
for(const exercise of lesson.exercises){
  assert.ok(exercise.prompt.length>=100,"Exercise prompt is too short");
  assert.ok(exercise.answer.length>=450,"Exercise answer needs complete mathematical reasoning");
}
for(const title of [
  "Ketunggalan Limit Fungsi",
  "Mengubah Nilai Fungsi di Satu Titik Tidak Mengubah Limit",
  "Limit Fungsi Linear",
  "Limit Fungsi Kuadrat",
  "Fungsi dengan Limit Hingga Terbatas Secara Lokal",
  "Kriteria Barisan untuk Limit Fungsi",
  "Kriteria Dua Limit Satu Sisi",
  "Teorema Apit untuk Limit Fungsi"
])assert.ok(results.some(x=>x.title===title),"Missing theorem: "+title);
const allProofs=results.map(x=>x.proof.join(" ")).join("\n");
for(const token of [
  "d/3","titik akumulasi","\\Rightarrow","\\Leftarrow",
  "2|a|+1","1/n","\\delta_-","\\delta_+","L-\\varepsilon"
])assert.ok(allProofs.includes(token),"Proof reasoning missing: "+token);
assert.equal(lesson.mistakes.length,0);
assert.equal(lesson.connections.length,0);

const explorer=evaluate(read("lib/precise-limit-explorer.ts"));
const {limitModes,limitExperiment,evaluateLimitFunction}=explorer;
assert.deepEqual(limitModes,["linear","quadratic","hole","jump"]);
assert.equal(evaluateLimitFunction("hole",1),null);
assert.equal(evaluateLimitFunction("jump",-0.1),0);
assert.equal(evaluateLimitFunction("jump",0),1);
let tests=0,witnesses=0;
for(const mode of limitModes){
  const epsilons=mode==="jump"?[0.1,0.2,0.3,0.4]:[0.25,0.5,1,1.5];
  for(const epsilon of epsilons)for(let i=1;i<=10;i++){
    const scale=i/4;
    const x=limitExperiment(mode,epsilon,scale);
    assert.ok(x.delta>0&&x.delta<4);
    if(mode==="linear")assert.ok(Math.abs(x.threshold-epsilon/3)<1e-12);
    if(mode==="quadratic")assert.ok(Math.abs(x.threshold-(Math.sqrt(4+epsilon)-2))<1e-12);
    if(mode==="hole")assert.equal(x.threshold,epsilon);
    if(mode==="jump")assert.equal(x.threshold,0);
    assert.equal(x.valid,mode!=="jump"&&scale<=1);
    if(x.valid){
      assert.equal(x.witnessX,null);
      for(let j=-199;j<=199;j++){
        if(j===0)continue;
        const input=x.a+x.delta*j/200;
        const output=evaluateLimitFunction(mode,input);
        assert.ok(output!==null,"Safe band contains a hole outside its center");
        assert.ok(Math.abs(output-x.L)<epsilon+1e-9,
          "Safe epsilon-delta band failed: "+mode+","+epsilon+","+scale+","+j);
        tests++;
      }
    }else{
      assert.ok(x.witnessX!==null&&x.witnessY!==null);
      assert.ok(Math.abs(x.witnessX-x.a)>0&&Math.abs(x.witnessX-x.a)<x.delta);
      assert.ok(Math.abs(x.witnessY-x.L)>=epsilon-1e-9,
        "Invalid radius lacks an explicit counterexample");
      witnesses++;
    }
  }
}
assert.throws(()=>limitExperiment("jump",0.5,1));
const registry=read("data/book-section-content.ts");
assert.match(registry,/import \{ preciseLimitContent \}/);
assert.match(registry,/"calc-precise-limit":preciseLimitContent/);
const page=read("components/BookSectionPage.tsx");
assert.match(page,/import \{ PreciseLimitLab \}/);
assert.equal((page.match(/section\.slug==="calc-precise-limit"/g)||[]).length,2,
  "Interactive explorer must appear in introduction and visualization");
const visual=read("components/PreciseLimitLab.tsx");
for(const pattern of [/<svg/,/role="img"/,/aria-label/,/aria-pressed/,/type="range"/,
  /clipPath/,/limitExperiment/,/witnessX/,/aria-live="polite"/])
  assert.match(visual,pattern,"Missing visualization/accessibility requirement");
assert.match(read("data/expanded-book-curricula.ts"),/"calc-precise-limit"/);
assert.doesNotMatch(read("lib/public-content.ts"),/"calc-precise-limit"/,
  "Lesson must remain publicly accessible");
console.log("Precise limit audit passed: 6 linked definitions, 8 complete proofs, 8 examples, 8 solutions, "+
  tests+" safe samples and "+witnesses+" constructive counterexamples.");
