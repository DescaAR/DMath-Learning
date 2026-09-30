import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MaterialCatalogClient } from "@/components/MaterialCatalogClient";

export const metadata: Metadata = {
  title: "Materi",
  description: "Perpustakaan materi matematika DMath Learning dengan filter jenjang, jalur, bidang, dan tingkat kesulitan.",
};

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
