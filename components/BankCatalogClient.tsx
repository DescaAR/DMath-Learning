"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Level = "Semua" | "Kuliah";
type Difficulty = "Semua" | "Dasar" | "Menengah" | "Lanjut";

type BankItem = {
  id: string;
  title: string;
  titleEn: string;
  level: Exclude<Level, "Semua">;
  subject: string;
  subjectEn: string;
  difficulties: Exclude<Difficulty, "Semua">[];
  href: string;
  keywords: string[];
};

const BANKS: BankItem[] = [
  {
    id: "basis-dan-dimensi",
    title: "Basis dan Dimensi",
    titleEn: "Basis and Dimension",
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
  },
];

const LEVELS: Level[] = ["Semua", "Kuliah"];
const DIFFICULTIES: Difficulty[] = ["Semua", "Dasar", "Menengah", "Lanjut"];
const SUBJECTS = ["Semua", ...Array.from(new Set(BANKS.map((item) => item.subject)))];

function ChipGroup<T extends string>({
  label,
  values,
  value,
  onChange,
  display,
}: {
  label: string;
  values: T[];
  value: T;
  onChange: (value: T) => void;
  display: (value: T) => string;
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
            {display(item)}
          </button>
        ))}
      </div>
    </div>
  );
}

export function BankCatalogClient() {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<Level>("Semua");
  const [difficulty, setDifficulty] = useState<Difficulty>("Semua");
  const [subject, setSubject] = useState("Semua");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BANKS.filter((item) => {
      const title = language === "en" ? item.titleEn : item.title;
      const subjectLabel = language === "en" ? item.subjectEn : item.subject;
      const haystack = [
        item.title,
        item.titleEn,
        item.subject,
        item.subjectEn,
        item.level,
        ...item.difficulties,
        ...item.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!q || haystack.includes(q) || title.toLowerCase().includes(q) || subjectLabel.toLowerCase().includes(q)) &&
        (level === "Semua" || item.level === level) &&
        (difficulty === "Semua" || item.difficulties.includes(difficulty)) &&
        (subject === "Semua" || item.subject === subject)
      );
    });
  }, [query, level, difficulty, subject, language]);

  function clearAll() {
    setQuery("");
    setLevel("Semua");
    setDifficulty("Semua");
    setSubject("Semua");
  }

  function displayLevel(value: Level) {
    if (language === "id") return value === "Semua" ? "Semua Jenjang" : value;
    if (value === "Semua") return "All Levels";
    if (value === "Kuliah") return "University";
    return value;
  }

  function displayDifficulty(value: Difficulty) {
    if (language === "id") return value === "Semua" ? "Semua Tingkat" : value;
    if (value === "Semua") return "All Difficulties";
    if (value === "Dasar") return "Basic";
    if (value === "Menengah") return "Intermediate";
    return "Advanced";
  }

  function displaySubject(value: string) {
    if (value === "Semua") return language === "en" ? "All Subjects" : "Semua Bidang";
    if (language === "id") return value;
    return BANKS.find((item) => item.subject === value)?.subjectEn ?? value;
  }

  return (
    <div className="material-catalog-shell bank-catalog-shell" data-no-translate>
      <div className="search-query-box material-search-box">
        <label htmlFor="bank-catalog-search">
          {language === "en" ? "Search Problem Banks" : "Cari Bank Soal"}
        </label>
        <div className="search-input-wrap">
          <span aria-hidden="true">⌕</span>
          <input
            id="bank-catalog-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              language === "en"
                ? "Type a topic, material, or field..."
                : "Ketik topik, materi, atau bidang..."
            }
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
        <ChipGroup
          label={language === "en" ? "Level" : "Jenjang"}
          values={LEVELS}
          value={level}
          onChange={setLevel}
          display={displayLevel}
        />
        <ChipGroup
          label={language === "en" ? "Subject" : "Bidang"}
          values={SUBJECTS}
          value={subject}
          onChange={setSubject}
          display={displaySubject}
        />
        <ChipGroup
          label={language === "en" ? "Difficulty" : "Tingkat"}
          values={DIFFICULTIES}
          value={difficulty}
          onChange={setDifficulty}
          display={displayDifficulty}
        />

        {(query || level !== "Semua" || difficulty !== "Semua" || subject !== "Semua") && (
          <button className="clear-chip-filters" type="button" onClick={clearAll}>
            {language === "en" ? "Clear All Filters" : "Hapus semua filter"}
          </button>
        )}
      </div>

      <div className="material-filter-summary">
        <strong>{filtered.length}</strong>
        <span>{language === "en" ? "problem banks found" : "bank soal ditemukan"}</span>
      </div>

      <div className="material-list rich-material-list filtered-material-list bank-catalog-list">
        {filtered.map((item, index) => (
          <article className="material-row" key={item.id}>
            <div className="material-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="material-main">
              <span className="meta-line">
                {language === "en" ? "University" : item.level} · {language === "en" ? "Basic–Advanced" : "Dasar–Lanjut"}
              </span>
              <h2>{language === "en" ? item.titleEn : item.title}</h2>
              <div className="material-card-tags">
                <span>{language === "en" ? item.subjectEn : item.subject}</span>
                <span>{language === "en" ? "Basic · Intermediate · Advanced" : "Dasar · Menengah · Lanjut"}</span>
              </div>
              <div className="material-row-actions">
                <Link href={item.href} className="btn primary">
                  {language === "en" ? "Open Problem Bank" : "Buka Bank Soal"}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <h2>{language === "en" ? "No problem banks match these filters." : "Tidak ada bank soal yang cocok."}</h2>
          <p>{language === "en" ? "Try another keyword or clear some filters." : "Coba kata lain atau hapus beberapa filter."}</p>
        </div>
      )}
    </div>
  );
}
