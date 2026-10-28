"use client";

import { useId, useState, type CSSProperties } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { evaluateLimitFunction, limitExperiment, type LimitMode, limitModes } from "@/lib/precise-limit-explorer";

const modeNames:Record<LimitMode,{id:string;en:string;formula:string}>={
  linear:{id:"Linear",en:"Linear",formula:"f(x) = 3x + 1; a = 2; L = 7"},
  quadratic:{id:"Kuadrat",en:"Quadratic",formula:"f(x) = x²; a = 2; L = 4"},
  hole:{id:"Lubang",en:"Removable hole",formula:"f(x) = (x² − 1)/(x − 1); a = 1; L = 2"},
  jump:{id:"Loncatan",en:"Jump",formula:"f(x) = 0 (x < 0), 1 (x ≥ 0); a = 0; L = 0.5"}
};
const panel:CSSProperties={border:"1px solid var(--border)",borderRadius:19,
  padding:"clamp(14px,3vw,25px)",background:"var(--surface)",color:"var(--text)"};
const button:CSSProperties={border:"1px solid var(--border)",borderRadius:10,
  padding:"9px 12px",fontWeight:700,color:"var(--text)",background:"var(--surface)",cursor:"pointer"};
const fmt=(value:number)=>Number(value.toFixed(5)).toString();

export function PreciseLimitLab({compact=false}:{compact?:boolean}){
  const {language}=useLanguage();
  const en=language==="en";
  const [mode,setMode]=useState<LimitMode>("linear");
  const [epsilon,setEpsilon]=useState(0.5);
  const [scale,setScale]=useState(1);
  const clipId=useId().replaceAll(":","-");
  const experiment=limitExperiment(mode,epsilon,scale);
  const {a,L,delta,threshold,valid,witnessX,witnessY}=experiment;
  const xMin=a-1.4,xMax=a+1.4;
  const ySpan=mode==="linear"?4.6:mode==="quadratic"?7.6:mode==="hole"?2.4:0.8;
  const yMin=L-ySpan,yMax=L+ySpan;
  const left=72,right=618,top=35,bottom=305;
  const X=(x:number)=>left+(x-xMin)/(xMax-xMin)*(right-left);
  const Y=(y:number)=>bottom-(y-yMin)/(yMax-yMin)*(bottom-top);
  const curve=(start:number,end:number,steps=160)=>{
    const pts:string[]=[];
    for(let i=0;i<=steps;i++){
      const x=start+(end-start)*i/steps;
      const y=evaluateLimitFunction(mode,x);
      if(y!==null)pts.push(fmt(X(x))+","+fmt(Y(y)));
    }
    return pts.join(" ");
  };
  const curves=mode==="jump"||mode==="hole"
    ?[curve(xMin,a-1e-7),curve(a+1e-7,xMax)]
    :[curve(xMin,xMax)];
  const bandLeft=X(a-delta),bandRight=X(a+delta);
  const bandTop=Y(L+epsilon),bandBottom=Y(L-epsilon);
  const epsOptions=mode==="jump"?[0.1,0.2,0.3,0.4]:[0.25,0.5,1,1.5];

  return <section className="precise-limit-lab" style={panel}
    aria-label={en?"Epsilon-delta limit laboratory":"Laboratorium limit epsilon–delta"}>
    <strong style={{fontSize:compact?"1rem":"1.18rem",color:"var(--deep)"}}>
      {en?"Explore the definition of a limit":"Eksplorasi definisi limit"}
    </strong>
    <p style={{fontSize:".88rem",lineHeight:1.7,color:"var(--muted)",margin:"6px 0 15px"}}>
      {en?"The green vertical band must force the graph inside the blue horizontal band for every permitted x.":
        "Pita vertikal hijau harus memaksa seluruh grafik pada titik domain yang diizinkan berada di dalam pita horizontal biru."}
    </p>
    <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:15}}>
      {limitModes.map(item=><button key={item} type="button"
        style={{...button,borderColor:mode===item?"var(--blue)":"var(--border)",
          background:mode===item?"var(--surface-2)":"var(--surface)"}}
        aria-pressed={mode===item} onClick={()=>{
          setMode(item);setEpsilon(item==="jump"?0.2:0.5);setScale(1);
        }}>{en?modeNames[item].en:modeNames[item].id}</button>)}
    </div>
    <p style={{fontWeight:750,fontSize:".92rem",lineHeight:1.6,margin:"0 0 13px"}}>
      {modeNames[mode].formula}
    </p>
    <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:14}} aria-label={en?"Output tolerance":"Toleransi keluaran"}>
      {epsOptions.map(value=><button key={value} type="button"
        aria-pressed={epsilon===value} onClick={()=>setEpsilon(value)}
        style={{...button,borderColor:epsilon===value?"var(--blue)":"var(--border)"}}>
        ε = {value}
      </button>)}
    </div>
    <label style={{display:"block",fontSize:".9rem",fontWeight:750,marginBottom:12}}>
      {en?"Input radius multiplier":"Pengali radius masukan"}: {scale.toFixed(2)}×
      <input type="range" min="0.25" max="2.5" step="0.25" value={scale}
        onChange={event=>setScale(Number(event.target.value))}
        style={{display:"block",width:"100%",accentColor:"var(--blue)",marginTop:8}}/>
    </label>
    <svg viewBox="0 0 690 360" role="img" aria-label={en?
      "Limit graph "+mode+", epsilon "+epsilon+", delta "+fmt(delta)+", "+(valid?"valid band":"counterexample shown"):
      "Grafik limit "+mode+", epsilon "+epsilon+", delta "+fmt(delta)+", "+(valid?"pita memenuhi syarat":"terdapat titik pelanggar")}
      style={{display:"block",width:"100%",height:"auto",maxWidth:760,margin:"0 auto"}}>
      <defs><clipPath id={clipId}><rect x={left} y={top} width={right-left} height={bottom-top}/></clipPath></defs>
      <rect x={left} y={top} width={right-left} height={bottom-top}
        fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.5"/>
      <g clipPath={"url(#"+clipId+")"}>
        <rect x={bandLeft} y={top} width={bandRight-bandLeft} height={bottom-top}
          fill="#0d9488" opacity=".14"/>
        <rect x={left} y={bandTop} width={right-left} height={bandBottom-bandTop}
          fill="#2563eb" opacity=".15"/>
        <line x1={X(a)} x2={X(a)} y1={top} y2={bottom} stroke="#64748b" strokeDasharray="5 5"/>
        <line x1={left} x2={right} y1={Y(L)} y2={Y(L)} stroke="#64748b" strokeDasharray="5 5"/>
        {[a-delta,a+delta].map((x,i)=><line key={i} x1={X(x)} x2={X(x)}
          y1={top} y2={bottom} stroke="#0d9488" strokeWidth="2" strokeDasharray="6 5"/>)}
        {[L-epsilon,L+epsilon].map((y,i)=><line key={i} x1={left} x2={right}
          y1={Y(y)} y2={Y(y)} stroke="#2563eb" strokeWidth="2" strokeDasharray="6 5"/>)}
        {curves.map((points,i)=><polyline key={i} points={points} fill="none"
          stroke="#db5c32" strokeWidth="3.5" strokeLinejoin="round"/>)}
        {mode==="hole"&&<circle cx={X(a)} cy={Y(L)} r="7" fill="var(--surface)"
          stroke="#db5c32" strokeWidth="3"/>}
        {mode==="jump"&&<>
          <circle cx={X(a)} cy={Y(0)} r="7" fill="var(--surface)" stroke="#db5c32" strokeWidth="3"/>
          <circle cx={X(a)} cy={Y(1)} r="7" fill="#db5c32" stroke="var(--surface)" strokeWidth="2"/>
        </>}
        {witnessX!==null&&witnessY!==null&&<circle cx={X(witnessX)} cy={Y(witnessY)}
          r="8" fill="#dc2626" stroke="#fff" strokeWidth="2.5"/>}
      </g>
      <text x={X(a)} y="329" textAnchor="middle" fill="currentColor" fontSize="15">a = {a}</text>
      <text x={right} y="329" textAnchor="end" fill="#0d9488" fontSize="14">δ = {fmt(delta)}</text>
      <text x={left+4} y="22" textAnchor="start" fill="#2563eb" fontSize="15">ε = {epsilon}</text>
      <text x={right} y="22" textAnchor="end" fill="currentColor" fontSize="14">L = {L}</text>
    </svg>
    <div aria-live="polite" style={{marginTop:12,padding:"12px 14px",borderRadius:12,
      background:"var(--surface-2)",fontSize:".89rem",lineHeight:1.75}}>
      <strong style={{color:valid?"#0d9488":"#d03d39"}}>
        {valid?(en?"The implication holds for every x in the punctured band.":"Implikasi berlaku untuk setiap x pada pita berlubang."):
          (en?"A counterexample exists inside the proposed input band.":"Ada titik yang melanggar syarat di dalam pita masukan.")}
      </strong>
      <div>{en?"Chosen radius":"Radius terpilih"}: δ = {fmt(delta)}.
        {mode!=="jump"?" "+(en?"Largest valid radius":"Radius sah terbesar")+" = "+fmt(threshold)+".":""}
      </div>
      {witnessX!==null&&witnessY!==null&&<div>
        {en?"Witness":"Saksi"}: x = {fmt(witnessX)}, f(x) = {fmt(witnessY)},
        {" "} |f(x) − L| = {fmt(Math.abs(witnessY-L))} ≥ ε = {epsilon}.
      </div>}
      {mode==="jump"&&<div>{en?
        "For every δ > 0, choosing x = δ/2 gives |f(x) − 0.5| = 0.5 > ε; no positive radius can work.":
        "Untuk setiap δ > 0, pilihan x = δ/2 memberi |f(x) − 0,5| = 0,5 > ε; tidak ada radius positif yang berhasil."}</div>}
      {mode==="hole"&&<div>{en?
        "The open circle at x = 1 is excluded by 0 < |x − a|. A missing function value does not prevent the limit.":
        "Lingkaran kosong di x = 1 dikeluarkan oleh 0 < |x − a|. Fungsi yang tidak terdefinisi di titik pusat tetap dapat mempunyai limit."}</div>}
    </div>
  </section>;
}
