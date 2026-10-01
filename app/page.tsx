import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { learningTracks, materials, subjects } from "@/data/site-data";
import { StatusBadge } from "@/components/StatusBadge";
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
  const featured=materials.slice(0,8);
  return (
    <RiemannHubShell
      eyebrow="DMath Learning · Think Deeper, Solve Better."
      title="DMath Learning"
      lead="Belajar matematika sebagai struktur yang utuh: intuisi, definisi formal, teorema, pembuktian, visualisasi, contoh terbahas, latihan bertahap, dan bank soal."
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
        {id:"home-materi",label:"Materi Tersedia"},
        {id:"home-unggulan",label:"Bab Unggulan"},
        {id:"home-bidang",label:"Bidang Matematika"},
        {id:"home-lanjut",label:"Lanjut Belajar"},
      ]}
    >
      <section id="home-jalur" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Jalur Belajar</span>
        <h2>Jalur Belajar</h2>
        <div className="ird-worked-grid">
          {learningTracks.map((track,index)=>(
            <article className="ird-worked-card" key={track.title}>
              <div className="ird-worked-head"><div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div><div><span className="eyebrow">Jalur</span><h3>{track.title}</h3></div></div>
              <div className="ird-worked-prompt"><p>{track.description}</p></div>
              <div className="actions"><Link className="btn primary" href={track.href}>Buka Jalur</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section id="home-materi" className="book-section ird-practice-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Materi Published</span>
        <h2>Materi Tersedia</h2>
        <div className="ird-worked-grid">
          {featured.map((item,index)=>(
            <article className="ird-worked-card" key={item.title}>
              <div className="ird-worked-head"><div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div><div><span className="eyebrow">{item.level} · {item.subject}</span><h3>{item.title}</h3></div></div>
              <div className="ird-worked-prompt"><p>{item.summary}</p></div>
              <div className="card-top"><StatusBadge status={item.status}/></div>
              <div className="actions"><Link className="btn primary" href={item.href}>Pelajari Materi</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section id="home-unggulan" className="book-section ird-source-section">
        <div className="section-number">03</div>
        <span className="eyebrow">Bab Unggulan</span>
        <h2>Struktur Acuan Materi</h2>
        <p>Struktur hero, roadmap, sidebar progres, bagian bernomor, blok formal, latihan, solusi, dan navigasi lanjut kini digunakan sebagai bahasa desain utama DMath Learning.</p>
        <div className="actions">
          <Link className="btn primary" href="/materi/integral-riemann">Buka Integral Riemann</Link>
          <Link className="btn secondary" href="/kuliah/aljabar-linear/basis-dan-dimensi">Buka Basis & Dimensi</Link>
        </div>
      </section>

      <section id="home-bidang" className="book-section ird-source-section">
        <div className="section-number">04</div>
        <span className="eyebrow">Bidang Matematika</span>
        <h2>Bidang Matematika</h2>
        <div className="ird-roadmap">{subjects.map((subject,index)=><div key={subject}><span>{String(index+1).padStart(2,"0")}</span><strong>{subject}</strong></div>)}</div>
      </section>

      <section id="home-lanjut" className="book-section ird-source-section">
        <div className="section-number">05</div>
        <span className="eyebrow">Lanjut Belajar</span>
        <h2>Latihan dan Bank Soal</h2>
        <p>Setelah membaca materi, lanjutkan ke latihan terkurasi atau bank soal agar konsep berubah menjadi kemampuan problem solving.</p>
        <div className="actions"><Link className="btn primary" href="/materi">Buka Materi</Link><Link className="btn secondary" href="/bank-soal">Bank Soal</Link></div>
      </section>
    </RiemannHubShell>
  );
}
