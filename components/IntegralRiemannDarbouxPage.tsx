"use client";

import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";
import type { DeepMaterial } from "@/data/deep-materials";
import {
  integralRiemannDarbouxExercises,
  integralRiemannDarbouxSections,
  type IntegralSourceBlock,
} from "@/data/integral-riemann-darboux";
import {
  integralRiemannArticleExercises,
  integralRiemannWorkedExercises,
  type IntegralWorkedExercise,
} from "@/data/integral-riemann-worked-exercises";
import { RichMath } from "@/components/RichMath";

function SourceText({ text }: { text: string }) {
  return <RichMath className="ird-rich-text">{text}</RichMath>;
}

function imperativeProblemText(text: string) {
  return text
    .replace(/^\s*Mengacu pada Capaian Pembelajaran Mata Kuliah \(CPMK\) ke-\d+\.?\s*/gim, "")
    .replace(/^\s*Mahasiswa mampu[^\n.]*\.?\s*/gim, "")
    .replace(/^\s*CPMK\s*ke-\d+\.?\s*/gim, "")
    .replace(/^\s*Mahasiswa diharapkan mampu[^\n.]*\.?\s*/gim, "")
    .replace(/^\s*\n+/g, "")
    .replace(/\bDibuktikan bahwa\b/g, "Buktikan bahwa")
    .replace(/\bDibuktikan\b/g, "Buktikan")
    .replace(/\bDitentukan\b/g, "Tentukan")
    .replace(/\bDitunjukkan\b/g, "Tunjukkan")
    .replace(/\bDihitung\b/g, "Hitung")
    .replace(/\bDijelaskan\b/g, "Jelaskan")
    .replace(/\bDiperiksa\b/g, "Periksa")
    .replace(/\bDiselidiki\b/g, "Selidiki")
    .replace(/\bDibentuk\b/g, "Bentuk")
    .replace(/\bDitetapkan\b/g, "Tetapkan")
    .replace(/\bDiberikan dua pernyataan berikut\b/g, "Perhatikan dua pernyataan berikut")
    .replace(/\bDiberikan\b/g, "Misalkan")
    .replace(/\bDidefinisikan\b/g, "Definisikan")
    .replace(/\bDipilih\b/g, "Pilih")
    .replace(/\bDiambil\b/g, "Ambil")
    .replace(/\bDigunakan\b/g, "Gunakan")
    .replace(/\bditentukan\b/g, "tentukan")
    .replace(/\bdibuktikan\b/g, "buktikan")
    .replace(/\bdijelaskan\b/g, "jelaskan")
    .replace(/\bdihitung\b/g, "hitung");
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
  const body = (isExercise || isExample) ? imperativeProblemText(block.body ?? "") : (block.body ?? "");
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
    <section className="ird-visual-lab" aria-label="Visualisasi jumlah Riemann dan Darboux">
      <div className="ird-visual-copy">
        <span className="eyebrow">Visualisasi</span>
        <h2>Jumlah Darboux bawah, jumlah Darboux atas, dan nilai integral</h2>
        <p>
          Untuk <RichMath>{"$f(x)=x^2$ pada $[0,1]$"}</RichMath>, partisi seragam dibuat semakin halus.
          Persegi panjang bawah memakai infimum tiap subinterval, sedangkan persegi panjang atas memakai supremum.
        </p>
        <label className="ird-slider">
          <span>Jumlah subinterval <strong>{n}</strong></span>
          <input type="range" min="2" max="16" value={n} onChange={(e)=>setN(Number(e.target.value))} />
        </label>
        <div className="ird-metric-grid">
          <div><span>Jumlah Darboux bawah</span><strong>{lower.toFixed(5)}</strong></div>
          <div><span>Integral</span><strong>{(1/3).toFixed(5)}</strong></div>
          <div><span>Jumlah Darboux atas</span><strong>{upper.toFixed(5)}</strong></div>
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
          <span><i className="ird-legend-low" /> persegi panjang bawah</span>
          <span><i className="ird-legend-up" /> persegi panjang atas</span>
          <span><i className="ird-legend-curve" /> grafik fungsi</span>
        </div>
      </div>
    </section>
  );
}


function PartitionLabelVisual() {
  const xs=[0,0.18,0.42,0.68,1];
  const labels=[0.09,0.31,0.55,0.86];
  return (
    <figure className="ird-figure">
      <div className="ird-figure-title"><span>Visualisasi</span><strong>Partisi dan titik label</strong></div>
      <svg viewBox="0 0 620 225" role="img" aria-label="Partisi interval dengan titik label pada setiap subinterval">
        <line x1="70" y1="112" x2="550" y2="112" className="ird-axis"/>
        {xs.map((p,i)=><g key={"x"+i}><line x1={70+p*480} y1="78" x2={70+p*480} y2="145" className="ird-tick-strong"/><text x={70+p*480} y="172" textAnchor="middle" className="ird-svg-label">x{i}</text></g>)}
        {labels.map((p,i)=><g key={"t"+i}><circle cx={70+p*480} cy="112" r="7" className="ird-ex-tag-point"/><text x={70+p*480} y="82" textAnchor="middle" className="ird-svg-label">t{i+1}</text></g>)}
      </svg>
      <figcaption>Setiap titik label <RichMath>{"$t_i$"}</RichMath> berada pada subinterval <RichMath>{"$[x_{i-1},x_i]$"}</RichMath>. Norma partisi ditentukan oleh subinterval terpanjang.</figcaption>
    </figure>
  );
}

function DarbouxIntegralVisual() {
  const [n,setN]=useState(6);
  const lower=((n-1)*(2*n-1))/(6*n*n);
  const upper=((n+1)*(2*n+1))/(6*n*n);
  return (
    <section className="ird-exercise-lab">
      <div className="ird-visual-copy">
        <span className="eyebrow">Visualisasi</span>
        <h3>Integral Darboux bawah dan integral Darboux atas</h3>
        <p>Untuk <RichMath>{"$f(x)=x^2$ pada $[0,1]$"}</RichMath>, jumlah Darboux bawah meningkat dan jumlah Darboux atas menurun menuju nilai yang sama.</p>
        <label className="ird-slider"><span>Jumlah subinterval <strong>{n}</strong></span><input type="range" min="2" max="40" value={n} onChange={e=>setN(Number(e.target.value))}/></label>
        <div className="ird-metric-grid">
          <div><span>L(f,Pₙ)</span><strong>{lower.toFixed(6)}</strong></div>
          <div><span>Integral Darboux bawah</span><strong>{(1/3).toFixed(6)}</strong></div>
          <div><span>U(f,Pₙ)</span><strong>{upper.toFixed(6)}</strong></div>
          <div><span>Integral Darboux atas</span><strong>{(1/3).toFixed(6)}</strong></div>
        </div>
      </div>
      <div className="ird-darboux-integral-panel">
        <div className="ird-bound-row"><span>Jumlah bawah</span><div><i style={{width:(lower/(1/3)*100)+"%"}}/></div><strong>{lower.toFixed(4)}</strong></div>
        <div className="ird-bound-row exact"><span>Nilai bersama</span><div><i style={{width:"100%"}}/></div><strong><RichMath>{"$\\frac{1}{3}$"}</RichMath></strong></div>
        <div className="ird-bound-row"><span>Jumlah atas</span><div><i style={{width:((1/3)/upper*100)+"%"}}/></div><strong>{upper.toFixed(4)}</strong></div>
        <div className="ird-definition-pair">
          <RichMath>{"$\\underline{\\int_0^1}x^2\\,d x=\\sup_P L(f,P)=\\frac{1}{3}$"}</RichMath>
          <RichMath>{"$\\overline{\\int_0^1}x^2\\,d x=\\inf_P U(f,P)=\\frac{1}{3}$"}</RichMath>
        </div>
      </div>
    </section>
  );
}

function EquivalenceVisual() {
  return (
    <figure className="ird-figure">
      <div className="ird-figure-title"><span>Visualisasi</span><strong>Hubungan jumlah Riemann dan jumlah Darboux</strong></div>
      <div className="ird-equivalence-flow">
        <div><strong>Jumlah Darboux bawah</strong><RichMath>{"$L(f,P)$"}</RichMath></div>
        <span>≤</span>
        <div><strong>Jumlah Riemann</strong><RichMath>{"$S(f,\\dot P)$"}</RichMath></div>
        <span>≤</span>
        <div><strong>Jumlah Darboux atas</strong><RichMath>{"$U(f,P)$"}</RichMath></div>
      </div>
      <figcaption>Ketika selisih <RichMath>{"$U(f,P)-L(f,P)$"}</RichMath> menuju nol, jumlah Riemann terjepit menuju nilai integral yang sama.</figcaption>
    </figure>
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
      <figcaption>Penghalusan partisi mempertahankan semua titik partisi lama dan menambah titik baru. Akibatnya <RichMath>{"$L(f,P)\\le L(f,Q)\\le U(f,Q)\\le U(f,P)$"}</RichMath>.</figcaption>
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

function FundamentalTheoremVisual() {
  const [x,setX]=useState(1.4);
  const f=(t:number)=>t*t;
  const F=(t:number)=>t*t*t/3;
  const x0=58,y0=238,pw=490,ph=185;
  const xp=(t:number)=>x0+t/2*pw;
  const yp=(v:number)=>y0-v/4*ph;
  const curve=Array.from({length:121},(_,i)=>{const t=2*i/120;return [xp(t),yp(f(t))]});
  const areaPts=Array.from({length:Math.max(2,Math.floor(x/2*120)+1)},(_,i)=>{
    const n=Math.max(1,Math.floor(x/2*120));
    const t=x*i/n;
    return [xp(t),yp(f(t))];
  });
  const area=[[xp(0),y0],...areaPts,[xp(x),y0]].map(p=>p.join(",")).join(" ");
  const h=0.001;
  const numericalSlope=(F(x+h)-F(x-h))/(2*h);

  return (
    <section className="ird-exercise-lab">
      <div className="ird-visual-copy">
        <span className="eyebrow">Visualisasi Interaktif</span>
        <h3>Teorema Fundamental Kalkulus I</h3>
        <p>
          Untuk <RichMath>{"$f(t)=t^2$"}</RichMath>, fungsi akumulasi
          <RichMath>{" $F(x)=\\int_0^x t^2\\,d t=\\frac{x^3}{3}$ "}</RichMath>
          mempunyai kemiringan <RichMath>{"$F'(x)=f(x)$"}</RichMath>.
        </p>
        <label className="ird-slider">
          <span>Posisi <strong>x = {x.toFixed(2)}</strong></span>
          <input type="range" min="0.10" max="2" step="0.05" value={x} onChange={e=>setX(Number(e.target.value))}/>
        </label>
        <div className="ird-metric-grid">
          <div><span>f(x)</span><strong>{f(x).toFixed(4)}</strong></div>
          <div><span>F(x)</span><strong>{F(x).toFixed(4)}</strong></div>
          <div><span>F′(x) numerik</span><strong>{numericalSlope.toFixed(4)}</strong></div>
          <div><span>Selisih |F′−f|</span><strong>{Math.abs(numericalSlope-f(x)).toExponential(1)}</strong></div>
        </div>
      </div>
      <figure className="ird-svg-card">
        <svg viewBox="0 0 610 300" role="img" aria-label="Luas akumulasi di bawah kurva t kuadrat sampai x">
          <line x1={x0} y1={y0} x2={x0+pw+15} y2={y0} className="ird-axis"/>
          <line x1={x0} y1={y0+8} x2={x0} y2="35" className="ird-axis"/>
          <polygon points={area} className="ird-area-fill"/>
          <polyline points={curve.map(p=>p.join(",")).join(" ")} className="ird-curve"/>
          <line x1={xp(x)} y1="42" x2={xp(x)} y2={y0} className="ird-current-x"/>
          <circle cx={xp(x)} cy={yp(f(x))} r="6" className="ird-ex-label-point"/>
          <text x={xp(x)} y="263" textAnchor="middle" className="ird-svg-label">x</text>
          <text x={xp(x)+10} y={yp(f(x))-10} className="ird-svg-label">f(x)</text>
        </svg>
        <figcaption>
          Daerah yang diarsir menyatakan <RichMath>{"$F(x)=\\int_0^x f(t)\\,d t$"}</RichMath>.
          Ketika batas kanan bergerak sedikit, perubahan luas per satuan perubahan $x$ mendekati tinggi kurva $f(x)$.
        </figcaption>
      </figure>
    </section>
  );
}

function OscillationVisual() {
  return (
    <figure className="ird-figure">
      <div className="ird-figure-title"><span>Visualisasi</span><strong>Osilasi lokal</strong></div>
      <svg viewBox="0 0 620 280" role="img" aria-label="Osilasi fungsi pada persekitaran sebuah titik">
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
      <figcaption>Osilasi mengukur selisih supremum dan infimum pada persekitaran yang makin kecil di sekitar <RichMath>{"$x_0$"}</RichMath>.</figcaption>
    </figure>
  );
}


function splitLetteredSolution(text: string) {
  const matches=[...text.matchAll(/(?:^|\n)\(([a-z])\)\s*/g)];
  if(!matches.length) return {prefix:text.trim(),parts:{} as Record<string,string>};
  const prefix=text.slice(0,matches[0].index ?? 0).trim();
  const parts:Record<string,string>={};
  matches.forEach((m,index)=>{
    const start=(m.index ?? 0)+m[0].length;
    const end=index+1<matches.length ? (matches[index+1].index ?? text.length) : text.length;
    parts[m[1]]=text.slice(start,end).trim();
  });
  return {prefix,parts};
}

function WorkedSolution({ exercise }: { exercise: IntegralWorkedExercise }) {
  const goals=exercise.solutionGoals ?? [];
  if(!goals.length) return <SourceText text={exercise.solution}/>;
  const split=splitLetteredSolution(exercise.solution);
  return (
    <>
      {split.prefix && <div className="ird-solution-prefix"><SourceText text={split.prefix}/></div>}
      {goals.map((goal)=>(
        <section className="ird-solution-part" key={goal.label}>
          <div className="ird-solution-goal"><strong><SourceText text={"("+goal.label+") "+goal.text}/></strong></div>
          <SourceText text={split.parts[goal.label] ?? ""}/>
        </section>
      ))}
    </>
  );
}

function TaggedPartitionExerciseVisual() {
  const xs=[-5,-4,-2,0,2,5], tags=[-4.5,-3,-1,1,3.5];
  const cx=310, cy=178, sx=48, sy=28;
  const f=(x:number)=>Math.abs(x)-1;
  const curve=Array.from({length:121},(_,i)=>{const x=-5+10*i/120;return [cx+x*sx,cy-f(x)*sy]});
  return (
    <figure className="ird-exercise-visual">
      <div className="ird-figure-title"><span>Visualisasi Soal 1</span><strong>Partisi berlabel tidak seragam</strong></div>
      <svg viewBox="0 0 620 330" role="img" aria-label="Partisi berlabel tidak seragam pada grafik nilai mutlak">
        <line x1="45" y1={cy} x2="575" y2={cy} className="ird-axis"/>
        <line x1={cx} y1="35" x2={cx} y2="285" className="ird-axis"/>
        {xs.map((x,i)=><g key={x}><line x1={cx+x*sx} y1="45" x2={cx+x*sx} y2="275" className="ird-ex-partition-line"/><text x={cx+x*sx} y="302" textAnchor="middle" className="ird-svg-label">{x}</text>{i<xs.length-1&&<text x={cx+(x+xs[i+1])*sx/2} y="322" textAnchor="middle" className="ird-svg-label">Δ={xs[i+1]-x}</text>}</g>)}
        <polyline points={curve.map(p=>p.join(",")).join(" ")} className="ird-curve"/>
        {tags.map((t,i)=><g key={t}><circle cx={cx+t*sx} cy={cy-f(t)*sy} r="6" className="ird-ex-label-point"/><text x={cx+t*sx} y={cy-f(t)*sy-12} textAnchor="middle" className="ird-svg-label">t{i+1}</text></g>)}
      </svg>
      <figcaption>Panjang subinterval adalah 1, 2, 2, 2, dan 3. Norma partisi ditentukan oleh panjang terbesar, yaitu <RichMath>{"$\\lVert P\\rVert=3$"}</RichMath>. Titik biru menunjukkan label yang dipakai pada jumlah Riemann.</figcaption>
    </figure>
  );
}

function ParabolaDarbouxExerciseVisual() {
  const [n,setN]=useState(8);
  const f=(x:number)=>6*x-x*x;
  const dx=6/n;
  const x0=58,y0=252,pw=470,ph=190;
  const rects=Array.from({length:n},(_,i)=>{
    const l=i*dx,r=(i+1)*dx;
    const fl=f(l),fr=f(r);
    const low=Math.min(fl,fr);
    const high=l<=3&&3<=r ? 9 : Math.max(fl,fr);
    return {l,r,low,high};
  });
  const lower=rects.reduce((s,q)=>s+q.low*dx,0);
  const upper=rects.reduce((s,q)=>s+q.high*dx,0);
  const curve=Array.from({length:121},(_,i)=>{const x=6*i/120;return [x0+x/6*pw,y0-f(x)/9*ph]});
  return (
    <section className="ird-exercise-lab">
      <div className="ird-visual-copy">
        <span className="eyebrow">Visualisasi Soal 4</span>
        <h3>Jumlah Darboux untuk <RichMath>{"$f(x)=6x-x^2$"}</RichMath></h3>
        <p>Ubah banyak subinterval seragam. Jumlah Darboux bawah naik dan jumlah atas turun menuju nilai integral yang sama.</p>
        <label className="ird-slider"><span>Jumlah subinterval <strong>{n}</strong></span><input type="range" min="7" max="24" value={n} onChange={e=>setN(Number(e.target.value))}/></label>
        <div className="ird-metric-grid">
          <div><span>L(f,Pₙ)</span><strong>{lower.toFixed(4)}</strong></div>
          <div><span>∫₀⁶ f</span><strong>36.0000</strong></div>
          <div><span>U(f,Pₙ)</span><strong>{upper.toFixed(4)}</strong></div>
          <div><span>U − L</span><strong>{(upper-lower).toFixed(4)}</strong></div>
        </div>
      </div>
      <div className="ird-svg-card">
        <svg viewBox="0 0 590 300" role="img" aria-label="Lower dan upper Darboux rectangles pada parabola">
          <line x1={x0} y1={y0} x2={x0+pw+12} y2={y0} className="ird-axis"/><line x1={x0} y1={y0+8} x2={x0} y2="42" className="ird-axis"/>
          {rects.map((q,i)=>{const x=x0+q.l/6*pw,w=dx/6*pw;return <g key={i}><rect x={x} y={y0-q.high/9*ph} width={w} height={q.high/9*ph} className="ird-upper-rect"/><rect x={x} y={y0-q.low/9*ph} width={w} height={q.low/9*ph} className="ird-lower-rect"/></g>})}
          <polyline points={curve.map(p=>p.join(",")).join(" ")} className="ird-curve"/>
          <text x={x0+pw/2} y="36" textAnchor="middle" className="ird-svg-label">maksimum di x=3</text>
        </svg>
      </div>
    </section>
  );
}

function StepDarbouxExerciseVisual() {
  const [delta,setDelta]=useState(0.25);
  const x0=65,y0=230,pw=460;
  const xp=(x:number)=>x0+x/2*pw;
  return (
    <section className="ird-exercise-lab">
      <div className="ird-visual-copy">
        <span className="eyebrow">Visualisasi Soal 6</span>
        <h3>Fungsi tangga dan satu titik lompatan</h3>
        <p>Partisi dipadatkan di sekitar <RichMath>{"$x=1$"}</RichMath>. Hanya subinterval kecil di sekitar titik lompatan yang menghasilkan selisih upper–jumlah bawah.</p>
        <label className="ird-slider"><span>Nilai δ <strong>{delta.toFixed(2)}</strong></span><input type="range" min="0.05" max="0.60" step="0.05" value={delta} onChange={e=>setDelta(Number(e.target.value))}/></label>
        <div className="ird-metric-grid"><div><span>Celah U − L</span><strong>{delta.toFixed(2)}</strong></div><div><span>Nilai integral</span><strong>3</strong></div></div>
      </div>
      <div className="ird-svg-card">
        <svg viewBox="0 0 590 290" role="img" aria-label="Fungsi tangga dengan partisi di sekitar titik diskontinuitas">
          <line x1={x0} y1={y0} x2={x0+pw+12} y2={y0} className="ird-axis"/><line x1={x0} y1={y0} x2={x0} y2="45" className="ird-axis"/>
          <line x1={xp(0)} y1="78" x2={xp(1)} y2="78" className="ird-step-high"/><circle cx={xp(1)} cy="78" r="6" className="ird-open-point"/>
          <line x1={xp(1)} y1="150" x2={xp(2)} y2="150" className="ird-step-low"/><circle cx={xp(1)} cy="150" r="6" className="ird-filled-point"/>
          {[0,1-delta,1,2].map(v=><g key={v}><line x1={xp(v)} y1="55" x2={xp(v)} y2={y0} className="ird-ex-partition-line"/><text x={xp(v)} y="252" textAnchor="middle" className="ird-svg-label">{v===1-delta?"1−δ":v}</text></g>)}
          <rect x={xp(1-delta)} y="78" width={xp(1)-xp(1-delta)} height="72" className="ird-jump-strip"/>
        </svg>
        <div className="ird-legend"><span><i className="ird-legend-up"/>bagian dengan osilasi</span><span>Ketika δ → 0, celah Darboux → 0.</span></div>
      </div>
    </section>
  );
}

function PiecewisePartitionExerciseVisual() {
  const x0=60,y0=248,pw=475,sy=44;
  const xp=(x:number)=>x0+x/4*pw;
  const yp=(y:number)=>y0-y*sy;
  const left=Array.from({length:41},(_,i)=>{const x=2*i/40;return [xp(x),yp(x+2)]});
  const right=Array.from({length:41},(_,i)=>{const x=2+2*i/40;return [xp(x),yp(4-x)]});
  const parts=[0,1,1.5,2.5,3.5,4];
  return (
    <figure className="ird-exercise-visual">
      <div className="ird-figure-title"><span>Visualisasi Soal 12</span><strong>Partisi pada fungsi piecewise</strong></div>
      <svg viewBox="0 0 600 330" role="img" aria-label="Fungsi piecewise dan partisi untuk menghitung upper dan lower Darboux sum">
        <line x1={x0} y1={y0} x2={x0+pw+15} y2={y0} className="ird-axis"/><line x1={x0} y1={y0+8} x2={x0} y2="38" className="ird-axis"/>
        {parts.map(v=><g key={v}><line x1={xp(v)} y1="48" x2={xp(v)} y2={y0} className="ird-ex-partition-line"/><text x={xp(v)} y="273" textAnchor="middle" className="ird-svg-label">{v}</text></g>)}
        <rect x={xp(1.5)} y={yp(4)} width={xp(2.5)-xp(1.5)} height={yp(1.5)-yp(4)} className="ird-highlight-interval"/>
        <polyline points={left.map(p=>p.join(",")).join(" ")} className="ird-piece-left"/><polyline points={right.map(p=>p.join(",")).join(" ")} className="ird-piece-right"/>
        <circle cx={xp(2)} cy={yp(4)} r="6" className="ird-filled-point"/><circle cx={xp(2)} cy={yp(2)} r="6" className="ird-open-point"/>
        <text x={xp(2)+10} y={yp(4)-10} className="ird-svg-label">f(2)=4</text><text x={xp(2.5)+8} y={yp(1.5)} className="ird-svg-label">m₃</text>
      </svg>
      <figcaption>Subinterval <RichMath>{"$[\\frac{3}{2},\\frac{5}{2}]$"}</RichMath> melintasi titik perubahan rumus. Di sini supremum adalah 4, sedangkan infimum adalah <RichMath>{"$\\frac{3}{2}$"}</RichMath>; interval ini paling penting ketika menyusun <RichMath>{"$U(f,P)$"}</RichMath> dan <RichMath>{"$L(f,P)$"}</RichMath>.</figcaption>
    </figure>
  );
}

function AccumulatedIntegralExerciseVisual() {
  const [x,setX]=useState(2);
  const F=(t:number)=>t<=2 ? 0.5*t*t+2*t : 4*t-0.5*t*t;
  const f=(t:number)=>t<=2 ? t+2 : 4-t;
  const x0=60,y0=245,pw=470,sy=43,xp=(t:number)=>x0+t/4*pw,yp=(v:number)=>y0-v*sy;
  const pts=Array.from({length:101},(_,i)=>{const t=4*i/100;return [xp(t),yp(f(t))]});
  const area=Array.from({length:Math.max(2,Math.floor(x/4*100)+1)},(_,i)=>{const t=x*i/(Math.max(1,Math.floor(x/4*100)));return [xp(t),yp(f(t))]});
  const poly=[[xp(0),y0],...area,[xp(x),y0]].map(p=>p.join(",")).join(" ");
  return (
    <section className="ird-exercise-lab">
      <div className="ird-visual-copy">
        <span className="eyebrow">Visualisasi Soal 13</span>
        <h3>Fungsi akumulasi <RichMath>{"$F(x)=\\int_0^x f(t)\\,dt$"}</RichMath></h3>
        <p>Geser nilai x untuk melihat luas bertanda yang terakumulasi. Rumus F berubah di x=2, tetapi kedua cabang memiliki nilai yang sama di titik tersebut.</p>
        <label className="ird-slider"><span>Nilai x <strong>{x.toFixed(2)}</strong></span><input type="range" min="0" max="4" step="0.05" value={x} onChange={e=>setX(Number(e.target.value))}/></label>
        <div className="ird-metric-grid"><div><span>F(x)</span><strong>{F(x).toFixed(4)}</strong></div><div><span>F(2)</span><strong>6.0000</strong></div></div>
      </div>
      <div className="ird-svg-card">
        <svg viewBox="0 0 590 300" role="img" aria-label="Luas terakumulasi di bawah fungsi piecewise">
          <line x1={x0} y1={y0} x2={x0+pw+12} y2={y0} className="ird-axis"/><line x1={x0} y1={y0+8} x2={x0} y2="38" className="ird-axis"/>
          <polygon points={poly} className="ird-area-fill"/>
          <polyline points={pts.map(p=>p.join(",")).join(" ")} className="ird-curve"/>
          <line x1={xp(x)} y1="45" x2={xp(x)} y2={y0} className="ird-current-x"/><text x={xp(x)} y="272" textAnchor="middle" className="ird-svg-label">x</text>
          <line x1={xp(2)} y1="45" x2={xp(2)} y2={y0} className="ird-dashed"/><text x={xp(2)+8} y="58" className="ird-svg-label">x=2</text>
        </svg>
      </div>
    </section>
  );
}

function WorkedExerciseVisual({ exercise }: { exercise: IntegralWorkedExercise }) {
  if (exercise.visual === "tagged-partition") return <TaggedPartitionExerciseVisual/>;
  if (exercise.visual === "parabola-darboux") return <ParabolaDarbouxExerciseVisual/>;
  if (exercise.visual === "step-darboux") return <StepDarbouxExerciseVisual/>;
  if (exercise.visual === "piecewise-partition") return <PiecewisePartitionExerciseVisual/>;
  if (exercise.visual === "accumulated-integral") return <AccumulatedIntegralExerciseVisual/>;
  return null;
}

function SubsectionVisual({ sectionIndex, subIndex, subTitle }: { sectionIndex:number; subIndex:number; subTitle:string }) {
  if (sectionIndex===1 && subIndex===1) return <PartitionLabelVisual/>;
  if (sectionIndex===3 && subIndex===0) return <InteractiveRiemannDarboux/>;
  if (sectionIndex===3 && subIndex===1) return <RefinementVisual/>;
  if (sectionIndex===5 && subIndex===0) return <EquivalenceVisual/>;
  if (subTitle==="Fungsi Dirichlet dan Thomae") return <DiscontinuityVisual/>;
  return null;
}
function DirectSectionVisual({ sectionIndex, sectionTitle }: { sectionIndex:number; sectionTitle:string }) {
  if (sectionIndex===4) return <DarbouxIntegralVisual/>;
  if (sectionTitle==="Teorema Fundamental Kalkulus dan Konsekuensinya") return <FundamentalTheoremVisual/>;
  if (sectionTitle==="Osilasi dan Kriteria Lebesgue") return <OscillationVisual/>;
  return null;
}

export function IntegralRiemannDarbouxPage({ material }: { material: DeepMaterial }) {
  const sectionIds = useMemo(()=>[
    ...integralRiemannDarbouxSections.map((_,i)=>"ird-section-"+(i+1)),
    "ird-ringkasan",
    "ird-latihan-artikel",
    "ird-latihan-soal",
    "ird-latihan30",
  ],[]);
  const [active,setActive]=useState("ird-section-1");
  const [progress,setProgress]=useState(0);
  const summarySectionNumber=integralRiemannDarbouxSections.length+1;
  const articlePracticeSectionNumber=integralRiemannDarbouxSections.length+2;
  const practiceSectionNumber=integralRiemannDarbouxSections.length+3;
  const extraPracticeSectionNumber=integralRiemannDarbouxSections.length+4;

  const stats=useMemo(()=>{
    const counts={definition:0,theorem:0,lemma:0,proposition:0,corollary:0,example:0,exercise:0};
    for (const section of integralRiemannDarbouxSections) {
      const blocks=[...section.blocks,...section.subsections.flatMap((s)=>s.blocks)];
      for (const block of blocks) if (block.kind in counts) counts[block.kind as keyof typeof counts]++;
    }
    return counts;
  },[]);

  const formalSummary=useMemo(()=>{
    const definitions:IntegralSourceBlock[]=[];
    const theorems:IntegralSourceBlock[]=[];
    for (const section of integralRiemannDarbouxSections) {
      const blocks=[...section.blocks,...section.subsections.flatMap((s)=>s.blocks)];
      for (const block of blocks) {
        if (block.kind==="definition") definitions.push(block);
        if (block.kind==="theorem") theorems.push(block);
      }
    }
    return {definitions,theorems};
  },[]);

  useEffect(()=>{
    const updateProgress=()=>{
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      setProgress(Math.min(100,Math.max(0,(window.scrollY/max)*100)));
    };
    updateProgress();
    window.addEventListener("scroll",updateProgress,{passive:true});
    window.addEventListener("resize",updateProgress);
    const observer=new IntersectionObserver((entries)=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>Math.abs(a.boundingClientRect.top-120)-Math.abs(b.boundingClientRect.top-120));
      if(visible[0]) setActive(visible[0].target.id);
    },{rootMargin:"-110px 0px -62% 0px",threshold:[0,0.01,0.2]});
    sectionIds.forEach(id=>{const el=document.getElementById(id);if(el)observer.observe(el);});
    return()=>{observer.disconnect();window.removeEventListener("scroll",updateProgress);window.removeEventListener("resize",updateProgress);};
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
            <span className="eyebrow">Analisis Real · Materi Lengkap</span>

          </div>
          <h1>Integral Riemann dan Integral Darboux</h1>
          <p className="chapter-lead"><RichMath>{material.summary}</RichMath></p>
          <div className="chapter-meta textbook-meta">
            <span>{integralRiemannDarbouxSections.length} bagian materi + latihan</span><span>Riemann + Darboux</span><span>Menengah–Lanjut</span><span>Visual & formal</span>
          </div>
          <div className="chapter-stat-grid">
            <div><strong>{stats.definition}</strong><span>definisi</span></div>
            <div><strong>{stats.theorem + stats.lemma + stats.proposition + stats.corollary}</strong><span>hasil formal</span></div>
            <div><strong>{stats.example}</strong><span>contoh terbahas</span></div>
            <div><strong>{integralRiemannArticleExercises.length + integralRiemannWorkedExercises.length}</strong><span>latihan dengan pembahasan</span></div>
          </div>
          <div className="actions">
            <a className="btn primary" href="#ird-section-1">Mulai Bab</a>
            <a className="btn secondary" href="#ird-ringkasan">Ringkasan & Latihan</a>
          </div>
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
            <a href="#ird-ringkasan" className={active==="ird-ringkasan"?"active":""}><span>{String(summarySectionNumber).padStart(2,"0")}</span>Ringkasan Definisi & Teorema</a>
            <a href="#ird-latihan-artikel" className={active==="ird-latihan-artikel"?"active":""}><span>{String(articlePracticeSectionNumber).padStart(2,"0")}</span>15 Latihan Tambahan</a>
            <a href="#ird-latihan-soal" className={active==="ird-latihan-soal"?"active":""}><span>{String(practiceSectionNumber).padStart(2,"0")}</span>16 Latihan Soal</a>
            <a href="#ird-latihan30" className={active==="ird-latihan30"?"active":""}><span>{String(extraPracticeSectionNumber).padStart(2,"0")}</span>30 Latihan Tambahan</a>
          </aside>

          <article className="article deep-article textbook-article ird-article">
            {integralRiemannDarbouxSections.map((section,sectionIndex)=>(
              <section id={"ird-section-"+(sectionIndex+1)} className="book-section ird-source-section" key={section.title}>
                <div className="section-number">{String(sectionIndex+1).padStart(2,"0")}</div>
                <span className="eyebrow">Bagian {sectionIndex+1}</span>
                <h2>{section.title}</h2>
                {section.blocks.map((block,index)=>(
                  <Fragment key={section.title+"-b-"+index}>
                    <FormalBlock block={block} index={index} />
                  </Fragment>
                ))}
                <DirectSectionVisual sectionIndex={sectionIndex} sectionTitle={section.title} />
                {section.subsections.map((sub,subIndex)=>(
                  <div className="ird-subsection" key={sub.title}>
                    <h3>{sub.title}</h3>
                    {sub.blocks.map((block,index)=><FormalBlock key={sub.title+"-"+index} block={block} index={index} />)}
                    <SubsectionVisual sectionIndex={sectionIndex} subIndex={subIndex} subTitle={sub.title} />
                  </div>
                ))}
              </section>
            ))}

            <section id="ird-ringkasan" className="book-section ird-summary-section">
              <div className="section-number">{String(summarySectionNumber).padStart(2,"0")}</div>
              <span className="eyebrow">Ringkasan Materi</span>
              <h2>Ringkasan Definisi dan Teorema</h2>
              <p>Bagian ini merangkum seluruh definisi dan teorema pada materi Integral Riemann dan Darboux. Pernyataan ditampilkan tanpa pembuktian agar dapat digunakan sebagai tinjauan cepat sebelum mengerjakan latihan soal.</p>

              <div className="ird-summary-group">
                <div className="ird-summary-heading">
                  <div>
                    <span className="eyebrow">Definisi</span>
                    <h3>{formalSummary.definitions.length} definisi penting</h3>
                  </div>
                </div>
                <div className="ird-summary-grid">
                  {formalSummary.definitions.map((block,index)=>(
                    <details className="ird-summary-card ird-summary-definition" key={"def-"+index}>
                      <summary>
                        <span>Definisi {index+1}</span>
                        <strong>{block.title || "Definisi"}</strong>
                      </summary>
                      <div className="ird-summary-body"><SourceText text={block.body ?? ""} /></div>
                    </details>
                  ))}
                </div>
              </div>

              <div className="ird-summary-group">
                <div className="ird-summary-heading">
                  <div>
                    <span className="eyebrow">Teorema</span>
                    <h3>{formalSummary.theorems.length} teorema penting</h3>
                  </div>
                </div>
                <div className="ird-summary-grid">
                  {formalSummary.theorems.map((block,index)=>(
                    <details className="ird-summary-card ird-summary-theorem" key={"thm-"+index}>
                      <summary>
                        <span>Teorema {index+1}</span>
                        <strong>{block.title || "Teorema"}</strong>
                      </summary>
                      <div className="ird-summary-body"><SourceText text={block.body ?? ""} /></div>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            <section id="ird-latihan-artikel" className="book-section ird-practice-section">
              <div className="section-number">{String(articlePracticeSectionNumber).padStart(2,"0")}</div>
              <span className="eyebrow">Latihan Soal dan Solusi</span>
              <h2>{integralRiemannArticleExercises.length} latihan tambahan Integral Riemann dan Darboux</h2>
              <p>Latihan berikut memperkuat pemahaman konsep, pembuktian, dan perhitungan Integral Riemann dan Darboux. Setiap soal dilengkapi solusi terstruktur.</p>
              <div className="ird-worked-grid">
                {integralRiemannArticleExercises.map((exercise,index)=>(
                  <div className="ird-worked-wrap" key={exercise.title ?? index}>
                    <article className="ird-worked-card">
                      <div className="ird-worked-head">
                        <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                        <div><span className="eyebrow">Latihan Soal</span><h3>Soal {index+1}</h3></div>
                      </div>
                      <div className="ird-worked-prompt"><SourceText text={imperativeProblemText(exercise.prompt)} /></div>
                      <details className="ird-worked-solution">
                        <summary>Buka Solusi</summary>
                        <div className="ird-worked-solution-body"><WorkedSolution exercise={exercise} /></div>
                      </details>
                    </article>
                    <WorkedExerciseVisual exercise={exercise} />
                  </div>
                ))}
              </div>
            </section>

            <section id="ird-latihan-soal" className="book-section ird-practice-section">
              <div className="section-number">{String(practiceSectionNumber).padStart(2,"0")}</div>
              <span className="eyebrow">Latihan Soal dan Solusi</span>
              <h2>{integralRiemannWorkedExercises.length} latihan soal Integral Riemann dan Darboux</h2>
              <p>Soal ditulis dengan kalimat perintah aktif. Buka solusi setelah mencoba menyelesaikan soal secara mandiri. Visualisasi disediakan pada soal yang paling terbantu oleh interpretasi geometris.</p>
              <div className="ird-worked-grid">
                {integralRiemannWorkedExercises.map((exercise,index)=>(
                  <div className="ird-worked-wrap" key={index}>
                    <article className="ird-worked-card">
                      <div className="ird-worked-head">
                        <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                        <div><span className="eyebrow">Latihan Soal</span><h3>Soal {index+1}</h3></div>
                      </div>
                      <div className="ird-worked-prompt"><SourceText text={imperativeProblemText(exercise.prompt)} /></div>
                      <details className="ird-worked-solution">
                        <summary>Buka Solusi</summary>
                        <div className="ird-worked-solution-body"><WorkedSolution exercise={exercise} /></div>
                      </details>
                    </article>
                    <WorkedExerciseVisual exercise={exercise} />
                  </div>
                ))}
              </div>
            </section>

            <section id="ird-latihan30" className="book-section ird-practice-section">
              <div className="section-number">{String(extraPracticeSectionNumber).padStart(2,"0")}</div>
              <span className="eyebrow">Latihan Tambahan Menengah–Menantang</span>
              <h2>30 soal tambahan Integral Riemann dan Darboux</h2>
              <p>Bagian ini memuat seluruh soal dari lembar latihan yang diberikan. Soal disajikan satu per satu agar dapat dipakai sebagai latihan mandiri.</p>
              <div className="ird-problem-grid">
                {integralRiemannDarbouxExercises.map((problem,index)=>(
                  <article className="ird-problem-card" key={index}>
                    <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                    <div><strong>Soal {index+1}</strong><SourceText text={imperativeProblemText(problem)} /></div>
                  </article>
                ))}
              </div>
            </section>

            <section className="next-learning-block textbook-next">
              <div>
                <span className="eyebrow">Lanjutkan</span>
                <h2>Latihan Lanjutan Integral Riemann dan Darboux</h2>
                <p>Setelah memahami jumlah Riemann dan Darboux, Teorema Fundamental Kalkulus, fungsi diskontinu, fungsi monoton, fungsi Thomae, sifat aljabar integral, serta kriteria osilasi, uji kemampuan melalui latihan terstruktur.</p>
              </div>
              <div className="actions">
                <a className="btn primary" href="#ird-ringkasan">Tinjau Ringkasan</a>
                <Link className="btn secondary" href="/materi">Materi Lain</Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
