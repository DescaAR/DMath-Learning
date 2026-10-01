import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SearchClient } from "@/components/SearchClient";

export const metadata: Metadata = createPageMetadata({
  title: "Pencarian DMath Learning",
  description: "Cari materi, definisi, teorema, contoh, dan soal di seluruh DMath Learning.",
  path: "/search",
  noIndex: true,
});

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Search"
        title="Cari seluruh isi DMath Learning."
        description="Cari materi, definisi, teorema, contoh, dan soal dalam satu tempat. Gunakan filter berbentuk kotak untuk memilih jenjang, jalur, bidang/materi, tingkat kesulitan, dan jenis konten. Pencarian tetap menampilkan hasil yang cukup mirip ketika kata yang diketik tidak persis sama."
      />
      <section className="section">
        <div className="container">
          <SearchClient />
        </div>
      </section>
    </>
  );
}
