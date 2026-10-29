"use client";

import { useMemo, useState } from "react";

const X_MIN=-Math.PI;
const X_MAX=Math.PI;
const W=640, H=340, LEFT=36, RIGHT=20, TOP=30, BOTTOM=38;
const innerW=W-LEFT-RIGHT, innerH=H-TOP-BOTTOM;
const toSvgX=(x:number)=>LEFT+(x-X_MIN)/(X_MAX-X_MIN)*innerW;
const toSvgY=(y:number)=>TOP+(1.25-y)/2.5*innerH;

export function HomeMathShowcase(){
  const [frequency,setFrequency]=useState(2);
  const [position,setPosition]=useState(0.8);
  const curve=useMemo(()=>Array.from({length:241},(_,i)=>{
    const x=X_MIN+(X_MAX-X_MIN)*(i/240);
    const y=Math.sin(frequency*x);
    return (i===0?"M":"L")+toSvgX(x).toFixed(2)+" "+toSvgY(y).toFixed(2);
  }).join(" "),[frequency]);
  const pointY=Math.sin(frequency*position);

  return (
    <div className="dmath-lab" aria-label="Visualisasi interaktif fungsi sinus">
      <div className="dmath-lab-top">
        <div className="dmath-lab-top-left">
          <span className="dmath-lab-status-dot" aria-hidden="true"/>
          <span>LIVE MATHEMATICS LAB</span>
        </div>
        <span className="dmath-lab-live">Interactive / 01</span>
      </div>
      <div className="dmath-lab-info">
        <div>
          <span className="dmath-lab-overline">EXPLORASI FUNGSI</span>
          <h2>f(x) = sin({frequency===1?"x":frequency+"x"})</h2>
          <p>Ubah frekuensi dan geser titik untuk melihat perubahan grafik secara langsung.</p>
        </div>
        <span className="dmath-lab-fn-badge">ℝ → [−1, 1]</span>
      </div>
      <div className="dmath-lab-graph" role="img" aria-label={"Grafik fungsi f(x) = sin("+frequency+"x), dengan titik x = "+position.toFixed(2)+" dan y = "+pointY.toFixed(3)}>
        <svg viewBox="0 0 640 340" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="dmathGraphLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6ce9fb"/>
              <stop offset="100%" stopColor="#698dff"/>
            </linearGradient>
            <linearGradient id="dmathGraphFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a97f7" stopOpacity=".15"/>
              <stop offset="100%" stopColor="#3a97f7" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {Array.from({length:9},(_,i)=>{
            const x=X_MIN+(X_MAX-X_MIN)*i/8;
            return <line key={"v"+i} x1={toSvgX(x)} y1={TOP} x2={toSvgX(x)} y2={H-BOTTOM} className="dmath-graph-grid"/>;
          })}
          {[-1,-.5,0,.5,1].map(y=><line key={"h"+y} x1={LEFT} x2={W-RIGHT} y1={toSvgY(y)} y2={toSvgY(y)} className="dmath-graph-grid"/>)}
          <line x1={LEFT} x2={W-RIGHT} y1={toSvgY(0)} y2={toSvgY(0)} className="dmath-graph-axis"/>
          <line x1={toSvgX(0)} x2={toSvgX(0)} y1={TOP} y2={H-BOTTOM} className="dmath-graph-axis"/>
          <path d={curve} fill="none" stroke="url(#dmathGraphLine)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1={toSvgX(position)} x2={toSvgX(position)} y1={toSvgY(pointY)} y2={toSvgY(0)} stroke="#a6c3ff" strokeWidth="1.5" strokeDasharray="5 5"/>
          <circle cx={toSvgX(position)} cy={toSvgY(pointY)} r="11" fill="#68cafa" opacity=".18"/>
          <circle cx={toSvgX(position)} cy={toSvgY(pointY)} r="5.5" fill="#e9fcff" stroke="#39c6f6" strokeWidth="2.5"/>
          {[[-Math.PI,"−π"],[-Math.PI/2,"−π/2"],[0,"0"],[Math.PI/2,"π/2"],[Math.PI,"π"]].map(([x,label])=>
            <text key={String(label)} x={toSvgX(Number(x))} y={H-12} className="dmath-graph-label" textAnchor="middle">{label}</text>)}
          {[-1,1].map(y=><text key={y} x={LEFT-13} y={toSvgY(y)+4} textAnchor="end" className="dmath-graph-label">{y}</text>)}
        </svg>
      </div>
      <div className="dmath-lab-controls">
        <div className="dmath-lab-frequency">
          <span className="dmath-lab-control-label">FREKUENSI</span>
          <div className="dmath-lab-frequency-options" role="group" aria-label="Pilih frekuensi fungsi">
            {[1,2,3,4].map(n=><button key={n} type="button" aria-pressed={frequency===n} className={frequency===n?"is-selected":""} onClick={()=>setFrequency(n)}>{n}×</button>)}
          </div>
        </div>
        <div className="dmath-lab-position">
          <label className="dmath-lab-control-label" htmlFor="dmath-lab-x">TITIK PENGAMATAN <strong>x = {position.toFixed(2)}</strong></label>
          <input id="dmath-lab-x" type="range" min={-3.14} max={3.14} step={.01} value={position} onChange={e=>setPosition(Number(e.target.value))}/>
        </div>
        <span className="dmath-lab-output">y = {pointY.toFixed(3)}</span>
      </div>
      <div className="dmath-lab-foot"><span className="dmath-lab-foot-pulse"/> Bukan sekadar membaca. Jelajahi sendiri konsepnya.</div>
    </div>
  );
}
