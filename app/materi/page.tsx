import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { MaterialCatalogClient } from "@/components/MaterialCatalogClient";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { bookSubjects } from "@/data/book-curricula";
import { deepMaterials } from "@/data/deep-materials";

export const metadata: Metadata = createPageMetadata({
  title: "Materi Matematika",
  description: "Perpustakaan materi matematika DMath Learning untuk SD, SMP, SMA, kuliah, olimpiade, dan ON-MIPA dengan definisi, teorema, pembuktian, visualisasi, contoh, dan latihan.",
  path: "/materi",
  keywords: ["materi matematika lengkap", "materi matematika kuliah"],
});

export default function MateriPage() {
  const levels=Array.from(new Set(deepMaterials.map((item)=>item.level)));
  const subjects=Array.from(new Set(deepMaterials.map((item)=>item.subject)));
  const bookSectionCount=bookSubjects.reduce((sum,subject)=>sum+subject.chapters.reduce((n,chapter)=>n+chapter.sections.length,0),0);

  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Materi"}]}
      eyebrow="Perpustakaan Materi · Buku Digital"
      title="Bukan ringkasan satu halaman. Belajar sampai paham."
      lead="Materi disusun per jenjang dan bidang. Buku digital DMath mencakup analisis, aljabar, kalkulus, diskrit, graf, teori bilangan, persamaan diferensial, analisis numerik, statistika, probabilitas, kalkulus stokastik, dan riset operasi; setiap bidang dibagi menjadi unit dan submateri agar dapat dipelajari berurutan dan mendalam."
      meta={["SD","SMP","SMA","Kuliah","Olimpiade","ON-MIPA"]}
      stats={[
        {value:bookSubjects.length,label:"buku digital"},
        {value:bookSectionCount,label:"submateri buku"},
        {value:deepMaterials.length,label:"materi lain"},
        {value:"1 pola",label:"struktur belajar"},
      ]}
      actions={[
        {label:"Buka Buku Digital",href:"#materi-buku",kind:"primary"},
        {label:"Jelajahi Semua Materi",href:"#materi-katalog",kind:"secondary"},
      ]}
      overviewTitle="Bidang → unit → submateri → teori → latihan → materi berikutnya."
      overviewText="Setiap submateri mempunyai halaman sendiri dengan tujuan, intuisi, visualisasi, notasi, definisi, teorema atau hasil formal, pembuktian, contoh terbahas, latihan, kesalahan umum, koneksi, ringkasan, dan navigasi sebelumnya/berikutnya."
      roadmap={["Pilih Bidang","Pilih Unit","Baca Submateri","Pahami Bukti","Kerjakan Latihan","Lanjut Materi Berikutnya"]}
      sections={[
        {id:"materi-buku",label:"Buku Digital"},
        {id:"materi-struktur",label:"Struktur Submateri"},
        {id:"materi-katalog",label:"Katalog Lain"},
      ]}
    >
      <section id="materi-buku" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Buku Digital Lengkap</span>
        <h2>Masuk ke bidang, lalu pilih materi yang ingin dipelajari.</h2>
        <p className="ird-paragraph">Setiap bidang besar menggunakan struktur multi-halaman. Daftar isi bidang menjadi peta belajar; setiap submateri dibuka sebagai bab digital mandiri dengan teori, pembuktian atau hasil formal, contoh, latihan, dan visualisasi.</p>
        <div className="ird-worked-grid">
          {bookSubjects.map((subject,index)=>{
            const sectionCount=subject.chapters.reduce((sum,chapter)=>sum+chapter.sections.length,0);
            return(
              <article className="ird-worked-card" key={subject.slug}>
                <div className="ird-worked-head">
                  <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                  <div><span className="eyebrow">{subject.level}</span><h3>{subject.title}</h3></div>
                </div>
                <div className="ird-worked-prompt"><p>{subject.subtitle}</p></div>
                <div className="chapter-stat-grid">
                  <div><strong>{subject.chapters.length}</strong><span>unit belajar</span></div>
                  <div><strong>{sectionCount}</strong><span>submateri</span></div>
                  <div><strong>1</strong><span>submateri / halaman</span></div>
                  <div><strong>Prev/Next</strong><span>navigasi</span></div>
                </div>
                <div className="actions"><Link className="btn primary" href={"/materi/"+subject.slug}>Buka {subject.title}</Link></div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="materi-struktur" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Struktur Submateri</span>
        <h2>Setiap halaman dibaca sebagai satu submateri lengkap.</h2>
        <div className="ird-roadmap">
          {["Tujuan & prasyarat","Motivasi, intuisi & visualisasi","Definisi & notasi","Teorema & pembuktian","Contoh terbahas","Latihan & solusi","Kesalahan & koneksi","Ringkasan & referensi"].map((item,index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section id="materi-katalog" className="book-section ird-practice-section">
        <div className="section-number">03</div>
        <span className="eyebrow">Katalog Materi Lain</span>
        <h2>SD, SMP, SMA, kuliah, olimpiade, dan ON-MIPA.</h2>
        <p>Gunakan pencarian dan filter untuk menemukan materi lain berdasarkan jenjang, jalur, bidang, atau tingkat kesulitan.</p>
        <MaterialCatalogClient />
      </section>
    </RiemannHubShell>
  );
}
