"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { competitionProblems, levels, levelMeta, officialResources, type CompetitionProblem, type Level } from "@/data/competition-problems";
import { RichMath } from "@/components/RichMath";

const difficultyLabels=["","Foundation","Intermediate","Advanced","Expert","Master"];
const isLevel=(v:string):v is Level=>levels.some(x=>x===v);
const link=(p:CompetitionProblem)=>"/problem-solving/"+p.id+"/";
const difficulty=(p:CompetitionProblem)=>difficultyLabels[p.difficulty]||"—";
const shortSource=(p:CompetitionProblem)=>p.source.kind==="original"?"DMath Learning":p.source.label;

export function LevelCards(){
 return <div className="cmp-levels">{levels.map((level)=><Link className="cmp-level-card" key={level} href={"/problem-solving/?level="+encodeURIComponent(level)}>
  <span className="cmp-level-code">{level==="Kuliah"?"PT":level}</span>
  <span className="cmp-level-title"><strong>{levelMeta[level].title}</strong><small>{levelMeta[level].targets}</small></span>
  <span className="cmp-level-count">{competitionProblems.filter(p=>p.level===level).length}<small>soal</small></span><span aria-hidden="true" className="cmp-level-arrow">›</span>
 </Link>)}</div>;
}

function ProblemCard({p,kind="list"}:{p:CompetitionProblem;kind?:"list"|"daily"|"related"}){
 return <article className={"cmp-problem-card cmp-problem-"+kind}>
  <div className="cmp-problem-meta"><span className="cmp-id">{p.id.toUpperCase()}</span><span>{p.topic}</span><span className="cmp-difficulty">{difficulty(p)}</span></div>
  <div className="cmp-problem-main">
   <div className="cmp-problem-heading"><h3><Link href={link(p)}>{p.title}</Link></h3>{kind==="daily"&&<span className="cmp-level-tag">{levelMeta[p.level].title}</span>}</div>
   <div className="cmp-question-preview"><RichMath>{p.prompt}</RichMath></div>
   <div className="cmp-problem-foot"><span>{kind!=="daily"&&<>{p.level}<span className="cmp-meta-dot">·</span></>}{shortSource(p)}</span><Link className="cmp-link-text" href={link(p)}>Lihat soal <span aria-hidden="true">→</span></Link></div>
  </div>
 </article>;
}

export function CompetitionCatalog(){
 const [level,setLevel]=useState("Semua"),[query,setQuery]=useState(""),[topic,setTopic]=useState("Semua"),[diff,setDiff]=useState("Semua"),[source,setSource]=useState("Semua");
 useEffect(()=>{const params=new URLSearchParams(window.location.search);const l=params.get("level"),q=params.get("q"),s=params.get("source");if(l&&isLevel(l))setLevel(l);if(q)setQuery(q);if(s==="competition"||s==="original")setSource(s);},[]);
 const pool=useMemo(()=>competitionProblems.filter(p=>level==="Semua"||p.level===level),[level]);
 const topics=Array.from(new Set(pool.map(p=>p.topic))).sort((a,b)=>a.localeCompare(b,"id"));
 const filtered=pool.filter(p=>(topic==="Semua"||p.topic===topic)&&(diff==="Semua"||String(p.difficulty)===diff)&&(source==="Semua"||p.source.kind===source)&&[p.title,p.prompt,p.topic,p.source.label,p.level,p.id].join(" ").toLowerCase().includes(query.toLowerCase().trim()));
 const reset=()=>{setQuery("");setLevel("Semua");setTopic("Semua");setDiff("Semua");setSource("Semua");};
 return <div className="cmp-page container cmp-catalog">
  <header className="cmp-page-head"><div><span className="cmp-kicker">DMATH / COLLECTION</span><h1>Problem Solving</h1><p>Kumpulan soal olimpiade matematika untuk SD, SMP, SMA, dan mahasiswa.</p></div><div className="cmp-page-count"><strong>{competitionProblems.length}</strong><span>soal tersedia</span></div></header>
  <div className="cmp-catalog-layout">
   <aside className="cmp-filter" aria-label="Filter soal">
    <div className="cmp-filter-title"><h2>Filter soal</h2><button className="cmp-text-button" type="button" onClick={reset}>Reset</button></div>
    <label className="cmp-search-label">Pencarian<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Judul, topik, kompetisi…"/></label>
    <div className="cmp-filter-label">Jenjang</div>
    <div className="cmp-level-tabs" role="group" aria-label="Jenjang">{["Semua",...levels].map(l=><button type="button" key={l} aria-pressed={l===level} onClick={()=>{setLevel(l);setTopic("Semua");}}><span>{l==="Semua"?"Semua jenjang":l==="Kuliah"?"Mahasiswa":l}</span><small>{l==="Semua"?competitionProblems.length:competitionProblems.filter(p=>p.level===l).length}</small></button>)}</div>
    <div className="cmp-filter-grid">
     <label>Topik<select value={topic} onChange={e=>setTopic(e.target.value)}><option>Semua</option>{topics.map(t=><option key={t}>{t}</option>)}</select></label>
     <label>Kesulitan<select value={diff} onChange={e=>setDiff(e.target.value)}><option>Semua</option>{difficultyLabels.slice(1).map((d,i)=><option value={i+1} key={d}>{d}</option>)}</select></label>
     <label>Sumber<select value={source} onChange={e=>setSource(e.target.value)}><option>Semua</option><option value="original">Latihan DMath</option><option value="competition">Kompetisi resmi</option></select></label>
    </div>
   </aside>
   <div className="cmp-results">
    <div className="cmp-result-head"><h2>{level==="Semua"?"Semua soal":levelMeta[level as Level].title}</h2><span role="status">{filtered.length} soal ditemukan</span></div>
    <div className="cmp-problem-list">{filtered.map(p=><ProblemCard p={p} key={p.id}/>)}</div>
    {!filtered.length&&<div className="cmp-empty"><h2>Belum ada soal sesuai filter</h2><p>Coba ubah jenjang, sumber, atau kata kunci.</p><button type="button" className="cmp-button cmp-secondary" onClick={reset}>Reset filter</button></div>}
   </div>
  </div>
  <section className="cmp-subsection cmp-refs"><h2>Referensi kompetisi</h2><div className="cmp-resources">{officialResources.map(r=><a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"><strong>{r.name} ↗</strong><small>{r.level}</small><span>{r.description}</span></a>)}</div></section>
 </div>;
}

export function CompetitionProblemDetail({problem:p}:{problem:CompetitionProblem}){
 const related=competitionProblems.filter(x=>x.id!==p.id&&x.level===p.level).sort((a,b)=>Number(b.topic===p.topic)-Number(a.topic===p.topic)).slice(0,3);
 return <div className="cmp-page container"><div className="cmp-simple-reading">
  <nav className="cmp-breadcrumb" aria-label="Breadcrumb"><Link href="/problem-solving/">Problem Solving</Link><span>/</span><Link href={"/problem-solving/?level="+encodeURIComponent(p.level)}>{p.level}</Link><span>/</span><span>{p.id.toUpperCase()}</span></nav>
  <article className="cmp-detail">
   <header className="cmp-detail-head"><div className="cmp-problem-meta"><span className="cmp-id">{p.id.toUpperCase()}</span><span>{levelMeta[p.level].title}</span><span>{p.topic}</span><span className="cmp-difficulty">{difficulty(p)}</span></div><h1>{p.title}</h1></header>
   <div className="cmp-main-prompt"><h2>Soal</h2><div><RichMath>{p.prompt}</RichMath></div></div>
   <section className="cmp-source-panel" id="source"><h2>Sumber soal</h2><p>{p.source.label}</p>{p.source.note&&<p>{p.source.note}</p>}{p.source.url&&<a href={p.source.url} target="_blank" rel="noopener noreferrer" className="cmp-link-text">Naskah resmi ↗</a>}</section>
  </article>
  <div className="cmp-back"><Link href={"/problem-solving/?level="+encodeURIComponent(p.level)} className="cmp-button cmp-secondary">← Kembali ke kumpulan soal</Link></div>
  <section className="cmp-subsection cmp-related"><h2>Soal lainnya</h2><div className="cmp-problem-list">{related.map(x=><ProblemCard p={x} key={x.id} kind="related"/>)}</div></section>
 </div></div>;
}

function dateParts(){const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jakarta",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());const part=(t:string)=>parts.find(x=>x.type===t)?.value||"";return part("year")+"-"+part("month")+"-"+part("day");}
function dayIndex(date:string){return Math.floor(Date.parse(date+"T00:00:00Z")/86400000);}
function previousDate(date:string,delta:number){return new Date((dayIndex(date)+delta)*86400000).toISOString().slice(0,10);}
export function ProblemOfDay({compact=false}:{compact?:boolean}){
 const [selectedDate,setDate]=useState(""),[today,setToday]=useState("");const date=selectedDate||today;
 useEffect(()=>{const update=()=>setToday(dateParts());update();const timer=window.setInterval(update,60000);return()=>window.clearInterval(timer);},[]);
 const daily=date?levels.map((l,i)=>{const group=competitionProblems.filter(p=>p.level===l);const n=dayIndex(date)+i;return group[((n%group.length)+group.length)%group.length];}):[];
 const displayDate=date?new Intl.DateTimeFormat("id-ID",{dateStyle:"full",timeZone:"UTC"}).format(new Date(date+"T00:00:00Z")):"";
 return <section className={compact?"cmp-potd-compact":"cmp-page container cmp-potd"}>
  <header className={compact?"cmp-section-heading":"cmp-page-head"}><div><span className="cmp-kicker">DAILY PROBLEMS</span>{compact?<h2>Problem of the Day</h2>:<h1>Problem of the Day</h1>}<p>Empat soal pilihan setiap hari, satu untuk setiap jenjang.</p></div>{compact&&<Link className="cmp-link-text" href="/problem-of-the-day/">Lihat arsip harian →</Link>}</header>
  {date?<><div className="cmp-date-bar"><div className="cmp-potd-date"><span className="cmp-date-mark" aria-hidden="true"/><span>{displayDate}</span><small>WIB</small></div>{!compact&&<div className="cmp-date-controls"><button type="button" className="cmp-button cmp-secondary" aria-label="Hari sebelumnya" onClick={()=>setDate(previousDate(date,-1))}>←</button><input aria-label="Tanggal soal" type="date" value={date} max={today} onChange={e=>{if(e.target.value&&e.target.value<=today&&Number.isFinite(dayIndex(e.target.value)))setDate(e.target.value);}}/><button type="button" className="cmp-button cmp-secondary" aria-label="Hari berikutnya" disabled={date>=today} onClick={()=>setDate(previousDate(date,1))}>→</button><button type="button" className="cmp-text-button" onClick={()=>setDate("")}>Hari ini</button></div>}</div><div className="cmp-daily-grid">{daily.map(p=><ProblemCard key={p.id} p={p} kind="daily"/>)}</div></>:<div className="cmp-empty" role="status">Memuat pilihan soal harian…</div>}
  <p className="cmp-muted">Pilihan harian mengikuti rotasi koleksi soal yang tersedia.</p>
 </section>;
}
