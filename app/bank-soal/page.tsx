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
      eyebrow="Bank Soal · Latihan Terstruktur"
      title="Bank Soal Matematika"
      lead="Bank Soal adalah katalog besar per bab. Pilih soal, coba mandiri, buka petunjuk bila diperlukan, lalu buka solusi lengkap pada halaman detail."
      meta={["Filter","Kesulitan bertahap","Petunjuk","Solusi lengkap"]}
      stats={[
        {value:100,label:"soal Basis & Dimensi"},
        {value:5,label:"tingkat kesulitan"},
        {value:6,label:"tipe soal"},
        {value:"1/soal",label:"halaman solusi"},
      ]}
      actions={[
        {label:"Buka Bank Soal",href:"#bank-tersedia",kind:"primary"},
        {label:"Indeks Pembahasan",href:"/pembahasan",kind:"secondary"},
      ]}
      overviewTitle="Struktur Bank Soal"
      overviewText="Setiap halaman soal memuat pernyataan soal, petunjuk, Diketahui, Dicari atau Dibuktikan, Ide Utama, pembahasan langkah demi langkah, dan kesimpulan."
      roadmap={["Pilih Bab","Filter Soal","Kerjakan","Petunjuk","Pembahasan","Kesimpulan"]}
      sections={[
        {id:"bank-tersedia",label:"Bank Soal Tersedia"},
        {id:"bank-alur",label:"Alur Penggunaan"},
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

      <section id="bank-alur" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Alur Penggunaan</span>
        <h2>Penggunaan Bank Soal</h2>
        <div className="ird-roadmap">{["Search","Subbab","Kesulitan","Tipe soal","Random problem","Detail soal","Petunjuk","Solusi lengkap"].map((item,index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div>
      </section>
    </RiemannHubShell>
  );
}
