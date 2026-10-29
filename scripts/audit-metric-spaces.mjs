import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

const root=process.cwd();
const filename=path.join(root,"data/metric-spaces-content.ts");
const original=fs.readFileSync(filename,"utf8");
const compiled=ts.transpileModule(original,{compilerOptions:{
  module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,
  esModuleInterop:true
},fileName:filename}).outputText;
const module={exports:{}};
new Function("require","module","exports",compiled)(createRequire(import.meta.url),module,module.exports);
const lesson=module.exports.metricSpacesContent;
assert.ok(lesson,"Metric-space lesson must export metricSpacesContent");
const registry=fs.readFileSync(path.join(root,"data/book-section-content.ts"),"utf8");
const renderer=fs.readFileSync(path.join(root,"components/BookSectionPage.tsx"),"utf8");
assert.ok(registry.includes('"ruang-metrik":metricSpacesContent'),"Rendered registry must use the authored content");
assert.ok(renderer.includes('section.slug==="ruang-metrik"?<MetricSpacesLab compact/>'),"Metric-ball laboratory must be rendered");
assert.ok(lesson.intro.length>=3);
const definitions=lesson.formal.filter(x=>x.kind==="definition");
const results=lesson.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(definitions.length,6);
assert.ok(results.length>=6);
assert.equal(lesson.examples.length,8);
assert.equal(lesson.exercises.length,8);
for(const definition of definitions){
  assert.ok(definition.statement.length>=120,"Definition too abbreviated: "+definition.title);
  const example=lesson.examples.find(x=>x.forDefinition===definition.title);
  assert.ok(example,"Missing directly linked definition example: "+definition.title);
  assert.ok(example.solution.length>=3 && example.solution.join(" ").length>400,
    "Definition example lacks mathematical reasoning: "+definition.title);
}
for(const result of results){
  assert.ok(result.statement.length>=70,"Missing precise theorem hypotheses: "+result.title);
  assert.ok(result.proof?.length>=3,"Missing full proof: "+result.title);
  assert.ok(result.proof.at(-1).includes("\\square"),"Missing proof closure: "+result.title);
}
for(const example of lesson.examples){
  assert.ok(example.problem.length>60,"Missing concrete worked question: "+example.title);
  assert.ok(example.solution.join(" ").length>400,"Worked solution too abbreviated: "+example.title);
}
for(const exercise of lesson.exercises){
  assert.ok(exercise.answer.length>350,"Exercise requires full reasoning: "+exercise.prompt);
  assert.ok(!/jawaban yang baik|contoh harus|jelaskan secara umum/i.test(exercise.answer),
    "Generic rubric answer found");
}
const continuity=results.find(x=>x.title==="Karakterisasi Kontinuitas melalui Barisan");
assert.ok(continuity?.proof.join(" ").includes("\\Rightarrow"));
assert.ok(continuity?.proof.join(" ").includes("\\Leftarrow"));
assert.ok(continuity?.proof.join(" ").includes("1/n"),
  "Reverse sequential-continuity proof must construct a sequence");
const discrete=(a,b)=>a===b?0:1;
const euclidean=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
const maximum=(a,b)=>Math.max(Math.abs(a[0]-b[0]),Math.abs(a[1]-b[1]));
const grid=[];
for(let x=-2;x<=2;x++)for(let y=-2;y<=2;y++)grid.push([x,y]);
for(const d of [euclidean,maximum]){
  for(const a of grid)for(const b of grid)for(const c of grid){
    assert.ok(d(a,c)<=d(a,b)+d(b,c)+1e-12,"Metric triangle inequality regression");
  }
}
for(const a of ["a","b","c"])for(const b of ["a","b","c"])for(const c of ["a","b","c"]){
  assert.ok(discrete(a,c)<=discrete(a,b)+discrete(b,c));
}
const r=1.5;
assert.ok(maximum([1,1],[0,0])<r);
assert.ok(!(maximum([r,0],[0,0])<r),"Boundary of open ball must be excluded");
assert.ok(!(euclidean([1.1,1.1],[0,0])<r));
assert.ok(maximum([1.1,1.1],[0,0])<r);
assert.ok((0-2)**2 > (0-1)**2+(1-2)**2,
  "Squared Euclidean distance must fail the triangle inequality");
for(let n=1;n<=10;n++){
  const q=Math.floor(10**n*Math.SQRT2)/10**n;
  assert.ok(Math.abs(q-Math.SQRT2)<10**(-n)+1e-14,
    "Rational truncations must approach sqrt(2)");
}
for(let n=1;n<=100;n++){
  let tail=0;
  for(let k=n+1;k<=2*n;k++)tail+=1/k;
  assert.ok(tail>=0.5-1e-12,"Harmonic sequence is not Cauchy");
}
for(let x=-3;x<=3;x+=0.25){
  assert.ok(Math.abs(2*x-2)<=2*Math.abs(x-1)+1e-12);
}
console.log("Metric-space content audit PASS:",JSON.stringify({
  definitions:definitions.length,results:results.length,
  examples:lesson.examples.length,exercises:lesson.exercises.length,
  metricTriples:2*grid.length**3,visualization:"Euclidean and maximum open balls"
}));
