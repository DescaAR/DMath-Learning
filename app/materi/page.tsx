import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { MaterialCatalogClient } from "@/components/MaterialCatalogClient";

export const metadata: Metadata = createPageMetadata({
  title: "Materi Matematika",
  description: "Perpustakaan materi matematika DMath Learning untuk SD, SMP, SMA, kuliah, olimpiade, dan ON-MIPA dengan definisi, teorema, pembuktian, visualisasi, contoh, dan latihan.",
  path: "/materi",
  keywords: ["materi matematika lengkap", "materi matematika kuliah"],
});

export default function MateriPage() {
  return (
    <>
      <PageHero
        eyebrow="Perpustakaan materi"
        title="Bukan ringkasan satu halaman. Belajar sampai paham."
        description="Cari dan filter materi berdasarkan jenjang, jalur, bidang matematika, dan tingkat kesulitan. Setiap bab utama dirancang dengan motivasi, intuisi, definisi formal, notasi, teorema, pembuktian, worked examples, visualisasi, kesalahan umum, dan referensi."
      />

      <section className="section">
        <div className="container">
          <div className="content-standard-strip">
            {[
              ["Intuisi", "Mengapa konsep muncul"],
              ["Formal", "Definisi dan notasi presisi"],
              ["Teorema", "Pernyataan + bukti"],
              ["Visual", "Diagram matematis fungsional"],
              ["Contoh", "Langkah penyelesaian"],
              ["Practice", "Latihan dan problem bank"],
            ].map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <MaterialCatalogClient />
        </div>
      </section>
    </>
  );
}
