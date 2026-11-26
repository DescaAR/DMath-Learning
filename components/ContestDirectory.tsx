"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { contestInfo, type ContestInfo } from "@/data/contest-info";
import { competitionProblems } from "@/data/competition-problems";

const levels=["SD","SMP","SMA","Kuliah"] as const;
const categories={Olimpiade:"Olimpiade Matematika",Riset:"Riset Matematika",Pemodelan:"Pemodelan Matematika"} as const;
const initialDate=contestInfo.reduce((latest,c)=>c.verifiedAt>latest?c.verifiedAt:latest,"");
type Status="open"|"soon"|"watch"|"closed"|"finished";
const statusLabels:Record<Status,string>={open:"Pendaftaran aktif",soon:"Akan dibuka",watch:"Jadwal belum terkonfirmasi",closed:"Pendaftaran ditutup",finished:"Selesai"};
const sections=[{id:"active",title:"Pendaftaran aktif",description:"Kompetisi dalam periode pendaftaran yang tercatat."},{id:"watch",title:"Agenda mendatang",description:"Kompetisi yang akan dibuka atau masih menunggu konfirmasi jadwal."},{id:"archive",title:"Arsip kompetisi",description:"Edisi yang telah selesai atau menutup pendaftaran."}] as const;
type Group=typeof sections[number]["id"];
function dateLabel(date:string){return new Intl.DateTimeFormat("id-ID",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(date+"T00:00:00Z"));}
function status(c:ContestInfo,today:string,now:number):Status{
 if(c.finished)return "finished";
 if(c.registrationClosed|| (c.deadline&&c.deadline<today) || (c.deadlineAt&&now>=Date.parse(c.deadlineAt)))return "closed";
 if(c.start&&c.start>today)return "soon";
 if(c.deadline)return "open";
 return "watch";
}
function groupOf(s:Status):Group{return s==="open"?"active":s==="soon"||s==="watch"?"watch":"archive";}
function todayWib(now:number){const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jakarta",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(now));return ["year","month","day"].map(t=>parts.find(p=>p.type===t)?.value).join("-");}
function registrationLabel(c:ContestInfo){
 if(c.deadlineText)return c.deadlineText;
 if(c.start&&c.deadline)return dateLabel(c.start)+" – "+dateLabel(c.deadline);
 if(c.deadline)return "Hingga "+dateLabel(c.deadline);
 if(c.start)return dateLabel(c.start)+" – Belum terkonfirmasi";
 return "Belum terkonfirmasi";
}
function Icon({name}:{name:"search"|"calendar"|"external"|"book"|"clock"|"users"}){
 const paths={search:<><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></>,calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,external:<><path d="M13 5h6v6m0-6-9 9"/><path d="M19 14v5H5V5h5"/></>,book:<><path d="M12 7v13M3 5c4-1 7 0 9 2 2-2 5-3 9-2v14c-4-1-7 0-9 2-2-2-5-3-9-2z"/></>,clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,users:<><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2"/></>};
 return <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
function ContestCard({contest:c,state,level}:{contest:ContestInfo;state:Status;level:string}){
 const bankLevel=level||(c.levels.length===1?c.levels[0]:"");
 const matches=c.bankCompetition?competitionProblems.filter(p=>p.source.competition===c.bankCompetition&&(!bankLevel||p.level===bankLevel)):[];
 const bankHref="/search/?"+new URLSearchParams({contest:c.bankCompetition??"",...(bankLevel?{level:bankLevel}:{})}).toString();
 return <article className="cmp-contest-card">
 <div className="cmp-contest-meta"><span>{categories[c.category]} <span aria-hidden="true">·</span> {c.scope}</span><span className={"cmp-contest-status status-"+state}>{statusLabels[state]}</span></div>
 <div className="cmp-contest-title"><h3>{c.name}</h3><p>{c.organizer}</p></div>
 <div className="cmp-contest-levels" aria-label="Jenjang peserta">{c.levels.map(l=><span key={l}>{l}</span>)}</div>
 <dl className="cmp-contest-facts">
 <div><dt><Icon name="clock"/>{c.registrationDetail??"Pendaftaran"}</dt><dd>{registrationLabel(c)}</dd></div>
 <div><dt><Icon name="calendar"/>Pelaksanaan</dt><dd>{c.event||"Belum terkonfirmasi"}</dd></div>
 <div><dt><Icon name="users"/>Format peserta</dt><dd>{c.format||"Belum terkonfirmasi"}</dd></div>
 <div><dt>Biaya</dt><dd>{c.fee??"Belum terkonfirmasi"}</dd></div>
 </dl>
 <div className="cmp-contest-links">
 <a className="cmp-contest-primary" href={c.source} target="_blank" rel="noopener noreferrer">{c.sourceKind==="institutional"?"Sumber informasi":"Sumber resmi"} <Icon name="external"/></a>
 {matches.length>0&&<Link className="cmp-contest-secondary" href={bankHref}><Icon name="book"/>Soal terkait <span>({matches.length})</span></Link>}
 </div>
 </article>;
}
export function ContestDirectory(){
 const [now,setNow]=useState(0);
 const today=now?todayWib(now):initialDate;
 const [query,setQuery]=useState("");const [level,setLevel]=useState("");const [category,setCategory]=useState("");const [scope,setScope]=useState("");const [filter,setFilter]=useState<"all"|Group>("all");
 useEffect(()=>{setNow(Date.now());const timer=setInterval(()=>setNow(Date.now()),30000);return ()=>clearInterval(timer);},[]);
 const filtered=contestInfo.filter(c=>(!level||c.levels.some(l=>l===level))&&(!category||c.category===category)&&(!scope||c.scope===scope)&&[c.name,c.organizer,c.description,c.category,categories[c.category]].join(" ").toLocaleLowerCase("id-ID").includes(query.toLocaleLowerCase("id-ID").trim()));
 const classified=filtered.map(c=>({c,state:status(c,today,now)}));
 const counts=Object.fromEntries(sections.map(s=>[s.id,classified.filter(x=>groupOf(x.state)===s.id).length]));
 const visibleSections=sections.filter(s=>(filter==="all"||s.id===filter)&&counts[s.id]>0);
 const count=filter==="all"?filtered.length:counts[filter];
 const reset=()=>{setQuery("");setLevel("");setCategory("");setScope("");setFilter("all");};
 return <main className="cmp-page container cmp-contest-page">
 <header className="cmp-contest-hero"><div><span className="cmp-kicker">DMath Learning / Kompetisi</span><h1>Info Lomba Matematika</h1><p>Temukan olimpiade, riset matematika, dan kompetisi pemodelan untuk SD hingga perguruan tinggi.</p></div><div className="cmp-contest-total"><strong>{contestInfo.length}</strong><span>Agenda kompetisi</span><small>Diperbarui {dateLabel(initialDate)}</small></div></header>
 <div className="cmp-contest-controls">
 <div className="cmp-contest-filters">
 <label className="cmp-contest-search">Cari lomba<div className="cmp-contest-input"><Icon name="search"/><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Nama lomba atau penyelenggara"/></div></label>
 <label>Jenjang<select value={level} onChange={e=>setLevel(e.target.value)}><option value="">Semua jenjang</option>{levels.map(l=><option key={l}>{l}</option>)}</select></label>
 <label>Kategori<select value={category} onChange={e=>setCategory(e.target.value)}><option value="">Semua kategori</option>{Object.entries(categories).map(([v,label])=><option key={v} value={v}>{label}</option>)}</select></label>
 <label>Cakupan<select value={scope} onChange={e=>setScope(e.target.value)}><option value="">Semua cakupan</option><option>Nasional</option><option>Internasional</option></select></label>
 </div>
 <div className="cmp-contest-tabs" role="group" aria-label="Status kompetisi">
 <button type="button" aria-pressed={filter==="all"} onClick={()=>setFilter("all")}>Semua <span>{filtered.length}</span></button>
 {sections.map(s=><button type="button" key={s.id} aria-pressed={filter===s.id} onClick={()=>setFilter(s.id)}>{s.id==="active"?"Aktif":s.id==="watch"?"Mendatang":"Arsip"} <span>{counts[s.id]}</span></button>)}
 <button type="button" className="cmp-contest-reset" onClick={reset}>Atur ulang</button>
 </div></div>
 <div className="cmp-contest-result" aria-live="polite">{count} agenda ditemukan</div>
 {visibleSections.map(s=><section key={s.id} className="cmp-contest-section" aria-labelledby={"contest-section-"+s.id}>
 <div className="cmp-contest-section-head"><div><h2 id={"contest-section-"+s.id}>{s.title} <span>{counts[s.id]}</span></h2><p>{s.description}</p></div></div>
 <div className="cmp-contest-list">{classified.filter(x=>groupOf(x.state)===s.id).sort((a,b)=>Number(b.state==="soon")-Number(a.state==="soon")||(s.id==="archive"?(b.c.deadline??"").localeCompare(a.c.deadline??""):(a.c.deadline??"9999").localeCompare(b.c.deadline??"9999"))||a.c.name.localeCompare(b.c.name,"id")).map(({c,state})=><ContestCard key={c.id} contest={c} state={state} level={level}/>)}</div>
 </section>)}
 {!count&&<div className="cmp-contest-empty"><h2>Tidak ada kompetisi yang sesuai</h2><p>Ubah filter atau kata kunci pencarian.</p><button type="button" onClick={reset}>Atur ulang filter</button></div>}
 <p className="cmp-contest-disclaimer">Status mengikuti jadwal yang tercatat, bukan konfirmasi kuota. Periksa sumber resmi sebelum mendaftar. DMath Learning bukan penyelenggara lomba.</p>
 </main>;
}
