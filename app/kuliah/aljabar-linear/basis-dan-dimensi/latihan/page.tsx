import type { Metadata } from "next";
import Link from "next/link";
import { ProblemPractice } from "@/components/ProblemPractice";

export const metadata: Metadata = { title: "Latihan Basis dan Dimensi" };

export default function BasisDimensionPracticePage() {
  return (
    <section className="section">
      <div className="container narrow">
        <div className="breadcrumb">
          <Link href="/kuliah/aljabar-linear/basis-dan-dimensi">Basis dan Dimensi</Link>
          <span>/</span>
          <strong>Latihan</strong>
        </div>
        <ProblemPractice />
      </div>
    </section>
  );
}
