"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { RichMath } from "@/components/RichMath";
import { AcademicSolution, splitAcademicSolution } from "@/components/AcademicSolution";
import type {
  SubjectProblemBank as SubjectProblemBankData,
  SubjectProblemDifficulty,
  SubjectProblemKind,
} from "@/data/subject-problem-banks";

const PAGE_SIZE = 20;
const DIFFICULTY_ORDER: SubjectProblemDifficulty[] = ["Dasar", "Menengah", "Sulit"];

export function SubjectProblemBank({ bank }: { bank: SubjectProblemBankData }) {
  const [query, setQuery] = useState("");
  const [chapter, setChapter] = useState("Semua");
  const [section, setSection] = useState("Semua");
  const [difficulty, setDifficulty] = useState<"Semua" | SubjectProblemDifficulty>("Semua");
  const [kind, setKind] = useState<"Semua" | SubjectProblemKind>("Semua");
  const [page, setPage] = useState(1);

  const chapters = useMemo(
    () =>
      Array.from(
        new Map(
          bank.problems.map((problem) => [
            problem.chapterNumber,
            problem.chapterNumber + " · " + problem.chapterTitle,
          ])
        ).entries()
      ),
    [bank.problems]
  );

  const sections = useMemo(() => {
    const source =
      chapter === "Semua"
        ? bank.problems
        : bank.problems.filter((problem) => problem.chapterNumber === chapter);
    return Array.from(
      new Map(
        source.map((problem) => [
          problem.sectionNumber,
          problem.sectionNumber + " · " + problem.sectionTitle,
        ])
      ).entries()
    );
  }, [bank.problems, chapter]);

  const kinds = useMemo(
    () => Array.from(new Set(bank.problems.map((problem) => problem.kind))),
    [bank.problems]
  );

  const difficulties = useMemo(
    () =>
      DIFFICULTY_ORDER.filter((value) =>
        bank.problems.some((problem) => problem.difficulty === value)
      ),
    [bank.problems]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return bank.problems.filter((problem) => {
      const haystack = [
        problem.id,
        problem.chapterTitle,
        problem.sectionTitle,
        problem.kind,
        problem.difficulty,
        problem.prompt,
        ...problem.concepts,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!q || haystack.includes(q)) &&
        (chapter === "Semua" || problem.chapterNumber === chapter) &&
        (section === "Semua" || problem.sectionNumber === section) &&
        (difficulty === "Semua" || problem.difficulty === difficulty) &&
        (kind === "Semua" || problem.kind === kind)
      );
    });
  }, [bank.problems, query, chapter, section, difficulty, kind]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const visible = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  function resetFilters() {
    setQuery("");
    setChapter("Semua");
    setSection("Semua");
    setDifficulty("Semua");
    setKind("Semua");
    setPage(1);
  }

  function randomProblem() {
    const hasFilteredProblems = filtered.length > 0;
    const pool = hasFilteredProblems ? filtered : bank.problems;
    const picked = pool[Math.floor(Math.random() * pool.length)];
    const pickedIndex = pool.findIndex((problem) => problem.id === picked.id);
    const nextPage = Math.floor(pickedIndex / PAGE_SIZE) + 1;

    if (!hasFilteredProblems) {
      setQuery("");
      setChapter("Semua");
      setSection("Semua");
      setDifficulty("Semua");
      setKind("Semua");
    }

    setPage(nextPage);
    window.setTimeout(() => {
      document
        .getElementById("soal-" + picked.id.toLowerCase())
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <div className="problem-bank-component">
      <div className="bank-summary">
        <div>
          <span className="eyebrow">Bank Soal Lengkap</span>
          <h2>{bank.problemCount} soal {bank.title}</h2>
          <p>
            Soal dihimpun dari seluruh bab dan submateri {bank.title}, termasuk
            latihan, pemahaman konsep, definisi, pembuktian, dan contoh.
          </p>
        </div>
        <button className="btn secondary" type="button" onClick={randomProblem}>
          Acak Soal
        </button>
      </div>

      <div className="filter-panel chip-filter-panel">
        <label className="bank-search-field">
          <span>Cari</span>
          <div className="search-input-wrap">
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Cari ID, topik, konsep, tipe, atau isi soal..."
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setPage(1);
                }}
                aria-label="Hapus pencarian"
              >
                ×
              </button>
            )}
          </div>
        </label>

        <div className="filter-chip-group bank-chip-group">
          <span className="filter-chip-label">Tingkat</span>
          <div className="filter-chips bank-filter-chips">
            <button
              type="button"
              className={"filter-chip" + (difficulty === "Semua" ? " active" : "")}
              onClick={() => {
                setDifficulty("Semua");
                setPage(1);
              }}
            >
              Semua Tingkat
            </button>
            {difficulties.map((value) => (
              <button
                key={value}
                type="button"
                className={"filter-chip" + (difficulty === value ? " active" : "")}
                onClick={() => {
                  setDifficulty(value);
                  setPage(1);
                }}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-chip-group bank-chip-group">
          <span className="filter-chip-label">Tipe Soal</span>
          <div className="filter-chips bank-filter-chips">
            <button
              type="button"
              className={"filter-chip" + (kind === "Semua" ? " active" : "")}
              onClick={() => {
                setKind("Semua");
                setPage(1);
              }}
            >
              Semua Tipe
            </button>
            {kinds.map((value) => (
              <button
                key={value}
                type="button"
                className={"filter-chip" + (kind === value ? " active" : "")}
                onClick={() => {
                  setKind(value);
                  setPage(1);
                }}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-chip-group bank-chip-group">
          <span className="filter-chip-label">Bab</span>
          <div className="filter-chips bank-filter-chips">
            <button
              type="button"
              className={"filter-chip" + (chapter === "Semua" ? " active" : "")}
              onClick={() => {
                setChapter("Semua");
                setSection("Semua");
                setPage(1);
              }}
            >
              Semua Bab
            </button>
            {chapters.map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={"filter-chip" + (chapter === value ? " active" : "")}
                onClick={() => {
                  setChapter(value);
                  setSection("Semua");
                  setPage(1);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-chip-group bank-chip-group">
          <span className="filter-chip-label">Submateri</span>
          <div className="filter-chips bank-filter-chips">
            <button
              type="button"
              className={"filter-chip" + (section === "Semua" ? " active" : "")}
              onClick={() => {
                setSection("Semua");
                setPage(1);
              }}
            >
              Semua Submateri
            </button>
            {sections.map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={"filter-chip" + (section === value ? " active" : "")}
                onClick={() => {
                  setSection(value);
                  setPage(1);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-footer">
          <span>
            {filtered.length} dari {bank.problemCount} soal
          </span>
          <button type="button" onClick={resetFilters}>
            Hapus semua filter
          </button>
        </div>
      </div>

      <div className="ird-worked-grid">
        {visible.map((problem) => {
          const allSteps = splitAcademicSolution(problem.answer);
          const steps = allSteps.length > 1 ? allSteps.slice(0, -1) : allSteps;
          const conclusion =
            allSteps.length > 1 ? allSteps[allSteps.length - 1] : undefined;

          return (
            <article
              className="ird-worked-card"
              id={"soal-" + problem.id.toLowerCase()}
              key={problem.id}
            >
              <div className="ird-worked-head">
                <div className="ird-problem-number">{problem.id}</div>
                <div>
                  <span className="eyebrow">
                    Bab {problem.chapterNumber} · {problem.chapterTitle}
                  </span>
                  <h3>{problem.sectionNumber} · {problem.sectionTitle}</h3>
                </div>
              </div>

              <div className="concept-pills compact-pills">
                <span>{problem.difficulty}</span>
                <span>{problem.kind}</span>
              </div>

              <div className="ird-worked-prompt">
                <RichMath>{problem.prompt}</RichMath>
              </div>

              <div className="concept-pills compact-pills">
                {problem.concepts.slice(0, 4).map((concept) => (
                  <span key={concept}>{concept}</span>
                ))}
              </div>

              <details className="ird-proof">
                <summary>Buka Petunjuk</summary>
                <div className="ird-proof-body">
                  <RichMath>{problem.hint}</RichMath>
                </div>
              </details>

              <details className="ird-worked-solution">
                <summary>Buka Solusi</summary>
                <div className="ird-worked-solution-body">
                  <AcademicSolution
                    target={problem.prompt}
                    idea={problem.hint}
                    steps={steps}
                    conclusion={conclusion}
                  />
                </div>
              </details>
            </article>
          );
        })}
      </div>

      {visible.length === 0 && (
        <div className="empty-state">
          <h2>Tidak ada soal yang cocok.</h2>
          <p>Coba ubah kata pencarian atau hapus beberapa filter.</p>
        </div>
      )}

      <nav className="pagination" aria-label="Pagination bank soal">
        <button
          disabled={safePage === 1}
          onClick={() => setPage((value) => Math.max(1, value - 1))}
        >
          ← Sebelumnya
        </button>
        <div>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map(
            (number) => (
              <button
                className={number === safePage ? "active" : ""}
                onClick={() => setPage(number)}
                key={number}
                aria-current={number === safePage ? "page" : undefined}
              >
                {number}
              </button>
            )
          )}
        </div>
        <button
          disabled={safePage === pageCount}
          onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
        >
          Berikutnya →
        </button>
      </nav>

      <div className="actions" style={{ marginTop: 28 }}>
        <Link className="btn secondary" href={"/materi/" + bank.slug}>
          Kembali ke Materi {bank.title}
        </Link>
        <Link className="btn secondary" href="/bank-soal">
          Semua Bank Soal
        </Link>
      </div>
    </div>
  );
}
