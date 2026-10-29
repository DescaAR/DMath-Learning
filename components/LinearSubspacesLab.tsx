"use client";

import { useState } from "react";

/** Exact vector arithmetic; the SVG is a visual check, not the mathematical proof. */
type Pair = readonly [number,number];
type Mode = "linear"|"affine"|"plane"|"union";
const modes: {id:Mode;label:string}[] = [
  {id:"linear",label:"Garis melalui asal"},
  {id:"affine",label:"Garis bergeser"},
  {id:"plane",label:"Seluruh bidang"},
  {id:"union",label:"Gabungan dua sumbu"},
];
const add=(u:Pair,v:Pair,a:number,b:number):Pair=>[a*u[0]+b*v[0],a*u[1]+b*v[1]];
const xy=([x,y]:Pair)=>({x:250+42*x,y:177-42*y});
const fmt=(x:number)=>Object.is(x,-0)?"0":String(x);
const pair=([x,y]:Pair)=>"("+fmt(x)+", "+fmt(y)+")";

export function LinearSubspacesLab({compact=false}:{compact?:boolean}){
  const [mode,setMode]=useState<Mode>("linear");
  const [a,setA]=useState(1);
  const [b,setB]=useState(1);
  const u:Pair=mode==="linear"?[1,1]:mode==="affine"?[0,1]:[1,0];
  const v:Pair=mode==="linear"?[-1,-1]:mode==="affine"?[1,2]:[0,1];
  const w=add(u,v,a,b);
  const member=mode==="linear"?w[0]===w[1]
    :mode==="affine"?w[1]===w[0]+1
    :mode==="plane"?true
    :w[0]===0||w[1]===0;
  const isSubspace=mode==="linear"||mode==="plane";
  const description=mode==="linear"?"W = {(t,t) : t ∈ ℝ}"
    :mode==="affine"?"L = {(t,t+1) : t ∈ ℝ}"
    :mode==="plane"?"W = ℝ²"
    :"H = {(x,0)} ∪ {(0,y)}";
  const reason=mode==="linear"?"Setiap kombinasi linear tetap pada garis y=x."
    :mode==="affine"?"Garis tidak melalui nol; kombinasi linear dapat keluar dari garis."
    :mode==="plane"?"Semua kombinasi linear dua vektor bidang tetap di ℝ²."
    :"Masing-masing sumbu subruang, tetapi gabungannya tidak tertutup terhadap penjumlahan.";
  const origin=xy([0,0]);
  const arrow=(point:Pair,color:string,label:string,dashed=false)=>{
    const end=xy(point);
    return <g key={label}>
      <line x1={origin.x} y1={origin.y} x2={end.x} y2={end.y}
        stroke={color} strokeWidth="3" strokeDasharray={dashed?"6 5":undefined}
        markerEnd="url(#ls-arrow)" />
      <circle cx={end.x} cy={end.y} r="5.5" fill={color} stroke="#fff" strokeWidth="1.5"/>
      <text x={end.x+8} y={end.y-8} fontSize="13" fontWeight="700" fill={color}>{label}</text>
    </g>;
  };
  return <div className="content-box" style={{padding:compact?16:22,marginBlock:16}}>
    <div style={{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",alignItems:"center"}}>
      <div><strong style={{fontSize:"1.08rem"}}>Laboratorium Uji Subruang</strong>
        <p style={{margin:"5px 0 0",color:"var(--muted)",fontSize:".88rem"}}>Amati kombinasi linear au + bv dan syarat keanggotaan.</p></div>
      <span style={{padding:"7px 12px",borderRadius:999,fontWeight:750,
        background:isSubspace?"#dcfce7":"#fee2e2",color:isSubspace?"#166534":"#991b1b"}}>
        {isSubspace?"Subruang":"Bukan subruang"}
      </span>
    </div>
    <div style={{display:"flex",flexWrap:"wrap",gap:8,margin:"14px 0"}} role="group" aria-label="Pilih himpunan">
      {modes.map(item=><button key={item.id} type="button" aria-pressed={mode===item.id}
        onClick={()=>{setMode(item.id);setA(1);setB(1);}}
        style={{border:"1px solid var(--border)",borderRadius:10,padding:"8px 11px",cursor:"pointer",
          color:mode===item.id?"#fff":"var(--text)",background:mode===item.id?"#176be8":"var(--surface)"}}>
        {item.label}
      </button>)}
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:12,marginBottom:12}}>
      {([{name:"a",value:a,set:setA},{name:"b",value:b,set:setB}]).map(item=><label key={item.name}
        style={{display:"grid",gap:6,color:"var(--text)",fontWeight:650,fontSize:".88rem"}}>
        Skalar {item.name} = {fmt(item.value)}
        <input type="range" min="-1" max="1" step=".5" value={item.value}
          onChange={e=>item.set(Number(e.target.value))}
          aria-label={"Nilai skalar "+item.name} style={{width:"100%"}}/>
      </label>)}
    </div>
    <svg role="img" aria-label={"Bidang koordinat untuk "+description+" dengan u "+pair(u)+", v "+pair(v)+", dan kombinasi "+pair(w)}
      viewBox="0 0 500 354" style={{display:"block",width:"100%",maxWidth:680,height:"auto",margin:"0 auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14}}>
      <defs><marker id="ls-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="context-stroke"/></marker></defs>
      {Array.from({length:11},(_,i)=>i-5).map(i=><g key={i}>
        <line x1={250+42*i} y1="0" x2={250+42*i} y2="354" stroke="var(--border)" strokeWidth=".7"/>
        <line x1="0" y1={177-42*i} x2="500" y2={177-42*i} stroke="var(--border)" strokeWidth=".7"/>
        {i!==0&&Math.abs(i)<=4&&<text x={250+42*i-5} y="193" fontSize="11" fill="var(--muted)">{i}</text>}
      </g>)}
      <line x1="0" y1="177" x2="500" y2="177" stroke="var(--muted)" strokeWidth="1.5"/>
      <line x1="250" y1="0" x2="250" y2="354" stroke="var(--muted)" strokeWidth="1.5"/>
      {mode==="linear"&&<line x1="75" y1="352" x2="425" y2="2" stroke="#0d9488" strokeWidth="5" opacity=".55"/>}
      {mode==="affine"&&<line x1="75" y1="310" x2="385" y2="0" stroke="#0d9488" strokeWidth="5" opacity=".55"/>}
      {mode==="plane"&&<rect x="1" y="1" width="498" height="352" fill="#0d9488" opacity=".07"/>}
      {mode==="union"&&<g stroke="#0d9488" strokeWidth="5" opacity=".55">
        <line x1="0" y1="177" x2="500" y2="177"/><line x1="250" y1="0" x2="250" y2="354"/></g>}
      <circle cx={origin.x} cy={origin.y} r="4" fill="var(--text)"/>
      {arrow(u,"#2563eb","u")}
      {arrow(v,"#b45309","v")}
      {arrow(w,member?"#15803d":"#dc2626","au+bv",true)}
      <text x="474" y="168" fontSize="14" fill="var(--text)">x</text>
      <text x="260" y="16" fontSize="14" fill="var(--text)">y</text>
    </svg>
    <div style={{marginTop:12,color:"var(--text)",lineHeight:1.7}}>
      <strong>{description}</strong>
      <div>u = {pair(u)}, v = {pair(v)}; au + bv = {pair(w)}.</div>
      <div style={{fontWeight:750,color:member?"#15803d":"#dc2626"}}>
        {member?"Kombinasi berada dalam himpunan.":"Kombinasi berada di luar himpunan: kontra-contoh ketertutupan."}
      </div>
      <p style={{margin:"6px 0 0",color:"var(--muted)"}}>{reason} Satu hasil eksperimen yang berhasil tidak membuktikan ketertutupan untuk semua skalar.</p>
    </div>
  </div>;
}
