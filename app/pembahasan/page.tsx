import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SolutionsIndexClient } from "@/components/SolutionsIndexClient";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export const metadata: Metadata = createPageMetadata({
  title: "Pembahasan Soal Matematika",
  description: "Indeks pembahasan soal matematika DMath Learning dengan ide utama, langkah penyelesaian, pembuktian, jawaban akhir, dan kesalahan umum.",
  path: "/pembahasan",
  keywords: ["pembahasan soal matematika", "solusi soal matematika"],
});

export default function PembahasanPage() {
  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Pembahasan"}]}
      eyebrow="Indeks Pembahasan · Solusi Lengkap"
      title="Pembahasan Soal Matematika"
      lead="Setiap halaman detail memuat soal, petunjuk, Diketahui, Dicari atau Dibuktikan, Ide Utama, pembahasan bertahap, dan kesimpulan."
      meta={["Basis & Dimensi","100 soal","Solusi bertahap","Insight"]}
      stats={[
        {value:100,label:"pembahasan"},
        {value:2,label:"petunjuk per soal"},
        {value:"step-by-step",label:"format solusi"},
        {value:"1/soal",label:"halaman detail"},
      ]}
      actions={[{label:"Jelajahi Pembahasan",href:"#pembahasan-indeks",kind:"primary"},{label:"Bank Soal",href:"/bank-soal",kind:"secondary"}]}
      overviewTitle="Struktur Pembahasan"
      overviewText="Gunakan pembahasan setelah mencoba soal agar proses belajar tetap aktif."
      roadmap={["Soal","Petunjuk","Diketahui","Dicari / Dibuktikan","Ide Utama","Pembahasan","Kesimpulan"]}
      sections={[{id:"pembahasan-indeks",label:"Indeks Pembahasan"}]}
    >
      <section id="pembahasan-indeks" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Indeks Pembahasan</span>
        <h2>Indeks Pembahasan</h2>
        <SolutionsIndexClient />
      </section>
    </RiemannHubShell>
  );
}
