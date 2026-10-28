import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const read=file=>fs.readFileSync(file,"utf8");
function evaluateTypeScript(source){
  const compiled=ts.transpileModule(source,{compilerOptions:{
    module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022
  }}).outputText;
  const module={exports:{}};
  new Function("module","exports",compiled)(module,module.exports);
  return module.exports;
}

const lesson=evaluateTypeScript(read("data/graph-definitions-content.ts")).graphDefinitionsContent;
assert.ok(lesson,"Graph definitions content must export a real lesson");
const definitions=lesson.formal.filter(item=>item.kind==="definition");
const results=lesson.formal.filter(item=>["lemma","proposition","theorem","corollary"].includes(item.kind));
assert.equal(definitions.length,7,"Seven precise definitions expected");
assert.equal(results.length,7,"Seven proved results expected");
assert.ok(lesson.intro.length>=4&&lesson.intro.every(p=>p.length>=100),
  "The introduction must be substantive and topic-specific");
for(const definition of definitions){
  const linked=lesson.examples.find(ex=>ex.forDefinition===definition.title);
  assert.ok(linked,"Definition lacks an immediately linked example: "+definition.title);
  assert.ok(linked.solution.length>=3,"Example reasoning is incomplete: "+definition.title);
}
for(const result of results){
  assert.ok(result.proof?.length>=2,"Unproved result: "+result.title);
  assert.ok(result.proof.join(" ").length>=260,"Proof needs mathematical detail: "+result.title);
}
assert.equal(lesson.exercises.length,8);
for(const exercise of lesson.exercises){
  assert.ok(exercise.prompt.length>=80,"Exercise needs a concrete mathematical question");
  assert.ok(exercise.answer.length>=260,"Exercise needs a fully explained solution");
}
const titles=results.map(x=>x.title);
for(const name of [
  "Lemma Jabat Tangan",
  "Banyak Simpul Berderajat Ganjil",
  "Batas Banyak Sisi Graf Sederhana",
  "Derajat dan Sisi Dipertahankan Isomorfisme",
  "Matriks Ketetanggaan dan Derajat",
  "Karakterisasi Isomorfisme melalui Matriks Permutasi",
  "Derajat pada Subgraf"
])assert.ok(titles.includes(name),"Missing mathematical result: "+name);

const source=read("components/GraphDefinitionsLab.tsx");
const begin=source.indexOf("const graphs:Record<Mode,Graph>=");
const end=source.indexOf("\n\nconst names:",begin);
assert.ok(begin>=0&&end>begin,"Graph presets must be explicitly defined");
const compiled=ts.transpileModule(source.slice(begin,end),{
  compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}
}).outputText;
const graphs=new Function(compiled+"\nreturn graphs;")();
assert.deepEqual(Object.keys(graphs),["path","relabel","star","cycle","triangles"]);

function signature(g){
  const n=g.labels.length,m=g.edges.length;
  const matrix=Array.from({length:n},()=>Array(n).fill(0));
  const degree=Array(n).fill(0);
  const seen=new Set();
  for(const [u,v] of g.edges){
    assert.ok(Number.isInteger(u)&&Number.isInteger(v)&&u>=0&&v>=0&&u<n&&v<n&&u!==v);
    const key=[u,v].sort((a,b)=>a-b).join(",");
    assert.ok(!seen.has(key),"Preset cannot contain parallel edges");
    seen.add(key);
    matrix[u][v]=matrix[v][u]=1;
    degree[u]++;degree[v]++;
  }
  assert.equal(degree.reduce((a,b)=>a+b,0),2*m,"Handshaking identity failed");
  assert.equal(degree.filter(x=>x%2).length%2,0,"Odd-degree parity failed");
  return {n,m,matrix,degree:degree.sort((a,b)=>b-a)};
}
const p=signature(graphs.path),h=signature(graphs.relabel),s=signature(graphs.star),
  c=signature(graphs.cycle),t=signature(graphs.triangles);
assert.deepEqual([p.n,p.m,p.degree],[4,3,[2,2,1,1]]);
assert.deepEqual([h.n,h.m,h.degree],[4,3,[2,2,1,1]]);
assert.deepEqual([s.n,s.m,s.degree],[4,3,[3,1,1,1]]);
assert.deepEqual([c.n,c.m,c.degree],[6,6,[2,2,2,2,2,2]]);
assert.deepEqual([t.n,t.m,t.degree],[6,6,[2,2,2,2,2,2]]);
// The isomorphism 1->a, 2->c, 3->d, 4->b is a full adjacency equivalence.
const mapping=[0,2,3,1];
for(let i=0;i<4;i++)for(let j=0;j<4;j++){
  assert.equal(p.matrix[i][j],h.matrix[mapping[i]][mapping[j]],
    "Relabelled path must preserve edges and nonedges");
}
const triangleCount=g=>{
  const {matrix}=signature(g);
  let count=0;
  for(let i=0;i<matrix.length;i++)for(let j=i+1;j<matrix.length;j++)
    for(let k=j+1;k<matrix.length;k++)
      if(matrix[i][j]&&matrix[j][k]&&matrix[k][i])count++;
  return count;
};
assert.equal(triangleCount(graphs.cycle),0);
assert.equal(triangleCount(graphs.triangles),2);
assert.match(source,/aria-pressed/);
assert.match(source,/role="img"/);
assert.match(source,/viewBox="0 0 430 300"/);
const catalogue=read("data/book-section-content.ts");
assert.match(catalogue,/"gt-definitions":graphDefinitionsContent/);
const renderer=read("components/BookSectionPage.tsx");
assert.match(renderer,/<GraphDefinitionsLab compact\/>/);
assert.match(renderer,/<GraphDefinitionsLab\/>/);
assert.match(renderer,/section.slug==="gt-definitions"/);
console.log("Graph definitions audit passed: 7 definitions, 7 proved results, 7 linked examples, 8 solved exercises, 5 verified SVG graph presets and correct isomorphism.");
