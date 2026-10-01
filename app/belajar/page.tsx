import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { learningTracks, subjects } from "@/data/site-data";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export const metadata: Metadata = createPageMetadata({
  title: "Jalur Belajar Matematika",
  description: "Pilih jalur belajar matematika berdasarkan jenjang, bidang, atau kompetisi. DMath Learning menyusun materi dari prasyarat, konsep, latihan, hingga problem solving.",
  path: "/belajar",
  keywords: ["jalur belajar matematika", "roadmap belajar matematika"],
});

export default function BelajarPage() {
  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Jalur Belajar"}]}
      eyebrow="Jalur Belajar · Peta Utama"
      title="Jalur Belajar Matematika"
      lead="Pilih jenjang, jalur kompetisi, atau bidang matematika. Setiap jalur memiliki kurikulum, roadmap, materi yang tersedia, dan arah belajar berikutnya."
      meta={["SD–SMA","Kuliah","Olimpiade","ON-MIPA"]}
      stats={[
        {value:learningTracks.length,label:"jalur belajar"},
        {value:subjects.length,label:"bidang matematika"},
        {value:4,label:"jenjang reguler"},
        {value:4,label:"jalur kompetisi"},
      ]}
      actions={[
        {label:"Pilih Jalur",href:"#belajar-jalur",kind:"primary"},
        {label:"Lihat Materi",href:"/materi",kind:"secondary"},
      ]}
      overviewTitle="Struktur Jalur Belajar"
      overviewText="Jalur reguler dan kompetisi dipisahkan agar kedalaman teori, formalitas pembuktian, dan gaya problem solving sesuai dengan tujuan belajar."
      roadmap={learningTracks.map((track)=>track.title)}
      sections={[
        {id:"belajar-jalur",label:"Jalur Belajar"},
        {id:"belajar-bidang",label:"Bidang Matematika"},
      ]}
    >
      <section id="belajar-jalur" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Bagian 1</span>
        <h2>Daftar Jalur Belajar</h2>
        <div className="ird-worked-grid">
          {learningTracks.map((track,index)=>(
            <article className="ird-worked-card" key={track.title}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                <div><span className="eyebrow">{track.title.includes("Olimpiade")||track.title.includes("ON-MIPA")?"Kompetisi":"Reguler"}</span><h3>{track.title}</h3></div>
              </div>
              <div className="ird-worked-prompt"><p>{track.description}</p></div>
              <div className="actions"><Link className="btn primary" href={track.href}>Buka Jalur</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section id="belajar-bidang" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Bagian 2</span>
        <h2>Bidang Matematika</h2>
        <p>Gunakan bidang sebagai peta hubungan antarkonsep, lalu masuk ke jalur belajar atau materi yang sesuai.</p>
        <div className="ird-roadmap">{subjects.map((subject,index)=><div key={subject}><span>{String(index+1).padStart(2,"0")}</span><strong>{subject}</strong></div>)}</div>
      </section>

      <section className="next-learning-block textbook-next">
        <div><span className="eyebrow">Navigasi</span><h2>Materi dan Latihan</h2></div>
        <div className="actions"><Link className="btn primary" href="/materi">Buka Materi</Link><Link className="btn secondary" href="/bank-soal">Bank Soal</Link></div>
      </section>
    </RiemannHubShell>
  );
}
