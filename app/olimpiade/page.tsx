import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { olympiadHubs } from "@/data/olympiad-hubs";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { isPublicOlympiadHubSlug } from "@/lib/public-content";

export const metadata: Metadata = createPageMetadata({
  title: "ON-MIPA Matematika",
  description: "Jalur ON-MIPA Matematika untuk mahasiswa dengan syllabus, roadmap, soal terkurasi, soal tantangan, dan pembahasan tingkat universitas.",
  path: "/olimpiade",
  keywords: ["olimpiade matematika", "ON-MIPA matematika", "soal olimpiade matematika"],
});

export default function OlimpiadePage() {
  const visibleOlympiadHubs = olympiadHubs.filter((hub) => isPublicOlympiadHubSlug(hub.slug));

  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Olimpiade & ON-MIPA"}]}
      eyebrow="Matematika Kompetisi · Mahasiswa"
      title="ON-MIPA Matematika"
      lead="Fokus pada Analisis Real, Analisis Kompleks, Aljabar Linear, Struktur Aljabar, dan Kombinatorika untuk persiapan ON-MIPA tingkat mahasiswa."
      meta={["ON-MIPA","Olimpiade Mahasiswa","Pembuktian Formal","Problem Solving"]}
      stats={[
        {value:visibleOlympiadHubs.length,label:"jalur kompetisi"},
        {value:visibleOlympiadHubs.reduce((sum,hub)=>sum+hub.syllabus.length,0),label:"bidang inti"},
        {value:visibleOlympiadHubs.reduce((sum,hub)=>sum+hub.curated.length,0),label:"soal terkurasi"},
        {value:visibleOlympiadHubs.length,label:"challenge"},
      ]}
      actions={[
        {label:"Pilih Jalur",href:"#olimpiade-jalur",kind:"primary"},
        {label:"Bank Soal",href:"/bank-soal",kind:"secondary"},
      ]}
      overviewTitle="Struktur Jalur Kompetisi"
      overviewText="Setiap jenjang memiliki struktur kompetisi yang sama agar pengguna tidak perlu mempelajari ulang pola navigasi."
      roadmap={visibleOlympiadHubs.map((hub)=>hub.title.id)}
      sections={[{id:"olimpiade-jalur",label:"Jalur Kompetisi"}]}
    >
      <section id="olimpiade-jalur" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Jalur Kompetisi</span>
        <h2>Daftar Jalur Kompetisi</h2>
        <div className="ird-worked-grid">
          {visibleOlympiadHubs.map((hub,index)=>(
            <article className="ird-worked-card" key={hub.slug}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                <div><span className="eyebrow">Roadmap Kompetisi</span><h3>{hub.title.id}</h3></div>
              </div>
              <div className="ird-worked-prompt"><p>{hub.subtitle.id}</p></div>
              <div className="chapter-stat-grid">
                <div><strong>{hub.syllabus.length}</strong><span>bidang</span></div>
                <div><strong>{hub.curated.length}</strong><span>soal terkurasi</span></div>
                <div><strong>{hub.roadmap.length}</strong><span>fase roadmap</span></div>
                <div><strong>1</strong><span>challenge</span></div>
              </div>
              <div className="actions"><Link className="btn primary" href={"/olimpiade/"+hub.slug}>Buka Jalur Lengkap</Link></div>
            </article>
          ))}
        </div>
      </section>
    </RiemannHubShell>
  );
}
