import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import katex from "katex";
const read=p=>fs.readFileSync(p,"utf8");
const raw=read("data/competition-problems.ts");
const {outputText}=ts.transpileModule(raw,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}});
const mod={exports:{}};new Function("exports","module",outputText)(mod.exports,mod);
const {competitionProblems,levels}=mod.exports;
assert.deepEqual(levels,["SD","SMP","SMA","Kuliah"]);
assert.equal(new Set(competitionProblems.map(p=>p.id)).size,competitionProblems.length);
let formulaCount=0;
for(const l of levels)assert.ok(competitionProblems.filter(p=>p.level===l).length>=4,l+" has fewer than four reviewed starting problems");
for(const p of competitionProblems){
 assert.ok(/^[a-z0-9-]+$/.test(p.id));assert.ok(levels.includes(p.level));assert.ok(p.difficulty>=1&&p.difficulty<=5);
 assert.ok(p.title.trim()&&p.prompt.trim()&&p.topic.trim()&&p.source.label.trim());
 assert.deepEqual(Object.keys(p).sort(),["difficulty","id","level","prompt","source","title"].concat("topic").sort(),p.id+" includes non-question data");
 assert.ok(["original","competition"].includes(p.source.kind));
 if(p.source.kind==="competition"){assert.ok(p.source.url?.startsWith("https://")&&p.source.year&&p.source.number&&p.source.competition,p.id+" has incomplete attribution");}
 const strings=[p.prompt];
 for(const s of strings){
  let matched=0;
  for(const m of s.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+)\$/g)){katex.renderToString(m[1]||m[2],{throwOnError:true,strict:"ignore",displayMode:Boolean(m[1])});formulaCount++;matched+=m[0].split("$").length-1;}
  assert.equal(matched,(s.match(/\$/g)||[]).length,p.id+" unpaired math delimiter");
 }
}
const home=read("app/page.tsx"),workspace=read("components/CompetitionWorkspace.tsx"),config=read("config/site.ts"),css=read("app/competition.css"),layout=read("app/layout.tsx");
for(const [route,name] of [["problem-solving","Problem Solving"],["problem-of-the-day","Problem of the Day"]]){
 assert.ok(fs.existsSync("app/"+route+"/page.tsx"),route+" route missing");
 assert.ok(config.includes('href: "/'+route+'"'),route+" missing in main nav");
 assert.ok(home.includes(name),name+" missing from landing page");
}
assert.doesNotMatch(home,/HomeMathShowcase|\/materi|Interactive Lab|Math Tools|Find the Mistake/);
assert.ok(read("app/arsip/page.tsx").includes('"/materi"'),"Legacy material archive is missing");
assert.doesNotMatch(workspace,/Ruang kerja|Catatan penyelesaian|Periksa argumen|Progressive Hints|Tandai selesai|setNotes|localStorage|p\.proof\.prompt|p\.evolution\.prompt/);
assert.match(workspace,/Asia\/Jakarta/);assert.match(workspace,/dayIndex\(date\)/);assert.doesNotMatch(workspace,/p\.solutions|id="solution"|dan solusi|beserta pembahasan/);assert.match(workspace,/p\.prompt/);assert.match(workspace,/id="source"/);assert.doesNotMatch(config,/Proof Academy|Problem Evolution/);
assert.match(read("app/problem-solving/[id]/page.tsx"),/generateStaticParams/);
assert.ok(fs.existsSync("archive/competition-problems-with-solutions.ts"),"Previous solutions must be preserved in the repository");
assert.doesNotMatch(workspace,/archive\/competition-problems-with-solutions/);
assert.doesNotMatch(home,/dan solusi|beserta pembahasan/);
assert.match(layout,/competition\.css/);assert.match(css,/@media\(max-width:500px\)/);assert.match(css,/prefers-reduced-motion/);
for(const color of ["#061B3E","#0B2D6B","#1565D8","#00C2FF","#F3F7FB","#1F2A44","#64748B","#FFFFFF"])assert.ok(css.includes(color),"Missing official brand color "+color);
assert.doesNotMatch(css,/--cmp-teal|#0a6e70|#79e0cd/i,"Off-brand teal palette must not return");
console.log("Competition platform audit passed:",competitionProblems.length,"problems,",formulaCount,"KaTeX expressions, all four levels and two navigation routes. Public records contain questions and attribution only.");
