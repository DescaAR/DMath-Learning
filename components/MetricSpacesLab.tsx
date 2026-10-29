"use client";

import { useMemo, useState } from "react";

/**
 * Mathematical ball in (R^2, d_2) or (R^2, d_infinity).
 * All membership decisions use a strict inequality d(x,0) < r.
 */
export function MetricSpacesLab({compact=false}:{compact?:boolean}){
  const [metric,setMetric]=useState<"euclidean"|"maximum">("euclidean");
  const [radius,setRadius]=useState(1.5);
  const scale=82;
  const center=250;
  const points=useMemo(()=>{
    const rows:{x:number;y:number;distance:number;inside:boolean}[]=[];
    for(let ix=-5;ix<=5;ix++)for(let iy=-5;iy<=5;iy++){
      const x=ix/2,y=iy/2;
      const distance=metric==="euclidean"?Math.hypot(x,y):Math.max(Math.abs(x),Math.abs(y));
      rows.push({x,y,distance,inside:distance<radius-1e-10});
    }
    return rows;
  },[metric,radius]);
  const insideCount=points.filter(p=>p.inside).length;
  return(
    <section aria-label="Eksplorasi bola terbuka pada dua metrik" style={{maxWidth:720,margin:"1.25rem auto",padding:compact?"1rem":"1.5rem",border:"1px solid var(--border, #d5dbe3)",borderRadius:18,background:"var(--card, #fff)",color:"var(--foreground, inherit)"}}>
      <h3 style={{margin:"0 0 .5rem",fontSize:"1.12rem"}}>Laboratorium bola terbuka pada bidang</h3>
      <p style={{margin:"0 0 1rem",lineHeight:1.6}}>Bandingkan metrik Euclidean dan metrik maksimum pada titik pusat (0, 0). Titik kisi yang memenuhi <strong>jarak &lt; jari-jari</strong> ditandai sebagai anggota bola; titik pada batas tidak termasuk.</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:14}}>
        <button type="button" aria-pressed={metric==="euclidean"} onClick={()=>setMetric("euclidean")} style={{padding:"9px 13px",borderRadius:9,border:"1px solid #71829b",background:metric==="euclidean"?"#173e67":"transparent",color:metric==="euclidean"?"white":"inherit",cursor:"pointer"}}>Jarak Euclidean d₂</button>
        <button type="button" aria-pressed={metric==="maximum"} onClick={()=>setMetric("maximum")} style={{padding:"9px 13px",borderRadius:9,border:"1px solid #71829b",background:metric==="maximum"?"#173e67":"transparent",color:metric==="maximum"?"white":"inherit",cursor:"pointer"}}>Jarak maksimum d∞</button>
      </div>
      <label htmlFor="metric-ball-radius" style={{display:"block",marginBottom:7}}>Jari-jari r = <strong>{radius.toFixed(1)}</strong></label>
      <input id="metric-ball-radius" type="range" min="0.5" max="2.4" step="0.1" value={radius} onChange={e=>setRadius(Number(e.target.value))} style={{width:"100%",accentColor:"#1f609a"}}/>
      <svg viewBox="0 0 500 500" role="img" aria-label={metric==="euclidean"?"Bola terbuka Euclidean berbentuk lingkaran":"Bola terbuka metrik maksimum berbentuk persegi"} style={{display:"block",width:"100%",maxWidth:500,height:"auto",margin:"12px auto"}}>
        <rect x="0" y="0" width="500" height="500" fill="#f8fafc" rx="12"/>
        {Array.from({length:11},(_,i)=>{
          const pos=center+(i-5)*scale/2;
          return <g key={i}><line x1={pos} y1="15" x2={pos} y2="485" stroke="#e2e8f0"/><line x1="15" y1={pos} x2="485" y2={pos} stroke="#e2e8f0"/></g>;
        })}
        <line x1="15" y1={center} x2="485" y2={center} stroke="#64748b" strokeWidth="1.5"/>
        <line x1={center} y1="15" x2={center} y2="485" stroke="#64748b" strokeWidth="1.5"/>
        {metric==="euclidean"
          ?<circle cx={center} cy={center} r={radius*scale} fill="#3b82f6" fillOpacity=".11" stroke="#1d4ed8" strokeWidth="2.5" strokeDasharray="8 5"/>
          :<rect x={center-radius*scale} y={center-radius*scale} width={2*radius*scale} height={2*radius*scale} fill="#3b82f6" fillOpacity=".11" stroke="#1d4ed8" strokeWidth="2.5" strokeDasharray="8 5"/>}
        {points.map(p=><circle key={p.x+":"+p.y} cx={center+p.x*scale} cy={center-p.y*scale} r={p.inside?5.5:3.5} fill={p.inside?"#166534":"#94a3b8"} stroke={p.inside?"#fff":"none"} strokeWidth="1.2"/>)}
        <circle cx={center} cy={center} r="6.5" fill="#9a3412" stroke="white" strokeWidth="1.5"/>
        <text x="470" y="244" textAnchor="end" fontSize="13" fill="#334155">x</text>
        <text x="260" y="23" fontSize="13" fill="#334155">y</text>
      </svg>
      <p aria-live="polite" style={{lineHeight:1.6,margin:"0 0 .5rem"}}><strong>{insideCount}</strong> dari {points.length} titik kisi yang ditampilkan berada di dalam bola terbuka. Garis putus-putus menunjukkan batas yang tidak termasuk.</p>
      <p style={{lineHeight:1.6,margin:0,fontSize:".94rem"}}>{metric==="euclidean"?"d₂((x,y),(0,0)) = √(x² + y²); syarat keanggotaan x² + y² < r².":"d∞((x,y),(0,0)) = max(|x|, |y|); syarat keanggotaan |x| < r dan |y| < r."}</p>
    </section>
  );
}
