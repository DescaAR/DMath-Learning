"use client";
import { useEffect,useState } from "react";
import Link from "next/link";
import { contestInfo, type ContestInfo } from "@/data/contest-info";
import { competitionProblems } from "@/data/competition-problems";
const levels=["SD","SMP","SMA","Kuliah"] as const;
const initialDate=contestInfo.reduce((latest,c)=>c.verifiedAt>latest?c.verifiedAt:latest,"");
function dateLabel(date:string){return new Intl.DateTimeFormat("id-ID",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(date+"T00:00:00Z"));}
function status(c:ContestInfo,today:string){if(c.finished)return "Selesai";if(c.deadline&&c.deadline<today)return "Pendaftaran ditutup";if(c.start&&c.start>today)return "Segera dibuka";if(c.deadline)return "Dalam periode pendaftaran";return "Jadwal belum terkonfirmasi";}
function todayWib(){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jakarta",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());}
export function ContestDirectory(){
 const [today,setToday]=useState(initialDate);
 const [query,setQuery]=useState("");const [level,setLevel]=useState("");const [category,setCategory]=useState("");const [scope,setScope]=useState("");const [filter,setFilter]=useState("active");
 useEffect(()=>{setToday(todayWib());const timer=setInterval(()=>setToday(todayWib()),60000);return ()=>clearInterval(timer);},[]);
 const active=(c:ContestInfo)=>["Dalam periode pendaftaran","Segera dibuka"].includes(status(c,today));
 const upcoming=(c:ContestInfo)=>active(c)||status(c,today)==="Jadwal belum terkonfirmasi";
 const items=contestInfo.filter(c=>(!level||c.levels.some(l=>l===level))&&(!category||c.category===category)&&(!scope||c.scope===scope)&&(filter==="all"||(filter==="active"?upcoming(c):!upcoming(c)))&&[c.name,c.organizer,c.description,c.category].join(" ").toLocaleLowerCase("id-ID").includes(query.toLocaleLowerCase("id-ID").trim())).sort((a,b)=>Number(active(b))-Number(active(a))||(a.deadline??"9999").localeCompare(b.deadline??"9999"));
 return <main className="cmp-page container cmp-contest-page">
 <header className="cmp-contest-heading"><span className="cmp-kicker">AGENDA KOMPETISI</span><h1>Info Lomba Matematika</h1><p>Olimpiade matematika, riset matematika murni dan terapan, serta kompetisi pemodelan matematis untuk pelajar dan mahasiswa.</p></header>
 <div className="cmp-contest-summary"><span><strong>{contestInfo.filter(active).length}</strong> agenda pendaftaran</span><span><strong>{contestInfo.length}</strong> kompetisi tercatat</span><span>Data diperiksa: {dateLabel(initialDate)}</span></div>
 <div className="cmp-contest-filters">
 <label className="cmp-contest-search">Cari lomba<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Nama lomba atau penyelenggara"/></label>
 <label>Jenjang<select value={level} onChange={e=>setLevel(e.target.value)}><option value="">Semua jenjang</option>{levels.map(l=><option key={l}>{l}</option>)}</select></label>
 <label>Kategori<select value={category} onChange={e=>setCategory(e.target.value)}><option value="">Semua kategori</option><option>Olimpiade</option><option>Riset</option><option>Pemodelan</option></select></label>
 <label>Cakupan<select value={scope} onChange={e=>setScope(e.target.value)}><option value="">Semua cakupan</option><option>Nasional</option><option>Internasional</option></select></label>
 <label>Status<select value={filter} onChange={e=>setFilter(e.target.value)}><option value="active">Aktif / mendatang / pantauan</option><option value="all">Semua status</option><option value="archive">Arsip</option></select></label>
 </div>
 <div className="cmp-contest-result" aria-live="polite">{items.length} kompetisi ditemukan</div>
 <div className="cmp-contest-list">{items.map(c=>{const st=status(c,today);const matches=c.bankCompetition?competitionProblems.filter(p=>p.source.competition===c.bankCompetition):[];return <article className="cmp-contest-card" key={c.id}>
 <div className="cmp-contest-meta"><span>{c.category} · {c.scope}</span><span className={"cmp-contest-status "+(active(c)?"is-current":"")}>{st}</span></div>
 <h2>{c.name}</h2><p>{c.organizer}</p><div className="cmp-contest-levels">{c.levels.map(l=><span key={l}>{l}</span>)}</div><p>{c.description}</p>
 <dl><div><dt>Batas daftar</dt><dd>{c.deadlineText??(c.deadline?dateLabel(c.deadline):"—")}</dd></div><div><dt>Pelaksanaan</dt><dd>{c.event}</dd></div><div><dt>Format</dt><dd>{c.format}</dd></div><div><dt>Biaya</dt><dd>{c.fee??"Cek sumber resmi"}</dd></div></dl>
 {c.note&&<p className="cmp-contest-note">{c.note}</p>}
 <div className="cmp-contest-links"><a href={c.source} target="_blank" rel="noopener noreferrer">Sumber resmi ↗</a>{matches.length>0&&<Link href={"/problem-solving/"+matches[0].id}>Contoh soal terkait ({matches.length} tersedia) →</Link>}</div>
 </article>})}</div>
 {!items.length&&<div className="cmp-contest-empty">Tidak ada lomba yang sesuai. Coba ubah filter atau pilih semua status.</div>}
 <p className="cmp-contest-disclaimer">Hanya kompetisi dengan fokus matematis yang substantif ditampilkan; lomba karya ilmiah umum tidak termasuk. Informasi dapat berubah. Status berdasarkan jadwal yang tercatat, bukan konfirmasi ketersediaan kuota. Periksa sumber resmi sebelum mendaftar. DMath Learning bukan penyelenggara lomba.</p>
 </main>;
}
