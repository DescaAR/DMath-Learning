"use client";

import { useId, useState } from "react";

/**
 * Exact exponential density f_lambda(x)=lambda exp(-lambda x), x>=0,
 * its CDF and the tail area P(X>t)=exp(-lambda t).
 */
export function ProbabilityDensityLab({compact=false}:{compact?:boolean}){
  const [rate,setRate]=useState(2);
  const [threshold,setThreshold]=useState(1);
  const id=useId().replace(/:/g,"");
  const left=46,right=566;
  const sx=(x:number)=>left+(right-left)*x/4;
  const density=(x:number)=>rate*Math.exp(-rate*x);
  const cumulative=(x:number)=>1-Math.exp(-rate*x);
  const topBase=174,topTop=24,bottomBase=340,bottomTop=214;
  const syD=(y:number)=>topBase-(topBase-topTop)*y/3.2;
  const syF=(y:number)=>bottomBase-(bottomBase-bottomTop)*y/1.05;
  const curve=(fn:(x:number)=>number,sy:(y:number)=>number)=>
    Array.from({length:161},(_,i)=>{
      const x=4*i/160;
      return (i?"L":"M")+sx(x).toFixed(2)+" "+sy(fn(x)).toFixed(2);
    }).join(" ");
  const tailPoints=Array.from({length:121},(_,i)=>{
    const x=threshold+(4-threshold)*i/120;
    return "L"+sx(x).toFixed(2)+" "+syD(density(x)).toFixed(2);
  }).join(" ");
  const tailArea="M"+sx(threshold)+" "+topBase+
    " L"+sx(threshold)+" "+syD(density(threshold))+" "+
    tailPoints+" L"+sx(4)+" "+topBase+" Z";
  const tail=Math.exp(-rate*threshold);
  return <div className="rounded-xl border border-slate-300 bg-white p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
    <h3 className="mb-2 text-lg font-semibold">Densitas, akumulasi, dan peluang ekor</h3>
    <p className="mb-3 text-sm">Distribusi eksponensial: f(x)=λe⁻λˣ untuk x≥0. Panel atas menunjukkan densitas dan daerah x&gt;t; panel bawah menunjukkan F(x)=1−e⁻λˣ. Luas arsiran sama dengan 1−F(t), bukan tinggi kurva f(t).</p>
    <svg viewBox="0 0 610 380" role="img" aria-labelledby={id+"title "+id+"desc"} className="h-auto w-full max-w-3xl">
      <title id={id+"title"}>Densitas eksponensial dan fungsi distribusi kumulatif</title>
      <desc id={id+"desc"}>Panel atas: grafik kepadatan eksponensial dan luas ekor di kanan ambang t. Panel bawah: grafik fungsi distribusi dan nilai kumulatif pada t. Parameter dapat diubah dengan dua slider.</desc>
      {[0,1,2,3,4].map(x=><g key={x}>
        <line x1={sx(x)} y1={topTop} x2={sx(x)} y2={topBase} stroke="currentColor" opacity=".10"/>
        <line x1={sx(x)} y1={bottomTop} x2={sx(x)} y2={bottomBase} stroke="currentColor" opacity=".10"/>
        <text x={sx(x)} y={bottomBase+19} textAnchor="middle" fontSize="12" fill="currentColor">{x}</text>
      </g>)}
      <line x1={left} y1={topBase} x2={right} y2={topBase} stroke="currentColor"/>
      <line x1={left} y1={topTop} x2={left} y2={topBase} stroke="currentColor"/>
      <line x1={left} y1={bottomBase} x2={right} y2={bottomBase} stroke="currentColor"/>
      <line x1={left} y1={bottomTop} x2={left} y2={bottomBase} stroke="currentColor"/>
      <text x={left+7} y={topTop+14} fontSize="13" fill="currentColor">f(x)</text>
      <text x={left+7} y={bottomTop+14} fontSize="13" fill="currentColor">F(x)</text>
      <text x={right+13} y={bottomBase+4} fontSize="13" fill="currentColor">x</text>
      <path d={tailArea} fill="#f59e0b" opacity=".3"/>
      <path d={curve(density,syD)} stroke="#0284c7" strokeWidth="3" fill="none"/>
      <path d={curve(cumulative,syF)} stroke="#16a34a" strokeWidth="3" fill="none"/>
      <line x1={sx(threshold)} y1={topTop} x2={sx(threshold)} y2={topBase} stroke="#ea580c" strokeDasharray="5 4" strokeWidth="2"/>
      <line x1={sx(threshold)} y1={bottomTop} x2={sx(threshold)} y2={bottomBase} stroke="#ea580c" strokeDasharray="5 4" strokeWidth="2"/>
      <circle cx={sx(threshold)} cy={syF(cumulative(threshold))} r="5" fill="#16a34a" stroke="white" strokeWidth="1.5"/>
      <line x1={left} y1={syF(cumulative(threshold))} x2={sx(threshold)} y2={syF(cumulative(threshold))} stroke="#16a34a" strokeDasharray="4 3"/>
      <text x={sx(threshold)+6} y={topTop+15} fontSize="13" fill="#ea580c">t</text>
      <text x={left-9} y={syF(1)+4} fontSize="12" textAnchor="end" fill="currentColor">1</text>
    </svg>
    <div className="grid gap-3 sm:grid-cols-2">
      <label className="block text-sm font-medium" htmlFor={id+"rate"}>Laju λ = {rate.toFixed(1)}
        <input id={id+"rate"} className="mt-1 w-full" type="range" min="0.5" max="3" step="0.1" value={rate} onChange={e=>setRate(Number(e.target.value))}/>
      </label>
      <label className="block text-sm font-medium" htmlFor={id+"threshold"}>Ambang t = {threshold.toFixed(1)}
        <input id={id+"threshold"} className="mt-1 w-full" type="range" min="0" max="3.5" step="0.1" value={threshold} onChange={e=>setThreshold(Number(e.target.value))}/>
      </label>
    </div>
    <p className="mt-3 text-sm" aria-live="polite">P(X&gt;t) = e⁻λᵗ = {tail.toFixed(5)}; F(t) = {cumulative(threshold).toFixed(5)}; E[X] = 1/λ = {(1/rate).toFixed(4)}. Jumlah peluang ekor dan kumulatif = {(tail+cumulative(threshold)).toFixed(5)}.</p>
    {!compact&&<p className="mt-2 text-sm">Arsiran dibatasi pada x≤4 agar panel tetap terbaca; nilai peluang ekor dihitung dari integral hingga tak hingga, bukan dari luas gambar yang terpotong. Menggeser t tidak mengubah distribusi, sedangkan menggeser λ mengubah densitas dan mean.</p>}
  </div>;
}
