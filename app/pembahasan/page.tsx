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
      title="Seratus pembahasan, masing-masing punya halaman sendiri."
      lead="Setiap halaman detail mengikuti struktur yang sama: soal, petunjuk, Diketahui, Dibuktikan/Dicari, Ide Utama, solusi bertahap, jawaban akhir, kesalahan umum, dan insight."
      meta={["Basis & Dimensi","100 soal","Solusi bertahap","Insight"]}
      stats={[
        {value:100,label:"pembahasan"},
        {value:2,label:"petunjuk per soal"},
        {value:"step-by-step",label:"format solusi"},
        {value:"1/soal",label:"halaman detail"},
      ]}
      actions={[{label:"Jelajahi Pembahasan",href:"#pembahasan-indeks",kind:"primary"},{label:"Bank Soal",href:"/bank-soal",kind:"secondary"}]}
      overviewTitle="Soal → petunjuk → ide utama → solusi → evaluasi."
      overviewText="Gunakan pembahasan setelah mencoba soal agar proses belajar tetap aktif."
      roadmap={["Soal","Petunjuk","Diketahui","Target","Ide Utama","Solusi","Jawaban Akhir","Insight"]}
      sections={[{id:"pembahasan-indeks",label:"Indeks Pembahasan"}]}
    >
      <section id="pembahasan-indeks" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Indeks Pembahasan</span>
        <h2>Pilih soal yang ingin dipelajari.</h2>
        <SolutionsIndexClient />
      </section>
    </RiemannHubShell>
  );
}
