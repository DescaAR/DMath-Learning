import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export const metadata: Metadata = createPageMetadata({
  title: "Sumber Belajar Lain",
  description:
    "Kumpulan sumber belajar matematika eksternal pilihan sebagai pelengkap DMath Learning, mencakup problem solving, olimpiade, dan matematika perkuliahan.",
  path: "/sumber-belajar-lain",
  keywords: [
    "sumber belajar matematika",
    "referensi matematika",
    "AoPS",
    "COLIMP",
    "MORFID",
    "olimpiade matematika",
    "matematika kuliah",
  ],
});

const resources = [
  {
    name: "Art of Problem Solving",
    shortName: "AoPS",
    url: "https://artofproblemsolving.com/",
    focus: "Problem Solving · Olimpiade · Komunitas",
    description:
      "Platform matematika berbahasa Inggris dengan materi problem solving, sumber kompetisi, forum komunitas, buku, dan kelas untuk pelajar yang ingin memperdalam matematika.",
  },
  {
    name: "COLIMP",
    shortName: "COLIMP",
    url: "https://rivalfaiz.github.io/colimp",
    focus: "Matematika · Olimpiade · Referensi",
    description:
      "Sumber belajar matematika yang dapat digunakan sebagai referensi tambahan untuk memperluas latihan dan eksplorasi materi di luar DMath Learning.",
  },
  {
    name: "morfID",
    shortName: "MORFID",
    url: "https://morfidmath.wordpress.com/",
    focus: "Matematika Perkuliahan",
    description:
      "Blog matematika perkuliahan berbahasa Indonesia yang memuat beragam topik, antara lain aljabar, analisis, kombinatorika, probabilitas, teori graf, teori bilangan, teori ukuran, dan topologi.",
  },
] as const;

export default function SumberBelajarLainPage() {
  return (
    <RiemannHubShell
      breadcrumbs={[
        { label: "DMath Learning", href: "/" },
        { label: "Sumber Belajar Lain" },
      ]}
      eyebrow="Referensi Eksternal"
      title="Sumber Belajar Lain"
      lead="Kumpulan situs matematika lain yang dapat digunakan sebagai pelengkap untuk belajar, berlatih, dan memperluas referensi di luar DMath Learning."
      meta={["Problem Solving", "Olimpiade", "Matematika Perkuliahan"]}
      stats={[
        { value: resources.length, label: "sumber pilihan" },
        { value: "2", label: "bahasa utama" },
        { value: "Eksternal", label: "jenis sumber" },
      ]}
      actions={[
        { label: "Lihat Daftar Sumber", href: "#daftar-sumber", kind: "primary" },
      ]}
      overviewTitle="Sumber Belajar Pelengkap"
      overviewText="Setiap situs memiliki fokus dan gaya penyajian yang berbeda. Gunakan sumber yang paling sesuai dengan topik dan tujuan belajar."
      roadmap={["AoPS", "COLIMP", "MORFID"]}
      sections={[{ id: "daftar-sumber", label: "Daftar Sumber" }]}
      tocTitle="Isi Halaman"
      progressLabel="Progres membaca"
      className="other-learning-resources-page"
    >
      <section id="daftar-sumber" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Referensi Pilihan</span>
        <h2>Daftar sumber belajar</h2>
        <p className="ird-paragraph">
          Tautan berikut mengarah ke situs eksternal dan dibuka pada tab baru. DMath Learning tidak mengelola isi, kebijakan, atau ketersediaan situs tersebut.
        </p>

        <div className="ird-worked-grid">
          {resources.map((resource, index) => (
            <article className="ird-worked-card" key={resource.url}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <span className="eyebrow">{resource.shortName}</span>
                  <h3>{resource.name}</h3>
                </div>
              </div>
              <div className="ird-worked-prompt">
                <p>{resource.description}</p>
              </div>
              <div className="chapter-meta textbook-meta">
                <span>{resource.focus}</span>
              </div>
              <div className="actions">
                <a
                  className="btn primary"
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kunjungi {resource.shortName} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </RiemannHubShell>
  );
}
