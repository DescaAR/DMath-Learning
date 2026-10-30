import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

const root=process.cwd();
const nativeRequire=createRequire(import.meta.url);
const moduleCache=new Map();

function resolveLocal(specifier){
  const local=specifier.startsWith("@/")
    ? specifier.slice(2)
    : specifier.startsWith("./")||specifier.startsWith("../")
      ? specifier
      : null;
  if(!local)return null;
  const absolute=path.resolve(root,local);
  for(const candidate of [absolute,absolute+".ts",absolute+".tsx",path.join(absolute,"index.ts")]){
    if(fs.existsSync(candidate)&&fs.statSync(candidate).isFile())return candidate;
  }
  throw new Error("Missing local source: "+specifier);
}

function loadSource(filename){
  const absolute=path.resolve(filename);
  if(moduleCache.has(absolute))return moduleCache.get(absolute).exports;
  const module={exports:{}};
  moduleCache.set(absolute,module);
  const original=fs.readFileSync(absolute,"utf8");
  const compiled=ts.transpileModule(original,{compilerOptions:{
    module:ts.ModuleKind.CommonJS,
    target:ts.ScriptTarget.ES2022,
    jsx:ts.JsxEmit.ReactJSX,
    esModuleInterop:true
  },fileName:absolute}).outputText;
  const sourceRequire=(specifier)=>{
    if(specifier.startsWith("@/")){
      const local=resolveLocal(specifier);
      return loadSource(local);
    }
    if(specifier.startsWith("./")||specifier.startsWith("../")){
      const fromFile=path.resolve(path.dirname(absolute),specifier);
      const localFile=[fromFile,fromFile+".ts",fromFile+".tsx",path.join(fromFile,"index.ts")]
        .find(candidate=>fs.existsSync(candidate)&&fs.statSync(candidate).isFile());
      if(!localFile)throw new Error("Missing relative source: "+specifier+" imported by "+absolute);
      return loadSource(localFile);
    }
    return nativeRequire(specifier);
  };
  const execute=new Function("require","module","exports",compiled);
  execute(sourceRequire,module,module.exports);
  return module.exports;
}


const assert=nativeRequire("node:assert/strict");
const {bookSubjects}=loadSource(path.join(root,"data/book-curricula.ts"));
const {getBookSectionContent}=loadSource(path.join(root,"data/book-section-content.ts"));
const normalize=s=>String(s??"").replace(/\s+/g," ").trim();

// Floating-point: actual rendered content, direct definition examples, and independent exact identities.
{
  const lesson=getBookSectionContent("num-floating-point");
  assert.ok(lesson,"Authored floating-point lesson is missing");
  const defs=lesson.formal.filter(x=>x.kind==="definition");
  const results=lesson.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
  assert.equal(defs.length,5);
  assert.equal(results.length,6);
  assert.equal(lesson.examples.length,8);
  assert.equal(lesson.exercises.length,8);
  for(const item of defs)assert.ok(lesson.examples.some(x=>x.forDefinition===item.title),"Floating-point definition without linked example: "+item.title);
  for(const item of results){
    assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>350,"Floating-point proof too brief: "+item.title);
    assert.ok(item.proof.at(-1).includes("\\square"),"Floating-point proof lacks ending: "+item.title);
  }
  for(const example of lesson.examples)assert.ok(normalize(example.solution.join(" ")).length>320,"Floating-point example incomplete: "+example.title);
  for(const exercise of lesson.exercises)assert.ok(normalize(exercise.answer).length>380 && !/Jawaban yang baik|Contoh harus/.test(exercise.answer),"Floating-point exercise is generic");
  const u=0.5*Math.pow(10,-2);
  assert.equal(u,0.005);
  assert.equal((1.234+1.233)/0.001,2467);
  const smallRoot=2/(1000+Math.sqrt(999996));
  assert.ok(Math.abs(smallRoot-0.001000001000002)<1e-11);
  assert.ok(Math.abs((smallRoot*(1000-smallRoot))-1)<1e-9);
  assert.ok(Math.abs((1.02**3)-1.061208)<1e-12);
  assert.ok(0.01/0.99>0.001);
}

// Newton optimization: inspect the actual rendered lesson and verify mathematical identities.
{
  const lesson=getBookSectionContent("or-newton-opt");
  assert.ok(lesson,"Authored Newton optimization lesson is missing");
  const defs=lesson.formal.filter(item=>item.kind==="definition");
  const results=lesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
  assert.equal(defs.length,4);
  assert.equal(results.length,6);
  assert.equal(lesson.examples.length,8);
  assert.equal(lesson.exercises.length,8);
  for(const item of defs){
    assert.ok(lesson.examples.some(example=>example.forDefinition===item.title),
      "Newton definition lacks a directly associated worked example: "+item.title);
  }
  for(const item of results){
    assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>450,
      "Newton proof requires full mathematical steps: "+item.title);
    assert.ok(item.proof.some(step=>step.includes("\\square")),
      "Newton proof lacks a closing marker: "+item.title);
  }
  for(const item of lesson.examples){
    assert.ok(item.solution.length>=3 && normalize(item.solution.join(" ")).length>350,
      "Newton example is incomplete: "+item.title);
  }
  for(const item of lesson.exercises){
    assert.ok(normalize(item.answer).length>330 &&
      !/jawaban yang baik|contoh harus|susun satu soal|kesimpulan menyatakan struktur/i.test(item.answer),
      "Newton exercise is generic or insufficient: "+item.prompt);
  }
  const curriculum=bookSubjects.find(subject=>subject.slug==="riset-operasi");
  assert.ok(curriculum?.chapters.some(ch=>ch.sections.some(sec=>sec.slug==="or-newton-opt")),
    "Newton optimization must remain reachable through the public curriculum");
  const f=x=>x**4-4*x*x,df=x=>4*x**3-8*x,d2f=x=>12*x*x-8;
  const p=-df(1)/d2f(1);
  assert.equal(p,1);
  assert.equal(df(1)*p,-4);
  const armijo=(alpha)=>f(1+alpha*p)<=f(1)+0.25*alpha*df(1)*p;
  assert.equal(armijo(1),false,"Full Newton step must fail Armijo");
  assert.equal(armijo(0.5),true,"Half Newton step must pass Armijo");
  assert.equal(f(1.5),-63/16);
  const q=x=>3*x*x-12*x+7;
  const qGrad=x=>6*x-12;
  assert.equal(qGrad(0),-12);
  assert.equal(0-qGrad(0)/6,2);
  assert.equal(q(2),-5);
  for(const x of [-3,-1,0,1,2,5]){
    assert.equal(q(x)-q(2),3*(x-2)**2);
  }
  for(let k=0;k<10;k++){
    const x=3*(2/3)**k;
    const next=x-(4*x**3)/(12*x*x);
    assert.ok(Math.abs(next-3*(2/3)**(k+1))<1e-12);
  }
  const hessian=[[2,0],[0,8]],g=[2,-4],direction=[-1,0.5];
  assert.equal(g[0]*direction[0]+g[1]*direction[1],-4);
  assert.equal(2*direction[0]**2+8*direction[1]**2,4);
  assert.ok(hessian[0][0]>0&&hessian[1][1]>0);
}



{
// Regression: statistical independence must be a fully solved, non-rubric public lesson.
const independenceLesson=getBookSectionContent("stm-independence");
assert.ok(independenceLesson,"Statistical independence lesson must be registered");
const independenceDefinitions=independenceLesson.formal.filter(item=>item.kind==="definition");
const independenceResults=independenceLesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(independenceDefinitions.length,4,"Retain four precise independence definitions");
assert.equal(independenceResults.length,8,"Retain eight proved independence results");
assert.equal(independenceLesson.examples.length,8,"Retain eight worked independence examples");
assert.equal(independenceLesson.exercises.length,8,"Retain eight authored independence exercises");
for(const definition of independenceDefinitions){
  assert.ok(independenceLesson.examples.some(example=>example.forDefinition===definition.title),
    "Independence definition needs directly associated example: "+definition.title);
}
for(const item of independenceResults){
  assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>350,
    "Independence proof incomplete: "+item.title);
  assert.ok(item.proof.some(step=>step.includes("\\square")),
    "Independence proof missing end marker: "+item.title);
}
for(const example of independenceLesson.examples){
  assert.ok(normalize(example.solution.join(" ")).length>300,
    "Independence worked example needs mathematical steps: "+example.title);
}
for(const exercise of independenceLesson.exercises){
  assert.ok(normalize(exercise.answer).length>350 &&
    !/jawaban yang baik|contoh harus|ditetapkan data awal|kesimpulan menyatakan struktur/i.test(exercise.answer),
    "Independence exercise still contains rubric: "+exercise.prompt.slice(0,50));
}
const fourBits=[[0,0],[0,1],[1,0],[1,1]];
const count=predicate=>fourBits.filter(([u,v])=>predicate(u,v)).length/4;
const events=[(u,v)=>u===1,(u,v)=>v===1,(u,v)=>u!==v];
for(let i=0;i<3;i++){
  assert.equal(count(events[i]),1/2);
  for(let j=i+1;j<3;j++){
    assert.equal(count((u,v)=>events[i](u,v)&&events[j](u,v)),1/4,
      "XOR events must be pairwise independent");
  }
}
assert.equal(count((u,v)=>events.every(event=>event(u,v))),0,
  "XOR triple intersection must be empty");
assert.notEqual(count((u,v)=>events.every(event=>event(u,v))),1/8,
  "Pairwise independence must not be confused with mutual independence");
const xs=[-1,0,1];
const meanX=xs.reduce((sum,x)=>sum+x,0)/3;
const meanY=xs.reduce((sum,x)=>sum+x*x,0)/3;
const meanXY=xs.reduce((sum,x)=>sum+x*x*x,0)/3;
assert.equal(meanXY-meanX*meanY,0,"Covariance counterexample must have zero covariance");
assert.notEqual(1/3,(1/3)*(1/3),
  "X and X squared must fail joint mass factorization");
const choose=(n,k)=>{let v=1;for(let j=1;j<=k;j++)v=v*(n-j+1)/j;return v;};
const p=1/3;
const binomial=k=>choose(3,k)*p**k*(1-p)**(3-k);
assert.ok(Math.abs([0,1,2,3].reduce((sum,k)=>sum+binomial(k),0)-1)<1e-12);
assert.ok(Math.abs(binomial(2)-2/9)<1e-12);
assert.ok(Math.abs((1-binomial(0))-19/27)<1e-12);
assert.equal(count((u,v)=>u===1&&v===1),1/4);

}

// Regression: LP duality must use the authored lesson, not generated rubric responses.
const dualLesson=getBookSectionContent("or-dualitas");
assert.ok(dualLesson,"Missing authored linear-programming duality lesson");
const dualDefinitions=dualLesson.formal.filter(item=>item.kind==="definition");
const dualProofs=dualLesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(dualDefinitions.length,4,"LP duality definitions must be retained");
assert.equal(dualProofs.length,7,"LP duality formal results must be retained");
assert.equal(dualLesson.examples.length,8,"LP duality needs eight concrete worked examples");
assert.ok(dualLesson.exercises.length>=9,"Preserve the curated duality question and eight authored exercises");
for(const definition of dualDefinitions){
  assert.ok(dualLesson.examples.some(example=>example.forDefinition===definition.title),
    "Missing immediately linked example for LP duality definition "+definition.title);
}
for(const theorem of dualProofs){
  assert.ok(theorem.proof?.length>=3 && normalize(theorem.proof.join(" ")).length>300,
    "LP duality proof is too incomplete: "+theorem.title);
}
for(const example of dualLesson.examples){
  assert.ok(normalize(example.solution.join(" ")).length>450,
    "LP duality example needs detailed mathematical reasoning: "+example.title);
}
for(const exercise of dualLesson.exercises){
  assert.ok(normalize(exercise.answer).length>250 &&
    !/jawaban yang baik|contoh harus|soal yang baik|susun satu soal/i.test(exercise.answer),
    "LP duality exercise contains rubric or a missing solution: "+exercise.prompt.slice(0,45));
}
for(const [x,z,u,v] of [[2,2,1,1],[1,2,1,1],[2,2,0,2],[1,2,2,1]]){
  const s1=4-x-z,s2=6-2*x-z,r1=u+2*v-3,r2=u+v-2;
  assert.ok([x,z,u,v,s1,s2,r1,r2].every(value=>value>=0));
  const gap=4*u+6*v-3*x-2*z;
  assert.equal(gap,u*s1+v*s2+x*r1+z*r2,
    "LP duality gap identity fails for a feasible pair");
  assert.ok(gap>=0,"Weak duality fails for a feasible pair");
}
for(let delta=-1;delta<=2;delta+=0.25){
  const x=2-delta,z=2+2*delta;
  assert.ok(x>=0 && z>=0);
  assert.ok(Math.abs((3*x+2*z)-(10+delta))<1e-9);
}

// Regression: authored numerical-analysis fixed-point lesson, not the generated rubric.
const fixedPointLesson=getBookSectionContent("num-fixed-point");
assert.ok(fixedPointLesson,"Missing fixed-point iteration content");
const fpDefinitions=fixedPointLesson.formal.filter(item=>item.kind==="definition");
const fpResults=fixedPointLesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(fpDefinitions.length,4);
assert.equal(fpResults.length,7);
assert.equal(fixedPointLesson.examples.length,8);
assert.equal(fixedPointLesson.exercises.length,8);
for(const definition of fpDefinitions){
  assert.ok(fixedPointLesson.examples.some(example=>example.forDefinition===definition.title),
    "Fixed-point definition without a directly linked example: "+definition.title);
}
for(const result of fpResults){
  assert.ok(result.proof?.length>=3 && normalize(result.proof.join(" ")).length>300,
    "Fixed-point theorem without a detailed proof: "+result.title);
}
for(const exercise of fixedPointLesson.exercises){
  assert.ok(normalize(exercise.answer).length>450 &&
    !/jawaban yang baik|contoh harus|soal yang baik|susun satu soal/i.test(exercise.answer),
    "Fixed-point exercise has a generic or brief solution: "+exercise.prompt);
}
const fpG=x=>(x+2)/3;
for(let i=0;i<=20;i++){
  const x=2*i/20;
  assert.ok(fpG(x)>=0&&fpG(x)<=2,"Fixed-point map leaves interval");
  for(let j=0;j<=20;j++){
    const y=2*j/20;
    assert.ok(Math.abs(fpG(x)-fpG(y))<=Math.abs(x-y)/3+1e-12,
      "Fixed-point contraction constant mismatch");
  }
}
let fpIter=0;
for(let n=1;n<=8;n++){
  fpIter=fpG(fpIter);
  assert.ok(Math.abs(fpIter-(1-Math.pow(3,-n)))<1e-12,
    "Fixed-point iteration exact formula mismatch at n="+n);
}
assert.equal(3**6<1000&&3**7>1000,true,"Fixed-point stopping criterion regression");
const fpSqrtG=x=>x-(x*x-2)/3;
assert.ok(Math.abs(fpSqrtG(1)-4/3)<1e-12);
assert.ok(Math.abs(fpSqrtG(4/3)-38/27)<1e-12);
for(let i=0;i<=100;i++){
  const x=1+i/100;
  assert.ok(fpSqrtG(x)>=1&&fpSqrtG(x)<=2,"Fixed-point sqrt map leaves interval");
}


// Regression for the actual public number-theory lesson and its derived problem bank.
// These checks detect missing proofs, generic rubrics, and elementary arithmetic errors.
const primeLesson=getBookSectionContent("nt-primes");
assert.ok(primeLesson,"Missing authored prime-factorization lesson");
const primeDefinitions=primeLesson.formal.filter(item=>item.kind==="definition");
const primeResults=primeLesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(primeDefinitions.length,4);
assert.equal(primeResults.length,7);
assert.ok(primeLesson.examples.length>=8);
assert.ok(primeLesson.exercises.length>=8);
for(const definition of primeDefinitions){
  assert.ok(primeLesson.examples.some(example=>example.forDefinition===definition.title),
    "Number theory definition missing its linked example: "+definition.title);
}
for(const item of primeResults){
  assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>300,
    "Number theory result missing a full proof: "+item.title);
}
for(const item of primeLesson.exercises){
  assert.ok(normalize(item.answer).length>=450 &&
    !/jawaban yang baik|contoh harus|susun satu soal|soal harus/i.test(item.answer),
    "Number theory exercise must contain a concrete solution: "+item.prompt);
}
assert.ok(primeLesson.exercises.some(x=>x.prompt.includes("P-07")) &&
  primeLesson.exercises.some(x=>x.prompt.includes("P-08")),
  "Missing higher-order number theory proofs");
const isPrimeForTest=n=>{
  if(n<2)return false;
  for(let d=2;d*d<=n;d++)if(n%d===0)return false;
  return true;
};
for(let n=2;n<=600;n++){
  const hasSmallPrimeDivisor=Array.from({length:Math.floor(Math.sqrt(n))-1},
    (_,i)=>i+2).some(p=>isPrimeForTest(p)&&n%p===0);
  assert.equal(isPrimeForTest(n),!hasSmallPrimeDivisor,
    "Primality square-root criterion mismatch for "+n);
}
const divisorCount=n=>{
  let count=0;
  for(let d=1;d<=n;d++)if(n%d===0)count++;
  return count;
};
assert.equal(divisorCount(360),24);
assert.equal(divisorCount(540),24);
assert.equal(divisorCount(60),12);
assert.ok(Array.from({length:59},(_,i)=>i+1).every(n=>divisorCount(n)!==12),
  "60 must be the smallest positive integer with 12 divisors");
assert.equal(2*3**2*7*11,1386);
assert.equal(19*23,437);
assert.equal(120*2520,360*840);
const publicNumberTheory=bookSubjects.find(subject=>subject.slug==="teori-bilangan");
assert.ok(publicNumberTheory?.chapters.some(chapter=>chapter.sections.some(section=>section.slug==="nt-primes")),
  "Prime-factorization lesson is not in the public university curriculum");
const numberTheoryCatalog=fs.readFileSync(path.join(root,"data/site-data.ts"),"utf8");
assert.ok(numberTheoryCatalog.includes('subject: "Teori Bilangan"') &&
  numberTheoryCatalog.includes('/materi/teori-bilangan/nt-primes'),
  "Prime-factorization lesson is not linked from the 26-field public catalog");
const publicVisibility=loadSource(path.join(root,"lib/public-content.ts"));
assert.ok(publicVisibility.isPublicBookSubjectSlug("teori-bilangan") &&
  publicVisibility.isPublicAcademicLevel(publicNumberTheory.level),
  "Prime-factorization course is hidden by public visibility filters");
// Regression for the public combinatorics inclusion–exclusion lesson and
// its automatically derived subject-problem bank. Mathematical tests below
// enumerate small finite spaces rather than trusting answer length alone.
const ieLesson=getBookSectionContent("komb-inclusion-exclusion");
assert.ok(ieLesson,"Missing authored inclusion–exclusion lesson");
const ieDefinitions=ieLesson.formal.filter(item=>item.kind==="definition");
const ieResults=ieLesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(ieDefinitions.length,4);
assert.equal(ieResults.length,6);
assert.equal(ieLesson.examples.length,8);
assert.equal(ieLesson.exercises.length,8);
for(const item of ieDefinitions){
  assert.ok(ieLesson.examples.some(ex=>ex.forDefinition===item.title),
    "Inclusion–exclusion definition lacks its linked example: "+item.title);
}
for(const item of ieResults){
  assert.ok(item.proof?.length>=2 && normalize(item.proof.join(" ")).length>=280,
    "Inclusion–exclusion theorem lacks an adequate proof: "+item.title);
}
for(const exercise of ieLesson.exercises){
  assert.ok(normalize(exercise.answer).length>=450 &&
    !/jawaban yang baik|contoh harus|susun satu soal|soal harus/i.test(exercise.answer),
    "Inclusion–exclusion exercise still has a rubric or missing solution: "+exercise.prompt);
}
const ieBinomial=(n,k)=>{
  let result=1;
  for(let j=1;j<=k;j++)result=result*(n-j+1)/j;
  return result;
};
const ieFactorial=n=>Array.from({length:n},(_,i)=>i+1).reduce((a,b)=>a*b,1);
for(let n=1;n<=5;n++){
  const masks=Array.from({length:n},(_,i)=>i);
  for(let a=0;a<2**n;a++)for(let b=0;b<2**n;b++)for(let c=0;c<2**n;c++){
    const count=mask=>masks.filter(i=>(mask&(1<<i))!==0).length;
    const union=count(a|b|c);
    const rhs=count(a)+count(b)+count(c)-count(a&b)-count(a&c)-count(b&c)+count(a&b&c);
    assert.equal(union,rhs,"Three-set inclusion–exclusion identity mismatch");
  }
}
const ieDerangements=[1,0,1,2,9,44];
for(let n=0;n<ieDerangements.length;n++){
  const exact=ieFactorial(n)*Array.from({length:n+1},(_,k)=>((-1)**k)/ieFactorial(k)).reduce((a,b)=>a+b,0);
  assert.ok(Math.abs(exact-ieDerangements[n])<1e-8,"Derangement formula mismatch at n="+n);
}
for(let n=1;n<=5;n++)for(let m=1;m<=4;m++){
  const formula=Array.from({length:m+1},(_,k)=>((-1)**k)*ieBinomial(m,k)*(m-k)**n).reduce((a,b)=>a+b,0);
  let brute=0;
  for(let code=0;code<m**n;code++){
    let state=code,used=0;
    for(let j=0;j<n;j++){used|=1<<(state%m);state=Math.floor(state/m);}
    if(used===(1<<m)-1)brute++;
  }
  assert.equal(formula,brute,"Surjection count mismatch at n="+n+", m="+m);
}
assert.equal(Array.from({length:100},(_,i)=>i+1).filter(x=>x%2&&x%3&&x%5).length,26);
assert.equal(Array.from({length:60},(_,i)=>i+1).filter(x=>[2,3,5].filter(d=>x%d===0).length===2).length,14);
assert.equal(Array.from({length:120},(_,i)=>i+1).filter(x=>x%2===0||x%3===0||x%7===0).length,86);

// Source-level regression for the public Peluang lesson. These checks validate
// the rendered registry and a few independent mathematical identities; length
// thresholds remain triage, not a correctness certificate.
const probability=getBookSectionContent("calc-probability");
assert.ok(probability,"Missing authored continuous probability page");
const probabilityDefinitions=probability.formal.filter(item=>item.kind==="definition");
const probabilityResults=probability.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(probabilityDefinitions.length,4);
assert.equal(probabilityResults.length,7);
assert.equal(probability.examples.length,8);
assert.equal(probability.exercises.length,8);
for(const definition of probabilityDefinitions){
  assert.ok(probability.examples.some(ex=>ex.forDefinition===definition.title),
    "Peluang definition without immediate linked worked example: "+definition.title);
}
for(const item of probabilityResults){
  assert.ok((item.proof??[]).length>=2 && normalize(item.proof.join(" ")).length>=300,
    "Peluang formal result without substantive proof: "+item.title);
}
for(const item of probability.exercises){
  assert.ok(normalize(item.answer).length>=300 &&
    !/jawaban yang baik|contoh harus|susun langkah|soal harus/i.test(item.answer),
    "Peluang exercise must have a real solution: "+item.prompt);
}
const probabilityUi=fs.readFileSync(path.join(root,"components/BookSectionPage.tsx"),"utf8");
const probabilityCatalog=fs.readFileSync(path.join(root,"data/site-data.ts"),"utf8");
assert.ok(probabilityUi.includes('section.slug==="calc-probability"?<ProbabilityDensityLab'),
  "Peluang SVG explorer is not rendered");
assert.ok(probabilityCatalog.includes('subject: "Peluang"')&&probabilityCatalog.includes('/materi/kalkulus/calc-probability'),
  "Peluang lesson is missing from the 26-field public catalog");
for(const rate of [0.5,1,2,3])for(const threshold of [0,0.5,1,2,3]){
  const tail=Math.exp(-rate*threshold);
  const cdf=1-Math.exp(-rate*threshold);
  assert.ok(Math.abs(tail+cdf-1)<1e-12,"Exponential CDF/tail mismatch");
}
assert.ok(Math.abs((4/3)-(8/6))<1e-12);
assert.ok(Math.abs((7/9)-((8/9)*(7/8)))<1e-12);
assert.ok(Math.abs((1/9)-(1/(1+2)**2))<1e-12);

// Public Statistika: the exact book-section registry, original examples,
// independent exercises and outlier lab are checked together. Length is only
// a triage signal; the identities below independently check mathematical claims.
const central=getBookSectionContent("sta-central");
assert.ok(central,"Missing authored public Statistika central tendency lesson");
const centralDefinitions=central.formal.filter(x=>x.kind==="definition");
const centralResults=central.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(centralDefinitions.length,4);
assert.equal(centralResults.length,7);
assert.equal(central.examples.length,8);
assert.equal(central.exercises.length,8);
for(const item of centralDefinitions){
  assert.ok(central.examples.some(ex=>ex.forDefinition===item.title),
    "Statistika definition has no immediately linked example: "+item.title);
}
for(const item of centralResults){
  assert.ok(item.proof?.length>=2 && normalize(item.proof.join(" ")).length>=350,
    "Statistika result lacks an adequate proof: "+item.title);
}
for(const item of central.examples){
  assert.ok(normalize(item.solution.join(" ")).length>=380,
    "Statistika worked example needs a substantive solution: "+item.title);
}
for(const item of central.exercises){
  assert.ok(normalize(item.answer).length>=300 &&
    !/jawaban yang baik|contoh harus|soal harus|susun langkah/i.test(item.answer),
    "Statistika exercise needs a concrete mathematical answer: "+item.prompt);
}
const centralUi=fs.readFileSync(path.join(root,"components/BookSectionPage.tsx"),"utf8");
const centralLab=fs.readFileSync(path.join(root,"components/CentralTendencyLab.tsx"),"utf8");
const centralCatalog=fs.readFileSync(path.join(root,"data/site-data.ts"),"utf8");
assert.match(centralUi,/section\.slug==="sta-central"\?<CentralTendencyLab/);
assert.match(centralLab,/aria-labelledby/);
assert.match(centralCatalog,/subject: "Statistika"[\s\S]{0,400}sta-central/);
const close=(a,b)=>Math.abs(a-b)<1e-8;
for(let n=1;n<=8;n++)for(let seed=0;seed<25;seed++){
  const xs=Array.from({length:n},(_,i)=>((i*7+seed*3)%23)-11).sort((a,b)=>a-b);
  const mean=xs.reduce((a,b)=>a+b,0)/n;
  const sq=t=>xs.reduce((sum,x)=>sum+(x-t)**2,0);
  const abs=t=>xs.reduce((sum,x)=>sum+Math.abs(x-t),0);
  const med=n%2?xs[(n-1)/2]:(xs[n/2-1]+xs[n/2])/2;
  for(const t of [-20,-10,-3,0,4,10,20]){
    assert.ok(close(sq(t)-sq(mean),n*(t-mean)**2),"Mean least-squares identity");
    assert.ok(abs(med)<=abs(t)+1e-8,"Median must minimize absolute deviations");
  }
  const a=-3,b=5;
  const ys=xs.map(x=>a*x+b).sort((x,y)=>x-y);
  const medY=n%2?ys[(n-1)/2]:(ys[n/2-1]+ys[n/2])/2;
  assert.ok(close(medY,a*med+b),"Median must be affine equivariant for negative scale");
}
for(let last=6;last<=106;last+=5){
  const xs=[2,3,4,5,last];
  const mean=xs.reduce((a,b)=>a+b,0)/5;
  assert.ok(close(mean,(14+last)/5));
  assert.equal(xs[2],4);
  assert.equal((xs[1]+xs[2]+xs[3])/3,4);
}

// Public Pemodelan Matematika: inspect the exact rendered source, not the
// generated operations-research rubric. These checks cover content structure
// and independent numerical identities; length alone is never correctness.
const modeling=getBookSectionContent("or-model-deterministik-stokastik");
assert.ok(modeling,"Missing authored mathematical modeling page");
const modelingDefinitions=modeling.formal.filter(item=>item.kind==="definition");
const modelingResults=modeling.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(modelingDefinitions.length,4);
assert.equal(modelingResults.length,7);
assert.equal(modeling.examples.length,8);
assert.equal(modeling.exercises.length,8);
for(const definition of modelingDefinitions){
  assert.ok(modeling.examples.some(example=>example.forDefinition===definition.title),
    "Modeling definition lacks an immediately linked example: "+definition.title);
}
for(const result of modelingResults){
  assert.ok(result.proof?.length>=2 && normalize(result.proof.join(" ")).length>=350,
    "Modeling formal result lacks a substantial proof: "+result.title);
}
for(const example of modeling.examples){
  assert.ok(normalize(example.solution.join(" ")).length>=380,
    "Modeling worked example is abbreviated: "+example.title);
}
for(const exercise of modeling.exercises){
  assert.ok(normalize(exercise.answer).length>=450 &&
    !/jawaban yang baik|contoh harus|susun langkah|soal harus|pembuktian mengikuti/i.test(exercise.answer),
    "Modeling exercise is a generic rubric or abbreviated: "+exercise.prompt);
}
const modelingUi=fs.readFileSync(path.join(root,"components/BookSectionPage.tsx"),"utf8");
const modelingLab=fs.readFileSync(path.join(root,"components/ModelingScenariosLab.tsx"),"utf8");
const modelingCatalog=fs.readFileSync(path.join(root,"data/site-data.ts"),"utf8");
assert.ok(modelingUi.includes('section.slug==="or-model-deterministik-stokastik"?<ModelingScenariosLab'),
  "Modeling scenario SVG is not rendered");
assert.match(modelingLab,/aria-labelledby/);
assert.match(modelingCatalog,/subject: "Pemodelan Matematika"[\s\S]{0,400}or-model-deterministik-stokastik/);
const modelLoss=(q,d)=>2*Math.max(q-d,0)+5*Math.max(d-q,0);
const modelRisk=q=>0.4*modelLoss(q,4)+0.6*modelLoss(q,8);
assert.ok(Math.abs(modelRisk(6.4)-6.72)<1e-10);
assert.ok(Math.abs(modelRisk(8)-3.2)<1e-10);
assert.ok(Math.abs(modelRisk(4)-12)<1e-10);
for(let i=-50;i<=150;i++){
  const q=i/10;
  assert.ok(modelRisk(q)>=3.2-1e-10,"Modeling critical-fractile minimizer fails");
}
for(const q of [4,5,6.4,8,10]){
  assert.ok(modelRisk(q)>=modelLoss(q,6.4)-1e-10,
    "Convex-loss Jensen numerical regression fails");
}
assert.ok(Math.abs(0.4*4+0.6*8-6.4)<1e-10);
assert.ok(Math.abs(0.4*(4-6.4)**2+0.6*(8-6.4)**2-3.84)<1e-10);

const markers=[
  /jawaban yang baik/i,
  /contoh harus memperlihatkan/i,
  /bukti serupa/i,
  /pembuktian mengikuti/i,
  /perbandingan harus menyebut/i,
  /metode numerik hanya memiliki/i,
  /susun langkah/i,
  /dituliskan kesimpulan beserta alasan/i,
  /struktur argumen dimulai/i,
];
const likelyUnsolved=s=>markers.some(pattern=>pattern.test(normalize(s)));
const concerns=[],subjects=[];
for(const subject of bookSubjects){
  const totals={pages:0,exercises:0,shortExercises:0,genericExercises:0,workedExamples:0,shortExamples:0,formalResults:0,shortProofs:0};
  for(const chapter of subject.chapters)for(const section of chapter.sections){
    totals.pages++;
    const content=getBookSectionContent(section.slug);
    if(!content){concerns.push({field:subject.title,slug:section.slug,type:"missing-content",url:"/materi/"+subject.slug+"/"+section.slug});continue;}
    const url="/materi/"+subject.slug+"/"+section.slug;
    for(const [idx,ex] of content.exercises.entries()){
      totals.exercises++;
      const answer=normalize(ex.answer);
      const generic=likelyUnsolved(answer);
      if(answer.length<300||generic){
        if(answer.length<300)totals.shortExercises++;
        if(generic)totals.genericExercises++;
        concerns.push({field:subject.title,slug:section.slug,type:generic?"generic-exercise-answer":"short-exercise-answer",url,index:idx+1,textLength:answer.length,prompt:normalize(ex.prompt).slice(0,220)});
      }
    }
    for(const [idx,ex] of content.examples.entries()){
      totals.workedExamples++;
      const answer=normalize((ex.solution??[]).join(" ")+(ex.conclusion?" "+ex.conclusion:""));
      if(answer.length<380){
        totals.shortExamples++;
        concerns.push({field:subject.title,slug:section.slug,type:"short-worked-example",url,index:idx+1,textLength:answer.length,title:normalize(ex.title)});
      }
    }
    for(const item of content.formal.filter(f=>["lemma","theorem","proposition","corollary"].includes(f.kind))){
      totals.formalResults++;
      const length=normalize(item.proof?.join(" ")).length;
      if(length<250){
        totals.shortProofs++;
        concerns.push({field:subject.title,slug:section.slug,type:"brief-or-missing-proof",url,textLength:length,title:normalize(item.title)});
      }
    }
  }
  subjects.push({subject:subject.title,slug:subject.slug,...totals});
}
const checked=[
  ["himpunan-dan-fungsi","exercise","Buktikan $A"],
  ["himpunan-dan-fungsi","exercise","Jika $f$ injektif"],
  ["himpunan-dan-fungsi","exercise","Berikan contoh fungsi yang surjektif"],
  ["induksi-matematika","exercise","Buktikan $1+3+"],
  ["induksi-matematika","exercise","Buktikan $2^n"],
  ["induksi-matematika","exercise","Jelaskan kesalahan induksi"],
  ["konvergensi-absolut","exercise","Apakah $"],
  ["konvergensi-absolut","exercise","Jika $"],
  ["konvergensi-absolut","exercise","Mengapa absolute convergence"],
  ["sta-probability-laws","example","Contoh Probabilitas Bersyarat"],
  ["sta-simple-regression","example","Contoh Model Regresi Linear"],
  ["stm-prob-axioms","example","Contoh Ukuran Probabilitas"],
  ["md-ekuivalensi-logika","example","Contoh Ekuivalensi Logika"],
  ["ks-martingale","example","Martingale Random Walk Dua Langkah"],
  ["ks-brownian-definition","example","Contoh Increment Brownian Motion"],
  ["tup-measures","example","Counting Measure"],
  ["tup-classes-sets","example","Sigma-Algebra pada Himpunan Tiga Elemen"],
  ["tup-outer-measure","example","Outer Measure dari Panjang"],
  ["num-galat-absolut-relatif","example","Galat Absolut Pecahan"],
  ["num-galat-absolut-relatif","example","Galat Relatif dan Nilai Acuan Nol"],
  ["num-galat-absolut-relatif","example","Pembatalan pada Pengurangan"],
  ["num-galat-absolut-relatif","example","Galat Pembagian dan Syarat Penyebut"],
  ["tup-extension","example","Panjang Interval sebagai Data Awal"],
  ["tup-extension","exercise","Pada $X="],
  ["tup-extension","exercise","Untuk premeasure panjang"],
  ["tup-extension","exercise","Tunjukkan bahwa tanpa syarat"],
  ["tup-extension","exercise","Misalkan $m$ suatu ukuran Borel"],
  ["tup-extension","exercise","Pada $X=\\{a,b,c\\}$"],
  ["stm-neyman-pearson","example","Model Bernoulli sebagai"],
  ["stm-neyman-pearson","example","Ukuran dan Power"],
  ["stm-neyman-pearson","example","Rasio Likelihood pada"],
  ["stm-neyman-pearson","example","Aturan Batas"],
  ["stm-neyman-pearson","example","Normal Bergeser"],
  ["stm-neyman-pearson","example","Tiga Titik"],
  ["stm-neyman-pearson","example","Hipotesis yang Sama"],
  ["stm-neyman-pearson","example","Alternatif Berlawanan"],
  ["stm-neyman-pearson","exercise","Untuk $X"],
  ["stm-neyman-pearson","exercise","Pada model soal sebelumnya"],
  ["stm-neyman-pearson","exercise","Pada ruang $\\{a,b,c\\}$"],
  ["stm-neyman-pearson","exercise","Uji $H_0:X"],
  ["stm-neyman-pearson","exercise","Misalkan $H_0:X"],
  ["stm-neyman-pearson","exercise","Pada ruang $\\{0,1\\}$"],
  ["stm-neyman-pearson","exercise","Jelaskan mengapa uji paling kuat"],
  ["stm-neyman-pearson","exercise","Pada model $H_0"],
  ["ks-conditional-expectation","example","Informasi Dua Kelompok"],
  ["ks-conditional-expectation","example","Menghitung Rata-Rata"],
  ["ks-conditional-expectation","example","Independensi Diuji"],
  ["ks-conditional-expectation","example","Menghitung Varians"],
  ["ks-conditional-expectation","example","Informasi Trivial"],
  ["ks-conditional-expectation","example","Menara pada Dua"],
  ["ks-conditional-expectation","example","Mengeluarkan Faktor"],
  ["ks-conditional-expectation","example","Ketika Informasi"]
];
// Verify that the actual public-page registry uses the authored regression
// inference lesson rather than generated rubric prompts. Each example and
// exercise is included in the same regression gate as earlier reviewed lessons.
const regression=getBookSectionContent("sta-regression-inference");
assert.ok(regression,"Missing regression inference page");
const regDefs=regression.formal.filter(item=>item.kind==="definition");
const regResults=regression.formal.filter(item=>["lemma","theorem","proposition","corollary"].includes(item.kind));
assert.equal(regDefs.length,4);
assert.equal(regResults.length,4);
for(const def of regDefs)assert.ok(regression.examples.some(ex=>ex.forDefinition===def.title),
  "Regression definition lacks directly linked example: "+def.title);
for(const result of regResults)assert.ok(normalize(result.proof?.join(" ")).length>=550,
  "Regression proof incomplete: "+result.title);
assert.equal(regression.examples.length,8);
assert.equal(regression.exercises.length,8);
assert.ok(regression.exercises.every(ex=>!likelyUnsolved(ex.answer)));
checked.push(...regression.examples.map(ex=>["sta-regression-inference","example",ex.title]),
  ...regression.exercises.map(ex=>["sta-regression-inference","exercise",ex.prompt.slice(0,70)]));
const regX=[0,1,2,3,4],regY=[1,2,2,4,6],xb=2,yb=3;
const sxx=regX.reduce((s,x)=>s+(x-xb)**2,0);
const sxy=regX.reduce((s,x,i)=>s+(x-xb)*(regY[i]-yb),0);
const slope=sxy/sxx,intercept=yb-slope*xb;
const residuals=regX.map((x,i)=>regY[i]-intercept-slope*x);
const sse=residuals.reduce((s,v)=>s+v*v,0);
const sst=regY.reduce((s,y)=>s+(y-yb)**2,0);
const ssr=slope*slope*sxx;
const mse=sse/3, t=slope/Math.sqrt(mse/sxx);
for(const [actual,expected] of [[sxx,10],[sxy,12],[slope,1.2],[intercept,.6],
  [sse,1.6],[sst,16],[ssr,14.4],[mse,8/15],[t*t,27]]){
  assert.ok(Math.abs(actual-expected)<1e-10,"Regression numeric identity failed");
}
assert.ok(Math.abs(residuals.reduce((s,v)=>s+v,0))<1e-10);
assert.ok(Math.abs(residuals.reduce((s,v,i)=>s+v*regX[i],0))<1e-10);
const regressionRegistry=fs.readFileSync(path.join(root,"data/book-section-content.ts"),"utf8");
assert.match(regressionRegistry,/"sta-regression-inference":regressionInferenceContent/);

for(const [slug,type,anchor] of checked){
  const page=getBookSectionContent(slug);
  assert.ok(page,"Audited lesson not found: "+slug);
  const item=type==="exercise"
    ?page.exercises.find(x=>x.prompt.startsWith(anchor))
    :page.examples.find(x=>x.title.startsWith(anchor));
  assert.ok(item,"Audited "+type+" not found in "+slug+": "+anchor);
  const source=type==="exercise"?item.answer:(item.solution??[]).join(" ");
  assert.ok(normalize(source).length>=450,
    slug+": reviewed solution should be at least 450 characters, found "+normalize(source).length);
}
// Regression check: the original Carathéodory lesson must not state the false
// implication from arbitrary sigma-finiteness of the extensions alone.
const extensionLesson=getBookSectionContent("tup-extension");
const uniqueness=extensionLesson.formal.find(item=>item.title==="Keunikan Perluasan pada Kasus Sigma-Finite");
assert.ok(uniqueness?.statement.includes("E_1") && uniqueness.statement.includes("\\mathcal A_0"),
  "Uniqueness must require a common finite-measure cover inside the generating algebra");
assert.ok(normalize(uniqueness.proof?.join(" ")).length>=900,
  "Uniqueness proof must establish the finite-restriction pi-lambda argument and limit passage");

// Regression audit: verify the full source rendered for Neyman-Pearson, not just
// the text length of an isolated example. These numerical identities also catch
// incorrect size/power swaps and invalid randomization probabilities.
const np=getBookSectionContent("stm-neyman-pearson");
assert.ok(np && np.formal.filter(x=>x.kind==="definition").length===4);
const npResults=np.formal.filter(x=>["lemma","theorem","proposition","corollary"].includes(x.kind));
assert.equal(npResults.length,4);
for(const item of npResults){
  assert.ok(normalize(item.proof?.join(" ")).length>750,"Incomplete Neyman-Pearson proof: "+item.title);
}
assert.ok(np.formal.some(x=>x.kind==="theorem" && x.statement.includes("E_0") && x.statement.includes("E_1")));
assert.ok(np.formal.some(x=>x.kind==="corollary" && x.statement.includes("k>0")));
for(const item of np.formal.filter(x=>x.kind==="definition")){
  assert.ok(np.examples.some(ex=>ex.forDefinition===item.title),"Definition lacks immediate example: "+item.title);
}
assert.equal(np.examples.length,8);
assert.ok(np.exercises.length>=9,"Eight new exercises plus the previously curated Bernoulli exercise must remain");
const bernoulli0=[4/5,1/5], bernoulli1=[1/5,4/5];
for(const gamma of [0,0.125,0.5,1]){
  const size=bernoulli0[1]*gamma, power=bernoulli1[1]*gamma;
  assert.ok(Math.abs(power-4*size)<1e-12);
}
for(const [alpha,gamma] of [[1/5,1],[1/10,1/2]]){
  assert.ok(Math.abs(bernoulli0[1]*gamma-alpha)<1e-12);
}
const f0=[.5,.3,.2],f1=[.1,.3,.6],phi=[0,0,.75];
assert.ok(Math.abs(phi.reduce((a,v,i)=>a+v*f0[i],0)-.15)<1e-12);
assert.ok(Math.abs(phi.reduce((a,v,i)=>a+v*f1[i],0)-.45)<1e-12);

// Conditional-expectation regression: verify the source actually rendered,
// all four definitions are linked to examples, and solutions are substantive.
// Numeric identities test weighted conditioning, tower, and total variance.
const cePageRenderer=fs.readFileSync(path.join(root,"components/BookSectionPage.tsx"),"utf8");
const ceLabSource=fs.readFileSync(path.join(root,"components/ConditionalExpectationLab.tsx"),"utf8");
assert.match(cePageRenderer,/section\.slug==="ks-conditional-expectation"\?<ConditionalExpectationLab/);
assert.match(ceLabSource,/aria-label="Pilih partisi informasi"/);
assert.match(ceLabSource,/round\(result\.residual\).*round\(result\.between\)/);
const ce=getBookSectionContent("ks-conditional-expectation");
assert.ok(ce,"Conditional expectation lesson missing from the rendered registry");
const ceDefinitions=ce.formal.filter(x=>x.kind==="definition");
const ceResults=ce.formal.filter(x=>["lemma","theorem","proposition","corollary"].includes(x.kind));
assert.equal(ceDefinitions.length,4);
assert.equal(ceResults.length,7);
for(const definition of ceDefinitions){
  assert.ok(ce.examples.some(x=>x.forDefinition===definition.title),
    "Missing immediate example for "+definition.title);
}
for(const result of ceResults){
  assert.ok(normalize(result.proof?.join(" ")).length>=350,
    "Incomplete conditional-expectation proof: "+result.title);
}
assert.equal(ce.examples.length,8);
assert.ok(ce.exercises.length>=8);
for(const ex of ce.exercises.slice(-8)){
  assert.ok(normalize(ex.answer).length>=450,
    "Unsolved conditional-expectation exercise: "+ex.prompt.slice(0,60));
}
const weighted=(2*(1/2)+5*(1/3))/(1/2+1/3);
assert.ok(Math.abs(weighted-16/5)<1e-12);
const x=[0,2,4,6],mean=x.reduce((a,b)=>a+b,0)/4;
const variance=x.reduce((a,v)=>a+(v-mean)**2,0)/4;
const conditionalMeans=[1,1,5,5];
const residual=x.reduce((a,v,i)=>a+(v-conditionalMeans[i])**2,0)/4;
const between=conditionalMeans.reduce((a,v)=>a+(v-mean)**2,0)/4;
assert.equal(variance,5);
assert.equal(residual,1);
assert.equal(between,4);
assert.equal(residual+between,variance);
const fine=[1,1,5,5,9,9,13,13];
assert.equal(fine.slice(0,4).reduce((a,b)=>a+b,0)/4,3);
assert.equal(fine.slice(4).reduce((a,b)=>a+b,0)/4,11);


// Analytic geometry regression: inspect the rendered source, not only its length.
// All four definitions require a directly attached worked example; proofs must
// state valid hypotheses and all eight exercises must be concrete solutions.
const geometry=getBookSectionContent("calc-app-conics-basics");
assert.ok(geometry,"Public Geometri lesson missing from the book-section registry");
const geometryDefs=geometry.formal.filter(x=>x.kind==="definition");
const geometryResults=geometry.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(geometryDefs.length,4);
assert.equal(geometryResults.length,6);
assert.equal(geometry.examples.length,8);
assert.equal(geometry.exercises.length,8);
for(const def of geometryDefs){
  assert.ok(geometry.examples.some(ex=>ex.forDefinition===def.title),
    "Geometry definition missing its immediate example: "+def.title);
}
for(const item of geometryResults){
  assert.ok(item.proof?.length>=2 && normalize(item.proof.join(" ")).length>350,
    "Geometry formal result needs an actual proof: "+item.title);
}
for(const item of geometry.exercises){
  assert.ok(normalize(item.answer).length>350 && !likelyUnsolved(item.answer),
    "Geometry exercise is a generic rubric or incomplete answer: "+item.prompt);
}
const geometryPageSource=fs.readFileSync(path.join(root,"components/BookSectionPage.tsx"),"utf8");
const geometryLabSource=fs.readFileSync(path.join(root,"components/AnalyticGeometryLab.tsx"),"utf8");
const siteDataSource=fs.readFileSync(path.join(root,"data/site-data.ts"),"utf8");
assert.match(geometryPageSource,/section\.slug==="calc-app-conics-basics"\?<AnalyticGeometryLab/);
assert.match(geometryLabSource,/Math\.sqrt\(Math\.max\(0,radius\*radius-h\*h\)\)/);
assert.match(siteDataSource,/subject: "Geometri"[\s\S]{0,270}calc-app-conics-basics/);
for(const h of [-3,-2,-1.5,0,1.5,2,3]){
  const expected=Math.abs(h)<2?2:Math.abs(h)===2?1:0;
  const intersections=Math.abs(h)>2?[]:Math.abs(h)===2?[0]:
    [-Math.sqrt(4-h*h),Math.sqrt(4-h*h)];
  assert.equal(intersections.length,expected);
  for(const x of intersections)assert.ok(Math.abs(x*x+h*h-4)<1e-12);
}
for(const x of [-10,-4,-1,0,1,4,10]){
  const p=3,y=x*x/(4*p);
  const focusDistance=Math.hypot(x,y-p);
  const directrixDistance=Math.abs(y+p);
  assert.ok(Math.abs(focusDistance-directrixDistance)<1e-10);
}
for(const [x,y] of [[3,4],[-3,-4]]){
  assert.equal(x*x+y*y,25);
  const direction=[-y,x];
  assert.equal(x*direction[0]+y*direction[1],0);
}

// One-variable optimization regression: the rendered lesson must have actual
// mathematical solutions, not only long generic rubric text. These checks
// complement, rather than replace, manual proof and domain review.
const optimization=getBookSectionContent("calc-optimization");
assert.ok(optimization,"Authored optimization lesson is missing from rendered registry");
const optimizationDefs=optimization.formal.filter(x=>x.kind==="definition");
const optimizationResults=optimization.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(optimizationDefs.length,4);
assert.equal(optimizationResults.length,6);
assert.equal(optimization.examples.length,8);
assert.equal(optimization.exercises.length,8);
for(const def of optimizationDefs){
  assert.ok(optimization.examples.some(x=>x.forDefinition===def.title),
    "Optimization definition lacks its directly attached example: "+def.title);
}
for(const item of optimizationResults){
  assert.ok(item.proof?.length>=2 && normalize(item.proof.join(" ")).length>350,
    "Optimization formal result lacks a substantive proof: "+item.title);
}
for(const item of optimization.exercises){
  assert.ok(normalize(item.answer).length>450 && !likelyUnsolved(item.answer),
    "Optimization exercise has an abbreviated or generic solution: "+item.prompt);
}
const optimizationRenderer=fs.readFileSync(path.join(root,"components/BookSectionPage.tsx"),"utf8");
const optimizationLab=fs.readFileSync(path.join(root,"components/OptimizationLab.tsx"),"utf8");
const optimizationSite=fs.readFileSync(path.join(root,"data/site-data.ts"),"utf8");
assert.match(optimizationRenderer,/section\.slug==="calc-optimization"\?<OptimizationLab/);
assert.match(optimizationLab,/tangentSlope=2\*\(x-2\)/);
assert.match(optimizationSite,/subject: "Optimisasi"[\s\S]{0,300}calc-optimization/);
for(let i=0;i<=400;i++){
  const x=i/100;
  const fx=(x-2)**2+1;
  assert.ok(fx>=1-1e-12 && fx<=5+1e-12);
  assert.ok(Math.abs(fx-(5-(4*x-x*x)))<1e-10);
}
for(const [x,y] of [[-3,-1],[-1,2],[0,0],[1,4],[3,5]]){
  assert.ok(y*y>=x*x+2*x*(y-x)-1e-12,
    "Quadratic tangent support inequality violated");
}
assert.equal(Math.max(...[-2,-1,1,2].map(x=>x**3-3*x)),2);
assert.equal(Math.min(...[-2,-1,1,2].map(x=>x**3-3*x)),-2);

// Additional public routes outside the 17 book curricula: deep materials and
// their independent practice banks. These figures are separate from book totals
// so historical book-only triage counts remain comparable across deployments.
const {deepMaterials}=loadSource(path.join(root,"data/deep-materials.ts"));
const {materialPractice}=loadSource(path.join(root,"data/material-practice.ts"));
const {materialPracticeExtra}=loadSource(path.join(root,"data/material-practice-extra.ts"));
const {formalChapterContent}=loadSource(path.join(root,"data/formal-chapter-content.ts"));
// Trigonometry regression: inspect the actual non-book public source and
// independent practice banks, not merely a generated curriculum summary.
const trigMaterial=deepMaterials.find(m=>m.slug==="trigonometri");
assert.ok(trigMaterial,"Missing public trigonometry material");
const trigFormal=formalChapterContent.trigonometri;
assert.ok(trigFormal,"Missing formal trigonometry chapter");
const trigExamples=[...trigMaterial.examples.map(x=>({title:x.title,solution:x.solution})),
  ...trigFormal.examples.map(x=>({title:x.title.id,solution:x.solution.map(v=>v.id)}))];
for(const title of ["Sinus dan Cosinus","Tangen","Identitas","Persamaan Dasar","Aturan Cosinus"]){
  const example=trigExamples.find(x=>x.title===title);
  assert.ok(example,"Original trigonometry example absent: "+title);
  assert.ok(normalize(example.solution.join(" ")).length>=300,
    "Original trigonometry example lacks reasoning: "+title);
}
for(const title of ["Sinus dan Cosinus","Tangen"]){
  assert.ok(trigExamples.some(x=>x.title===title),"Definition lacks direct worked example: "+title);
}
assert.ok(trigFormal.examples.some(x=>x.forDefinition?.id==="Sinus dan Cosinus pada Lingkaran Satuan"),
  "Formal unit-circle definition lacks an immediately linked example");
for(const title of ["Teorema Aturan Cosinus","Teorema Aturan Sinus"]){
  const result=trigFormal.blocks.find(x=>x.title.id===title);
  assert.ok(result && result.kind==="theorem","Missing trigonometry theorem: "+title);
  assert.ok(normalize(result.proof.map(x=>x.id).join(" ")).length>=400,
    "Trigonometry theorem needs a complete proof: "+title);
}
const cosineDifference=trigMaterial.theorems.find(x=>x.title==="Rumus Cosinus Selisih Sudut");
assert.ok(cosineDifference?.proof.join(" ").includes("Rotasikan kedua vektor"),
  "Cosine-difference proof must handle oriented angles rather than signed 'angle between'");
const trigPractice=[...(materialPractice.trigonometri??[]),...(materialPracticeExtra.trigonometri??[])];
for(const id of ["TR-03","TR-04","TR-05","TR-07","TR-09","TR-10"]){
  const item=trigPractice.find(x=>x.id===id);
  assert.ok(item,"Missing original trigonometry problem "+id);
  assert.ok(normalize(item.answer.id).length>=300,
    "Trigonometry problem remains insufficiently justified: "+id);
  assert.ok(normalize(item.answer.en).length>=250,
    "English trigonometry solution incomplete: "+id);
}
for(const angle of [0,Math.PI/6,Math.PI/3,Math.PI/2,Math.PI,5*Math.PI/3]){
  const a=5,b=7,c=Math.PI/3;
  const side2=a*a+b*b-2*a*b*Math.cos(c);
  assert.ok(Math.abs(side2-39)<1e-10,"Law of cosines numerical check");
  const cosDiff=Math.cos(angle-c);
  const expanded=Math.cos(angle)*Math.cos(c)+Math.sin(angle)*Math.sin(c);
  assert.ok(Math.abs(cosDiff-expanded)<1e-12,"Cosine difference identity failed");
}
const trigRoots=[Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];
for(const root of trigRoots)assert.ok(Math.abs(Math.cos(2*root))<1e-12);
assert.ok(Math.abs(6*Math.sin(Math.PI/4)/Math.sin(Math.PI/6)-6*Math.SQRT2)<1e-12);
const trigMax=3*(3/5)+4*(4/5);
assert.equal(trigMax,5);

const nonBookRows=[],nonBookConcerns=[];
for(const material of deepMaterials){
  const url="/materi/"+material.slug;
  const practice=[...(materialPractice[material.slug]??[]),...(materialPracticeExtra[material.slug]??[])];
  const formal=formalChapterContent[material.slug];
  const examples=[...material.examples.map(ex=>({title:ex.title,answer:ex.solution.join(" ")})),
    ...(formal?.examples??[]).map(ex=>({title:ex.title.id,answer:ex.solution.map(x=>x.id).join(" ")}))];
  const proofs=[...material.theorems.map(x=>({title:x.title,answer:x.proof.join(" ")})),
    ...(formal?.blocks??[]).filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind))
      .map(x=>({title:x.title.id,answer:(x.proof??[]).map(y=>y.id).join(" ")}))];
  const row={field:material.subject,slug:material.slug,url,exercises:practice.length,
    shortExercises:0,genericExercises:0,workedExamples:examples.length,
    shortExamples:0,formalResults:proofs.length,shortProofs:0};
  for(const item of practice){
    const answer=normalize(item.answer.id),generic=likelyUnsolved(answer);
    if(answer.length<300||generic){
      if(answer.length<300)row.shortExercises++;
      if(generic)row.genericExercises++;
      nonBookConcerns.push({field:material.subject,slug:material.slug,url,
        type:generic?"generic-exercise-answer":"short-exercise-answer",
        id:item.id,textLength:answer.length,prompt:normalize(item.prompt.id).slice(0,180)});
    }
  }
  for(const [index,ex] of examples.entries())if(normalize(ex.answer).length<380){
    row.shortExamples++;
    nonBookConcerns.push({field:material.subject,slug:material.slug,url,
      type:"short-worked-example",index:index+1,title:ex.title,textLength:normalize(ex.answer).length});
  }
  for(const item of proofs)if(normalize(item.answer).length<250){
    row.shortProofs++;
    nonBookConcerns.push({field:material.subject,slug:material.slug,url,
      type:"brief-or-missing-proof",title:item.title,textLength:normalize(item.answer).length});
  }
  nonBookRows.push(row);
}
// Mathematical regression: the original non-book fractions lesson and its
// independently rendered exercises must retain their authored solutions.
const fraction=deepMaterials.find(x=>x.slug==="pecahan");
assert.ok(fraction && fraction.subject==="Aritmetika");
const fractionFormal=formalChapterContent.pecahan;
const fractionPractice=[...(materialPractice.pecahan??[]),...(materialPracticeExtra.pecahan??[])];
assert.equal(fraction.examples.length,6);
assert.equal(fractionPractice.length,10);
assert.ok(fractionFormal?.examples.some(ex=>ex.title.id==="Representasi Rasional"));
for(const definition of fraction.definitions){
  assert.ok(fraction.examples.some(ex=>ex.title===definition.title),
    "Missing immediate fraction definition example: "+definition.title);
}
const fractionProof=fractionFormal.blocks.find(x=>x.title.id==="Teorema Bentuk Paling Sederhana");
assert.ok(fractionProof?.proof?.some(x=>x.id.includes("Lemma Euclid")),
  "Lowest-terms uniqueness must invoke divisibility, not just prime support");
for(const id of ["F-03","F-04","F-05","F-08","F-10"]){
  const item=fractionPractice.find(x=>x.id===id);
  assert.ok(item && normalize(item.answer.id).length>=300,
    "Reviewed original fraction solution is missing: "+id);
}
assert.equal(3*20,5*12);
assert.equal(18*4,24*3);
assert.equal(5*5-3*8,1);
assert.ok(Math.abs((3/4-2/5+7/10)-(21/20))<1e-12,"Fraction numeric regression: 3/4-2/5+7/10");
assert.ok(Math.abs(((9/10-3/5)*80)-(24))<1e-12,"Fraction numeric regression: (9/10-3/5)*80");
assert.ok(Math.abs(((13/3-1)/6)-(5/9))<1e-12,"Fraction numeric regression: (13/3-1)/6");
assert.ok(Math.abs((1/(1+1/(1+1/2)))-(3/5))<1e-12,"Fraction numeric regression: 1/(1+1/(1+1/2))");

// Regression for the public, non-book Algebra lesson. This checks the
// rendered source registry and independently authored answers, not length alone.
const linear=deepMaterials.find(x=>x.slug==="persamaan-linear");
const linearFormal=formalChapterContent["persamaan-linear"];
const linearPractice=[...(materialPractice["persamaan-linear"]??[]),
  ...(materialPracticeExtra["persamaan-linear"]??[])];
assert.ok(linear && linear.subject==="Aljabar");
assert.ok(linearFormal && linearFormal.blocks.length>=5);
assert.equal(linear.examples.length,3);
assert.equal(linearPractice.length,10);
for(const definition of [...linear.definitions.map(x=>x.title),
  ...linearFormal.blocks.filter(x=>x.kind==="definition").map(x=>x.title.id)]){
  assert.ok(linearFormal.examples.some(ex=>ex.forDefinition?.id===definition),
    "Missing directly linked linear-equation definition example: "+definition);
}
for(const title of ["Contoh Detail: Sistem dengan Parameter","Contoh Detail: Model Campuran"]){
  const ex=linearFormal.examples.find(x=>x.title.id===title);
  assert.ok(ex && normalize(ex.solution.map(s=>s.id).join(" ")).length>=400,
    "Original formal linear-equation worked example lacks full case analysis: "+title);
}
for(const ex of linear.examples)assert.ok(normalize(ex.solution.join(" ")).length>=400,
  "Original linear-equation worked example is still too abbreviated: "+ex.title);
for(const id of ["L-03","L-04","L-05","L-06","L-08","L-09","L-10"]){
  const item=linearPractice.find(x=>x.id===id);
  assert.ok(item && normalize(item.answer.id).length>=350,
    "Reviewed linear-equation exercise is missing its verified derivation: "+id);
}
const systemTheorem=linearFormal.blocks.find(x=>x.title.id.includes("Klasifikasi Lengkap"));
assert.ok(systemTheorem?.proof?.length>=5);
assert.ok(systemTheorem.proof.some(step=>step.id.includes("(a,b)=(0,0)")),
  "Singular-system proof must include a zero coefficient row");
const linearGeometryCorollary=linearFormal.blocks.find(x=>x.kind==="corollary");
assert.ok(linearGeometryCorollary?.statement.id.includes("vektor normal") ||
  linearGeometryCorollary?.statement.id.includes("benar-benar menyatakan garis"));
assert.ok(linearGeometryCorollary.proof.some(step=>step.id.includes("garis vertikal")),
  "Geometric classification must cover vertical lines");
// Cramer's formulas and direct substitution, including negative coefficients.
for(const [a,b,c,d,e,f] of [
  [1,1,2,-1,5,1],[2,3,1,-1,13,1],[0,1,1,0,3,2],[-2,1,3,2,4,-1]
]){
  const det=a*d-b*c;
  assert.notEqual(det,0);
  const x=(d*e-b*f)/det,y=(a*f-c*e)/det;
  assert.ok(Math.abs(a*x+b*y-e)<1e-12);
  assert.ok(Math.abs(c*x+d*y-f)<1e-12);
}
// In the singular cases a zero row may still contradict a nonzero right side.
const singularCases=[
  {A:[[0,0],[0,0]],rhs:[0,0],consistent:true},
  {A:[[0,0],[0,0]],rhs:[1,0],consistent:false},
  {A:[[0,0],[1,2]],rhs:[0,3],consistent:true},
  {A:[[0,0],[1,2]],rhs:[1,3],consistent:false},
  {A:[[1,2],[2,4]],rhs:[3,6],consistent:true},
  {A:[[1,2],[2,4]],rhs:[3,7],consistent:false}
];
for(const {A,rhs,consistent} of singularCases){
  const [[a,b],[c,d]]=A,[e,f]=rhs;
  assert.equal(a*d-b*c,0);
  const firstNonzero=a!==0||b!==0;
  const secondNonzero=c!==0||d!==0;
  const actual=firstNonzero
    ? (a!==0 ? f*a===c*e : f*b===d*e)
    : (e===0 && (secondNonzero || f===0));
  // For a nonzero second row with zero first row, e=0 is sufficient.
  assert.equal(actual,consistent,"Singular consistency case mismatch");
}

// Induction: verify the exact rendered Real Analysis source and original questions.
// The length thresholds are only regression signals; mathematical steps are
// also checked below with independently calculated finite examples.
const inductionLesson=getBookSectionContent("induksi-matematika");
assert.ok(inductionLesson,"Missing mathematical induction lesson");
const inductionDefinitions=inductionLesson.formal.filter(x=>x.kind==="definition");
const inductionResults=inductionLesson.formal.filter(x=>
  ["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(inductionDefinitions.length,1);
assert.equal(inductionResults.length,4);
assert.equal(inductionLesson.examples.length,5);
assert.equal(inductionLesson.exercises.length,6);
for(const definition of inductionDefinitions){
  assert.ok(inductionLesson.examples.some(x=>x.forDefinition===definition.title),
    "Induction definition has no directly linked concrete example");
}
for(const item of inductionResults){
  assert.ok((item.proof??[]).length>=4 &&
    normalize(item.proof.join(" ")).length>=550,
    "Induction principle has an incomplete proof: "+item.title);
  assert.ok((item.proof??[]).some(s=>s.includes("\\square")),
    "Induction proof must have a mathematical closing marker: "+item.title);
}
for(const prompt of [
  "Buktikan $1+3+\\cdots+(2n-1)=n^2$.",
  "Buktikan $2^n\\ge n+1$ untuk $n\\ge0$.",
  "Jelaskan kesalahan induksi yang tidak memeriksa basis."
]){
  const exercise=inductionLesson.exercises.find(x=>x.prompt===prompt);
  assert.ok(exercise && normalize(exercise.answer).length>=600,
    "Original induction exercise was lost or its argument truncated: "+prompt);
}
for(const example of inductionLesson.examples){
  assert.ok(normalize(example.solution.join(" ")).length>=450,
    "Worked induction example lacks complete reasoning: "+example.title);
}
for(const item of inductionLesson.exercises){
  assert.ok(!/jawaban yang baik|rubrik|contoh harus|langkah penilaian/i.test(item.answer),
    "Induction exercise contains a rubric instead of a solution");
}
for(let n=1;n<=80;n++){
  assert.equal(n*(n+1)/2,Array.from({length:n},(_,j)=>j+1).reduce((a,b)=>a+b,0));
  assert.equal(n*n,Array.from({length:n},(_,j)=>2*j+1).reduce((a,b)=>a+b,0));
  const sumCubes=Array.from({length:n},(_,j)=>(j+1)**3).reduce((a,b)=>a+b,0);
  assert.equal(sumCubes,(n*(n+1)/2)**2);
}
const fib=[0,1];
for(let n=2;n<=35;n++)fib[n]=fib[n-1]+fib[n-2];
for(let n=1;n<=32;n++){
  assert.ok(fib[n]<=2**(n-1),"Fibonacci upper bound failed");
  assert.equal(fib.slice(1,n+1).reduce((a,b)=>a+b,0),fib[n+2]-1);
}
for(let n=12;n<=120;n++){
  assert.ok(Array.from({length:Math.floor(n/4)+1},(_,a)=>a)
    .some(a=>(n-4*a)%5===0 && n-4*a>=0),
    "4a+5b induction exercise has a counterexample: "+n);
}

// Countability: audit the exact Analisis Real page, not only its answer lengths.
const cardinalityLesson=getBookSectionContent("himpunan-hingga-dan-tak-hingga");
assert.ok(cardinalityLesson,"Missing finite/infinite sets lesson");
const cardinalityDefinitions=cardinalityLesson.formal.filter(item=>item.kind==="definition");
const cardinalityResults=cardinalityLesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(cardinalityDefinitions.length,2);
assert.equal(cardinalityResults.length,4);
assert.equal(cardinalityLesson.examples.length,5);
assert.equal(cardinalityLesson.exercises.length,6);
for(const definition of cardinalityDefinitions){
  assert.ok(cardinalityLesson.examples.some(ex=>ex.forDefinition===definition.title),
    "Countability definition lacks an immediate concrete example: "+definition.title);
}
for(const item of cardinalityResults){
  assert.ok((item.proof??[]).length>=3 && normalize(item.proof.join(" ")).length>=450,
    "Countability theorem or lemma lacks a complete proof: "+item.title);
}
for(const prompt of [
  "Tunjukkan $\\mathbb Z$ denumerable.",
  "Buktikan subset dari himpunan countable juga countable.",
  "Mengapa interval real tidak dapat dihitung?"
]){
  const exercise=cardinalityLesson.exercises.find(x=>x.prompt===prompt);
  assert.ok(exercise && normalize(exercise.answer).length>=500,
    "Original countability exercise was removed or its proof is incomplete: "+prompt);
}
for(const exercise of cardinalityLesson.exercises){
  assert.ok(!/jawaban yang baik|contoh harus|rubrik|langkah penilaian/i.test(exercise.answer),
    "Countability answer is a rubric instead of a mathematical solution");
}
// Finite-prefix checks do not prove the infinite theorems, but catch wrong
// diagonal ordering, repeated reduced fractions, and an incorrect Z bijection.
const cardinalityPairs=[];
for(let sum=2;sum<=24;sum++){
  for(let m=1;m<sum;m++)cardinalityPairs.push([m,sum-m]);
}
assert.equal(new Set(cardinalityPairs.map(p=>p.join(","))).size,cardinalityPairs.length);
for(let m=1;m<=10;m++)for(let n=1;n<=10;n++){
  assert.ok(cardinalityPairs.some(p=>p[0]===m&&p[1]===n),
    "Diagonal enumeration omitted a bounded pair");
}
const integerIndex=n=>n===1?0:n%2===0?n/2:-(n-1)/2;
const integerValues=Array.from({length:201},(_,i)=>integerIndex(i+1));
assert.equal(new Set(integerValues).size,201);
assert.ok(integerValues.every(x=>x>=-100&&x<=100));
for(let x=-100;x<=100;x++)assert.ok(integerValues.includes(x));
// Distinct finite binary prefixes give distinct exact ternary numerators.
for(let length=1;length<=8;length++){
  const numerators=new Set();
  for(let bits=0;bits<2**length;bits++){
    let numerator=0;
    for(let i=0;i<length;i++){
      const bit=(bits>>(length-i-1))&1;
      numerator+=2*bit*3**(length-i-1);
    }
    numerators.add(numerator);
  }
  assert.equal(numerators.size,2**length,
    "Ternary Cantor coding failed injectivity on a finite prefix");
}

const totals=subjects.reduce((out,row)=>{
  for(const [k,v] of Object.entries(row))if(typeof v==="number")out[k]=(out[k]??0)+v;
  return out;
},{});
const fieldNamesSource=fs.readFileSync(path.join(root,"data/site-data.ts"),"utf8");
const catalogStart=fieldNamesSource.indexOf("export const subjects = [");
const catalogEnd=fieldNamesSource.indexOf("];",catalogStart);
const catalogSlice=fieldNamesSource.slice(catalogStart,catalogEnd);
const publicFields=Array.from(catalogSlice.matchAll(/"([^"]+)"/g),x=>x[1]);
const report={scope:"17 book curricula plus independent deep-material pages and practice banks within the 26-field public directory",method:"length-and-generic-text triage, not mathematical correctness verification",publicFields,totals,subjects,unresolved:concerns,nonBook:{pages:nonBookRows.length,subjects:nonBookRows,unresolved:nonBookConcerns}};
if(process.argv.includes("--json")){
  const target=path.join(root,"solution-depth-report.json");
  fs.writeFileSync(target,JSON.stringify(report,null,2)+"\n");
  console.log("Full solution-depth gap report: "+target);
}
console.log("Solution depth audit:",JSON.stringify({bookCurricula:subjects.length,publicFields:publicFields.length,shortExercises:totals.shortExercises,shortExamples:totals.shortExamples,shortProofs:totals.shortProofs,genericExercises:totals.genericExercises,reviewedSolutionsValidated:checked.length,nonBookPages:nonBookRows.length,nonBookShortExercises:nonBookRows.reduce((n,r)=>n+r.shortExercises,0),nonBookShortExamples:nonBookRows.reduce((n,r)=>n+r.shortExamples,0)}));
assert.equal(publicFields.length,26,"Public site catalog should include 26 fields");
assert.ok(subjects.length>=17,"Audit expected 17 active book curricula");


// Public Statistika Matematika: source-level regression for the exact rendered
// point-estimation page. Length checks are triage only; independent identities
// below guard the mathematics and the distinction between bias and consistency.
const pointEstimation=getBookSectionContent("stm-point-estimator");
assert.ok(pointEstimation,"Authored point-estimation lesson is not in rendered registry");
const pointDefinitions=pointEstimation.formal.filter(item=>item.kind==="definition");
const pointResults=pointEstimation.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(pointDefinitions.length,4);
assert.equal(pointResults.length,6);
assert.equal(pointEstimation.examples.length,8);
assert.equal(pointEstimation.exercises.length,8);
for(const definition of pointDefinitions){
  assert.ok(pointEstimation.examples.some(example=>example.forDefinition===definition.title),
    "Point estimation definition without a directly linked example: "+definition.title);
}
for(const item of pointResults){
  assert.ok(item.proof?.length>=4 && normalize(item.proof.join(" ")).length>=450,
    "Point estimation theorem needs an actual proof: "+item.title);
}
for(const example of pointEstimation.examples){
  assert.ok(normalize(example.solution.join(" ")).length>=450,
    "Point estimation worked example needs calculation and verification: "+example.title);
}
for(const exercise of pointEstimation.exercises){
  assert.ok(normalize(exercise.answer).length>=450 &&
    !/jawaban yang baik|contoh harus|rancang masalah|susun satu|rubrik/i.test(exercise.answer),
    "Point estimation exercise is generic or insufficient: "+exercise.prompt);
}
const pointCatalog=fs.readFileSync(path.join(root,"data/book-curricula.ts"),"utf8");
const pointCurriculum=fs.readFileSync(path.join(root,"data/new-academic-curricula.ts"),"utf8");
assert.ok(pointCurriculum.includes('"stm-point-estimator"') &&
  pointCurriculum.includes('"slug": "statistika-matematika"'),
  "Point estimation lesson not in the public book curriculum");
for(const n of [2,3,9,16]){
  const variance=9/n, delta=2;
  const c=delta*delta/(delta*delta+variance);
  const risk=x=>x*x*variance+(1-x)*(1-x)*delta*delta;
  assert.ok(c>=0&&c<=1);
  assert.ok(risk(c)<=risk(0)+1e-12&&risk(c)<=risk(1)+1e-12);
  for(let i=0;i<=100;i++)assert.ok(risk(c)<=risk(i/100)+1e-12,
    "Shrinkage minimum formula contradicts the risk function");
}
for(const p of [0,0.25,0.4,0.5,1]){
  const variance=4*p*(1-p),bias=p-1;
  const direct=p*(1-p)**2+(1-p)*(-1-p)**2;
  assert.ok(Math.abs(direct-(variance+bias*bias))<1e-12,
    "Bernoulli transformed estimator MSE is wrong");
}
assert.ok(Math.abs((10/3)-(4+1+1+4)/3)<1e-12);
assert.ok(Math.abs(0.24/(2400*0.1**2)-0.01)<1e-12);


// Inference rules: verify the rendered public discrete-mathematics lesson.
// Character counts only guard against accidental reversion to rubric answers;
// truth-table enumeration below tests the actual validity claims.
const inferenceLesson=getBookSectionContent("md-aturan-inferensi");
assert.ok(inferenceLesson,"Authored inference rules lesson not registered");
const inferenceDefinitions=inferenceLesson.formal.filter(item=>item.kind==="definition");
const inferenceResults=inferenceLesson.formal.filter(item=>["proposition","lemma","theorem","corollary"].includes(item.kind));
assert.equal(inferenceDefinitions.length,4);
assert.equal(inferenceResults.length,7);
assert.equal(inferenceLesson.examples.length,8);
assert.equal(inferenceLesson.exercises.length,8);
for(const definition of inferenceDefinitions){
  assert.ok(inferenceLesson.examples.some(example=>example.forDefinition===definition.title),
    "Inference definition missing direct example: "+definition.title);
}
for(const item of inferenceResults){
  assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>=250,
    "Inference result lacks a reasoned proof: "+item.title);
}
for(const example of inferenceLesson.examples){
  assert.ok(example.solution.length>=3 && example.conclusion,
    "Inference example lacks worked reasoning: "+example.title);
}
for(const exercise of inferenceLesson.exercises){
  assert.ok(normalize(exercise.answer).length>=350 &&
    !/jawaban yang baik|contoh harus|susun satu soal|rubrik/i.test(exercise.answer),
    "Inference exercise is a generic rubric: "+exercise.prompt);
}
const inferenceCurriculum=fs.readFileSync(path.join(root,"data/new-academic-curricula.ts"),"utf8");
assert.ok(inferenceCurriculum.includes('"md-aturan-inferensi"') &&
  inferenceCurriculum.includes('"slug": "matematika-diskrit"'),
  "Inference rules route missing from public discrete mathematics curriculum");
const truth=[false,true];
for(const P of truth)for(const Q of truth)for(const R of truth){
  const implies=(a,b)=>!a||b;
  assert.ok(!(P&&implies(P,Q))||Q,"Modus ponens countermodel");
  assert.ok(!(implies(P,Q)&&!Q)||!P,"Modus tollens countermodel");
  assert.ok(!(implies(P,Q)&&implies(Q,R))||implies(P,R),"Hypothetical syllogism countermodel");
  assert.ok(!((P||Q)&&!P)||Q,"Disjunctive syllogism countermodel");
}
const invalidP=false,invalidQ=true;
const invalidImplication=!invalidP||invalidQ;
assert.ok(invalidImplication&&invalidQ&&!invalidP,
  "Affirming the consequent must have a countermodel");
assert.ok(invalidImplication&&!invalidP&&invalidQ,
  "Denying the antecedent must have a countermodel");
const D=[1,2];
const P=x=>x===1;
assert.ok(D.some(P)&&!D.every(P),
  "Existential does not imply universal: finite countermodel failed");


// Topological continuity regression: check the actual book-section registry,
// formal hypotheses, linked definitions, worked problems and finite-set identities.
// Length remains a triage guard; mathematical assertions are checked independently.
const topoLesson=getBookSectionContent("kontinuitas-topologis");
assert.ok(topoLesson,"Missing authored topological continuity lesson");
const topoDefs=topoLesson.formal.filter(x=>x.kind==="definition");
const topoResults=topoLesson.formal.filter(x=>["lemma","proposition","theorem","corollary"].includes(x.kind));
assert.equal(topoDefs.length,5);
assert.equal(topoResults.length,7);
assert.equal(topoLesson.examples.length,8);
assert.equal(topoLesson.exercises.length,8);
for(const definition of topoDefs){
  assert.ok(topoLesson.examples.some(ex=>ex.forDefinition===definition.title),
    "Topological definition missing a linked worked example: "+definition.title);
}
for(const item of topoResults){
  assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>=350,
    "Topological result lacks detailed proof: "+item.title);
}
for(const example of topoLesson.examples){
  assert.ok(example.solution.length>=3 &&
    normalize(example.solution.join(" ")).length>=350,
    "Topological worked example is still too terse: "+example.title);
}
for(const exercise of topoLesson.exercises){
  assert.ok(normalize(exercise.answer).length>=500 &&
    !/jawaban yang baik|contoh harus|soal harus|rubrik/i.test(exercise.answer),
    "Topological exercise must have an actual detailed solution: "+exercise.prompt);
}
const topologyCurriculum=bookSubjects.find(s=>s.slug==="analisis-real");
assert.ok(topologyCurriculum?.chapters.some(ch=>ch.sections.some(s=>s.slug==="kontinuitas-topologis")),
  "Topological continuity lesson not linked in public real-analysis chapter 11");
for(let a=0;a<8;a++)for(let b=0;b<8;b++){
  const domain=[0,1,2],f=x=>x%2;
  const pre=mask=>domain.filter(x=>((mask>>f(x))&1)!==0);
  const same=(xs,ys)=>xs.length===ys.length&&xs.every(x=>ys.includes(x));
  const union=(a,b)=>a|b,intersection=(a,b)=>a&b;
  assert.ok(same(pre(union(a,b)),domain.filter(x=>pre(a).includes(x)||pre(b).includes(x))),
    "Preimage union failed");
  assert.ok(same(pre(intersection(a,b)),domain.filter(x=>pre(a).includes(x)&&pre(b).includes(x))),
    "Preimage intersection failed");
  assert.ok(same(pre((~a)&3),domain.filter(x=>!pre(a).includes(x))),
    "Preimage complement failed");
}
for(let i=0;i<=100;i++){
  const x=-2+i*0.03;
  assert.ok(x*x>=0&&x*x<=4+1e-10,"Square image interval bound failed");
}
for(let k=0;k<=100;k++){
  const y=4*k/100;
  const x=-Math.sqrt(y);
  assert.ok(x>=-2-1e-12&&x<=1+1e-12&&Math.abs(x*x-y)<1e-10,
    "Square image reverse inclusion failed");
}
for(let k=0;k<=100;k++){
  const y=k/400;
  const x=(1-Math.sqrt(1-4*y))/2;
  assert.ok(x>=0&&x<=1&&Math.abs(x*(1-x)-y)<1e-10,
    "Compact continuous image reverse inclusion failed");
}


// Radon–Nikodym regression: inspect the actually rendered lesson, not the
// obsolete generated measure-theory template. Length is only a triage guard.
const rnLesson=getBookSectionContent("tup-radon-nikodym");
assert.ok(rnLesson,"Radon–Nikodym lesson is missing from the book registry");
const rnDefinitions=rnLesson.formal.filter(item=>item.kind==="definition");
const rnResults=rnLesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(rnDefinitions.length,4,"Four Radon–Nikodym definitions are required");
assert.equal(rnResults.length,6,"Six proved Radon–Nikodym results are required");
assert.equal(rnLesson.examples.length,8,"Eight actual Radon–Nikodym examples are required");
assert.equal(rnLesson.exercises.length,8,"Eight actual Radon–Nikodym exercises are required");
for(const definition of rnDefinitions){
  assert.ok(rnLesson.examples.some(example=>example.forDefinition===definition.title),
    "Missing direct definition example: "+definition.title);
}
for(const result of rnResults){
  assert.ok(result.proof?.length>=3 && normalize(result.proof.join(" ")).length>=450,
    "Radon–Nikodym proof is incomplete: "+result.title);
}
for(const example of rnLesson.examples){
  assert.ok(example.solution.length>=3 && normalize(example.solution.join(" ")).length>=450,
    "Radon–Nikodym worked example is still short: "+example.title);
}
for(const exercise of rnLesson.exercises){
  assert.ok(normalize(exercise.answer).length>=450 &&
    !/jawaban yang baik|contoh harus|rubrik|soal harus/i.test(exercise.answer),
    "Radon–Nikodym exercise is still a generic rubric: "+exercise.prompt);
}
// Atomic measures: ν({i})=h(i)μ({i}); verify every one of the 2^3 subsets.
const muRN=[1,2,4],nuRN=[3,0,2],hRN=nuRN.map((v,i)=>v/muRN[i]);
for(let mask=0;mask<8;mask++){
  const nuA=nuRN.reduce((sum,v,i)=>sum+((mask>>i)&1)*v,0);
  const intA=hRN.reduce((sum,h,i)=>sum+((mask>>i)&1)*h*muRN[i],0);
  assert.ok(Math.abs(nuA-intA)<1e-12,"RN atomic density failed on subset "+mask);
}
// Continuous density, chain rule, and change-of-measure exercise checks.
for(let k=0;k<=100;k++){
  const t=k/100;
  // Antiderivative of 6x(1-x): F(t)=3t²-2t³; Simpson is exact for quadratics.
  const f=x=>6*x*(1-x);
  const simpson=t*(f(0)+4*f(t/2)+f(t))/6;
  assert.ok(Math.abs(simpson-(3*t*t-2*t*t*t))<1e-12,
    "RN polynomial density integral failed at "+t);
  assert.ok(Math.abs((2*t*t)*(2*t)-(4*t*t*t))<1e-12,
    "Radon–Nikodym chain rule failed at "+t);
  assert.ok(Math.abs((3*t/2)*(2*t)-3*t*t)<1e-12,
    "Radon–Nikodym worked example chain rule failed at "+t);
}
assert.ok(Math.abs((3/4-1/4)-1/2)<1e-12,"RN beta density exercise failed");
assert.ok(Math.abs((1/9)/(1-1/9)-1/8)<1e-12,"RN geometric atom exercise failed");
assert.ok(Math.abs((1+4+9)/6-7/3)<1e-12,"RN discrete change of measure failed");
const rnCurriculum=bookSubjects.find(subject=>subject.slug==="teori-ukuran-probabilitas");
assert.ok(rnCurriculum?.chapters.some(ch=>ch.sections.some(sec=>sec.slug==="tup-radon-nikodym")),
  "Radon–Nikodym lesson must remain in the public measure-theory curriculum");


// Discrete martingale regression: check the rendered lesson and exact finite
// probability identities. Text thresholds only flag potential depth problems.
const mgLesson=getBookSectionContent("ks-martingale");
assert.ok(mgLesson,"Martingale lesson is missing from the public registry");
const mgDefs=mgLesson.formal.filter(item=>item.kind==="definition");
const mgResults=mgLesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(mgDefs.length,4,"Four precise martingale definitions are required");
assert.equal(mgResults.length,8,"Eight fully proved martingale results are required");
assert.equal(mgLesson.examples.length,8,"Eight martingale worked examples are required");
assert.equal(mgLesson.exercises.length,9,"Preserve the original curated proof and eight authored exercises");
assert.ok(mgLesson.exercises.some(ex=>ex.prompt.includes("S_n^2-n") && normalize(ex.answer).length>650),
  "The original quadratic-martingale exercise must be preserved and deeply solved");
for(const definition of mgDefs){
  assert.ok(mgLesson.examples.some(ex=>ex.forDefinition===definition.title),
    "Martingale definition lacks a directly linked example: "+definition.title);
}
for(const result of mgResults){
  assert.ok(result.proof?.length>=3 && normalize(result.proof.join(" ")).length>=450,
    "Martingale result requires a complete proof: "+result.title);
  assert.ok(result.proof.join(" ").includes("\\square"),
    "Martingale proof has no explicit conclusion: "+result.title);
}
for(const example of mgLesson.examples){
  assert.ok(example.solution.length>=3 && normalize(example.solution.join(" ")).length>=450,
    "Martingale worked example needs a concrete derivation: "+example.title);
}
for(const exercise of mgLesson.exercises){
  assert.ok(normalize(exercise.answer).length>=450 &&
    !/jawaban yang baik|contoh harus|rubrik|soal harus/i.test(exercise.answer),
    "Martingale exercise is a generic rubric: "+exercise.prompt);
}
const mgCurriculum=bookSubjects.find(subject=>subject.slug==="kalkulus-stokastik");
assert.ok(mgCurriculum?.chapters.some(ch=>ch.sections.some(sec=>sec.slug==="ks-martingale")),
  "Martingale must remain linked to the public stochastic-calculus curriculum");
// Fair ±1 increments: enumerate two-step conditional means, quadratic
// compensation, predictable transforms and bounded optional stopping.
for(const first of [-1,1]){
  const branches=[-1,1];
  const conditionalS2=branches.reduce((sum,second)=>sum+first+second,0)/2;
  assert.equal(conditionalS2,first,"Two-step random walk not a martingale");
  const conditionalQ2=branches.reduce((sum,second)=>
    sum+(first+second)**2-2,0)/2;
  assert.equal(conditionalQ2,first*first-1,"Quadratic compensation failed");
  const conditionalT2=branches.reduce((sum,second)=>
    sum+2*first+first*second,0)/2;
  assert.equal(conditionalT2,2*first,"Predictable transform failed");
}
const mgTwoStop=[
  {prob:1/2,value:1,time:1},
  {prob:1/4,value:0,time:2},
  {prob:1/4,value:-2,time:2}
];
const mgThreeStop=[
  {prob:1/2,value:1},
  {prob:1/4,value:0},
  {prob:1/8,value:-1},
  {prob:1/8,value:-3}
];
assert.equal(mgTwoStop.reduce((s,x)=>s+x.prob*x.value,0),0,
  "Bounded optional stopping failed at two steps");
assert.equal(mgThreeStop.reduce((s,x)=>s+x.prob*x.value,0),0,
  "Bounded optional stopping failed at three steps");
assert.equal(mgTwoStop.reduce((s,x)=>s+x.prob*x.value*x.value,0),
  mgTwoStop.reduce((s,x)=>s+x.prob*x.time,0),
  "Quadratic stopping identity failed");
const mgBiased=[
  {prob:9/16,value:1},{prob:6/16,value:-1},{prob:1/16,value:-3}
];
assert.equal(mgBiased.reduce((s,x)=>s+x.prob*x.value,0),0,
  "Biased coin centering failed");
for(let n=1;n<=12;n++){
  const loss=2**n-1,tail=2**(-n);
  const stoppedMean=(1-tail)-tail*loss;
  assert.ok(Math.abs(stoppedMean)<1e-12,
    "Truncated doubling counterexample failed at n="+n);
}


// Paired-data regression: check the actual public lesson, not the old
// generic answer generator. These length checks are triage only; the exact
// computations below separately guard the mathematical content.
const pairedLesson=getBookSectionContent("sta-paired");
assert.ok(pairedLesson,"Paired-data lesson is missing from the public registry");
const pairedDefs=pairedLesson.formal.filter(item=>item.kind==="definition");
const pairedResults=pairedLesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(pairedDefs.length,4,"Four precise paired-data definitions are required");
assert.equal(pairedResults.length,7,"Seven proved paired-data results are required");
assert.equal(pairedLesson.examples.length,8,"Eight actual paired-data examples are required");
assert.equal(pairedLesson.exercises.length,8,"Eight original paired-data exercises are required");
for(const def of pairedDefs){
  assert.ok(pairedLesson.examples.some(ex=>ex.forDefinition===def.title),
    "Paired-data definition lacks a directly linked example: "+def.title);
}
for(const item of pairedResults){
  assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>=320,
    "Paired-data formal result has an incomplete proof: "+item.title);
  assert.ok(item.proof.join(" ").includes("\\square"),
    "Paired-data proof must end explicitly: "+item.title);
}
for(const ex of pairedLesson.examples){
  assert.ok(ex.solution.length>=3 && normalize(ex.solution.join(" ")).length>=320,
    "Paired-data worked example requires explicit calculations: "+ex.title);
}
for(const ex of pairedLesson.exercises){
  assert.ok(normalize(ex.answer).length>=380 &&
    !/jawaban yang baik|contoh harus|rubrik|soal harus/i.test(ex.answer),
    "Paired-data exercise has a short or rubric-style answer: "+ex.prompt);
}
const pairedCurriculum=bookSubjects.find(subject=>subject.slug==="statistika-terapan");
assert.ok(pairedCurriculum?.chapters.some(ch=>ch.sections.some(sec=>sec.slug==="sta-paired")),
  "Paired-data lesson must remain in the applied-statistics public curriculum");
const pairedDiff=[2,4,3,5,1],pairedMean=pairedDiff.reduce((s,x)=>s+x,0)/5;
const pairedSS=pairedDiff.reduce((s,x)=>s+(x-pairedMean)**2,0);
assert.equal(pairedMean,3);
assert.equal(pairedSS,10);
assert.equal(pairedSS/(pairedDiff.length-1),2.5);
assert.ok(Math.abs(pairedMean/Math.sqrt((pairedSS/4)/5)-3*Math.SQRT2)<1e-12);
const pairedX=[10,12,11,14,9],pairedY=[8,8,8,9,8];
const meanX=pairedX.reduce((s,x)=>s+x,0)/5;
const meanY=pairedY.reduce((s,x)=>s+x,0)/5;
const varX=pairedX.reduce((s,x)=>s+(x-meanX)**2,0)/4;
const varY=pairedY.reduce((s,x)=>s+(x-meanY)**2,0)/4;
const covXY=pairedX.reduce((s,x,i)=>s+(x-meanX)*(pairedY[i]-meanY),0)/4;
assert.ok(Math.abs(varX-3.7)<1e-12 && Math.abs(varY-0.2)<1e-12);
assert.ok(Math.abs(covXY-0.7)<1e-12);
assert.ok(Math.abs(varX+varY-2*covXY-2.5)<1e-12);
const choose=(n,k)=>{let r=1;for(let i=1;i<=k;i++)r=r*(n-i+1)/i;return r;};
assert.equal(2*(choose(6,5)+choose(6,6))/2**6,7/32);
assert.equal(2*(choose(8,7)+choose(8,8))/2**8,9/128);
for(const c of [-5,-2,0,2,5]){
  const shifted=pairedDiff.map(x=>x+c);
  const mean=shifted.reduce((s,x)=>s+x,0)/5;
  const variance=shifted.reduce((s,x)=>s+(x-mean)**2,0)/4;
  assert.ok(Math.abs(mean-(3+c))<1e-12 && Math.abs(variance-2.5)<1e-12,
    "Paired-data shift identity failed for c="+c);
}


// Conditioning-stability regression: inspect the rendered lesson and verify
// its mathematics independently of prose-length triage.
{
  const lesson=getBookSectionContent("num-conditioning-stability");
  assert.ok(lesson,"Conditioning and stability lesson missing from public registry");
  const definitions=lesson.formal.filter(item=>item.kind==="definition");
  const results=lesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
  assert.equal(definitions.length,5);
  assert.equal(results.length,7);
  assert.equal(lesson.examples.length,8);
  assert.equal(lesson.exercises.length,8);
  for(const item of definitions)
    assert.ok(lesson.examples.some(example=>example.forDefinition===item.title),
      "Definition lacks a linked worked example: "+item.title);
  for(const item of results){
    assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>=350,
      "Incomplete conditioning proof: "+item.title);
    assert.ok(item.proof.at(-1).includes("\\square"),
      "Missing proof closure: "+item.title);
  }
  for(const example of lesson.examples)
    assert.ok(example.solution.length>=3 && normalize(example.solution.join(" ")).length>=350,
      "Incomplete conditioning example: "+example.title);
  for(const exercise of lesson.exercises)
    assert.ok(normalize(exercise.answer).length>=450 &&
      !/jawaban yang baik|contoh harus|rubrik|soal harus/i.test(exercise.answer),
      "Rubric-style conditioning solution: "+exercise.prompt);
  const subject=bookSubjects.find(item=>item.slug==="analisis-numerik");
  assert.ok(subject?.chapters.some(chapter=>chapter.sections.some(section=>
    section.slug==="num-conditioning-stability")),
    "Conditioning lesson missing from numerical analysis curriculum");

  // A scalar 1% perturbation: f(x)=x^2 at x=2.
  assert.equal((2*2)*(2*2)/(2*2),4);
  assert.ok(Math.abs((2.02**2-4)/4-0.0201)<1e-12);
  // A diagonal matrix has infinity condition number 100.
  const diag=[1,0.01], inverse=diag.map(value=>1/value);
  const condition=Math.max(...diag.map(Math.abs))*Math.max(...inverse.map(Math.abs));
  assert.equal(condition,100);
  const exact=[1,100],approx=[1,99],rhs=[1,1];
  const residual=rhs.map((value,i)=>value-diag[i]*approx[i]);
  const error=exact.map((value,i)=>value-approx[i]);
  assert.ok(Math.abs(residual[1]-0.01)<1e-12);
  assert.equal(error[1],1);
  assert.ok(Math.abs(inverse[1]*residual[1]-error[1])<1e-12);
  // Matrix perturbation: actual 1/11 < upper bound 1/9.
  const eta=10*0.01;
  assert.ok(eta<1 && 1/11<eta/(1-eta));
  // Rounded summation: a+b=1.23456 -> 1.23.
  const delta=(1.23-1.23456)/1.23456;
  assert.ok(Math.abs(delta)<0.005);
  assert.ok(Math.abs((1.23+0.00456)*(1+delta)-1.23)<1e-12);
  // Algebraically identical formulas can have different finite-precision results.
  const exactRoot=1/(Math.sqrt(10001)+100);
  assert.ok(exactRoot>0 && Math.abs(0.005-exactRoot)/exactRoot<0.00003);
  assert.equal(1.02-2.02+1,0);
  assert.ok(Math.abs((1.01-1)**2-0.0001)<1e-12);
}


// Truncation-error regression: the public lesson, source solutions, and numerical identities.
{
  const lesson=getBookSectionContent("num-truncation-error");
  assert.ok(lesson,"Authored truncation-error lesson missing from public registry");
  const defs=lesson.formal.filter(item=>item.kind==="definition");
  const results=lesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
  assert.equal(defs.length,4);
  assert.equal(results.length,6);
  assert.equal(lesson.examples.length,8);
  assert.equal(lesson.exercises.length,8);
  for(const item of defs){
    assert.ok(lesson.examples.some(example=>example.forDefinition===item.title),
      "Truncation definition has no directly linked example: "+item.title);
  }
  for(const item of results){
    assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>350,
      "Truncation proof is incomplete: "+item.title);
    assert.ok(item.proof.at(-1).includes("\\square"),
      "Truncation proof lacks closure: "+item.title);
  }
  for(const example of lesson.examples)
    assert.ok(example.solution.length>=3 && normalize(example.solution.join(" ")).length>350,
      "Truncation example is incomplete: "+example.title);
  for(const exercise of lesson.exercises)
    assert.ok(normalize(exercise.answer).length>450 &&
      !/jawaban yang baik|contoh harus|rubrik|soal harus/i.test(exercise.answer),
      "Truncation solution still contains a rubric: "+exercise.prompt);
  const numerical=bookSubjects.find(subject=>subject.slug==="analisis-numerik");
  assert.ok(numerical?.chapters.some(ch=>ch.sections.some(sec=>sec.slug==="num-truncation-error")),
    "Truncation lesson is not registered in the public curriculum");

  const close=(a,b,tol=1e-10)=>assert.ok(Math.abs(a-b)<tol,
    "Truncation identity mismatch: "+a+" versus "+b);
  const e=Math.exp;
  const taylor=e(0.2)-1.22;
  assert.ok(taylor>0 && taylor<e(0.2)*0.2**3/6);
  close(e(0.1)-1.105,0.000170918076,1e-9);
  assert.ok(e(0.1)-1.105<e(0.1)*0.1**3/6);
  close(e(0.1)-1.1,0.005170918076,1e-9);
  close(e(0.1)*(e(0.1)-1.1),0.005714748277,1e-9);
  close((e(0.2)-e(-0.2))/0.4,1.006680012705,1e-9);
  assert.ok(Math.abs((e(0.2)-e(-0.2))/0.4-1)<e(0.2)*0.2**2/6);
  close(Math.sin(0.3)-0.2955,0.000020206661,1e-9);
  assert.ok(Math.abs(Math.sin(0.3)-0.2955)<=0.3**5/120);
  for(const h of [0.2,0.1,0.05]){
    const forward=((2+h)**3-8)/h;
    const central=((2+h)**3-(2-h)**3)/(2*h);
    close(forward,12+6*h+h*h);
    close(central,12+h*h);
  }
  const euler=[1,1.5,2.25];
  close(e(1)-euler[2],0.468281828459,1e-9);
  assert.ok(e(1)-euler[2]<0.3125*e(1));
  const richardson=2*(3+3*0.1+0.1**2)-(3+3*0.2+0.2**2);
  close(richardson,2.98);
  for(const n of [4,5,10,20]){
    const h=1/n;
    let w=0;
    for(let k=0;k<n;k++)w+=h*(k*h);
    close(0.5-w,h/2);
  }
  const B=h=>h+1e-4/h;
  assert.ok(B(0.01)<B(0.1) && B(0.01)<B(0.001));
}


// Secant regression: inspect the rendered lesson and verify the exact two-step algebra.
{
  const lesson=getBookSectionContent("num-secant");
  assert.ok(lesson,"Secant lesson missing from rendered public registry");
  const defs=lesson.formal.filter(item=>item.kind==="definition");
  const results=lesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
  assert.equal(defs.length,4);
  assert.equal(results.length,6);
  assert.equal(lesson.examples.length,8);
  assert.equal(lesson.exercises.length,8);
  for(const item of defs)
    assert.ok(lesson.examples.some(example=>example.forDefinition===item.title),
      "Secant definition lacks a direct example: "+item.title);
  for(const item of results){
    assert.ok(item.proof?.length>=3 && normalize(item.proof.join(" ")).length>350,
      "Secant formal result lacks a substantive proof: "+item.title);
    assert.ok(item.proof.at(-1).includes("\\square"),
      "Secant proof lacks a closing statement: "+item.title);
  }
  for(const example of lesson.examples)
    assert.ok(example.solution.length>=3 && normalize(example.solution.join(" ")).length>350,
      "Secant example is incomplete: "+example.title);
  for(const exercise of lesson.exercises)
    assert.ok(normalize(exercise.answer).length>400 &&
      !/jawaban yang baik|contoh harus|rubrik|soal harus/i.test(exercise.answer),
      "Secant exercise still has an incomplete rubric: "+exercise.prompt);
  const numerical=bookSubjects.find(subject=>subject.slug==="analisis-numerik");
  assert.ok(numerical?.chapters.some(ch=>ch.sections.some(sec=>sec.slug==="num-secant")),
    "Secant page missing from numerical analysis curriculum");
  const f=x=>x*x-2;
  const step=(a,b)=>b-f(b)*(b-a)/(f(b)-f(a));
  const x2=step(1,2),x3=step(2,x2),x4=step(x2,x3);
  assert.ok(Math.abs(x2-4/3)<1e-12);
  assert.ok(Math.abs(x3-7/5)<1e-12);
  assert.ok(Math.abs(x4-58/41)<1e-12);
  assert.ok(Math.abs(f(58/41)-2/1681)<1e-12);
  assert.equal(f(-1),f(1)); // Different abscissas need not give a valid secant slope.
  const r=1,a=0.5,e0=0.1,e1=-0.1;
  const e2=a*e0*e1/(1+a*(e0+e1));
  assert.ok(Math.abs(e2+1/200)<1e-12);
  assert.ok(Math.abs((r+e2)-199/200)<1e-12);
  for(const scale of [0.1,7,-3]){
    const g=x=>scale*f(x);
    const z=2-g(2)*(2-1)/(g(2)-g(1));
    assert.ok(Math.abs(z-x2)<1e-12);
  }
}


// Curated LP/ANOVA/CLT regression: test the exact original public exercises, not rubric length alone.
{
  const cases=[
    ["or-lp-formulasi","Maksimumkan $z=3x+2y$",["3x+2y\\le10","tunggal","(2,2)"]],
    ["sta-anova-oneway","Kelompok A mempunyai data",["20=4+16","suku silang","F=16/2=8"]],
    ["stm-clt","Misalkan $X_1",["0.022750132","APROKSIMASI","Berry"]]
  ];
  for(const [slug,prefix,markers] of cases){
    const lesson=getBookSectionContent(slug);
    assert.ok(lesson,"Missing rendered lesson for curated regression: "+slug);
    const exercise=lesson.exercises.find(item=>item.prompt.includes(prefix));
    assert.ok(exercise,"Missing original curated exercise: "+slug);
    assert.ok(normalize(exercise.answer).length>900,
      "Curated answer still lacks derivation and verification: "+slug);
    for(const marker of markers)
      assert.ok(exercise.answer.includes(marker),
        "Missing substantive mathematical check "+marker+" in "+slug);
    assert.ok(!/jawaban yang baik|contoh harus|rubrik/i.test(exercise.answer),
      "Curated answer contains a generic rubric: "+slug);
  }
  // LP upper-bound certificate and uniqueness at the active constraints.
  const lp=(x,y)=>3*x+2*y;
  for(let x=0;x<=3;x+=0.25)for(let y=0;y<=4;y+=0.25)
    if(x+y<=4+1e-12 && 2*x+y<=6+1e-12)
      assert.ok(lp(x,y)<=10+1e-12);
  assert.equal(lp(2,2),10);
  // Exact ANOVA decomposition and degrees of freedom.
  const groups=[[1,3],[5,7]];
  const means=groups.map(g=>g.reduce((a,b)=>a+b,0)/g.length);
  const all=groups.flat(), grand=all.reduce((a,b)=>a+b,0)/all.length;
  const sst=all.reduce((s,v)=>s+(v-grand)**2,0);
  const ssb=groups.reduce((s,g,i)=>s+g.length*(means[i]-grand)**2,0);
  const sse=groups.reduce((s,g,i)=>s+g.reduce((t,v)=>t+(v-means[i])**2,0),0);
  assert.deepEqual([sst,ssb,sse],[20,16,4]);
  assert.equal(ssb/(groups.length-1)/(sse/(all.length-groups.length)),8);
  // CLT standard error and standardized threshold; approximation not exact by moments alone.
  const se=Math.sqrt(4/100);
  assert.equal(se,0.2);
  assert.ok(Math.abs((10.4-10)/se-2)<1e-12);
}


// Authored LP/ANOVA/CLT worked-example regression, checking the public rendered registry.
{
  for(const [slug,count] of [["or-lp-formulasi",3],["sta-anova-oneway",2],["stm-clt",2]]){
    const lesson=getBookSectionContent(slug);
    assert.ok(lesson,"Missing public lesson for reviewed examples: "+slug);
    assert.equal(lesson.examples.length,count,"Reviewed example count mismatch: "+slug);
    for(const example of lesson.examples){
      assert.ok(example.solution.length>=3,"Worked example lacks a stepwise solution: "+example.title);
      assert.ok(normalize(example.solution.join(" ")).length>430,
        "Worked example still too shallow: "+example.title);
      assert.ok(!/jawaban yang baik|contoh harus|rubrik/i.test(example.solution.join(" ")),
        "Generic solution in "+example.title);
    }
  }
  const lp=getBookSectionContent("or-lp-formulasi");
  assert.ok(lp.formal.some(item=>item.kind==="theorem" &&
    item.title==="Optimum pada Titik Sudut Poligon Terbatas" &&
    item.proof?.length===3 && item.proof.at(-1).includes("\\square")),
    "Bounded LP corner theorem is missing or unproved");
  assert.ok(lp.examples.some(example=>example.forDefinition==="Program Linear"),
    "LP definition has no directly linked example");
  const anova=getBookSectionContent("sta-anova-oneway");
  assert.ok(anova.examples.some(example=>example.solution.join(" ").includes("12-2=10")),
    "ANOVA pseudoreplication case not demonstrated");
  const clt=getBookSectionContent("stm-clt");
  assert.ok(clt.examples.some(example=>example.solution.join(" ").includes("0.02844397")),
    "Binomial exact-versus-CLT comparison missing");
  // Independent arithmetic checks for the reviewed worked examples.
  assert.equal(3*2+2*2,10);
  assert.equal(5*(8/3)+4*(8/3),24);
  assert.equal(2*(8/3)+(8/3),8);
  assert.equal(16/1/(4/2),8);
  const choose=(n,k)=>{let x=1;for(let j=1;j<=k;j++)x=x*(n-j+1)/j;return x};
  let tail=0;
  for(let k=60;k<=100;k++)tail+=choose(100,k)/2**100;
  assert.ok(Math.abs(tail-0.028443966820490395)<1e-12);
  assert.ok(Math.abs(0.02871655981600182-tail)<0.0003);
}


// Regression for the actual narrative introductions (not just answer length).
for(const [slug,markers] of [
  ["or-lp-formulasi",["sertifikat batas atas","kelayakan"]],
  ["sta-anova-oneway",["suku silang","Replikasi semu"]],
  ["stm-clt",["standard error","koreksi kontinuitas"]]
]){
  const lesson=getBookSectionContent(slug);
  assert.ok(lesson?.intro?.length>=3,"Missing specific introduction: "+slug);
  const intro=lesson.intro.join(" ");
  assert.ok(normalize(intro).length>700,"Introduction still generic or too short: "+slug);
  for(const marker of markers)
    assert.ok(intro.includes(marker),"Missing specific concept "+marker+" in "+slug);
}


// Authored linearity and modeling lesson regression: mathematical substance, not a word-count certificate.
{
  const lesson=getBookSectionContent("or-linearitas");
  assert.ok(lesson,"Authored linearity lesson is not rendered");
  const defs=lesson.formal.filter(item=>item.kind==="definition");
  const results=lesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
  assert.equal(defs.length,4,"Linearity definitions changed");
  assert.equal(results.length,6,"Linearity formal results changed");
  assert.equal(lesson.examples.length,8,"Linearity examples changed");
  assert.equal(lesson.exercises.length,8,"Linearity exercises changed");
  for(const def of defs)
    assert.ok(lesson.examples.some(example=>example.forDefinition===def.title),
      "Definition without a directly linked example: "+def.title);
  for(const result of results){
    assert.ok(result.proof?.length>=2 && normalize(result.proof.join(" ")).length>180,
      "Missing substantial proof: "+result.title);
    assert.ok(result.proof.at(-1).includes("\\square"),
      "Proof lacks closure: "+result.title);
  }
  for(const example of lesson.examples)
    assert.ok(example.solution.length>=3 && normalize(example.solution.join(" ")).length>320,
      "Linearity example lacks detailed mathematical steps: "+example.title);
  for(const exercise of lesson.exercises)
    assert.ok(normalize(exercise.answer).length>380 &&
      !/jawaban yang baik|contoh harus|rubrik/i.test(exercise.answer),
      "Linearity exercise still contains a short or generic answer");
  assert.ok(lesson.intro.join(" ").includes("proporsionalitas") &&
    lesson.intro.join(" ").includes("keterbagian"),
    "Linearity introduction does not distinguish modeling assumptions");
  assert.equal(2*3+2,8);
  assert.equal(3*2+2*3,12);
  assert.equal(3*(1+2)+(2*1+2),13);
  assert.equal(5*1+4*2,13);
  for(let x=0;x<=4;x+=0.25)
    for(let y=0;y<=4;y+=0.25)
      if(x+y<=3+1e-12 && 2*x+y<=4+1e-12)
        assert.ok(5*x+4*y<=13+1e-12);
  assert.equal(3*(11/4),33/4);
  assert.equal(33/4-6,9/4);
  assert.equal(7*(3/5)+2*3,10.2);
  assert.equal(7+2*3,13);
}


// Authored LP applications regression: inspect the source actually rendered by the public lesson.
{
  const lesson=getBookSectionContent("or-lp-aplikasi");
  assert.ok(lesson,"LP applications lesson missing from public catalog");
  const defs=lesson.formal.filter(item=>item.kind==="definition");
  const proved=lesson.formal.filter(item=>["proposition","theorem","lemma","corollary"].includes(item.kind));
  assert.equal(defs.length,4,"LP applications definitions changed");
  assert.equal(proved.length,6,"LP applications formal results changed");
  assert.equal(lesson.examples.length,8,"LP applications examples changed");
  assert.equal(lesson.exercises.length,8,"LP applications exercises changed");
  for(const def of defs){
    assert.ok(lesson.examples.some(ex=>ex.forDefinition===def.title),
      "LP application definition has no direct example: "+def.title);
  }
  for(const result of proved){
    assert.ok(result.proof?.length>=2 &&
      normalize(result.proof.join(" ")).length>300 &&
      result.proof.at(-1).includes("\\square"),
      "LP application result is not fully proved: "+result.title);
  }
  for(const ex of lesson.examples){
    assert.ok(ex.solution.length>=3 && normalize(ex.solution.join(" ")).length>450,
      "LP application example lacks substantive computation: "+ex.title);
  }
  for(const [i,exercise] of lesson.exercises.entries()){
    assert.ok(exercise.prompt.startsWith("AP-0"+(i+1)+"."),
      "LP application exercise numbering mismatch: "+i);
    assert.ok(normalize(exercise.answer).length>450 &&
      !/jawaban yang baik|contoh harus|rubrik/i.test(exercise.answer),
      "LP application exercise still generic or incomplete: "+exercise.prompt);
  }
  const text=lesson.intro.join(" ");
  for(const marker of ["satuan","kapasitas","pencampuran","transportasi","sensitivitas"])
    assert.ok(text.includes(marker),"LP application introduction lacks "+marker);
  // Production: dual upper-bound certificate and feasible equality.
  assert.equal(2*3+2,8);
  assert.equal(3+2,5);
  assert.equal(4*3+3*2,18);
  for(let x=0;x<=4;x+=0.25)for(let y=0;y<=5;y+=0.25)
    if(x+y<=5+1e-12 && 2*x+y<=8+1e-12)
      assert.ok(4*x+3*y<=18+1e-12,"Production LP certificate violated");
  // Blending: two distinct units, both binding constraints, and dual lower bound.
  assert.equal(4+8,12);
  assert.ok(Math.abs(.1*4+.4*8-3.6)<1e-12);
  assert.equal(3*4+6*8,60);
  // Transportation: all four flow balances and global linear cost.
  const flow=[4,0,1,5];
  assert.equal(flow[0]+flow[1],4);
  assert.equal(flow[2]+flow[3],6);
  assert.equal(flow[0]+flow[2],5);
  assert.equal(flow[1]+flow[3],5);
  assert.equal(flow[0]+4*flow[1]+3*flow[2]+2*flow[3],17);
  // Diet: exact rational intersection and lower bound.
  assert.equal(3*(6/5)+12/5,6);
  assert.equal(6/5+2*(12/5),6);
  assert.ok(Math.abs(5*(6/5)+4*(12/5)-78/5)<1e-12);
  // Staffing: integer feasible solution and lower-bound decomposition.
  assert.equal(3+4+2,9);
  assert.equal(7*3+6*4+2*2,49);
  // Sensitivity: dual multipliers remain nonnegative exactly on [-1,2].
  for(const delta of [-1,-.5,0,1,2]){
    const u=2-delta,v=1+delta;
    assert.ok(u>=0 && v>=0);
    assert.equal(u+2*v,4+delta);
    assert.equal(u+v,3);
  }
  // Integrality: compare relaxed optimum to enumerated integer feasible points.
  let integerBest=-Infinity;
  for(let x=0;x<=3;x++)for(let y=0;y<=2;y++)
    if(2*x+3*y<=7)integerBest=Math.max(integerBest,3*x+4*y);
  assert.equal(integerBest,10);
  assert.equal(3*(7/2),21/2);
}


// Ito-isometry authored lesson regression: inspect the rendered override and original curated answer.
{
  const lesson=getBookSectionContent("ks-ito-isometry");
  assert.ok(lesson,"Ito-isometry lesson missing");
  const defs=lesson.formal.filter(item=>item.kind==="definition");
  const results=lesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
  assert.equal(defs.length,4,"Ito-isometry definitions changed unexpectedly");
  assert.equal(results.length,5,"Ito-isometry formal results changed unexpectedly");
  assert.equal(lesson.examples.length,8,"Ito-isometry worked examples missing");
  assert.ok(lesson.exercises.length>=9,"Original curated exercise or new exercises missing");
  for(const d of defs){
    assert.ok(lesson.examples.some(ex=>ex.forDefinition===d.title),"Definition lacks directly linked example: "+d.title);
  }
  for(const result of results){
    assert.ok(result.proof?.length>=2 && normalize(result.proof.join(" ")).length>400,"Ito proof too short: "+result.title);
    assert.ok(result.proof.at(-1).includes("\\square"),"Ito proof lacks ending: "+result.title);
  }
  for(const ex of lesson.examples)assert.ok(normalize(ex.solution.join(" ")).length>420,"Ito example incomplete: "+ex.title);
  for(const ex of lesson.exercises){
    assert.ok(normalize(ex.answer).length>500 && !/Jawaban yang baik|Contoh harus|Langkah penyelesaian dapat/.test(ex.answer),"Ito exercise is short or rubric-like");
  }
  assert.ok(lesson.exercises.some(ex=>ex.prompt.includes("int_0^1t") && ex.answer.includes("I_n")),"Original curated Ito exercise not expanded");
  assert.equal(1/3,1/(3*1**2));
  assert.equal(4*(1/4)+3/4,7/4);
  assert.equal((3/4-1/2+1/4)/2,1/4);
  assert.ok(Math.abs((4/3-2+1)-1/3)<1e-12,"Ito integral variance floating-point check");
  assert.ok(577<1000/Math.sqrt(3) && 578>=1000/Math.sqrt(3),"Incorrect Ito RMSE threshold");
  for(const n of [2,5,10]){
    const left=Array.from({length:n},(_,k)=>k*k).reduce((a,b)=>a+b,0)/(n**3);
    const closed=(n-1)*n*(2*n-1)/(6*n**3);
    assert.ok(Math.abs(left-closed)<1e-12,"Ito sum of squares incorrect");
    assert.ok(Math.abs((1/3-left)-(3*n-1)/(6*n*n))<1e-12,"Ito sum error mismatch");
  }
}
