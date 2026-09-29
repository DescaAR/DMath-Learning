import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SolutionsIndexClient } from "@/components/SolutionsIndexClient";

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
          <SolutionsIndexClient />
        </div>
      </section>
    </>
  );
}
