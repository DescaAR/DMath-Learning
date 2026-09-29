import type { Metadata } from "next";
import Link from "next/link";
import { MathBlock } from "@/components/MathBlock";

export const metadata: Metadata = {
  title: "Basis dan Dimensi",
  description: "Materi Aljabar Linear tentang kombinasi linear, span, bebas linear, basis, koordinat, dan dimensi.",
};

const subchapters = [
  "Review Ruang Vektor",
  "Kombinasi Linear",
  "Span",
  "Bebas Linear",
  "Definisi Basis",
  "Koordinat terhadap Basis",
  "Dimensi",
  "Basis Subruang",
  "Ekstensi Basis",
  "Rank dan Dimensi",
];

export default function BasisDimensionPage() {
  return (
    <>
      <section className="chapter-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/materi">Kuliah</Link>
            <span>/</span>
            <span>Aljabar Linear</span>
            <span>/</span>
            <strong>Basis dan Dimensi</strong>
          </div>
          <span className="eyebrow">Gold standard chapter</span>
          <h1>Basis dan Dimensi</h1>
          <p>
            Bab ini membangun gagasan basis dari kombinasi linear, span, dan kebebasan linear,
            lalu menghubungkannya dengan koordinat dan dimensi ruang vektor.
          </p>
          <div className="chapter-meta">
            <span>Kuliah</span>
            <span>Aljabar Linear</span>
            <span>Menengah</span>
            <span>± 45 menit baca</span>
          </div>
          <div className="actions">
            <Link className="btn primary" href="/kuliah/aljabar-linear/basis-dan-dimensi/latihan">Mulai Latihan</Link>
            <Link className="btn secondary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">Bank Soal</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <aside className="toc">
            <strong>Isi Bab</strong>
            {subchapters.map((item, index) => (
              <a href={"#s" + (index + 1)} key={item}>{index + 1}. {item}</a>
            ))}
          </aside>

          <article className="article">
            <section id="s1">
              <span className="eyebrow">Overview</span>
              <h2>Mengapa basis penting?</h2>
              <p>
                Basis memberi sistem koordinat pada ruang vektor. Setelah basis dipilih, setiap vektor dapat
                direpresentasikan secara unik melalui sejumlah skalar. Dimensi kemudian mengukur banyaknya
                arah bebas yang diperlukan untuk membangun ruang tersebut.
              </p>
            </section>

            <section className="content-box">
              <strong>Prasyarat</strong>
              <p>Ruang vektor, subruang, operasi vektor, dan sistem persamaan linear.</p>
            </section>

            <section>
              <h2>Tujuan Pembelajaran</h2>
              <ul>
                <li>Menentukan apakah suatu vektor merupakan kombinasi linear dari himpunan tertentu.</li>
                <li>Menentukan span dan memeriksa kebebasan linear.</li>
                <li>Memverifikasi apakah suatu himpunan merupakan basis.</li>
                <li>Menentukan koordinat vektor terhadap suatu basis.</li>
                <li>Menggunakan dimensi untuk menganalisis subruang dan transformasi linear.</li>
              </ul>
            </section>

            <section id="s2">
              <span className="eyebrow">Kombinasi Linear</span>
              <h2>Dari pembangun menuju ruang.</h2>
              <div className="definition-box">
                <strong>Definisi</strong>
                <p>
                  Vektor v disebut kombinasi linear dari v₁,…,vₖ apabila terdapat skalar
                  a₁,…,aₖ dengan v=a₁v₁+⋯+aₖvₖ.
                </p>
              </div>
              <MathBlock tex={"v=a_1v_1+a_2v_2+\\cdots+a_kv_k"} />
            </section>

            <section id="s3">
              <span className="eyebrow">Span</span>
              <h2>Semua kombinasi linear yang mungkin.</h2>
              <p>
                Span suatu himpunan vektor adalah himpunan seluruh kombinasi linear dari vektor-vektor tersebut.
                Jika span S=V, S disebut merentang V.
              </p>
              <MathBlock tex={"\\operatorname{span}(S)=\\left\\{\\sum_{i=1}^{k}a_iv_i:a_i\\in\\mathbb{F}\\right\\}"} />
            </section>

            <section id="s4">
              <span className="eyebrow">Bebas Linear</span>
              <h2>Tidak ada vektor yang redundan.</h2>
              <p>
                Suatu himpunan vektor bebas linear apabila persamaan a₁v₁+⋯+aₖvₖ=0 hanya memiliki
                solusi trivial a₁=⋯=aₖ=0.
              </p>
              <div className="example-box">
                <strong>Contoh</strong>
                <p>Pasangan (1,0),(0,1) bebas linear di R², sedangkan (1,2),(2,4) bergantung linear.</p>
              </div>
            </section>

            <section id="s5">
              <span className="eyebrow">Basis</span>
              <h2>Dua syarat sekaligus.</h2>
              <div className="theorem-box">
                <strong>Definisi Basis</strong>
                <p>Himpunan B merupakan basis V jika B bebas linear dan span(B)=V.</p>
              </div>
              <p>
                Basis bersifat minimal sebagai spanning set dan maksimal sebagai himpunan bebas linear.
                Dua sudut pandang ini menjadi alat penting dalam banyak pembuktian.
              </p>
            </section>

            <section id="s6">
              <span className="eyebrow">Koordinat</span>
              <h2>Representasi unik terhadap basis.</h2>
              <p>
                Jika B adalah basis V, setiap v∈V mempunyai representasi unik v=a₁v₁+⋯+aₙvₙ.
                Vektor skalar (a₁,…,aₙ) disebut koordinat v terhadap B.
              </p>
            </section>

            <section id="s7">
              <span className="eyebrow">Dimensi</span>
              <h2>Banyaknya arah bebas.</h2>
              <div className="definition-box">
                <strong>Definisi</strong>
                <p>Untuk ruang vektor berdimensi hingga, dim V adalah banyak anggota pada suatu basis V.</p>
              </div>
              <MathBlock tex={"\\dim V=n"} />
              <div className="proof-box">
                <strong>Teorema — Keunikan Banyak Anggota Basis</strong>
                <p>Setiap dua basis hingga dari ruang vektor yang sama mempunyai banyak anggota yang sama.</p>
                <p>
                  <strong>Bukti.</strong> Diambil basis B dengan m anggota dan basis C dengan n anggota.
                  Karena B bebas linear dan C merentang V, Teorema Pertukaran Steinitz memberikan m≤n.
                  Dengan menukar peran B dan C diperoleh n≤m. Oleh karena itu m=n.
                  Dengan demikian, banyak anggota basis tidak bergantung pada pilihan basis.
                </p>
              </div>
            </section>

            <section id="s8">
              <span className="eyebrow">Basis Subruang</span>
              <h2>Mencari parameter bebas.</h2>
              <p>
                Untuk subruang yang diberikan melalui persamaan homogen, basis dapat dicari dengan
                memparametrisasi ruang solusi. Banyak parameter bebas sama dengan dimensi subruang tersebut.
              </p>
            </section>

            <section id="s9">
              <span className="eyebrow">Ekstensi Basis</span>
              <h2>Dari himpunan bebas linear menuju basis.</h2>
              <p>
                Setiap himpunan bebas linear pada ruang vektor berdimensi hingga dapat diperluas menjadi basis
                dengan menambahkan vektor yang berada di luar span himpunan saat ini.
              </p>
            </section>

            <section id="s10">
              <span className="eyebrow">Rank dan Dimensi</span>
              <h2>Hubungan dengan transformasi linear.</h2>
              <MathBlock tex={"\\dim V=\\operatorname{rank}(T)+\\operatorname{nullity}(T)"} />
              <p>
                Teorema rank-nullity menghubungkan dimensi domain dengan dimensi image dan kernel transformasi linear.
              </p>
            </section>

            <section className="content-box warning-box">
              <strong>Kesalahan Umum</strong>
              <ul>
                <li>Hanya memeriksa bebas linear tetapi lupa memeriksa spanning.</li>
                <li>Menganggap jumlah vektor selalu sama dengan dimensi tanpa memeriksa sifat himpunannya.</li>
                <li>Mengambil kolom hasil eliminasi sebagai basis ruang kolom, bukan kolom pivot dari matriks asal.</li>
              </ul>
            </section>

            <section>
              <h2>Lanjutkan belajar</h2>
              <div className="next-grid">
                <Link href="/kuliah/aljabar-linear/basis-dan-dimensi/latihan" className="card">
                  <span className="eyebrow">Practice</span>
                  <h3>25 Latihan Terkurasi</h3>
                  <p>Satu soal per tampilan dengan hint dan pembahasan.</p>
                </Link>
                <Link href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi" className="card">
                  <span className="eyebrow">Problem bank</span>
                  <h3>Bank Soal</h3>
                  <p>Filter soal berdasarkan kesulitan dan tipe.</p>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
