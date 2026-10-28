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

const lesson=evaluate(read("data/supremum-applications-content.ts")).supremumApplicationsContent;
assert.ok(lesson,"The dedicated lesson must be exported");
const definitions=lesson.formal.filter(item=>item.kind==="definition");
const results=lesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(definitions.length,5,"Five meaningful definitions required");
assert.equal(results.length,8,"Eight substantive proved results required");
assert.equal(lesson.examples.length,8,"Eight worked examples required");
assert.equal(lesson.exercises.length,8,"Eight complete exercises required");
assert.ok(lesson.intro.length>=5&&lesson.intro.every(p=>p.length>=110),
  "The introduction must develop the actual mathematical problem");
for(const definition of definitions){
  const example=lesson.examples.find(item=>item.forDefinition===definition.title);
  assert.ok(example,"Definition lacks a directly linked example: "+definition.title);
  assert.ok(example.solution.length>=3,"Linked example needs stepwise reasoning: "+definition.title);
}
for(const item of results){
  assert.ok(item.proof?.length>=2,"Unproved result: "+item.title);
  assert.ok(item.proof.join(" ").length>=280,"Proof needs mathematical detail: "+item.title);
  assert.ok(item.explanation?.length>=90,"Formal result lacks conceptual interpretation: "+item.title);
}
for(const example of lesson.examples){
  assert.ok(example.problem.length>=70,"Example must pose a concrete problem");
  assert.ok(example.solution.length>=3&&example.conclusion?.length>25,
    "Worked example must include reasoning and a conclusion");
}
for(const exercise of lesson.exercises){
  assert.ok(exercise.prompt.length>=80,"Exercise question too short");
  assert.ok(exercise.answer.length>=300,"Exercise answer lacks full reasoning");
}
for(const required of [
  "Sifat Archimedean Bilangan Real",
  "Keberadaan dan Ketunggalan Fungsi Lantai",
  "Kerapatan Bilangan Rasional",
  "Keberadaan dan Ketunggalan Akar Kuadrat Positif",
  "Irasionalitas Akar Dua",
  "Kerapatan Bilangan Irasional",
  "Ketelitian Metode Pembagian Dua untuk Akar"
])assert.ok(results.some(item=>item.title===required),"Missing mathematical result: "+required);
const proofText=results.map(item=>item.proof.join(" ")).join("\n");
for(const condition of [
  "u-1", "n+1>u", "nx<m", "x+h", "x-h", "p^2=2q^2", "x-\\sqrt2",
  "M/2^k"
])assert.ok(proofText.includes(condition),"Mathematical argument missing: "+condition);

const code=read("lib/supremum-explorer.ts");
const compiled=ts.transpileModule(code,{compilerOptions:{
  module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022
}}).outputText;
const m={exports:{}};
new Function("module","exports",compiled)(m,m.exports);
const {naturalWitness,rationalWitness,sqrtBracket,densityIntervals}=m.exports;

for(let i=0;i<=100;i++){
  const x=i/10;
  const n=naturalWitness(x);
  assert.ok(Number.isInteger(n)&&n>=1&&n>x);
}
let densityTests=0;
for(let i=-30;i<30;i++)for(let j=i+1;j<=30;j++){
  const x=i/7,y=j/7;
  const {m,n,value}=rationalWitness(x,y);
  assert.ok(Number.isInteger(m)&&Number.isInteger(n)&&n>0);
  assert.ok(x<value&&value<y,"Density witness failed: "+x+","+y);
  assert.ok(n*(y-x)>1,"Denominator does not meet constructive proof bound");
  densityTests++;
}
for(const preset of densityIntervals){
  const {m,n,value}=rationalWitness(preset.x,preset.y);
  assert.ok(preset.x<value&&value<preset.y,"SVG preset has invalid witness: "+preset.label);
  assert.ok(n*(preset.y-preset.x)>1,"SVG preset violates proof hypothesis");
  assert.equal(value,m/n);
}
let bracketTests=0;
for(const a of [0.25,0.5,1,2,3,4,5,9,10,16,20]){
  for(let k=0;k<=12;k++){
    const {lower,upper,initialUpper}=sqrtBracket(a,k);
    const root=Math.sqrt(a);
    assert.ok(lower<=root+1e-12&&root<=upper+1e-12,"Root outside interval");
    assert.ok(lower>=0&&lower<=upper,"Invalid nonnegative interval");
    assert.ok(upper-lower<=initialUpper/(2**k)+1e-12,"Bisection width bound violated");
    assert.ok(lower*lower<=a+1e-10&&upper*upper>=a-1e-10,"Square bounds violated");
    bracketTests++;
  }
}

const registry=read("data/book-section-content.ts");
assert.match(registry,/import \{ supremumApplicationsContent \}/);
assert.match(registry,/"aplikasi-supremum":supremumApplicationsContent/);
const page=read("components/BookSectionPage.tsx");
assert.match(page,/import \{ SupremumApplicationsLab \}/);
assert.equal((page.match(/section\.slug==="aplikasi-supremum"/g)||[]).length,2,
  "SVG must appear in both introduction and visualization section");
const visual=read("components/SupremumApplicationsLab.tsx");
for(const pattern of [
  /<svg/,/role:"img"/,/aria-label/,/aria-pressed/,/type="range"/,
  /rationalWitness/,/sqrtBracket/,/naturalWitness/,/rootFraction/
])assert.match(visual,pattern,"SVG interaction or accessibility missing");
const publicContent=read("lib/public-content.ts");
assert.doesNotMatch(publicContent,/"aplikasi-supremum"/,"Lesson must remain publicly visible");

console.log("Supremum applications audit passed: 5 linked definitions, 8 proved results, 8 worked examples, 8 full solutions, "+
  densityTests+" rational witnesses, "+bracketTests+" root brackets, and three interactive SVG modes.");
