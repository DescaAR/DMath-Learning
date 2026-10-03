"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { deepMaterials } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { bookSubjects } from "@/data/book-curricula";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";
import { isPublicAcademicLevel, isPublicBookSubjectSlug, isPublicMaterialSlug } from "@/lib/public-content";
import { nestedDeepMaterialHrefs, subjectDeepMaterials, type SubjectDeepMaterial } from "@/data/subject-deep-materials";

type LevelFilter = "Semua" | "Kuliah";
type TrackGroup = "Reguler" | "Olimpiade";
type DifficultyFilter = "Semua" | "Dasar" | "Menengah" | "Lanjut";

type CatalogItem = {
  id: string;
  title: string;
  titleEn: string;
  level: string;
  levelEn: string;
  levelGroup: Exclude<LevelFilter, "Semua">;
  subject: string;
  subjectEn: string;
  trackGroup: TrackGroup;
  difficulty: string;
  difficultyEn: string;
  summary: string;
  summaryEn: string;
  topics?: string[];
  nestedMaterials?: SubjectDeepMaterial[];
  chapterCount?: number;
  sectionCount?: number;
  href: string;
};

function levelGroup(level: string, track = ""): CatalogItem["levelGroup"] {
  const value = (level + " " + track).toLowerCase();
  if (value.includes("kuliah") || value.includes("universitas")) return "Kuliah";
  return "Kuliah";
}

function trackGroup(track: string, level: string): CatalogItem["trackGroup"] {
  const value = (track + " " + level).toLowerCase();
  return value.includes("olimpiade") || value.includes("on-mipa") || value.includes("onmipa")
    ? "Olimpiade"
    : "Reguler";
}

const bookSubjectSlugs = new Set<string>(bookSubjects.map((subject) => subject.slug));

const baseItems: CatalogItem[] = deepMaterials
  .filter((material) =>
    !bookSubjectSlugs.has(material.slug) &&
    isPublicAcademicLevel(material.level, material.track) &&
    isPublicMaterialSlug(material.slug) &&
    !nestedDeepMaterialHrefs.has("/materi/" + material.slug)
  )
  .map((material) => {
  const en = deepMaterialEnMap[material.slug] ?? material;
  return {
    id: material.slug,
    title: material.title,
    titleEn: en.title,
    level: material.level,
    levelEn: en.level,
    levelGroup: levelGroup(material.level, material.track),
    subject: material.subject,
    subjectEn: en.subject,
    trackGroup: trackGroup(material.track, material.level),
    difficulty: material.difficulty,
    difficultyEn: en.difficulty,
    summary: material.summary,
    summaryEn: en.summary,
    href: "/materi/" + material.slug,
  };
});

for (const subject of bookSubjects.filter((subject) => isPublicBookSubjectSlug(subject.slug) && isPublicAcademicLevel(subject.level, subject.level))) {
  const sectionCount = subject.chapters.reduce((sum, chapter) => sum + chapter.sections.length, 0);
  baseItems.unshift({
    id: "book-" + subject.slug,
    title: subject.title,
    titleEn: subject.title,
    level: subject.level,
    levelEn: "University · ON-MIPA",
    levelGroup: levelGroup(subject.level, subject.level),
    subject: subject.title,
    subjectEn: subject.title,
    trackGroup: "Olimpiade",
    difficulty: "Menengah–Lanjut",
    difficultyEn: "Intermediate–Advanced",
    summary: "Terdiri atas " + subject.chapters.length + " bab dan " + sectionCount + " submateri.",
    summaryEn: "Consists of " + subject.chapters.length + " chapters and " + sectionCount + " subtopics.",
    topics: subject.chapters.map((chapter) => chapter.title),
    nestedMaterials: subjectDeepMaterials[subject.slug] ?? [],
    chapterCount: subject.chapters.length,
    sectionCount,
    href: "/materi/" + subject.slug,
  });
}



const LEVELS: LevelFilter[] = ["Semua", "Kuliah"];
const DIFFICULTIES: DifficultyFilter[] = ["Semua", "Dasar", "Menengah", "Lanjut"];
const SUBJECTS = [
  "Semua",
  ...Array.from(new Set(baseItems.map((item) => item.subject))).sort((a, b) =>
    a.localeCompare(b, "id-ID")
  ),
];

function ChipGroup<T extends string>({
  label,
  values,
  value,
  onChange,
  render,
}: {
  label: string;
  values: T[];
  value: T;
  onChange: (value: T) => void;
  render?: (value: T) => string;
}) {
  return (
    <div className="filter-chip-group">
      <span className="filter-chip-label">{label}</span>
      <div className="filter-chips">
        {values.map((item) => (
          <button
            key={item}
            type="button"
            className={"filter-chip" + (item === value ? " active" : "")}
            aria-pressed={item === value}
            onClick={() => onChange(item)}
          >
            {render ? render(item) : item}
          </button>
        ))}
      </div>
    </div>
  );
}

function difficultyGroup(raw: string): Exclude<DifficultyFilter, "Semua"> {
  const value = raw.toLowerCase();
  if (value.includes("lanjut") || value.includes("advanced") || value.includes("sulit") || value.includes("challenge")) return "Lanjut";
  if (value.includes("menengah") || value.includes("intermediate")) return "Menengah";
  return "Dasar";
}

function matchesDifficulty(raw: string, filter: DifficultyFilter) {
  return filter === "Semua" || difficultyGroup(raw) === filter;
}

export function MaterialCatalogClient() {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("Semua");
  const [subject, setSubject] = useState("Semua");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("Semua");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return baseItems.filter((item) => {
      const localizedTitle = language === "en" ? item.titleEn : item.title;
      const localizedSummary = language === "en" ? item.summaryEn : item.summary;
      const localizedSubject = language === "en" ? item.subjectEn : item.subject;
      const haystack = [
        item.title,
        item.titleEn,
        item.summary,
        item.summaryEn,
        item.subject,
        item.subjectEn,
        item.level,
        item.levelEn,
        item.difficulty,
        item.difficultyEn,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!q || haystack.includes(q) || localizedTitle.toLowerCase().includes(q) || localizedSummary.toLowerCase().includes(q)) &&
        (level === "Semua" || item.levelGroup === level) &&
        (subject === "Semua" || item.subject === subject) &&
        matchesDifficulty(item.difficulty + " " + item.difficultyEn, difficulty) &&
        Boolean(localizedSubject)
      );
    });
  }, [query, level, subject, difficulty, language]);

  function clearAll() {
    setQuery("");
    setLevel("Semua");
    setSubject("Semua");
    setDifficulty("Semua");
  }

  function displayLevel(value: LevelFilter) {
    if (language === "id") {
      if (value === "Semua") return "Semua Jenjang";
      return value;
    }
    if (value === "Semua") return "All Levels";
    return "University";
  }

  function displaySubject(value: string) {
    if (value === "Semua") return language === "en" ? "All Subjects" : "Semua Materi";
    if (language === "id") return value;
    return baseItems.find((item) => item.subject === value)?.subjectEn ?? value;
  }

  function displayDifficulty(value: DifficultyFilter) {
    if (language === "id") return value === "Semua" ? "Semua Tingkat" : value;
    if (value === "Semua") return "All Difficulties";
    if (value === "Dasar") return "Basic";
    if (value === "Menengah") return "Intermediate";
    return "Advanced";
  }

  function difficultyCategory(raw: string) {
    const group = difficultyGroup(raw);
    if (language === "id") return group;
    if (group === "Dasar") return "Basic";
    if (group === "Menengah") return "Intermediate";
    return "Advanced";
  }

  function levelCategory(item: CatalogItem) {
    if (language === "en") return displayLevel(item.levelGroup);
    return item.levelGroup;
  }

  return (
    <div className="material-catalog-shell" data-no-translate>
      <div className="search-query-box material-search-box">
        <label htmlFor="material-search">{language === "en" ? "Search Materials" : "Cari Materi"}</label>
        <div className="search-input-wrap">
          <span aria-hidden="true">⌕</span>
          <input
            id="material-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={language === "en" ? "Type a topic, chapter, or field..." : "Ketik topik, bab, atau bidang..."}
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={language === "en" ? "Clear search" : "Hapus pencarian"}
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="search-filter-board material-filter-board">
        <ChipGroup label={language === "en" ? "Level" : "Jenjang"} values={LEVELS} value={level} onChange={setLevel} render={displayLevel} />
        <ChipGroup label={language === "en" ? "Subject / Material" : "Bidang / Materi"} values={SUBJECTS} value={subject} onChange={setSubject} render={displaySubject} />
        <ChipGroup label={language === "en" ? "Difficulty" : "Tingkat Kesulitan"} values={DIFFICULTIES} value={difficulty} onChange={setDifficulty} render={displayDifficulty} />

        {(query || level !== "Semua" || subject !== "Semua" || difficulty !== "Semua") && (
          <button className="clear-chip-filters" type="button" onClick={clearAll}>
            {language === "en" ? "Clear All Filters" : "Hapus semua filter"}
          </button>
        )}
      </div>

      <div className="material-filter-summary">
        <strong>{filtered.length}</strong>
        <span>{language === "en" ? "materials found" : "materi ditemukan"}</span>
      </div>

      <div className="material-list rich-material-list filtered-material-list">
        {filtered.map((item, index) => {
          const title = language === "en" ? item.titleEn : item.title;
          const summary = language === "en" ? item.summaryEn : item.summary;
          const difficultyLabel = difficultyCategory(language === "en" ? item.difficultyEn : item.difficulty);
          const levelCategoryLabel = levelCategory(item);

          return (
            <article className="material-row" key={item.id}>
              <div className="material-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="material-main">
                <span className="meta-line">
                  {levelCategoryLabel} · {difficultyLabel}
                </span>
                <h2>{title}</h2>
                {item.topics && item.topics.length > 0 ? (
                  <div className="chapter-stat-grid catalog-count-stats">
                    <div><strong>{item.chapterCount}</strong><span>{language === "en" ? "Chapters" : "Bab"}</span></div>
                    <div><strong>{item.sectionCount}</strong><span>{language === "en" ? "Subtopics" : "Submateri"}</span></div>
                    <div><strong>1</strong><span>{language === "en" ? "Subtopic / Page" : "Submateri / Halaman"}</span></div>
                  </div>
                ) : (
                  <p><RichMath>{summary}</RichMath></p>
                )}
                {item.topics && item.topics.length > 0 && (
                  <div className="catalog-material-list">
                    <strong>{language === "en" ? "Material List" : "Daftar Materi"}</strong>
                    <ol>
                      {item.topics.map((topic) => <li key={topic}>{topic}</li>)}
                    </ol>
                    {item.nestedMaterials && item.nestedMaterials.length > 0 && (
                      <div className="catalog-nested-materials">
                        <strong>{language === "en" ? "In-depth Materials" : "Materi Mendalam"}</strong>
                        <ol>
                          {item.nestedMaterials.map((material) => (
                            <li key={material.href}>
                              <Link href={material.href}>
                                {language === "en" ? material.titleEn : material.title}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                )}
                <div className="material-card-tags">
                  <span>{levelCategoryLabel}</span>
                  <span>{difficultyLabel}</span>
                </div>
                <div className="material-row-actions">
                  <Link href={item.href} className="btn primary">
                    {language === "en" ? "Study" : "Pelajari"}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <h2>{language === "en" ? "No materials match these filters." : "Tidak ada materi yang cocok dengan filter ini."}</h2>
          <p>{language === "en" ? "Try another keyword or clear one or more filters." : "Coba kata lain atau hapus satu atau beberapa filter."}</p>
        </div>
      )}
    </div>
  );
}
