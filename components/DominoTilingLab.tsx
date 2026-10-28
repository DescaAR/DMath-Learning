"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type BoardMode="full"|"opposite"|"adjacent"|"isolated";

const presets:Record<BoardMode,{removed:[number,number][];tileable:boolean}>={
  full:{removed:[],tileable:true},
  opposite:{removed:[[0,0],[7,7]],tileable:false},
  adjacent:{removed:[[0,0],[0,1]],tileable:true},
  isolated:{removed:[[0,1],[1,0],[6,6],[7,7]],tileable:false},
};

const descriptions:Record<BoardMode,{id:string;en:string}>={
  full:{
    id:"Papan utuh: 32 petak tiap warna. Setiap baris dapat ditutup dengan empat domino horizontal.",
    en:"Full board: 32 cells of each color. Four horizontal dominoes tile every row."
  },
  opposite:{
    id:"Dua sudut berseberangan sama-sama hitam. Tersisa 30 petak hitam dan 32 putih; invariant melarang penutupan.",
    en:"Opposite corners are both black. The remaining 30 black and 32 white cells violate the necessary color balance."
  },
  adjacent:{
    id:"Dua sudut bertetangga berbeda warna. Enam petak di baris pertama dan semua baris lainnya dapat ditutup secara horizontal.",
    en:"Adjacent corners have different colors. The remaining six cells in the first row and all other rows admit horizontal dominoes."
  },
  isolated:{
    id:"Jumlah warna seimbang (30 dan 30), tetapi petak (1,1) terisolasi karena kedua tetangganya dihapus. Penutupan mustahil.",
    en:"Colors are balanced (30 and 30), but cell (1,1) is isolated because both neighbors are removed. A tiling is impossible."
  }
};

export function DominoTilingLab({compact=false}:{compact?:boolean}){
  const {language}=useLanguage();
  const en=language==="en";
  const [mode,setMode]=useState<BoardMode>("opposite");
  const preset=presets[mode];
  const removed=useMemo(()=>new Set(preset.removed.map(([r,c])=>r+","+c)),[mode]);
  const counts=useMemo(()=>{
    let black=0,white=0;
    for(let r=0;r<8;r++)for(let c=0;c<8;c++){
      if(removed.has(r+","+c))continue;
      if((r+c)%2===0)black++;else white++;
    }
    return {black,white,remaining:black+white};
  },[removed]);
  const labels:Record<BoardMode,string>=en
    ?{full:"Full board",opposite:"Opposite corners",adjacent:"Adjacent corners",isolated:"Balanced but impossible"}
    :{full:"Papan utuh",opposite:"Sudut berseberangan",adjacent:"Sudut bertetangga",isolated:"Seimbang tetapi mustahil"};
  const x0=56,y0=38,size=43;
  const dominoes:{r:number;c:number}[]=[];
  if(preset.tileable){
    for(let r=0;r<8;r++)for(let c=0;c<8;c+=2){
      if(!removed.has(r+","+c)&&!removed.has(r+","+(c+1)))dominoes.push({r,c});
    }
  }

  const board=<svg viewBox="0 0 460 442" className="interactive-svg" style={{width:"100%",maxWidth:540,height:"auto"}} role="img"
    aria-label={en
      ?"8 by 8 checkerboard. "+labels[mode]+". "+counts.black+" black and "+counts.white+" white cells remain. "+(preset.tileable?"A horizontal domino tiling is shown.":"No domino tiling exists.")
      :"Papan catur 8 kali 8. "+labels[mode]+". Tersisa "+counts.black+" petak hitam dan "+counts.white+" petak putih. "+(preset.tileable?"Ditampilkan penutupan domino horizontal.":"Penutupan domino tidak ada.")}>
    {Array.from({length:8},(_,c)=><text key={"col-"+c} x={x0+c*size+size/2} y={y0-13}
      fontSize="13" textAnchor="middle" fill="currentColor">{c+1}</text>)}
    {Array.from({length:8},(_,r)=><text key={"row-"+r} x={x0-16} y={y0+r*size+size/2+5}
      fontSize="13" textAnchor="middle" fill="currentColor">{r+1}</text>)}
    {Array.from({length:64},(_,i)=>{
      const r=Math.floor(i/8),c=i%8,missing=removed.has(r+","+c);
      const x=x0+c*size,y=y0+r*size;
      return <g key={i}>
        <rect x={x} y={y} width={size} height={size}
          fill={missing?"#fce6e9":(r+c)%2===0?"#24416a":"#e8eef7"}
          stroke="#7e91a9" strokeWidth="0.8"/>
        {missing&&<g stroke="#bb304b" strokeWidth="2.5">
          <line x1={x+11} y1={y+11} x2={x+size-11} y2={y+size-11}/>
          <line x1={x+size-11} y1={y+11} x2={x+11} y2={y+size-11}/>
        </g>}
      </g>;
    })}
    {dominoes.map(({r,c})=><rect key={"domino-"+r+"-"+c}
      x={x0+c*size+3} y={y0+r*size+3} width={2*size-6} height={size-6}
      rx="6" fill="#10b99a" fillOpacity=".14" stroke="#06a689" strokeWidth="3"/>)}
    <g fontSize="13" fill="currentColor">
      <text x="58" y="409">{en?"Pink × = removed cell":"Merah muda × = petak dihapus"}</text>
      <text x="58" y="429">{en?"Green outline = one domino":"Bingkai hijau = satu domino"}</text>
    </g>
  </svg>;

  if(compact){
    return <figure className="math-figure" aria-label={en?"Domino tiling diagram":"Diagram penutupan domino"}>
      <div className="figure-heading"><span className="figure-label">{en?"Mathematical diagram":"Diagram matematis"}</span>
        <strong>{en?"Opposite-corner obstruction":"Hambatan dua sudut berseberangan"}</strong></div>
      <div className="figure-canvas">{board}</div>
      <figcaption>{en?descriptions.opposite.en:descriptions.opposite.id}</figcaption>
    </figure>;
  }

  return <section className="interactive-lab" aria-label={en?"Domino tiling laboratory":"Laboratorium penutupan domino"}>
    <div className="interactive-lab-head">
      <div><span className="eyebrow">{en?"Interactive investigation":"Eksplorasi interaktif"}</span>
        <h2>{en?"Domino tilings and color invariants":"Penutupan domino dan invariant warna"}</h2>
        <p>{en
          ?"Compare four boards. A balanced checkerboard is necessary for tiling, but does not always guarantee it."
          :"Bandingkan empat papan. Keseimbangan warna diperlukan untuk penutupan, tetapi tidak selalu menjaminnya."}</p>
      </div>
      <button className="lab-reset" type="button" onClick={()=>setMode("opposite")}>{en?"Reset":"Atur Ulang"}</button>
    </div>
    <div className="interactive-lab-grid">
      <div className="lab-controls-panel">
        <fieldset style={{border:0,padding:0,margin:0,minWidth:0}}>
          <legend style={{fontWeight:750,marginBottom:12}}>{en?"Choose a board":"Pilih konfigurasi papan"}</legend>
          <div style={{display:"grid",gap:9}}>
            {(Object.keys(presets) as BoardMode[]).map(value=><button type="button" key={value}
              aria-pressed={mode===value} onClick={()=>setMode(value)}
              style={{padding:"11px 13px",borderRadius:10,textAlign:"left",cursor:"pointer",
                border:mode===value?"2px solid #178e83":"1px solid var(--border)",
                background:mode===value?"var(--surface-2)":"var(--surface)",color:"var(--text)",fontWeight:mode===value?800:600}}>
              {labels[value]}
            </button>)}
          </div>
        </fieldset>
        <div className="metric-grid" aria-live="polite" style={{marginTop:16}}>
          <div><span>{en?"Black":"Hitam"}</span><strong>{counts.black}</strong></div>
          <div><span>{en?"White":"Putih"}</span><strong>{counts.white}</strong></div>
          <div><span>{en?"Dominoes needed":"Domino diperlukan"}</span><strong>{counts.remaining/2}</strong></div>
          <div><span>{en?"Perfect tiling":"Penutupan sempurna"}</span>
            <strong>{preset.tileable?(en?"Exists":"Ada"):(en?"Impossible":"Mustahil")}</strong></div>
        </div>
      </div>
      <div className="lab-visual-panel">{board}</div>
    </div>
    <div className="lab-note" role="status"><span aria-hidden="true">◎</span>
      <p>{en?descriptions[mode].en:descriptions[mode].id}</p>
    </div>
  </section>;
}
