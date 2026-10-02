import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ProblemBank } from "@/components/ProblemBank";

export const metadata: Metadata = createPageMetadata({
  title: "100 Soal Basis dan Dimensi",
  description: "100 soal Basis dan Dimensi Aljabar Linear dari tingkat dasar hingga lanjut, mencakup konsep, hitungan, pembuktian, counterexample, dan construction.",
  path: "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi",
  keywords: ["soal basis dan dimensi", "bank soal aljabar linear"],
});

export default function BasisDimensionBankPage() {
  return (
    <div className="textbook-page ird-page">
      <section className="chapter-hero textbook-hero ird-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/materi">Materi</Link><span>/</span>
            <Link href="/kuliah/aljabar-linear/basis-dan-dimensi">Basis dan Dimensi</Link><span>/</span>
            <strong>Bank Soal</strong>
          </div>
          <div className="chapter-label-row"><span className="eyebrow">Aljabar Linear · Bank Soal Lengkap</span></div>
          <h1>100 Soal Basis dan Dimensi</h1>
          <p className="chapter-lead">Katalog soal satu bab dengan tingkat kesulitan bertahap, dari pemahaman konsep hingga pembuktian, counterexample, dan construction.</p>
          <div className="chapter-meta textbook-meta">
            <span>100 soal</span><span>3 tingkat kesulitan</span><span>Filter + pencarian</span><span>Halaman solusi per soal</span>
          </div>
          <div className="actions">
            <a className="btn primary" href="#bank-basis">Jelajahi Soal</a>
            <Link className="btn secondary" href="/kuliah/aljabar-linear/basis-dan-dimensi">Kembali ke Materi</Link>
          </div>
        </div>
      </section>

      <section id="bank-basis" className="section textbook-section-shell">
        <div className="container">
          <article className="article deep-article textbook-article ird-article">
            <section className="book-section ird-practice-section">
              <div className="section-number">01</div>
              <span className="eyebrow">Bank Soal</span>
              <h2>Daftar Soal</h2>
              <ProblemBank />
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
