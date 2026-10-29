"use client";

import {useMemo,useState} from "react";
import {exactLinearOde,linearOdeTrajectory} from "@/lib/linear-first-order-explorer";

const W=720,H=380,L=62,R=22,T=27,B=53;
const PW=W-L-R,PH=H-T-B;
const fmt=(x:number)=>Number.isFinite(x)?Number(x.toPrecision(5)).toString():"tidak terhingga";

export function LinearFirstOrderLab({compact=false}:{compact?:boolean}){
  const [a,setA]=useState(2);
  const [b,setB]=useState(2);
  const [y0,setY0]=useState(3);
  const [steps,setSteps]=useState(8);
  const horizon=3;
  const result=useMemo(()=>linearOdeTrajectory({a,b,y0,T:horizon,steps}),[a,b,y0,steps]);
  const values=[...result.exact,...result.euler].map(p=>p.y);
  if(result.equilibrium!==null)values.push(result.equilibrium);
  values.push(0);
  const lo=Math.min(...values),hi=Math.max(...values);
  const margin=Math.max(.35,(hi-lo)*.13);
  const minY=lo-margin,maxY=hi+margin;
  const sx=(t:number)=>L+PW*t/horizon;
  const sy=(y:number)=>T+PH*(maxY-y)/(maxY-minY);
  const poly=(points:{t:number;y:number}[])=>points.map(p=>sx(p.t).toFixed(2)+","+sy(p.y).toFixed(2)).join(" ");
  const slopeSegments=[] as {x1:number;y1:number;x2:number;y2:number;key:string}[];
  for(let i=1;i<=11;i++)for(let j=1;j<=7;j++){
    const t=horizon*i/12,y=minY+(maxY-minY)*j/8;
    const slope=b-a*y;
    const screenSlope=-slope*(PH/(maxY-minY))/(PW/horizon);
    const dx=11/Math.hypot(1,screenSlope),dy=dx*screenSlope;
    const x=sx(t),yy=sy(y);
    slopeSegments.push({x1:x-dx,y1:yy-dy,x2:x+dx,y2:yy+dy,key:i+"-"+j});
  }
  const first=exactLinearOde(a,b,y0,horizon);
  const unstable=a>0&&result.stableToEquilibrium===false&&y0!==result.equilibrium;
  const controls=[
    {name:"Koefisien a",value:a,choices:[-1,0,.5,1,2,3],change:setA},
    {name:"Masukan b",value:b,choices:[-2,0,1,2,4],change:setB},
    {name:"Nilai awal y(0)",value:y0,choices:[-2,0,1,2,3,5],change:setY0},
    {name:"Langkah Euler",value:steps,choices:[4,8,16,32,64],change:setSteps},
  ];
  return <div className="content-box" style={{padding:compact?15:22,marginBlock:18}}>
    <div style={{display:"flex",justifyContent:"space-between",gap:14,flexWrap:"wrap"}}>
      <div><strong style={{fontSize:"1.06rem"}}>Laboratorium Persamaan Linear Orde Satu</strong>
        <p style={{color:"var(--muted)",lineHeight:1.65,margin:"6px 0"}}>Kurva eksak, medan kemiringan, dan metode Euler untuk y′ + ay = b.</p>
      </div>
      <span style={{alignSelf:"flex-start",padding:"7px 11px",borderRadius:12,
        background:unstable?"#fee2e2":"var(--surface-2)",color:unstable?"#991b1b":"var(--text)",fontSize:".8rem",fontWeight:750}}>
        {a>0?(result.stableToEquilibrium?"Euler stabil":"Euler tidak stabil"):a===0?"Tanpa redaman":"Solusi eksak bertumbuh"}
      </span>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,180px),1fr))",gap:12,margin:"15px 0"}}>
      {controls.map(control=><label key={control.name} style={{display:"grid",gap:5,color:"var(--text)",fontSize:".83rem",fontWeight:650}}>
        {control.name}
        <select aria-label={control.name} value={control.value} onChange={e=>control.change(Number(e.target.value))}
          style={{width:"100%",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",background:"var(--surface)",color:"var(--text)"}}>
          {control.choices.map(n=><option key={n} value={n}>{n}</option>)}
        </select>
      </label>)}
    </div>
    <svg viewBox={"0 0 "+W+" "+H} role="img"
      aria-label={"Medan kemiringan dan solusi persamaan y aksen + "+a+"y = "+b+
        ", nilai awal "+y0+", "+steps+" langkah Euler, galat di t=3 sebesar "+fmt(result.errorAtEnd)}
      style={{display:"block",width:"100%",height:"auto",border:"1px solid var(--border)",borderRadius:14,background:"var(--surface)"}}>
      {Array.from({length:6},(_,i)=>i).map(i=>{
        const y=minY+(maxY-minY)*i/5;
        return <g key={"y"+i}>
          <line x1={L} y1={sy(y)} x2={W-R} y2={sy(y)} stroke="var(--border)" strokeWidth=".8"/>
          <text x={L-9} y={sy(y)+4} textAnchor="end" fontSize="12" fill="var(--muted)">{fmt(y)}</text>
        </g>;
      })}
      {Array.from({length:7},(_,i)=>i).map(i=><g key={"x"+i}>
        <line x1={sx(i/2)} y1={T} x2={sx(i/2)} y2={H-B} stroke="var(--border)" strokeWidth=".8"/>
        <text x={sx(i/2)} y={H-B+19} textAnchor="middle" fontSize="12" fill="var(--muted)">{i/2}</text>
      </g>)}
      {slopeSegments.map(s=><line key={s.key} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
        stroke="var(--muted)" strokeOpacity=".45" strokeWidth="1.35" strokeLinecap="round"/>)}
      {result.equilibrium!==null&&<line x1={L} x2={W-R} y1={sy(result.equilibrium)} y2={sy(result.equilibrium)}
        stroke="#16a34a" strokeDasharray="6 5" strokeWidth="2"/>}
      <polyline points={poly(result.exact)} fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinejoin="round"/>
      <polyline points={poly(result.euler)} fill="none" stroke="#e11d48" strokeWidth="2.5" strokeLinejoin="round"/>
      {result.euler.map((p,i)=><circle key={i} cx={sx(p.t)} cy={sy(p.y)} r="3.5" fill="#e11d48"/>)}
      <text x={W/2} y={H-12} textAnchor="middle" fontSize="13" fill="var(--text)">Waktu t</text>
      <text x={L} y={T-9} fontSize="12" fill="var(--text)">y(t)</text>
    </svg>
    <div style={{display:"flex",flexWrap:"wrap",gap:15,alignItems:"center",fontSize:".82rem",margin:"13px 0",color:"var(--text)"}}>
      <span><b style={{color:"#2563eb"}}>━━</b> Solusi eksak</span>
      <span><b style={{color:"#e11d48"}}>━━</b> Iterasi Euler</span>
      {result.equilibrium!==null&&<span><b style={{color:"#16a34a"}}>┄┄</b> Setimbang</span>}
      <span style={{color:"var(--muted)"}}>Garis pendek: kemiringan y′ = b − ay</span>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,170px),1fr))",gap:9}}>
      {[
        ["y eksak saat t=3",fmt(first)],
        ["Euler saat t=3",fmt(result.euler.at(-1)?.y??NaN)],
        ["Galat absolut",fmt(result.errorAtEnd)],
        ["h dan faktor 1−ah",fmt(result.step)+"; "+fmt(result.factor)]
      ].map(([label,value])=><div key={label} style={{border:"1px solid var(--border)",borderRadius:11,padding:"10px 12px",background:"var(--surface-2)"}}>
        <div style={{color:"var(--muted)",fontSize:".76rem"}}>{label}</div>
        <strong style={{display:"block",fontSize:".93rem",overflowWrap:"anywhere",marginTop:4}}>{value}</strong>
      </div>)}
    </div>
    <p style={{fontSize:".82rem",color:"var(--muted)",lineHeight:1.7,margin:"12px 0 0"}}>
      {a>0
        ?(result.stableToEquilibrium
          ?"Karena 0 < ah < 2, iterasi Euler menuju titik setimbang untuk langkah tetap."
          :"Karena ah tidak berada dalam (0,2), metode Euler tidak stabil terhadap gangguan dari titik setimbang untuk langkah tetap.")
        :a===0
          ?"Untuk a = 0, solusi adalah garis lurus dan metode Euler tepat pada setiap titik grid."
          :"Untuk a < 0, selisih dua solusi eksak membesar ke arah waktu maju; tidak ada titik setimbang yang menarik."}
      {" "}Grafik menampilkan sampel pada interval 0 ≤ t ≤ 3, bukan bukti bagi seluruh waktu.
    </p>
  </div>;
}
