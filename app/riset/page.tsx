import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { researchFields } from "@/data/site-data";

export const metadata: Metadata = { title: "Riset" };

export default function RisetPage() {
  return (
    <>
      <PageHero
        eyebrow="Riset & eksplorasi"
        title="Catatan akademik tanpa publikasi fiktif."
        description="Bagian riset disiapkan untuk proyek, catatan eksplorasi, preprint, dan publikasi. Item baru hanya akan diberi status publikasi setelah sumbernya benar-benar tersedia."
      />
      <section className="section">
        <div className="container">
          <div className="subjects">{researchFields.map((field) => <span key={field}>{field}</span>)}</div>
          <div className="empty-state">
            <span className="eyebrow">Project index</span>
            <h2>Struktur sudah siap, daftar proyek akan ditambahkan setelah metadata divalidasi.</h2>
            <p>Setiap project card akan memiliki title, field, summary, keywords, status, year, publication, dan link.</p>
          </div>
        </div>
      </section>
    </>
  );
}
