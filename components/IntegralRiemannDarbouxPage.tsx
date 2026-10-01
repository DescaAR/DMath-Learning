"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { DeepMaterial } from "@/data/deep-materials";
import {
  integralRiemannDarbouxExercises,
  integralRiemannDarbouxSections,
  type IntegralSourceBlock,
} from "@/data/integral-riemann-darboux";
import { RichMath } from "@/components/RichMath";

function SourceText({ text }: { text: string }) {
  return <RichMath className="ird-rich-text">{text}</RichMath>;
}

const kindNames: Record<string, string> = {
  definition: "Definisi",
  lemma: "Lemma",
  proposition: "Proposisi",
  theorem: "Teorema",
  corollary: "Akibat",
  note: "Catatan",
  example: "Contoh",
  exercise: "Soal",
  proof: "Pembuktian",
};

function FormalBlock({ block, index }: { block: IntegralSourceBlock; index: number }) {
  if (block.kind === "paragraph") {
    return (
      <div className="ird-paragraph">
        <SourceText text={block.text ?? ""} />
      </div>
    );
  }

  const label = kindNames[block.kind] ?? block.kind;
  const isExample = block.kind === "example";
  const isExercise = block.kind === "exercise";
  const title = block.title || label + " " + (index + 1);
  const body = block.body ?? "";
  const detail = isExample || isExercise ? block.solution : block.proof;

  return (
    <article className={"ird-formal ird-" + block.kind}>
      <div className="ird-formal-head">
        <span>{label}</span>
        <strong>{title}</strong>
      </div>
      <div className="ird-formal-body"><SourceText text={body} /></div>
      {detail && (
        <details className="ird-proof">
          <summary>{isExample || isExercise ? "Buka solusi" : "Buka pembuktian"}</summary>
          <div className="ird-proof-body">
            <SourceText text={detail} />
            {!isExample && !isExercise && <div className="ird-qed">■</div>}
          </div>
        </details>
      )}
    </article>
  );
}

function InteractiveRiemannDarboux() {
  const [n, setN] = useState(6);
  const width = 520;
  const x0 = 58;
  const y0 = 245;
  const plotW = 410;
  const plotH = 170;
  const dx = plotW / n;
  const lower = ((n - 1) * (2 * n - 1)) / (6 * n * n);
  const upper = ((n + 1) * (2 * n + 1)) / (6 * n * n);
  const curve = Array.from({ length: 80 }, (_, i) => {
    const t = i / 79;
    return [x0 + t * plotW, y0 - t * t * plotH];
  });

  return (
    <section className="ird-visual-lab" aria-label="Visualisasi interaktif jumlah Riemann dan Darboux">
      <div className="ird-visual-copy">
        <span className="eyebrow">Visualisasi Interaktif</span>
        <h2>Jumlah bawah, jumlah atas, dan limit luas</h2>
        <p>
          Untuk <RichMath>{"$f(x)=x^2$ pada $[0,1]$"}</RichMath>, partisi seragam dibuat semakin halus.
          Persegi panjang bawah memakai infimum tiap subinterval, sedangkan persegi panjang atas memakai supremum.
        </p>
        <label className="ird-slider">
          <span>Jumlah subinterval <strong>{n}</strong></span>
          <input type="range" min="2" max="16" value={n} onChange={(e)=>setN(Number(e.target.value))} />
        </label>
        <div className="ird-metric-grid">
          <div><span>Lower sum</span><strong>{lower.toFixed(5)}</strong></div>
          <div><span>Integral</span><strong>{(1/3).toFixed(5)}</strong></div>
          <div><span>Upper sum</span><strong>{upper.toFixed(5)}</strong></div>
          <div><span>Celah U − L</span><strong>{(1/n).toFixed(5)}</strong></div>
        </div>
      </div>
      <div className="ird-svg-card">
        <svg viewBox={"0 0 " + width + " 285"} role="img" aria-label="Perbandingan jumlah Darboux bawah dan atas untuk fungsi x kuadrat">
          <line x1={x0} y1={y0} x2={x0+plotW+18} y2={y0} className="ird-axis" />
          <line x1={x0} y1={y0+8} x2={x0} y2={52} className="ird-axis" />
          {Array.from({length:n},(_,i)=>{
            const left=i/n, right=(i+1)/n;
            const lowH=left*left*plotH;
            const upH=right*right*plotH;
            const x=x0+i*dx;
            return (
              <g key={i}>
                <rect x={x} y={y0-upH} width={dx} height={upH} className="ird-upper-rect" />
                <rect x={x} y={y0-lowH} width={dx} height={lowH} className="ird-lower-rect" />
              </g>
            );
          })}
          <polyline points={curve.map((p)=>p.join(",")).join(" ")} className="ird-curve" />
          <text x={x0+plotW-65} y="66" className="ird-svg-label">y = x²</text>
          <text x={x0-5} y={y0+26} className="ird-svg-label">0</text>
          <text x={x0+plotW-3} y={y0+26} className="ird-svg-label">1</text>
        </svg>
        <div className="ird-legend">
          <span><i className="ird-legend-low" /> lower rectangles</span>
          <span><i className="ird-legend-up" /> upper rectangles</span>
          <span><i className="ird-legend-curve" /> grafik fungsi</span>
        </div>
      </div>
    </section>
  );
}

function RefinementVisual() {
  const ticksA=[0,0.35,0.72,1];
  const ticksB=[0,0.18,0.35,0.52,0.72,0.86,1];
  return (
    <figure className="ird-figure">
      <div className="ird-figure-title"><span>Visualisasi</span><strong>Partisi penghalus</strong></div>
      <svg viewBox="0 0 620 210" role="img" aria-label="Partisi awal dan partisi penghalus pada interval">
        <text x="32" y="58" className="ird-svg-label">P</text>
        <line x1="80" y1="52" x2="570" y2="52" className="ird-axis" />
        {ticksA.map((t,i)=><g key={"a"+i}><line x1={80+t*490} y1="39" x2={80+t*490} y2="66" className="ird-tick" /><text x={80+t*490} y="84" textAnchor="middle" className="ird-svg-label">x{i}</text></g>)}
        <text x="32" y="145" className="ird-svg-label">Q</text>
        <line x1="80" y1="139" x2="570" y2="139" className="ird-axis" />
        {ticksB.map((t,i)=><line key={"b"+i} x1={80+t*490} y1="126" x2={80+t*490} y2="153" className={ticksA.includes(t) ? "ird-tick-strong" : "ird-tick"} />)}
        <path d="M 225 96 C 265 115, 320 115, 350 96" className="ird-arrow" />
        <text x="286" y="119" textAnchor="middle" className="ird-svg-label">titik baru</text>
      </svg>
      <figcaption>Refinement mempertahankan semua titik partisi lama dan menambah titik baru. Akibatnya <RichMath>{"$L(f,P)\\le L(f,Q)\\le U(f,Q)\\le U(f,P)$"}</RichMath>.</figcaption>
    </figure>
  );
}

function DiscontinuityVisual() {
  const thomae=[];
  for (let q=2;q<=10;q++) {
    for (let p=1;p<q;p++) {
      let a=p,b=q;
      while (b){ const t=a%b; a=b; b=t; }
      if (a===1) thomae.push({x:p/q,y:1/q});
    }
  }
  return (
    <div className="ird-visual-grid">
      <figure className="ird-figure compact">
        <div className="ird-figure-title"><span>Visualisasi</span><strong>Fungsi Dirichlet</strong></div>
        <svg viewBox="0 0 420 235" role="img" aria-label="Ilustrasi fungsi Dirichlet dengan nilai nol dan satu yang rapat">
          <line x1="38" y1="190" x2="390" y2="190" className="ird-axis" />
          <line x1="38" y1="28" x2="38" y2="195" className="ird-axis" />
          {Array.from({length:34},(_,i)=><circle key={"d1"+i} cx={48+i*10} cy={64+(i%3-1)*2} r="3" className="ird-dirichlet-one" />)}
          {Array.from({length:34},(_,i)=><circle key={"d0"+i} cx={53+i*10} cy={188-(i%2)*2} r="3" className="ird-dirichlet-zero" />)}
          <text x="18" y="69" className="ird-svg-label">1</text>
          <text x="18" y="194" className="ird-svg-label">0</text>
        </svg>
        <figcaption>Bilangan rasional dan irasional sama-sama rapat. Pada setiap subinterval, infimum bernilai 0 dan supremum bernilai 1.</figcaption>
      </figure>
      <figure className="ird-figure compact">
        <div className="ird-figure-title"><span>Visualisasi</span><strong>Fungsi Thomae</strong></div>
        <svg viewBox="0 0 420 235" role="img" aria-label="Titik fungsi Thomae dengan tinggi satu per penyebut">
          <line x1="38" y1="190" x2="390" y2="190" className="ird-axis" />
          <line x1="38" y1="28" x2="38" y2="195" className="ird-axis" />
          {thomae.map((pt,i)=><circle key={i} cx={45+pt.x*335} cy={190-pt.y*250} r={Math.max(2,4.5-pt.y*2)} className="ird-thomae-point" />)}
          <text x="54" y="43" className="ird-svg-label">tinggi = 1/q</text>
        </svg>
        <figcaption>Titik dengan penyebut kecil lebih tinggi, tetapi hanya sedikit. Di luar himpunan hingga tersebut, tinggi dapat dibuat sekecil yang diinginkan.</figcaption>
      </figure>
    </div>
  );
}

function OscillationVisual() {
  return (
    <figure className="ird-figure">
      <div className="ird-figure-title"><span>Visualisasi</span><strong>Osilasi lokal</strong></div>
      <svg viewBox="0 0 620 280" role="img" aria-label="Osilasi fungsi pada lingkungan sebuah titik">
        <rect x="238" y="36" width="150" height="202" className="ird-neighborhood" />
        <line x1="45" y1="230" x2="580" y2="230" className="ird-axis" />
        <line x1="60" y1="245" x2="60" y2="32" className="ird-axis" />
        <path d="M70 188 C120 132, 155 202, 208 126 C255 58, 300 172, 345 96 C392 28, 430 148, 475 103 C515 63, 545 108, 570 76" className="ird-curve" />
        <line x1="314" y1="52" x2="314" y2="215" className="ird-dashed" />
        <line x1="398" y1="70" x2="445" y2="70" className="ird-bracket" />
        <line x1="398" y1="168" x2="445" y2="168" className="ird-bracket" />
        <line x1="438" y1="70" x2="438" y2="168" className="ird-bracket" />
        <text x="452" y="123" className="ird-svg-label">ω</text>
        <text x="302" y="255" className="ird-svg-label">x₀</text>
      </svg>
      <figcaption>Osilasi mengukur selisih supremum dan infimum pada lingkungan yang makin kecil di sekitar <RichMath>{"$x_0$"}</RichMath>.</figcaption>
    </figure>
  );
}

function SectionVisual({ index }: { index: number }) {
  if (index === 1) return <RefinementVisual />;
  if (index === 3) return <InteractiveRiemannDarboux />;
  if (index === 6) return <DiscontinuityVisual />;
  if (index === 8) return <OscillationVisual />;
  return null;
}

export function IntegralRiemannDarbouxPage({ material }: { material: DeepMaterial }) {
  const sectionIds = useMemo(()=>integralRiemannDarbouxSections.map((_,i)=>"ird-section-"+(i+1)),[]);
  const [active,setActive]=useState("ird-section-1");
  const [progress,setProgress]=useState(0);

  const stats=useMemo(()=>{
    const counts={definition:0,theorem:0,lemma:0,proposition:0,corollary:0,example:0,exercise:0};
    for (const section of integralRiemannDarbouxSections) {
      const blocks=[...section.blocks,...section.subsections.flatMap((s)=>s.blocks)];
      for (const block of blocks) if (block.kind in counts) counts[block.kind as keyof typeof counts]++;
    }
    return counts;
  },[]);

  useEffect(()=>{
    const update=()=>{
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      setProgress(Math.min(100,Math.max(0,(window.scrollY/max)*100)));
      let current=sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el=document.getElementById(id);
        if (el && el.getBoundingClientRect().top<=160) current=id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return ()=>{window.removeEventListener("scroll",update);window.removeEventListener("resize",update);};
  },[sectionIds]);

  return (
    <div className="textbook-page ird-page" data-no-translate>
      <div className="reading-progress" aria-hidden="true"><span style={{width:progress+"%"}} /></div>

      <section className="chapter-hero textbook-hero ird-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/materi">Materi</Link><span>/</span><span>Kuliah</span><span>/</span><strong>Integral Riemann dan Darboux</strong>
          </div>
          <div className="chapter-label-row">
            <span className="eyebrow">Analisis Real · Bab Digital Lengkap</span>
            <span className="chapter-edition">Sumber materi terstruktur dari naskah LaTeX</span>
          </div>
          <h1>Integral Riemann dan Integral Darboux</h1>
          <p className="chapter-lead"><RichMath>{material.summary}</RichMath></p>
          <div className="chapter-meta textbook-meta">
            <span>10 bagian utama</span><span>Riemann + Darboux</span><span>Menengah–Lanjut</span><span>Visual & formal</span>
          </div>
          <div className="chapter-stat-grid">
            <div><strong>{stats.definition}</strong><span>definisi</span></div>
            <div><strong>{stats.theorem + stats.lemma + stats.proposition + stats.corollary}</strong><span>hasil formal</span></div>
            <div><strong>{stats.example}</strong><span>contoh terbahas</span></div>
            <div><strong>{integralRiemannDarbouxExercises.length}</strong><span>latihan tambahan</span></div>
          </div>
          <div className="actions">
            <a className="btn primary" href="#ird-overview">Mulai Bab</a>
            <a className="btn secondary" href="#ird-latihan30">Buka 30 Latihan</a>
          </div>
        </div>
      </section>

      <section id="ird-overview" className="section ird-overview">
        <div className="container narrow">
          <span className="eyebrow">Gambaran Besar</span>
          <h2>Dua jalan menuju konsep integral yang sama.</h2>
          <p>Riemann membangun integral dari titik sampel pada partisi bertanda, sedangkan Darboux membangun batas bawah dan batas atas melalui infimum serta supremum lokal. Bab ini mengembangkan kedua pendekatan secara formal sampai ekuivalensi, kelas fungsi integrabel, sifat-sifat integral, osilasi, dan Kriteria Lebesgue.</p>
          <div className="ird-roadmap">
            {["Fungsi terbatas","Partisi","Jumlah Riemann","Jumlah Darboux","Kriteria Darboux","Ekuivalensi","Kelas integrabel","Sifat integral","Osilasi","Kriteria Lebesgue"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}
          </div>
          <InteractiveRiemannDarboux />
        </div>
      </section>

      <section className="section textbook-section-shell">
        <div className="container article-layout textbook-layout">
          <aside className="toc material-toc textbook-toc ird-toc">
            <div className="toc-progress-mini"><span>Progres membaca</span><strong>{Math.round(progress)}%</strong></div>
            <strong>Isi Materi</strong>
            {integralRiemannDarbouxSections.map((section,index)=>{
              const id="ird-section-"+(index+1);
              return <a key={id} href={"#"+id} className={active===id?"active":""}><span>{String(index+1).padStart(2,"0")}</span>{section.title}</a>;
            })}
            <a href="#ird-latihan30"><span>11</span>30 Latihan Tambahan</a>
          </aside>

          <article className="article deep-article textbook-article ird-article">
            {integralRiemannDarbouxSections.map((section,sectionIndex)=>(
              <section id={"ird-section-"+(sectionIndex+1)} className="book-section ird-source-section" key={section.title}>
                <div className="section-number">{String(sectionIndex+1).padStart(2,"0")}</div>
                <span className="eyebrow">Bagian {sectionIndex+1}</span>
                <h2>{section.title}</h2>
                {section.blocks.map((block,index)=><FormalBlock key={section.title+"-b-"+index} block={block} index={index} />)}
                {section.subsections.map((sub,subIndex)=>(
                  <div className="ird-subsection" key={sub.title}>
                    <div className="ird-subsection-kicker">{sectionIndex+1}.{subIndex+1}</div>
                    <h3>{sub.title}</h3>
                    {sub.blocks.map((block,index)=><FormalBlock key={sub.title+"-"+index} block={block} index={index} />)}
                  </div>
                ))}
                <SectionVisual index={sectionIndex} />
              </section>
            ))}

            <section id="ird-latihan30" className="book-section ird-practice-section">
              <div className="section-number">11</div>
              <span className="eyebrow">Latihan Menengah–Menantang</span>
              <h2>30 soal Integral Riemann dan Darboux</h2>
              <p>Bagian ini memuat seluruh soal dari lembar latihan yang diberikan. Soal disajikan satu per satu agar dapat dipakai sebagai latihan mandiri.</p>
              <div className="ird-problem-grid">
                {integralRiemannDarbouxExercises.map((problem,index)=>(
                  <article className="ird-problem-card" key={index}>
                    <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                    <div><strong>Soal {index+1}</strong><SourceText text={problem} /></div>
                  </article>
                ))}
              </div>
            </section>

            <section className="next-learning-block textbook-next">
              <div>
                <span className="eyebrow">Lanjutkan</span>
                <h2>Gunakan definisi untuk membuktikan, bukan hanya menghitung.</h2>
                <p>Setelah memahami jumlah Riemann dan Darboux, uji kemampuan pada fungsi diskontinu, fungsi monoton, fungsi Thomae, sifat aljabar integral, serta kriteria osilasi.</p>
              </div>
              <div className="actions">
                <a className="btn primary" href="#ird-latihan30">Kerjakan Latihan</a>
                <Link className="btn secondary" href="/materi">Materi Lain</Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
