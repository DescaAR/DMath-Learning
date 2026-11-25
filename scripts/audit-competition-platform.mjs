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
const sourceAudit=JSON.parse(read("data/competition-source-audit.json"));
let formulaCount=0;
for(const l of levels)assert.ok(competitionProblems.filter(p=>p.level===l).length>=4,l+" has fewer than four reviewed starting problems");
for(const p of competitionProblems){
 assert.ok(/^[a-z0-9-]+$/.test(p.id));assert.ok(levels.includes(p.level));assert.ok(p.difficulty>=1&&p.difficulty<=5);
 assert.ok(p.title.trim()&&p.prompt.trim()&&p.topic.trim()&&p.source.label.trim());
 assert.deepEqual(Object.keys(p).sort(),["difficulty","id","level","prompt","source","title"].concat("topic").sort(),p.id+" includes non-question data");
 assert.ok(["original","competition"].includes(p.source.kind));
 if(p.source.kind==="original")assert.equal(p.source.label,"DMath Learning Proposed");
 if(p.source.kind==="competition"){
  assert.ok(p.source.year&&p.source.number&&p.source.stage&&p.source.competition,p.id+" has incomplete attribution");
  if(p.source.url!==undefined)assert.ok(p.source.url.startsWith("https://"),p.id+" invalid public source URL");
  else {
   const record=sourceAudit.records[p.id];
   assert.ok(p.source.note?.trim()&&record?.status==="pending_comparison"&&record.sourceUrl===null&&record.comparison?.localSource?.trim()&&record.comparison?.date&&record.comparison?.method?.trim(),p.id+" lacks documented local source");
  }
 }
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
// Validate Indonesian difficulty labels without rejecting official English competition names.
assert.match(workspace,/const difficultyLabels=\["","Dasar","Menengah","Lanjutan","Sulit","Sangat Sulit"\]/);
assert.doesNotMatch(workspace,/Problem of the Day|DAILY PROBLEMS/);
assert.match(workspace,/Soal Harian/);
for(const year of Array.from({length:22},(_,i)=>2005+i))assert.ok(competitionProblems.some(p=>p.source.year===year),"Missing year "+year);
const arMod={exports:{}};new Function("exports","module",ts.transpileModule(read("data/competition-archives.ts"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(arMod.exports,arMod);const archives=arMod.exports.competitionArchives;assert.equal(new Set(archives.map(a=>a.id)).size,archives.length);for(const l of levels)assert.ok(archives.some(a=>a.level===l));for(const a of archives){assert.ok(levels.includes(a.level)&&a.year>=2005&&a.year<=2026&&a.stage&&a.url.startsWith("https://")&&a.provider&&a.note);assert.ok(["resmi","tautan","terbatas"].includes(a.status));}assert.doesNotMatch(workspace,/competitionArchives|cmp-archive-section|Arsip naskah kompetisi|Referensi kompetisi/,"Competition archives are internal research data, not reader-facing content");assert.match(workspace,/setYear/);assert.match(workspace,/setContest/);assert.match(workspace,/setStage/);assert.match(workspace,/<select[^>]*value=\{contest\}|cmp-category-buttons/);assert.match(workspace,/cmp-contest-group/);assert.doesNotMatch(workspace,/\{p\.source\.note\}/);for(const year of Array.from({length:22},(_,i)=>2005+i))assert.ok(archives.some(a=>a.year===year));
console.log("2005–2026 archive audit:",archives.length,"source references.");
console.log("Competition platform audit passed:",competitionProblems.length,"problems,",formulaCount,"KaTeX expressions, all four levels and dedicated daily routes. Public records contain questions and attribution only.");

const parserMod={exports:{}};
new Function("exports","module",ts.transpileModule(read("lib/competition-prompt.ts"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(parserMod.exports,parserMod);
const {splitCompetitionPrompt,splitSubquestions,compactCompetitionMath}=parserMod.exports;
let choices=0,subparts=0;
for(const p of competitionProblems){
 const parsed=splitCompetitionPrompt(p.prompt);
 if(/\bPilihan\s*:/i.test(p.prompt)){
  assert.ok(parsed,p.id+" answer options did not parse");
  const reconstructed=parsed.question+" Pilihan: "+parsed.options.map((o,i)=>String.fromCharCode(65+i)+". "+o).join("; ");
  assert.equal(reconstructed.replace(/\s+/g," ").trim(),p.prompt.replace(/\s+/g," ").trim(),p.id+" answer text lost");
  choices++;
 }
 const body=parsed?.question??p.prompt;
 const parts=splitSubquestions(body);
 if(parts){
  const reconstructed=[parts.intro,...parts.parts.map(x=>"("+x.label+") "+x.text)].filter(Boolean).join(" ");
  assert.equal(reconstructed.replace(/\s+/g," ").trim(),body.replace(/\s+/g," ").trim(),p.id+" subquestion text lost");
  subparts++;
 }
}
assert.ok(choices>=93,"Missing parsed multiple-choice questions");
assert.ok(subparts>=20,"Missing parsed lettered subquestions");
assert.equal(splitSubquestions("Prove $f(a)+f(b)=0$."),null);
assert.deepEqual(splitCompetitionPrompt("Question. Pilihan: A. $x$; B. $y$.").options,["$x$","$y$."]);
assert.deepEqual(splitCompetitionPrompt("Question. Pilihan: A. $\\text{A; B. x}$; B. $y$.").options,["$\\text{A; B. x}$","$y$."]);
const figureBlock=workspace.match(/const geometryFigures:[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
assert.ok(figureBlock,"Missing figure registry");
const visualPolicy=JSON.parse(read("data/competition-figure-provenance.json"));
let figureCount=0;
for(const m of figureBlock[1].matchAll(/"([a-z0-9-]+)"\s*:/g)){
 const id=m[1];
 assert.ok(competitionProblems.some(p=>p.id===id),"Unknown figure ID "+id);
 const svg=read("public/figures/competition/"+id+".svg");
 assert.match(svg,/<svg\b/);
 const evidence=visualPolicy.figures[id];
 assert.ok(fs.existsSync("figures/competition/"+id+".tex")||(evidence?.format==="native-svg"&&evidence.localSource&&evidence.page&&sourceAudit.records[id]?.comparison?.localSource===evidence.localSource),"Missing editable figure source "+id);
 figureCount++;
}
const displayedFigureIds=[...figureBlock[1].matchAll(/"([a-z0-9-]+)"\s*:/g)].map(m=>m[1]).sort();
assert.deepEqual(displayedFigureIds,Object.keys(visualPolicy.figures).sort(),"Every displayed illustration must have question-source provenance");
for(const id of displayedFigureIds){const entry=visualPolicy.figures[id];assert.ok(entry.basis.trim()&&(entry.url?.startsWith("https://")||(entry.format==="native-svg"&&entry.localSource&&entry.page&&sourceAudit.records[id]?.status==="pending_comparison"&&sourceAudit.records[id]?.comparison?.localSource===entry.localSource)),id+" lacks source verification");}
for(const id of visualPolicy.excluded)assert.ok(!displayedFigureIds.includes(id),"Supplementary illustration is not allowed: "+id);
assert.equal(figureCount,displayedFigureIds.length);
assert.ok(competitionProblems.some(p=>p.id==="ksn-smp-2021-07"));
assert.match(workspace,/aria-label="Tabel tiga baris dan delapan kolom"/);
console.log("Question display audit:",choices,"multiple-choice records,",subparts,"lettered lists,",figureCount,"registered figures.");

for(const year of Array.from({length:14},(_,i)=>2013+i)){
 const nums=competitionProblems.filter(p=>p.source.competition==="UMO"&&p.source.year===year).map(p=>p.source.number).sort();
 assert.deepEqual(nums,Array.from({length:6},(_,i)=>"Nomor "+(i+1)), "Incomplete UMO set "+year);
}

for(const p of competitionProblems.filter(p=>p.prompt.includes("[[FIGURE]]"))){
 assert.equal(p.prompt.split("[[FIGURE]]").length,2,p.id+" duplicate diagram placeholder");
 assert.ok(displayedFigureIds.includes(p.id),p.id+" missing diagram");
}

for(const year of [2024,2025,2026]){
 const nums=competitionProblems.filter(p=>p.source.competition==="APMO"&&p.source.year===year).map(p=>p.source.number).sort();
 assert.deepEqual(nums,Array.from({length:5},(_,i)=>"Nomor "+(i+1)), "Incomplete APMO set "+year);
}

for(const year of Array.from({length:7},(_,i)=>2019+i)){
 const nums=competitionProblems.filter(p=>p.source.competition==="IYMC"&&p.source.year===year).map(p=>p.source.number).sort();
 assert.deepEqual(nums,["Problem A","Problem B","Problem C","Problem D","Problem E"],"Incomplete IYMC qualification set "+year);
}

for(const year of Array.from({length:22},(_,i)=>2005+i)){
 const nums=competitionProblems.filter(p=>p.source.competition==="IMO"&&p.source.year===year).map(p=>p.source.number).sort();
 assert.deepEqual(nums,Array.from({length:6},(_,i)=>"Hari "+(i<3?1:2)+", Nomor "+(i+1)), "Incomplete IMO set "+year);
}

const materialModule={exports:{}};
new Function("exports","module",ts.transpileModule(read("lib/competition-material.ts"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(materialModule.exports,materialModule);
const {materialOf}=materialModule.exports;
for(const p of competitionProblems){assert.ok(typeof materialOf(p)==="string"&&materialOf(p).trim(),p.id+" missing material tag");}
assert.equal(materialOf(competitionProblems.find(p=>p.id==="univ-001")),"Barisan dan Deret");
assert.match(workspace,/className="cmp-material-tag"/);
assert.match(workspace,/materialOf\(p\)===topic/);
assert.doesNotMatch(workspace,/<h[13][^>]*>\s*(?:<Link[^>]*>)?\{p\.title\}/,"Descriptive titles must not be displayed");
assert.match(css,/\.cmp-material-tag\{/);

for(const year of [2019,2026]){
 const set=competitionProblems.filter(p=>p.source.competition==="IMC"&&p.source.year===year);
 assert.deepEqual(set.map(p=>p.source.number).sort((a,b)=>a.localeCompare(b,"id",{numeric:true})),Array.from({length:10},(_,i)=>"Hari "+(i<5?1:2)+", Nomor "+(i+1)),"Incomplete IMC set "+year);
 for(const p of set){const day=Number(p.source.number.match(/Hari (\d+)/)[1]);assert.equal(p.source.url,year===2026?"https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_"+day+(day===1?"_Questions.pdf":"_Problems.pdf"):"https://www.imc-math.org.uk/archive/problems/"+year+"/IMC_"+year+"_Day_"+day+"_Questions.pdf");assert.ok(!displayedFigureIds.includes(p.id),"No illustration in original IMC question: "+p.id);}
}

// Source fidelity is separate from completeness, math syntax, and layout checks.
const fidelity=JSON.parse(read("data/competition-source-audit.json"));
assert.deepEqual(Object.keys(fidelity.records).sort(),competitionProblems.map(p=>p.id).sort(),"Every problem needs a source audit record");
for(const p of competitionProblems){const r=fidelity.records[p.id];assert.equal(r.sourceUrl,p.source.url??null,p.id+" source URL changed; update audit record");assert.ok(["original","exact_verified","wording_differs","pending_comparison"].includes(r.status));assert.equal(r.status==="original",p.source.kind==="original");if(r.status==="exact_verified"||r.status==="wording_differs"){assert.ok(r.comparison?.url&&r.comparison?.page&&r.comparison?.date,p.id+" missing direct comparison evidence");}}

const compactExample="Jika $P$ adalah himpunan semua titik yang terletak pada parabola\n\n$$x=y^2-2y+4,$$\n\ntentukan nilai minimal dari fungsi\n\n$$f(x,y)=x^2+y^2-2x-2y+2$$\n\npada $P$.";
assert.equal(compactCompetitionMath(compactExample),"Jika $P$ adalah himpunan semua titik yang terletak pada parabola $x=y^2-2y+4,$ tentukan nilai minimal dari fungsi $f(x,y)=x^2+y^2-2x-2y+2$ pada $P$.");
assert.equal(compactCompetitionMath("Diketahui\n\n$$\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$$\n\ndengan"),"Diketahui$$\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$$dengan");
assert.equal(compactCompetitionMath("Hitung $x^2$. (a) Tentukan $y$."),"Hitung $x^2$. (a) Tentukan $y$.");
assert.equal(compactCompetitionMath("Diketahui\n\n$$x=1$$\n\n."),"Diketahui $x=1$.");
assert.match(workspace,/compactCompetitionMath\(value\)/);

assert.equal(compactCompetitionMath("Tentukan nilai **minimal dan maksimal**."),"Tentukan nilai minimal dan maksimal.");
assert.equal(compactCompetitionMath("**Petunjuk:** Tinjau $x**y$."),"Petunjuk: Tinjau $x**y$.");
assert.equal(compactCompetitionMath("Suatu *catenary* terbalik."),"Suatu catenary terbalik.");

for(const [id, expected] of [
 ["calculus-cup-xv-2024-final-01", "Lintasan $C$ terdiri dari 2 potongan busur lingkaran seperti pada gambar, dengan $M=-y^2(y+x)$ dan $N=x(x-3y^2)$."],
 ["calculus-cup-xv-2024-final-02", "$C$ adalah batas dari juring lingkaran pada gambar, dengan $M=-2y^2$ dan $N=x^2$."],
 ["calculus-cup-xv-2024-final-03", "Lintasan $C$ terdiri dari 2 potongan busur lingkaran seperti pada gambar, dengan $M=3xy$ dan $N=x(y-x)$."]
]){
 const question=competitionProblems.find(p=>p.id===id);
 assert.ok(question);
 assert.equal(compactCompetitionMath(question.prompt.split("[[FIGURE]]")[1].trim()),expected);
}
assert.equal(compactCompetitionMath("Diketahui.\n\n$$A=1\\qquad B=2$$"),"Diketahui. $A=1\\qquad B=2$");

// Audit the actual rendered prompt after presentation transformations. The
// tokenizer is shared with RichMath, so mode-specific errors cannot escape.
const mathTokenizerModule={exports:{}};
new Function("exports","module",ts.transpileModule(read("lib/math-tokenizer.ts"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(mathTokenizerModule.exports,mathTokenizerModule);
const {tokenizeMath}=mathTokenizerModule.exports;
let renderedFormulaCount=0;
for(const p of competitionProblems){
 const parsed=splitCompetitionPrompt(p.prompt);
 const body=parsed?.question??p.prompt;
 const sub=splitSubquestions(body);
 const chunks=[...(sub?[sub.intro,...sub.parts.map(x=>x.text)]:[body]),...(parsed?.options??[])].flatMap(x=>x.split("[[FIGURE]]"));
 for(const chunk of chunks){
  const formatted=compactCompetitionMath(chunk.trim());
  for(const token of tokenizeMath(formatted)){
   if(token.kind==="text")continue;
   try {
    katex.renderToString(token.value,{throwOnError:true,strict:"ignore",displayMode:token.kind==="display",trust:false});
   } catch(error) {throw new Error(p.id+" rendered math ("+token.kind+"): "+token.value,{cause:error});}
   renderedFormulaCount++;
  }
  const originalTags=tokenizeMath(chunk).filter(t=>t.kind!=="text"&&/\\tag\b/.test(t.value));
  const renderedTags=tokenizeMath(formatted).filter(t=>t.kind!=="text"&&/\\tag\b/.test(t.value));
  assert.deepEqual(renderedTags.map(t=>t.value),originalTags.map(t=>t.value),p.id+" numbered equation changed");
  assert.ok(renderedTags.every(t=>t.kind==="display"),p.id+" numbered equation rendered inline");
 }
}
assert.equal(compactCompetitionMath("For which $$x=1\\tag{1}$$ holds."),"For which$$x=1\\tag{1}$$holds.");
console.log("Rendered competition math audit passed:",competitionProblems.length,"questions,",renderedFormulaCount,"formulas.");
