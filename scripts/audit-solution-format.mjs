import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root=process.cwd();
const read=name=>fs.readFileSync(path.join(root,name),"utf8");
const file=read("lib/academic-solution-format.ts");
const js=ts.transpileModule(file,{compilerOptions:{
  module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022
}}).outputText;
const module={exports:{}};
new Function("module","exports",js)(module,module.exports);
const {prepareAcademicSolution,splitAcademicSolution,normalizeAcademicConnector}=module.exports;

const example=[
  "$X$ dan $\\varnothing$ berada dalam $\\mathcal A$.",
  "Komplemen $\\{1\\}$ adalah $\\{2,3\\}$.",
  "Setiap gabungan terhitung berada dalam $\\mathcal A$."
];
const cleaned=prepareAcademicSolution(example,example[0],example[2]);
assert.equal(cleaned.paragraphs.length,3,"Must preserve authored reasoning paragraphs");
assert.equal(cleaned.independentIdea,undefined,"Duplicate first line must not be a separate idea");
assert.equal(cleaned.independentConclusion,undefined,"Duplicate last line must not be a separate conclusion");
assert.deepEqual(splitAcademicSolution("Nilai 0.5 diperoleh. Nilai 1.5 juga mungkin."),
  ["Nilai 0.5 diperoleh. Nilai 1.5 juga mungkin."],"Do not split on decimal points");
assert.equal(normalizeAcademicConnector("Jadi $A=B$."),"Dengan demikian $A=B$.");
assert.equal(normalizeAcademicConnector("Maka $x=1$."),"Oleh karena itu $x=1$.");
assert.deepEqual(splitAcademicSolution("Baris pertama.\n\nBaris kedua."),
  ["Baris pertama.","Baris kedua."]);

const component=read("components/AcademicSolution.tsx");
assert.match(component,/academic-solution-paragraph/);
assert.doesNotMatch(component,/className="solution-step"|String\(index\+1\)\.padStart\(2/);
assert.doesNotMatch(component,/idea-box|answer-box|Ide Penyelesaian/);
const all=[];
const walk=dir=>{
  if(!fs.existsSync(dir))return;
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
    const pathAbs=path.join(dir,ent.name);
    if(ent.isDirectory())walk(pathAbs);
    else if(/\.tsx$/.test(ent.name))all.push(pathAbs);
  }
};
walk(path.join(root,"components"));
walk(path.join(root,"app"));
const defects=[];
for(const name of all){
  const src=fs.readFileSync(name,"utf8");
  const rel=path.relative(root,name);
  if(/idea=\{example\.solution\[0\]|idea=\{example\.strategy\?\?example\.solution\[0\]/.test(src))
    defects.push(rel+": first reasoning line copied into synthetic idea");
  if(/className="(?:solution-step|formal-proof-step|proof-step)"/.test(src))
    defects.push(rel+": automatic numbered mathematical argument");
  if(/const conclusion\s*=\s*allSteps|const conclusion=allSteps/.test(src))
    defects.push(rel+": last proof line converted into conclusion");
}
assert.deepEqual(defects,[],defects.join("\n"));
for(const name of [
  "components/BookSectionPage.tsx",
  "components/DeepMaterialPage.tsx",
  "components/FormalChapterSection.tsx",
  "components/MaterialPractice.tsx",
  "components/SubjectProblemBank.tsx",
  "components/ProblemPractice.tsx",
  "components/ProblemDetailClient.tsx",
  "components/OlympiadHubPage.tsx",
  "components/BasisDimensionEnglish.tsx"
]){
  const source=read(name);
  assert.match(source,/AcademicSolution|ThesisFormalBlock/,
    name+": must use one of the shared mathematics renderers");
}
const reviewed=read("data/definition-examples.ts");
const sigmaStart=reviewed.indexOf('"teori-ukuran-probabilitas:Sigma-Algebra"');
assert.ok(sigmaStart>=0);
const sigma=reviewed.slice(sigmaStart,reviewed.indexOf('"teori-ukuran-probabilitas:Sistem',sigmaStart));
assert.match(sigma,/gabungan terhitung/);
assert.match(sigma,/komplemen/);
console.log("Audit solusi berhasil:",all.length,"TSX routes/components checked; duplicate ideas, fake conclusions and numbered proof badges absent.");
