"use client";

import { useId, useState } from "react";

/** Exact graph of f(x)=(x-2)^2+1 on the feasible interval [0,4]. */
export function OptimizationLab({compact=false}:{compact?:boolean}){
  const [x,setX]=useState(3);
  const id=useId().replace(/:/g,"");
  const f=(t:number)=>(t-2)*(t-2)+1;
  const left=44,right=564,top=20,bottom=270;
  const sx=(t:number)=>left+(right-left)*t/4;
  const sy=(v:number)=>bottom-(bottom-top)*(v/6);
  const points=Array.from({length:161},(_,i)=>{
    const t=4*i/160;
    return (i?"L":"M")+sx(t).toFixed(2)+" "+sy(f(t)).toFixed(2);
  }).join(" ");
  const tangentSlope=2*(x-2);
  const tangentY=(t:number)=>f(x)+tangentSlope*(t-x);
  const minX=sx(2),minY=sy(1),selectedX=sx(x),selectedY=sy(f(x));
  return <div className="rounded-xl border border-slate-300 bg-white p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
    <h3 className="mb-2 text-lg font-semibold">Eksplorasi optimum pada interval tertutup</h3>
    <p className="mb-3 text-sm">Grafik menunjukkan fungsi f(x)=(x−2)²+1 pada 0≤x≤4. Geser titik layak untuk membandingkan nilai fungsi dengan minimum global f(2)=1. Garis singgung di titik pilihan memiliki gradien 2(x−2).</p>
    <svg viewBox="0 0 610 315" role="img" aria-labelledby={id+"title "+id+"desc"} className="h-auto w-full max-w-3xl">
      <title id={id+"title"}>Parabola dan titik layak pada interval nol sampai empat</title>
      <desc id={id+"desc"}>Kurva f(x) sama dengan kuadrat x kurang dua ditambah satu, titik minimum pada x dua, dan titik yang dapat digeser pada interval tertutup.</desc>
      <rect x={left} y={top} width={right-left} height={bottom-top} fill="currentColor" opacity=".035"/>
      {[0,1,2,3,4].map(t=><g key={"x"+t}>
        <line x1={sx(t)} y1={top} x2={sx(t)} y2={bottom} stroke="currentColor" opacity=".1"/>
        <text x={sx(t)} y={bottom+20} fontSize="13" textAnchor="middle" fill="currentColor">{t}</text>
      </g>)}
      {[0,1,2,3,4,5].map(v=><g key={"y"+v}>
        <line x1={left} y1={sy(v)} x2={right} y2={sy(v)} stroke="currentColor" opacity=".1"/>
        <text x={left-13} y={sy(v)+4} fontSize="13" textAnchor="end" fill="currentColor">{v}</text>
      </g>)}
      <line x1={left} y1={bottom} x2={right+8} y2={bottom} stroke="currentColor" strokeWidth="1.5"/>
      <line x1={left} y1={top} x2={left} y2={bottom} stroke="currentColor" strokeWidth="1.5"/>
      <path d={points} fill="none" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round"/>
      <line x1={sx(0)} y1={sy(tangentY(0))} x2={sx(4)} y2={sy(tangentY(4))} stroke="#ea580c" strokeWidth="2" strokeDasharray="7 5"/>
      <line x1={selectedX} y1={bottom} x2={selectedX} y2={selectedY} stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 4"/>
      <circle cx={minX} cy={minY} r="6" fill="#16a34a" stroke="white" strokeWidth="2"/>
      <circle cx={selectedX} cy={selectedY} r="6" fill="#ea580c" stroke="white" strokeWidth="2"/>
      <text x={minX+10} y={minY-12} fill="#16a34a" fontSize="13">minimum (2,1)</text>
      <text x={right+17} y={bottom+5} fill="currentColor" fontSize="14">x</text>
      <text x={left-8} y={top-7} fill="currentColor" fontSize="14">f(x)</text>
    </svg>
    <label className="mt-2 block text-sm font-medium" htmlFor={id+"slider"}>Titik layak x = {x.toFixed(2)}</label>
    <input id={id+"slider"} type="range" min="0" max="4" step="0.05" value={x} onChange={e=>setX(Number(e.target.value))} className="w-full" aria-label="Pilih titik pada interval nol sampai empat"/>
    <p className="mt-2 text-sm" aria-live="polite">f(x) = {f(x).toFixed(4)}; f′(x) = {tangentSlope.toFixed(2)}; selisih dari minimum = {(f(x)-1).toFixed(4)}. {Math.abs(x-2)<1e-9?"Titik ini adalah minimum global.":"Titik ini bukan minimum global karena f(x)>1."}</p>
    {!compact&&<p className="mt-2 text-sm">Ujung x=0 dan x=4 sama-sama menghasilkan f(x)=5. Titik stasioner x=2 menghasilkan minimum global, bukan maksimum. Visualisasi ini menggambarkan satu fungsi spesifik; teorema tetap memerlukan pembuktian terpisah.</p>}
  </div>;
}
