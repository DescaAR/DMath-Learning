"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";
import { translatePlainText } from "@/lib/i18n";

const PAGE_SIZE = 20;

function FilterChips({
  label,
  values,
  value,
  onChange,
  translate = false,
}: {
  label: string;
  values: string[];
  value: string;
  onChange: (value: string) => void;
  translate?: boolean;
}) {
  const { language, t } = useLanguage();

  return (
    <div className="filter-chip-group bank-chip-group">
      <span className="filter-chip-label">{t(label)}</span>
      <div className="filter-chips bank-filter-chips">
        {values.map((item) => (
          <button
            key={item}
            type="button"
            className={"filter-chip" + (item === value ? " active" : "")}
            aria-pressed={item === value}
            onClick={() => onChange(item)}
          >
            {item === "Semua"
              ? t("Semua")
              : translate
                ? translatePlainText(item, language)
                : item}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProblemBank() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("Semua");
  const [type, setType] = useState("Semua");
  const [subchapter, setSubchapter] = useState("Semua");
  const [page, setPage] = useState(1);

  const subchapters = useMemo(
    () => Array.from(new Set(basisDimensionProblems.map((problem) => problem.subchapter))),
    []
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    return basisDimensionProblems.filter((problem) => {
      const originalText = (
        problem.id + " " +
        problem.title + " " +
        problem.problem + " " +
        problem.concepts.join(" ") + " " +
        problem.subchapter
      ).toLowerCase();

      const englishText = (
        translatePlainText(problem.title, "en") + " " +
        translatePlainText(problem.subchapter, "en") + " " +
        problem.concepts.map((item) => translatePlainText(item, "en")).join(" ")
      ).toLowerCase();

      const matchesQuery = !q || originalText.includes(q) || englishText.includes(q);

      return matchesQuery
        && (difficulty === "Semua" || problem.difficulty === difficulty)
        && (type === "Semua" || problem.type === type)
        && (subchapter === "Semua" || problem.subchapter === subchapter);
    });
  }, [query, difficulty, type, subchapter]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function resetPage() {
    setPage(1);
  }

  function clearFilters() {
    setQuery("");
    setDifficulty("Semua");
    setType("Semua");
    setSubchapter("Semua");
    setPage(1);
  }

  function randomProblem() {
    const pool = filtered.length ? filtered : basisDimensionProblems;
    const selected = pool[Math.floor(Math.random() * pool.length)];
    window.location.href =
      "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" +
      selected.id.toLowerCase();
  }

  return (
    <div className="problem-bank-component" data-no-translate>
      <div className="bank-summary">
        <div>
          <span className="eyebrow">
            {language === "en" ? "Complete Problem Bank" : "Bank Soal Lengkap"}
          </span>
          <h2>{language === "en" ? "100 Basis and Dimension Problems" : "100 soal Basis dan Dimensi"}</h2>
          <p>
            {language === "en"
              ? "Distribution: 20 Basic · 30 Intermediate · 30 Advanced · 15 Very Advanced · 5 Challenge. Every problem includes hints, a complete solution, common mistakes, and insight."
              : "Distribusi: 20 Dasar · 30 Menengah · 30 Sulit · 15 Sangat Sulit · 5 Challenge. Setiap soal memiliki hint, pembahasan lengkap, kesalahan umum, dan insight."}
          </p>
        </div>
        <button className="btn secondary" type="button" onClick={randomProblem}>
          {t("Acak Soal")}
        </button>
      </div>

      <div className="filter-panel chip-filter-panel">
        <label className="bank-search-field">
          <span>{t("Cari")}</span>
          <div className="search-input-wrap">
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                resetPage();
              }}
              placeholder={
                language === "en"
                  ? "Search ID, title, concept, or problem text..."
                  : "Cari ID, judul, konsep, atau isi soal..."
              }
            />
            {query && (
              <button type="button" onClick={() => { setQuery(""); resetPage(); }} aria-label={language === "en" ? "Clear search" : "Hapus pencarian"}>
                ×
              </button>
            )}
          </div>
        </label>

        <FilterChips
          label="Subbab"
          values={["Semua", ...subchapters]}
          value={subchapter}
          onChange={(next) => { setSubchapter(next); resetPage(); }}
          translate
        />

        <FilterChips
          label="Kesulitan"
          values={["Semua", "Dasar", "Menengah", "Sulit", "Sangat Sulit", "Challenge"]}
          value={difficulty}
          onChange={(next) => { setDifficulty(next); resetPage(); }}
          translate
        />

        <FilterChips
          label="Tipe"
          values={["Semua", "Konsep", "Hitungan", "Pembuktian", "True/False", "Counterexample", "Construction"]}
          value={type}
          onChange={(next) => { setType(next); resetPage(); }}
          translate
        />

        <div className="filter-footer">
          <span>
            {filtered.length} {language === "en" ? "of" : "dari"} {basisDimensionProblems.length} {language === "en" ? "problems" : "soal"}
          </span>
          <button type="button" onClick={clearFilters}>{t("Hapus semua filter")}</button>
        </div>
      </div>

      <div className="problem-list problem-bank-grid">
        {visible.map((problem) => (
          <article className="problem-card premium-problem-card" key={problem.id}>
            <div className="problem-meta">
              <span className="problem-id">{problem.id}</span>
              <span>{translatePlainText(problem.difficulty, language)}</span>
              <span>{translatePlainText(problem.type, language)}</span>
            </div>

            <span className="problem-subchapter">
              {translatePlainText(problem.subchapter, language)}
            </span>
            <h2>{translatePlainText(problem.title, language)}</h2>
            <div className="problem-preview">
              <RichMath>{problem.problem}</RichMath>
            </div>

            <div className="concept-pills compact-pills">
              {problem.concepts.slice(0, 3).map((concept) => (
                <span key={concept}>{translatePlainText(concept, language)}</span>
              ))}
            </div>

            <div className="problem-footer">
              <span>± {problem.estimatedTime}</span>
              <Link href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + problem.id.toLowerCase()}>
                {language === "en" ? "Open Problem →" : "Buka Soal →"}
              </Link>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="empty-state">
          <h2>{language === "en" ? "No matching problems." : "Tidak ada soal yang cocok."}</h2>
          <p>{language === "en" ? "Try another keyword or clear some filters." : "Coba ubah kata pencarian atau hapus beberapa filter."}</p>
        </div>
      )}

      <nav className="pagination" aria-label={language === "en" ? "Problem bank pagination" : "Pagination bank soal"}>
        <button disabled={safePage === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>
          ← {t("Sebelumnya")}
        </button>
        <div>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((item) => (
            <button
              className={item === safePage ? "active" : ""}
              onClick={() => setPage(item)}
              key={item}
              aria-current={item === safePage ? "page" : undefined}
            >
              {item}
            </button>
          ))}
        </div>
        <button disabled={safePage === pageCount} onClick={() => setPage((value) => Math.min(pageCount, value + 1))}>
          {t("Berikutnya")} →
        </button>
      </nav>
    </div>
  );
}
