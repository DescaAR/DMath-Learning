"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { VisualizationKind } from "@/components/MathVisualizations";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

function Slider({
  label, value, min, max, step = 1, onChange,
}: {
  label: string; value: number; min: number; max: number; step?: number; onChange: (value: number) => void;
}) {
  return (
    <label className="lab-control">
      <span><strong>{label}</strong><b>{Number.isInteger(value) ? value : value.toFixed(2)}</b></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e)=>onChange(Number(e.target.value))} />
    </label>
  );
}

function CoordinatePlane({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 520 320" className="interactive-svg" role="img">
      {Array.from({ length: 9 }, (_, i) => 60 + i * 50).map((x) => <line key={"x"+x} x1={x} y1="30" x2={x} y2="290" className="svg-grid-line" />)}
      {Array.from({ length: 5 }, (_, i) => 60 + i * 50).map((y) => <line key={"y"+y} x1="45" y1={y} x2="475" y2={y} className="svg-grid-line" />)}
      <line x1="40" y1="160" x2="480" y2="160" className="svg-axis" />
      <line x1="260" y1="25" x2="260" y2="295" className="svg-axis" />
      {children}
    </svg>
  );
}

type LabPanel = {
  title: string;
  description: string;
  controls: ReactNode;
  visual: ReactNode;
  note: string;
};

export function InteractiveMathLab({ kind }: { kind: VisualizationKind }) {
  const { language } = useLanguage();
  const en = language === "en";
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [c, setC] = useState(1);
  const [d, setD] = useState(1);
  const [n, setN] = useState(8);
  const [k, setK] = useState(3);
  const [angle, setAngle] = useState(45);
  const [epsilon, setEpsilon] = useState(0.2);
  const [graphType, setGraphType] = useState<"path"|"cycle"|"complete">("path");

  function reset() {
    setA(2); setB(3); setC(1); setD(1); setN(8); setK(3); setAngle(45); setEpsilon(0.2); setGraphType("path");
  }

  const panel: LabPanel = useMemo(() => {
    if (kind === "fraction") {
      const denominator=Math.max(2,Math.min(12,n));
      const numerator=Math.max(0,Math.min(denominator,k));
      const width=380/denominator;
      return {
        title: en ? "Fraction Explorer" : "Eksplorasi Pecahan",
        description: en ? "Change the numerator and denominator and observe the quantity geometrically." : "Ubah pembilang dan penyebut, lalu amati nilainya secara geometris.",
        controls: <>
          <Slider label={en?"Denominator":"Penyebut"} value={denominator} min={2} max={12} onChange={(v)=>{setN(v);setK(Math.min(k,v));}} />
          <Slider label={en?"Numerator":"Pembilang"} value={numerator} min={0} max={denominator} onChange={setK} />
        </>,
        visual: <svg viewBox="0 0 520 250" className="interactive-svg">
          <rect x="70" y="70" width="380" height="80" rx="12" className="svg-soft-fill" />
          {Array.from({length:denominator},(_,i)=><rect key={i} x={70+i*width} y="70" width={width} height="80" className={i<numerator?"svg-primary-fill":"svg-empty-fill"} />)}
          {Array.from({length:denominator-1},(_,i)=><line key={i} x1={70+(i+1)*width} x2={70+(i+1)*width} y1="70" y2="150" className="svg-divider" />)}
          <text x="260" y="205" textAnchor="middle" className="svg-large-label">{numerator}/{denominator} = {(numerator/denominator).toFixed(3)}</text>
        </svg>,
        note: (en?"Selected fraction: ":"Pecahan terpilih: ")+numerator+"/"+denominator+"."
      };
    }

    if (kind === "linear") {
      const slope=a/2, intercept=b-3;
      const mapX=(x:number)=>260+x*45, mapY=(y:number)=>160-y*35;
      return {
        title: en?"Linear Equation Lab":"Lab Persamaan Linear",
        description: en?"Move the slope and intercept to see how an equation changes its graph.":"Ubah gradien dan intersep untuk melihat perubahan persamaan pada grafik.",
        controls:<><Slider label={en?"Slope m":"Gradien m"} value={slope} min={-3} max={3} step={0.5} onChange={(v)=>setA(v*2)} /><Slider label={en?"Intercept b":"Intersep b"} value={intercept} min={-4} max={4} onChange={(v)=>setB(v+3)} /></>,
        visual:<CoordinatePlane><line x1={mapX(-4)} y1={mapY(slope*(-4)+intercept)} x2={mapX(4)} y2={mapY(slope*4+intercept)} className="svg-line-primary" /><circle cx={mapX(0)} cy={mapY(intercept)} r="7" className="svg-point" /><text x="275" y="44" className="svg-large-label">y = {slope}x {intercept>=0?"+ ":"− "}{Math.abs(intercept)}</text></CoordinatePlane>,
        note:en?"Slope controls steepness; the intercept is the y-axis crossing.":"Gradien mengatur kemiringan; intersep adalah titik potong sumbu-y."
      };
    }

    if (kind === "function") {
      const qa=a/2,h=b-3,qk=c-1;
      const pts=Array.from({length:81},(_,i)=>{const x=-4+i*.1;const y=qa*(x-h)*(x-h)+qk;return [260+x*45,160-y*28];}).filter(p=>p[1]>15&&p[1]<305);
      return {
        title:en?"Function Transformation Lab":"Lab Transformasi Fungsi",
        description:en?"Explore the quadratic family y=a(x-h)²+k.":"Eksplorasi keluarga fungsi kuadrat y=a(x-h)²+k.",
        controls:<><Slider label="a" value={qa} min={-2} max={2} step={0.25} onChange={(v)=>setA(v*2)} /><Slider label="h" value={h} min={-3} max={3} onChange={(v)=>setB(v+3)} /><Slider label="k" value={qk} min={-3} max={3} onChange={(v)=>setC(v+1)} /></>,
        visual:<CoordinatePlane><polyline points={pts.map(p=>p.join(",")).join(" ")} className="svg-curve" /><circle cx={260+h*45} cy={160-qk*28} r="7" className="svg-point" /><text x="275" y="44" className="svg-large-label">vertex = ({h},{qk})</text></CoordinatePlane>,
        note:en?"The vertex is (h,k); the sign of a controls the opening direction.":"Titik puncak adalah (h,k); tanda a menentukan arah bukaan parabola."
      };
    }

    if (kind === "trig") {
      const rad=angle*Math.PI/180,cx=260,cy=155,r=105,px=cx+r*Math.cos(rad),py=cy-r*Math.sin(rad);
      return {
        title:en?"Unit Circle Lab":"Lab Lingkaran Satuan",
        description:en?"Move the angle and observe sine and cosine as coordinates.":"Ubah sudut dan amati sinus serta cosinus sebagai koordinat.",
        controls:<Slider label={en?"Angle θ":"Sudut θ"} value={angle} min={0} max={360} onChange={setAngle} />,
        visual:<svg viewBox="0 0 520 320" className="interactive-svg"><line x1="80" y1={cy} x2="440" y2={cy} className="svg-axis" /><line x1={cx} y1="25" x2={cx} y2="285" className="svg-axis" /><circle cx={cx} cy={cy} r={r} className="svg-circle" /><line x1={cx} y1={cy} x2={px} y2={py} className="svg-line-primary" /><line x1={px} y1={py} x2={px} y2={cy} className="svg-dash" /><line x1={px} y1={py} x2={cx} y2={py} className="svg-dash" /><circle cx={px} cy={py} r="7" className="svg-point" /><text x="260" y="305" textAnchor="middle" className="svg-large-label">sin θ = {Math.sin(rad).toFixed(3)} · cos θ = {Math.cos(rad).toFixed(3)}</text></svg>,
        note:en?"The point on the unit circle is (cos θ, sin θ).":"Titik pada lingkaran satuan adalah (cos θ, sin θ)."
      };
    }

    if (kind === "riemann") {
      const parts=Math.max(2,Math.min(32,n)),dx=1/parts;
      const sum=Array.from({length:parts},(_,i)=>Math.pow((i+1)*dx,2)*dx).reduce((x,y)=>x+y,0);
      return {
        title:en?"Riemann Sum Lab":"Lab Jumlah Riemann",
        description:en?"Increase the number of subintervals and watch the right-endpoint sum approach 1/3.":"Perbanyak subinterval dan amati jumlah ujung kanan mendekati 1/3.",
        controls:<Slider label={en?"Subintervals n":"Banyak subinterval n"} value={parts} min={2} max={32} onChange={setN} />,
        visual:<svg viewBox="0 0 520 320" className="interactive-svg"><line x1="55" y1="260" x2="465" y2="260" className="svg-axis" /><line x1="55" y1="260" x2="55" y2="35" className="svg-axis" />{Array.from({length:parts},(_,i)=>{const xx=55+i*(390/parts),t=(i+1)/parts,h=190*t*t;return <rect key={i} x={xx} y={260-h} width={390/parts} height={h} className="svg-riemann-bar" />;})}<polyline points={Array.from({length:81},(_,i)=>{const t=i/80;return [55+t*390,260-190*t*t].join(",")}).join(" ")} className="svg-curve" /><text x="260" y="300" textAnchor="middle" className="svg-large-label">Sₙ = {sum.toFixed(5)} · exact = 0.33333</text></svg>,
        note:(en?"Absolute error: ":"Galat absolut: ")+Math.abs(sum-1/3).toFixed(5)+"."
      };
    }

    if (kind === "pigeonhole") {
      const objects=Math.max(2,Math.min(30,n)),boxes=Math.max(2,Math.min(10,k)),bound=Math.ceil(objects/boxes);
      return {
        title:en?"Pigeonhole Simulator":"Simulator Pigeonhole",
        description:en?"Change objects and boxes to see the guaranteed lower bound.":"Ubah jumlah objek dan kotak untuk melihat batas minimum yang dijamin.",
        controls:<><Slider label={en?"Objects N":"Objek N"} value={objects} min={2} max={30} onChange={setN} /><Slider label={en?"Boxes k":"Kotak k"} value={boxes} min={2} max={10} onChange={setK} /></>,
        visual:<div className="pigeonhole-lab"><div className="big-metric">{bound}</div><RichMath>{(en?"At least one box contains at least ":"Sedikitnya satu kotak memuat paling sedikit ")+"$\\lceil "+objects+"/"+boxes+"\\rceil="+bound+"$ "+(en?"objects.":"objek.")}</RichMath><div className="pigeonhole-boxes">{Array.from({length:boxes},(_,i)=><span key={i}>{i+1}</span>)}</div></div>,
        note:en?"The principle gives a guaranteed minimum, not the exact largest occupancy.":"Prinsip ini memberi jaminan minimum, bukan okupansi maksimum yang tepat."
      };
    }

    if (kind === "spectrum") {
      const vertices=Math.max(3,Math.min(8,n));
      const spectrum=graphType==="complete"?[vertices-1,...Array(vertices-1).fill(-1)]:graphType==="cycle"?Array.from({length:vertices},(_,j)=>2*Math.cos(2*Math.PI*j/vertices)):Array.from({length:vertices},(_,j)=>2*Math.cos((j+1)*Math.PI/(vertices+1)));
      const nodes=Array.from({length:vertices},(_,i)=>{const th=-Math.PI/2+2*Math.PI*i/vertices;return [260+105*Math.cos(th),155+105*Math.sin(th)];});
      const edges:number[][]=[];
      if(graphType==="complete"){for(let i=0;i<vertices;i++)for(let j=i+1;j<vertices;j++)edges.push([i,j]);}else{for(let i=0;i<vertices-1;i++)edges.push([i,i+1]);if(graphType==="cycle")edges.push([vertices-1,0]);}
      return {
        title:en?"Graph Spectrum Lab":"Lab Spektrum Graf",
        description:en?"Compare adjacency spectra of paths, cycles, and complete graphs.":"Bandingkan spektrum adjacency lintasan, siklus, dan graf lengkap.",
        controls:<><div className="lab-segmented">{(["path","cycle","complete"] as const).map(type=><button type="button" key={type} className={graphType===type?"active":""} onClick={()=>setGraphType(type)}>{type==="path"?(en?"Path":"Lintasan"):type==="cycle"?(en?"Cycle":"Siklus"):(en?"Complete":"Lengkap")}</button>)}</div><Slider label={en?"Vertices n":"Simpul n"} value={vertices} min={3} max={8} onChange={setN} /></>,
        visual:<svg viewBox="0 0 520 320" className="interactive-svg">{edges.map(([u,v],i)=><line key={i} x1={nodes[u][0]} y1={nodes[u][1]} x2={nodes[v][0]} y2={nodes[v][1]} className="svg-edge" />)}{nodes.map((p,i)=><g key={i}><circle cx={p[0]} cy={p[1]} r="17" className="svg-node" /><text x={p[0]} y={p[1]+5} textAnchor="middle" className="svg-node-label">{i+1}</text></g>)}</svg>,
        note:(en?"Adjacency spectrum: ":"Spektrum adjacency: ")+spectrum.map(x=>x.toFixed(3)).join(", ")
      };
    }

    if (kind === "modclock") {
      const modulus=Math.max(2,Math.min(16,n)),start=((a%modulus)+modulus)%modulus,step=((b%modulus)+modulus)%modulus,result=(start+step)%modulus;
      const nodes=Array.from({length:modulus},(_,i)=>{const th=-Math.PI/2+2*Math.PI*i/modulus;return [260+105*Math.cos(th),155+105*Math.sin(th)];});
      return {
        title:en?"Modular Clock":"Jam Modular",
        description:en?"Experiment with addition modulo m.":"Eksperimen dengan penjumlahan modulo m.",
        controls:<><Slider label="m" value={modulus} min={2} max={16} onChange={setN} /><Slider label={en?"Start":"Mulai"} value={start} min={0} max={modulus-1} onChange={setA} /><Slider label={en?"Add":"Tambah"} value={step} min={0} max={modulus-1} onChange={setB} /></>,
        visual:<svg viewBox="0 0 520 320" className="interactive-svg"><circle cx="260" cy="155" r="105" className="svg-circle" />{nodes.map((p,i)=><g key={i}><circle cx={p[0]} cy={p[1]} r={i===result?18:13} className={i===result?"svg-point":"svg-node"} /><text x={p[0]} y={p[1]+4} textAnchor="middle" className="svg-node-label">{i}</text></g>)}</svg>,
        note:start+" + "+step+" ≡ "+result+" (mod "+modulus+")"
      };
    }

    if (kind === "combinatorics") {
      const decisions=Math.max(1,Math.min(10,n)),choose=Math.max(0,Math.min(decisions,k));
      const binom=(N:number,K:number)=>{let r=1;for(let i=1;i<=K;i++)r=r*(N-K+i)/i;return Math.round(r);};
      return {
        title:en?"Counting Lab":"Lab Counting",
        description:en?"Compare binary outcomes with unordered subset counts.":"Bandingkan banyak outcome biner dengan banyak subset tanpa urutan.",
        controls:<><Slider label="n" value={decisions} min={1} max={10} onChange={(v)=>{setN(v);setK(Math.min(k,v));}} /><Slider label="k" value={choose} min={0} max={decisions} onChange={setK} /></>,
        visual:<div className="metric-grid"><div><span>{en?"Binary outcomes":"Outcome biner"}</span><strong>{Math.pow(2,decisions)}</strong><RichMath>{"$2^{"+decisions+"}$"}</RichMath></div><div><span>{en?"k-subsets":"Subset berukuran k"}</span><strong>{binom(decisions,choose)}</strong><RichMath>{"$\\binom{"+decisions+"}{"+choose+"}$"}</RichMath></div></div>,
        note:en?"Ordered decisions and unordered subset selection are different counting models.":"Keputusan berurutan dan pemilihan subset tanpa urutan adalah model counting yang berbeda."
      };
    }

    if (kind === "onmipa-linear") {
      const vx=k-3,vy=n-8,tx=a*vx+b*vy,ty=c*vx+d*vy,det=a*d-b*c,scale=22,ox=260,oy=160;
      return {
        title:en?"Linear Transformation Lab":"Lab Transformasi Linear",
        description:en?"Change a 2×2 matrix and a vector; observe the image and determinant.":"Ubah matriks 2×2 dan sebuah vektor; amati citra serta determinannya.",
        controls:<><div className="matrix-controls"><Slider label="a" value={a} min={-3} max={3} onChange={setA} /><Slider label="b" value={b} min={-3} max={3} onChange={setB} /><Slider label="c" value={c} min={-3} max={3} onChange={setC} /><Slider label="d" value={d} min={-3} max={3} onChange={setD} /></div><Slider label="x" value={vx} min={-4} max={4} onChange={(v)=>setK(v+3)} /><Slider label="y" value={vy} min={-4} max={4} onChange={(v)=>setN(v+8)} /></>,
        visual:<CoordinatePlane><line x1={ox} y1={oy} x2={ox+vx*scale} y2={oy-vy*scale} className="svg-line-accent" /><line x1={ox} y1={oy} x2={ox+tx*scale} y2={oy-ty*scale} className="svg-result-vector" /><text x="280" y="44" className="svg-large-label">det A = {det}</text></CoordinatePlane>,
        note:"v=("+vx+","+vy+"), Av=("+tx+","+ty+"). "+(en?(det!==0?"The matrix is invertible.":"The matrix is singular."):(det!==0?"Matriks invertibel.":"Matriks singular."))
      };
    }

    if (kind === "real-analysis") {
      const eps=Math.max(.05,Math.min(.5,epsilon)),threshold=Math.floor(1/eps)+1;
      const pts=Array.from({length:30},(_,i)=>{const j=i+1;return [55+i*13.5,160-90/j];});
      return {
        title:en?"ε–N Convergence Lab":"Lab Konvergensi ε–N",
        description:en?"Shrink ε and see how far into the sequence 1/n you must go.":"Perkecil ε dan lihat seberapa jauh indeks yang dibutuhkan untuk barisan 1/n.",
        controls:<Slider label="ε" value={eps} min={.05} max={.5} step={.05} onChange={setEpsilon} />,
        visual:<svg viewBox="0 0 520 320" className="interactive-svg"><line x1="45" y1="160" x2="475" y2="160" className="svg-limit-line" /><rect x="55" y={160-90*eps} width="405" height={180*eps} className="svg-epsilon-band" />{pts.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="4" className={i+1>=threshold?"svg-point":"svg-node"} />)}<line x1={55+(threshold-1)*13.5} y1="45" x2={55+(threshold-1)*13.5} y2="270" className="svg-test-line" /><text x="260" y="300" textAnchor="middle" className="svg-large-label">N = {threshold} · ε = {eps.toFixed(2)}</text></svg>,
        note:(en?"If n ≥ ":"Jika n ≥ ")+threshold+", 1/n < "+eps.toFixed(2)+"."
      };
    }

    const v1=[a,b],v2=[c,d],det=v1[0]*v2[1]-v1[1]*v2[0],scale=26,ox=260,oy=160;
    return {
      title:en?"Basis & Determinant Lab":"Lab Basis & Determinan",
      description:en?"Move two vectors and observe when they form a basis of R².":"Ubah dua vektor dan amati kapan keduanya membentuk basis R².",
      controls:<div className="matrix-controls"><Slider label="v₁x" value={a} min={-4} max={4} onChange={setA} /><Slider label="v₁y" value={b} min={-4} max={4} onChange={setB} /><Slider label="v₂x" value={c} min={-4} max={4} onChange={setC} /><Slider label="v₂y" value={d} min={-4} max={4} onChange={setD} /></div>,
      visual:<CoordinatePlane><line x1={ox} y1={oy} x2={ox+a*scale} y2={oy-b*scale} className="svg-line-primary" /><line x1={ox} y1={oy} x2={ox+c*scale} y2={oy-d*scale} className="svg-line-accent" /><text x="280" y="44" className="svg-large-label">det[v₁ v₂] = {det}</text></CoordinatePlane>,
      note:en?(det!==0?"The vectors form a basis of R².":"The vectors are linearly dependent."):(det!==0?"Kedua vektor membentuk basis R².":"Kedua vektor bergantung linear.")
    };
  }, [kind,en,a,b,c,d,n,k,angle,epsilon,graphType]);

  return (
    <section className="interactive-lab" id="lab-interaktif">
      <div className="interactive-lab-head">
        <div><span className="eyebrow">{en?"Interactive Lab":"Lab Interaktif"}</span><h2>{panel.title}</h2><p>{panel.description}</p></div>
        <button className="lab-reset" type="button" onClick={reset}>{en?"Reset":"Atur Ulang"}</button>
      </div>
      <div className="interactive-lab-grid">
        <div className="lab-controls-panel">{panel.controls}</div>
        <div className="lab-visual-panel">{panel.visual}</div>
      </div>
      <div className="lab-note"><span>◎</span><p>{panel.note}</p></div>
    </section>
  );
}
