"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Preset = {label:string;a:number;b:number};
const presets:Preset[]=[
  {label:"−17 ÷ 5",a:-17,b:5},
  {label:"26 ÷ 6",a:26,b:6},
  {label:"−24 ÷ 8",a:-24,b:8},
  {label:"37 ÷ 5",a:37,b:5},
];

export function EuclideanDivisionLab({compact=false}:{compact?:boolean}){
  const {language}=useLanguage();
  const en=language==="en";
  const [a,setA]=useState(-17);
  const [b,setB]=useState(5);
  const {q,r,lower,upper}=useMemo(()=>{
    const q=Math.floor(a/b);
    return {q,r:a-b*q,lower:q*b,upper:(q+1)*b};
  },[a,b]);
  const start=86,end=414,width=end-start;
  const point=start+(r/b)*width;
  const active=presets.find(p=>p.a===a&&p.b===b)?.label;
  const buttonStyle={border:"1px solid var(--border)",borderRadius:10,padding:"8px 11px",background:"var(--surface)",color:"var(--text)",fontWeight:700,cursor:"pointer"} as const;
  return <section className="euclidean-division-lab" aria-label={en?"Interactive Euclidean division":"Pembagian Euclid interaktif"}
    style={{border:"1px solid var(--border)",borderRadius:18,padding:compact?16:22,background:"var(--surface)",color:"var(--text)"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10,marginBottom:12}}>
      <div>
        <strong style={{fontSize:compact?"1rem":"1.2rem"}}>{en?"Quotient and remainder":"Hasil bagi dan sisa Euclid"}</strong>
        <p style={{color:"var(--muted)",margin:"5px 0",fontSize:".87rem"}}>{en?"Explore how negative dividends still give nonnegative remainders.":"Amati mengapa bilangan negatif tetap mempunyai sisa taknegatif."}</p>
      </div>
      <span style={{borderRadius:12,padding:"9px 12px",background:"var(--surface-2)",fontWeight:800}}>{a} = {b} × ({q}) + {r}</span>
    </div>
    <div style={{display:"flex",gap:7,flexWrap:"wrap",marginBottom:16}} aria-label={en?"Example cases":"Contoh kasus"}>
      {presets.map(p=><button type="button" key={p.label} aria-pressed={active===p.label}
        style={{...buttonStyle,background:active===p.label?"var(--surface-2)":"var(--surface)",borderColor:active===p.label?"var(--blue)":"var(--border)"}}
        onClick={()=>{setA(p.a);setB(p.b);}}>{p.label}</button>)}
    </div>
    <div style={{display:"flex",flexWrap:"wrap",gap:18,marginBottom:12}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <span>{en?"Dividend":"Bilangan dibagi"} <strong>a = {a}</strong></span>
        <button type="button" style={buttonStyle} onClick={()=>setA(v=>Math.max(-60,v-1))} disabled={a<=-60} aria-label={en?"Decrease dividend":"Kurangi bilangan dibagi"}>−</button>
        <button type="button" style={buttonStyle} onClick={()=>setA(v=>Math.min(60,v+1))} disabled={a>=60} aria-label={en?"Increase dividend":"Tambah bilangan dibagi"}>+</button>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <span>{en?"Divisor":"Pembagi"} <strong>b = {b}</strong></span>
        <button type="button" style={buttonStyle} onClick={()=>setB(v=>Math.max(1,v-1))} disabled={b<=1} aria-label={en?"Decrease divisor":"Kurangi pembagi"}>−</button>
        <button type="button" style={buttonStyle} onClick={()=>setB(v=>Math.min(12,v+1))} disabled={b>=12} aria-label={en?"Increase divisor":"Tambah pembagi"}>+</button>
      </div>
    </div>
    <svg role="img" aria-label={en?
      `Number line: ${lower} ≤ ${a} < ${upper}, remainder ${r} of divisor ${b}.`:
      `Garis bilangan: ${lower} ≤ ${a} < ${upper}, sisa ${r} dari pembagi ${b}.`}
      viewBox="0 0 500 190" style={{width:"100%",height:"auto",display:"block",maxWidth:680,margin:"0 auto"}}>
      <line x1="35" y1="106" x2="465" y2="106" stroke="currentColor" strokeWidth="1.7" opacity=".6"/>
      <path d="M465 106 l-10 -5 v10 z" fill="currentColor"/>
      <line x1={start} y1="106" x2={end} y2="106" stroke="#64748b" strokeWidth="6" strokeLinecap="round"/>
      <line x1={start} y1="106" x2={point} y2="106" stroke="#2563eb" strokeWidth="7" strokeLinecap="round"/>
      {Array.from({length:b+1},(_,i)=>{
        const x=start+i*width/b;
        return <line key={i} x1={x} y1="100" x2={x} y2="113" stroke="currentColor" opacity=".6" strokeWidth="1.5"/>;
      })}
      <circle cx={start} cy="106" r="7" fill="#64748b" stroke="var(--surface)" strokeWidth="2"/>
      <circle cx={end} cy="106" r="7" fill="#64748b" stroke="var(--surface)" strokeWidth="2"/>
      <circle cx={point} cy="106" r="9" fill="#2563eb" stroke="var(--surface)" strokeWidth="2"/>
      <text x={start} y="138" textAnchor="middle" fontSize="17" fill="currentColor" fontWeight="700">{lower}</text>
      <text x={end} y="138" textAnchor="middle" fontSize="17" fill="currentColor" fontWeight="700">{upper}</text>
      <text x={point} y="73" textAnchor="middle" fontSize="19" fill="#2563eb" fontWeight="800">{a}</text>
      <text x="250" y="25" textAnchor="middle" fontSize="14" fill="currentColor">
        {en?"Consecutive multiples of the divisor":"Dua kelipatan pembagi yang berurutan"}
      </text>
      <text x="250" y="173" textAnchor="middle" fontSize="15" fill="currentColor">{lower} ≤ {a} &lt; {upper}</text>
    </svg>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:9,marginTop:12}}>
      <div style={{padding:12,borderRadius:12,background:"var(--surface-2)"}}><small>{en?"Quotient":"Hasil bagi"}</small><div style={{fontWeight:800,fontSize:"1.15rem"}}>q = {q}</div></div>
      <div style={{padding:12,borderRadius:12,background:"var(--surface-2)"}}><small>{en?"Remainder":"Sisa"}</small><div style={{fontWeight:800,fontSize:"1.15rem"}}>r = {r}</div></div>
      <div style={{padding:12,borderRadius:12,background:"var(--surface-2)"}}><small>{en?"Required bound":"Batas wajib"}</small><div style={{fontWeight:800,fontSize:"1.15rem"}}>0 ≤ {r} &lt; {b}</div></div>
    </div>
    <p style={{fontSize:".84rem",color:"var(--muted)",margin:"15px 0 6px"}}>{en?"Possible remainders (highlighted: actual remainder)":"Semua kemungkinan sisa (yang ditandai adalah sisa saat ini)"}</p>
    <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{Array.from({length:b},(_,i)=>
      <span key={i} aria-label={i===r?(en?"Current remainder":"Sisa sekarang"):undefined}
        style={{display:"inline-grid",placeItems:"center",width:32,height:32,borderRadius:8,
          border:"1px solid var(--border)",background:i===r?"#2563eb":"var(--surface-2)",
          color:i===r?"white":"var(--text)",fontWeight:i===r?800:500}}>{i}</span>)}
    </div>
    <p style={{fontSize:".85rem",lineHeight:1.65,margin:"14px 0 0"}}>
      {en?"The blue distance from the lower multiple to a equals r; changing a by b keeps r unchanged.":
        "Jarak biru dari kelipatan bawah ke a sama dengan r; mengubah a sebesar b tidak mengubah r."}
    </p>
  </section>;
}
