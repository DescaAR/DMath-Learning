"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { deepMaterials } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { bookSubjects } from "@/data/book-curricula";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

type LevelFilter = "Semua" | "SD" | "SMP" | "SMA" | "Kuliah";
type TrackFilter = "Semua" | "Reguler" | "Olimpiade";
type DifficultyFilter = "Semua" | "Dasar" | "Menengah" | "Lanjut" | "Sulit";

type CatalogItem = {
  id: string;
  title: string;
  titleEn: string;
  level: string;
  levelEn: string;
  levelGroup: Exclude<LevelFilter, "Semua">;
  subject: string;
  subjectEn: string;
  trackGroup: Exclude<TrackFilter, "Semua">;
  difficulty: string;
  difficultyEn: string;
  summary: string;
  summaryEn: string;
  href: string;
};

function levelGroup(level: string): CatalogItem["levelGroup"] {
  const value = level.toLowerCase();
  if (value.includes("sd")) return "SD";
  if (value.includes("smp")) return "SMP";
  if (value.includes("sma")) return "SMA";
  return "Kuliah";
}

function trackGroup(track: string, level: string): CatalogItem["trackGroup"] {
  const value = (track + " " + level).toLowerCase();
  return value.includes("olimpiade") || value.includes("on-mipa") || value.includes("onmipa")
    ? "Olimpiade"
    : "Reguler";
}

const bookSubjectSlugs = new Set(bookSubjects.map((subject) => subject.slug));

const baseItems: CatalogItem[] = deepMaterials
  .filter((material) => !bookSubjectSlugs.has(material.slug as "analisis-real" | "analisis-kompleks"))
  .map((material) => {
  const en = deepMaterialEnMap[material.slug] ?? material;
  return {
    id: material.slug,
    title: material.title,
    titleEn: en.title,
    level: material.level,
    levelEn: en.level,
    levelGroup: levelGroup(material.level),
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

for (const subject of bookSubjects) {
  const sectionCount = subject.chapters.reduce((sum, chapter) => sum + chapter.sections.length, 0);
  baseItems.unshift({
    id: "book-" + subject.slug,
    title: subject.title + " — Buku Digital Lengkap",
    titleEn: subject.title + " — Complete Digital Book",
    level: subject.level,
    levelEn: "University · ON-MIPA",
    levelGroup: "Kuliah",
    subject: subject.title,
    subjectEn: subject.title,
    trackGroup: "Olimpiade",
    difficulty: "Menengah–Lanjut",
    difficultyEn: "Intermediate–Advanced",
    summary: subject.subtitle + " Terdiri atas " + subject.chapters.length + " bab dan " + sectionCount + " submateri, satu submateri per halaman dengan teori, pembuktian, contoh, latihan, dan navigasi berurutan.",
    summaryEn: subject.subtitle + " Organized into " + subject.chapters.length + " chapters and " + sectionCount + " section pages with theory, proofs, examples, exercises, and sequential navigation.",
    href: "/materi/" + subject.slug,
  });
}

baseItems.push({
  id: "basis-dan-dimensi",
  title: "Basis dan Dimensi",
  titleEn: "Basis and Dimension",
  level: "Kuliah",
  levelEn: "University",
  levelGroup: "Kuliah",
  subject: "Aljabar Linear",
  subjectEn: "Linear Algebra",
  trackGroup: "Reguler",
  difficulty: "Menengah–Lanjut",
  difficultyEn: "Intermediate–Advanced",
  summary: "Bab lengkap tentang kombinasi linear, span, bebas linear, basis, koordinat, dimensi, basis subruang, ekstensi basis, ruang baris-kolom, dan rank-nullity.",
  summaryEn: "A complete chapter on linear combinations, span, linear independence, basis, coordinates, dimension, subspace bases, basis extension, row and column spaces, and rank-nullity.",
  href: "/kuliah/aljabar-linear/basis-dan-dimensi",
});

const LEVELS: LevelFilter[] = ["Semua", "SD", "SMP", "SMA", "Kuliah"];
const TRACKS: TrackFilter[] = ["Semua", "Reguler", "Olimpiade"];
const DIFFICULTIES: DifficultyFilter[] = ["Semua", "Dasar", "Menengah", "Lanjut", "Sulit"];
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

function matchesDifficulty(raw: string, filter: DifficultyFilter) {
  if (filter === "Semua") return true;
  const value = raw.toLowerCase();
  if (filter === "Dasar") return value.includes("dasar") || value.includes("basic");
  if (filter === "Menengah") return value.includes("menengah") || value.includes("intermediate");
  if (filter === "Lanjut") return value.includes("lanjut") || value.includes("advanced");
  return value.includes("sulit") || value.includes("advanced");
}

export function MaterialCatalogClient() {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("Semua");
  const [track, setTrack] = useState<TrackFilter>("Semua");
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
        (track === "Semua" || item.trackGroup === track) &&
        (subject === "Semua" || item.subject === subject) &&
        matchesDifficulty(item.difficulty + " " + item.difficultyEn, difficulty) &&
        Boolean(localizedSubject)
      );
    });
  }, [query, level, track, subject, difficulty, language]);

  function clearAll() {
    setQuery("");
    setLevel("Semua");
    setTrack("Semua");
    setSubject("Semua");
    setDifficulty("Semua");
  }

  function displayLevel(value: LevelFilter) {
    if (language === "id") return value === "Semua" ? "Semua Jenjang" : value;
    if (value === "Semua") return "All Levels";
    if (value === "SD") return "Elementary";
    if (value === "SMP") return "Junior High";
    if (value === "SMA") return "Senior High";
    return "University";
  }

  function displayTrack(value: TrackFilter) {
    if (language === "id") return value === "Semua" ? "Semua Jalur" : value;
    if (value === "Semua") return "All Tracks";
    return value === "Reguler" ? "Regular" : "Olympiad / ON-MIPA";
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
    if (value === "Lanjut") return "Advanced";
    return "Difficult";
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
        <ChipGroup label={language === "en" ? "Track" : "Jalur"} values={TRACKS} value={track} onChange={setTrack} render={displayTrack} />
        <ChipGroup label={language === "en" ? "Subject / Material" : "Bidang / Materi"} values={SUBJECTS} value={subject} onChange={setSubject} render={displaySubject} />
        <ChipGroup label={language === "en" ? "Difficulty" : "Tingkat Kesulitan"} values={DIFFICULTIES} value={difficulty} onChange={setDifficulty} render={displayDifficulty} />

        {(query || level !== "Semua" || track !== "Semua" || subject !== "Semua" || difficulty !== "Semua") && (
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
          const levelLabel = language === "en" ? item.levelEn : item.level;
          const subjectLabel = language === "en" ? item.subjectEn : item.subject;
          const difficultyLabel = language === "en" ? item.difficultyEn : item.difficulty;

          return (
            <article className="material-row" key={item.id}>
              <div className="material-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="material-main">
                <span className="meta-line">
                  {levelLabel} · {subjectLabel} · {difficultyLabel}
                </span>
                <h2>{title}</h2>
                <p><RichMath>{summary}</RichMath></p>
                <div className="material-card-tags">
                  <span>{item.trackGroup === "Olimpiade" ? (language === "en" ? "Olympiad / ON-MIPA" : "Olimpiade / ON-MIPA") : (language === "en" ? "Regular" : "Reguler")}</span>
                  <span>{difficultyLabel}</span>
                </div>
              </div>
              <div className="material-row-actions">
                <Link href={item.href} className="btn secondary">
                  {language === "en" ? "Study" : "Pelajari"}
                </Link>
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
