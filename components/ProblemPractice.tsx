"use client";

import { useMemo, useState } from "react";
import { curatedBasisProblems } from "@/data/basis-dimension-problems";
import { RichMath } from "@/components/RichMath";

export function ProblemPractice() {
  const [index, setIndex] = useState(0);
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const problems = useMemo(() => curatedBasisProblems, []);
  const problem = problems[index];

  function move(nextIndex: number) {
    setIndex(nextIndex);
    setShowHint1(false);
    setShowHint2(false);
    setShowSolution(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="practice-shell">
      <div className="practice-progress">
        <div className="practice-progress-head">
          <span>Latihan terkurasi</span>
          <strong>{index + 1} / {problems.length}</strong>
        </div>
        <div className="progress-track">
          <span style={{ width: ((index + 1) / problems.length * 100) + "%" }} />
        </div>
      </div>

      <article className="problem-focus">
        <div className="problem-meta">
          <span className="problem-id">{problem.id}</span>
          <span>{problem.subchapter}</span>
          <span>{problem.difficulty}</span>
          <span>{problem.type}</span>
          <span>{problem.estimatedTime}</span>
        </div>

        <h1>{problem.title}</h1>
        <div className="problem-text rich-problem-text">
          <RichMath>{problem.problem}</RichMath>
        </div>

        <div className="concept-pills">
          {problem.concepts.map((concept) => <span key={concept}>{concept}</span>)}
        </div>

        <div className="practice-actions">
          <button className="btn secondary" onClick={() => setShowHint1((value) => !value)}>
            {showHint1 ? "Sembunyikan Hint 1" : "Hint 1"}
          </button>
          <button className="btn secondary" onClick={() => setShowHint2((value) => !value)}>
            {showHint2 ? "Sembunyikan Hint 2" : "Hint 2"}
          </button>
          <button className="btn primary" onClick={() => setShowSolution((value) => !value)}>
            {showSolution ? "Tutup Pembahasan" : "Lihat Pembahasan"}
          </button>
        </div>

        {showHint1 && (
          <div className="content-box hint-box">
            <strong>Hint 1</strong>
            <p><RichMath>{problem.hint1}</RichMath></p>
          </div>
        )}

        {showHint2 && (
          <div className="content-box hint-box">
            <strong>Hint 2</strong>
            <p><RichMath>{problem.hint2}</RichMath></p>
          </div>
        )}

        {showSolution && (
          <div className="solution-stack full-solution">
            <div className="solution-overview-grid">
              <div className="content-box">
                <span className="box-kicker">Diketahui</span>
                <p><RichMath>{problem.known}</RichMath></p>
              </div>
              <div className="content-box">
                <span className="box-kicker">Dibuktikan / Dicari</span>
                <p><RichMath>{problem.target}</RichMath></p>
              </div>
            </div>

            <div className="content-box idea-box">
              <span className="box-kicker">Ide Utama</span>
              <p><RichMath>{problem.idea}</RichMath></p>
            </div>

            <div className="content-box solution-box">
              <span className="box-kicker">Pembahasan Langkah demi Langkah</span>
              <div className="solution-steps">
                {problem.solution.map((step, stepIndex) => (
                  <div className="solution-step" key={step}>
                    <span>{stepIndex + 1}</span>
                    <p><RichMath>{step}</RichMath></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="content-box answer-box">
              <span className="box-kicker">Jawaban Akhir</span>
              <p><RichMath>{problem.answer}</RichMath></p>
            </div>

            {problem.alternative && (
              <div className="content-box alternative-box">
                <span className="box-kicker">Metode Alternatif</span>
                <p><RichMath>{problem.alternative}</RichMath></p>
              </div>
            )}

            <div className="solution-overview-grid">
              <div className="content-box warning-box">
                <span className="box-kicker">Kesalahan Umum</span>
                <p><RichMath>{problem.mistake}</RichMath></p>
              </div>
              <div className="content-box insight-box">
                <span className="box-kicker">Insight / Generalisasi</span>
                <p><RichMath>{problem.insight}</RichMath></p>
              </div>
            </div>
          </div>
        )}
      </article>

      <div className="practice-nav">
        <button disabled={index === 0} onClick={() => move(index - 1)}>← Soal Sebelumnya</button>
        <span>{problem.id}</span>
        <button disabled={index === problems.length - 1} onClick={() => move(index + 1)}>Soal Berikutnya →</button>
      </div>
    </div>
  );
}
