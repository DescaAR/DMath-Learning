"use client";

import { useMemo, useState } from "react";
import { finiteOperation, type GroupMode } from "@/lib/group-axioms-explorer";

const modes:{key:GroupMode;label:string;detail:string}[]=[
  {key:"add",label:"Penjumlahan pada ℤₙ",detail:"Semua kelas memiliki invers aditif. Setiap baris tabel merupakan permutasi."},
  {key:"units",label:"Perkalian unit U(n)",detail:"Hanya kelas yang relatif prima dengan n; setiap baris tabel merupakan permutasi."},
  {key:"multiply",label:"Perkalian pada seluruh ℤₙ",detail:"Kelas nol tidak memiliki invers. Baris untuk faktor nol mengirim semua kelas ke nol."}
];

export function GroupAxiomsLab({compact=false}:{compact?:boolean}){
  const [n,setN]=useState(6);
  const [mode,setMode]=useState<GroupMode>("add");
  const [selectedA,setSelectedA]=useState(1);
  const [selectedB,setSelectedB]=useState(0);
  const data=useMemo(()=>finiteOperation(n,mode),[n,mode]);
  const a=data.elements.includes(selectedA)?selectedA:data.elements[0];
  const b=data.elements.includes(selectedB)?selectedB:data.elements[0];
  const row=data.elements.indexOf(a),column=data.elements.indexOf(b);
  const result=data.table[row][column];
  const isPermutation=new Set(data.table[row]).size===data.elements.length;
  const symbol=mode==="add"?"+":"×";
  const points=data.elements.map((value,index)=>{
    const angle=-Math.PI/2+2*Math.PI*index/data.elements.length;
    return {value,x:200+125*Math.cos(angle),y:169+125*Math.sin(angle)};
  });
  const start=points.find(p=>p.value===b)!;
  const end=points.find(p=>p.value===result)!;
  const changeMode=(next:GroupMode)=>{setMode(next);setSelectedA(next==="add"?1:1);setSelectedB(next==="add"?0:1);};
  const changeN=(next:number)=>{setN(next);setSelectedA(1);setSelectedB(0);};
  return <div className="group-axioms-lab" aria-label="Laboratorium aksioma grup dan tabel Cayley"
    style={{border:"1px solid var(--border)",borderRadius:18,padding:compact?16:22,background:"var(--surface)",minWidth:0}}>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:12}}>
      <div>
        <strong style={{fontSize:"1.08rem",color:"var(--text)"}}>Laboratorium Tabel Cayley</strong>
        <p style={{margin:"6px 0 12px",color:"var(--muted)",fontSize:".9rem"}}>
          Bandingkan struktur dengan himpunan dasar atau operasi berbeda.
        </p>
      </div>
      <label style={{display:"flex",gap:8,alignItems:"center",color:"var(--text)"}}>
        Modulus n
        <select aria-label="Pilih modulus" value={n} onChange={event=>changeN(Number(event.target.value))}
          style={{padding:9,borderRadius:8,border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text)"}}>
          {[3,4,5,6,7,8,9].map(value=><option key={value} value={value}>{value}</option>)}
        </select>
      </label>
    </div>
    <div role="group" aria-label="Pilih operasi aljabar" style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16}}>
      {modes.map(item=><button type="button" key={item.key} onClick={()=>changeMode(item.key)}
        aria-pressed={mode===item.key} style={{
          padding:"9px 12px",borderRadius:9,cursor:"pointer",fontWeight:700,
          border:"1px solid var(--border)",background:mode===item.key?"var(--blue)":"var(--surface-2)",
          color:mode===item.key?"white":"var(--text)"
        }}>{item.label}</button>)}
    </div>
    <p style={{color:"var(--muted)",fontSize:".88rem",margin:"0 0 14px"}}>{modes.find(item=>item.key===mode)?.detail}</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,290px),1fr))",gap:20,alignItems:"start"}}>
      <div>
        <div style={{display:"flex",flexWrap:"wrap",gap:12,marginBottom:12}}>
          <label style={{color:"var(--text)"}}>a = 
            <select aria-label="Pilih unsur a" value={a} onChange={event=>setSelectedA(Number(event.target.value))}
              style={{marginLeft:7,padding:6,border:"1px solid var(--border)",borderRadius:7,background:"var(--surface-2)",color:"var(--text)"}}>
              {data.elements.map(x=><option value={x} key={x}>[{x}]</option>)}
            </select>
          </label>
          <label style={{color:"var(--text)"}}>b = 
            <select aria-label="Pilih unsur b" value={b} onChange={event=>setSelectedB(Number(event.target.value))}
              style={{marginLeft:7,padding:6,border:"1px solid var(--border)",borderRadius:7,background:"var(--surface-2)",color:"var(--text)"}}>
              {data.elements.map(x=><option value={x} key={x}>[{x}]</option>)}
            </select>
          </label>
        </div>
        <div style={{overflowX:"auto"}}>
          <table aria-label="Tabel Cayley untuk operasi terpilih" style={{borderCollapse:"separate",borderSpacing:3,width:"100%",fontVariantNumeric:"tabular-nums",fontSize:compact?".75rem":".83rem"}}>
            <thead><tr><th style={{padding:5,color:"var(--blue)"}}>{symbol}</th>
              {data.elements.map(x=><th key={x} scope="col" style={{padding:5,color:x===b?"var(--blue)":"var(--text)"}}>[{x}]</th>)}
            </tr></thead>
            <tbody>{data.table.map((values,i)=><tr key={data.elements[i]}>
              <th scope="row" style={{padding:5,color:data.elements[i]===a?"var(--blue)":"var(--text)"}}>[{data.elements[i]}]</th>
              {values.map((value,j)=><td key={j} style={{
                textAlign:"center",padding:7,borderRadius:6,
                border:"1px solid var(--border)",
                background:i===row&&j===column?"var(--blue)":"var(--surface-2)",
                color:i===row&&j===column?"white":"var(--text)",fontWeight:i===row&&j===column?800:500
              }}>[{value}]</td>)}
            </tr>)}</tbody>
          </table>
        </div>
        <p role="status" style={{color:"var(--text)",fontWeight:700,margin:"12px 0 6px"}}>
          [{a}] {symbol} [{b}] = [{result}] (mod {n})
        </p>
        <p style={{color:"var(--muted)",fontSize:".85rem",margin:0}}>
          Baris [{a}] {isPermutation?"adalah":"bukan"} permutasi seluruh unsur.
          {mode==="multiply"?" Baris nol menunjukkan kegagalan invers.":""}
        </p>
      </div>
      <div>
        <svg viewBox="0 0 400 340" role="img"
          aria-label={"Diagram aksi unsur "+a+" terhadap "+b+" menghasilkan "+result+" modulo "+n}
          style={{width:"100%",maxWidth:440,height:"auto",display:"block",margin:"0 auto"}}>
          <title>Diagram transformasi x menjadi a {symbol} x</title>
          <circle cx="200" cy="169" r="125" fill="none" stroke="var(--border)" strokeWidth="2"/>
          {points.map(p=>{
            const targetValue=data.table[row][data.elements.indexOf(p.value)];
            const target=points.find(q=>q.value===targetValue)!;
            return <line key={"arrow-"+p.value} x1={p.x} y1={p.y} x2={target.x} y2={target.y}
              stroke="var(--muted)" strokeWidth="1.4" opacity=".33"/>;
          })}
          {start.value!==end.value
            ?<line x1={start.x} y1={start.y} x2={end.x} y2={end.y}
              stroke="#e34860" strokeWidth="4" strokeLinecap="round"/>
            :<circle cx={start.x} cy={start.y} r="20" fill="none" stroke="#e34860" strokeWidth="4"/>}
          {points.map(p=><g key={p.value}>
            <circle cx={p.x} cy={p.y} r="17" fill={p.value===result?"#e34860":p.value===b?"var(--blue)":"var(--surface-2)"}
              stroke="var(--border)" strokeWidth="1.5"/>
            <text x={p.x} y={p.y+5} textAnchor="middle" fontSize="14" fontWeight="700"
              fill={p.value===result||p.value===b?"white":"var(--text)"}>{p.value}</text>
          </g>)}
          <text x="200" y="167" textAnchor="middle" fontSize="14" fill="var(--text)" fontWeight="700">
            x ↦ {mode==="add"?a+" + x":a+" × x"}
          </text>
          <text x="200" y="188" textAnchor="middle" fontSize="12" fill="var(--muted)">
            modulo {n}
          </text>
        </svg>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:8,fontSize:".82rem"}}>
          {[
            ["Tertutup",data.closed],
            ["Asosiatif",data.associative],
            ["Identitas ["+data.identity+"]",true],
            ["Semua punya invers",data.inverses.every(x=>x!==null)],
            ["Komutatif",data.commutative],
            ["Merupakan grup",data.isGroup]
          ].map(([label,valid])=><div key={String(label)} style={{
            border:"1px solid var(--border)",borderRadius:9,padding:8,
            background:"var(--surface-2)",color:"var(--text)"
          }}><span aria-hidden="true" style={{color:valid?"#15936a":"#d34949"}}>{valid?"✓":"✕"} </span>{label}</div>)}
        </div>
        <p style={{fontSize:".82rem",color:"var(--muted)",lineHeight:1.65,marginBottom:0}}>
          Invers setiap unsur: {data.elements.map((x,i)=>"["+x+"] → "+(data.inverses[i]===null?"tidak ada":"["+data.inverses[i]+"]")).join("; ")}.
          Garis merah menandai aksi [{a}] pada [{b}]; garis tipis menunjukkan seluruh aksi baris [{a}].
        </p>
      </div>
    </div>
  </div>;
}
