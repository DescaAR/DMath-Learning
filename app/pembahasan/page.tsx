import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SolutionsIndexClient } from "@/components/SolutionsIndexClient";

export const metadata: Metadata = createPageMetadata({
  title: "Pembahasan Soal Matematika",
  description: "Indeks pembahasan soal matematika DMath Learning dengan ide utama, langkah penyelesaian, pembuktian, jawaban akhir, dan kesalahan umum.",
  path: "/pembahasan",
  keywords: ["pembahasan soal matematika", "solusi soal matematika"],
});

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
