import assert from "node:assert/strict";
import fs from "node:fs";
const read=p=>fs.readFileSync(p,"utf8");
const css=read("app/study-ui.css");
const layout=read("app/layout.tsx");
const shell=read("components/RiemannHubShell.tsx");
const tracker=read("components/PracticeCompletion.tsx");
const book=read("components/BookSectionPage.tsx");
const deep=read("components/DeepMaterialPage.tsx");
const thesis=read("components/ThesisFormalBlock.tsx");
const solution=read("components/AcademicSolution.tsx");
const practice=read("components/MaterialPractice.tsx");
const bank=read("components/BankCatalogClient.tsx");
assert.match(layout,/import "\.\/study-ui\.css";/,"Study stylesheet must be loaded");
for(const name of [
  ".thesis-formal-group", ".thesis-formal-label", ".thesis-proof",
  ".ird-worked-card", ".ird-worked-solution", ".ird-proof",
  ".ird-summary-card", ".practice-card", ".practice-reveal",
  ".bank-catalog-shell", ".dmath-reading-toolbar", ".dmath-practice-dashboard",
  ".dmath-exercise-complete", ".study-focus-mode", ".katex-display"
])assert.ok(css.includes(name),"Missing component styling: "+name);
for(const file of [book,deep]){
  assert.match(file,/<PracticeSectionProgress\b/);
  assert.match(file,/<PracticeCompletionToggle\b/);
  assert.match(file,/exerciseKeys=\{/);
}
assert.match(shell,/study-focus-mode/);
assert.match(shell,/aria-pressed=\{focused\}/);
assert.match(shell,/sections\.length>1/);
assert.match(tracker,/localStorage\.setItem/);
assert.match(tracker,/STORAGE_PREFIX\+lessonKey/);
assert.match(tracker,/role="progressbar"/);
assert.match(tracker,/aria-valuenow=\{/);
assert.match(tracker,/type="checkbox"/);
assert.match(thesis,/<details className="ird-proof thesis-proof">/);
assert.match(thesis,/thesis-proof-conclusion/);
assert.match(solution,/academic-solution-conclusion/);
assert.match(practice,/aria-expanded=\{Boolean\(openHint/);
assert.match(practice,/aria-expanded=\{Boolean\(openAnswer/);
assert.match(practice,/Tutup Solusi/);
assert.match(bank,/bank-catalog-shell/);
assert.match(css,/@media\(max-width:760px\)/);
assert.match(css,/@media\(max-width:560px\)/);
assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
assert.doesNotMatch(tracker,/fetch\(|XMLHttpRequest|firebase|supabase|https:\/\//,"Progress must remain browser-local");
console.log("DMath study UI audit passed: thesis proofs, math readability, focus mode, exercise tracking, hints, solutions, bank cards and responsive styling.");
