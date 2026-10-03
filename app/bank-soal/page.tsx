import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { BankCatalogClient } from "@/components/BankCatalogClient";

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
      eyebrow="Bank Soal"
      title="Bank Soal Matematika"
      lead="Kumpulan soal berdasarkan materi dan tingkat kesulitan, dilengkapi petunjuk serta pembahasan langkah demi langkah."
      meta={["Kuliah","Pembuktian","Latihan","Problem Solving"]}
      actions={[
        {label:"Jelajahi Bank Soal",href:"#bank-katalog",kind:"primary"},
        {label:"Latihan Soal",href:"/latihan-soal",kind:"secondary"},
      ]}
      overviewTitle="Katalog Bank Soal"
      overviewText=""
      roadmap={[]}
      sections={[
        {id:"bank-katalog",label:"Katalog Bank Soal"},
      ]}
    >
      <section id="bank-katalog" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Katalog Bank Soal</span>
        <h2>Bank Soal Matematika</h2>
        <p>Gunakan pencarian dan filter untuk menemukan bank soal berdasarkan jenjang, bidang, atau tingkat kesulitan.</p>
        <BankCatalogClient />
      </section>

    </RiemannHubShell>
  );
}
