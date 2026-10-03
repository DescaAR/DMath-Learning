"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { DeepMaterial } from "@/data/deep-materials";
import { complexAnalysisExercises, complexAnalysisSections, type ComplexSourceBlock } from "@/data/complex-analysis";
import { RichMath } from "@/components/RichMath";

function SourceText({ text }: { text: string }) {
  return <RichMath className="ca-rich-text">{text}</RichMath>;
}

const kindNames: Record<string,string> = {
  definition:"Definisi", lemma:"Lemma", proposition:"Proposisi", theorem:"Teorema",
  corollary:"Akibat", note:"Catatan", example:"Contoh", identity:"Identitas",
  exercise:"Latihan", proof:"Pembuktian", solution:"Solusi",
};

function FormalBlock({ block, index }: { block: ComplexSourceBlock; index: number }) {
  if (block.kind === "paragraph") return <div className="ca-paragraph"><SourceText text={block.text ?? ""} /></div>;
  if (block.kind === "proof" || block.kind === "solution") {
    return <div className="ca-standalone-proof"><strong>{kindNames[block.kind]}</strong><SourceText text={block.body ?? ""} /></div>;
  }
  const label=kindNames[block.kind] ?? block.kind;
  const title=block.title || label+" "+(index+1);
  const detail=block.solution ?? block.proof;
  return (
    <article className={"ca-formal ca-"+block.kind}>
      <div className="ca-formal-head"><span>{label}</span><strong>{title}</strong></div>
      <div className="ca-formal-body"><SourceText text={block.body ?? ""} /></div>
      {detail && (
        <details className="ca-proof">
          <summary>{block.solution ? "Buka solusi" : "Buka pembuktian"}</summary>
          <div className="ca-proof-body"><SourceText text={detail} />{block.proof && <div className="ca-qed">■</div>}</div>
        </details>
      )}
    </article>
  );
}

function ComplexPlaneLab() {
  const [x,setX]=useState(2), [y,setY]=useState(1.5);
  const scale=42, cx=260, cy=170, px=cx+x*scale, py=cy-y*scale, cpy=cy+y*scale;
  const modulus=Math.hypot(x,y), argument=Math.atan2(y,x), w={x:-1.5,y:1}, distance=Math.hypot(x-w.x,y-w.y);
  return (
    <section className="ca-lab">
      <div className="ca-lab-copy">
        <span className="eyebrow">Visualisasi Interaktif</span>
        <h2>Bilangan kompleks sebagai titik, vektor, dan jarak</h2>
        <p>Geser bagian real dan imajiner untuk melihat <RichMath>{"$z=x+iy$"}</RichMath>, konjugat <RichMath>{"$\\bar z=x-iy$"}</RichMath>, modulus, argumen, dan jarak ke titik tetap <RichMath>{"$w=-1.5+i$"}</RichMath>.</p>
        <label><span>Re(z) <strong>{x.toFixed(1)}</strong></span><input type="range" min="-4" max="4" step=".5" value={x} onChange={e=>setX(Number(e.target.value))}/></label>
        <label><span>Im(z) <strong>{y.toFixed(1)}</strong></span><input type="range" min="-3" max="3" step=".5" value={y} onChange={e=>setY(Number(e.target.value))}/></label>
        <div className="ca-metrics">
          <div><span>|z|</span><strong>{modulus.toFixed(3)}</strong></div>
          <div><span>Arg z</span><strong>{argument.toFixed(3)} rad</strong></div>
          <div><span>|z-w|</span><strong>{distance.toFixed(3)}</strong></div>
        </div>
      </div>
      <figure className="ca-svg-card">
        <svg viewBox="0 0 520 340" role="img" aria-label="Bidang kompleks interaktif dengan z dan konjugat z">
          <line x1="35" y1={cy} x2="490" y2={cy} className="ca-axis"/><line x1={cx} y1="25" x2={cx} y2="315" className="ca-axis"/>
          {[-4,-3,-2,-1,1,2,3,4].map(v=><line key={"x"+v} x1={cx+v*scale} y1={cy-5} x2={cx+v*scale} y2={cy+5} className="ca-tick"/>)}
          {[-3,-2,-1,1,2,3].map(v=><line key={"y"+v} x1={cx-5} y1={cy-v*scale} x2={cx+5} y2={cy-v*scale} className="ca-tick"/>)}
          <line x1={cx} y1={cy} x2={px} y2={py} className="ca-vector"/><line x1={cx} y1={cy} x2={px} y2={cpy} className="ca-vector-conj"/>
          <line x1={px} y1={py} x2={cx+w.x*scale} y2={cy-w.y*scale} className="ca-distance"/>
          <circle cx={px} cy={py} r="7" className="ca-point"/><circle cx={px} cy={cpy} r="6" className="ca-point-conj"/><circle cx={cx+w.x*scale} cy={cy-w.y*scale} r="6" className="ca-point-w"/>
          <text x={px+10} y={py-8} className="ca-label">z</text><text x={px+10} y={cpy+18} className="ca-label">z̄</text><text x={cx+w.x*scale-22} y={cy-w.y*scale-10} className="ca-label">w</text>
          <text x="468" y={cy-9} className="ca-label">Re</text><text x={cx+8} y="38" className="ca-label">Im</text>
        </svg>
        <figcaption>Konjugasi mencerminkan titik terhadap sumbu real. Modulus adalah jarak dari titik asal, sedangkan <RichMath>{"$|z-w|$"}</RichMath> adalah jarak Euclid antara dua titik kompleks.</figcaption>
      </figure>
    </section>
  );
}

function RootsLab() {
  const [n,setN]=useState(5), cx=260,cy=155,r=112;
  const pts=Array.from({length:n},(_,k)=>{const a=-Math.PI/2+2*Math.PI*k/n;return [cx+r*Math.cos(a),cy+r*Math.sin(a),k]});
  return (
    <section className="ca-lab">
      <div className="ca-lab-copy">
        <span className="eyebrow">Visualisasi Interaktif</span><h2>Akar ke-n dan akar kesatuan</h2>
        <p>Akar-akar dari <RichMath>{"$z^n=1$"}</RichMath> terletak merata pada lingkaran satuan dengan sudut <RichMath>{"$2\\pi/n$"}</RichMath> antartitik.</p>
        <label><span>Nilai n <strong>{n}</strong></span><input type="range" min="3" max="12" step="1" value={n} onChange={e=>setN(Number(e.target.value))}/></label>
        <div className="ca-formula-chip"><RichMath>{"$\\omega_k=e^{2\\pi i k/n},\\quad k=0,1,\\ldots,n-1$"}</RichMath></div>
      </div>
      <figure className="ca-svg-card">
        <svg viewBox="0 0 520 315" role="img" aria-label="Akar kesatuan pada lingkaran satuan">
          <line x1="55" y1={cy} x2="465" y2={cy} className="ca-axis"/><line x1={cx} y1="25" x2={cx} y2="285" className="ca-axis"/><circle cx={cx} cy={cy} r={r} className="ca-unit-circle"/>
          <polygon points={pts.map(p=>p[0]+","+p[1]).join(" ")} className="ca-root-polygon"/>
          {pts.map(p=><g key={p[2]}><circle cx={p[0]} cy={p[1]} r="7" className="ca-point"/><text x={p[0]+8} y={p[1]-7} className="ca-label">{p[2]}</text></g>)}
        </svg>
        <figcaption>Semua akar memiliki modulus 1 dan membentuk poligon beraturan. Ketika n berubah, simetri rotasinya langsung terlihat.</figcaption>
      </figure>
    </section>
  );
}

function TopologyVisual() {
  return (
    <div className="ca-visual-grid">
      <figure className="ca-figure">
        <div className="ca-figure-title"><span>Visualisasi</span><strong>Disk dan annulus</strong></div>
        <svg viewBox="0 0 420 260" role="img" aria-label="Disk dan annulus pada bidang kompleks">
          <line x1="30" y1="135" x2="390" y2="135" className="ca-axis"/><line x1="205" y1="25" x2="205" y2="235" className="ca-axis"/>
          <circle cx="145" cy="100" r="62" className="ca-disk"/><circle cx="290" cy="160" r="72" className="ca-annulus-outer"/><circle cx="290" cy="160" r="38" className="ca-annulus-hole"/>
          <circle cx="145" cy="100" r="4" className="ca-point"/><circle cx="290" cy="160" r="4" className="ca-point"/>
        </svg>
        <figcaption>Disk <RichMath>{"$D(z_0,r)$"}</RichMath> berisi titik dengan jarak kurang dari r. Annulus membatasi jarak di antara dua radius.</figcaption>
      </figure>
      <figure className="ca-figure">
        <div className="ca-figure-title"><span>Visualisasi</span><strong>Interior dan batas</strong></div>
        <svg viewBox="0 0 420 260" role="img" aria-label="Titik interior dan titik batas">
          <path d="M78 166 C62 95,122 48,194 60 C265 34,344 74,350 145 C350 208,286 227,215 213 C145 236,90 218,78 166Z" className="ca-region"/>
          <circle cx="190" cy="135" r="8" className="ca-point"/><circle cx="78" cy="166" r="8" className="ca-boundary-point"/><circle cx="190" cy="135" r="35" className="ca-neighborhood"/>
          <text x="204" y="128" className="ca-label">interior</text><text x="88" y="185" className="ca-label">batas</text>
        </svg>
        <figcaption>Titik interior memiliki suatu disk kecil yang seluruhnya berada di dalam himpunan; persekitaran titik batas selalu bertemu himpunan dan komplemennya.</figcaption>
      </figure>
    </div>
  );
}

function SquareMapVisual() {
  const curves=[];
  for(let a=-2;a<=2;a++){
    const pts=Array.from({length:45},(_,i)=>{const y=-2+4*i/44,u=a*a-y*y,v=2*a*y;return [450+u*30,145-v*18]});
    curves.push(<polyline key={"v"+a} points={pts.map(p=>p.join(",")).join(" ")} className="ca-map-curve-a"/>);
  }
  for(let b=-2;b<=2;b++){
    const pts=Array.from({length:45},(_,i)=>{const x=-2+4*i/44,u=x*x-b*b,v=2*x*b;return [450+u*30,145-v*18]});
    curves.push(<polyline key={"h"+b} points={pts.map(p=>p.join(",")).join(" ")} className="ca-map-curve-b"/>);
  }
  return (
    <figure className="ca-figure">
      <div className="ca-figure-title"><span>Visualisasi</span><strong>Pemetaan w = z²</strong></div>
      <svg viewBox="0 0 760 300" role="img" aria-label="Grid pada bidang z dipetakan menjadi parabola pada bidang w">
        <text x="78" y="28" className="ca-label">bidang z</text><line x1="35" y1="145" x2="255" y2="145" className="ca-axis"/><line x1="145" y1="35" x2="145" y2="255" className="ca-axis"/>
        {[-2,-1,0,1,2].map(v=><line key={"gv"+v} x1={145+v*42} y1="60" x2={145+v*42} y2="230" className="ca-grid-a"/>)}
        {[-2,-1,0,1,2].map(v=><line key={"gh"+v} x1="60" y1={145+v*42} x2="230" y2={145+v*42} className="ca-grid-b"/>)}
        <path d="M270 145 L325 145" className="ca-arrow"/><text x="287" y="130" className="ca-label">z²</text>
        <text x="540" y="28" className="ca-label">bidang w</text><line x1="340" y1="145" x2="730" y2="145" className="ca-axis"/><line x1="450" y1="35" x2="450" y2="260" className="ca-axis"/>{curves}
      </svg>
      <figcaption>Garis vertikal dan horizontal pada bidang z dipetakan oleh <RichMath>{"$w=z^2$"}</RichMath> menjadi dua keluarga parabola.</figcaption>
    </figure>
  );
}

function LimitPathsVisual() {
  return (
    <figure className="ca-figure">
      <div className="ca-figure-title"><span>Visualisasi</span><strong>Banyak lintasan menuju satu titik</strong></div>
      <svg viewBox="0 0 620 300" role="img" aria-label="Berbagai lintasan menuju titik nol pada bidang kompleks">
        <line x1="40" y1="150" x2="580" y2="150" className="ca-axis"/><line x1="310" y1="30" x2="310" y2="270" className="ca-axis"/>
        <path d="M70 150 L310 150" className="ca-path-one"/><path d="M310 45 L310 150" className="ca-path-two"/><path d="M80 55 C180 75,210 110,310 150" className="ca-path-three"/><path d="M85 240 C195 220,245 190,310 150" className="ca-path-four"/>
        <circle cx="310" cy="150" r="7" className="ca-point"/><text x="320" y="170" className="ca-label">z₀</text><text x="90" y="137" className="ca-label">lintasan real</text><text x="320" y="65" className="ca-label">lintasan imajiner</text>
      </svg>
      <figcaption>Limit kompleks hanya ada jika semua cara mendekati <RichMath>{"$z_0$"}</RichMath> memberi nilai sama. Untuk <RichMath>{"$\\bar z/z$"}</RichMath>, lintasan real memberi 1 dan lintasan imajiner memberi −1.</figcaption>
    </figure>
  );
}

function DifferenceQuotientLab() {
  const [deg,setDeg]=useState(30), theta=deg*Math.PI/180, qx=Math.cos(-2*theta), qy=Math.sin(-2*theta), hx=Math.cos(theta),hy=Math.sin(theta);
  const cx=260,cy=155,r=105;
  const formula="$e^{-2i\\theta}\\approx "+qx.toFixed(3)+(qy>=0?"+":"")+qy.toFixed(3)+"i$";
  return (
    <section className="ca-lab">
      <div className="ca-lab-copy">
        <span className="eyebrow">Visualisasi Interaktif</span><h2>Kuosien beda bergantung arah untuk f(z)=z̄</h2>
        <p>Ambil <RichMath>{"$h=re^{i\\theta}$"}</RichMath>. Untuk fungsi konjugasi, <RichMath>{"$\\frac{\\overline h}{h}=e^{-2i\\theta}$"}</RichMath>. Nilainya berubah saat arah h berubah, jadi turunan kompleks tidak ada.</p>
        <label><span>Arah θ <strong>{deg}°</strong></span><input type="range" min="0" max="180" step="5" value={deg} onChange={e=>setDeg(Number(e.target.value))}/></label>
        <div className="ca-formula-chip"><RichMath>{formula}</RichMath></div>
      </div>
      <figure className="ca-svg-card">
        <svg viewBox="0 0 520 315" role="img" aria-label="Arah h dan nilai kuosien beda pada lingkaran satuan">
          <line x1="55" y1={cy} x2="465" y2={cy} className="ca-axis"/><line x1={cx} y1="25" x2={cx} y2="285" className="ca-axis"/><circle cx={cx} cy={cy} r={r} className="ca-unit-circle"/>
          <line x1={cx} y1={cy} x2={cx+r*hx} y2={cy-r*hy} className="ca-vector"/><line x1={cx} y1={cy} x2={cx+r*qx} y2={cy-r*qy} className="ca-vector-conj"/>
          <circle cx={cx+r*hx} cy={cy-r*hy} r="7" className="ca-point"/><circle cx={cx+r*qx} cy={cy-r*qy} r="7" className="ca-point-conj"/>
          <text x={cx+r*hx+9} y={cy-r*hy-7} className="ca-label">h</text><text x={cx+r*qx+9} y={cy-r*qy-7} className="ca-label">h̄/h</text>
        </svg>
        <figcaption>Arah pendekatan di bidang kompleks bersifat dua dimensi. Inilah alasan diferensiabilitas kompleks jauh lebih ketat.</figcaption>
      </figure>
    </section>
  );
}

function CRVisual() {
  const angle=-32*Math.PI/180,s=1.18,vx=[Math.cos(angle)*85*s,-Math.sin(angle)*85*s],vy=[Math.cos(angle+Math.PI/2)*85*s,-Math.sin(angle+Math.PI/2)*85*s];
  return (
    <div className="ca-visual-grid">
      <figure className="ca-figure">
        <div className="ca-figure-title"><span>Visualisasi</span><strong>Cauchy–Riemann dan konformalitas lokal</strong></div>
        <svg viewBox="0 0 420 280" role="img" aria-label="Dua vektor ortogonal diputar dan didilatasi">
          <line x1="45" y1="220" x2="180" y2="220" className="ca-axis"/><line x1="80" y1="250" x2="80" y2="75" className="ca-axis"/><line x1="80" y1="220" x2="155" y2="220" className="ca-grid-a"/><line x1="80" y1="220" x2="80" y2="145" className="ca-grid-b"/>
          <path d="M195 150 L230 150" className="ca-arrow"/><text x="202" y="135" className="ca-label">f′</text><line x1="255" y1="220" x2="390" y2="220" className="ca-axis"/><line x1="290" y1="250" x2="290" y2="75" className="ca-axis"/>
          <line x1="290" y1="220" x2={290+vx[0]} y2={220+vx[1]} className="ca-grid-a"/><line x1="290" y1="220" x2={290+vy[0]} y2={220+vy[1]} className="ca-grid-b"/>
        </svg>
        <figcaption>Jika <RichMath>{"$f'(z_0)\\ne0$"}</RichMath>, diferensial kompleks bertindak sebagai rotasi dan dilatasi; sudut lokal dipertahankan.</figcaption>
      </figure>
      <figure className="ca-figure">
        <div className="ca-figure-title"><span>Visualisasi</span><strong>Pemetaan eksponensial</strong></div>
        <svg viewBox="0 0 420 280" role="img" aria-label="Garis vertikal dipetakan ke lingkaran dan garis horizontal ke sinar">
          <line x1="30" y1="140" x2="185" y2="140" className="ca-axis"/><line x1="105" y1="35" x2="105" y2="245" className="ca-axis"/><line x1="75" y1="50" x2="75" y2="230" className="ca-grid-a"/><line x1="135" y1="50" x2="135" y2="230" className="ca-grid-a"/><line x1="42" y1="100" x2="170" y2="100" className="ca-grid-b"/><line x1="42" y1="185" x2="170" y2="185" className="ca-grid-b"/>
          <path d="M195 140 L225 140" className="ca-arrow"/><line x1="235" y1="140" x2="400" y2="140" className="ca-axis"/><line x1="315" y1="35" x2="315" y2="245" className="ca-axis"/><circle cx="315" cy="140" r="38" className="ca-map-curve-a"/><circle cx="315" cy="140" r="72" className="ca-map-curve-a"/><line x1="315" y1="140" x2="386" y2="95" className="ca-map-curve-b"/><line x1="315" y1="140" x2="372" y2="198" className="ca-map-curve-b"/>
        </svg>
        <figcaption>Untuk <RichMath>{"$w=e^{x+iy}=e^xe^{iy}$"}</RichMath>, garis <RichMath>{"$x=c$"}</RichMath> menjadi lingkaran dan garis <RichMath>{"$y=d$"}</RichMath> menjadi sinar.</figcaption>
      </figure>
    </div>
  );
}

function SectionVisual({ index }: { index:number }) {
  if(index===0) return <ComplexPlaneLab/>;
  if(index===1) return <RootsLab/>;
  if(index===2) return <TopologyVisual/>;
  if(index===3) return <SquareMapVisual/>;
  if(index===4) return <LimitPathsVisual/>;
  if(index===5) return <DifferenceQuotientLab/>;
  if(index===6) return <CRVisual/>;
  return null;
}

export function ComplexAnalysisPage({ material }: { material: DeepMaterial }) {
  const ids=useMemo(()=>complexAnalysisSections.map((_,i)=>"ca-section-"+(i+1)),[]);
  const [active,setActive]=useState(ids[0] ?? ""),[progress,setProgress]=useState(0);
  const stats=useMemo(()=>{
    const c={definition:0,theorem:0,lemma:0,proposition:0,corollary:0,example:0,exercise:0,note:0};
    for(const s of complexAnalysisSections)for(const b of [...s.blocks,...s.subsections.flatMap(x=>x.blocks)])if(b.kind in c)c[b.kind as keyof typeof c]++;
    return c;
  },[]);
  useEffect(()=>{
    const update=()=>{const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);setProgress(Math.min(100,Math.max(0,window.scrollY/max*100)));let cur=ids[0]??"";for(const id of ids){const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=160)cur=id;}setActive(cur)};
    update();window.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);return()=>{window.removeEventListener("scroll",update);window.removeEventListener("resize",update)};
  },[ids]);
  return (
    <div className="textbook-page ird-page ca-page" data-no-translate>
      <div className="reading-progress" aria-hidden="true"><span style={{width:progress+"%"}}/></div>
      <section className="chapter-hero textbook-hero ird-hero ca-hero"><div className="container narrow">
        <div className="breadcrumb"><Link href="/materi">Materi</Link><span>/</span><span>Kuliah</span><span>/</span><strong>Analisis Kompleks</strong></div>
        <div className="chapter-label-row"><span className="eyebrow">Analisis Kompleks · Bab Digital Lengkap</span><span className="chapter-edition">Teori formal + visualisasi interaktif</span></div>
        <h1>Analisis Kompleks</h1><p className="chapter-lead"><RichMath>{material.summary}</RichMath></p>
        <div className="chapter-meta textbook-meta"><span>8 bagian utama</span><span>Bilangan kompleks → Holomorfik</span><span>Menengah–Lanjut</span><span>Visual & formal</span></div>
        <div className="chapter-stat-grid"><div><strong>{stats.definition}</strong><span>definisi</span></div><div><strong>{stats.theorem+stats.lemma+stats.proposition+stats.corollary}</strong><span>hasil formal</span></div><div><strong>{stats.example}</strong><span>contoh</span></div><div><strong>{stats.exercise+complexAnalysisExercises.length}</strong><span>latihan</span></div></div>
        <div className="actions"><a className="btn primary" href="#ca-overview">Mulai Bab</a><a className="btn secondary" href="#ca-latihan30">30 Soal Tambahan</a></div>
      </div></section>
      <section id="ca-overview" className="section ird-overview ca-overview"><div className="container narrow">
        <span className="eyebrow">Peta Materi</span><h2>Dari geometri bidang kompleks menuju holomorfisitas.</h2>
        <p>Bab ini menghubungkan representasi geometris bilangan kompleks dengan topologi, limit dua dimensi, turunan kompleks, persamaan Cauchy–Riemann, fungsi holomorfik, fungsi elementer kompleks, dan fungsi harmonik.</p>
        <div className="ca-roadmap">{["Bilangan kompleks","Polar & akar","Topologi","Fungsi kompleks","Limit & kontinu","Turunan kompleks","Cauchy–Riemann","Latihan"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div>
        <ComplexPlaneLab/>
      </div></section>
      <section className="section textbook-section-shell"><div className="container article-layout textbook-layout">
        <aside className="toc material-toc textbook-toc ird-toc ca-toc"><div className="toc-progress-mini"><span>Progres membaca</span><strong>{Math.round(progress)}%</strong></div><strong>Isi Materi</strong>
          {complexAnalysisSections.map((s,i)=>{const id="ca-section-"+(i+1);return <a key={id} href={"#"+id} className={active===id?"active":""}><span>{String(i+1).padStart(2,"0")}</span>{s.title}</a>})}
          <a href="#ca-latihan30"><span>09</span>30 Latihan Tambahan</a>
        </aside>
        <article className="article deep-article textbook-article ird-article ca-article">
          {complexAnalysisSections.map((section,si)=><section id={"ca-section-"+(si+1)} className="book-section ird-source-section ca-source-section" key={section.title}>
            <div className="section-number">{String(si+1).padStart(2,"0")}</div><span className="eyebrow">Bagian {si+1}</span><h2>{section.title}</h2>
            {section.blocks.map((b,i)=><FormalBlock key={section.title+"b"+i} block={b} index={i}/>)}
            {section.subsections.map((sub,sj)=><div className="ca-subsection" key={sub.title}><div className="ca-subsection-kicker">{si+1}.{sj+1}</div><h3>{sub.title}</h3>{sub.blocks.map((b,i)=><FormalBlock key={sub.title+i} block={b} index={i}/>)}</div>)}
            {si>0 && <SectionVisual index={si}/>}
          </section>)}
          <section id="ca-latihan30" className="book-section ird-practice-section ca-practice-section"><div className="section-number">09</div><span className="eyebrow">Latihan Menengah–Menantang</span><h2>30 soal Analisis Kompleks</h2>
            <p>Seluruh soal dari lembar latihan tambahan disajikan satu per satu untuk latihan mandiri, dari operasi kompleks hingga fungsi harmonik dan Cauchy–Riemann.</p>
            <div className="ca-problem-grid">{complexAnalysisExercises.map((p,i)=><article className="ca-problem-card" key={i}><div className="ca-problem-number">{String(i+1).padStart(2,"0")}</div><div><strong>Soal {i+1}</strong><SourceText text={p}/></div></article>)}</div>
          </section>
          <section className="next-learning-block textbook-next"><div><span className="eyebrow">Lanjutkan</span><h2>Uji konsep dari banyak arah di bidang kompleks.</h2><p>Setelah membaca definisi dan pembuktian, gunakan latihan untuk menguji intuisi geometris sekaligus ketelitian formal.</p></div><div className="actions"><a className="btn primary" href="#ca-latihan30">Kerjakan Latihan</a><Link className="btn secondary" href="/materi">Materi Lain</Link></div></section>
        </article>
      </div></section>
    </div>
  );
}
