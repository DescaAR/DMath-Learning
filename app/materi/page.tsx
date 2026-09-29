import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StatusBadge } from "@/components/StatusBadge";
import { materials } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Materi",
  description: "Perpustakaan materi matematika DMath Learning dari SD hingga universitas dan olimpiade.",
};

export default function MateriPage() {
  return (
    <>
      <PageHero
        eyebrow="Perpustakaan materi"
        title="Bukan ringkasan satu halaman. Belajar sampai paham."
        description="Dua belas materi awal sudah published. Setiap bab utama dirancang dengan motivasi, intuisi, definisi formal, notasi, teorema, pembuktian, worked examples, visualisasi, kesalahan umum, dan referensi."
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
              <div key={title}><strong>{title}</strong><span>{text}</span></div>
            ))}
          </div>

          <div className="material-list rich-material-list">
            {materials.map((item, index) => (
              <article className="material-row" key={item.title}>
                <div className="material-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="material-main">
                  <span className="meta-line">{item.level} · {item.subject}</span>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                </div>
                <div className="material-row-actions">
                  <StatusBadge status={item.status} />
                  <Link href={item.href} className="btn secondary">Pelajari</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
