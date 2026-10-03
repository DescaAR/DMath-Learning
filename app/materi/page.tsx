import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { MaterialCatalogClient } from "@/components/MaterialCatalogClient";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { bookSubjects } from "@/data/book-curricula";
import { deepMaterials } from "@/data/deep-materials";
import { isPublicAcademicLevel, isPublicBookSubjectSlug, isPublicMaterialSlug } from "@/lib/public-content";

export const metadata: Metadata = createPageMetadata({
  title: "Materi Matematika",
  description: "Perpustakaan materi matematika DMath Learning untuk tingkat universitas dan ON-MIPA dengan definisi, teorema, pembuktian, visualisasi, contoh, dan latihan.",
  path: "/materi",
  keywords: ["materi matematika lengkap", "materi matematika kuliah"],
});

export default function MateriPage() {
  const visibleBookSubjects=bookSubjects.filter((subject)=>isPublicBookSubjectSlug(subject.slug) && isPublicAcademicLevel(subject.level,subject.level));
  const bookSectionCount=visibleBookSubjects.reduce((sum,subject)=>sum+subject.chapters.reduce((n,chapter)=>n+chapter.sections.length,0),0);
  const visibleDeepMaterials=deepMaterials.filter((material)=>isPublicAcademicLevel(material.level,material.track) && isPublicMaterialSlug(material.slug));

  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Materi"}]}
      eyebrow="Materi Matematika"
      title="Materi Matematika"
      lead="Materi difokuskan pada matematika tingkat universitas dan ON-MIPA, kemudian dibagi menjadi bab dan submateri dengan pembahasan teori, contoh, visualisasi, dan latihan."
      meta={["Kuliah","ON-MIPA","Teori & Pembuktian","Latihan"]}
      stats={[
        {value:visibleBookSubjects.length,label:"bidang utama"},
        {value:bookSectionCount,label:"submateri buku"},
        {value:visibleDeepMaterials.length,label:"materi lain"},
        {value:"1 pola",label:"struktur belajar"},
      ]}
      actions={[
        {label:"Jelajahi Katalog Materi",href:"#materi-katalog",kind:"primary"},
      ]}
      overviewTitle="Struktur Materi"
      overviewText="Setiap submateri mempunyai halaman sendiri dengan pengantar, tujuan, notasi, definisi dan contoh, hasil formal dan pembuktian, contoh terbahas, visualisasi, latihan, ringkasan, referensi, serta navigasi sebelumnya/berikutnya."
      roadmap={["Bidang","Bab","Pengantar","Definisi & Contoh","Hasil Formal & Bukti","Visualisasi","Latihan","Referensi"]}
      sections={[
        {id:"materi-katalog",label:"Katalog Materi"},
      ]}
    >
      <section id="materi-katalog" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Katalog Materi</span>
        <h2>Katalog Materi</h2>
        <p>Gunakan pencarian dan filter untuk menemukan materi berdasarkan jenjang, jalur, bidang, atau tingkat kesulitan.</p>
        <MaterialCatalogClient />
      </section>
    </RiemannHubShell>
  );
}
