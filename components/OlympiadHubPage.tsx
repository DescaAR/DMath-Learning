"use client";

import Link from "next/link";
import { useState } from "react";
import type { OlympiadHub, OText } from "@/data/olympiad-hubs";
import { useLanguage } from "@/components/LanguageProvider";
import { RichMath } from "@/components/RichMath";

export function OlympiadHubPage({ hub }: { hub: OlympiadHub }) {
  const { language } = useLanguage();
  const en = language === "en";
  const pick = (value: OText) => en ? value.en : value.id;
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});

  const difficultyLabel = (value: string) => {
    if (!en) return value;
    if (value === "Dasar") return "Basic";
    if (value === "Menengah") return "Intermediate";
    return "Challenge";
  };

  return (
    <div className="olympiad-hub-page" data-no-translate>
      <section className="olympiad-hub-hero">
        <div className="container">
          <div className="track-detail-breadcrumb">
            <Link href="/olimpiade">{en ? "Olympiad" : "Olimpiade"}</Link>
            <span>/</span>
            <strong>{pick(hub.title)}</strong>
          </div>

          <div className="olympiad-hub-hero-grid">
            <div>
              <span className="eyebrow">{en ? "Competition Mathematics" : "Matematika Kompetisi"}</span>
              <h1>{pick(hub.title)}</h1>
              <p>{pick(hub.subtitle)}</p>
              <div className="olympiad-field-row">
                {hub.fields.map((field) => <span key={pick(field)}>{pick(field)}</span>)}
              </div>
              <div className="actions">
                <a className="btn primary" href="#syllabus">{en ? "Open Syllabus" : "Buka Syllabus"}</a>
                <a className="btn secondary" href="#problems">{en ? "Try Problems" : "Coba Soal"}</a>
              </div>
            </div>

            <aside className="olympiad-hub-summary">
              <div><strong>{hub.syllabus.length}</strong><span>{en ? "core fields" : "bidang inti"}</span></div>
              <div><strong>{hub.curated.length}</strong><span>{en ? "curated problems" : "soal terkurasi"}</span></div>
              <div><strong>1</strong><span>{en ? "challenge problem" : "soal challenge"}</span></div>
              <div><strong>3</strong><span>{en ? "roadmap phases" : "fase roadmap"}</span></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="syllabus">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{en ? "Syllabus" : "Syllabus"}</span>
              <h2>{en ? "A structured competition curriculum." : "Kurikulum kompetisi yang terstruktur."}</h2>
            </div>
            <p>{en
              ? "Each field is organized around techniques and patterns that repeatedly appear in competition problems."
              : "Setiap bidang disusun berdasarkan teknik dan pola yang berulang dalam soal kompetisi."}</p>
          </div>

          <div className="olympiad-syllabus-grid">
            {hub.syllabus.map((unit, index) => (
              <article className="olympiad-syllabus-card" key={pick(unit.title)}>
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{pick(unit.title)}</h3>
                <p>{pick(unit.description)}</p>
                <div className="track-topic-chips">
                  {unit.topics.map((topic) => <span key={pick(topic)}>{pick(topic)}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="roadmap">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Roadmap</span>
              <h2>{en ? "How to progress from foundations to competition." : "Urutan belajar dari fondasi sampai siap kompetisi."}</h2>
            </div>
          </div>

          <div className="olympiad-roadmap">
            {hub.roadmap.map((phase, index) => (
              <article className="olympiad-roadmap-card" key={pick(phase.title)}>
                <div className="olympiad-roadmap-number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{pick(phase.title)}</h3>
                  <p>{pick(phase.focus)}</p>
                  <ul>
                    {phase.outcomes.map((outcome) => <li key={pick(outcome)}>{pick(outcome)}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="problems">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{en ? "Curated Problems" : "Soal Terkurasi"}</span>
              <h2>{en ? "Solve first. Reveal hints only when needed." : "Kerjakan dulu. Buka hint hanya jika diperlukan."}</h2>
            </div>
            <p>{en
              ? "Problems are selected to represent recurring competition techniques rather than repetitive drill."
              : "Soal dipilih untuk mewakili teknik kompetisi yang sering muncul, bukan latihan repetitif."}</p>
          </div>

          <div className="olympiad-problem-list">
            {hub.curated.map((problem) => {
              const hintOpen = Boolean(openHints[problem.id]);
              const solutionOpen = Boolean(openSolutions[problem.id]);
              return (
                <article className="olympiad-problem-card" key={problem.id}>
                  <div className="olympiad-problem-top">
                    <div>
                      <span className="problem-id">{problem.id}</span>
                      <span className={"problem-difficulty diff-" + problem.difficulty.toLowerCase()}>{difficultyLabel(problem.difficulty)}</span>
                    </div>
                    <span className="problem-field">{pick(problem.field)}</span>
                  </div>

                  <h3>{pick(problem.title)}</h3>
                  <p className="olympiad-problem-statement"><RichMath>{pick(problem.problem)}</RichMath></p>

                  <div className="olympiad-problem-actions">
                    <button
                      type="button"
                      className="btn secondary"
                      onClick={() => setOpenHints((prev) => ({ ...prev, [problem.id]: !prev[problem.id] }))}
                    >
                      {hintOpen ? (en ? "Hide Hint" : "Tutup Hint") : (en ? "Show Hint" : "Buka Hint")}
                    </button>
                    <button
                      type="button"
                      className="btn secondary"
                      onClick={() => setOpenSolutions((prev) => ({ ...prev, [problem.id]: !prev[problem.id] }))}
                    >
                      {solutionOpen ? (en ? "Hide Solution" : "Tutup Pembahasan") : (en ? "Show Solution" : "Buka Pembahasan")}
                    </button>
                  </div>

                  {hintOpen && (
                    <div className="olympiad-hint">
                      <strong>{en ? "Hint" : "Hint"}</strong>
                      <p><RichMath>{pick(problem.hint)}</RichMath></p>
                    </div>
                  )}

                  {solutionOpen && (
                    <div className="olympiad-solution">
                      <strong>{en ? "Solution" : "Pembahasan"}</strong>
                      {problem.solution.map((step, index) => (
                        <div className="solution-step" key={pick(step)}>
                          <span>{index + 1}</span>
                          <p><RichMath>{pick(step)}</RichMath></p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section soft" id="bank-soal">
        <div className="container olympiad-bank-layout">
          <div>
            <span className="eyebrow">{en ? "Problem Bank" : "Bank Soal"}</span>
            <h2>{en ? "Continue with larger problem collections." : "Lanjutkan ke kumpulan soal yang lebih banyak."}</h2>
            <p>{en
              ? "Use the problem bank for volume practice, then return here to review strategy and write complete solutions."
              : "Gunakan bank soal untuk latihan volume besar, lalu kembali ke sini untuk mengaudit strategi dan kualitas solusi."}</p>
          </div>
          <div className="olympiad-bank-actions">
            <Link className="btn primary" href="/bank-soal">{en ? "Open Problem Bank" : "Buka Bank Soal"}</Link>
            <Link className="btn secondary" href={"/belajar/" + hub.learningTrackSlug}>{en ? "Open Full Track" : "Buka Jalur Lengkap"}</Link>
            <Link className="btn secondary" href="/pembahasan">{en ? "Solution Index" : "Indeks Pembahasan"}</Link>
          </div>
        </div>
      </section>

      <section className="section" id="challenge">
        <div className="container">
          <div className="olympiad-challenge-card">
            <div className="olympiad-challenge-head">
              <span className="eyebrow">Challenge</span>
              <span className="problem-field">{pick(hub.challenge.field)}</span>
            </div>
            <h2>{pick(hub.challenge.title)}</h2>
            <p className="olympiad-challenge-problem"><RichMath>{pick(hub.challenge.problem)}</RichMath></p>
            <details>
              <summary>{en ? "Open Hint" : "Buka Hint"}</summary>
              <p><RichMath>{pick(hub.challenge.hint)}</RichMath></p>
            </details>
            <details>
              <summary>{en ? "Open Complete Solution" : "Buka Pembahasan Lengkap"}</summary>
              <div className="olympiad-challenge-solution">
                {hub.challenge.solution.map((step, index) => (
                  <div className="solution-step" key={pick(step)}>
                    <span>{index + 1}</span>
                    <p><RichMath>{pick(step)}</RichMath></p>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container track-detail-cta">
          <div>
            <span className="eyebrow">{en ? "Train Systematically" : "Latihan Terarah"}</span>
            <h2>{en ? "Theory, curated problems, larger sets, then challenge." : "Teori, soal terkurasi, bank soal, lalu challenge."}</h2>
            <p>{en
              ? "Return to the roadmap after each problem set and record which techniques were decisive."
              : "Setelah satu problem set, kembali ke roadmap dan catat teknik apa yang benar-benar menentukan solusi."}</p>
          </div>
          <div className="actions">
            <a className="btn primary" href="#syllabus">{en ? "Review Syllabus" : "Lihat Syllabus"}</a>
            <a className="btn secondary" href="#challenge">{en ? "Go to Challenge" : "Ke Challenge"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
