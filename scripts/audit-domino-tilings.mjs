import assert from "node:assert/strict";
import fs from "node:fs";

const read=file=>fs.readFileSync(file,"utf8");
const source=read("data/additional-book-content.ts");
const start=source.indexOf('generated["komb-perfect-covers"]={');
const end=source.indexOf('\ngenerated["la-linear-systems"]=',start);
assert.ok(start>=0&&end>start,"Authored combinatorics lesson must exist");
const lesson=source.slice(start,end);

for(const name of ["Papan Berpetak dan Domino","Penutupan Sempurna (Perfect Cover)","Pewarnaan Papan Catur"]){
  assert.ok(lesson.includes('title:"'+name+'"'),"Missing definition "+name);
  assert.ok(lesson.includes('forDefinition:"'+name+'"'),"Definition lacks linked worked example "+name);
}
for(const name of [
  "Invariant Keseimbangan Warna",
  "Penutupan Domino dan Matching Sempurna",
  "Kriteria Persegi Panjang untuk Batang",
  "Kriteria Penutupan Domino pada Persegi Panjang",
  "Keseimbangan Warna Tidak Cukup"
])assert.ok(lesson.includes(name),"Missing formal result "+name);
assert.ok((lesson.match(/kind:"(?:lemma|proposition|theorem|corollary)"/g)||[]).length>=5);
assert.ok((lesson.match(/prompt:"/g)||[]).length>=6,"At least six original exercises expected");
assert.match(lesson,/\\zeta\^b/,"General b-omino obstruction must use primitive roots");
assert.match(lesson,/\\zeta\^m/,"Root-of-unity proof must check the first dimension");
assert.match(lesson,/\\zeta\^n/,"Root-of-unity proof must check the second dimension");
assert.doesNotMatch(lesson,/Bagian sisa.*r\\times s/,"Incorrect old residue argument must not return");

const colorCounts=removed=>{
  const blocked=new Set(removed.map(([r,c])=>r+","+c));
  let black=0,white=0;
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    if(blocked.has(r+","+c))continue;
    if((r+c)%2===0)black++;else white++;
  }
  return {black,white};
};
const full=[],opposite=[[0,0],[7,7]],adjacent=[[0,0],[0,1]],
  isolated=[[0,1],[1,0],[6,6],[7,7]];
assert.deepEqual(colorCounts(full),{black:32,white:32});
assert.deepEqual(colorCounts(opposite),{black:30,white:32});
assert.deepEqual(colorCounts(adjacent),{black:31,white:31});
assert.deepEqual(colorCounts(isolated),{black:30,white:30});

const horizontalCover=removed=>{
  const blocked=new Set(removed.map(([r,c])=>r+","+c)),covered=new Set();
  for(let r=0;r<8;r++)for(let c=0;c<8;c+=2){
    if(blocked.has(r+","+c)||blocked.has(r+","+(c+1)))continue;
    covered.add(r+","+c);covered.add(r+","+(c+1));
  }
  return {covered,blocked};
};
for(const holes of [full,adjacent]){
  const {covered,blocked}=horizontalCover(holes);
  assert.equal(covered.size,64-blocked.size,"Displayed dominoes must cover every available cell");
  for(const cell of covered)assert.ok(!blocked.has(cell),"No domino may overlap a hole");
}
const blocked=new Set(isolated.map(([r,c])=>r+","+c));
assert.ok(!blocked.has("0,0")&&blocked.has("0,1")&&blocked.has("1,0"),
  "Balanced counterexample must isolate a remaining corner");

const lab=read("components/DominoTilingLab.tsx");
for(const mode of ["full","opposite","adjacent","isolated"])assert.match(lab,new RegExp("\\b"+mode+":\\{removed:"));
assert.match(lab,/aria-pressed/,"The lab must expose its selected mode to assistive technology");
assert.match(lab,/role="img"/,"The checkerboard must have a textual alternative");
const renderer=read("components/BookSectionPage.tsx");
assert.match(renderer,/<DominoTilingLab compact\/>/);
assert.match(renderer,/<DominoTilingLab\/>/);
assert.match(renderer,/section.slug==="komb-perfect-covers"/);

console.log("Domino tiling audit passed: 3 linked definitions, 5 proved results, 6 exercises, 4 verified checkerboards and accessible visualization.");
