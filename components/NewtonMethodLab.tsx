"use client";
import {useMemo,useState} from "react";

type CaseKey="simple"|"cycle"|"multiple";
const cases:Record<CaseKey,{label:string;min:number;max:number;start:number;lo:number;hi:number;root:number|null;f:(x:number)=>number;df:(x:number)=>number;description:string}>={
  simple:{label:"Akar sederhana: x² − 2",min:0.5,max:3,start:1.5,lo:0,hi:3,root:Math.SQRT2,f:x=>x*x-2,df:x=>2*x,description:"Akar positif √2 sederhana; dari tebakan positif iterasi menuju akar secara cepat."},
  cycle:{label:"Siklus: x³ − 2x + 2",min:-0.5,max:0.5,start:0,lo:-2,hi:2,root:null,f:x=>x*x*x-2*x+2,df:x=>3*x*x-2,description:"Dari x₀=0 muncul siklus 0 → 1 → 0; Newton tidak selalu konvergen."},
  multiple:{label:"Akar multipel: (x − 1)³",min:1.2,max:4,start:4,lo:0,hi:4.2,root:1,f:x=>(x-1)**3,df:x=>3*(x-1)**2,description:"Akar x=1 berkelipatan tiga; Newton biasa mengurangi galat dengan rasio 2/3."}
};
const W=720,H=340,L=56,R=26,T=28,B=52;
const fmt=(x:number)=>Number.isFinite(x)?Number(x.toPrecision(7)).toString():"tak terdefinisi";
export function NewtonMethodLab({compact=false}:{compact?:boolean}){
 const [key,setKey]=useState<CaseKey>("simple");
 const [initial,setInitial]=useState(1.5);
 const [steps,setSteps]=useState(2);
 const c=cases[key];
 const trace=useMemo(()=>{
  const xs=[initial];
  for(let i=0;i<Math.max(steps+1,1);i++){
   const x=xs.at(-1)!;
   const d=c.df(x);
   if(!Number.isFinite(x)||Math.abs(d)<1e-12||Math.abs(x)>1e6)break;
   const next=x-c.f(x)/d;
   if(!Number.isFinite(next))break;
   xs.push(next);
   if(Math.abs(c.f(next))<1e-14)break;
  }
  return xs;
 },[key,initial,steps,c]);
 const index=Math.min(steps,trace.length-1);
 const x=trace[index],y=c.f(x);
 const next=trace[index+1]??null;
 const xs=Array.from({length:181},(_,i)=>c.lo+(c.hi-c.lo)*i/180);
 const ys=xs.map(c.f);
 const minY=Math.min(0,...ys),maxY=Math.max(0,...ys),pad=Math.max(.6,(maxY-minY)*.12);
 const low=minY-pad,high=maxY+pad;
 const sx=(v:number)=>L+(W-L-R)*(v-c.lo)/(c.hi-c.lo);
 const sy=(v:number)=>T+(H-T-B)*(high-v)/(high-low);
 const curve=xs.map((v,i)=>sx(v).toFixed(2)+","+sy(ys[i]).toFixed(2)).join(" ");
 return <div className="content-box" style={{padding:compact?15:22,marginBlock:18}}>
  <strong style={{fontSize:"1.08rem"}}>Laboratorium Geometri Iterasi Newton</strong>
  <p style={{color:"var(--muted)",lineHeight:1.6}}>Ubah tebakan awal dan banyak langkah. Titik merah adalah tebakan saat ini, garis oranye adalah garis singgung, dan titik hijau menunjukkan titik potong garis singgung dengan sumbu horizontal.</p>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,205px),1fr))",gap:13,margin:"16px 0"}}>
   <label style={{display:"grid",gap:6,fontWeight:650}}>Fungsi
    <select aria-label="Pilih fungsi Newton" value={key} onChange={e=>{const k=e.target.value as CaseKey;setKey(k);setInitial(cases[k].start);setSteps(2);}} style={{border:"1px solid var(--border)",borderRadius:8,padding:10,background:"var(--surface)",color:"var(--text)"}}>
     {Object.entries(cases).map(([k,v])=><option value={k} key={k}>{v.label}</option>)}
    </select>
   </label>
   <label style={{display:"grid",gap:6,fontWeight:650}}>Tebakan awal x₀ = {fmt(initial)}
    <input aria-label="Tebakan awal Newton" type="range" min={c.min} max={c.max} step={0.05} value={initial} onChange={e=>setInitial(Number(e.target.value))}/>
   </label>
   <label style={{display:"grid",gap:6,fontWeight:650}}>Langkah yang diamati: {steps}
    <input aria-label="Langkah Newton" type="range" min={0} max={6} step={1} value={steps} onChange={e=>setSteps(Number(e.target.value))}/>
   </label>
  </div>
  <svg viewBox={"0 0 "+W+" "+H} role="img" aria-label={"Grafik "+c.label+". Tebakan x "+fmt(x)+", residual "+fmt(y)+", tebakan berikutnya "+(next===null?"tidak ada":fmt(next))}
   style={{display:"block",width:"100%",height:"auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12}}>
   <line x1={L} y1={sy(0)} x2={W-R} y2={sy(0)} stroke="var(--muted)" strokeWidth="1.4"/>
   {c.lo<=0&&c.hi>=0&&<line x1={sx(0)} y1={T} x2={sx(0)} y2={H-B} stroke="var(--muted)" strokeWidth="1.1"/>}
   <polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.8"/>
   {c.root!==null&&<line x1={sx(c.root)} x2={sx(c.root)} y1={T} y2={H-B} stroke="#0d9488" strokeDasharray="4 5" strokeOpacity=".6"/>}
   {trace.slice(0,index+1).filter(v=>v>=c.lo&&v<=c.hi).map((v,i)=><circle key={i} cx={sx(v)} cy={sy(0)} r={3.4} fill="#64748b"/>)}
   {next!==null&&<line x1={sx(x)} y1={sy(y)} x2={sx(next)} y2={sy(0)} stroke="#d97706" strokeWidth="2.4" strokeDasharray="7 4"/>}
   {next!==null&&<circle cx={sx(next)} cy={sy(0)} r={5} fill="#059669"/>}
   <circle cx={sx(x)} cy={sy(y)} r={5.7} fill="#dc2626"/>
   <line x1={sx(x)} x2={sx(x)} y1={sy(0)} y2={sy(y)} stroke="#dc2626" strokeDasharray="3 4"/>
   {Array.from({length:5},(_,i)=>{const v=c.lo+(c.hi-c.lo)*i/4;return <text key={i} x={sx(v)} y={H-B+22} textAnchor="middle" fontSize="12" fill="var(--text)">{fmt(v)}</text>;})}
   <text x={L} y={T-8} fontSize="12" fill="var(--text)">f(x)</text>
   <text x={W-R} y={H-11} textAnchor="end" fontSize="12" fill="var(--text)">x</text>
  </svg>
  <p style={{lineHeight:1.7,fontSize:".88rem",color:"var(--muted)"}}>{c.description} {next===null?"Iterasi berhenti karena akar sudah ditemukan atau pembagian oleh turunan tidak aman.":"Garis singgung dari (xₙ,f(xₙ)) menuju (xₙ₊₁,0) memvisualisasikan persamaan Newton."}</p>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,150px),1fr))",gap:9}}>
   {[["xₙ",fmt(x)],["f(xₙ)",fmt(y)],["f′(xₙ)",fmt(c.df(x))],["xₙ₊₁",next===null?"berhenti":fmt(next)],["|xₙ − p|",c.root===null?"akar tidak ditandai":fmt(Math.abs(x-c.root))]].map(([label,value])=><div key={label} style={{border:"1px solid var(--border)",background:"var(--surface-2)",borderRadius:9,padding:10}}>
    <div style={{color:"var(--muted)",fontSize:".78rem"}}>{label}</div><strong style={{display:"block",marginTop:4,overflowWrap:"anywhere"}}>{value}</strong>
   </div>)}
  </div>
  <div style={{overflowX:"auto",marginTop:16}}>
   <table style={{width:"100%",borderCollapse:"collapse",fontSize:".85rem",textAlign:"right"}}>
    <caption style={{textAlign:"left",fontWeight:700,paddingBottom:8}}>Jejak iterasi yang dihitung</caption>
    <thead><tr>{["n","xₙ","f(xₙ)","|xₙ − p|"].map(t=><th key={t} style={{padding:8,background:"var(--surface-2)",borderBottom:"1px solid var(--border)"}}>{t}</th>)}</tr></thead>
    <tbody>{trace.slice(0,index+1).map((v,i)=><tr key={i}><td style={{padding:8,borderBottom:"1px solid var(--border)"}}>{i}</td><td>{fmt(v)}</td><td>{fmt(c.f(v))}</td><td>{c.root===null?"—":fmt(Math.abs(v-c.root))}</td></tr>)}</tbody>
   </table>
  </div>
  <p style={{fontSize:".82rem",color:"var(--muted)",lineHeight:1.6}}>Perhitungan visual memakai floating-point JavaScript. Teorema konvergensi pada naskah memakai aritmetika real dan hanya berlaku bila seluruh hipotesisnya dipenuhi.</p>
 </div>;
}
