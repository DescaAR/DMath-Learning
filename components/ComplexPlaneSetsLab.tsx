"use client";

import { useState } from "react";
import { complexSetFacts, isInComplexSet, type ComplexSetMode, type ComplexPoint } from "@/lib/complex-plane-explorer";

const modes:ComplexSetMode[]=["disk","closed","annulus","punctured","disconnected"];
const centerX=250,centerY=172,scale=66;
const screen=([x,y]:ComplexPoint)=>[centerX+scale*x,centerY-scale*y] as const;
const pathPoints=(radius:number)=>Array.from({length:41},(_,k)=>{
  const t=Math.PI*k/40;
  return screen([radius*Math.cos(t),radius*Math.sin(t)]);
}).map((p,k)=>(k===0?"M":"L")+p[0].toFixed(2)+","+p[1].toFixed(2)).join(" ");
const status=(yes:boolean)=>yes?"Ya":"Tidak";

export function ComplexPlaneSetsLab({compact=false}:{compact?:boolean}){
  const [mode,setMode]=useState<ComplexSetMode>("annulus");
  const [inner,setInner]=useState(1);
  const facts=complexSetFacts[mode];
  const a:ComplexPoint=mode==="disconnected"?[-1.6,0]:mode==="annulus"?[1.7,0]:mode==="punctured"?[1.7,0]:[-1,0.4];
  const b:ComplexPoint=mode==="disconnected"?[1.6,0]:mode==="annulus"?[-1.7,0]:mode==="punctured"?[-1.7,0]:[1,-0.4];
  const pa=screen(a),pb=screen(b);
  const bothMembers=isInComplexSet(mode,a,inner)&&isInComplexSet(mode,b,inner);
  const arcRadius=mode==="annulus"?Math.max(inner+0.1,1.7):1.7;
  const arc=pathPoints(arcRadius);
  const expression=mode==="disk"?"|z| < 2":mode==="closed"?"|z| ≤ 2"
    :mode==="annulus"?inner.toFixed(1)+" < |z| < 2"
    :mode==="punctured"?"0 < |z| < 2"
    :"|z+1.6| < 0.9 atau |z−1.6| < 0.9";
  return <div className="content-box" style={{padding:compact?16:22,marginBlock:16}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap"}}>
      <div><strong style={{fontSize:"1.08rem"}}>Laboratorium Himpunan di Bidang Kompleks</strong>
        <p style={{color:"var(--muted)",margin:"5px 0",lineHeight:1.6}}>Bandingkan keterbukaan, keterhubungan, domain, dan lubang topologis.</p></div>
      <span style={{background:facts.domain?"#dcfce7":"#fee2e2",color:facts.domain?"#166534":"#991b1b",padding:"7px 12px",borderRadius:999,fontWeight:750}}>
        {facts.domain?"Domain":"Bukan domain"}
      </span>
    </div>
    <div role="group" aria-label="Pilih konfigurasi himpunan kompleks" style={{display:"flex",flexWrap:"wrap",gap:8,margin:"14px 0"}}>
      {modes.map(id=><button type="button" key={id} aria-pressed={mode===id} onClick={()=>setMode(id)}
        style={{border:"1px solid var(--border)",borderRadius:10,padding:"8px 10px",cursor:"pointer",fontSize:".86rem",
          background:mode===id?"#176be8":"var(--surface)",color:mode===id?"#fff":"var(--text)"}}>
        {complexSetFacts[id].label}
      </button>)}
    </div>
    {mode==="annulus"&&<label style={{display:"grid",gap:5,fontWeight:650,fontSize:".86rem",maxWidth:380,marginBottom:12}}>
      Jari-jari lubang = {inner.toFixed(1)}
      <input type="range" min=".5" max="1.5" step=".1" value={inner}
        onChange={e=>setInner(Number(e.target.value))} aria-label="Jari-jari dalam anulus"/>
    </label>}
    <svg role="img" aria-label={"Bidang kompleks untuk "+facts.label+" dengan "+expression+", memperlihatkan batas dan lintasan dua titik"}
      viewBox="0 0 500 344" style={{display:"block",width:"100%",maxWidth:700,height:"auto",margin:"0 auto",border:"1px solid var(--border)",borderRadius:14,background:"var(--surface)"}}>
      {Array.from({length:9},(_,k)=>k-4).map(k=><g key={k}>
        <line x1={centerX+scale*k} y1="0" x2={centerX+scale*k} y2="344" stroke="var(--border)" strokeWidth=".7"/>
        <line x1="0" y1={centerY-scale*k} x2="500" y2={centerY-scale*k} stroke="var(--border)" strokeWidth=".7"/>
      </g>)}
      <line x1="0" y1={centerY} x2="500" y2={centerY} stroke="var(--muted)" strokeWidth="1.3"/>
      <line x1={centerX} y1="0" x2={centerX} y2="344" stroke="var(--muted)" strokeWidth="1.3"/>
      {mode==="disconnected"?<g>
        <circle cx={centerX-1.6*scale} cy={centerY} r={.9*scale} fill="#0d9488" fillOpacity=".20" stroke="#0d9488" strokeDasharray="5 4" strokeWidth="2.5"/>
        <circle cx={centerX+1.6*scale} cy={centerY} r={.9*scale} fill="#0d9488" fillOpacity=".20" stroke="#0d9488" strokeDasharray="5 4" strokeWidth="2.5"/>
      </g>:<g>
        <circle cx={centerX} cy={centerY} r={2*scale} fill="#0d9488" fillOpacity=".20" stroke="#0d9488"
          strokeDasharray={mode==="closed"?undefined:"5 4"} strokeWidth="2.5"/>
        {(mode==="annulus"||mode==="punctured")&&<circle cx={centerX} cy={centerY}
          r={mode==="annulus"?inner*scale:3} fill="var(--surface)" stroke="#d97706" strokeWidth="2.5"
          strokeDasharray={mode==="annulus"?"5 4":undefined}/>}
      </g>}
      {mode==="annulus"||mode==="punctured"?<g>
        <line x1={pa[0]} y1={pa[1]} x2={centerX+arcRadius*scale} y2={centerY} stroke="#2563eb" strokeWidth="3" strokeDasharray="5 3"/>
        <path d={arc} fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="5 3"/>
        <line x1={centerX-arcRadius*scale} y1={centerY} x2={pb[0]} y2={pb[1]} stroke="#2563eb" strokeWidth="3" strokeDasharray="5 3"/>
      </g>:facts.pathConnected?<line x1={pa[0]} y1={pa[1]} x2={pb[0]} y2={pb[1]} stroke="#2563eb" strokeWidth="3" strokeDasharray="5 3"/>:null}
      {[{point:pa,label:"A"},{point:pb,label:"B"}].map(({point,label})=><g key={label}>
        <circle cx={point[0]} cy={point[1]} r="5.5" fill="#1d4ed8" stroke="#fff" strokeWidth="1.5"/>
        <text x={point[0]+8} y={point[1]-9} fill="var(--text)" fontSize="14" fontWeight="700">{label}</text>
      </g>)}
      <text x="478" y={centerY-10} fill="var(--text)" fontSize="13">Re</text>
      <text x={centerX+9} y="16" fill="var(--text)" fontSize="13">Im</text>
    </svg>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:8,marginTop:13}}>
      {[
        ["Terbuka",facts.open],["Tertutup",facts.closed],
        ["Terhubung lintasan",facts.pathConnected],["Domain",facts.domain],
        ["Domain terhubung sederhana",facts.simplyConnectedDomain],
      ].map(([label,value])=><div key={label as string} style={{border:"1px solid var(--border)",borderRadius:10,padding:10}}>
        <span style={{display:"block",fontSize:".76rem",color:"var(--muted)"}}>{label as string}</span>
        <strong>{status(value as boolean)}</strong>
      </div>)}
    </div>
    <p style={{margin:"13px 0 4px",fontWeight:700,color:"var(--text)"}}>{expression}</p>
    <p style={{margin:0,color:"var(--muted)",lineHeight:1.7,fontSize:".86rem"}}>
      {facts.pathConnected&&bothMembers
        ?"Garis biru putus-putus merupakan contoh lintasan dari A ke B yang tidak meninggalkan himpunan."
        :"Titik A dan B berada pada komponen berbeda; tidak ada lintasan di dalam gabungannya yang menghubungkan keduanya."}
      {" "}Garis batas putus-putus berarti batas tidak termasuk; garis penuh pada cakram tertutup berarti batas termasuk.
      Hasil visual bukan pengganti pembuktian untuk semua titik.
    </p>
  </div>;
}
