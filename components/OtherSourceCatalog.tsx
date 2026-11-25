"use client";
import Link from "next/link";
import { useMemo,useState } from "react";
import { competitionProblems } from "@/data/competition-problems";
import { RichMath } from "@/components/RichMath";

export function OtherSourceCatalog({source}:{source:"MathNet"|"AoPS"}){
 const [year,setYear]=useState("Semua"),[level,setLevel]=useState("Semua"),[contest,setContest]=useState("Semua"),[topic,setTopic]=useState("Semua"),[query,setQuery]=useState("");
 const pool=useMemo(()=>competitionProblems.filter(p=>p.source.collection===source),[source]);
 const years=[...new Set(pool.map(p=>p.source.year).filter((y):y is number=>typeof y==="number"))].sort((a,b)=>b-a);
 const levels=[...new Set(pool.map(p=>p.level))];
 const contests=[...new Set(pool.map(p=>p.source.competition).filter((v):v is string=>Boolean(v)))].sort();
 const topics=[...new Set(pool.map(p=>p.topic))].sort();
 const rows=pool.filter(p=>(year==="Semua"||String(p.source.year)===year)&&(level==="Semua"||p.level===level)&&(contest==="Semua"||p.source.competition===contest)&&(topic==="Semua"||p.topic===topic)&&[p.title,p.prompt,p.source.label,p.topic].join(" ").toLowerCase().includes(query.trim().toLowerCase())).sort((a,b)=>(b.source.year||0)-(a.source.year||0));
 const name=source==="AoPS"?"Art of Problem Solving (AoPS)":"MathNet";
 const external=source==="AoPS"?"https://artofproblemsolving.com/resources":"https://mathnet.mit.edu/explorer.html";
 return <div className="cmp-page container cmp-catalog">
  <nav className="cmp-breadcrumb" aria-label="Jejak navigasi"><Link href="/sumber-lain/">Sumber Lain</Link><span>/</span><span>{name}</span></nav>
  <header className="cmp-page-head"><div><span className="cmp-kicker">SUMBER LAIN</span><h1>{name}</h1><p>Soal yang tersedia langsung di DMath Learning.</p></div><div className="cmp-page-count"><strong>{pool.length}</strong><span>soal tersedia</span></div></header>
  <div className="cmp-catalog-layout"><aside className="cmp-filter" aria-label="Filter soal"><div className="cmp-filter-title"><h2>Filter soal</h2><button type="button" className="cmp-text-button" onClick={()=>{setYear("Semua");setLevel("Semua");setContest("Semua");setTopic("Semua");setQuery("");}}>Atur ulang</button></div><label className="cmp-search-label">Pencarian<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Judul, kompetisi, topik…"/></label><div className="cmp-filter-grid"><label>Tahun<select value={year} onChange={e=>setYear(e.target.value)}><option>Semua</option>{years.map(y=><option key={y}>{y}</option>)}</select></label><label>Jenjang<select value={level} onChange={e=>setLevel(e.target.value)}><option>Semua</option>{levels.map(x=><option key={x}>{x}</option>)}</select></label><label>Kompetisi<select value={contest} onChange={e=>setContest(e.target.value)}><option>Semua</option>{contests.map(x=><option key={x}>{x}</option>)}</select></label><label>Topik<select value={topic} onChange={e=>setTopic(e.target.value)}><option>Semua</option>{topics.map(x=><option key={x}>{x}</option>)}</select></label></div></aside>
   <div className="cmp-results"><div className="cmp-result-head"><h2>Kumpulan soal</h2><span role="status">{rows.length} soal ditemukan</span></div><div className="cmp-problem-list">{rows.map(p=><article className="cmp-problem-card" key={p.id}><div className="cmp-problem-meta"><span>{p.source.competition} {p.source.year}</span><span>{p.source.number}</span><span>{p.topic}</span></div><div className="cmp-problem-main"><div className="cmp-problem-heading"><h3><Link href={"/problem-solving/"+p.id+"/"}>{p.title}</Link></h3></div><div className="cmp-question-preview"><RichMath>{p.prompt}</RichMath></div><div className="cmp-problem-foot"><span>Formulasi matematika mandiri · {p.source.label}</span><Link className="cmp-link-text" href={"/problem-solving/"+p.id+"/"}>Lihat soal →</Link></div></div></article>)}</div>{!rows.length&&<div className="cmp-empty">Belum ada soal sesuai filter.</div>}<p><a href={external} target="_blank" rel="noopener noreferrer" className="cmp-link-text">Buka koleksi sumber ↗</a></p>{source==="MathNet"&&<p style={{fontSize:13}}>Referensi: Alshammari et al., MathNet: A Global Multimodal Benchmark for Mathematical Reasoning and Retrieval (ICLR 2026).</p>}</div>
  </div>
 </div>;
}
