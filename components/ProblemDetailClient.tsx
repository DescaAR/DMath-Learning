"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Problem } from "@/data/problem-types";
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

function Text({ children }: { children: string }) {
  return <RichMath className="ird-rich-text">{children}</RichMath>;
}

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
  const ui = (id: string, en: string) => language === "en" ? en : id;
  const [active, setActive] = useState("problem-section-1");
  const [progress, setProgress] = useState(0);

  const sections = useMemo(() => [
    ["problem-section-1", ui("Soal", "Problem")],
    ["problem-section-2", ui("Petunjuk", "Hints")],
    ["problem-section-3", ui("Pembahasan", "Solution")],
  ] as const, [language]);

  useEffect(() => {
    const updateProgress = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, Math.max(0, window.scrollY / max * 100)));
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => Math.abs(a.boundingClientRect.top - 120) - Math.abs(b.boundingClientRect.top - 120));
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-110px 0px -62% 0px", threshold: [0, 0.01, 0.2] });
    sections.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateProgress); };
  }, [sections]);

  return (
    <div className="textbook-page ird-page problem-detail-page" data-no-translate>
      <div className="reading-progress" aria-hidden="true"><span style={{ width: progress + "%" }} /></div>

      <section className="chapter-hero textbook-hero ird-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/bank-soal">{ui("Bank Soal", "Problem Bank")}</Link><span>/</span>
            <Link href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">{ui("Basis dan Dimensi", "Basis and Dimension")}</Link><span>/</span>
            <strong>{problem.id}</strong>
          </div>
          <div className="chapter-label-row"><span className="eyebrow">{problem.subchapter} · {problem.type}</span></div>
          <h1>{problem.title}</h1>
          <div className="chapter-meta textbook-meta">
            <span>{problem.id}</span><span>{difficultyLabel(rawProblem.difficulty, language)}</span><span>{problem.type}</span><span>{problem.estimatedTime}</span>
          </div>
          <div className="chapter-stat-grid">
            <div><strong>{problem.concepts.length}</strong><span>{ui("konsep", "concepts")}</span></div>
            <div><strong>2</strong><span>{ui("petunjuk", "hints")}</span></div>
            <div><strong>{problem.solution.length}</strong><span>{ui("langkah pembahasan", "solution steps")}</span></div>
            <div><strong>1</strong><span>{ui("jawaban akhir", "final answer")}</span></div>
          </div>
          <div className="actions">
            <a className="btn primary" href="#problem-section-1">{ui("Baca Soal", "Read Problem")}</a>
            <a className="btn secondary" href="#problem-section-3">{ui("Pembahasan", "Solution")}</a>
          </div>
        </div>
      </section>

      <section className="section textbook-section-shell">
        <div className="container article-layout textbook-layout">
          <aside className="toc material-toc textbook-toc ird-toc">
            <div className="toc-progress-mini"><span>{ui("Progres", "Progress")}</span><strong>{Math.round(progress)}%</strong></div>
            <strong>{ui("Struktur Soal", "Problem Structure")}</strong>
            {sections.map(([id, label], index) => <a key={id} href={"#" + id} className={active === id ? "active" : ""}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
          </aside>

          <article className="article deep-article textbook-article ird-article">
            <section id="problem-section-1" className="book-section ird-source-section">
              <div className="section-number">01</div>
              <span className="eyebrow">{ui("Soal", "Problem")}</span>
              <h2>{problem.title}</h2>
              <article className="ird-worked-card">
                <div className="ird-worked-head">
                  <div className="ird-problem-number">{problem.id}</div>
                  <div><span className="eyebrow">{difficultyLabel(rawProblem.difficulty, language)}</span><h3>{problem.subchapter}</h3></div>
                </div>
                <div className="ird-worked-prompt"><Text>{problem.problem}</Text></div>
              </article>
            </section>

            <section id="problem-section-2" className="book-section ird-source-section">
              <div className="section-number">02</div>
              <span className="eyebrow">{ui("Petunjuk", "Hints")}</span>
              <h2>{ui("Petunjuk penyelesaian", "Solution hints")}</h2>
              <details className="ird-proof"><summary>{ui("Buka Petunjuk 1", "Open Hint 1")}</summary><div className="ird-proof-body"><Text>{problem.hint1}</Text></div></details>
              <details className="ird-proof"><summary>{ui("Buka Petunjuk 2", "Open Hint 2")}</summary><div className="ird-proof-body"><Text>{problem.hint2}</Text></div></details>
            </section>

            <section id="problem-section-3" className="book-section ird-practice-section">
              <div className="section-number">03</div>
              <span className="eyebrow">{ui("Pembahasan", "Solution")}</span>
              <h2>{ui("Pembahasan lengkap", "Complete solution")}</h2>
              <details className="ird-worked-solution" open>
                <summary>{ui("Buka Solusi", "Open Solution")}</summary>
                <div className="ird-worked-solution-body">
                  <AcademicSolution
                    known={problem.known}
                    target={problem.target}
                    idea={problem.idea}
                    steps={problem.solution}
                    conclusion={problem.answer}
                  />
                </div>
              </details>
            </section>

            <section className="next-learning-block textbook-next">
              <div>
                <span className="eyebrow">{ui("Soal Berikutnya", "Next Problem")}</span>
                <h2>{next?next.title:ui("Kembali ke Bank Soal", "Back to Problem Bank")}</h2>
              </div>
              <div className="actions">
                <Link className="btn secondary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">{ui("Daftar 100 Soal", "100 Problems")}</Link>
                {next && <Link className="btn primary" href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + next.id.toLowerCase()}>{ui("Soal Berikutnya", "Next Problem")}</Link>}
              </div>
            </section>

            <nav className="problem-detail-nav">
              {previous ? <Link href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + previous.id.toLowerCase()}><span>← {ui("Soal sebelumnya", "Previous problem")}</span><strong>{previous.id}</strong></Link> : <span />}
              <Link className="all-problems-link" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">{ui("100 soal", "100 problems")}</Link>
              {next ? <Link href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + next.id.toLowerCase()}><span>{ui("Soal berikutnya", "Next problem")} →</span><strong>{next.id}</strong></Link> : <span />}
            </nav>
          </article>
        </div>
      </section>
    </div>
  );
}
