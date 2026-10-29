"use client";
import {useMemo,useState} from "react";
import {bisectionCases,evaluateBisection,runBisection,type BisectionKey} from "@/lib/bisection-explorer";

const W=720,H=350,L=55,R=25,T=27,B=53;
const fmt=(n:number)=>Number(n.toPrecision(7)).toString();
export function BisectionLab({compact=false}:{compact?:boolean}){
  const [key,setKey]=useState<BisectionKey>("square");
  const [steps,setSteps]=useState(5);
  const result=useMemo(()=>runBisection(key,steps),[key,steps]);
  const preset=bisectionCases.find(p=>p.key===key)!;
  const xMin=preset.a-.15*(preset.b-preset.a),xMax=preset.b+.15*(preset.b-preset.a);
  const points=Array.from({length:181},(_,i)=>{
    const x=xMin+(xMax-xMin)*i/180;
    return {x,y:evaluateBisection(key,x)};
  });
  const vals=points.map(p=>p.y).concat(0);
  const low=Math.min(...vals),high=Math.max(...vals),margin=Math.max(.3,(high-low)*.14);
  const yMin=low-margin,yMax=high+margin;
  const sx=(x:number)=>L+(W-L-R)*(x-xMin)/(xMax-xMin);
  const sy=(y:number)=>T+(H-T-B)*(yMax-y)/(yMax-yMin);
  const curve=points.map(p=>sx(p.x).toFixed(2)+","+sy(p.y).toFixed(2)).join(" ");
  const intervalWidth=result.b-result.a;
  return <div className="content-box" style={{padding:compact?15:22,marginBlock:18}}>
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
      <div><strong style={{fontSize:"1.07rem"}}>Laboratorium Metode Bagi Dua</strong>
        <p style={{color:"var(--muted)",margin:"6px 0",lineHeight:1.6}}>Amati invarian tanda, penyusutan interval, dan batas galat titik tengah.</p>
      </div>
      <span style={{borderRadius:12,padding:"8px 12px",background:"var(--surface-2)",fontSize:".82rem",fontWeight:700}}>
        {!result.valid?"Tidak memenuhi syarat tanda":result.rootAt!==null?"Akar ditemukan tepat":"Interval pengurung sah"}
      </span>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:12,margin:"15px 0"}}>
      <label style={{display:"grid",gap:5,fontWeight:650,fontSize:".86rem"}}>Fungsi
        <select aria-label="Pilih fungsi bisection" value={key} onChange={e=>setKey(e.target.value as BisectionKey)}
          style={{border:"1px solid var(--border)",borderRadius:9,padding:10,background:"var(--surface)",color:"var(--text)"}}>
          {bisectionCases.map(p=><option key={p.key} value={p.key}>{p.label}</option>)}
        </select>
      </label>
      <label style={{display:"grid",gap:5,fontWeight:650,fontSize:".86rem"}}>Jumlah pembagian: {steps}
        <input aria-label="Jumlah pembagian bisection" type="range" min="0" max="12" step="1" value={steps}
          onChange={e=>setSteps(Number(e.target.value))} style={{width:"100%",marginTop:10}}/>
      </label>
    </div>
    <svg viewBox={"0 0 "+W+" "+H} role="img"
      aria-label={"Grafik "+preset.label+". Interval aktif dari "+fmt(result.a)+" sampai "+fmt(result.b)+
        ". "+(result.valid?"Batas galat "+fmt(result.bound??0):"Syarat perubahan tanda tidak terpenuhi")}
      style={{display:"block",width:"100%",height:"auto",border:"1px solid var(--border)",borderRadius:13,background:"var(--surface)"}}>
      {result.valid&&<rect x={sx(result.a)} y={T} width={Math.max(0,sx(result.b)-sx(result.a))} height={H-T-B} fill="#2563eb" fillOpacity=".10"/>}
      <line x1={L} y1={sy(0)} x2={W-R} y2={sy(0)} stroke="var(--muted)" strokeWidth="1.5"/>
      <polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="3" strokeLinejoin="round"/>
      {[preset.a,preset.b,result.a,result.b,result.mid].map((x,i)=><g key={i}>
        <line x1={sx(x)} x2={sx(x)} y1={T} y2={H-B} stroke={i===4?"#dc2626":"#0d9488"} strokeDasharray={i===4?"5 4":"3 6"} strokeOpacity=".75"/>
        <circle cx={sx(x)} cy={sy(evaluateBisection(key,x))} r={i===4?5:3.5} fill={i===4?"#dc2626":"#0d9488"}/>
      </g>)}
      {Array.from({length:5},(_,i)=>{
        const x=preset.a+(preset.b-preset.a)*i/4;
        return <g key={i}><text x={sx(x)} y={H-B+20} textAnchor="middle" fontSize="12" fill="var(--text)">{fmt(x)}</text></g>;
      })}
      <text x={L} y={T-8} fill="var(--text)" fontSize="12">f(x)</text>
      <text x={W-R} y={H-11} textAnchor="end" fill="var(--text)" fontSize="12">x</text>
    </svg>
    <p style={{fontSize:".84rem",lineHeight:1.7,color:"var(--muted)",margin:"12px 0"}}>
      {preset.description} Garis merah menunjukkan titik tengah interval aktif; arsiran biru menunjukkan interval yang masih dijamin mengandung akar ketika syarat terpenuhi.
    </p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,170px),1fr))",gap:9}}>
      {[
        ["Interval aktif","["+fmt(result.a)+", "+fmt(result.b)+"]"],
        ["Lebar interval",fmt(intervalWidth)],
        ["Titik tengah",fmt(result.mid)],
        ["Batas galat a priori",result.valid?fmt(result.bound??0):"Tidak tersedia"],
        ["f(a) · f(b)",fmt(evaluateBisection(key,result.a)*evaluateBisection(key,result.b))],
        ["Pembagian terlaksana",String(result.history.length)]
      ].map(([label,value])=><div key={label} style={{border:"1px solid var(--border)",borderRadius:10,padding:10,background:"var(--surface-2)"}}>
        <div style={{color:"var(--muted)",fontSize:".76rem"}}>{label}</div><strong style={{overflowWrap:"anywhere",display:"block",marginTop:4}}>{value}</strong>
      </div>)}
    </div>
    {result.history.length>0&&<div style={{overflowX:"auto",marginTop:15}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:".83rem",textAlign:"right"}}>
        <caption style={{textAlign:"left",fontWeight:700,paddingBottom:8}}>Jejak iterasi (pembagian terakhir)</caption>
        <thead><tr>{["Langkah","Titik tengah","f(tengah)","Interval terpilih"].map(t=><th key={t} style={{padding:"7px 9px",borderBottom:"1px solid var(--border)",background:"var(--surface-2)"}}>{t}</th>)}</tr></thead>
        <tbody>{result.history.slice(-6).map(s=><tr key={s.index}>
          <td style={{padding:"7px 9px",borderBottom:"1px solid var(--border)"}}>{s.index}</td>
          <td style={{padding:"7px 9px",borderBottom:"1px solid var(--border)"}}>{fmt(s.mid)}</td>
          <td style={{padding:"7px 9px",borderBottom:"1px solid var(--border)"}}>{fmt(s.fm)}</td>
          <td style={{padding:"7px 9px",borderBottom:"1px solid var(--border)"}}>[{fmt(s.nextA)}, {fmt(s.nextB)}]</td>
        </tr>)}</tbody>
      </table>
    </div>}
    {!result.valid&&<p role="status" style={{color:"var(--text)",lineHeight:1.7}}>Perubahan tanda tidak terjadi. Meskipun fungsi ini mempunyai akar, Teorema Nilai Antara dalam bentuk yang dipakai bisection tidak memberi jaminan dari interval tersebut. Jangan menjalankan pembagian seolah-olah invarian terpenuhi.</p>}
    {result.valid&&<p role="status" style={{fontSize:".84rem",lineHeight:1.7,color:"var(--muted)"}}>
      {result.rootAt!==null?"Titik tengah tepat merupakan akar; galat nol.":"Jaminan galat diperoleh dari setengah lebar interval, bukan dari residual."}
      {" "}Perhitungan layar menggunakan floating-point JavaScript; pembuktian formal berlaku untuk aritmetika real eksak.
    </p>}
  </div>;
}
