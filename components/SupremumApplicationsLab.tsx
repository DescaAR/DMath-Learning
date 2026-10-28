"use client";

import { useState, type CSSProperties } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { densityIntervals, naturalWitness, rationalWitness, sqrtBracket } from "@/lib/supremum-explorer";

type Mode="archimedean"|"density"|"sqrt";
const modes:{id:Mode;idLabel:string;enLabel:string}[]=[
  {id:"archimedean",idLabel:"Bilangan asli",enLabel:"Natural numbers"},
  {id:"density",idLabel:"Kerapatan rasional",enLabel:"Rational density"},
  {id:"sqrt",idLabel:"Akar kuadrat",enLabel:"Square roots"}
];
const rootPresets=[2,3,5,10];
const buttonStyle:CSSProperties={
  border:"1px solid var(--border)",borderRadius:11,padding:"9px 12px",
  background:"var(--surface)",color:"var(--text)",fontWeight:700,cursor:"pointer"
};
const panelStyle:CSSProperties={
  border:"1px solid var(--border)",borderRadius:17,padding:"clamp(14px,3vw,24px)",
  background:"var(--surface)",color:"var(--text)"
};
const axis={x1:52,x2:548,y:130};
const position=(fraction:number)=>axis.x1+(axis.x2-axis.x1)*fraction;
const fmt=(x:number)=>Number(x.toFixed(7)).toString();

export function SupremumApplicationsLab({compact=false}:{compact?:boolean}){
  const {language}=useLanguage();
  const en=language==="en";
  const [mode,setMode]=useState<Mode>("archimedean");
  const [x,setX]=useState(4.5);
  const [interval,setInterval]=useState(1);
  const [a,setA]=useState(2);
  const [steps,setSteps]=useState(4);

  const n=naturalWitness(x);
  const density=densityIntervals[interval];
  const witness=rationalWitness(density.x,density.y);
  const bracket=sqrtBracket(a,steps);
  const squareRoot=Math.sqrt(a);
  const rootFraction=bracket.upper===bracket.lower?0.5:
    (squareRoot-bracket.lower)/(bracket.upper-bracket.lower);
  const svgProps={viewBox:"0 0 600 235",role:"img" as const,
    style:{width:"100%",height:"auto",display:"block",maxWidth:760,margin:"0 auto"}};

  return <section className="supremum-lab" style={panelStyle}
    aria-label={en?"Applications of completeness explorer":"Laboratorium aplikasi sifat kelengkapan"}>
    <div>
      <strong style={{fontSize:compact?"1rem":"1.2rem",color:"var(--deep)"}}>
        {en?"From completeness to construction":"Dari kelengkapan menuju konstruksi"}
      </strong>
      <p style={{fontSize:".86rem",lineHeight:1.6,color:"var(--muted)",margin:"5px 0 15px"}}>
        {en?"Every marker corresponds to an inequality proved in the lesson.":
          "Setiap titik yang ditampilkan memenuhi ketaksamaan yang dibuktikan dalam materi."}
      </p>
    </div>
    <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:18}} aria-label={en?"Choose exploration":"Pilih eksplorasi"}>
      {modes.map(item=><button key={item.id} type="button" style={{
        ...buttonStyle,borderColor:mode===item.id?"var(--blue)":"var(--border)",
        background:mode===item.id?"var(--surface-2)":"var(--surface)"
      }} aria-pressed={mode===item.id} onClick={()=>setMode(item.id)}>
        {en?item.enLabel:item.idLabel}
      </button>)}
    </div>

    {mode==="archimedean"&&<>
      <label style={{display:"block",fontWeight:700,marginBottom:10}}>
        {en?"Real number":"Bilangan real"} x = {x}
        <input type="range" min="0.5" max="9.5" step="0.5" value={x}
          onChange={event=>setX(Number(event.target.value))}
          style={{display:"block",width:"100%",marginTop:8,accentColor:"var(--blue)"}}/>
      </label>
      <svg {...svgProps} aria-label={en?"Number line: "+n+" is a natural number greater than "+x:
        "Garis bilangan: bilangan asli "+n+" lebih besar daripada "+x}>
        <line x1={axis.x1} y1={axis.y} x2={axis.x2} y2={axis.y} stroke="currentColor" strokeWidth="2"/>
        {Array.from({length:12},(_,i)=>{
          const px=position(i/11);
          return <g key={i}>
            <line x1={px} y1={axis.y-6} x2={px} y2={axis.y+6} stroke="currentColor" strokeWidth="1.5"/>
            <text x={px} y="157" fontSize="12" textAnchor="middle" fill="currentColor">{i}</text>
          </g>;
        })}
        <line x1={position(x/11)} x2={position(n/11)} y1={axis.y-10} y2={axis.y-10}
          stroke="#0891b2" strokeWidth="5" strokeLinecap="round"/>
        <circle cx={position(x/11)} cy={axis.y} r="7" fill="#64748b"/>
        <circle cx={position(n/11)} cy={axis.y} r="8" fill="#2563eb" stroke="var(--surface)" strokeWidth="2"/>
        <text x={position(x/11)} y="91" fontSize="16" textAnchor="middle" fill="currentColor">x={x}</text>
        <text x={position(n/11)} y="195" fontSize="16" textAnchor="middle" fill="#2563eb" fontWeight="700">n={n}</text>
        <text x="300" y="35" fontSize="16" textAnchor="middle" fill="currentColor">{x} &lt; {n}</text>
      </svg>
      <p style={{fontSize:".87rem",lineHeight:1.7}}>
        {en?"Since floor("+x+") = "+Math.floor(x)+", n = "+n+" satisfies n > x.":
          "Karena ⌊"+x+"⌋ = "+Math.floor(x)+", bilangan asli n = "+n+" memenuhi n > x. Pembuktian menjamin saksi serupa untuk setiap bilangan real."}
      </p>
    </>}

    {mode==="density"&&<>
      <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:14}}>
        {densityIntervals.map((item,index)=><button type="button" key={item.label}
          style={{...buttonStyle,borderColor:index===interval?"var(--blue)":"var(--border)"}}
          aria-pressed={index===interval} onClick={()=>setInterval(index)}>{item.label}</button>)}
      </div>
      <svg {...svgProps} aria-label={en?
        "Rational "+witness.m+"/"+witness.n+" lies strictly between "+density.left+" and "+density.right:
        "Pecahan "+witness.m+"/"+witness.n+" berada di antara "+density.left+" dan "+density.right}>
        <line x1={axis.x1} y1={axis.y} x2={axis.x2} y2={axis.y} stroke="currentColor" strokeWidth="2"/>
        <line x1={axis.x1} y1={axis.y} x2={axis.x2} y2={axis.y} stroke="#0d9488" strokeWidth="7" opacity=".25"/>
        <circle cx={axis.x1} cy={axis.y} r="8" fill="var(--surface)" stroke="currentColor" strokeWidth="2"/>
        <circle cx={axis.x2} cy={axis.y} r="8" fill="var(--surface)" stroke="currentColor" strokeWidth="2"/>
        <circle cx={position((witness.value-density.x)/(density.y-density.x))} cy={axis.y}
          r="9" fill="#2563eb" stroke="var(--surface)" strokeWidth="2"/>
        <text x={axis.x1} y="163" textAnchor="start" fontSize="15" fill="currentColor">{density.left}</text>
        <text x={axis.x2} y="163" textAnchor="end" fontSize="15" fill="currentColor">{density.right}</text>
        <text x={position((witness.value-density.x)/(density.y-density.x))} y="100"
          textAnchor="middle" fontSize="17" fontWeight="750" fill="#2563eb">{witness.m}/{witness.n}</text>
        <text x="300" y="35" fontSize="15" textAnchor="middle" fill="currentColor">
          {en?"Open interval with a rational witness":"Interval terbuka dengan saksi rasional"}
        </text>
        <text x="300" y="208" fontSize="14" textAnchor="middle" fill="currentColor">
          n={witness.n}; m=⌊n·x⌋+1={witness.m}
        </text>
      </svg>
      <p style={{fontSize:".87rem",lineHeight:1.7}}>
        {en?"Choose n="+witness.n+" so n(y−x)>1, then m="+witness.m+". Thus x < "+witness.m+"/"+witness.n+" < y.":
          "Dipilih n="+witness.n+" sehingga n(y−x)>1, lalu m=⌊nx⌋+1="+witness.m+". Maka x < "+witness.m+"/"+witness.n+" < y. Kedua titik ujung tidak termasuk interval."}
      </p>
    </>}

    {mode==="sqrt"&&<>
      <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:14}}>
        {rootPresets.map(value=><button type="button" key={value}
          style={{...buttonStyle,borderColor:a===value?"var(--blue)":"var(--border)"}}
          aria-pressed={a===value} onClick={()=>{setA(value);setSteps(4);}}>√{value}</button>)}
      </div>
      <label style={{display:"block",fontWeight:700}}>
        {en?"Bisection steps":"Langkah pembagian dua"}: {steps}
        <input type="range" min="0" max="12" step="1" value={steps}
          onChange={event=>setSteps(Number(event.target.value))}
          style={{display:"block",width:"100%",margin:"10px 0",accentColor:"var(--blue)"}}/>
      </label>
      <svg {...svgProps} aria-label={en?
        "Square root of "+a+" is enclosed by "+fmt(bracket.lower)+" and "+fmt(bracket.upper):
        "Akar "+a+" diapit oleh "+fmt(bracket.lower)+" dan "+fmt(bracket.upper)}>
        <line x1={axis.x1} y1={axis.y} x2={axis.x2} y2={axis.y} stroke="currentColor" strokeWidth="2"/>
        <line x1={axis.x1} y1={axis.y} x2={axis.x2} y2={axis.y} stroke="#0d9488" strokeWidth="9" opacity=".25"/>
        <circle cx={axis.x1} cy={axis.y} r="8" fill="#0d9488" stroke="var(--surface)" strokeWidth="2"/>
        <circle cx={axis.x2} cy={axis.y} r="8" fill="#0d9488" stroke="var(--surface)" strokeWidth="2"/>
        <circle cx={position(rootFraction)} cy={axis.y} r="9" fill="#2563eb" stroke="var(--surface)" strokeWidth="2"/>
        <text x={axis.x1} y="169" fontSize="15" textAnchor="start" fill="currentColor">L={fmt(bracket.lower)}</text>
        <text x={axis.x2} y="169" fontSize="15" textAnchor="end" fill="currentColor">U={fmt(bracket.upper)}</text>
        <text x={position(rootFraction)} y="100" textAnchor="middle" fontSize="17" fontWeight="750" fill="#2563eb">√{a}</text>
        <text x="300" y="36" fontSize="15" textAnchor="middle" fill="currentColor">
          {en?"Nested interval containing the root":"Interval bersarang yang memuat akar"}
        </text>
        <text x="300" y="209" fontSize="14" textAnchor="middle" fill="currentColor">
          {en?"Width":"Lebar"} = {fmt(bracket.upper-bracket.lower)} ≤ {fmt(bracket.initialUpper/2**steps)}
        </text>
      </svg>
      <p style={{fontSize:".87rem",lineHeight:1.7}}>
        {en?"The inequalities L² ≤ "+a+" ≤ U² keep the root inside; after "+steps+" steps the width is at most "+bracket.initialUpper+"/2^"+steps+".":
          "Ketaksamaan L² ≤ "+a+" ≤ U² memastikan akar positif tetap di dalam interval. Setelah "+steps+" langkah, lebar interval paling besar "+bracket.initialUpper+"/2^"+steps+"; titik biru menandai nilai akar untuk verifikasi."}
      </p>
    </>}
  </section>;
}
