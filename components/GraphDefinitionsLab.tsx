"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Mode = "path"|"relabel"|"star"|"cycle"|"triangles";
type Point = {x:number;y:number};
type Graph = {
  labels:string[];
  points:Point[];
  edges:[number,number][];
  name:string;
  explanation:{id:string;en:string};
};

const graphs:Record<Mode,Graph>={
  path:{
    name:"P₄",
    labels:["1","2","3","4"],
    points:[{x:55,y:148},{x:155,y:70},{x:265,y:210},{x:375,y:118}],
    edges:[[0,1],[1,2],[2,3]],
    explanation:{
      id:"Lintasan P₄ mempunyai dua simpul berderajat 1 dan dua simpul berderajat 2. Gunakan graf ini sebagai acuan isomorfisme.",
      en:"The path P₄ has two vertices of degree 1 and two of degree 2. Use it as the reference for isomorphism."
    }
  },
  relabel:{
    name:"H ≅ P₄",
    labels:["a","b","c","d"],
    points:[{x:75,y:65},{x:370,y:210},{x:175,y:215},{x:275,y:70}],
    edges:[[0,2],[2,3],[3,1]],
    explanation:{
      id:"Pemetaan 1↦a, 2↦c, 3↦d, 4↦b mempertahankan sisi dan bukan-sisi. Matriks berubah karena urutan label, tetapi struktur graf tetap P₄.",
      en:"The map 1↦a, 2↦c, 3↦d, 4↦b preserves edges and nonedges. The matrix changes with vertex order, but the graph remains P₄."
    }
  },
  star:{
    name:"K₁,₃",
    labels:["1","2","3","4"],
    points:[{x:215,y:140},{x:85,y:55},{x:350,y:55},{x:215,y:250}],
    edges:[[0,1],[0,2],[0,3]],
    explanation:{
      id:"Bintang K₁,₃ dan P₄ sama-sama memiliki 4 simpul dan 3 sisi, tetapi barisan derajatnya berbeda. Jadi keduanya tidak isomorfik.",
      en:"The star K₁,₃ and P₄ both have 4 vertices and 3 edges, but their degree sequences differ, so they are not isomorphic."
    }
  },
  cycle:{
    name:"C₆",
    labels:["1","2","3","4","5","6"],
    points:[{x:215,y:32},{x:330,y:90},{x:330,y:215},{x:215,y:270},{x:100,y:215},{x:100,y:90}],
    edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]],
    explanation:{
      id:"C₆ memiliki enam simpul berderajat 2 dan tidak mempunyai segitiga. Bandingkan dengan dua segitiga terpisah: barisan derajat sama, tetapi struktur berbeda.",
      en:"C₆ has six degree-2 vertices and no triangle. Compare it with two disjoint triangles: the degree sequences agree, but the structures differ."
    }
  },
  triangles:{
    name:"C₃ ∪ C₃",
    labels:["1","2","3","4","5","6"],
    points:[{x:112,y:55},{x:40,y:220},{x:190,y:220},{x:315,y:55},{x:240,y:220},{x:390,y:220}],
    edges:[[0,1],[1,2],[2,0],[3,4],[4,5],[5,3]],
    explanation:{
      id:"Dua segitiga terpisah memiliki barisan derajat (2,2,2,2,2,2), sama dengan C₆. Namun graf ini memiliki dua segitiga, sedangkan C₆ tidak; keduanya tidak isomorfik.",
      en:"Two disjoint triangles have degree sequence (2,2,2,2,2,2), just like C₆. This graph has two triangles whereas C₆ has none, so they are not isomorphic."
    }
  }
};

const names:Record<Mode,{id:string;en:string}>={
  path:{id:"Lintasan P₄",en:"Path P₄"},
  relabel:{id:"P₄ dilabel ulang",en:"Relabelled P₄"},
  star:{id:"Bintang K₁,₃",en:"Star K₁,₃"},
  cycle:{id:"Siklus C₆",en:"Cycle C₆"},
  triangles:{id:"Dua segitiga",en:"Two triangles"}
};
const modes:Mode[]=["path","relabel","star","cycle","triangles"];

export function GraphDefinitionsLab({compact=false}:{compact?:boolean}){
  const {language}=useLanguage();
  const en=language==="en";
  const [mode,setMode]=useState<Mode>("path");
  const graph=graphs[mode];
  const analysis=useMemo(()=>{
    const degrees=graph.labels.map(()=>0);
    const matrix=graph.labels.map(()=>graph.labels.map(()=>0));
    for(const [u,v] of graph.edges){
      degrees[u]++;degrees[v]++;
      matrix[u][v]=1;matrix[v][u]=1;
    }
    const sum=degrees.reduce((a,b)=>a+b,0);
    const odd=degrees.filter(d=>d%2===1).length;
    return {degrees,matrix,sum,odd,sorted:[...degrees].sort((a,b)=>b-a)};
  },[graph]);

  const drawing=<svg viewBox="0 0 430 300" className="interactive-svg" style={{display:"block",width:"100%",height:"auto",maxWidth:560}}
    role="img" aria-label={(en?"Graph ":"Graf ")+graph.name+": "+graph.labels.length+
      (en?" vertices, ":" simpul, ")+graph.edges.length+(en?" edges.":" sisi.")}>
    {graph.edges.map(([u,v],i)=><line key={"e-"+i}
      x1={graph.points[u].x} y1={graph.points[u].y} x2={graph.points[v].x} y2={graph.points[v].y}
      stroke="#2b7ad1" strokeWidth="5" strokeLinecap="round"/>)}
    {graph.labels.map((label,i)=><g key={label}>
      <circle cx={graph.points[i].x} cy={graph.points[i].y} r="23"
        fill="#183f75" stroke="#ffffff" strokeWidth="3"/>
      <text x={graph.points[i].x} y={graph.points[i].y+5}
        textAnchor="middle" fontSize="17" fontWeight="700" fill="#ffffff">{label}</text>
      <text x={graph.points[i].x} y={graph.points[i].y-30}
        textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">
        {en?"deg ":"derajat "}{analysis.degrees[i]}
      </text>
    </g>)}
  </svg>;

  if(compact)return <figure className="math-figure">
    <div className="figure-heading">
      <span className="figure-label">{en?"Mathematical diagram":"Diagram matematis"}</span>
      <strong>{en?"A graph is determined by its edges":"Graf ditentukan oleh himpunan sisinya"}</strong>
    </div>
    <div className="figure-canvas">{drawing}</div>
    <figcaption>{en?graphs.path.explanation.en:graphs.path.explanation.id}</figcaption>
  </figure>;

  return <section className="interactive-lab" aria-label={en?"Graph structure laboratory":"Laboratorium struktur graf"}>
    <div className="interactive-lab-head">
      <div>
        <span className="eyebrow">{en?"Interactive investigation":"Eksplorasi interaktif"}</span>
        <h2>{en?"Degree, adjacency, and isomorphism":"Derajat, ketetanggaan, dan isomorfisme"}</h2>
        <p>{en
          ?"Switch graphs to inspect the adjacency matrix, degree sequence, and the handshaking identity. Compare isomorphic and non-isomorphic examples."
          :"Pilih graf untuk memeriksa matriks ketetanggaan, barisan derajat, dan lemma jabat tangan. Bandingkan contoh graf isomorfik dan tidak isomorfik."}</p>
      </div>
      <button type="button" className="lab-reset" onClick={()=>setMode("path")}>{en?"Reset":"Atur Ulang"}</button>
    </div>
    <div style={{display:"flex",flexWrap:"wrap",gap:9,marginBottom:20}}>
      {modes.map(value=><button type="button" key={value} aria-pressed={mode===value}
        onClick={()=>setMode(value)}
        style={{border:"1px solid var(--border)",borderRadius:12,padding:"9px 12px",
          background:mode===value?"var(--blue)":"var(--surface)",
          color:mode===value?"white":"var(--text)",fontWeight:750,cursor:"pointer"}}>
        {en?names[value].en:names[value].id}
      </button>)}
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,290px),1fr))",gap:22,alignItems:"start"}}>
      <div className="figure-canvas" style={{minWidth:0}}>
        {drawing}
        <p style={{margin:"10px 0 0",lineHeight:1.65,fontSize:".9rem"}}>
          {en?graph.explanation.en:graph.explanation.id}
        </p>
      </div>
      <div style={{minWidth:0}}>
        <h3 style={{margin:"0 0 12px"}}>{en?"Adjacency matrix":"Matriks ketetanggaan"} — {graph.name}</h3>
        <div style={{overflowX:"auto",maxWidth:"100%"}}>
          <table style={{borderCollapse:"collapse",fontSize:".85rem",textAlign:"center"}}>
            <thead><tr><th scope="col" style={{padding:7}}>A</th>
              {graph.labels.map(v=><th scope="col" key={v} style={{padding:7}}>{v}</th>)}
            </tr></thead>
            <tbody>{analysis.matrix.map((row,i)=><tr key={graph.labels[i]}>
              <th scope="row" style={{padding:7}}>{graph.labels[i]}</th>
              {row.map((value,j)=><td key={j} style={{padding:7,border:"1px solid var(--border)",fontWeight:value?800:400}}>{value}</td>)}
            </tr>)}</tbody>
          </table>
        </div>
        <div style={{display:"grid",gap:8,marginTop:16,fontSize:".9rem",lineHeight:1.55}}>
          <div><strong>{en?"Vertices":"Simpul"}:</strong> {graph.labels.length} · <strong>{en?"Edges":"Sisi"}:</strong> {graph.edges.length}</div>
          <div><strong>{en?"Degrees in label order":"Derajat sesuai urutan label"}:</strong> ({analysis.degrees.join(", ")})</div>
          <div><strong>{en?"Sorted degree sequence":"Barisan derajat"}:</strong> ({analysis.sorted.join(", ")})</div>
          <div><strong>{en?"Odd-degree vertices":"Simpul berderajat ganjil"}:</strong> {analysis.odd}</div>
          <div style={{padding:"10px 12px",border:"1px solid var(--border)",borderRadius:10,background:"var(--surface-2)"}}>
            <strong>{en?"Handshaking check":"Pemeriksaan lemma jabat tangan"}:</strong><br/>
            Σ deg(v) = {analysis.sum} = 2 × {graph.edges.length} = 2|E|
          </div>
        </div>
      </div>
    </div>
  </section>;
}
