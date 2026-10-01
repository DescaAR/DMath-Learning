import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProblemBank } from "@/components/ProblemBank";

export const metadata: Metadata = createPageMetadata({
  title: "100 Soal Basis dan Dimensi",
  description: "100 soal Basis dan Dimensi Aljabar Linear dari tingkat dasar hingga challenge, mencakup konsep, hitungan, pembuktian, counterexample, dan construction.",
  path: "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi",
  keywords: ["soal basis dan dimensi", "bank soal aljabar linear"],
});

export default function BasisDimensionBankPage() {
  return (
    <>
      <PageHero
        eyebrow="Kuliah · Aljabar Linear"
        title="Bank Soal Basis dan Dimensi"
        description="Katalog soal untuk satu bab. Gunakan pencarian dan filter untuk memilih tipe latihan yang dibutuhkan."
      />
      <section className="section">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/materi">Materi</Link>
            <span>/</span>
            <Link href="/kuliah/aljabar-linear/basis-dan-dimensi">Basis dan Dimensi</Link>
            <span>/</span>
            <strong>Bank Soal</strong>
          </div>
          <ProblemBank />
        </div>
      </section>
    </>
  );
}
