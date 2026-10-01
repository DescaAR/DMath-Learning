import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = createPageMetadata({
  title: "Bank Soal Matematika",
  description: "Bank soal matematika terstruktur berdasarkan materi dan tingkat kesulitan, dilengkapi hint serta pembahasan untuk latihan mandiri dan persiapan kompetisi.",
  path: "/bank-soal",
  keywords: ["bank soal matematika", "latihan soal matematika"],
});

export default function BankSoalPage() {
  return (
    <>
      <PageHero
        eyebrow="Bank soal"
        title="Banyak soal, tetap terstruktur dan bermakna."
        description="Bank Soal berbeda dari Latihan. Bank Soal adalah katalog besar per bab; pengguna memilih soal lalu membuka hint dan pembahasan lengkap pada halaman detail."
      />

      <section className="section">
        <div className="container">
          <div className="feature-card light-feature bank-hero-card">
            <span className="eyebrow">Published · Kuliah · Aljabar Linear</span>
            <h2>Basis dan Dimensi — 100 Soal</h2>
            <p>
              Bank soal lengkap dengan 20 soal Dasar, 30 Menengah, 30 Sulit,
              15 Sangat Sulit, dan 5 Challenge. Tipe soal mencakup konsep,
              hitungan, pembuktian, true/false, counterexample, dan construction.
            </p>
            <div className="bank-distribution">
              <span><strong>20</strong> Dasar</span>
              <span><strong>30</strong> Menengah</span>
              <span><strong>30</strong> Sulit</span>
              <span><strong>15</strong> Sangat Sulit</span>
              <span><strong>5</strong> Challenge</span>
            </div>
            <div className="actions">
              <Link className="btn primary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">Buka 100 Soal</Link>
              <Link className="btn secondary" href="/kuliah/aljabar-linear/basis-dan-dimensi/latihan">Latihan Terkurasi</Link>
            </div>
          </div>

          <div className="roadmap-panel">
            <span className="eyebrow">UX Bank Soal</span>
            <h2>Filter, cari, pilih, baru buka pembahasan.</h2>
            <div className="subjects">
              {["Search","Subbab","Kesulitan","Tipe soal","Random problem","Pagination","Detail soal","Hint bertahap","Pembahasan lengkap"].map((item)=><span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
