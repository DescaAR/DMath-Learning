import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SearchClient } from "@/components/SearchClient";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export const metadata: Metadata = createPageMetadata({
  title: "Pencarian DMath Learning",
  description: "Cari materi, definisi, teorema, contoh, dan soal di seluruh DMath Learning.",
  path: "/search",
  noIndex: true,
});

export default function SearchPage() {
  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Pencarian"}]}
      eyebrow="Global Search · Seluruh Konten"
      title="Pencarian DMath Learning"
      lead="Cari materi, definisi, teorema, contoh, dan soal dalam satu tempat dengan filter jenjang, jalur, bidang, tingkat kesulitan, dan jenis konten."
      actions={[{label:"Mulai Mencari",href:"#search-main",kind:"primary"},{label:"Lihat Materi",href:"/materi",kind:"secondary"}]}
      overviewTitle="Pencarian Konten"
      overviewText="Pencarian tetap menampilkan hasil yang cukup mirip ketika kata yang diketik tidak persis sama."
      roadmap={["Ketik kata kunci","Pilih jenjang","Pilih jalur","Pilih bidang","Pilih kesulitan","Buka hasil"]}
      sections={[{id:"search-main",label:"Pencarian"}]}
    >
      <section id="search-main" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Pencarian</span>
        <h2>Pencarian Materi dan Soal</h2>
        <SearchClient />
      </section>
    </RiemannHubShell>
  );
}
