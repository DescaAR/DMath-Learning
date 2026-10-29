"use client";

import {useMemo,useState} from "react";
import {analyzeRelation,relationPresets,type RelationKey} from "@/lib/nested-quantifiers-explorer";

const W=690,LEFT=146,TOP=68,CELL=66;
export function NestedQuantifiersLab({compact=false}:{compact?:boolean}){
  const [relation,setRelation]=useState<RelationKey>("equality");
  const [n,setN]=useState(3);
  const [selectedX,setSelectedX]=useState(1);
  const [selectedY,setSelectedY]=useState(1);
  const result=useMemo(()=>analyzeRelation(relation,n),[relation,n]);
  const preset=relationPresets.find(p=>p.key===relation)!;
  const x=Math.min(selectedX,n),y=Math.min(selectedY,n);
  const truth=(ok:boolean)=>ok?"BENAR":"SALAH";
  const assertions:[string,boolean,string][]=[
    ["∀x ∃y R(x,y)",result.everyXSomeY,result.everyXSomeY?"Setiap baris mempunyai setidaknya satu sel benar.":"Ada baris tanpa satu pun sel benar."],
    ["∃y ∀x R(x,y)",result.someYEveryX,result.someYEveryX?"Saksi seragam: y = "+result.uniformY.join(", ")+".":"Tidak ada kolom yang seluruhnya benar."],
    ["∀y ∃x R(x,y)",result.everyYSomeX,result.everyYSomeX?"Setiap kolom mempunyai setidaknya satu sel benar.":"Ada kolom tanpa satu pun sel benar."],
    ["∃x ∀y R(x,y)",result.someXEveryY,result.someXEveryY?"Saksi seragam: x = "+result.uniformX.join(", ")+".":"Tidak ada baris yang seluruhnya benar."]
  ];
  return <section className="content-box" style={{padding:compact?16:22,marginBlock:18}}>
    <strong style={{fontSize:"1.08rem"}}>Laboratorium Kuantor Bertingkat</strong>
    <p style={{lineHeight:1.7,color:"var(--muted)",margin:"8px 0 14px"}}>Baris menyatakan x, kolom menyatakan y. Sel hijau berarti R(x,y) benar. Bandingkan saksi yang berubah menurut x dengan satu saksi yang berlaku untuk semua x.</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,200px),1fr))",gap:12,marginBottom:14}}>
      <label style={{display:"grid",gap:5,fontWeight:650}}>Relasi
        <select aria-label="Pilih relasi kuantor" value={relation} onChange={e=>setRelation(e.target.value as RelationKey)} style={{padding:10,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text)"}}>
          {relationPresets.map(p=><option key={p.key} value={p.key}>{p.label}</option>)}
        </select>
      </label>
      <label style={{display:"grid",gap:5,fontWeight:650}}>Ukuran domain A = B = {"{1,…,"+n+"}"}
        <input aria-label="Ukuran domain relasi" type="range" min="2" max="6" step="1" value={n} onChange={e=>setN(Number(e.target.value))}/>
      </label>
    </div>
    <div style={{overflowX:"auto"}}>
      <svg viewBox={"0 0 "+W+" "+(TOP+n*CELL+65)} role="img"
        aria-label={"Matriks relasi "+preset.label+" pada domain berukuran "+n+". Untuk setiap x ada y: "+truth(result.everyXSomeY)+". Ada satu y untuk semua x: "+truth(result.someYEveryX)+"."}
        style={{width:"100%",maxWidth:690,minWidth:Math.min(440,W),height:"auto",display:"block",marginInline:"auto",border:"1px solid var(--border)",borderRadius:12,background:"var(--surface)"}}>
        <text x={LEFT+CELL*n/2} y={28} textAnchor="middle" fontWeight="700" fontSize="15" fill="var(--text)">Kolom y (kandidat saksi)</text>
        <text x={26} y={TOP+CELL*n/2} textAnchor="middle" fontWeight="700" fontSize="15" fill="var(--text)" transform={"rotate(-90 26 "+(TOP+CELL*n/2)+")"}>Baris x</text>
        {Array.from({length:n},(_,j)=><text key={"head"+j} x={LEFT+CELL*j+CELL/2} y={TOP-14} textAnchor="middle" fontSize="15" fill="var(--text)">y={j+1}</text>)}
        {result.matrix.map((row,i)=><g key={i}>
          <text x={LEFT-16} y={TOP+i*CELL+CELL/2+5} textAnchor="end" fontSize="15" fill="var(--text)">x={i+1}</text>
          {row.map((ok,j)=><g key={j}>
            <rect x={LEFT+j*CELL+3} y={TOP+i*CELL+3} width={CELL-6} height={CELL-6} rx={9}
              fill={ok?"#0f766e":"#64748b"} fillOpacity={ok ? 0.94 : 0.2}
              stroke={x===i+1&&y===j+1?"#dc2626":result.uniformY.includes(j+1)?"#0f766e":"var(--border)"}
              strokeWidth={x===i+1&&y===j+1?4:result.uniformY.includes(j+1)?3:1}/>
            <text x={LEFT+j*CELL+CELL/2} y={TOP+i*CELL+CELL/2+6} textAnchor="middle" fontWeight="700" fontSize="17" fill={ok?"#ffffff":"var(--text)"}>{ok?"1":"0"}</text>
          </g>)}
          <text x={LEFT+n*CELL+13} y={TOP+i*CELL+CELL/2+5} fontSize="12" fill="var(--text)">{result.rowWitnesses[i].length?"∃y ✓":"∃y ✕"}</text>
        </g>)}
        <text x={LEFT} y={TOP+n*CELL+30} fontSize="13" fill="var(--text)">Garis hijau: kolom saksi seragam (jika ada). Bingkai merah: pasangan terpilih.</text>
      </svg>
    </div>
    <p style={{lineHeight:1.65,color:"var(--muted)",fontSize:".88rem"}}>{preset.description}</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,230px),1fr))",gap:10,marginTop:14}}>
      {assertions.map(([label,ok,why])=><div key={label} style={{border:"1px solid var(--border)",borderRadius:10,padding:12,background:"var(--surface-2)"}}>
        <strong style={{display:"block",fontSize:"1rem"}}>{label}</strong>
        <span style={{display:"block",fontWeight:800,color:ok?"#0f766e":"#b91c1c",marginTop:5}}>{truth(ok)}</span>
        <span style={{display:"block",fontSize:".84rem",lineHeight:1.6,marginTop:5}}>{why}</span>
      </div>)}
    </div>
    <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:10,marginTop:16}}>
      <label>Pilih x <select aria-label="Pilih baris x" value={x} onChange={e=>setSelectedX(Number(e.target.value))} style={{marginLeft:5,padding:7,borderRadius:7,background:"var(--surface)",color:"var(--text)",border:"1px solid var(--border)"}}>{Array.from({length:n},(_,i)=><option key={i} value={i+1}>{i+1}</option>)}</select></label>
      <label>Pilih y <select aria-label="Pilih kolom y" value={y} onChange={e=>setSelectedY(Number(e.target.value))} style={{marginLeft:5,padding:7,borderRadius:7,background:"var(--surface)",color:"var(--text)",border:"1px solid var(--border)"}}>{Array.from({length:n},(_,i)=><option key={i} value={i+1}>{i+1}</option>)}</select></label>
      <strong role="status">R({x},{y}) = {truth(result.matrix[x-1][y-1])}</strong>
    </div>
    <p style={{fontSize:".87rem",lineHeight:1.7,marginBottom:0}}>
      Saksi bagi x = {x}: {result.rowWitnesses[x-1].length?result.rowWitnesses[x-1].join(", "):"tidak ada"}.
      {" "}Untuk menegasikan ∀x∃y, carilah satu baris kosong; untuk menegasikan ∃y∀x, periksa bahwa setiap kolom mempunyai sedikitnya satu sel salah.
    </p>
  </section>;
}
