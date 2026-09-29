"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";
import { RichMath } from "@/components/RichMath";

const PAGE_SIZE = 20;

export function ProblemBank() {
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
      const text = (
        problem.id + " " + problem.title + " " + problem.problem + " " +
        problem.concepts.join(" ") + " " + problem.subchapter
      ).toLowerCase();

      return (!q || text.includes(q))
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
    window.location.href = "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + selected.id.toLowerCase();
  }

  return (
    <>
      <div className="bank-summary">
        <div>
          <span className="eyebrow">Bank Soal Lengkap</span>
          <h2>100 soal Basis dan Dimensi</h2>
          <p>
            Distribusi: 20 Dasar · 30 Menengah · 30 Sulit · 15 Sangat Sulit · 5 Challenge.
            Setiap soal memiliki hint, pembahasan lengkap, kesalahan umum, dan insight.
          </p>
        </div>
        <button className="btn secondary" type="button" onClick={randomProblem}>Acak Soal</button>
      </div>

      <div className="filter-panel">
        <div className="filter-bar bank-filter-bar">
          <label className="filter-search">
            <span>Search</span>
            <input
              value={query}
              onChange={(event) => { setQuery(event.target.value); resetPage(); }}
              placeholder="Cari ID, judul, konsep, atau isi soal..."
            />
          </label>

          <label>
            <span>Subbab</span>
            <select value={subchapter} onChange={(event) => { setSubchapter(event.target.value); resetPage(); }}>
              <option>Semua</option>
              {subchapters.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>

          <label>
            <span>Kesulitan</span>
            <select value={difficulty} onChange={(event) => { setDifficulty(event.target.value); resetPage(); }}>
              <option>Semua</option>
              <option>Dasar</option>
              <option>Menengah</option>
              <option>Sulit</option>
              <option>Sangat Sulit</option>
              <option>Challenge</option>
            </select>
          </label>

          <label>
            <span>Tipe</span>
            <select value={type} onChange={(event) => { setType(event.target.value); resetPage(); }}>
              <option>Semua</option>
              <option>Konsep</option>
              <option>Hitungan</option>
              <option>Pembuktian</option>
              <option>True/False</option>
              <option>Counterexample</option>
              <option>Construction</option>
            </select>
          </label>
        </div>

        <div className="filter-footer">
          <span>{filtered.length} dari {basisDimensionProblems.length} soal</span>
          <button type="button" onClick={clearFilters}>Clear filter</button>
        </div>
      </div>

      <div className="problem-list problem-bank-grid">
        {visible.map((problem) => (
          <article className="problem-card premium-problem-card" key={problem.id}>
            <div className="problem-meta">
              <span className="problem-id">{problem.id}</span>
              <span>{problem.difficulty}</span>
              <span>{problem.type}</span>
            </div>

            <span className="problem-subchapter">{problem.subchapter}</span>
            <h2>{problem.title}</h2>
            <div className="problem-preview">
              <RichMath>{problem.problem}</RichMath>
            </div>

            <div className="concept-pills compact-pills">
              {problem.concepts.slice(0, 3).map((concept) => <span key={concept}>{concept}</span>)}
            </div>

            <div className="problem-footer">
              <span>± {problem.estimatedTime}</span>
              <Link href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + problem.id.toLowerCase()}>
                Buka Soal →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="empty-state">
          <h2>Tidak ada soal yang cocok.</h2>
          <p>Coba ubah kata pencarian atau hapus beberapa filter.</p>
        </div>
      )}

      <nav className="pagination" aria-label="Pagination bank soal">
        <button disabled={safePage === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>← Sebelumnya</button>
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
        <button disabled={safePage === pageCount} onClick={() => setPage((value) => Math.min(pageCount, value + 1))}>Berikutnya →</button>
      </nav>
    </>
  );
}
