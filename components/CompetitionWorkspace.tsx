"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { competitionProblems, levels, levelMeta, officialResources, type CompetitionProblem, type Level } from "@/data/competition-problems";
import { RichMath } from "@/components/RichMath";
const difficultyLabels=["","Foundation","Intermediate","Advanced","Expert","Master"];
const isLevel=(v:string):v is Level=>levels.some(x=>x===v);
const link=(p:CompetitionProblem)=>"/problem-solving/"+p.id+"/";
const difficulty=(p:CompetitionProblem)=>difficultyLabels[p.difficulty]||"—";
export function LevelCards(){
 return <div className="cmp-levels">{levels.map((level,i)=><Link className="cmp-level-card" key={level} href={"/problem-solving/?level="+encodeURIComponent(level)}><span className="cmp-level-number">0{i+1}</span><h3>{levelMeta[level].title}</h3><p>{levelMeta[level].description}</p><small>{levelMeta[level].targets}</small><span className="cmp-link-text">{competitionProblems.filter(p=>p.level===level).length} soal <span aria-hidden="true">→</span></span></Link>)}</div>;
}

function ProblemCard({p}:{p:CompetitionProblem}){
 return <article className="cmp-problem-card">
 <div className="cmp-card-meta"><span>{p.level}</span><span className={"cmp-difficulty cmp-difficulty-"+p.difficulty}>{difficulty(p)}</span></div>
 <small className="cmp-kicker">{p.topic} · {p.source.label}</small>
 <h3><Link href={link(p)}>{p.title}</Link></h3>
 <div className="cmp-question-preview"><RichMath>{p.prompt}</RichMath></div>
 <Link className="cmp-link-text" href={link(p)}>Lihat soal dan solusi <span aria-hidden="true">→</span></Link></article>;
}
export function CompetitionCatalog(){
 const [level,setLevel]=useState("Semua"),[query,setQuery]=useState(""),[topic,setTopic]=useState("Semua"),[diff,setDiff]=useState("Semua"),[source,setSource]=useState("Semua");
 useEffect(()=>{const params=new URLSearchParams(window.location.search);const l=params.get("level"),q=params.get("q"),s=params.get("source");if(l&&isLevel(l))setLevel(l);if(q)setQuery(q);if(s==="competition"||s==="original")setSource(s);},[]);
 const pool=useMemo(()=>competitionProblems.filter(p=>level==="Semua"||p.level===level),[level]);
 const topics=Array.from(new Set(pool.map(p=>p.topic))).sort((a,b)=>a.localeCompare(b,"id"));
 const filtered=pool.filter(p=>(topic==="Semua"||p.topic===topic)&&(diff==="Semua"||String(p.difficulty)===diff)&&(source==="Semua"||p.source.kind===source)&&[p.title,p.prompt,p.topic,p.source.label,p.level,p.id].join(" ").toLowerCase().includes(query.toLowerCase().trim()));
 return <div className="cmp-page container"><header className="cmp-page-head"><h1>Problem Solving</h1><p>Kumpulan soal olimpiade matematika dan solusi untuk SD, SMP, SMA, dan mahasiswa.</p></header>
 <section className="cmp-filter cmp-simple-filter" aria-label="Filter soal"><div className="cmp-level-tabs" role="group" aria-label="Jenjang">{["Semua",...levels].map(l=><button type="button" key={l} aria-pressed={l===level} onClick={()=>{setLevel(l);setTopic("Semua");}}>{l}</button>)}</div>
 <div className="cmp-filter-grid"><label className="cmp-search-label">Cari soal<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Judul, topik, IMO, IMC…"/></label><label>Topik<select value={topic} onChange={e=>setTopic(e.target.value)}><option>Semua</option>{topics.map(t=><option key={t}>{t}</option>)}</select></label><label>Kesulitan<select value={diff} onChange={e=>setDiff(e.target.value)}><option>Semua</option>{difficultyLabels.slice(1).map((d,i)=><option value={i+1} key={d}>{d}</option>)}</select></label><label>Sumber<select value={source} onChange={e=>setSource(e.target.value)}><option>Semua</option><option value="original">Latihan DMath</option><option value="competition">Kompetisi resmi</option></select></label></div>
 <div className="cmp-filter-foot"><span role="status">{filtered.length} soal ditemukan</span><button type="button" className="cmp-text-button" onClick={()=>{setQuery("");setLevel("Semua");setTopic("Semua");setDiff("Semua");setSource("Semua");}}>Reset filter</button></div></section>
 <div className="cmp-problem-grid">{filtered.map(p=><ProblemCard p={p} key={p.id}/>)}</div>{!filtered.length&&<div className="cmp-empty"><h2>Belum ada soal sesuai filter</h2><p>Coba ubah jenjang, sumber, atau kata kunci.</p></div>}
 <section className="cmp-subsection"><h2>Referensi kompetisi</h2><div className="cmp-resources">{officialResources.map(r=><a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"><strong>{r.name} ↗</strong><small>{r.level}</small><span>{r.description}</span></a>)}</div></section></div>;
}
export function CompetitionProblemDetail({problem:p}:{problem:CompetitionProblem}){
 const related=competitionProblems.filter(x=>x.id!==p.id&&x.level===p.level).sort((a,b)=>Number(b.topic===p.topic)-Number(a.topic===p.topic)).slice(0,3);
 return <div className="cmp-page container"><div className="cmp-simple-reading"><div className="cmp-breadcrumb"><Link href="/problem-solving/">Problem Solving</Link><span> / </span><Link href={"/problem-solving/?level="+encodeURIComponent(p.level)}>{p.level}</Link><span> / {p.id.toUpperCase()}</span></div>
 <article className="cmp-detail"><header className="cmp-detail-head"><div className="cmp-card-meta"><span>{p.level}</span><span>{p.topic}</span><span className={"cmp-difficulty cmp-difficulty-"+p.difficulty}>{difficulty(p)}</span></div><h1>{p.title}</h1><small>{p.source.label}</small><div className="cmp-main-prompt"><h2>Soal</h2><RichMath>{p.prompt}</RichMath></div></header>
 <section className="cmp-panel cmp-direct-solutions" id="solution"><h2>Solusi</h2>{p.solutions.map((s,i)=><div className="cmp-solution-method" key={s.title}>{p.solutions.length>1&&<h3>Metode {i+1} — {s.title}</h3>}<div className="cmp-solution-paragraphs">{s.steps.map((step,index)=><div key={index}><RichMath>{step}</RichMath></div>)}</div></div>)}</section>
 <section className="cmp-panel cmp-source-panel" id="source"><h2>Sumber soal</h2><p>{p.source.label}</p>{p.source.note&&<p>{p.source.note}</p>}{p.source.url&&<a href={p.source.url} target="_blank" rel="noopener noreferrer" className="cmp-link-text">Naskah resmi ↗</a>}<small className="cmp-muted">Pembahasan: DMath Learning.</small></section></article>
 <section className="cmp-subsection"><h2>Soal lainnya</h2><div className="cmp-problem-grid">{related.map(x=><ProblemCard p={x} key={x.id}/>)}</div></section><Link href={"/problem-solving/?level="+encodeURIComponent(p.level)} className="cmp-button cmp-secondary">← Kembali ke kumpulan soal</Link></div></div>;
}
function dateParts(){const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jakarta",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());const part=(t:string)=>parts.find(x=>x.type===t)?.value||"";return part("year")+"-"+part("month")+"-"+part("day");}
function dayIndex(date:string){return Math.floor(Date.parse(date+"T00:00:00Z")/86400000);}
function previousDate(date:string,delta:number){return new Date((dayIndex(date)+delta)*86400000).toISOString().slice(0,10);}
export function ProblemOfDay({compact=false}:{compact?:boolean}){
 const [selectedDate,setDate]=useState("");const [today,setToday]=useState("");const date=selectedDate||today;
 useEffect(()=>{const update=()=>{const current=dateParts();setToday(current);};update();const timer=window.setInterval(update,60000);return()=>window.clearInterval(timer);},[]);
 const daily=date?levels.map((l,i)=>{const group=competitionProblems.filter(p=>p.level===l);const n=dayIndex(date)+i;return group[((n%group.length)+group.length)%group.length];}):[];
 return <section className={compact?"cmp-potd-compact":"cmp-page container"}><header className={compact?"cmp-section-heading":"cmp-page-head"}><div><span className="cmp-kicker">LATIHAN HARIAN · WIB</span>{compact?<h2>Problem of the Day</h2>:<h1>Problem of the Day</h1>}<p>Empat soal pilihan setiap hari, beserta pembahasannya.</p></div>{compact&&<Link className="cmp-link-text" href="/problem-of-the-day/">Buka kalender soal →</Link>}</header>{!compact&&date&&<div className="cmp-date-controls"><button type="button" className="cmp-button cmp-secondary" onClick={()=>setDate(previousDate(date,-1))}>← Hari sebelumnya</button><label>Tanggal<input aria-label="Tanggal soal" type="date" value={date} max={today} onChange={e=>{if(e.target.value&&e.target.value<=today&&Number.isFinite(dayIndex(e.target.value)))setDate(e.target.value);}}/></label><button type="button" className="cmp-button cmp-secondary" disabled={date>=today} onClick={()=>setDate(previousDate(date,1))}>Hari berikutnya →</button><button type="button" className="cmp-text-button" onClick={()=>setDate("")}>Hari ini</button></div>}{date?<><div className="cmp-potd-date">{new Intl.DateTimeFormat("id-ID",{dateStyle:"full",timeZone:"UTC"}).format(new Date(date+"T00:00:00Z"))}</div><div className="cmp-problem-grid cmp-daily-grid">{daily.map(p=><ProblemCard key={p.id} p={p}/>)}</div></>:<p role="status">Memuat pilihan soal berdasarkan tanggal WIB…</p>}<p className="cmp-muted">Pilihan harian mengikuti rotasi koleksi soal yang tersedia.</p></section>;
}

