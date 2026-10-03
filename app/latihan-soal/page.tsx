import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { bookSubjects } from "@/data/book-curricula";
import { bookSectionContent } from "@/data/book-section-content";
import { deepMaterials } from "@/data/deep-materials";
import { materialPractice } from "@/data/material-practice";
import { materialPracticeExtra } from "@/data/material-practice-extra";
import { isPublicAcademicLevel, isPublicBookSubjectSlug, isPublicMaterialSlug } from "@/lib/public-content";

export const metadata: Metadata = createPageMetadata({
  title: "Latihan Soal Matematika",
  description:
    "Kumpulan latihan soal matematika DMath Learning yang terhubung langsung dengan materi dan dilengkapi petunjuk serta solusi.",
  path: "/latihan-soal",
  keywords: ["latihan soal matematika", "soal matematika", "latihan matematika"],
});

const structuredPractice = bookSubjects
  .filter((subject) => isPublicBookSubjectSlug(subject.slug) && isPublicAcademicLevel(subject.level, subject.level))
  .map((subject) => {
    const exerciseCount = subject.chapters.reduce(
      (chapterTotal, chapter) =>
        chapterTotal +
        chapter.sections.reduce(
          (sectionTotal, section) =>
            sectionTotal + (bookSectionContent[section.slug]?.exercises.length ?? 0),
          0
        ),
      0
    );
    return {
      title: subject.title,
      level: subject.level,
      subject: subject.title,
      count: exerciseCount,
      href: "/materi/" + subject.slug,
      action: "Pilih Submateri",
    };
  })
  .filter((item) => item.count > 0);

const structuredSlugs = new Set<string>(
  bookSubjects
    .filter((subject) => isPublicBookSubjectSlug(subject.slug) && isPublicAcademicLevel(subject.level, subject.level))
    .map((subject) => subject.slug)
);

const regularPractice = deepMaterials
  .filter(
    (material) =>
      !structuredSlugs.has(material.slug) &&
      isPublicAcademicLevel(material.level, material.track) &&
      isPublicMaterialSlug(material.slug)
  )
  .map((material) => {
    const count =
      (materialPractice[material.slug]?.length ?? 0) +
      (materialPracticeExtra[material.slug]?.length ?? 0);

    const anchor =
      material.slug === "integral-riemann" ? "#ird-latihan-soal" : "#gm-latihan";

    return {
      title: material.title,
      level: material.level,
      subject: material.subject,
      count,
      href: "/materi/" + material.slug + anchor,
      action: "Buka Latihan",
    };
  })
  .filter((item) => item.count > 0);

const practiceCatalog = [...structuredPractice, ...regularPractice];

export default function LatihanSoalPage() {
  const totalExercises = practiceCatalog.reduce((sum, item) => sum + item.count, 0);

  return (
    <RiemannHubShell
      breadcrumbs={[
        { label: "DMath Learning", href: "/" },
        { label: "Latihan Soal" },
      ]}
      eyebrow="Latihan Soal"
      title="Latihan Soal Matematika"
      lead="Pilih materi yang ingin dilatih. Latihan terhubung langsung dengan materi agar konsep dapat dipelajari terlebih dahulu sebelum mengerjakan soal."
      meta={["Kuliah", "ON-MIPA", "Pembuktian", "Problem Solving"]}
      stats={[
        { value: practiceCatalog.length, label: "materi dengan latihan" },
        { value: totalExercises, label: "latihan tersedia" },
      ]}
      actions={[
        { label: "Pilih Latihan", href: "#latihan-daftar", kind: "primary" },
        { label: "Bank Soal", href: "/bank-soal", kind: "secondary" },
      ]}
      overviewTitle="Latihan Berdasarkan Materi"
      overviewText="Latihan Soal berbeda dari Bank Soal. Latihan mengikuti materi dan menyediakan petunjuk serta solusi, sedangkan Bank Soal berfungsi sebagai kumpulan soal dalam jumlah besar."
      roadmap={["Pilih materi", "Pelajari konsep", "Kerjakan soal", "Buka petunjuk", "Periksa solusi"]}
      sections={[{ id: "latihan-daftar", label: "Daftar Latihan" }]}
      tocTitle="Isi Halaman"
    >
      <section id="latihan-daftar" className="book-section ird-practice-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Daftar Latihan</span>
        <h2>Latihan Berdasarkan Materi</h2>

        <div className="ird-worked-grid home-learning-grid">
          {practiceCatalog.map((item, index) => (
            <article className="ird-worked-card" key={item.href}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <span className="eyebrow">{item.level}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>

              <div className="chapter-stat-grid practice-card-stats">
                <div>
                  <strong>{item.count}</strong>
                  <span>latihan soal</span>
                </div>
                <div>
                  <strong>{item.subject}</strong>
                  <span>bidang</span>
                </div>
              </div>

              <div className="actions">
                <Link className="btn primary" href={item.href}>
                  {item.action}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </RiemannHubShell>
  );
}
