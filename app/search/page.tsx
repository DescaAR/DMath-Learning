import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SearchClient } from "@/components/SearchClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Pencarian seluruh konten DMath Learning dengan filter jenjang, jalur, jenis konten, dan pencocokan kata serupa.",
};

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Search"
        title="Cari seluruh isi DMath Learning."
        description="Cari materi, definisi, teorema, contoh, dan soal dalam satu tempat. Pilih kotak filter SD, SMP, SMA, Kuliah, Materi Reguler, atau Olimpiade; pencarian tetap menampilkan hasil yang cukup mirip ketika kata yang diketik tidak persis sama."
      />
      <section className="section">
        <div className="container">
          <SearchClient />
        </div>
      </section>
    </>
  );
}
