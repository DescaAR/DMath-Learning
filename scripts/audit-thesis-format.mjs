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
  "Diketahui ruang topologi $(X,\\tau)$.\nDibuktikan bahwa dua sifat ekuivalen.\nPembuktian dilakukan dalam dua arah.\n(⇒) Diketahui sifat $P$.\nDibuktikan bahwa sifat $Q$.\nDiambil sebarang $x\\in X$.\n(⇐) Diketahui sifat $Q$.\nDibuktikan bahwa sifat $P$.\nDiambil sebarang $y\\in X$."
]);
assert.equal(twoWays.directions.length,2,"Both implication directions must be kept");
assert.equal(twoWays.directions[0].known,"sifat $P$.");
assert.equal(twoWays.directions[0].target,"sifat $Q$.");
assert.equal(twoWays.directions[1].known,"sifat $Q$.");
assert.equal(twoWays.directions[1].target,"sifat $P$.");
assert.ok(twoWays.directions[0].steps[0].includes("Diambil"));

const multipart=parse([
  "(1) Aproksimasi supremum.\nDiketahui $M=\\sup A$.\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat titik yang mendekati $M$.\nAmbil sebarang $\\eta>0$.\n(2) Aproksimasi infimum.\nDiketahui $m=\\inf A$.\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat titik yang mendekati $m$.\nAmbil sebarang $\\eta>0$."
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

// Audit genuine, author-linked examples rather than pairing unrelated cards by index.
const additionalExamples=fs.readFileSync(path.join(root,"data/definition-examples-part3.ts"),"utf8");
const authored=[...additionalExamples.matchAll(/^\s*"analisis-real:([^"]+)":\{/gm)].map(match=>match[1]);
assert.equal(authored.length,23,"Expected 23 newly authored Real Analysis examples");
assert.equal(new Set(authored).size,authored.length,"Duplicate definition-example key");
const realSources=["data/real-analysis-book-content-a.ts","data/real-analysis-book-content-b.ts"]
  .map(file=>fs.readFileSync(path.join(root,file),"utf8")).join("\n");
for(const title of authored){
  assert.ok(realSources.includes('D("'+title+'"'),"Example has no matching definition: "+title);
  assert.ok(additionalExamples.includes('forDefinition:"'+title+'"'),
    "Example must explicitly identify its source definition: "+title);
}

// Check authoring order: each definition's example precedes any explanation.
const deep=fs.readFileSync(path.join(root,"components/DeepMaterialPage.tsx"),"utf8");
const definitionPart=deep.slice(deep.indexOf("{definitions.map("),deep.indexOf("</section>",deep.indexOf("{definitions.map(")));
assert.ok(definitionPart.indexOf("{example&&")<definitionPart.indexOf("{definition.intuition&&"),
  "Definitions must be followed immediately by examples, before extra commentary");
const formalChapter=fs.readFileSync(path.join(root,"components/FormalChapterSection.tsx"),"utf8");
assert.ok(formalChapter.indexOf("{definitionExample&&")<formalChapter.indexOf("{block.intuition&&"),
  "Formal Chapter examples must appear directly beneath definitions");
assert.match(formalChapter,/number=\{chapterNumber\+"\."\+ordinal\}/,
  "Formal chapter numbering must not be hard-coded to chapter one");

// Reviewed proof directions replace old paragraphs and cannot appear twice.
assert.match(thesis,/const hasReviewedStructure=Boolean\(directions\?\.length\|\|targets\?\.length\)/);
assert.match(thesis,/parseThesisProof\(hasReviewedStructure\?\[\]:\(proof\?\?\[\]\)\)/);
assert.doesNotMatch(deep,/Hasil ini merumuskan hubungan formal yang digunakan pada contoh/);
const proofStructures=fs.readFileSync(path.join(root,"data/thesis-proof-structures.ts"),"utf8");
assert.match(proofStructures,/"analisis-real:theorem:Kriteria Cauchy di ℝ"/);
assert.match(proofStructures,/direction:"forward"/);
assert.match(proofStructures,/direction:"backward"/);
console.log("DMath thesis format audit passed: parser, five renderers, proof order, chapter numbering, and 23 linked definitions.");

