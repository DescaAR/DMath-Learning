"use client";

import { useState } from "react";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";

export function ProblemPractice() {
  const [index, setIndex] = useState(0);
  const [hint1, setHint1] = useState(false);
  const [hint2, setHint2] = useState(false);
  const [solution, setSolution] = useState(false);
  const problem = basisDimensionProblems[index];

  function move(nextIndex: number) {
    setIndex(nextIndex);
    setHint1(false);
    setHint2(false);
    setSolution(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="practice-shell">
      <div className="practice-progress">
        <span>Soal {index + 1} dari {basisDimensionProblems.length}</span>
        <div className="progress-track"><span style={{ width: ((index + 1) / basisDimensionProblems.length * 100) + "%" }} /></div>
      </div>

      <article className="problem-focus">
        <div className="problem-meta">
          <span className="problem-id">{problem.id}</span>
          <span>{problem.difficulty}</span>
          <span>{problem.type}</span>
          <span>{problem.estimatedTime}</span>
        </div>
        <h1>{problem.title}</h1>
        <p className="problem-text">{problem.problem}</p>
        <div className="concept-pills">
          {problem.concepts.map((concept) => <span key={concept}>{concept}</span>)}
        </div>

        <div className="practice-actions">
          <button className="btn secondary" onClick={() => setHint1((value) => !value)}>Hint 1</button>
          <button className="btn secondary" onClick={() => setHint2((value) => !value)}>Hint 2</button>
          <button className="btn primary" onClick={() => setSolution((value) => !value)}>Lihat Pembahasan</button>
        </div>

        {hint1 && <div className="content-box hint-box"><strong>Hint 1</strong><p>{problem.hint1}</p></div>}
        {hint2 && <div className="content-box hint-box"><strong>Hint 2</strong><p>{problem.hint2}</p></div>}
        {solution && (
          <div className="solution-stack">
            <div className="content-box"><strong>Ide Utama</strong><p>Identifikasi definisi atau teorema yang paling langsung menghubungkan informasi soal dengan target.</p></div>
            <div className="content-box solution-box"><strong>Pembahasan</strong><p>{problem.solution}</p></div>
            <div className="content-box answer-box"><strong>Jawaban Akhir</strong><p>{problem.answer}</p></div>
          </div>
        )}
      </article>

      <div className="practice-nav">
        <button disabled={index === 0} onClick={() => move(index - 1)}>← Soal Sebelumnya</button>
        <button disabled={index === basisDimensionProblems.length - 1} onClick={() => move(index + 1)}>Soal Berikutnya →</button>
      </div>
    </div>
  );
}
