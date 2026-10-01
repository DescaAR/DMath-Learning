import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { MaterialCatalogClient } from "@/components/MaterialCatalogClient";
import { RiemannHubShell } from "@/components/RiemannHubShell";
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

  return (
    <RiemannHubShell
      breadcrumbs={[{label:"DMath Learning",href:"/"},{label:"Materi"}]}
      eyebrow="Perpustakaan Materi · Bab Digital"
      title="Bukan ringkasan satu halaman. Belajar sampai paham."
      lead="Cari dan filter materi berdasarkan jenjang, jalur, bidang matematika, dan tingkat kesulitan. Struktur tiap bab mengikuti pola yang sama seperti Integral Riemann."
      meta={["SD","SMP","SMA","Kuliah","Olimpiade","ON-MIPA"]}
      stats={[
        {value:deepMaterials.length,label:"materi tersedia"},
        {value:levels.length,label:"jenjang"},
        {value:subjects.length,label:"bidang"},
        {value:"1 pola",label:"struktur bab"},
      ]}
      actions={[
        {label:"Jelajahi Materi",href:"#materi-katalog",kind:"primary"},
        {label:"Jalur Belajar",href:"/belajar",kind:"secondary"},
      ]}
      overviewTitle="Semua bab memakai alur belajar yang konsisten."
      overviewText="Gambaran besar, roadmap, definisi formal, hasil dan pembuktian, contoh terbahas, visualisasi, latihan dengan solusi, kesalahan umum, koneksi, dan referensi."
      roadmap={["Gambaran Besar","Definisi Formal","Teorema & Bukti","Contoh","Visualisasi","Latihan & Solusi","Referensi"]}
      sections={[
        {id:"materi-struktur",label:"Struktur Materi"},
        {id:"materi-katalog",label:"Katalog Materi"},
      ]}
    >
      <section id="materi-struktur" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Bagian 1</span>
        <h2>Struktur setiap bab.</h2>
        <div className="ird-roadmap">
          {["Intuisi & motivasi","Definisi & notasi","Teorema/hasil formal","Pembuktian","Contoh terbahas","Visualisasi","Latihan & solusi","Koneksi & referensi"].map((item,index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section id="materi-katalog" className="book-section ird-practice-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Bagian 2</span>
        <h2>Katalog materi.</h2>
        <p>Gunakan pencarian dan filter untuk menemukan bab yang sesuai dengan jenjang, bidang, atau tingkat kesulitan.</p>
        <MaterialCatalogClient />
      </section>
    </RiemannHubShell>
  );
}
