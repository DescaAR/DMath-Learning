import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export const metadata: Metadata = createPageMetadata({
  title: "Tentang DMath Learning",
  description: "Mengenal DMath Learning, platform pembelajaran matematika yang menekankan pemahaman konsep, pembuktian, visualisasi, latihan, dan problem solving.",
  path: "/tentang",
  keywords: ["tentang DMath Learning"],
});

export default function TentangPage() {
  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Tentang"}]}
      eyebrow="Tentang DMath Learning"
      title="Tentang DMath Learning"
      lead="DMath Learning merupakan platform pembelajaran matematika yang berfokus pada pemahaman konsep, pengembangan penalaran, dan kemampuan problem solving."
      meta={["Konsep","Pembuktian","Visualisasi","Latihan"]}
      stats={[
        {value:"Kuliah",label:"matematika universitas"},
        {value:"ON-MIPA",label:"kompetisi mahasiswa"},
        {value:"Bukti",label:"pembuktian formal"},
        {value:"Latihan",label:"problem solving"},
      ]}
      actions={[{label:"Jelajahi Materi",href:"/materi",kind:"primary"},{label:"ON-MIPA",href:"/olimpiade",kind:"secondary"}]}
      overviewTitle="Struktur Pembelajaran"
      overviewText="Konten difokuskan pada matematika universitas, pembuktian formal, latihan, dan ON-MIPA dalam satu sistem belajar yang konsisten."
      roadmap={["Intuisi","Definisi","Teorema","Pembuktian","Visualisasi","Contoh","Latihan","Problem Solving"]}
      sections={[
        {id:"tentang-identitas",label:"Identitas"},
        {id:"tentang-ruang",label:"Ruang Belajar"},
      ]}
    >
      <section id="tentang-identitas" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Identitas</span>
        <h2>DMath Learning</h2>
        <div className="container split about-split">
          <div className="logo-panel"><Image src="/brand/logo-symbol.webp" alt="Logo DMath Learning" width={260} height={260}/></div>
          <div>
            <p>DMath Learning adalah platform pembelajaran matematika berbahasa Indonesia dengan materi terstruktur, pembuktian, visualisasi, contoh, latihan, dan bank soal.</p>
            <p>Materi disusun untuk mendukung pemahaman konsep dan penalaran matematis.</p>
          </div>
        </div>
      </section>

      <section id="tentang-ruang" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Ruang Belajar</span>
        <h2>Ruang Belajar DMath Learning</h2>
        <div className="ird-worked-grid">
          <article className="ird-worked-card"><div className="ird-worked-head"><div className="ird-problem-number">01</div><div><h3>Materi</h3></div></div><div className="ird-worked-prompt"><p>Bab digital dengan konsep, definisi, teorema, pembuktian, visualisasi, contoh, dan latihan.</p></div><div className="actions"><Link className="btn primary" href="/materi">Jelajahi Materi</Link></div></article>
          <article className="ird-worked-card"><div className="ird-worked-head"><div className="ird-problem-number">02</div><div><h3>Bank Soal</h3></div></div><div className="ird-worked-prompt"><p>Kumpulan soal terstruktur berdasarkan materi dan tingkat kesulitan untuk latihan mandiri.</p></div><div className="actions"><Link className="btn primary" href="/bank-soal">Buka Bank Soal</Link></div></article>
          <article className="ird-worked-card"><div className="ird-worked-head"><div className="ird-problem-number">03</div><div><h3>ON-MIPA</h3></div></div><div className="ird-worked-prompt"><p>Jalur kompetisi tingkat mahasiswa dengan roadmap, soal nonrutin, challenge, dan pembahasan matematis.</p></div><div className="actions"><Link className="btn primary" href="/olimpiade">Lihat Jalur</Link></div></article>
        </div>
      </section>
    </RiemannHubShell>
  );
}
