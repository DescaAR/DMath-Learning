"use client";

import { useMemo, useState } from "react";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";

export function ProblemBank() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("Semua");
  const [type, setType] = useState("Semua");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return basisDimensionProblems.filter((problem) => {
      const text = (problem.id + " " + problem.title + " " + problem.problem + " " + problem.concepts.join(" ")).toLowerCase();
      return (!q || text.includes(q))
        && (difficulty === "Semua" || problem.difficulty === difficulty)
        && (type === "Semua" || problem.type === type);
    });
  }, [query, difficulty, type]);

  return (
    <>
      <div className="filter-bar">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari ID, judul, atau konsep..." aria-label="Cari soal" />
        <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)} aria-label="Filter kesulitan">
          <option>Semua</option><option>Dasar</option><option>Menengah</option><option>Sulit</option><option>Sangat Sulit</option><option>Challenge</option>
        </select>
        <select value={type} onChange={(event) => setType(event.target.value)} aria-label="Filter tipe">
          <option>Semua</option><option>Konsep</option><option>Hitungan</option><option>Pembuktian</option><option>True/False</option><option>Counterexample</option><option>Construction</option>
        </select>
        <button onClick={() => { setQuery(""); setDifficulty("Semua"); setType("Semua"); }}>Clear filter</button>
      </div>
      <p className="result-count">{filtered.length} soal published dari target 100 soal.</p>
      <div className="problem-list">
        {filtered.map((problem) => (
          <article className="problem-card" key={problem.id}>
            <div className="problem-meta">
              <span className="problem-id">{problem.id}</span>
              <span>{problem.difficulty}</span>
              <span>{problem.type}</span>
            </div>
            <h2>{problem.title}</h2>
            <p>{problem.problem}</p>
            <div className="problem-footer">
              <span>{problem.estimatedTime}</span>
              <a href="/kuliah/aljabar-linear/basis-dan-dimensi/latihan">Buka di latihan →</a>
            </div>
          </article>
        ))}
      </div>
      <div className="planned-bank">
        <strong>Roadmap LA-BD-026 s.d. LA-BD-100</strong>
        <p>Nomor berikutnya tetap disiapkan sebagai target konten, tetapi belum ditampilkan sebagai soal published sampai selesai ditulis dan divalidasi.</p>
      </div>
    </>
  );
}
