"use client";

import { useId, useState } from "react";

/** Two-point demand: the expected loss is not the loss at expected demand. */
export function ModelingScenariosLab({compact=false}:{compact?:boolean}){
  const [q,setQ]=useState(6.4);
  const id=useId().replace(/:/g,"");
  const demandMean=6.4;
  const loss=(stock:number,demand:number)=>
    2*Math.max(stock-demand,0)+5*Math.max(demand-stock,0);
  const risk=(stock:number)=>0.4*loss(stock,4)+0.6*loss(stock,8);
  const left=49,right=570,top=22,bottom=284;
  const sx=(x:number)=>left+(right-left)*x/10;
  const sy=(y:number)=>bottom-(bottom-top)*y/34;
  const curve=(f:(x:number)=>number)=>Array.from({length:201},(_,i)=>{
    const x=i/20;
    return (i?"L":"M")+sx(x).toFixed(2)+" "+sy(f(x)).toFixed(2);
  }).join(" ");
  const selectedRisk=risk(q);
  const meanLoss=loss(q,demandMean);
  const optimalRisk=risk(8);
  return <div className="rounded-xl border border-slate-300 bg-white p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
    <h3 className="mb-2 text-lg font-semibold">Laboratorium model dua skenario</h3>
    <p className="mb-3 text-sm">Permintaan D=4 (peluang 0,4) atau D=8 (peluang 0,6). Biaya kelebihan 2/unit dan kekurangan 5/unit. Garis biru menunjukkan risiko sesungguhnya E[L(q,D)]; garis putus-putus jingga menunjukkan L(q,E[D]), yaitu model yang mengganti permintaan acak dengan rata-ratanya.</p>
    <svg viewBox="0 0 620 332" className="h-auto w-full max-w-3xl" role="img" aria-labelledby={id+"title "+id+"desc"}>
      <title id={id+"title"}>Risiko stokastik dan kerugian pada permintaan rata-rata</title>
      <desc id={id+"desc"}>Grafik fungsi kerugian terhadap stok q dari nol sampai sepuluh. Risiko stokastik minimum pada q delapan, sedangkan substitusi permintaan rata-rata menyesatkan dengan minimum pada q enam koma empat.</desc>
      <rect x={left} y={top} width={right-left} height={bottom-top} fill="currentColor" opacity=".035"/>
      {[0,2,4,6,8,10].map(x=><g key={"x"+x}>
        <line x1={sx(x)} y1={top} x2={sx(x)} y2={bottom} stroke="currentColor" opacity=".1"/>
        <text x={sx(x)} y={bottom+21} fill="currentColor" fontSize="13" textAnchor="middle">{x}</text>
      </g>)}
      {[0,8,16,24,32].map(y=><g key={"y"+y}>
        <line x1={left} y1={sy(y)} x2={right} y2={sy(y)} stroke="currentColor" opacity=".1"/>
        <text x={left-12} y={sy(y)+4} fill="currentColor" fontSize="13" textAnchor="end">{y}</text>
      </g>)}
      <line x1={left} y1={bottom} x2={right+8} y2={bottom} stroke="currentColor" strokeWidth="1.5"/>
      <line x1={left} y1={top} x2={left} y2={bottom} stroke="currentColor" strokeWidth="1.5"/>
      <path d={curve(risk)} stroke="#0284c7" fill="none" strokeWidth="3" strokeLinejoin="round"/>
      <path d={curve(x=>loss(x,demandMean))} stroke="#ea580c" fill="none" strokeWidth="2.4" strokeDasharray="7 5"/>
      <line x1={sx(q)} y1={bottom} x2={sx(q)} y2={sy(selectedRisk)} stroke="#7c3aed" strokeWidth="1.7" strokeDasharray="4 4"/>
      <circle cx={sx(q)} cy={sy(selectedRisk)} r="6" fill="#7c3aed" stroke="white" strokeWidth="1.5"/>
      <circle cx={sx(q)} cy={sy(meanLoss)} r="5" fill="#ea580c" stroke="white" strokeWidth="1.5"/>
      <circle cx={sx(8)} cy={sy(optimalRisk)} r="6" fill="#16a34a" stroke="white" strokeWidth="2"/>
      <text x={sx(8)+10} y={sy(optimalRisk)-13} fontSize="13" fill="#16a34a">optimum (8; 3,2)</text>
      <text x={right+14} y={bottom+4} fill="currentColor" fontSize="13">q</text>
      <text x={left-8} y={top-7} fill="currentColor" fontSize="13">biaya</text>
    </svg>
    <label htmlFor={id+"slider"} className="mt-2 block text-sm font-medium">Jumlah stok yang diputuskan q = {q.toFixed(1)} unit</label>
    <input id={id+"slider"} type="range" min="0" max="10" step="0.2" value={q} onChange={e=>setQ(Number(e.target.value))} className="w-full" aria-label="Ubah jumlah stok sebelum permintaan teramati"/>
    <p className="mt-2 text-sm" aria-live="polite">Jika D=4: biaya {loss(q,4).toFixed(2)}; jika D=8: biaya {loss(q,8).toFixed(2)}. Risiko E[L(q,D)] = {selectedRisk.toFixed(2)}; biaya pada mean L(q,6,4) = {meanLoss.toFixed(2)}. Selisih dari risiko optimal = {(selectedRisk-optimalRisk).toFixed(2)}.</p>
    {!compact&&<p className="mt-2 text-sm">Geser ke q=6,4: biaya pada permintaan rata-rata menjadi nol, tetapi risiko sebenarnya 6,72. Pada q=8 risiko turun ke 3,2. Nilai optimum diperoleh dari teorema fraktil kritis; grafik hanya memvisualisasikan kasus ini, bukan menggantikan pembuktiannya.</p>}
  </div>;
}
