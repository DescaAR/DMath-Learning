import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";

export const metadata: Metadata = {
  title: "Pembahasan",
  description: "Indeks pembahasan 100 soal Basis dan Dimensi DMath Learning.",
};

export default function PembahasanPage() {
  return (
    <>
      <PageHero
        eyebrow="Indeks pembahasan"
        title="Seratus pembahasan, masing-masing punya halaman sendiri."
        description="Cari berdasarkan ID atau judul melalui Bank Soal. Setiap detail memuat Diketahui, Dibuktikan/Dicari, Ide Utama, langkah penyelesaian, jawaban akhir, kesalahan umum, dan insight."
      />
      <section className="section">
        <div className="container">
          <div className="solution-index solution-index-rich">
            {basisDimensionProblems.map((problem) => (
              <Link
                href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + problem.id.toLowerCase()}
                className="solution-row"
                key={problem.id}
              >
                <span className="problem-id">{problem.id}</span>
                <strong>{problem.title}</strong>
                <span>{problem.subchapter} · {problem.difficulty} · {problem.type}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
