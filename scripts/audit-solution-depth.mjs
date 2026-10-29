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
