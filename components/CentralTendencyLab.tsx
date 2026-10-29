"use client";

import { useId, useState } from "react";

/** Five observations, one movable outlier. All displayed statistics are exact. */
export function CentralTendencyLab({compact=false}:{compact?:boolean}){
  const [last,setLast]=useState(26);
  const id=useId().replace(/:/g,"");
  const values=[2,3,4,5,last];
  const mean=(14+last)/5;
  const median=4;
  const trimmed=4;
  const gx=(v:number)=>50+500*v/110;
  const zx=(v:number)=>50+500*v/10;
  return <div className="rounded-xl border border-slate-300 bg-white p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
    <h3 className="mb-2 text-lg font-semibold">Laboratorium pemusatan dan pencilan</h3>
    <p className="mb-3 text-sm">Empat pengamatan tetap 2, 3, 4, 5. Geser pengamatan kelima. Garis biru menandai rata-rata, garis hijau median sekaligus rata-rata pangkas tingkat satu. Panel kedua memperbesar daerah 0 sampai 10 agar data yang berdekatan tetap terbaca.</p>
    <svg viewBox="0 0 600 275" className="h-auto w-full max-w-3xl" role="img" aria-labelledby={id+"title "+id+"desc"}>
      <title id={id+"title"}>Pengaruh satu pencilan pada rata-rata dan median</title>
      <desc id={id+"desc"}>Lima pengamatan dua, tiga, empat, lima, dan nilai yang dapat diubah. Dua garis menunjukkan rata-rata dan median; panel bawah memperbesar rentang nol sampai sepuluh.</desc>
      <text x="50" y="19" fontSize="14" fontWeight="bold" fill="currentColor">Seluruh rentang 0–110</text>
      <line x1="50" y1="91" x2="550" y2="91" stroke="currentColor" strokeWidth="1.5"/>
      {[0,20,40,60,80,100].map(t=><g key={"g"+t}><line x1={gx(t)} y1="86" x2={gx(t)} y2="96" stroke="currentColor"/><text x={gx(t)} y="111" textAnchor="middle" fontSize="12" fill="currentColor">{t}</text></g>)}
      <line x1={gx(mean)} y1="36" x2={gx(mean)} y2="91" stroke="#0284c7" strokeWidth="3" strokeDasharray="5 3"/>
      <line x1={gx(median)} y1="36" x2={gx(median)} y2="91" stroke="#16a34a" strokeWidth="3"/>
      {values.map((v,i)=><circle key={"gpoint"+i} cx={gx(v)} cy={i===4?65:76} r={i===4?6:4} fill={i===4?"#ea580c":"#334155"}/>)}
      <text x="50" y="144" fontSize="14" fontWeight="bold" fill="currentColor">Perbesaran data 0–10</text>
      <line x1="50" y1="210" x2="550" y2="210" stroke="currentColor" strokeWidth="1.5"/>
      {[0,2,4,6,8,10].map(t=><g key={"z"+t}><line x1={zx(t)} y1="205" x2={zx(t)} y2="215" stroke="currentColor"/><text x={zx(t)} y="232" textAnchor="middle" fontSize="12" fill="currentColor">{t}</text></g>)}
      {values.filter(v=>v<=10).map((v,i)=><circle key={"zpoint"+i} cx={zx(v)} cy="190" r="6" fill={v===last?"#ea580c":"#334155"}/>)}
      {mean<=10&&<line x1={zx(mean)} y1="161" x2={zx(mean)} y2="210" stroke="#0284c7" strokeWidth="3" strokeDasharray="5 3"/>}
      <line x1={zx(median)} y1="161" x2={zx(median)} y2="210" stroke="#16a34a" strokeWidth="3"/>
      <text x="50" y="260" fontSize="12" fill="currentColor">Biru: rata-rata · hijau: median/pangkas · oranye: pengamatan berubah</text>
    </svg>
    <label htmlFor={id+"outlier"} className="mt-2 block text-sm font-medium">Pengamatan kelima = {last}</label>
    <input id={id+"outlier"} type="range" min="6" max="106" step="5" value={last} onChange={e=>setLast(Number(e.target.value))} className="w-full" aria-label="Ubah nilai pengamatan kelima"/>
    <p className="mt-2 text-sm" aria-live="polite">Data: {values.join(", ")}. Rata-rata = (14+{last})/5 = {mean.toFixed(2)}; median = {median}; rata-rata pangkas tingkat satu = {trimmed}. Selisih rata-rata dari median = {(mean-median).toFixed(2)}.</p>
    {!compact&&<p className="mt-2 text-sm">Karena nilai kelima selalu paling besar, median dan tiga pengamatan yang dipertahankan setelah memangkas satu nilai di setiap ujung tidak berubah. Sebaliknya, rata-rata meningkat sebesar seperlima perubahan nilai kelima. Kesimpulan ini berlaku untuk keluarga data yang digambarkan, bukan untuk semua penggantian pengamatan.</p>}
  </div>;
}
