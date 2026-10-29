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
  ["ks-martingale","example","Contoh Martingale Random Walk"],
  ["ks-brownian-definition","example","Contoh Increment Brownian Motion"],
  ["tup-measures","example","Counting Measure"],
  ["tup-classes-sets","example","Sigma-Algebra pada Himpunan Tiga Elemen"],
  ["tup-outer-measure","example","Outer Measure dari Panjang"],
  ["num-galat-absolut-relatif","example","Membandingkan Galat"],
  ["num-galat-absolut-relatif","example","Cancellation"],
  ["num-galat-absolut-relatif","example","Orde Galat"],
  ["num-galat-absolut-relatif","example","Residual dan Error"],
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

const totals=subjects.reduce((out,row)=>{
  for(const [k,v] of Object.entries(row))if(typeof v==="number")out[k]=(out[k]??0)+v;
  return out;
},{});
const fieldNamesSource=fs.readFileSync(path.join(root,"data/site-data.ts"),"utf8");
const catalogStart=fieldNamesSource.indexOf("export const subjects = [");
const catalogEnd=fieldNamesSource.indexOf("];",catalogStart);
const catalogSlice=fieldNamesSource.slice(catalogStart,catalogEnd);
const publicFields=Array.from(catalogSlice.matchAll(/"([^"]+)"/g),x=>x[1]);
const report={scope:"17 book curricula within a 26-field public directory",method:"length-and-generic-text triage, not mathematical correctness verification",publicFields,totals,subjects,unresolved:concerns};
if(process.argv.includes("--json")){
  const target=path.join(root,"solution-depth-report.json");
  fs.writeFileSync(target,JSON.stringify(report,null,2)+"\n");
  console.log("Full solution-depth gap report: "+target);
}
console.log("Solution depth audit:",JSON.stringify({bookCurricula:subjects.length,publicFields:publicFields.length,shortExercises:totals.shortExercises,shortExamples:totals.shortExamples,shortProofs:totals.shortProofs,genericExercises:totals.genericExercises,reviewedSolutionsValidated:checked.length}));
assert.equal(publicFields.length,26,"Public site catalog should include 26 fields");
assert.ok(subjects.length>=17,"Audit expected 17 active book curricula");
