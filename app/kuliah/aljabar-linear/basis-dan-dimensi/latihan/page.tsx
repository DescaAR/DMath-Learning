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
    <>
      <section className="page-hero practice-page-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/kuliah/aljabar-linear/basis-dan-dimensi">Basis dan Dimensi</Link>
            <span>/</span>
            <strong>Latihan Terkurasi</strong>
          </div>
          <span className="eyebrow">Practice · 30 soal terpilih</span>
          <h1>Belajar satu soal pada satu waktu.</h1>
          <p>
            Urutan dipilih dari konsep dasar menuju pembuktian dan challenge. Coba sendiri,
            gunakan hint bila perlu, lalu buka pembahasan lengkap.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <ProblemPractice />
        </div>
      </section>
    </>
  );
}
