"use client";

import { useMemo, useState } from "react";
import { curatedBasisProblems } from "@/data/basis-dimension-problems";
import { localizeProblem } from "@/data/problem-translations-en";
import { RichMath } from "@/components/RichMath";
import { AcademicSolution } from "@/components/AcademicSolution";
import { useLanguage } from "@/components/LanguageProvider";

function difficultyLabel(raw:string, language:"id"|"en") {
  const value = raw.toLowerCase();
  const group = value.includes("dasar") || value.includes("basic")
    ? "Dasar"
    : value.includes("menengah") || value.includes("intermediate")
      ? "Menengah"
      : "Lanjut";
  if (language === "id") return group;
  if (group === "Dasar") return "Basic";
  if (group === "Menengah") return "Intermediate";
  return "Advanced";
}

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
          <span>{difficultyLabel(rawProblems[index].difficulty, language)}</span>
          <span>{problem.type}</span>
          <span>{problem.estimatedTime}</span>
        </div>

        <h1>{problem.title}</h1>
        <div className="problem-text rich-problem-text"><RichMath>{problem.problem}</RichMath></div>

        <div className="practice-actions">
          <button className="btn secondary" onClick={()=>setShowHint1(v=>!v)}>
            {showHint1 ? ui("Tutup Petunjuk 1","Hide Hint 1") : ui("Petunjuk 1","Hint 1")}
          </button>
          <button className="btn secondary" onClick={()=>setShowHint2(v=>!v)}>
            {showHint2 ? ui("Tutup Petunjuk 2","Hide Hint 2") : ui("Petunjuk 2","Hint 2")}
          </button>
          <button className="btn primary" onClick={()=>setShowSolution(v=>!v)}>
            {showSolution ? ui("Tutup Pembahasan","Hide Solution") : ui("Buka Solusi","Open Solution")}
          </button>
        </div>

        {showHint1 && <div className="content-box hint-box"><strong>{ui("Petunjuk 1","Hint 1")}</strong><p><RichMath>{problem.hint1}</RichMath></p></div>}
        {showHint2 && <div className="content-box hint-box"><strong>{ui("Petunjuk 2","Hint 2")}</strong><p><RichMath>{problem.hint2}</RichMath></p></div>}

        {showSolution && (
          <AcademicSolution
            known={problem.known}
            target={problem.target}
            idea={problem.idea}
            steps={problem.solution}
            conclusion={problem.answer}
          />
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
