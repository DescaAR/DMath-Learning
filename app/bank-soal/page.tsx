import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export const metadata: Metadata = createPageMetadata({
  title: "Bank Soal Matematika",
  description: "Bank soal matematika terstruktur berdasarkan materi dan tingkat kesulitan, dilengkapi hint serta pembahasan untuk latihan mandiri dan persiapan kompetisi.",
  path: "/bank-soal",
  keywords: ["bank soal matematika", "latihan soal matematika"],
});

export default function BankSoalPage() {
  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Bank Soal"}]}
      eyebrow="Bank Soal"
      title="Bank Soal Matematika"
      lead="Kumpulan soal berdasarkan materi dan tingkat kesulitan, dilengkapi petunjuk serta pembahasan langkah demi langkah."
      meta={["Filter","Kesulitan bertahap","Petunjuk","Solusi lengkap"]}
      actions={[
        {label:"Buka Bank Soal",href:"#bank-tersedia",kind:"primary"},
        {label:"Latihan Soal",href:"/latihan-soal",kind:"secondary"},
      ]}
      overviewTitle="Struktur Bank Soal"
      overviewText="Setiap halaman soal memuat pernyataan soal, petunjuk, Diketahui, Dicari atau Dibuktikan, Ide Utama, pembahasan langkah demi langkah, dan kesimpulan."
      roadmap={["Pilih Bab","Filter Soal","Kerjakan","Petunjuk","Pembahasan","Kesimpulan"]}
      sections={[
        {id:"bank-tersedia",label:"Bank Soal Tersedia"},
      ]}
    >
      <section id="bank-tersedia" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Bank Soal Tersedia</span>
        <h2>Basis dan Dimensi</h2>
        <article className="ird-worked-card">
          <div className="ird-worked-head"><div className="ird-problem-number">100</div><div><span className="eyebrow">Kuliah · Aljabar Linear</span><h3>Basis dan Dimensi</h3></div></div>
          <div className="ird-worked-prompt"><p>20 Dasar, 30 Menengah, 30 Sulit, 15 Sangat Sulit, dan 5 Challenge. Tipe soal mencakup konsep, hitungan, pembuktian, true/false, counterexample, dan construction.</p></div>
          <div className="actions">
            <Link className="btn primary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">Buka 100 Soal</Link>
            <Link className="btn secondary" href="/kuliah/aljabar-linear/basis-dan-dimensi/latihan">Latihan Terkurasi</Link>
          </div>
        </article>
      </section>

    </RiemannHubShell>
  );
}
