"use client";

import type { ReactNode } from "react";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

export type VisualizationKind =
  | "basis"
  | "fraction"
  | "linear"
  | "function"
  | "trig"
  | "riemann"
  | "pigeonhole"
  | "spectrum"
  | "modclock"
  | "combinatorics"
  | "onmipa-linear"
  | "real-analysis"
  | "complex-analysis"
  | "abstract-algebra"
  | "olympiad"
  | "calculus"
  | "graph-theory"
  | "number-theory"
  | "differential-equations"
  | "numerical-analysis"
  | "operations-research"
  | "statistics"
  | "stochastic-process"
  | "measure-probability";

function FigureShell({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: ReactNode;
}) {
  const { language, t } = useLanguage();
  return (
    <figure className="math-figure">
      <div className="figure-heading">
        <span className="figure-label">{language === "en" ? "Visualization" : "Visualisasi"}</span>
        <strong>{t(title)}</strong>
      </div>
      <div className="figure-canvas">{children}</div>
      <figcaption><RichMath>{caption}</RichMath></figcaption>
    </figure>
  );
}

function Axis({ x = 40, y = 190, width = 420, height = 150 }: { x?: number; y?: number; width?: number; height?: number }) {
  return (
    <>
      <line x1={x} y1={y} x2={x + width} y2={y} className="svg-axis" />
      <line x1={x + width / 2} y1={y - height} x2={x + width / 2} y2={y + 20} className="svg-axis" />
    </>
  );
}

export function MathVisualization({ kind }: { kind: VisualizationKind }) {
  const { language } = useLanguage();
  const en = language === "en";
  if (kind === "fraction") {
    return (
      <FigureShell
        title="Pecahan sebagai bagian dari satu utuh"
        caption="Batang dibagi menjadi $5$ bagian sama besar. Tiga bagian yang diarsir merepresentasikan $\frac{3}{5}$."
      >
        <svg viewBox="0 0 520 230" role="img" aria-label={en ? "Visualization of the fraction three fifths" : "Visualisasi pecahan tiga per lima"}>
          <rect x="55" y="55" width="410" height="70" rx="12" className="svg-soft-fill" />
          {[0,1,2,3,4].map((i) => (
            <rect key={i} x={55 + i*82} y="55" width="82" height="70" className={i<3 ? "svg-primary-fill" : "svg-empty-fill"} />
          ))}
          {[1,2,3,4].map((i) => <line key={i} x1={55+i*82} y1="55" x2={55+i*82} y2="125" className="svg-divider" />)}
          <line x1="55" y1="178" x2="465" y2="178" className="svg-axis" />
          {[0,1,2,3,4,5].map((i) => (
            <g key={i}>
              <line x1={55+i*82} y1="171" x2={55+i*82} y2="185" className="svg-axis" />
              <text x={55+i*82} y="205" textAnchor="middle" className="svg-label">{i}/5</text>
            </g>
          ))}
          <circle cx={55+3*82} cy="178" r="7" className="svg-accent-fill" />
        </svg>
      </FigureShell>
    );
  }

  if (kind === "linear") {
    return (
      <FigureShell
        title="Persamaan linear sebagai perpotongan dua garis"
        caption="Solusi sistem $x+y=5$ dan $2x-y=1$ adalah titik perpotongan kedua garis, yaitu $(2,3)$."
      >
        <svg viewBox="0 0 520 270" role="img" aria-label={en ? "Two lines intersecting at the point (2,3)" : "Dua garis berpotongan di titik dua koma tiga"}>
          <Axis x={40} y={220} width={430} height={175} />
          <line x1="75" y1="65" x2="445" y2="230" className="svg-line-primary" />
          <line x1="95" y1="235" x2="405" y2="45" className="svg-line-accent" />
          <circle cx="280" cy="137" r="8" className="svg-point" />
          <text x="294" y="126" className="svg-label">(2,3)</text>
          <text x="365" y="202" className="svg-label">x+y=5</text>
          <text x="352" y="76" className="svg-label">2x−y=1</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "function") {
    const points = [[70,190],[120,170],[170,130],[220,80],[270,115],[320,155],[370,105],[420,65]];
    return (
      <FigureShell
        title="Graf fungsi dan uji garis vertikal"
        caption="Setiap nilai $x$ memiliki tepat satu nilai $f(x)$. Garis vertikal tidak memotong graf pada lebih dari satu titik."
      >
        <svg viewBox="0 0 520 270" role="img" aria-label={en ? "Function graph on the coordinate plane" : "Graf fungsi pada bidang koordinat"}>
          <Axis x={40} y={220} width={430} height={175} />
          <polyline points={points.map(p=>p.join(",")).join(" ")} className="svg-curve" />
          {points.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="4" className="svg-point" />)}
          <line x1="320" y1="38" x2="320" y2="230" className="svg-test-line" />
          <text x="329" y="55" className="svg-label">{en ? "vertical line test" : "uji garis vertikal"}</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "trig") {
    const cx=260, cy=130, r=88;
    return (
      <FigureShell
        title="Lingkaran satuan"
        caption="Untuk titik $P=(\cos\theta,\sin\theta)$ pada lingkaran satuan, koordinat mendefinisikan nilai sinus dan cosinus."
      >
        <svg viewBox="0 0 520 270" role="img" aria-label={en ? "Unit circle with angle theta" : "Lingkaran satuan dengan sudut theta"}>
          <line x1="80" y1={cy} x2="440" y2={cy} className="svg-axis" />
          <line x1={cx} y1="28" x2={cx} y2="235" className="svg-axis" />
          <circle cx={cx} cy={cy} r={r} className="svg-circle" />
          <line x1={cx} y1={cy} x2="330" y2="77" className="svg-line-primary" />
          <line x1="330" y1="77" x2="330" y2={cy} className="svg-dash" />
          <line x1="330" y1="77" x2={cx} y2="77" className="svg-dash" />
          <circle cx="330" cy="77" r="7" className="svg-point" />
          <path d="M 295 130 A 35 35 0 0 0 286 109" className="svg-curve-thin" />
          <text x="300" y="112" className="svg-label">θ</text>
          <text x="340" y="68" className="svg-label">P</text>
          <text x="292" y="150" className="svg-label">cos θ</text>
          <text x="337" y="108" className="svg-label">sin θ</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "riemann") {
    const bars=[0,1,2,3,4,5,6,7].map((i)=>{
      const x=65+i*48;
      const t=(i+1)/8;
      const h=135*t*t;
      return <rect key={i} x={x} y={220-h} width="48" height={h} className="svg-riemann-bar" />;
    });
    const curve=Array.from({length:50},(_,i)=>{
      const t=i/49;
      return [65+t*384,220-135*t*t];
    });
    return (
      <FigureShell
        title="Jumlah Riemann kanan"
        caption="Untuk $f(x)=x^2$ pada $[0,1]$, luas persegi panjang mendekati $\int_0^1 x^2\,dx$ ketika norma partisi menuju $0$."
      >
        <svg viewBox="0 0 520 280" role="img" aria-label={en ? "Riemann rectangles under the curve x squared" : "Persegi panjang Riemann di bawah kurva x kuadrat"}>
          <Axis x={45} y={220} width={425} height={175} />
          {bars}
          <polyline points={curve.map(p=>p.join(",")).join(" ")} className="svg-curve" />
          <text x="402" y="72" className="svg-label">y=x²</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "pigeonhole") {
    const dots=[[95,80],[140,110],[190,70],[235,105],[285,75],[330,110],[380,72],[425,105]];
    return (
      <FigureShell
        title="Delapan objek, tiga kotak"
        caption="Karena $\lceil 8/3\rceil=3$, sedikitnya satu kotak harus berisi paling sedikit $3$ objek."
      >
        <svg viewBox="0 0 520 260" role="img" aria-label={en ? "Eight points distributed among three boxes" : "Delapan titik yang dimasukkan ke tiga kotak"}>
          {dots.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="10" className="svg-point" />)}
          {[0,1,2].map((i)=><rect key={i} x={68+i*145} y="155" width="115" height="65" rx="10" className="svg-box" />)}
          <path d="M95 95 C95 125 105 140 110 155 M140 120 C140 135 140 145 140 155 M190 85 C205 120 230 140 255 155 M235 120 C240 135 245 145 255 155 M285 90 C285 120 285 140 285 155 M330 125 C350 140 385 145 400 155 M380 88 C390 115 400 135 400 155 M425 120 C420 135 410 145 400 155" className="svg-dash" />
        </svg>
      </FigureShell>
    );
  }

  if (kind === "spectrum") {
    const nodes=[[110,130],[205,70],[205,190],[315,70],[315,190],[410,130]];
    const edges=[[0,1],[0,2],[1,3],[2,4],[3,5],[4,5],[1,2],[3,4]];
    return (
      <FigureShell
        title="Graf, matriks, dan nilai eigen"
        caption="Spektrum graf diperoleh dari nilai eigen suatu matriks yang diasosiasikan dengan graf, misalnya matriks adjacency $A(G)$ atau matriks jarak $D(G)$."
      >
        <svg viewBox="0 0 520 270" role="img" aria-label={en ? "Six-vertex graph illustrating a spectrum" : "Graf enam simpul untuk ilustrasi spektrum"}>
          {edges.map(([a,b],i)=><line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className="svg-edge" />)}
          {nodes.map((p,i)=><g key={i}><circle cx={p[0]} cy={p[1]} r="17" className="svg-node" /><text x={p[0]} y={p[1]+5} textAnchor="middle" className="svg-node-label">{i+1}</text></g>)}
        </svg>
      </FigureShell>
    );
  }

  if (kind === "modclock") {
    const cx=260, cy=130, r=88;
    const pts=Array.from({length:7},(_,i)=>{
      const a=-Math.PI/2+i*2*Math.PI/7;
      return [cx+r*Math.cos(a),cy+r*Math.sin(a)];
    });
    return (
      <FigureShell
        title="Aritmetika modulo 7"
        caption="Kelas residu $0,1,\ldots,6$ tersusun melingkar. Penjumlahan modulo $7$ berarti bergerak mengelilingi lingkaran dan kembali ke kelas residu."
      >
        <svg viewBox="0 0 520 270" role="img" aria-label={en ? "Clock arithmetic modulo seven" : "Jam modulo tujuh"}>
          <circle cx={cx} cy={cy} r={r} className="svg-circle" />
          {pts.map((p,i)=><g key={i}><circle cx={p[0]} cy={p[1]} r="15" className="svg-node" /><text x={p[0]} y={p[1]+5} textAnchor="middle" className="svg-node-label">{i}</text></g>)}
          <path d="M260 42 A88 88 0 0 1 345 105" className="svg-arrow" />
        </svg>
      </FigureShell>
    );
  }

  if (kind === "combinatorics") {
    return (
      <FigureShell
        title="Pohon keputusan biner"
        caption="Pohon membantu menghitung objek secara sistematis. Pada tiga keputusan biner terdapat $2^3=8$ daun."
      >
        <svg viewBox="0 0 520 280" role="img" aria-label={en ? "Three-level decision tree" : "Pohon keputusan tiga tingkat"}>
          {[[260,35,160,95],[260,35,360,95],[160,95,105,160],[160,95,215,160],[360,95,305,160],[360,95,415,160],
          [105,160,75,230],[105,160,135,230],[215,160,185,230],[215,160,245,230],[305,160,275,230],[305,160,335,230],[415,160,385,230],[415,160,445,230]].map((e,i)=><line key={i} x1={e[0]} y1={e[1]} x2={e[2]} y2={e[3]} className="svg-edge" />)}
          {[[260,35],[160,95],[360,95],[105,160],[215,160],[305,160],[415,160],[75,230],[135,230],[185,230],[245,230],[275,230],[335,230],[385,230],[445,230]].map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r={i<7?10:7} className={i<7?"svg-node":"svg-accent-fill"} />)}
        </svg>
      </FigureShell>
    );
  }

  if (kind === "onmipa-linear") {
    return (
      <FigureShell
        title="Subruang dan transformasi linear"
        caption="Transformasi linear mempertahankan kombinasi linear: $T(au+bv)=aT(u)+bT(v)$. Struktur ini menjadi pusat banyak soal ON-MIPA."
      >
        <svg viewBox="0 0 520 270" role="img" aria-label={en ? "Two vectors before and after a linear transformation" : "Dua vektor sebelum dan sesudah transformasi linear"}>
          <line x1="60" y1="215" x2="230" y2="215" className="svg-axis" />
          <line x1="90" y1="240" x2="90" y2="50" className="svg-axis" />
          <line x1="90" y1="215" x2="185" y2="110" className="svg-line-primary" />
          <line x1="90" y1="215" x2="195" y2="180" className="svg-line-accent" />
          <path d="M245 135 L285 135" className="svg-arrow" />
          <line x1="305" y1="215" x2="465" y2="215" className="svg-axis" />
          <line x1="330" y1="240" x2="330" y2="50" className="svg-axis" />
          <line x1="330" y1="215" x2="420" y2="78" className="svg-line-primary" />
          <line x1="330" y1="215" x2="445" y2="160" className="svg-line-accent" />
          <text x="252" y="120" className="svg-label">T</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "real-analysis") {
    const pts=Array.from({length:20},(_,i)=>{
      const n=i+1;
      return [55+i*21,130-72/n];
    });
    return (
      <FigureShell
        title="Konvergensi barisan"
        caption="Barisan $a_n=1/n$ mendekati $0$. Untuk setiap $\varepsilon>0$, semua suku setelah indeks tertentu berada di dalam pita $(-\varepsilon,\varepsilon)$."
      >
        <svg viewBox="0 0 520 270" role="img" aria-label={en ? "The sequence one over n approaching zero inside an epsilon band" : "Barisan satu per n mendekati nol dengan pita epsilon"}>
          <Axis x={40} y={205} width={430} height={150} />
          <rect x="55" y="178" width="390" height="54" className="svg-epsilon-band" />
          <line x1="55" y1="205" x2="445" y2="205" className="svg-limit-line" />
          {pts.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="4" className="svg-point" />)}
          <text x="390" y="175" className="svg-label">+ε</text>
          <text x="390" y="246" className="svg-label">−ε</text>
        </svg>
      </FigureShell>
    );
  }


  if (kind === "complex-analysis") {
    const cx=260,cy=135,r=82;
    return (
      <FigureShell
        title="Bidang kompleks: modulus, argumen, dan pemetaan"
        caption="Titik $z=x+iy$ dapat dibaca sebagai vektor dari origin. Modulus adalah panjang vektor, sedangkan argumen menyatakan sudut terhadap sumbu real."
      >
        <svg viewBox="0 0 520 280" role="img" aria-label={en ? "Complex plane with a complex number and its polar representation" : "Bidang kompleks dengan representasi polar"}>
          <line x1="55" y1={cy} x2="470" y2={cy} className="svg-axis" />
          <line x1={cx} y1="35" x2={cx} y2="240" className="svg-axis" />
          <circle cx={cx} cy={cy} r={r} className="svg-circle" />
          <line x1={cx} y1={cy} x2="335" y2="83" className="svg-line-primary" />
          <line x1="335" y1="83" x2="335" y2={cy} className="svg-dash" />
          <line x1="335" y1="83" x2={cx} y2="83" className="svg-dash" />
          <circle cx="335" cy="83" r="7" className="svg-point" />
          <path d="M 298 135 A 38 38 0 0 0 291 113" className="svg-curve-thin" />
          <text x="305" y="116" className="svg-label">arg z</text>
          <text x="342" y="75" className="svg-label">z</text>
          <text x="446" y="126" className="svg-label">Re</text>
          <text x="270" y="48" className="svg-label">Im</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "abstract-algebra") {
    const nodes=[[260,48],[385,120],[338,222],[182,222],[135,120]];
    return (
      <FigureShell
        title="Operasi dan simetri dalam struktur aljabar"
        caption="Struktur aljabar dipahami melalui operasi yang tertutup dan aturan yang dipertahankan. Diagram simetri membantu melihat komposisi, invers, orbit, dan generator."
      >
        <svg viewBox="0 0 520 280" role="img" aria-label={en ? "Pentagonal symmetry graph representing algebraic operations" : "Graf simetri pentagon untuk struktur aljabar"}>
          <polygon points={nodes.map(p=>p.join(",")).join(" ")} className="svg-circle" />
          {nodes.map((p,i)=><g key={i}><circle cx={p[0]} cy={p[1]} r="15" className="svg-node"/><text x={p[0]} y={p[1]+5} textAnchor="middle" className="svg-node-label">{i}</text></g>)}
          <path d="M260 48 C330 42 392 76 385 120" className="svg-arrow"/>
          <path d="M385 120 C410 170 378 212 338 222" className="svg-arrow"/>
          <line x1="260" y1="48" x2="338" y2="222" className="svg-line-accent"/>
          <line x1="385" y1="120" x2="182" y2="222" className="svg-line-accent"/>
          <text x="275" y="32" className="svg-label">operasi</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "olympiad") {
    return (
      <FigureShell
        title="Peta strategi pemecahan masalah"
        caption="Soal olimpiade jarang selesai dengan satu rumus. Diagram menunjukkan alur: pahami struktur, eksperimen, pilih invariant atau transformasi, lalu buktikan."
      >
        <svg viewBox="0 0 520 290" role="img" aria-label={en ? "Olympiad problem solving strategy tree" : "Pohon strategi pemecahan masalah olimpiade"}>
          <rect x="188" y="30" width="145" height="42" rx="12" className="svg-box"/><text x="260" y="56" textAnchor="middle" className="svg-label">Masalah</text>
          <line x1="260" y1="72" x2="260" y2="105" className="svg-edge"/>
          <rect x="185" y="105" width="150" height="42" rx="12" className="svg-box"/><text x="260" y="131" textAnchor="middle" className="svg-label">Struktur & pola</text>
          <line x1="225" y1="147" x2="125" y2="190" className="svg-edge"/><line x1="260" y1="147" x2="260" y2="190" className="svg-edge"/><line x1="295" y1="147" x2="395" y2="190" className="svg-edge"/>
          <rect x="65" y="190" width="120" height="42" rx="12" className="svg-box"/><text x="125" y="216" textAnchor="middle" className="svg-label">Invariant</text>
          <rect x="200" y="190" width="120" height="42" rx="12" className="svg-box"/><text x="260" y="216" textAnchor="middle" className="svg-label">Konstruksi</text>
          <rect x="335" y="190" width="120" height="42" rx="12" className="svg-box"/><text x="395" y="216" textAnchor="middle" className="svg-label">Ekstrem</text>
          <line x1="125" y1="232" x2="260" y2="260" className="svg-edge"/><line x1="260" y1="232" x2="260" y2="260" className="svg-edge"/><line x1="395" y1="232" x2="260" y2="260" className="svg-edge"/>
          <circle cx="260" cy="262" r="13" className="svg-accent-fill"/>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "calculus") {
    const curve=Array.from({length:61},(_,i)=>{
      const t=i/60;
      const x=65+t*390;
      const y=220-125*(0.15+0.85*t*t);
      return [x,y];
    });
    return (
      <FigureShell
        title="Perubahan lokal dan akumulasi"
        caption="Kalkulus menghubungkan kemiringan lokal dengan akumulasi global. Garis singgung mewakili turunan, sedangkan daerah di bawah kurva mewakili integral."
      >
        <svg viewBox="0 0 520 285" role="img" aria-label={en ? "Calculus curve with tangent line and accumulated area" : "Kurva kalkulus dengan garis singgung dan daerah integral"}>
          <Axis x={45} y={220} width={425} height={170} />
          <polygon points={"65,220 "+curve.slice(0,43).map(p=>p.join(",")).join(" ")+" "+curve[42][0]+",220"} className="svg-riemann-bar"/>
          <polyline points={curve.map(p=>p.join(",")).join(" ")} className="svg-curve" />
          <line x1="230" y1="205" x2="375" y2="88" className="svg-line-accent"/>
          <circle cx="310" cy="140" r="7" className="svg-point"/>
          <text x="376" y="84" className="svg-label">f′(a)</text>
          <text x="150" y="205" className="svg-label">∫ f</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "graph-theory") {
    const nodes=[[105,145],[195,70],[205,215],[310,75],[325,210],[420,145]];
    const edges=[[0,1],[0,2],[1,2],[1,3],[2,4],[3,4],[3,5],[4,5],[1,4]];
    return (
      <FigureShell
        title="Simpul, sisi, lintasan, dan struktur global"
        caption="Teori graf mengubah relasi menjadi simpul dan sisi. Dari diagram yang sama dapat dipelajari derajat, lintasan, siklus, keterhubungan, pewarnaan, matching, dan aliran."
      >
        <svg viewBox="0 0 520 285" role="img" aria-label={en ? "Graph with vertices edges and a highlighted cycle" : "Graf dengan simpul sisi dan siklus yang ditandai"}>
          {edges.map(([a,b],i)=><line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className={i===2||i===8||i===5?"svg-line-accent":"svg-edge"} />)}
          {nodes.map((p,i)=><g key={i}><circle cx={p[0]} cy={p[1]} r="16" className="svg-node"/><text x={p[0]} y={p[1]+5} textAnchor="middle" className="svg-node-label">v{i+1}</text></g>)}
          <text x="348" y="42" className="svg-label">G=(V,E)</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "number-theory") {
    const cx=260,cy=135,r=92;
    const pts=Array.from({length:12},(_,i)=>{
      const a=-Math.PI/2+i*2*Math.PI/12;
      return [cx+r*Math.cos(a),cy+r*Math.sin(a)];
    });
    return (
      <FigureShell
        title="Residu, periodisitas, dan struktur modulo"
        caption="Aritmetika modulo mengubah bilangan bulat menjadi kelas residu yang berulang. Pola ini mendasari kongruensi, invers modular, orde, residu kuadrat, dan banyak teknik olimpiade."
      >
        <svg viewBox="0 0 520 285" role="img" aria-label={en ? "Clock diagram modulo twelve" : "Diagram jam modulo dua belas"}>
          <circle cx={cx} cy={cy} r={r} className="svg-circle" />
          {pts.map((p,i)=><g key={i}><circle cx={p[0]} cy={p[1]} r="12" className="svg-node"/><text x={p[0]} y={p[1]+4} textAnchor="middle" className="svg-node-label">{i}</text></g>)}
          <path d="M260 43 A92 92 0 0 1 347 106" className="svg-arrow" />
          <line x1={pts[1][0]} y1={pts[1][1]} x2={pts[5][0]} y2={pts[5][1]} className="svg-line-accent"/>
          <text x="350" y="58" className="svg-label">mod m</text>
        </svg>
      </FigureShell>
    );
  }


  if (kind === "operations-research") {
    return (
      <FigureShell
        title="Daerah feasible dan arah optimisasi"
        caption="Model optimisasi memisahkan himpunan keputusan yang feasible dari fungsi tujuan. Titik ekstrem dan garis objektif membantu melihat struktur solusi program linear."
      >
        <svg viewBox="0 0 520 285" role="img" aria-label={en ? "Feasible region and optimization direction" : "Daerah feasible dan arah optimisasi"}>
          <Axis x={55} y={235} width={420} height={185} />
          <polygon points="75,220 75,135 170,80 330,105 400,180 340,220" className="svg-region"/>
          <line x1="115" y1="205" x2="350" y2="95" className="svg-line-accent"/>
          <line x1="145" y1="225" x2="380" y2="115" className="svg-dash"/>
          <circle cx="330" cy="105" r="6" className="svg-point"/>
          <text x="338" y="96" className="svg-label">optimal</text>
          <text x="190" y="165" className="svg-label">feasible region</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "statistics") {
    return (
      <FigureShell
        title="Data, model, dan ketidakpastian"
        caption="Statistika menghubungkan variasi pada data dengan pola model. Visualisasi membantu memisahkan signal, noise, residual, dan ketidakpastian inferensi."
      >
        <svg viewBox="0 0 520 285" role="img" aria-label={en ? "Scatter data with fitted trend" : "Data sebar dengan garis kecenderungan"}>
          <Axis x={55} y={235} width={420} height={185} />
          {[[85,205],[120,190],[150,198],[180,165],[215,172],[250,145],[285,150],[320,120],[355,128],[395,92],[430,104]].map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="5" className="svg-point"/>)}
          <line x1="75" y1="212" x2="445" y2="88" className="svg-line-accent"/>
          <line x1="320" y1="120" x2="320" y2="130" className="svg-dash"/>
          <text x="329" y="129" className="svg-label">residual</text>
          <text x="360" y="81" className="svg-label">model</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "stochastic-process") {
    const path1=[[55,170],[90,150],[120,180],[150,130],[185,145],[220,105],[255,135],[290,92],[325,112],[360,75],[400,102],[450,70]];
    const path2=[[55,170],[90,188],[120,158],[150,195],[185,165],[220,182],[255,150],[290,172],[325,142],[360,160],[400,130],[450,145]];
    return (
      <FigureShell
        title="Lintasan acak dan evolusi informasi"
        caption="Proses stokastik dipelajari sebagai keluarga variabel acak yang berkembang terhadap waktu. Lintasan berbeda dapat berasal dari model probabilistik yang sama."
      >
        <svg viewBox="0 0 520 285" role="img" aria-label={en ? "Two stochastic sample paths" : "Dua contoh lintasan proses stokastik"}>
          <Axis x={55} y={235} width={420} height={185} />
          <polyline points={path1.map(p=>p.join(",")).join(" ")} className="svg-curve"/>
          <polyline points={path2.map(p=>p.join(",")).join(" ")} className="svg-line-accent"/>
          <line x1="255" y1="55" x2="255" y2="235" className="svg-dash"/>
          <text x="263" y="70" className="svg-label">information at t</text>
          <text x="390" y="64" className="svg-label">sample path</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "measure-probability") {
    return (
      <FigureShell
        title="Himpunan terukur, ukuran, dan integrasi"
        caption="Teori ukuran membangun probabilitas dari sigma-algebra dan measure. Integral kemudian mengakumulasi nilai fungsi berdasarkan ukuran, bukan hanya panjang interval."
      >
        <svg viewBox="0 0 520 285" role="img" aria-label={en ? "Measurable sets and weighted regions" : "Himpunan terukur dan daerah berbobot"}>
          <rect x="60" y="48" width="390" height="185" rx="18" className="svg-region"/>
          <ellipse cx="195" cy="140" rx="95" ry="62" className="svg-curve"/>
          <ellipse cx="325" cy="140" rx="90" ry="68" className="svg-line-accent"/>
          <circle cx="260" cy="140" r="7" className="svg-point"/>
          <text x="112" y="78" className="svg-label">A</text>
          <text x="392" y="80" className="svg-label">B</text>
          <text x="238" y="132" className="svg-label">A ∩ B</text>
          <text x="72" y="250" className="svg-label">μ assigns size to measurable sets</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "numerical-analysis") {
    const exact=Array.from({length:61},(_,i)=>{
      const t=i/60;
      const x=55+t*410;
      const y=215-115*Math.exp(-2.2*t);
      return [x,y];
    });
    const approx=Array.from({length:8},(_,i)=>{
      const t=i/7;
      const x=55+t*410;
      const y=215-115*(1-0.31*t+0.045*t*t);
      return [x,y];
    });
    return (
      <FigureShell
        title="Solusi eksak, aproksimasi, dan galat"
        caption="Analisis numerik membandingkan objek eksak dengan aproksimasi diskret. Jarak antara keduanya menggambarkan galat, sedangkan refinement digunakan untuk mempelajari konvergensi."
      >
        <svg viewBox="0 0 520 285" role="img" aria-label={en ? "Exact curve, discrete numerical approximation, and error" : "Kurva eksak, aproksimasi numerik diskret, dan galat"}>
          <Axis x={45} y={235} width={425} height={185} />
          <polyline points={exact.map(p=>p.join(",")).join(" ")} className="svg-curve"/>
          <polyline points={approx.map(p=>p.join(",")).join(" ")} className="svg-line-accent"/>
          {approx.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="5" className="svg-point"/>)}
          <line x1="348" y1="128" x2="348" y2="151" className="svg-dash"/>
          <text x="356" y="142" className="svg-label">error</text>
          <text x="382" y="86" className="svg-label">exact</text>
          <text x="392" y="171" className="svg-label">numerical</text>
        </svg>
      </FigureShell>
    );
  }

  if (kind === "differential-equations") {
    const field=[];
    for(let i=0;i<9;i++){
      for(let j=0;j<6;j++){
        const x=65+i*48,y=55+j*32;
        const slope=(j-2.5)*0.22-(i-4)*0.07;
        const dx=14,dy=dx*slope;
        field.push([x-dx,y+dy,x+dx,y-dy]);
      }
    }
    const curve1=Array.from({length:50},(_,i)=>{const t=i/49;return [65+t*390,205-105*Math.exp(-2.1*t)]});
    const curve2=Array.from({length:50},(_,i)=>{const t=i/49;return [65+t*390,150-55*Math.exp(-1.7*t)]});
    return (
      <FigureShell
        title="Medan kemiringan dan keluarga solusi"
        caption="Persamaan diferensial menentukan laju perubahan. Medan kemiringan memperlihatkan arah lokal, sedangkan kurva solusi mengikuti arah tersebut dan dipilih oleh kondisi awal."
      >
        <svg viewBox="0 0 520 285" role="img" aria-label={en ? "Slope field with solution curves" : "Medan kemiringan dengan kurva solusi"}>
          <Axis x={45} y={235} width={425} height={185} />
          {field.map((e,i)=><line key={i} x1={e[0]} y1={e[1]} x2={e[2]} y2={e[3]} className="svg-dash"/>)}
          <polyline points={curve1.map(p=>p.join(",")).join(" ")} className="svg-curve"/>
          <polyline points={curve2.map(p=>p.join(",")).join(" ")} className="svg-line-accent"/>
          <text x="360" y="88" className="svg-label">y′=f(x,y)</text>
        </svg>
      </FigureShell>
    );
  }

  return (
    <FigureShell
      title="Basis sebagai koordinat"
      caption="Dua vektor bebas linear $v_1$ dan $v_2$ di $\mathbb{R}^2$ merentang bidang. Setiap $x$ dapat ditulis unik sebagai $x=a_1v_1+a_2v_2$."
    >
      <svg viewBox="0 0 520 280" role="img" aria-label={en ? "Two basis vectors and a linear-combination result vector" : "Dua vektor basis dan sebuah vektor hasil kombinasi linear"}>
        <Axis x={40} y={225} width={430} height={175} />
        <line x1="260" y1="225" x2="385" y2="120" className="svg-line-primary" />
        <line x1="260" y1="225" x2="145" y2="115" className="svg-line-accent" />
        <line x1="260" y1="225" x2="370" y2="70" className="svg-result-vector" />
        <text x="390" y="118" className="svg-label">v₁</text>
        <text x="120" y="110" className="svg-label">v₂</text>
        <text x="378" y="66" className="svg-label">x</text>
      </svg>
    </FigureShell>
  );
}
