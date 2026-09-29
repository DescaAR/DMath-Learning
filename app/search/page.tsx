import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SearchClient } from "@/components/SearchClient";

export const metadata: Metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Global search"
        title="Cari materi dan bagian penting DMath."
        description="Indeks awal mencari materi dan halaman utama. Arsitektur search akan diperluas ke definisi, teorema, latihan, soal, pembahasan, dan riset ketika konten bertambah."
      />
      <section className="section">
        <div className="container">
          <SearchClient />
        </div>
      </section>
    </>
  );
}
