import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export const metadata: Metadata = createPageMetadata({
  title: "Bimbingan Matematika",
  description: "Informasi program bimbingan matematika DMath Learning.",
  path: "/bimbingan",
  noIndex: true,
});

const programs=[
  "Bimbingan Matematika Kuliah",
  "Bimbingan ON-MIPA",
];

export default function BimbinganPage() {
  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Bimbingan"}]}
      eyebrow="Bimbingan Matematika"
      title="Bimbingan Matematika"
      lead="Program bimbingan menekankan konsep, penalaran, latihan bertahap, identifikasi kesalahan, dan problem solving sesuai tingkat peserta."
      meta={["Kuliah","ON-MIPA"]}
      stats={[
        {value:programs.length,label:"program"},
        {value:"online",label:"format"},
        {value:"terstruktur",label:"materi"},
        {value:"aktif",label:"problem solving"},
      ]}
      actions={[{label:"Lihat Program",href:"#bimbingan-program",kind:"primary"}]}
      overviewTitle="Struktur Bimbingan"
      overviewText="Halaman ini tetap noindex dan belum ditampilkan di navigasi publik, tetapi strukturnya sudah mengikuti sistem visual yang sama."
      roadmap={["Konsep","Penalaran","Latihan Bertahap","Identifikasi Kesalahan","Problem Solving"]}
      sections={[
        {id:"bimbingan-program",label:"Program"},
        {id:"bimbingan-kontak",label:"Kontak"},
      ]}
    >
      <section id="bimbingan-program" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Program</span>
        <h2>Program Bimbingan</h2>
        <div className="ird-worked-grid">
          {programs.map((program,index)=>(
            <article className="ird-worked-card" key={program}>
              <div className="ird-worked-head"><div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div><div><span className="eyebrow">Program</span><h3>{program}</h3></div></div>
              <div className="ird-worked-prompt"><p>Fokus pada konsep, penalaran, latihan bertahap, identifikasi kesalahan, dan problem solving yang sesuai tingkat peserta.</p></div>
            </article>
          ))}
        </div>
      </section>
      <section id="bimbingan-kontak" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Kontak</span>
        <h2>Informasi Kontak</h2>
        <p>CTA WhatsApp dapat diaktifkan setelah nomor kontak resmi DMath Learning ditetapkan di konfigurasi website.</p>
      </section>
    </RiemannHubShell>
  );
}
