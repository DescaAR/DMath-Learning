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
 assert.ok(p.hints.length>=3&&p.hints.every(h=>h.trim()));
 assert.ok(p.idea&&p.prompt&&p.proof.prompt&&p.proof.answer&&p.evolution.prompt);
 assert.ok(p.solutions.length&&p.solutions.every(s=>s.steps.length>=2&&s.steps.every(x=>x.trim())));
 assert.ok(p.evolution.steps.length>=2);
 if(p.source.kind==="competition"){assert.ok(p.source.url?.startsWith("https://")&&p.source.year&&p.source.number&&p.source.competition,p.id+" has incomplete attribution");}
 const strings=[p.prompt,p.idea,...p.hints,...p.solutions.flatMap(s=>s.steps),p.proof.prompt,p.proof.answer,p.evolution.prompt,...p.evolution.steps];
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
assert.match(workspace,/Asia\/Jakarta/);assert.match(workspace,/dayIndex\(date\)/);assert.match(workspace,/p\.solutions\.map/);assert.match(workspace,/id="solution"/);assert.match(workspace,/id="source"/);assert.doesNotMatch(config,/Proof Academy|Problem Evolution/);
assert.match(read("app/problem-solving/[id]/page.tsx"),/generateStaticParams/);
assert.match(layout,/competition\.css/);assert.match(css,/@media\(max-width:500px\)/);assert.match(css,/prefers-reduced-motion/);
console.log("Competition platform audit passed:",competitionProblems.length,"problems,",formulaCount,"KaTeX expressions, all four levels and two navigation routes. This is structural validation, not a formal proof checker.");
