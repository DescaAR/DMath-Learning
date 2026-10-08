import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root=process.cwd();
const code=fs.readFileSync(path.join(root,"lib/thesis-proof-parser.ts"),"utf8");
const js=ts.transpileModule(code,{compilerOptions:{
  module:ts.ModuleKind.CommonJS,
  target:ts.ScriptTarget.ES2017,
  strict:true
}}).outputText;
const module={exports:{}};
new Function("module","exports",js)(module,module.exports);
const parse=module.exports.parseThesisProof;
assert.equal(typeof parse,"function","Proof parser must be exported");

const twoWays=parse([
  "Diketahui ruang topologi $(X,\\tau)$.\\nDibuktikan bahwa dua sifat ekuivalen.\\nPembuktian dilakukan dalam dua arah.\\n(⇒) Diketahui sifat $P$.\\nDibuktikan bahwa sifat $Q$.\\nDiambil sebarang $x\\in X$.\\n(⇐) Diketahui sifat $Q$.\\nDibuktikan bahwa sifat $P$.\\nDiambil sebarang $y\\in X$."
]);
assert.equal(twoWays.directions.length,2,"Both implication directions must be kept");
assert.equal(twoWays.directions[0].known,"sifat $P$.");
assert.equal(twoWays.directions[0].target,"sifat $Q$.");
assert.equal(twoWays.directions[1].known,"sifat $Q$.");
assert.equal(twoWays.directions[1].target,"sifat $P$.");
assert.ok(twoWays.directions[0].steps[0].includes("Diambil"));

const multipart=parse([
  "(1) Aproksimasi supremum.\\nDiketahui $M=\\sup A$.\\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat titik yang mendekati $M$.\\nAmbil sebarang $\\eta>0$.\\n(2) Aproksimasi infimum.\\nDiketahui $m=\\inf A$.\\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat titik yang mendekati $m$.\\nAmbil sebarang $\\eta>0$."
]);
assert.equal(multipart.targets.length,2,"Separate proof goals must be recognized");
assert.ok(multipart.targets[0].target.startsWith("untuk setiap"));
assert.ok(multipart.targets[1].known.includes("inf A"));
assert.equal(multipart.targets[0].steps.length,1);

const normal=parse([
  "Ambil sebarang $\\varepsilon>0$.",
  "Pilih $\\delta=\\varepsilon/3$.",
  "Jika $0<|x-a|<\\delta$, ketaksamaan yang dibutuhkan berlaku."
]);
assert.equal(normal.paragraphs.length,3,"Ordinary proofs remain as three prose paragraphs");
assert.equal(normal.directions.length,0);
assert.equal(normal.targets.length,0);

const rendererFiles=[
  "components/BookSectionPage.tsx",
  "components/DeepMaterialPage.tsx",
  "components/IntegralRiemannDarbouxPage.tsx",
  "components/ComplexAnalysisPage.tsx",
  "components/FormalChapterSection.tsx",
];
for(const file of rendererFiles){
  const text=fs.readFileSync(path.join(root,file),"utf8");
  assert.match(text,/ThesisFormalBlock/,"Missing thesis format renderer in "+file);
}
const thesis=fs.readFileSync(path.join(root,"components/ThesisFormalBlock.tsx"),"utf8");
assert.match(thesis,/Bukti\./,"Thesis proof must start with Bukti.");
assert.match(thesis,/Diketahui/,"Thesis proof must support premises");
assert.match(thesis,/Dibuktikan/,"Thesis proof must support proof targets");
assert.match(thesis,/thesis-proof-direction/,"Thesis proof must support two directions");
assert.match(thesis,/thesis-proof-targets/,"Thesis proof must support enumerated claims");

console.log("DMath thesis format audit passed: parser and all five material renderers.");
