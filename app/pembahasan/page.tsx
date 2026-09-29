import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";

export const metadata: Metadata = { title: "Pembahasan" };

export default function PembahasanPage() {
  return (
    <>
      <PageHero
        eyebrow="Indeks pembahasan"
        title="Temukan pembahasan berdasarkan ID atau bab."
        description="Versi awal memuat indeks pembahasan untuk bank soal Basis dan Dimensi. Indeks akan berkembang seiring materi baru diterbitkan."
      />
      <section className="section">
        <div className="container">
          <div className="solution-index">
            {basisDimensionProblems.map((problem) => (
              <Link href="/kuliah/aljabar-linear/basis-dan-dimensi/latihan" className="solution-row" key={problem.id}>
                <span className="problem-id">{problem.id}</span>
                <strong>{problem.title}</strong>
                <span>{problem.difficulty} · {problem.type}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
