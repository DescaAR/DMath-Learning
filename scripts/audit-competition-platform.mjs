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
 if(p.source.kind==="original")assert.equal(p.source.label,"DMath Learning Proposed");
 if(p.source.kind==="competition"){assert.ok(p.source.url?.startsWith("https://")&&p.source.year&&p.source.number&&p.source.stage&&p.source.competition,p.id+" has incomplete attribution");}
 const strings=[p.prompt];
 for(const s of strings){
  let matched=0;
  for(const m of s.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+)\$/g)){katex.renderToString(m[1]||m[2],{throwOnError:true,strict:"ignore",displayMode:Boolean(m[1])});formulaCount++;matched+=m[0].split("$").length-1;}
  assert.equal(matched,(s.match(/\$/g)||[]).length,p.id+" unpaired math delimiter");
 }
}
const home=read("app/page.tsx"),workspace=read("components/CompetitionWorkspace.tsx"),config=read("config/site.ts"),css=read("app/competition.css"),layout=read("app/layout.tsx");
for(const [route,name] of [["olimpiade-sd","Olimpiade SD"],["olimpiade-smp","Olimpiade SMP"],["olimpiade-sma","Olimpiade SMA"],["olimpiade-kuliah","Olimpiade Kuliah"]]){
 assert.ok(fs.existsSync("app/"+route+"/page.tsx"),route+" route missing");
 assert.ok(fs.existsSync("app/"+route+"/potd/page.tsx"),route+" daily route missing");
 assert.ok(config.includes('href: "/'+route+'"'),route+" missing in main nav");
}
assert.doesNotMatch(config,/label: "Problem Solving"|label: "Problem of the Day"/);
assert.match(home,/LevelCards/);assert.match(home,/ProblemOfDay/);
assert.doesNotMatch(home,/HomeMathShowcase|\/materi|Interactive Lab|Math Tools|Find the Mistake/);
assert.ok(read("app/arsip/page.tsx").includes('"/materi"'),"Legacy material archive is missing");
assert.doesNotMatch(workspace,/Ruang kerja|Catatan penyelesaian|Periksa argumen|Progressive Hints|Tandai selesai|setNotes|localStorage|p\.proof\.prompt|p\.evolution\.prompt/);
assert.match(workspace,/Asia\/Jakarta/);assert.match(workspace,/dailySchedule\[date\]/);assert.doesNotMatch(workspace,/%group\.length|dayIndex\(date\)/);assert.doesNotMatch(workspace,/p\.solutions|id="solution"|dan solusi|beserta pembahasan/);assert.match(workspace,/p\.prompt/);assert.match(workspace,/id="source"/);assert.doesNotMatch(config,/Proof Academy|Problem Evolution/);
assert.match(read("app/problem-solving/[id]/page.tsx"),/generateStaticParams/);
assert.ok(fs.existsSync("archive/competition-problems-with-solutions.ts"),"Previous solutions must be preserved in the repository");
assert.doesNotMatch(workspace,/archive\/competition-problems-with-solutions/);
assert.doesNotMatch(home,/dan solusi|beserta pembahasan/);
assert.match(layout,/competition\.css/);assert.match(css,/@media\(max-width:500px\)/);assert.match(css,/prefers-reduced-motion/);
for(const color of ["#061B3E","#0B2D6B","#1565D8","#00C2FF","#F3F7FB","#1F2A44","#64748B","#FFFFFF"])assert.ok(css.includes(color),"Missing official brand color "+color);
assert.doesNotMatch(css,/--cmp-teal|#0a6e70|#79e0cd/i,"Off-brand teal palette must not return");
assert.match(home,/cmp-hero-index/,"Home must prioritize a functional collection index");
assert.doesNotMatch(home,/cmp-collection-panel/,"Avoid decorative stats panel");
assert.match(workspace,/cmp-catalog-layout/);assert.match(workspace,/cmp-problem-list/);assert.match(workspace,/cmp-daily-grid/);
assert.match(css,/\.cmp-hero\{background:var\(--cmp-paper\)/,"Light editorial hero required");
const dailyRaw=read("data/competition-daily.ts");
const dailyModule={exports:{}};
new Function("exports","module",ts.transpileModule(dailyRaw,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(dailyModule.exports,dailyModule);
const {dailySchedule,dailyDates}=dailyModule.exports;
const scheduledIds=new Set();
for(const date of dailyDates){
 assert.match(date,/^\d{4}-\d{2}-\d{2}$/);
 assert.equal(new Date(date+"T00:00:00Z").toISOString().slice(0,10),date);
 assert.deepEqual(Object.keys(dailySchedule[date]).sort(),[...levels].sort());
 for(const l of levels){
  const id=dailySchedule[date][l];
  assert.ok(competitionProblems.some(p=>p.id===id&&p.level===l),date+" invalid question for "+l);
  assert.ok(!scheduledIds.has(id),"Duplicate daily question: "+id);
  scheduledIds.add(id);
 }
}
console.log("POTD audit passed:",dailyDates.length,"dates,",scheduledIds.size,"unique questions.");
const header=read("components/SiteHeader.tsx"),footer=read("components/SiteFooter.tsx"),languageCompat=read("components/LanguageProvider.tsx");
assert.doesNotMatch(header,/toggleLanguage|language-toggle|Switch to English/);
assert.doesNotMatch(footer,/useLanguage|language==="en"/);
assert.doesNotMatch(layout,/<LanguageProvider/);
assert.match(layout,/<html lang="id" data-language="id"/);
assert.doesNotMatch(languageCompat,/MutationObserver|localStorage|translatePlainText|translateRichText/);
assert.doesNotMatch(workspace,/Foundation|Intermediate|Advanced|Expert|Master|Problem of the Day|DAILY PROBLEMS/);
assert.match(workspace,/Soal Harian/);
for(const year of [2020,2021,2022,2023,2024,2025,2026])assert.ok(competitionProblems.some(p=>p.source.year===year),"Missing year "+year);
const arMod={exports:{}};new Function("exports","module",ts.transpileModule(read("data/competition-archives.ts"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(arMod.exports,arMod);const archives=arMod.exports.competitionArchives;assert.equal(new Set(archives.map(a=>a.id)).size,archives.length);for(const l of levels)assert.ok(archives.some(a=>a.level===l));for(const a of archives){assert.ok(levels.includes(a.level)&&a.year>=2020&&a.year<=2026&&a.stage&&a.url.startsWith("https://")&&a.provider&&a.note);assert.ok(["resmi","tautan","terbatas"].includes(a.status));}assert.doesNotMatch(workspace,/competitionArchives|cmp-archive-section|Arsip naskah kompetisi|Referensi kompetisi/,"Competition archives are internal research data, not reader-facing content");assert.match(workspace,/setYear/);assert.match(workspace,/setContest/);assert.match(workspace,/setStage/);for(const year of [2020,2021,2022,2023,2024,2025,2026])assert.ok(archives.some(a=>a.year===year));
console.log("2020–2026 archive audit:",archives.length,"source references.");
console.log("Competition platform audit passed:",competitionProblems.length,"problems,",formulaCount,"KaTeX expressions, all four levels and dedicated daily routes. Public records contain questions and attribution only.");
