import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Bank Soal" };

export default function BankSoalPage() {
  return (
    <>
      <PageHero eyebrow="Bank soal" title="Banyak soal, tetap fokus pada satu materi." description="Bank Soal berbeda dari Latihan. Halaman ini berfungsi sebagai katalog besar soal per bab; pembahasan dibuka setelah pengguna memilih soal." />
      <section className="section">
        <div className="container">
          <div className="feature-card light-feature">
            <span className="eyebrow">Published bank</span>
            <h2>Basis dan Dimensi</h2>
            <p>25 soal nyata sudah tersedia dari target 100 soal. Soal mencakup konsep, hitungan, pembuktian, counterexample, dan construction.</p>
            <Link className="btn primary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">Buka Bank Soal</Link>
          </div>
          <div className="roadmap-panel">
            <h2>Struktur filter yang disiapkan</h2>
            <div className="subjects">
              {["Jenjang","Track","Bidang","Bab","Subbab","Kesulitan","Tipe soal","Search","Sorting","Pagination"].map((item)=><span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
