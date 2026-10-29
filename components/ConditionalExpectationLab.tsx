"use client";

import {useMemo,useState} from "react";

type Mode="trivial"|"adjacent"|"alternating"|"complete";
const values=[0,2,4,6] as const;
const modes:{key:Mode;label:string;groups:number[]}[]=[
  {key:"trivial",label:"Tanpa informasi: satu blok",groups:[0,0,0,0]},
  {key:"adjacent",label:"Dua blok: {1,2} dan {3,4}",groups:[0,0,1,1]},
  {key:"alternating",label:"Dua blok: {1,3} dan {2,4}",groups:[0,1,0,1]},
  {key:"complete",label:"Informasi penuh: empat blok",groups:[0,1,2,3]}
];
const mean=values.reduce((s,x)=>s+x,0)/values.length;
const round=(x:number)=>Number(x.toFixed(3)).toString();

/** Exact finite-partition conditional expectation; each atom has probability 1/4. */
export function ConditionalExpectationLab({compact=false}:{compact?:boolean}){
  const [mode,setMode]=useState<Mode>("adjacent");
  const active=modes.find(m=>m.key===mode)!;
  const result=useMemo(()=>{
    const groups=active.groups;
    const conditional=values.map((_,i)=>{
      const members=values.filter((__,j)=>groups[j]===groups[i]);
      return members.reduce((sum,x)=>sum+x,0)/members.length;
    });
    const residual=values.reduce((sum,x,i)=>sum+(x-conditional[i])**2,0)/values.length;
    const between=conditional.reduce((sum,x)=>sum+(x-mean)**2,0)/values.length;
    const total=values.reduce((sum,x)=>sum+(x-mean)**2,0)/values.length;
    return {conditional,residual,between,total};
  },[active]);
  const top=238,base=262,scale=27;
  return <section className="content-box" style={{padding:compact?16:22,marginBlock:18}}>
    <strong style={{fontSize:"1.06rem"}}>Laboratorium Ekspektasi Bersyarat pada Partisi</strong>
    <p style={{lineHeight:1.7,color:"var(--muted)",margin:"8px 0 14px"}}>
      Empat hasil memiliki peluang sama, masing-masing 1/4, dan nilai X = (0, 2, 4, 6).
      Pilih informasi yang tersedia; batang penuh menunjukkan X, garis dan titik menunjukkan E[X | G] pada setiap hasil.
      Rata-rata bersyarat harus konstan pada setiap blok informasi.
    </p>
    <label style={{display:"grid",gap:6,fontWeight:650,maxWidth:410,marginBottom:12}}>
      Informasi yang diketahui
      <select aria-label="Pilih partisi informasi" value={mode} onChange={e=>setMode(e.target.value as Mode)}
        style={{padding:10,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text)"}}>
        {modes.map(m=><option key={m.key} value={m.key}>{m.label}</option>)}
      </select>
    </label>
    <svg viewBox="0 0 670 325" role="img"
      aria-label={"Nilai asli X: 0, 2, 4, 6. Ekspektasi bersyarat: "+result.conditional.join(", ")+". Varians dalam blok: "+result.residual+"; varians antar blok: "+result.between+"."}
      style={{width:"100%",maxWidth:670,height:"auto",display:"block",margin:"0 auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12}}>
      <line x1="56" y1={base} x2="624" y2={base} stroke="var(--text)" strokeWidth="1.5"/>
      {[0,2,4,6].map(v=><g key={v}>
        <line x1="52" y1={base-v*scale} x2="624" y2={base-v*scale} stroke="var(--border)" strokeDasharray="3 5"/>
        <text x="44" y={base-v*scale+5} textAnchor="end" fontSize="14" fill="var(--text)">{v}</text>
      </g>)}
      {values.map((v,i)=>{
        const x=106+i*139,cy=base-result.conditional[i]*scale;
        return <g key={i}>
          <rect x={x-28} y={base-v*scale} width="56" height={Math.max(v*scale,1)}
            fill="#0f766e" fillOpacity=".32" stroke="#0f766e" strokeWidth="1.4"/>
          <line x1={x-40} x2={x+40} y1={cy} y2={cy} stroke="#b45309" strokeWidth="3"/>
          <circle cx={x} cy={cy} r="5" fill="#b45309"/>
          <text x={x} y="286" textAnchor="middle" fontSize="14" fill="var(--text)">ω={i+1}</text>
          <text x={x} y="305" textAnchor="middle" fontSize="12" fill="var(--text)">blok {active.groups[i]+1}</text>
        </g>;
      })}
      <text x="330" y="27" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--text)">
        E[X | G] = ({result.conditional.map(round).join(", ")})
      </text>
    </svg>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,190px),1fr))",gap:9,marginTop:14}}>
      <div style={{padding:10,border:"1px solid var(--border)",borderRadius:9}}>E[X] = E[E[X | G]] = <strong>{round(mean)}</strong></div>
      <div style={{padding:10,border:"1px solid var(--border)",borderRadius:9}}>E[Var(X | G)] = <strong>{round(result.residual)}</strong></div>
      <div style={{padding:10,border:"1px solid var(--border)",borderRadius:9}}>Var(E[X | G]) = <strong>{round(result.between)}</strong></div>
    </div>
    <p style={{lineHeight:1.7,margin:"12px 0 0"}}>
      Verifikasi: Var(X) = {round(result.total)} = {round(result.residual)} + {round(result.between)}.
      {" "}Mengubah partisi mengubah nilai E[X | G], tetapi tidak mengubah E[X] atau varians total.
      Pada informasi penuh, residu nol; tanpa informasi, semua rata-rata bersyarat sama dengan 3.
    </p>
  </section>;
}
