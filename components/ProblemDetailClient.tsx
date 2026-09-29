"use client";

import Link from "next/link";
import type { Problem } from "@/data/problem-types";
import { localizeProblem } from "@/data/problem-translations-en";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

export function ProblemDetailClient({
  rawProblem,
  rawPrevious,
  rawNext,
}: {
  rawProblem: Problem;
  rawPrevious: Problem | null;
  rawNext: Problem | null;
}) {
  const { language } = useLanguage();
  const problem = localizeProblem(rawProblem, language);
  const previous = rawPrevious ? localizeProblem(rawPrevious, language) : null;
  const next = rawNext ? localizeProblem(rawNext, language) : null;
  const ui=(id:string,en:string)=>language==="en"?en:id;

  return (
    <section className="section problem-detail-page" data-no-translate>
      <div className="container narrow">
        <div className="breadcrumb">
          <Link href="/bank-soal">{ui("Bank Soal","Problem Bank")}</Link>
          <span>/</span>
          <Link href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">{ui("Basis dan Dimensi","Basis and Dimension")}</Link>
          <span>/</span>
          <strong>{problem.id}</strong>
        </div>

        <article className="problem-focus problem-detail-card">
          <div className="problem-meta">
            <span className="problem-id">{problem.id}</span>
            <span>{problem.subchapter}</span>
            <span>{problem.difficulty}</span>
            <span>{problem.type}</span>
            <span>{problem.estimatedTime}</span>
          </div>

          <h1>{problem.title}</h1>
          <div className="problem-text rich-problem-text"><RichMath>{problem.problem}</RichMath></div>
          <div className="concept-pills">{problem.concepts.map(c=><span key={c}>{c}</span>)}</div>

          <div className="problem-detail-hints">
            <details className="details-box hint-details"><summary>Hint 1</summary><p><RichMath>{problem.hint1}</RichMath></p></details>
            <details className="details-box hint-details"><summary>Hint 2</summary><p><RichMath>{problem.hint2}</RichMath></p></details>
          </div>

          <details className="details-box solution-details">
            <summary>{ui("Lihat Pembahasan Lengkap","Show Complete Solution")}</summary>
            <div className="full-solution detail-solution">
              <div className="solution-overview-grid">
                <div className="content-box"><span className="box-kicker">{ui("Diketahui","Given")}</span><p><RichMath>{problem.known}</RichMath></p></div>
                <div className="content-box"><span className="box-kicker">{ui("Dibuktikan / Dicari","To Prove / Find")}</span><p><RichMath>{problem.target}</RichMath></p></div>
              </div>
              <div className="content-box idea-box"><span className="box-kicker">{ui("Ide Utama","Main Idea")}</span><p><RichMath>{problem.idea}</RichMath></p></div>
              <div className="content-box solution-box">
                <span className="box-kicker">{ui("Pembahasan Langkah demi Langkah","Step-by-Step Solution")}</span>
                <div className="solution-steps">{problem.solution.map((step,i)=><div className="solution-step" key={step}><span>{i+1}</span><p><RichMath>{step}</RichMath></p></div>)}</div>
              </div>
              <div className="content-box answer-box"><span className="box-kicker">{ui("Jawaban Akhir","Final Answer")}</span><p><RichMath>{problem.answer}</RichMath></p></div>
              {problem.alternative && <div className="content-box alternative-box"><span className="box-kicker">{ui("Metode Alternatif","Alternative Method")}</span><p><RichMath>{problem.alternative}</RichMath></p></div>}
              <div className="solution-overview-grid">
                <div className="content-box warning-box"><span className="box-kicker">{ui("Kesalahan Umum","Common Mistakes")}</span><p><RichMath>{problem.mistake}</RichMath></p></div>
                <div className="content-box insight-box"><span className="box-kicker">{ui("Insight / Generalisasi","Insight / Generalization")}</span><p><RichMath>{problem.insight}</RichMath></p></div>
              </div>
            </div>
          </details>
        </article>

        <nav className="problem-detail-nav">
          {previous ? <Link href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/"+previous.id.toLowerCase()}><span>← {ui("Soal sebelumnya","Previous problem")}</span><strong>{previous.id}</strong></Link> : <span />}
          <Link className="all-problems-link" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">{ui("100 soal","100 problems")}</Link>
          {next ? <Link href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/"+next.id.toLowerCase()}><span>{ui("Soal berikutnya","Next problem")} →</span><strong>{next.id}</strong></Link> : <span />}
        </nav>
      </div>
    </section>
  );
}
