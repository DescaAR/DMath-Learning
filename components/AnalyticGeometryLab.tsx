"use client";

import { useState } from "react";
import { RichMath } from "@/components/RichMath";

/** Exact line-circle intersection geometry with SVG's inverted vertical axis. */
export function AnalyticGeometryLab({ compact=false }: { compact?:boolean }) {
  const [h,setH]=useState(1);
  const radius=2;
  const d=Math.abs(h);
  const count=d<radius?2:d===radius?1:0;
  const offset=count===0?0:Math.sqrt(Math.max(0,radius*radius-h*h));
  const X=(x:number)=>240+70*x;
  const Y=(y:number)=>210-70*y;
  const intersections=count===0?[]:count===1?[[0,h]]:[[-offset,h],[offset,h]];
  return (
    <div className="math-figure" style={{maxWidth:720,marginInline:"auto"}}>
      <div className="figure-heading"><strong>Perpotongan garis dan lingkaran</strong></div>
      <p style={{margin:"0.6rem 0 1rem"}}>
        <RichMath>{"Lingkaran $x^2+y^2=4$ dan garis $y=h$. Ubah $h$ untuk menguji syarat $|h|<2$, $|h|=2$, dan $|h|>2$."}</RichMath>
      </p>
      <label htmlFor={compact?"geom-h-compact":"geom-h-full"} style={{display:"block",marginBottom:8}}>
        <span>Tinggi garis h: </span><strong>{h.toFixed(2)}</strong>
      </label>
      <input id={compact?"geom-h-compact":"geom-h-full"} type="range" min="-3" max="3" step="0.25"
        value={h} onChange={(event)=>setH(Number(event.target.value))}
        aria-label="Ubah tinggi garis horizontal" style={{width:"100%"}}/>
      <svg viewBox="0 0 480 420" role="img" aria-label={"Lingkaran berjari-jari dua dan garis horizontal dengan "+count+" titik potong"}
        style={{display:"block",width:"100%",height:"auto",maxHeight:compact?300:420}}>
        <line x1="25" y1={Y(0)} x2="455" y2={Y(0)} stroke="currentColor" opacity=".55"/>
        <line x1={X(0)} y1="10" x2={X(0)} y2="410" stroke="currentColor" opacity=".55"/>
        {[-2,-1,1,2].map(t=>(
          <g key={t}>
            <line x1={X(t)} y1={Y(0)-4} x2={X(t)} y2={Y(0)+4} stroke="currentColor"/>
            <text x={X(t)} y={Y(0)+20} textAnchor="middle" fill="currentColor" fontSize="12">{t}</text>
          </g>
        ))}
        <circle cx={X(0)} cy={Y(0)} r={radius*70} fill="none" stroke="#2563eb" strokeWidth="3"/>
        <line x1={X(-3)} y1={Y(h)} x2={X(3)} y2={Y(h)} stroke="#e11d48" strokeWidth="3"/>
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(h)}
          stroke="#0d9488" strokeWidth="4" strokeDasharray="6 5"/>
        {intersections.map(([x,y],i)=>(
          <g key={i}>
            <circle cx={X(x)} cy={Y(y)} r="6" fill="#0d9488" stroke="white" strokeWidth="2"/>
            <text x={X(x)+(i===0?-8:8)} y={Y(y)-12} textAnchor={i===0?"end":"start"} fill="currentColor" fontSize="13">
              {count===1?"P":i===0?"P₁":"P₂"}
            </text>
          </g>
        ))}
        <circle cx={X(0)} cy={Y(0)} r="4" fill="currentColor"/>
        <text x={X(0)+8} y={Y(0)-8} fill="currentColor" fontSize="13">C=(0,0)</text>
        <text x="446" y={Y(h)-9} textAnchor="end" fill="#e11d48" fontSize="13">y=h</text>
      </svg>
      <div aria-live="polite">
        <p><strong>{count===2?"Dua titik potong":count===1?"Tepat satu titik singgung":"Tidak ada titik potong"}.</strong>{" "}
          <RichMath>{count===2?"Karena $|h|<2$, diperoleh $x=\\pm\\sqrt{4-h^2}$.":count===1?
            "Karena $|h|=2$, hanya $x=0$ yang memenuhi $x^2=4-h^2$.":"Karena $|h|>2$, persamaan $x^2=4-h^2$ tidak mempunyai solusi real."}</RichMath>
        </p>
        <p><RichMath>{"Jarak pusat ke garis adalah $d=|h|="+d.toFixed(2)+"$. Banyak titik potong: $"+count+"$."}</RichMath></p>
      </div>
    </div>
  );
}
