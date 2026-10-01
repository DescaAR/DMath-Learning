"use client";

import { useMemo, useState } from "react";
import { curatedBasisProblems } from "@/data/basis-dimension-problems";
import { localizeProblem } from "@/data/problem-translations-en";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

export function ProblemPractice() {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const rawProblems = useMemo(() => curatedBasisProblems, []);
  const problem = localizeProblem(rawProblems[index], language);

  function move(nextIndex: number) {
    setIndex(nextIndex);
    setShowHint1(false);
    setShowHint2(false);
    setShowSolution(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const ui = (id:string,en:string)=>language==="en"?en:id;

  return (
    <div className="practice-shell" data-no-translate>
      <div className="practice-progress">
        <div className="practice-progress-head">
          <span>{ui("Latihan terkurasi","Curated Practice")}</span>
          <strong>{index + 1} / {rawProblems.length}</strong>
        </div>
        <div className="progress-track"><span style={{ width: ((index + 1) / rawProblems.length * 100) + "%" }} /></div>
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
        <div className="problem-text rich-problem-text"><RichMath>{problem.problem}</RichMath></div>
        <div className="concept-pills">{problem.concepts.map((concept)=><span key={concept}>{concept}</span>)}</div>

        <div className="practice-actions">
          <button className="btn secondary" onClick={()=>setShowHint1(v=>!v)}>
            {showHint1 ? ui("Sembunyikan Hint 1","Hide Hint 1") : "Hint 1"}
          </button>
          <button className="btn secondary" onClick={()=>setShowHint2(v=>!v)}>
            {showHint2 ? ui("Sembunyikan Hint 2","Hide Hint 2") : "Hint 2"}
          </button>
          <button className="btn primary" onClick={()=>setShowSolution(v=>!v)}>
            {showSolution ? ui("Tutup Pembahasan","Hide Solution") : ui("Lihat Pembahasan","Show Solution")}
          </button>
        </div>

        {showHint1 && <div className="content-box hint-box"><strong>Hint 1</strong><p><RichMath>{problem.hint1}</RichMath></p></div>}
        {showHint2 && <div className="content-box hint-box"><strong>Hint 2</strong><p><RichMath>{problem.hint2}</RichMath></p></div>}

        {showSolution && (
          <div className="solution-stack full-solution">
            <div className="solution-overview-grid">
              <div className="content-box"><span className="box-kicker">{ui("Diketahui","Given")}</span><p><RichMath>{problem.known}</RichMath></p></div>
              <div className="content-box"><span className="box-kicker">{ui("Dibuktikan / Dicari","To Prove / Find")}</span><p><RichMath>{problem.target}</RichMath></p></div>
            </div>

            <div className="content-box idea-box"><span className="box-kicker">{ui("Ide Utama","Main Idea")}</span><p><RichMath>{problem.idea}</RichMath></p></div>

            <div className="content-box solution-box">
              <span className="box-kicker">{ui("Pembahasan Langkah demi Langkah","Step-by-Step Solution")}</span>
              <div className="solution-steps">
                {problem.solution.map((step,stepIndex)=><div className="solution-step" key={step}><span>{stepIndex+1}</span><p><RichMath>{step}</RichMath></p></div>)}
              </div>
            </div>

            <div className="content-box answer-box"><span className="box-kicker">{ui("Jawaban Akhir","Final Answer")}</span><p><RichMath>{problem.answer}</RichMath></p></div>

            {problem.alternative && <div className="content-box alternative-box"><span className="box-kicker">{ui("Metode Alternatif","Alternative Method")}</span><p><RichMath>{problem.alternative}</RichMath></p></div>}

            <div className="solution-overview-grid">
              <div className="content-box warning-box"><span className="box-kicker">{ui("Kesalahan Umum","Common Mistakes")}</span><p><RichMath>{problem.mistake}</RichMath></p></div>
              <div className="content-box insight-box"><span className="box-kicker">{ui("Insight / Generalisasi","Insight / Generalization")}</span><p><RichMath>{problem.insight}</RichMath></p></div>
            </div>
          </div>
        )}
      </article>

      <div className="practice-nav">
        <button disabled={index===0} onClick={()=>move(index-1)}>← {ui("Soal Sebelumnya","Previous Problem")}</button>
        <span>{problem.id}</span>
        <button disabled={index===rawProblems.length-1} onClick={()=>move(index+1)}>{ui("Soal Berikutnya","Next Problem")} →</button>
      </div>
    </div>
  );
}
