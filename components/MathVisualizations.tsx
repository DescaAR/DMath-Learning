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
  | "real-analysis";

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
  if (kind === "fraction") {
    return (
      <FigureShell
        title="Pecahan sebagai bagian dari satu utuh"
        caption="Batang dibagi menjadi $5$ bagian sama besar. Tiga bagian yang diarsir merepresentasikan $\frac{3}{5}$."
      >
        <svg viewBox="0 0 520 230" role="img" aria-label="Visualisasi pecahan tiga per lima">
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
        <svg viewBox="0 0 520 270" role="img" aria-label="Dua garis berpotongan di titik dua koma tiga">
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
        <svg viewBox="0 0 520 270" role="img" aria-label="Graf fungsi pada bidang koordinat">
          <Axis x={40} y={220} width={430} height={175} />
          <polyline points={points.map(p=>p.join(",")).join(" ")} className="svg-curve" />
          {points.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="4" className="svg-point" />)}
          <line x1="320" y1="38" x2="320" y2="230" className="svg-test-line" />
          <text x="329" y="55" className="svg-label">uji garis vertikal</text>
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
        <svg viewBox="0 0 520 270" role="img" aria-label="Lingkaran satuan dengan sudut theta">
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
        <svg viewBox="0 0 520 280" role="img" aria-label="Persegi panjang Riemann di bawah kurva x kuadrat">
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
        <svg viewBox="0 0 520 260" role="img" aria-label="Delapan titik yang dimasukkan ke tiga kotak">
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
        <svg viewBox="0 0 520 270" role="img" aria-label="Graf enam simpul untuk ilustrasi spektrum">
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
        <svg viewBox="0 0 520 270" role="img" aria-label="Jam modulo tujuh">
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
        <svg viewBox="0 0 520 280" role="img" aria-label="Pohon keputusan tiga tingkat">
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
        <svg viewBox="0 0 520 270" role="img" aria-label="Dua vektor sebelum dan sesudah transformasi linear">
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
        <svg viewBox="0 0 520 270" role="img" aria-label="Barisan satu per n mendekati nol dengan pita epsilon">
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

  return (
    <FigureShell
      title="Basis sebagai koordinat"
      caption="Dua vektor bebas linear $v_1$ dan $v_2$ di $\mathbb{R}^2$ merentang bidang. Setiap $x$ dapat ditulis unik sebagai $x=a_1v_1+a_2v_2$."
    >
      <svg viewBox="0 0 520 280" role="img" aria-label="Dua vektor basis dan sebuah vektor hasil kombinasi linear">
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
