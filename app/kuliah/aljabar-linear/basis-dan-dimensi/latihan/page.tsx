import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ProblemPractice } from "@/components/ProblemPractice";

export const metadata: Metadata = createPageMetadata({
  title: "30 Latihan Basis dan Dimensi",
  description: "30 latihan terkurasi Basis dan Dimensi Aljabar Linear dengan hint dan pembahasan lengkap, dari konsep dasar hingga pembuktian dan challenge.",
  path: "/kuliah/aljabar-linear/basis-dan-dimensi/latihan",
  keywords: ["latihan basis dan dimensi", "soal aljabar linear"],
});

export default function BasisDimensionPracticePage() {
  return (
    <div className="textbook-page ird-page">
      <section className="chapter-hero textbook-hero ird-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/kuliah/aljabar-linear/basis-dan-dimensi">Basis dan Dimensi</Link><span>/</span><strong>Latihan Terkurasi</strong>
          </div>
          <div className="chapter-label-row"><span className="eyebrow">Aljabar Linear · Latihan Terstruktur</span></div>
          <h1>30 Latihan Basis dan Dimensi</h1>
          <p className="chapter-lead">Latihan disusun dari konsep dasar menuju pembuktian dan challenge. Kerjakan soal terlebih dahulu, buka petunjuk bila diperlukan, lalu periksa pembahasan lengkap.</p>
          <div className="chapter-meta textbook-meta">
            <span>30 soal</span><span>Dasar–Menantang</span><span>Hint + solusi</span><span>Basis & Dimensi</span>
          </div>
          <div className="actions">
            <a className="btn primary" href="#latihan-basis">Mulai Latihan</a>
            <Link className="btn secondary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">Buka 100 Bank Soal</Link>
          </div>
        </div>
      </section>

      <section id="latihan-basis" className="section textbook-section-shell">
        <div className="container narrow">
          <article className="article deep-article textbook-article ird-article">
            <section className="book-section ird-practice-section">
              <div className="section-number">01</div>
              <span className="eyebrow">Latihan Soal dan Solusi</span>
              <h2>Latihan Basis dan Dimensi</h2>
              <ProblemPractice />
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
