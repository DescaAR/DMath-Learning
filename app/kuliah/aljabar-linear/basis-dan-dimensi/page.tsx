import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { MathVisualization } from "@/components/MathVisualizations";
import { InteractiveMathLab } from "@/components/InteractiveMathLab";
import { RichMath } from "@/components/RichMath";
import { BasisDimensionEnglish } from "@/components/BasisDimensionEnglish";
import { ScrollSpyToc } from "@/components/ScrollSpyToc";

export const metadata: Metadata = createPageMetadata({
  title: "Basis dan Dimensi — Aljabar Linear",
  description: "Materi lengkap Basis dan Dimensi Aljabar Linear: kombinasi linear, span, bebas linear, basis, koordinat, dimensi, basis subruang, ruang baris-kolom, dan rank-nullity.",
  path: "/kuliah/aljabar-linear/basis-dan-dimensi",
  type: "article",
  keywords: ["basis dan dimensi", "aljabar linear basis", "rank nullity"],
});

const sections = [
  ["overview", "Pengantar"],
  ["review", "Review Ruang Vektor"],
  ["kombinasi", "Kombinasi Linear"],
  ["span", "Span"],
  ["bebas", "Bebas Linear"],
  ["basis", "Basis"],
  ["koordinat", "Koordinat"],
  ["dimensi", "Dimensi"],
  ["subruang", "Basis Subruang"],
  ["ekstensi", "Ekstensi Basis"],
  ["baris-kolom", "Ruang Baris & Kolom"],
  ["rank-nullity", "Rank–Nullity"],
  ["contoh", "Contoh Terbahas"],
  ["ringkasan", "Ringkasan"],
] as const;

function P({ children }: { children: string }) {
  return <p><RichMath>{children}</RichMath></p>;
}

function Theorem({
  number,
  title,
  statement,
  proof,
  importance,
}: {
  number: string;
  title: string;
  statement: string;
  proof: string[];
  importance: string;
}) {
  return (
    <div className="theorem-suite">
      <div className="theorem-box">
        <div className="box-kicker">Teorema {number}</div>
        <strong>{title}</strong>
        <P>{statement}</P>
      </div>
      <div className="proof-box proof-detailed">
        <div className="box-kicker">Bukti</div>
        {proof.map((step, index) => (
          <div className="proof-step" key={step}>
            <span>{index + 1}</span>
            <P>{step}</P>
          </div>
        ))}
        <p className="proof-end">■</p>
      </div>
      <div className="why-box">
        <strong>Mengapa teorema ini penting?</strong>
        <P>{importance}</P>
      </div>
    </div>
  );
}

export default function BasisDimensionPage() {
  return (
    <>
      <div className="textbook-page ird-page lang-id-only">
      <section className="chapter-hero textbook-hero ird-hero premium-chapter-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/materi">Materi</Link>
            <span>/</span>
            <span>Kuliah</span>
            <span>/</span>
            <span>Aljabar Linear</span>
            <span>/</span>
            <strong>Basis dan Dimensi</strong>
          </div>
          <span className="eyebrow">Aljabar Linear · Materi Kuliah</span>
          <h1>Basis dan Dimensi</h1>
          <p>
            Materi ini membahas kombinasi linear, span, kebebasan linear, basis, koordinat, dimensi, basis subruang, ruang baris dan kolom, serta Teorema Rank–Nullity.
          </p>
          <div className="chapter-meta">
            <span>Kuliah</span>
            <span>Definisi · Teorema · Bukti</span>
            <span>± 90–120 menit</span>
            <span>100 bank soal</span>
          </div>
          <div className="actions">
            <Link className="btn primary" href="/kuliah/aljabar-linear/basis-dan-dimensi/latihan">Mulai Latihan</Link>
            <Link className="btn secondary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">Buka 100 Bank Soal</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout textbook-layout wide-article-layout">
          <ScrollSpyToc
            title="Isi Bab"
            sections={sections.map(([id, label]) => ({ id, label }))}
          />

          <article className="article deep-article textbook-article ird-article basis-article">
            <section className="book-section ird-source-section" id="overview">
              <span className="eyebrow">Pengantar</span>
              <h2>Pengantar Basis dan Dimensi</h2>
              <P>{String.raw`Dalam $\mathbb R^2$, kita terbiasa memakai $e_1=(1,0)$ dan $e_2=(0,1)$.
                Namun pasangan lain seperti $v_1=(1,1)$ dan $v_2=(1,-1)$ juga dapat dipakai untuk
                mendeskripsikan setiap vektor di $\mathbb R^2$ secara unik. Pasangan semacam ini disebut basis.`}</P>
              <P>{String.raw`Gagasan basis menggabungkan dua ide: himpunan tersebut harus cukup besar untuk merentang ruang,
                tetapi tidak boleh memiliki vektor yang redundan.
                Dimensi kemudian mengukur banyaknya vektor yang diperlukan dalam sebuah basis.`}</P>
              <MathVisualization kind="basis" />
              <div style={{marginTop:24}}><InteractiveMathLab kind="basis" /></div>

            </section>

            <section className="book-section ird-source-section" id="review">
              <span className="eyebrow">01 · Review Ruang Vektor</span>
              <h2>Ruang Vektor dan Subruang</h2>
              <P>{String.raw`Sebuah ruang vektor $V$ atas lapangan $\mathbb F$ adalah himpunan yang dilengkapi
                penjumlahan vektor dan perkalian skalar, serta memenuhi aksioma linearitas.
                Contoh utama adalah $\mathbb R^n$, ruang polinom $\mathcal P_n$, ruang matriks
                $M_{m\times n}(\mathbb F)$, dan ruang fungsi.`}</P>
              <div className="definition-box numbered-box">
                <div className="box-kicker">Definisi</div>
                <strong>Subruang</strong>
                <P>{String.raw`Himpunan $W\subseteq V$ disebut subruang apabila $0\in W$ dan untuk setiap
                  $u,v\in W$ serta $\alpha,\beta\in\mathbb F$, berlaku $\alpha u+\beta v\in W$.`}</P>
              </div>
              <div className="example-box content-box"><div className="box-kicker">Contoh</div><P>{"Himpunan W={(x,y,0): x,y∈ℝ} di ℝ³ merupakan subruang karena memuat vektor nol dan tertutup terhadap kombinasi linear."}</P></div>

              <Theorem
                number="1"
                title="Kriteria Subruang"
                statement="Himpunan tak kosong $W\subseteq V$ adalah subruang jika dan hanya jika untuk setiap $u,v\in W$ dan $\alpha,\beta\in\mathbb F$, berlaku $\alpha u+\beta v\in W$."
                proof={[
                  "Jika $W$ subruang, sifat tertutup terhadap kombinasi linear langsung mengikuti aksioma subruang.",
                  "Sebaliknya, karena $W$ tak kosong, diambil $w\\in W$. Dengan memilih $\\alpha=0$ dan $\\beta=0$, diperoleh $0\\in W$.",
                  "Pilih $\\alpha=1,\\beta=1$ untuk mendapatkan $u+v\\in W$, dan pilih $\\beta=0$ untuk mendapatkan $\\alpha u\\in W$.",
                  "Operasi pada $W$ diwarisi dari $V$, jadi seluruh aksioma lain otomatis berlaku. Dengan demikian $W$ subruang."
                ]}
                importance="Kriteria ini mempercepat verifikasi subruang karena semua syarat tertutup dapat digabung dalam satu pernyataan."
              />
            </section>

            <section className="book-section ird-source-section" id="kombinasi">
              <span className="eyebrow">02 · Kombinasi Linear</span>
              <h2>Kombinasi Linear</h2>
              <div className="definition-box numbered-box">
                <div className="box-kicker">Definisi</div>
                <strong>Kombinasi Linear</strong>
                <P>{String.raw`Diambil $v_1,\ldots,v_k\in V$. Vektor $v\in V$ disebut kombinasi linear dari
                  $v_1,\ldots,v_k$ apabila terdapat skalar $a_1,\ldots,a_k\in\mathbb F$ sehingga
                  $$v=a_1v_1+\cdots+a_kv_k.$$`}</P>
              </div>
              <div className="example-suite">
                <div className="example-box">
                  <div className="box-kicker">Contoh Dasar</div>
                  <strong><RichMath>{String.raw`Apakah $(5,1)$ kombinasi linear dari $(1,1)$ dan $(2,-1)$?`}</RichMath></strong>
                  <P>{String.raw`Cari $a,b$ sehingga $a(1,1)+b(2,-1)=(5,1)$.`}</P>
                </div>
                <div className="solution-box content-box">
                  <strong>Pembahasan</strong>
                  <P>{String.raw`Sistemnya adalah $a+2b=5$ dan $a-b=1$. Dari persamaan kedua,
                    $a=1+b$. Substitusi memberi $1+3b=5$, jadi $b=\frac43$ dan
                    $a=\frac73$. Dengan demikian $(5,1)$ memang kombinasi linear.`}</P>
                </div>
              </div>
            </section>

            <section className="book-section ird-source-section" id="span">
              <span className="eyebrow">03 · Span</span>
              <h2>Span</h2>
              <div className="definition-box">
                <strong>Definisi Span</strong>
                <P>{String.raw`Untuk $S=\{v_1,\ldots,v_k\}\subseteq V$,
                  $$\operatorname{span}(S)=\left\{a_1v_1+\cdots+a_kv_k:a_i\in\mathbb F\right\}.$$`}</P>
              </div>
              <div className="example-box content-box"><div className="box-kicker">Contoh</div><P>{"Di ℝ³, span{(1,0,0),(0,1,0)} adalah bidang z=0, yaitu semua vektor berbentuk (a,b,0)."}</P></div>

              <Theorem
                number="2"
                title="Span adalah Subruang Terkecil yang Memuat S"
                statement="Untuk setiap $S\subseteq V$, $\operatorname{span}(S)$ adalah subruang $V$. Selain itu, jika $W$ adalah subruang yang memuat $S$, maka $\operatorname{span}(S)\subseteq W$."
                proof={[
                  "Vektor nol berada di $\\operatorname{span}(S)$ dengan memilih semua koefisien sama dengan nol.",
                  "Diambil $x=\\sum a_iv_i$ dan $y=\\sum b_iv_i$ di $\\operatorname{span}(S)$ serta $\\alpha,\\beta\\in\\mathbb F$.",
                  "Diperoleh $\\alpha x+\\beta y=\\sum(\\alpha a_i+\\beta b_i)v_i$, yang kembali merupakan kombinasi linear anggota $S$. Jadi $\\operatorname{span}(S)$ subruang.",
                  "Jika $W$ subruang dan $S\\subseteq W$, tertutupnya $W$ terhadap kombinasi linear mengakibatkan setiap anggota $\\operatorname{span}(S)$ berada di $W$.",
                  "Dengan demikian $\\operatorname{span}(S)$ adalah subruang terkecil yang memuat $S$."
                ]}
                importance="Hasil ini memberi makna struktural span: bukan sekadar daftar kombinasi linear, tetapi subruang minimal yang dibangun oleh suatu himpunan."
              />

              <div className="counterexample-box content-box">
                <strong>Counterexample penting</strong>
                <P>{String.raw`Di $\mathbb R^3$, himpunan $\{(1,0,0),(0,1,0)\}$ tidak merentang
                  $\mathbb R^3$ karena setiap kombinasinya berbentuk $(a,b,0)$.
                  Jadi vektor $(0,0,1)$ tidak dapat dihasilkan.`}</P>
              </div>
            </section>

            <section className="book-section ird-source-section" id="bebas">
              <span className="eyebrow">04 · Bebas Linear</span>
              <h2>Bebas Linear</h2>
              <div className="definition-box">
                <strong>Definisi Bebas Linear</strong>
                <P>{String.raw`Himpunan $S=\{v_1,\ldots,v_k\}$ disebut bebas linear apabila
                  $$a_1v_1+\cdots+a_kv_k=0$$
                  hanya mempunyai solusi trivial $a_1=\cdots=a_k=0$.`}</P>
              </div>
              <div className="example-box content-box"><div className="box-kicker">Contoh</div><P>{"Vektor (1,0) dan (0,1) bebas linear, sedangkan (1,0) dan (2,0) bergantung linear karena vektor kedua merupakan dua kali vektor pertama."}</P></div>

              <Theorem
                number="3"
                title="Kriteria Redundansi"
                statement="Himpunan $v_1,\ldots,v_k$ dengan $k\ge2$ bergantung linear jika dan hanya jika salah satu vektor merupakan kombinasi linear dari vektor-vektor lainnya."
                proof={[
                  "Andaikan himpunan bergantung linear. Terdapat skalar tidak semuanya nol dengan $\\sum a_iv_i=0$.",
                  "Pilih indeks $j$ dengan $a_j\\neq0$. Susun ulang persamaan untuk memperoleh $v_j=-\\sum_{i\\neq j}(a_i/a_j)v_i$.",
                  "Jadi $v_j$ adalah kombinasi linear vektor lainnya.",
                  "Sebaliknya, jika $v_j=\\sum_{i\\neq j}c_iv_i$, pindahkan semua suku ke satu ruas. Diperoleh kombinasi linear nol dengan koefisien $v_j$ sama dengan $1$, jadi relasi tersebut nontrivial.",
                  "Dengan demikian himpunan bergantung linear."
                ]}
                importance="Teorema ini menjelaskan arti intuitif ketergantungan linear: ada vektor yang sebenarnya tidak menambah arah baru."
              />

              <div className="comparison-table">
                <div className="comparison-col">
                  <span className="eyebrow">Bebas linear</span>
                  <strong>Tidak ada redundansi</strong>
                  <P>{String.raw`$a_1v_1+\cdots+a_kv_k=0$ hanya punya solusi trivial.`}</P>
                </div>
                <div className="comparison-col">
                  <span className="eyebrow">Bergantung linear</span>
                  <strong>Ada informasi berlebih</strong>
                  <P>{String.raw`Sedikitnya satu vektor dapat dibangun dari vektor lain.`}</P>
                </div>
              </div>
            </section>

            <section className="book-section ird-source-section" id="basis">
              <span className="eyebrow">05 · Basis</span>
              <h2>Basis</h2>
              <div className="definition-box">
                <strong>Definisi Basis</strong>
                <P>{String.raw`Himpunan $B=\{v_1,\ldots,v_n\}$ adalah basis $V$ apabila $B$ bebas linear dan
                  $\operatorname{span}(B)=V$.`}</P>
              </div>
              <div className="example-box content-box"><div className="box-kicker">Contoh</div><P>{"Himpunan {(1,0),(0,1)} merupakan basis ℝ² karena bebas linear dan merentang seluruh ℝ²."}</P></div>

              <Theorem
                number="4"
                title="Keunikan Representasi terhadap Basis"
                statement="Jika $B=(v_1,\ldots,v_n)$ adalah basis $V$, maka setiap $v\in V$ dapat ditulis secara unik sebagai $v=a_1v_1+\cdots+a_nv_n$."
                proof={[
                  "Karena $B$ merentang $V$, representasi tersebut ada.",
                  "Untuk keunikan, andaikan $v=\\sum a_iv_i=\\sum b_iv_i$.",
                  "Kurangkan kedua representasi dan diperoleh $\\sum(a_i-b_i)v_i=0$.",
                  "Karena $B$ bebas linear, $a_i-b_i=0$ untuk setiap $i$.",
                  "Jadi $a_i=b_i$ untuk setiap $i$. Dengan demikian representasi relatif terhadap basis unik."
                ]}
                importance="Keunikan inilah yang memungkinkan konsep koordinat. Tanpa kebebasan linear, satu vektor dapat memiliki banyak representasi."
              />

              <div className="example-suite">
                <div className="example-box">
                  <div className="box-kicker">Worked Example</div>
                  <strong><RichMath>{String.raw`Basis nonstandar di $\\mathbb R^2$`}</RichMath></strong>
                  <P>{String.raw`Ambil $B=((1,1),(1,-1))$. Tentukan koordinat $(4,2)$ relatif terhadap $B$.`}</P>
                </div>
                <div className="solution-box content-box">
                  <P>{String.raw`Cari $a,b$ dengan $a(1,1)+b(1,-1)=(4,2)$. Sistem
                    $a+b=4$ dan $a-b=2$ memberi $a=3$ dan $b=1$.
                    Jadi $[(4,2)]_B=(3,1)$.`}</P>
                </div>
              </div>
            </section>

            <section className="book-section ird-source-section" id="koordinat">
              <span className="eyebrow">06 · Koordinat</span>
              <h2>Koordinat terhadap Basis</h2>
              <P>{String.raw`Untuk basis berurutan $B=(v_1,\ldots,v_n)$, koordinat vektor
                $v=a_1v_1+\cdots+a_nv_n$ didefinisikan sebagai
                $$[v]_B=\begin{pmatrix}a_1\\\vdots\\a_n\end{pmatrix}.$$`}</P>

              <div className="example-box content-box"><div className="box-kicker">Contoh</div><P>{"Untuk basis standar E=((1,0),(0,1)), vektor (3,-2) mempunyai koordinat (3,-2)ᵀ terhadap E."}</P></div>

              <Theorem
                number="5"
                title="Pemetaan Koordinat adalah Isomorfisme"
                statement="Jika $B=(v_1,\ldots,v_n)$ basis $V$, maka pemetaan $\Phi_B:V\to\mathbb F^n$ yang didefinisikan oleh $\Phi_B(v)=[v]_B$ adalah isomorfisme."
                proof={[
                  "Linearitas: jika $[u]_B=(a_i)$ dan $[v]_B=(b_i)$, maka $[\\alpha u+\\beta v]_B=(\\alpha a_i+\\beta b_i)=\\alpha[u]_B+\\beta[v]_B$.",
                  "Injektivitas: jika $[u]_B=[v]_B$, keunikan representasi basis memberi $u=v$.",
                  "Surjektivitas: untuk setiap $(c_1,\\ldots,c_n)\\in\\mathbb F^n$, vektor $c_1v_1+\\cdots+c_nv_n$ memiliki koordinat tersebut.",
                  "Jadi $\\Phi_B$ linear, injektif, dan surjektif."
                ]}
                importance="Teorema ini menjelaskan mengapa ruang vektor berdimensi $n$ secara aljabar setara dengan $\mathbb F^n$ setelah sebuah basis dipilih."
              />
            </section>

            <section className="book-section ird-source-section" id="dimensi">
              <span className="eyebrow">07 · Dimensi</span>
              <h2>Dimensi</h2>
              <div className="definition-box">
                <strong>Definisi Dimensi</strong>
                <P>{String.raw`Jika $V$ mempunyai basis berhingga dengan $n$ anggota, didefinisikan
                  $\dim V=n$. Untuk ruang nol, $\dim\{0\}=0$.`}</P>
              </div>
              <div className="example-box content-box"><div className="box-kicker">Contoh</div><P>{"Ruang polinom P₂ mempunyai basis {1,x,x²}. Oleh karena itu, dim P₂=3."}</P></div>

              <Theorem
                number="6"
                title="Lemma Pertukaran"
                statement="Jika $v_1,\ldots,v_m$ bebas linear dan $w_1,\ldots,w_n$ merentang $V$, maka $m\le n$."
                proof={[
                  "Karena $w_1,\\ldots,w_n$ merentang $V$, vektor $v_1$ dapat dinyatakan sebagai kombinasi linear para $w_j$. Sedikitnya satu koefisien tidak nol.",
                  "Pilih $w_j$ dengan koefisien tidak nol dan selesaikan persamaan untuk $w_j$. Dengan demikian $v_1$ dapat menggantikan $w_j$ tanpa mengubah span.",
                  "Ulangi proses untuk $v_2,\\ldots,v_m$. Kebebasan linear menjamin pada setiap tahap terdapat vektor lama yang masih dapat diganti.",
                  "Setelah $m$ langkah, telah dilakukan $m$ penggantian pada daftar awal yang hanya memiliki $n$ vektor. Oleh karena itu $m\\le n$."
                ]}
                importance="Lemma pertukaran adalah mesin utama di balik keunikan dimensi dan banyak hasil tentang ukuran basis."
              />

              <Theorem
                number="7"
                title="Semua Basis Hingga Memiliki Banyak Anggota yang Sama"
                statement="Jika $B$ dan $C$ adalah basis hingga ruang vektor $V$, maka $|B|=|C|$."
                proof={[
                  "Misalkan $|B|=m$ dan $|C|=n$.",
                  "Karena $B$ bebas linear dan $C$ merentang $V$, Lemma Pertukaran memberi $m\\le n$.",
                  "Karena $C$ bebas linear dan $B$ merentang $V$, Lemma Pertukaran memberi $n\\le m$.",
                  "Jadi $m=n$. Dengan demikian definisi dimensi tidak bergantung pada basis yang dipilih."
                ]}
                importance="Tanpa hasil ini, istilah 'dimensi ruang vektor' tidak akan terdefinisi dengan baik."
              />

              <div className="dimension-facts">
                <div>
                  <strong><RichMath>{String.raw`$\\dim\\mathbb R^n=n$`}</RichMath></strong>
                  <span><RichMath>{String.raw`basis standar memiliki $n$ vektor`}</RichMath></span>
                </div>
                <div>
                  <strong><RichMath>{String.raw`$\\dim\\mathcal P_n=n+1$`}</RichMath></strong>
                  <span><RichMath>{String.raw`basis $1,x,\\ldots,x^n$`}</RichMath></span>
                </div>
                <div>
                  <strong><RichMath>{String.raw`$\\dim M_{m\\times n}=mn$`}</RichMath></strong>
                  <span>satu basis elementer per entri</span>
                </div>
              </div>
            </section>

            <section className="book-section ird-source-section" id="subruang">
              <span className="eyebrow">08 · Basis Subruang</span>
              <h2>Basis dan Dimensi Subruang</h2>

              <Theorem
                number="8"
                title="Dimensi Subruang"
                statement="Jika $W$ subruang dari ruang berdimensi hingga $V$, maka $\dim W\le\dim V$. Kesetaraan terjadi jika dan hanya jika $W=V$."
                proof={[
                  "Ambil basis $w_1,\\ldots,w_k$ dari $W$. Karena $W\\subseteq V$, himpunan ini juga bebas linear di $V$.",
                  "Setiap himpunan bebas linear di $V$ memiliki paling banyak $\\dim V$ anggota, jadi $k\\le\\dim V$.",
                  "Jika $k=\\dim V$, maka basis $W$ memiliki tepat sebanyak dimensi $V$. Himpunan tersebut bebas linear di $V$, jadi otomatis basis $V$. Akibatnya $W=V$.",
                  "Sebaliknya, jika $W=V$, jelas dimensinya sama."
                ]}
                importance="Hasil ini sangat berguna untuk membuktikan kesamaan subruang: cukup buktikan inklusi dan kesamaan dimensi."
              />

              <div className="example-suite">
                <div className="example-box">
                  <strong><RichMath>{String.raw`Basis bidang di $\\mathbb R^3$`}</RichMath></strong>
                  <P>{String.raw`Tentukan basis $W=\{(x,y,z)\in\mathbb R^3:x+y+z=0\}$.`}</P>
                </div>
                <div className="solution-box content-box">
                  <P>{String.raw`Dari $z=-x-y$,
                    $$(x,y,z)=x(1,0,-1)+y(0,1,-1).$$
                    Kedua vektor bebas linear, jadi salah satu basis adalah
                    $\{(1,0,-1),(0,1,-1)\}$ dan $\dim W=2$.`}</P>
                </div>
              </div>
            </section>

            <section className="book-section ird-source-section" id="ekstensi">
              <span className="eyebrow">09 · Ekstensi Basis</span>
              <h2>Ekstensi Basis</h2>

              <Theorem
                number="9"
                title="Teorema Ekstensi Basis"
                statement="Setiap himpunan bebas linear hingga dalam ruang vektor berdimensi hingga dapat diperluas menjadi basis ruang tersebut."
                proof={[
                  "Diambil himpunan bebas linear $S=\\{v_1,\\ldots,v_k\\}$.",
                  "Jika $\\operatorname{span}(S)=V$, maka $S$ sudah merupakan basis.",
                  "Jika belum, pilih $v_{k+1}\\in V\\setminus\\operatorname{span}(S)$. Himpunan baru tetap bebas linear; jika tidak, $v_{k+1}$ dapat ditulis sebagai kombinasi linear anggota $S$, bertentangan dengan pilihan.",
                  "Ulangi proses selama span belum sama dengan $V$.",
                  "Karena setiap penambahan menaikkan ukuran himpunan bebas linear dan ukuran tersebut tidak dapat melebihi $\\dim V$, proses berhenti setelah berhingga langkah.",
                  "Himpunan akhir bebas linear dan merentang $V$, jadi merupakan basis."
                ]}
                importance="Teorema ini menjamin bahwa setiap informasi linear yang belum redundan dapat dilengkapi menjadi sistem koordinat penuh."
              />

              <Theorem
                number="10"
                title="Reduksi Spanning Set menjadi Basis"
                statement="Setiap spanning set hingga dari ruang vektor dapat direduksi menjadi basis dengan menghapus vektor-vektor redundan."
                proof={[
                  "Jika spanning set bebas linear, himpunan tersebut sudah merupakan basis.",
                  "Jika bergantung linear, Kriteria Redundansi memberi satu vektor yang merupakan kombinasi linear vektor lain.",
                  "Hapus vektor tersebut. Span tidak berubah.",
                  "Ulangi proses. Karena himpunan awal hingga, proses berhenti.",
                  "Himpunan akhir tetap merentang dan tidak lagi bergantung linear, jadi merupakan basis."
                ]}
                importance="Hasil ini adalah dasar algoritmik untuk mencari basis dari sekumpulan generator."
              />
            </section>

            <section className="book-section ird-source-section" id="baris-kolom">
              <span className="eyebrow">10 · Ruang Baris & Kolom</span>
              <h2>Ruang Baris dan Ruang Kolom</h2>
              <P>{String.raw`Untuk matriks $A\in\mathbb F^{m\times n}$, ruang baris adalah span semua baris $A$,
                sedangkan ruang kolom adalah span semua kolom $A$.`}</P>
              <div className="content-box idea-box">
                <strong>Aturan Komputasi</strong>
                <P>{String.raw`Baris tak nol pada bentuk eselon baris dapat dipakai sebagai basis row space.
                  Untuk column space, gunakan kolom-kolom matriks asal yang posisinya bersesuaian
                  dengan kolom pivot pada bentuk eselon.`}</P>
              </div>

              <div className="example-suite">
                <div className="example-box">
                  <strong>Menentukan basis column space</strong>
                  <P>{String.raw`Ambil
                    $$A=\begin{pmatrix}1&2&3\\0&1&1\\1&3&4\end{pmatrix}.$$`}</P>
                </div>
                <div className="solution-box content-box">
                  <P>{String.raw`Kolom ketiga memenuhi $c_3=c_1+c_2$. Kolom pertama dan kedua bebas linear.
                    Jadi basis column space dapat dipilih
                    $$\left\{\begin{pmatrix}1\\0\\1\end{pmatrix},
                    \begin{pmatrix}2\\1\\3\end{pmatrix}\right\}.$$`}</P>
                </div>
              </div>
            </section>

            <section className="book-section ird-source-section" id="rank-nullity">
              <span className="eyebrow">11 · Rank–Nullity</span>
              <h2>Teorema Rank–Nullity</h2>
              <div className="definition-box">
                <strong>Rank dan Nullity</strong>
                <P>{String.raw`Untuk $T:V\to W$, didefinisikan
                  $\operatorname{rank}(T)=\dim(\operatorname{im}T)$ dan
                  $\operatorname{nullity}(T)=\dim(\ker T)$.`}</P>
              </div>
              <div className="example-box content-box"><div className="box-kicker">Contoh</div><P>{"Untuk T:ℝ³→ℝ² dengan T(x,y,z)=(x,y), kernel dibangun oleh (0,0,1) dan image sama dengan ℝ². Dengan demikian nullity T=1 dan rank T=2."}</P></div>

              <Theorem
                number="11"
                title="Teorema Rank–Nullity"
                statement="Jika $V$ berdimensi hingga dan $T:V\to W$ linear, maka $\dim V=\operatorname{nullity}(T)+\operatorname{rank}(T)$."
                proof={[
                  "Ambil basis $u_1,\\ldots,u_k$ dari $\\ker T$.",
                  "Gunakan Teorema Ekstensi Basis untuk memperluasnya menjadi basis $u_1,\\ldots,u_k,v_1,\\ldots,v_r$ dari $V$.",
                  "Tunjukkan $Tv_1,\\ldots,Tv_r$ merentang $\\operatorname{im}T$: setiap $x\\in V$ dapat ditulis sebagai kombinasi basis tersebut, dan bagian kernel hilang setelah diterapkan $T$.",
                  "Tunjukkan $Tv_1,\\ldots,Tv_r$ bebas linear. Jika $\\sum a_iTv_i=0$, maka $\\sum a_iv_i\\in\\ker T$. Tetapi ekspansi basis menunjukkan vektor itu juga hanya memakai komponen $v_i$, jadi semua $a_i=0$.",
                  "Jadi $Tv_1,\\ldots,Tv_r$ adalah basis image, sehingga $\\operatorname{rank}(T)=r$ dan $\\operatorname{nullity}(T)=k$.",
                  "Karena basis $V$ memiliki $k+r$ anggota, diperoleh $\\dim V=k+r=\\operatorname{nullity}(T)+\\operatorname{rank}(T)$."
                ]}
                importance="Rank–nullity menghubungkan geometri kernel dengan keluaran transformasi. Teorema ini menjadi salah satu alat paling sering dipakai dalam Aljabar Linear."
              />

              <div className="content-box insight-box">
                <strong>Konsekuensi penting</strong>
                <P>{String.raw`Untuk operator $T:V\to V$ pada ruang berdimensi hingga,
                  $T$ injektif jika dan hanya jika $T$ surjektif.
                  Injektif berarti $\operatorname{nullity}(T)=0$; rank–nullity lalu memberi
                  $\operatorname{rank}(T)=\dim V$, yang ekuivalen dengan surjektif.`}</P>
              </div>
            </section>

            <section className="book-section ird-source-section" id="contoh">
              <span className="eyebrow">12 · Contoh Terbahas</span>
              <h2>Contoh Terbahas</h2>

              <div className="example-stack">
                <div className="example-suite">
                  <div className="example-box">
                    <div className="box-kicker">Dasar</div>
                    <strong>Dimensi sebuah span</strong>
                    <P>{String.raw`Tentukan $\dim\operatorname{span}\{(1,0,1),(0,1,1),(1,1,2)\}$.`}</P>
                  </div>
                  <div className="solution-box content-box">
                    <P>{String.raw`Vektor ketiga adalah jumlah dua vektor pertama. Dua vektor pertama tidak saling
                      kelipatan dan bebas linear. Jadi basis span adalah
                      $\{(1,0,1),(0,1,1)\}$ dan dimensinya $2$.`}</P>
                  </div>
                </div>

                <div className="example-suite">
                  <div className="example-box">
                    <div className="box-kicker">Menengah</div>
                    <strong>Basis ruang solusi</strong>
                    <P>{String.raw`Tentukan basis solusi
                      $$x+y+z+w=0,\qquad x-z=0.$$`}</P>
                  </div>
                  <div className="solution-box content-box">
                    <P>{String.raw`Dari $x-z=0$ diperoleh $z=x$. Persamaan pertama memberi
                      $y=-2x-w$. Jadi
                      $$(x,y,z,w)=x(1,-2,1,0)+w(0,-1,0,1).$$
                      Kedua vektor bebas linear, jadi dimensi ruang solusi adalah $2$.`}</P>
                  </div>
                </div>

                <div className="example-suite">
                  <div className="example-box">
                    <div className="box-kicker">Lanjut</div>
                    <strong>Dimensi jumlah dua subruang</strong>
                    <P>{String.raw`Buktikan
                      $$\dim(U+W)=\dim U+\dim W-\dim(U\cap W).$$`}</P>
                  </div>
                  <div className="solution-box content-box">
                    <P>{String.raw`Ambil basis $\{z_1,\ldots,z_r\}$ untuk $U\cap W$. Perluas menjadi basis
                      $\{z_1,\ldots,z_r,u_1,\ldots,u_p\}$ untuk $U$ dan
                      $\{z_1,\ldots,z_r,w_1,\ldots,w_q\}$ untuk $W$.`}</P>
                    <P>{String.raw`Himpunan gabungan
                      $\{z_i,u_j,w_k\}$ merentang $U+W$. Untuk kebebasan linear, sebuah relasi nol
                      dapat dipindahkan sehingga kombinasi $u_j$ dan $z_i$ sama dengan negatif
                      kombinasi $w_k$. Vektor tersebut berada di $U\cap W$, dan karena perluasan basis
                      masing-masing bebas linear, seluruh koefisien $u_j$ dan $w_k$ nol, lalu koefisien $z_i$ juga nol.`}</P>
                    <P>{String.raw`Jadi gabungan tersebut basis $U+W$ dan memiliki $r+p+q$ anggota. Karena
                      $\dim U=r+p$ dan $\dim W=r+q$, rumus dimensi diperoleh.`}</P>
                  </div>
                </div>
              </div>
            </section>

            <section className="book-section ird-source-section" id="ringkasan">
              <span className="eyebrow">13 · Ringkasan</span>
              <h2>Ringkasan Hasil Utama</h2>
              <div className="summary-grid">
                {[
                  ["Span", "$\\operatorname{span}(S)$ adalah subruang terkecil yang memuat $S$."],
                  ["Bebas Linear", "Tidak ada vektor yang dapat dibangun dari vektor lainnya."],
                  ["Basis", "Bebas linear + merentang."],
                  ["Koordinat", "Representasi relatif terhadap basis bersifat unik."],
                  ["Dimensi", "Semua basis hingga mempunyai jumlah anggota yang sama."],
                  ["Ekstensi Basis", "Himpunan bebas linear dapat diperluas menjadi basis."],
                  ["Subruang", "$W\\subseteq V\\Rightarrow \\dim W\\le\\dim V$."],
                  ["Rank–Nullity", "$\\dim V=\\operatorname{rank}T+\\operatorname{nullity}T$."],
                ].map(([title, body]) => (
                  <div className="summary-card" key={title}>
                    <strong>{title}</strong>
                    <P>{body}</P>
                  </div>
                ))}
              </div>

              <div className="actions">
                <Link className="btn primary" href="/kuliah/aljabar-linear/basis-dan-dimensi/latihan">
                  Kerjakan Latihan Terkurasi
                </Link>
                <Link className="btn secondary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">
                  Buka 100 Bank Soal
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>
      </div>
      <div className="lang-en-only"><BasisDimensionEnglish /></div>
    </>
  );
}