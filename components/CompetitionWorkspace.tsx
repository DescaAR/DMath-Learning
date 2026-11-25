"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { competitionProblems, levels, levelMeta, type CompetitionProblem, type Level } from "@/data/competition-problems";
import { dailySchedule, dailyDates } from "@/data/competition-daily";
import { RichMath } from "@/components/RichMath";

const difficultyLabels=["","Dasar","Menengah","Lanjutan","Sulit","Sangat Sulit"];
const isLevel=(v:string):v is Level=>levels.some(x=>x===v);
const link=(p:CompetitionProblem)=>"/problem-solving/"+p.id+"/";
const difficulty=(p:CompetitionProblem)=>difficultyLabels[p.difficulty]||"—";
const shortSource=(p:CompetitionProblem)=>p.source.label;
const categoryOf=(p:CompetitionProblem)=>p.source.competition||"DMath Learning Proposed";
const categoryOrder=(a:string,b:string)=>a==="DMath Learning Proposed"?1:b==="DMath Learning Proposed"?-1:a.localeCompare(b,"id");
const levelHref=(l:Level)=>"/olimpiade-"+l.toLowerCase()+"/";
const levelTitle=(l:Level)=>l==="Kuliah"?"Olimpiade Kuliah":levelMeta[l].title;

export function LevelCards(){
 return <div className="cmp-levels">{levels.map((level)=><Link className="cmp-level-card" key={level} href={levelHref(level)}>
  <span className="cmp-level-code">{level==="Kuliah"?"PT":level}</span>
  <span className="cmp-level-title"><strong>{levelTitle(level)}</strong><small>{levelMeta[level].targets}</small></span>
  <span className="cmp-level-count">{competitionProblems.filter(p=>p.level===level).length}<small>soal</small></span><span aria-hidden="true" className="cmp-level-arrow">›</span>
 </Link>)}</div>;
}

function ProblemCard({p,kind="list"}:{p:CompetitionProblem;kind?:"list"|"daily"|"related"}){
 return <article className={"cmp-problem-card cmp-problem-"+kind}>
  <div className="cmp-problem-meta"><span className="cmp-id">{p.id.toUpperCase()}</span><span>{p.topic}</span><span className="cmp-difficulty">{difficulty(p)}</span></div>
  <div className="cmp-problem-main">
   <div className="cmp-problem-heading"><h3><Link href={link(p)}>{p.title}</Link></h3>{kind==="daily"&&<span className="cmp-level-tag">{levelTitle(p.level)}</span>}</div>
   <div className="cmp-question-preview"><RichMath>{p.prompt}</RichMath></div>
   <div className="cmp-problem-foot"><span>{kind!=="daily"&&<>{p.level}<span className="cmp-meta-dot">·</span></>}{shortSource(p)}</span><Link className="cmp-link-text" href={link(p)}>Lihat soal <span aria-hidden="true">→</span></Link></div>
  </div>
 </article>;
}

export function CompetitionCatalog({fixedLevel}:{fixedLevel?:Level}={}){
 const [level,setLevel]=useState<string>(fixedLevel||"Semua"),[query,setQuery]=useState(""),[topic,setTopic]=useState("Semua"),[diff,setDiff]=useState("Semua"),[source,setSource]=useState("Semua"),[year,setYear]=useState("Semua"),[contest,setContest]=useState("Semua"),[stage,setStage]=useState("Semua");
 useEffect(()=>{const params=new URLSearchParams(window.location.search);const l=params.get("level"),q=params.get("q"),s=params.get("source");if(!fixedLevel&&l&&isLevel(l))setLevel(l);if(q)setQuery(q);if(s==="competition"||s==="original")setSource(s);},[fixedLevel]);
 const pool=useMemo(()=>competitionProblems.filter(p=>level==="Semua"||p.level===level),[level]);
 const years=Array.from(new Set(pool.flatMap(p=>p.source.year?[p.source.year]:[]))).sort((a,b)=>b-a);
 const stages=Array.from(new Set(pool.filter(p=>(contest==="Semua"||categoryOf(p)===contest)&&(year==="Semua"||String(p.source.year)===year)).flatMap(p=>p.source.stage?[p.source.stage]:[]))).sort();
 const contests=Array.from(new Set(pool.map(categoryOf))).sort(categoryOrder);
 const topics=Array.from(new Set(pool.map(p=>p.topic))).sort((a,b)=>a.localeCompare(b,"id"));
 const filtered=pool.filter(p=>(stage==="Semua"||p.source.stage===stage)&&(year==="Semua"||String(p.source.year)===year)&&(contest==="Semua"||categoryOf(p)===contest)&&(topic==="Semua"||p.topic===topic)&&(diff==="Semua"||String(p.difficulty)===diff)&&(source==="Semua"||p.source.kind===source)&&[p.title,p.prompt,p.topic,p.source.label,p.source.stage,p.source.number,p.level,p.id].join(" ").toLowerCase().includes(query.toLowerCase().trim()));
 const groups=contests.map(c=>({name:c,items:filtered.filter(p=>categoryOf(p)===c).sort((a,b)=>(b.source.year||0)-(a.source.year||0)||(a.source.stage||"").localeCompare(b.source.stage||"","id")||(a.source.number||a.id).localeCompare(b.source.number||b.id,"id",{numeric:true}))})).filter(g=>g.items.length>0);
 const reset=()=>{setQuery("");setLevel(fixedLevel||"Semua");setTopic("Semua");setDiff("Semua");setSource("Semua");setYear("Semua");setContest("Semua");setStage("Semua");};
 return <div className="cmp-page container cmp-catalog">
  <header className="cmp-page-head"><div><span className="cmp-kicker">KOLEKSI SOAL</span><h1>{fixedLevel?levelTitle(fixedLevel):"Kumpulan Soal"}</h1><p>{fixedLevel?levelMeta[fixedLevel].description:"Kumpulan soal olimpiade matematika untuk SD, SMP, SMA, dan mahasiswa."}</p></div><div className="cmp-page-count"><strong>{pool.length}</strong><span>soal tersedia</span></div></header>
  {fixedLevel&&<nav className="cmp-level-section-nav" aria-label="Menu jenjang"><span aria-current="page">Kumpulan Soal</span><Link href={levelHref(fixedLevel)+"potd/"}>Soal Harian →</Link></nav>}
  <section className="cmp-category-section" aria-label="Kategori kompetisi"><h2>Kategori kompetisi</h2><div className="cmp-category-buttons" role="group" aria-label="Pilih kategori">{["Semua",...contests].map(c=><button type="button" key={c} aria-pressed={contest===c} onClick={()=>{setContest(c);setStage("Semua");setYear("Semua");setSource("Semua");setTopic("Semua");setDiff("Semua");}}><span>{c==="Semua"?"Semua kompetisi":c}</span><small>{c==="Semua"?pool.length:pool.filter(p=>categoryOf(p)===c).length} soal</small></button>)}</div></section>
  <div className="cmp-catalog-layout">
   <aside className="cmp-filter" aria-label="Filter soal">
    <div className="cmp-filter-title"><h2>Filter soal</h2><button className="cmp-text-button" type="button" onClick={reset}>Atur ulang</button></div>
    <label className="cmp-search-label">Pencarian<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Judul, topik, kompetisi…"/></label>
    {!fixedLevel&&<><div className="cmp-filter-label">Jenjang</div>
    <div className="cmp-level-tabs" role="group" aria-label="Jenjang">{["Semua",...levels].map(l=><button type="button" key={l} aria-pressed={l===level} onClick={()=>{setLevel(l);setTopic("Semua");setYear("Semua");setContest("Semua");setStage("Semua");}}><span>{l==="Semua"?"Semua jenjang":l==="Kuliah"?"Mahasiswa":l}</span><small>{l==="Semua"?competitionProblems.length:competitionProblems.filter(p=>p.level===l).length}</small></button>)}</div></>}
    <div className="cmp-filter-grid">
     <label>Tahun<select value={year} onChange={e=>{setYear(e.target.value);setStage("Semua");}}><option>Semua</option>{years.map(y=><option key={y} value={y}>{y}</option>)}</select></label>
     
     <label>Tahap seleksi<select value={stage} onChange={e=>setStage(e.target.value)}><option>Semua</option>{stages.map(s=><option key={s}>{s}</option>)}</select></label>
     <label>Topik<select value={topic} onChange={e=>setTopic(e.target.value)}><option>Semua</option>{topics.map(t=><option key={t}>{t}</option>)}</select></label>
     <label>Kesulitan<select value={diff} onChange={e=>setDiff(e.target.value)}><option>Semua</option>{difficultyLabels.slice(1).map((d,i)=><option value={i+1} key={d}>{d}</option>)}</select></label>
     <label>Sumber<select value={source} onChange={e=>setSource(e.target.value)}><option>Semua</option><option value="original">DMath Learning Proposed</option><option value="competition">Soal kompetisi</option></select></label>
    </div>
   </aside>
   <div className="cmp-results">

    <div className="cmp-result-head"><h2>{level==="Semua"?"Semua soal":levelMeta[level as Level].title}</h2><span role="status">{filtered.length} soal ditemukan</span></div>
    {groups.map(g=><section className="cmp-contest-group" key={g.name}><div className="cmp-contest-heading"><h3>{g.name}</h3><span>{g.items.length} soal</span></div><div className="cmp-problem-list">{g.items.map(p=><ProblemCard p={p} key={p.id}/>)}</div></section>)}
    {!filtered.length&&<div className="cmp-empty"><h2>Belum ada soal sesuai filter</h2><p>Coba ubah jenjang, sumber, atau kata kunci.</p><button type="button" className="cmp-button cmp-secondary" onClick={reset}>Atur ulang filter</button></div>}
   </div>
  </div>
 </div>;
}

export function CompetitionProblemDetail({problem:p}:{problem:CompetitionProblem}){
 const related=competitionProblems.filter(x=>x.id!==p.id&&x.level===p.level).sort((a,b)=>Number(b.topic===p.topic)-Number(a.topic===p.topic)).slice(0,3);
 return <div className="cmp-page container"><div className="cmp-simple-reading">
  <nav className="cmp-breadcrumb" aria-label="Jejak navigasi"><Link href="/problem-solving/">Kumpulan Soal</Link><span>/</span><Link href={levelHref(p.level)}>{p.level}</Link><span>/</span><span>{p.id.toUpperCase()}</span></nav>
  <article className="cmp-detail">
   <header className="cmp-detail-head"><div className="cmp-problem-meta"><span className="cmp-id">{p.id.toUpperCase()}</span><span>{levelTitle(p.level)}</span><span>{p.topic}</span><span className="cmp-difficulty">{difficulty(p)}</span></div><h1>{p.title}</h1></header>
   <div className="cmp-main-prompt"><h2>Soal</h2><div><RichMath>{p.prompt}</RichMath></div></div>
   <section className="cmp-source-panel" id="source"><h2>Sumber soal</h2><p>{p.source.label}</p>{p.source.url&&<a href={p.source.url} target="_blank" rel="noopener noreferrer" className="cmp-link-text">Lihat sumber ↗</a>}</section>
  </article>
  <div className="cmp-back"><Link href={levelHref(p.level)} className="cmp-button cmp-secondary">← Kembali ke kumpulan soal</Link></div>
  <section className="cmp-subsection cmp-related"><h2>Soal lainnya</h2><div className="cmp-problem-list">{related.map(x=><ProblemCard p={x} key={x.id} kind="related"/>)}</div></section>
 </div></div>;
}

function dateParts(){const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jakarta",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());const part=(t:string)=>parts.find(x=>x.type===t)?.value||"";return part("year")+"-"+part("month")+"-"+part("day");}
export function ProblemOfDay({compact=false,fixedLevel}:{compact?:boolean;fixedLevel?:Level}={}){
 const [selectedDate,setDate]=useState(""),[today,setToday]=useState("");const date=selectedDate||today;
 useEffect(()=>{const update=()=>setToday(dateParts());update();const timer=window.setInterval(update,60000);return()=>window.clearInterval(timer);},[]);
 const dates=dailyDates.filter(d=>d<=today);
 const visibleLevels=fixedLevel?[fixedLevel]:levels;
 const record=dailySchedule[date];
 const daily=date&&date<=today&&record?visibleLevels.flatMap(l=>{const p=competitionProblems.find(x=>x.id===record[l]&&x.level===l);return p?[p]:[];}):[];
 const displayDate=date?new Intl.DateTimeFormat("id-ID",{dateStyle:"full",timeZone:"UTC"}).format(new Date(date+"T00:00:00Z")):"";
 const previous=dates.filter(d=>d<date).at(-1);
 const next=dates.find(d=>d>date);
 return <section className={compact?"cmp-potd-compact":"cmp-page container cmp-potd"}>
  <header className={compact?"cmp-section-heading":"cmp-page-head"}><div><span className="cmp-kicker">{fixedLevel?levelTitle(fixedLevel):"SOAL HARIAN"}</span>{compact?<h2>Soal Harian</h2>:<h1>Soal Harian</h1>}<p>{fixedLevel?"Soal harian "+levelTitle(fixedLevel)+".":"Satu soal per jenjang pada setiap tanggal yang terjadwal."}</p></div>{compact&&<Link className="cmp-link-text" href="/problem-of-the-day/">Lihat arsip harian →</Link>}</header>
  {fixedLevel&&<nav className="cmp-level-section-nav" aria-label="Menu jenjang"><Link href={levelHref(fixedLevel)}>Kumpulan Soal</Link><span aria-current="page">Soal Harian</span></nav>}
  {date?<><div className="cmp-date-bar"><div className="cmp-potd-date"><span className="cmp-date-mark" aria-hidden="true"/><span>{displayDate}</span><small>WIB</small></div>{!compact&&<div className="cmp-date-controls"><button type="button" className="cmp-button cmp-secondary" aria-label="Hari sebelumnya" disabled={!previous} onClick={()=>{if(previous)setDate(previous);}}>←</button><select aria-label="Tanggal soal" value={date} onChange={e=>setDate(e.target.value)}>{!dates.includes(date)&&<option value={date}>{date} — belum tersedia</option>}{dates.slice().reverse().map(d=><option key={d} value={d}>{d}</option>)}</select><button type="button" className="cmp-button cmp-secondary" aria-label="Hari berikutnya" disabled={!next} onClick={()=>{if(next)setDate(next);}}>→</button><button type="button" className="cmp-text-button" onClick={()=>setDate("")}>Hari ini</button></div>}</div>{daily.length?<div className={"cmp-daily-grid"+(fixedLevel?" cmp-daily-single":"")}>{daily.map(p=><ProblemCard key={p.id} p={p} kind="daily"/>)}</div>:<div className="cmp-empty"><h2>Belum ada soal untuk tanggal ini</h2><p>Soal baru belum dijadwalkan. Soal sebelumnya tetap tersedia di arsip.</p>{compact&&<Link className="cmp-link-text" href="/problem-of-the-day/">Buka arsip →</Link>}</div>}</>:<div className="cmp-empty" role="status">Memuat pilihan soal harian…</div>}
 </section>;
}
