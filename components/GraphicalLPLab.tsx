"use client";
import {useMemo,useState} from "react";
import {analyzeGraphicalLP,lpVertices} from "@/lib/graphical-lp-explorer";
const W=670,H=430,L=76,T=32,B=60,R=28;
const sx=(x:number)=>L+x*112;
const sy=(y:number)=>H-B-y*69;
const fmt=(v:number)=>Number(v.toFixed(3)).toString();
export function GraphicalLPLab({compact=false}:{compact?:boolean}){
  const [c1,setC1]=useState(3);
  const [c2,setC2]=useState(4);
  const result=useMemo(()=>analyzeGraphicalLP(c1,c2),[c1,c2]);
  const polygon=lpVertices.map(v=>sx(v.x)+","+sy(v.y)).join(" ");
  const interceptX=result.maximum/c1,interceptY=result.maximum/c2;
  return <div className="content-box" style={{padding:compact?15:22,marginBlock:18}}>
    <strong style={{fontSize:"1.07rem"}}>Laboratorium Solusi Grafik Program Linear</strong>
    <p style={{color:"var(--muted)",lineHeight:1.65,margin:"8px 0 16px"}}>
      Daerah layak tetap. Ubah koefisien keuntungan untuk membandingkan titik sudut, garis level tujuan, dan sertifikat batas atas.
    </p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:14,marginBottom:16}}>
      <label style={{display:"grid",gap:8,fontWeight:650,fontSize:".86rem"}}>Koefisien x: {c1}
        <input aria-label="Koefisien keuntungan x" type="range" min="1" max="6" step="1" value={c1} onChange={e=>setC1(Number(e.target.value))}/>
      </label>
      <label style={{display:"grid",gap:8,fontWeight:650,fontSize:".86rem"}}>Koefisien y: {c2}
        <input aria-label="Koefisien keuntungan y" type="range" min="1" max="8" step="1" value={c2} onChange={e=>setC2(Number(e.target.value))}/>
      </label>
    </div>
    <svg viewBox={"0 0 "+W+" "+H} role="img"
      aria-label={"Poligon layak empat titik sudut. Nilai maksimum "+c1+"x + "+c2+"y adalah "+result.maximum+" pada titik "+result.winners.map(v=>v.label).join(", ")}
      style={{display:"block",width:"100%",height:"auto",border:"1px solid var(--border)",borderRadius:12,background:"var(--surface)"}}>
      <defs><clipPath id="graphical-lp-clip"><rect x={L} y={T} width={W-L-R} height={H-T-B}/></clipPath></defs>
      {Array.from({length:5},(_,i)=><g key={i}>
        <line x1={sx(i)} y1={T} x2={sx(i)} y2={H-B} stroke="var(--border)" strokeDasharray="3 5"/>
        <line x1={L} y1={sy(i)} x2={W-R} y2={sy(i)} stroke="var(--border)" strokeDasharray="3 5"/>
        <text x={sx(i)} y={H-B+21} textAnchor="middle" fontSize="12" fill="var(--text)">{i}</text>
        <text x={L-16} y={sy(i)+4} textAnchor="end" fontSize="12" fill="var(--text)">{i}</text>
      </g>)}
      <line x1={L} y1={T} x2={L} y2={H-B} stroke="var(--text)" strokeWidth="1.5"/>
      <line x1={L} y1={H-B} x2={W-R} y2={H-B} stroke="var(--text)" strokeWidth="1.5"/>
      <polygon points={polygon} fill="#0d9488" fillOpacity=".20" stroke="#0d9488" strokeWidth="2.5"/>
      <g clipPath="url(#graphical-lp-clip)">
        <line x1={sx(0)} y1={sy(interceptY)} x2={sx(interceptX)} y2={sy(0)} stroke="#e11d48" strokeWidth="3" strokeDasharray="9 5"/>
      </g>
      {lpVertices.map(v=>{
        const optimal=result.winners.some(w=>w.label===v.label);
        return <g key={v.label}>
          <circle cx={sx(v.x)} cy={sy(v.y)} r={optimal?7:5} fill={optimal?"#e11d48":"#0d9488"} stroke="var(--surface)" strokeWidth="2"/>
          <text x={sx(v.x)+11} y={sy(v.y)+(v.y===0?-12:18)} fontSize="13" fontWeight={optimal?700:500} fill="var(--text)">{v.label} ({v.x},{v.y})</text>
        </g>;
      })}
      <text x={W-R} y={H-12} textAnchor="end" fill="var(--text)" fontSize="13">x</text>
      <text x={L-22} y={T+10} fill="var(--text)" fontSize="13">y</text>
      <text x={W-R} y={T+16} textAnchor="end" fill="#e11d48" fontSize="13">Garis tujuan: {c1}x + {c2}y = {result.maximum}</text>
    </svg>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,185px),1fr))",gap:10,marginTop:14}}>
      <div style={{padding:12,borderRadius:10,background:"var(--surface-2)"}}><small>Nilai optimal</small><div style={{fontWeight:800,fontSize:"1.2rem"}}>{result.maximum}</div></div>
      <div style={{padding:12,borderRadius:10,background:"var(--surface-2)"}}><small>Titik sudut optimal</small><div style={{fontWeight:750}}>{result.winners.map(v=>v.label+" ("+v.x+","+v.y+")").join("; ")}</div></div>
      <div style={{padding:12,borderRadius:10,background:"var(--surface-2)"}}><small>Pengali sertifikat</small><div style={{fontWeight:700}}>{result.certificate?"("+fmt(result.certificate.lambda1)+", "+fmt(result.certificate.lambda2)+")":"Tidak berlaku untuk dua kendala aktif B"}</div></div>
    </div>
    <div style={{overflowX:"auto",marginTop:14}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:".87rem"}}>
        <caption style={{textAlign:"left",fontWeight:700,paddingBottom:8}}>Evaluasi semua titik sudut</caption>
        <thead><tr>{["Titik","Koordinat","Nilai tujuan","Status"].map(h=><th key={h} scope="col" style={{padding:9,background:"var(--surface-2)",borderBottom:"1px solid var(--border)",textAlign:"left"}}>{h}</th>)}</tr></thead>
        <tbody>{result.values.map(v=><tr key={v.label}>
          <td style={{padding:9,borderBottom:"1px solid var(--border)"}}>{v.label}</td>
          <td style={{padding:9,borderBottom:"1px solid var(--border)"}}>({v.x},{v.y})</td>
          <td style={{padding:9,borderBottom:"1px solid var(--border)"}}>{v.z}</td>
          <td style={{padding:9,borderBottom:"1px solid var(--border)"}}>{v.z===result.maximum?"Optimal":"Layak"}</td>
        </tr>)}</tbody>
      </table>
    </div>
    <p role="status" style={{fontSize:".84rem",lineHeight:1.7,color:"var(--muted)",marginTop:12}}>
      {result.winners.length>1?"Dua titik sudut bertetangga sama-sama optimal; seluruh sisi penghubungnya juga optimal.":"Garis level tujuan terakhir menyentuh satu titik sudut."}
      {" "}{result.certificate?"Sertifikat pengali nonnegatif memberi batas atas "+fmt(result.certificate.bound)+" yang dicapai.":"Pengali dari dua kendala aktif di B tidak keduanya nonnegatif, sehingga sertifikat khusus tersebut tidak dipakai."}
      {" "}Perhitungan memakai koefisien bilangan bulat dalam rentang pengendali.
    </p>
  </div>;
}
