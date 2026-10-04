import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import {
  BankCatalogClient,
  type BankCatalogItem,
} from "@/components/BankCatalogClient";
import { subjectProblemBankSummaries } from "@/data/subject-problem-banks";

export const metadata: Metadata = createPageMetadata({
  title: "Bank Soal Matematika",
  description:
    "Bank soal matematika terstruktur berdasarkan mata kuliah dan topik, dilengkapi petunjuk serta pembahasan untuk latihan mandiri dan persiapan kompetisi.",
  path: "/bank-soal",
  keywords: ["bank soal matematika", "latihan soal matematika"],
});

const subjectBanks: BankCatalogItem[] = subjectProblemBankSummaries.map(
  (bank) => ({
    id: "subject-" + bank.slug,
    title: bank.title + " · Seluruh Bab",
    level: "Kuliah",
    subject: bank.title,
    difficulties: ["Beragam"],
    href: "/bank-soal/kuliah/" + bank.slug,
    keywords: [bank.title.toLowerCase(), bank.slug, "seluruh bab", "bank soal"],
    problemCount: bank.problemCount,
    description:
      "Kumpulan soal dari " +
      bank.chapterCount +
      " bab " +
      bank.title +
      ", lengkap dengan petunjuk dan solusi.",
  })
);

const catalogBanks: BankCatalogItem[] = [
  {
    id: "basis-dan-dimensi",
    title: "Basis dan Dimensi · 100 Soal",
    titleEn: "Basis and Dimension · 100 Problems",
    level: "Kuliah",
    subject: "Aljabar Linear",
    subjectEn: "Linear Algebra",
    difficulties: ["Dasar", "Menengah", "Lanjut"],
    href: "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi",
    keywords: [
      "basis",
      "dimensi",
      "kombinasi linear",
      "span",
      "bebas linear",
      "ruang vektor",
      "rank nullity",
      "aljabar linear",
    ],
    problemCount: 100,
    description:
      "Bank khusus Basis dan Dimensi dengan soal bertingkat dari konsep dasar hingga pembuktian dan construction.",
  },
  ...subjectBanks,
];

export default function BankSoalPage() {
  const totalProblems = catalogBanks.reduce(
    (sum, bank) => sum + bank.problemCount,
    0
  );

  return (
    <RiemannHubShell
      breadcrumbs={[{ label: "DMath Learning", href: "/" }, { label: "Bank Soal" }]}
      eyebrow="Bank Soal"
      title="Bank Soal Matematika"
      lead="Kumpulan soal berdasarkan mata kuliah dan topik, dilengkapi petunjuk serta pembahasan langkah demi langkah."
      meta={["Kuliah", "Pembuktian", "Latihan", "Problem Solving"]}
      stats={[
        { value: catalogBanks.length, label: "bank soal" },
        { value: totalProblems, label: "soal terindeks" },
      ]}
      actions={[
        { label: "Jelajahi Bank Soal", href: "#bank-katalog", kind: "primary" },
        { label: "Latihan Soal", href: "/latihan-soal", kind: "secondary" },
      ]}
      overviewTitle="Katalog Bank Soal"
      overviewText="Bank Soal mengumpulkan soal lintas bab dalam satu tempat. Gunakan pencarian dan filter untuk memilih mata kuliah atau topik yang ingin dilatih."
      roadmap={[]}
      sections={[{ id: "bank-katalog", label: "Katalog Bank Soal" }]}
    >
      <section id="bank-katalog" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Katalog Bank Soal</span>
        <h2>Bank Soal Matematika</h2>
        <p>
          Gunakan pencarian dan filter untuk menemukan bank soal berdasarkan
          mata kuliah, topik, atau cakupan latihan.
        </p>
        <BankCatalogClient banks={catalogBanks} />
      </section>
    </RiemannHubShell>
  );
}
