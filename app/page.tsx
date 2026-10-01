import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { learningTracks, materials, subjects } from "@/data/site-data";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "DMath Learning",
    description: "Belajar matematika dari konsep hingga problem solving: materi lengkap, pembuktian, visualisasi, bank soal, olimpiade, ON-MIPA, dan matematika kuliah.",
    path: "/",
    keywords: ["platform belajar matematika Indonesia", "belajar matematika online"],
  }),
  title: { absolute: "DMath Learning | Materi dan Latihan Matematika" },
};

export default function Home() {
  return (
    <RiemannHubShell
      eyebrow="DMath Learning · Think Deeper, Solve Better."
      title="DMath Learning"
      lead="Materi matematika terstruktur untuk jenjang sekolah, universitas, olimpiade, dan ON-MIPA, dilengkapi definisi, pembuktian, contoh, visualisasi, latihan, dan bank soal."
      meta={["SD–SMA","Kuliah","Olimpiade","ON-MIPA"]}
      stats={[
        {value:materials.length,label:"materi tersedia"},
        {value:learningTracks.length,label:"jalur belajar"},
        {value:100,label:"soal Basis & Dimensi"},
        {value:30,label:"latihan terkurasi"},
      ]}
      actions={[
        {label:"Mulai dari Materi",href:"/materi",kind:"primary"},
        {label:"Jelajahi Bank Soal",href:"/bank-soal",kind:"secondary"},
      ]}
      overviewTitle="Struktur Pembelajaran"
      overviewText="Materi disusun dari pengantar dan konsep menuju definisi, pembuktian, contoh, visualisasi, latihan, dan bank soal."
      roadmap={["Jalur Belajar","Materi","Definisi & Bukti","Contoh & Visualisasi","Latihan","Bank Soal"]}
      sections={[
        {id:"home-jalur",label:"Jalur Belajar"},
        {id:"home-bidang",label:"Bidang Matematika"},
        {id:"home-lanjut",label:"Lanjut Belajar"},
      ]}
    >
      <section id="home-jalur" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Jalur Belajar</span>
        <h2>Jalur Belajar</h2>
        <div className="ird-worked-grid home-learning-grid">
          {learningTracks.map((track,index)=>(
            <article className="ird-worked-card" key={track.title}>
              <div className="ird-worked-head"><div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div><div><span className="eyebrow">Jalur</span><h3>{track.title}</h3></div></div>
              <div className="ird-worked-prompt"><p>{track.description}</p></div>
              <div className="actions"><Link className="btn primary" href={track.href}>Buka Jalur</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section id="home-bidang" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Bidang Matematika</span>
        <h2>Bidang Matematika</h2>
        <div className="ird-roadmap">{subjects.map((subject,index)=><div key={subject}><span>{String(index+1).padStart(2,"0")}</span><strong>{subject}</strong></div>)}</div>
      </section>

      <section id="home-lanjut" className="book-section ird-source-section">
        <div className="section-number">03</div>
        <span className="eyebrow">Lanjut Belajar</span>
        <h2>Latihan dan Bank Soal</h2>
        <p>Setelah membaca materi, lanjutkan ke latihan terkurasi atau bank soal agar konsep berubah menjadi kemampuan problem solving.</p>
        <div className="actions"><Link className="btn primary" href="/latihan-soal">Latihan Soal</Link><Link className="btn secondary" href="/bank-soal">Bank Soal</Link></div>
      </section>
    </RiemannHubShell>
  );
}
