"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { deepMaterials, type DeepMaterial } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { materialSupplements, type BilingualText } from "@/data/material-supplements";
import { materialPractice } from "@/data/material-practice";
import { materialPracticeExtra } from "@/data/material-practice-extra";
import { materialExtensions } from "@/data/material-extensions";
import { materialExplorations } from "@/data/material-explorations";
import { MathVisualization } from "@/components/MathVisualizations";
import { InteractiveMathLab } from "@/components/InteractiveMathLab";
import { MaterialCheckpoint } from "@/components/MaterialCheckpoint";
import { MaterialPractice } from "@/components/MaterialPractice";
import { ConceptIndex } from "@/components/ConceptIndex";
import { MaterialExplorationLab } from "@/components/MaterialExplorationLab";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

function RichParagraph({ text }: { text: string }) {
  return <p><RichMath>{text}</RichMath></p>;
}

export function DeepMaterialPage({ material }: { material: DeepMaterial }) {
  const { language } = useLanguage();
  const m = language === "en" ? (deepMaterialEnMap[material.slug] ?? material) : material;
  const supplement = materialSupplements[material.slug];
  const extensions = materialExtensions[material.slug] ?? [];
  const practiceProblems = [...(materialPractice[material.slug] ?? []), ...(materialPracticeExtra[material.slug] ?? [])];
  const explorations = materialExplorations[material.slug] ?? [];
  const en = language === "en";
  const ui = (id: string, english: string) => en ? english : id;
  const pick = (text: BilingualText) => en ? text.en : text.id;

  const sectionIds = useMemo(() => [
    "overview", "prasyarat", "tujuan", "peta", "indeks-konsep", "motivasi", "notasi", "definisi",
    "pendalaman", "subbab-lanjutan", "lab-interaktif", "teorema", "contoh", "eksplorasi", "latihan-bertingkat", "checkpoint", "kesalahan",
    "ringkasan", "koneksi", "referensi"
  ], []);

  const [activeSection, setActiveSection] = useState("overview");
  const [progress, setProgress] = useState(0);
  const chapterIndex = deepMaterials.findIndex((item) => item.slug === material.slug);
  const previousChapter = chapterIndex > 0 ? deepMaterials[chapterIndex - 1] : null;
  const nextChapter = chapterIndex >= 0 && chapterIndex < deepMaterials.length - 1 ? deepMaterials[chapterIndex + 1] : null;

  useEffect(() => {
    function updateReadingState() {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, Math.max(0, window.scrollY / max * 100)));

      let current = "overview";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 150) current = id;
      }
      setActiveSection(current);
    }

    updateReadingState();
    window.addEventListener("scroll", updateReadingState, { passive: true });
    window.addEventListener("resize", updateReadingState);
    return () => {
      window.removeEventListener("scroll", updateReadingState);
      window.removeEventListener("resize", updateReadingState);
    };
  }, [sectionIds]);

  const toc = [
    ["overview", "Overview", "Overview"],
    ["prasyarat", "Prasyarat", "Prerequisites"],
    ["tujuan", "Tujuan Pembelajaran", "Learning Objectives"],
    ["peta", "Peta Konsep", "Concept Map"],
    ["indeks-konsep", "Indeks Konsep", "Concept Index"],
    ["motivasi", "Motivasi & Intuisi", "Motivation & Intuition"],
    ["notasi", "Notasi", "Notation"],
    ["definisi", "Definisi Formal", "Formal Definitions"],
    ["pendalaman", "Pendalaman Konsep", "Deep Dive"],
    ["subbab-lanjutan", "Subbab Lanjutan", "Extended Topics"],
    ["lab-interaktif", "Lab Interaktif", "Interactive Lab"],
    ["teorema", "Teorema & Bukti", "Theorems & Proofs"],
    ["contoh", "Worked Examples", "Worked Examples"],
    ["eksplorasi", "Proyek Eksplorasi", "Exploration Project"],
    ["latihan-bertingkat", "Latihan Bertingkat", "Guided Practice"],
    ["checkpoint", "Cek Pemahaman", "Knowledge Check"],
    ["kesalahan", "Kesalahan Umum", "Common Mistakes"],
    ["ringkasan", "Ringkasan Bab", "Chapter Summary"],
    ["koneksi", "Koneksi", "Connections"],
    ["referensi", "Referensi", "References"],
  ];

  return (
    <div className="textbook-page" data-textbook="v2" data-no-translate>
      <div className="reading-progress" aria-hidden="true">
        <span style={{ width: progress + "%" }} />
      </div>

      <section className="chapter-hero textbook-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/materi">{ui("Materi", "Materials")}</Link>
            <span>/</span>
            <span>{m.level}</span>
            <span>/</span>
            <strong>{m.title}</strong>
          </div>

          <div className="chapter-label-row">
            <span className="eyebrow">{m.track} · {m.subject}</span>
            <span className="chapter-edition">{ui("Bab Digital Lengkap", "Complete Digital Chapter")}</span>
          </div>

          <h1>{m.title}</h1>
          <p className="chapter-lead"><RichMath>{m.summary}</RichMath></p>

          <div className="chapter-meta textbook-meta">
            <span>{m.level}</span>
            <span>{m.subject}</span>
            <span>{m.difficulty}</span>
            <span>{m.readingTime}</span>
          </div>

          <div className="chapter-stat-grid">
            <div><strong>{m.definitions.length}</strong><span>{ui("definisi formal", "formal definitions")}</span></div>
            <div><strong>{m.theorems.length}</strong><span>{ui("teorema + bukti", "theorems + proofs")}</span></div>
            <div><strong>{m.examples.length}</strong><span>{ui("contoh terbahas", "worked examples")}</span></div>
            <div><strong>{practiceProblems.length}</strong><span>{ui("latihan bertingkat", "guided problems")}</span></div>
          </div>

          <div className="actions">
            <a className="btn primary" href="#overview">{ui("Mulai Bab", "Start Chapter")}</a>
            <a className="btn secondary" href="#lab-interaktif">{ui("Buka Lab Interaktif", "Open Interactive Lab")}</a>
          </div>
        </div>
      </section>

      <section className="section textbook-section-shell">
        <div className="container article-layout textbook-layout">
          <aside className="toc material-toc textbook-toc">
            <div className="toc-progress-mini">
              <span>{ui("Progres membaca", "Reading progress")}</span>
              <strong>{Math.round(progress)}%</strong>
            </div>
            <strong>{ui("Isi Materi", "Contents")}</strong>
            {toc.map(([id, idLabel, enLabel], index) => (
              <a
                href={"#" + id}
                className={activeSection === id ? "active" : ""}
                key={id}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {en ? enLabel : idLabel}
              </a>
            ))}
          </aside>

          <article className="article deep-article textbook-article">
            <section id="overview" className="book-section">
              <div className="section-number">01</div>
              <span className="eyebrow">Overview</span>
              <h2>{ui("Gambaran besar materi", "Big Picture")}</h2>
              <RichParagraph text={m.summary} />
              <MathVisualization kind={m.visualization} />

              <div className="book-callout">
                <div>
                  <span>{ui("Cara belajar bab ini", "How to Study This Chapter")}</span>
                  <strong>{ui("Pahami → uji → visualisasikan → buktikan → latihan.", "Understand → test → visualize → prove → practice.")}</strong>
                </div>
                <p>{ui(
                  "Jangan hanya membaca rumus. Gunakan visualisasi, ubah parameter di lab, tutup pembahasan contoh, lalu coba menurunkan kembali hasil utama dengan bahasamu sendiri.",
                  "Do not merely read formulas. Use the visualizations, change parameters in the lab, hide worked solutions, and try to reconstruct the main results in your own words."
                )}</p>
              </div>
            </section>

            <section id="prasyarat" className="content-box prerequisite-box book-section">
              <div className="section-number">02</div>
              <strong>{ui("Prasyarat", "Prerequisites")}</strong>
              <ul>{m.prerequisites.map((item) => <li key={item}><RichMath>{item}</RichMath></li>)}</ul>
            </section>

            <section id="tujuan" className="book-section">
              <div className="section-number">03</div>
              <span className="eyebrow">{ui("Tujuan Pembelajaran", "Learning Objectives")}</span>
              <h2>{ui("Setelah mempelajari bab ini", "After Studying This Chapter")}</h2>
              <ul className="check-list">{m.objectives.map((item) => <li key={item}><RichMath>{item}</RichMath></li>)}</ul>
            </section>

            <section id="peta" className="book-section">
              <div className="section-number">04</div>
              <span className="eyebrow">{ui("Peta Konsep", "Concept Map")}</span>
              <h2>{ui("Alur konsep", "Concept Flow")}</h2>
              <div className="concept-map concept-map-wide">
                {m.conceptMap.map((item, index) => (
                  <div className="concept-node" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                    {index < m.conceptMap.length - 1 && <i aria-hidden="true">→</i>}
                  </div>
                ))}
              </div>
            </section>

            <ConceptIndex material={m} />

            <section id="motivasi" className="book-section">
              <div className="section-number">05</div>
              <span className="eyebrow">{ui("Motivasi & Intuisi", "Motivation & Intuition")}</span>
              <h2>{ui("Mengapa konsep ini dibutuhkan?", "Why Is This Concept Needed?")}</h2>
              {m.motivation.map((p) => <RichParagraph key={p} text={p} />)}
              <div className="intuition-grid">
                {m.intuition.map((p, index) => (
                  <div className="intuition-card" key={p}>
                    <span className="card-index">{ui("Intuisi", "Intuition")} {index + 1}</span>
                    <RichParagraph text={p} />
                  </div>
                ))}
              </div>
            </section>

            <section id="notasi" className="book-section">
              <div className="section-number">06</div>
              <span className="eyebrow">{ui("Notasi", "Notation")}</span>
              <h2>{ui("Simbol yang digunakan", "Symbols Used")}</h2>
              <div className="notation-table">
                {m.notation.map((item) => (
                  <div className="notation-row" key={item.symbol}>
                    <div className="notation-symbol"><RichMath>{item.symbol}</RichMath></div>
                    <div className="notation-meaning"><RichMath>{item.meaning}</RichMath></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="definisi" className="book-section">
              <div className="section-number">07</div>
              <span className="eyebrow">{ui("Definisi Formal", "Formal Definitions")}</span>
              <h2>{ui("Bahasa matematis yang presisi", "Precise Mathematical Language")}</h2>
              <div className="stacked-boxes">
                {m.definitions.map((definition, index) => (
                  <div className="definition-box numbered-box premium-definition" key={definition.title}>
                    <div className="box-kicker">{ui("Definisi", "Definition")} {index + 1}</div>
                    <strong>{definition.title}</strong>
                    <RichParagraph text={definition.body} />
                  </div>
                ))}
              </div>
            </section>

            {supplement && (
              <section id="pendalaman" className="book-section">
                <div className="section-number">08</div>
                <span className="eyebrow">{ui("Pendalaman Konsep", "Deep Dive")}</span>
                <h2>{ui("Dari definisi menuju pemahaman struktural.", "From definitions to structural understanding.")}</h2>
                <div className="deep-dive-stack">
                  {supplement.deepDive.map((part, index) => (
                    <article className="deep-dive-card" key={pick(part.title)}>
                      <div className="deep-dive-index">{String(index + 1).padStart(2, "0")}</div>
                      <h3>{pick(part.title)}</h3>
                      <p className="deep-dive-lead"><RichMath>{pick(part.lead)}</RichMath></p>
                      {part.paragraphs.map((p) => <RichParagraph key={pick(p)} text={pick(p)} />)}
                      {part.formula && <div className="deep-dive-formula"><RichMath>{part.formula}</RichMath></div>}
                      <div className="takeaway-list">
                        <strong>{ui("Yang perlu diingat", "Key Takeaways")}</strong>
                        <ul>{part.takeaways.map((item) => <li key={pick(item)}><RichMath>{pick(item)}</RichMath></li>)}</ul>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {extensions.length > 0 && (
              <section id="subbab-lanjutan" className="book-section extended-topics-section">
                <div className="section-number">09</div>
                <span className="eyebrow">{ui("Subbab Lanjutan", "Extended Topics")}</span>
                <h2>{ui("Perluas pemahaman dari konsep inti ke struktur yang lebih dalam.", "Extend the Core Ideas into Deeper Structure.")}</h2>
                <p>{ui(
                  "Bagian ini dirancang seperti subbab buku: ada penjelasan konseptual, rumus utama, hasil penting, pembuktian, contoh, dan catatan yang perlu diingat.",
                  "These sections are written like textbook subsections, with conceptual explanations, key formulas, important results, proofs, examples, and study notes."
                )}</p>

                <div className="extended-topic-stack">
                  {extensions.map((unit, unitIndex) => (
                    <article className="extended-topic-card" key={pick(unit.title)}>
                      <div className="extended-topic-head">
                        <span>{String(unitIndex + 1).padStart(2, "0")}</span>
                        <div>
                          <h3>{pick(unit.title)}</h3>
                          <p><RichMath>{pick(unit.intro)}</RichMath></p>
                        </div>
                      </div>

                      <div className="extended-topic-body">
                        {unit.paragraphs.map((paragraph) => (
                          <RichParagraph key={pick(paragraph)} text={pick(paragraph)} />
                        ))}

                        {(unit.formulas?.length ?? 0) > 0 && (
                          <div className="extended-formula-grid">
                            {unit.formulas?.map((formula) => (
                              <div className="extended-formula" key={formula}><RichMath>{formula}</RichMath></div>
                            ))}
                          </div>
                        )}

                        {unit.theorem && (
                          <div className="extension-theorem">
                            <div className="box-kicker">{ui("Hasil Penting", "Key Result")}</div>
                            <strong>{pick(unit.theorem.name)}</strong>
                            <p><RichMath>{pick(unit.theorem.statement)}</RichMath></p>
                            <details>
                              <summary>{ui("Buka pembuktian", "Open Proof")}</summary>
                              <div>
                                {unit.theorem.proof.map((step, index) => (
                                  <div className="proof-step" key={pick(step)}>
                                    <span>{index + 1}</span>
                                    <RichParagraph text={pick(step)} />
                                  </div>
                                ))}
                                <p className="proof-end">■</p>
                              </div>
                            </details>
                          </div>
                        )}

                        {unit.example && (
                          <div className="extension-example">
                            <div className="box-kicker">{ui("Contoh Terbahas", "Worked Example")}</div>
                            <p className="extension-question"><RichMath>{pick(unit.example.question)}</RichMath></p>
                            <details>
                              <summary>{ui("Lihat penyelesaian", "Reveal Solution")}</summary>
                              <div>
                                {unit.example.solution.map((step, index) => (
                                  <div className="solution-step" key={pick(step)}>
                                    <span>{index + 1}</span>
                                    <RichParagraph text={pick(step)} />
                                  </div>
                                ))}
                              </div>
                            </details>
                          </div>
                        )}

                        <div className="extension-notes">
                          <strong>{ui("Catatan penting", "Important Notes")}</strong>
                          <ul>{unit.notes.map((note) => <li key={pick(note)}><RichMath>{pick(note)}</RichMath></li>)}</ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <InteractiveMathLab kind={m.visualization} />

            <section id="teorema" className="book-section">
              <div className="section-number">10</div>
              <span className="eyebrow">{ui("Teorema & Bukti", "Theorems & Proofs")}</span>
              <h2>{ui("Hasil utama, lengkap dengan pembuktian", "Main Results, with Complete Proofs")}</h2>
              <div className="theorem-stack">
                {m.theorems.map((theorem, index) => (
                  <div className="theorem-suite premium-theorem" key={theorem.title}>
                    <div className="theorem-box">
                      <div className="box-kicker">{ui("Teorema", "Theorem")} {index + 1}</div>
                      <strong>{theorem.title}</strong>
                      <RichParagraph text={theorem.statement} />
                    </div>

                    <details className="proof-box proof-detailed proof-collapsible" open={index === 0}>
                      <summary>
                        <span>{ui("Bukti lengkap", "Complete Proof")}</span>
                        <small>{ui("Klik untuk buka/tutup", "Click to expand/collapse")}</small>
                      </summary>
                      <div className="proof-inside">
                        {theorem.proof.map((step, stepIndex) => (
                          <div className="proof-step" key={step}>
                            <span>{stepIndex + 1}</span>
                            <RichParagraph text={step} />
                          </div>
                        ))}
                        <p className="proof-end">■</p>
                      </div>
                    </details>

                    <div className="why-box">
                      <strong>{ui("Mengapa teorema ini penting?", "Why Is This Theorem Important?")}</strong>
                      <RichParagraph text={theorem.why} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contoh" className="book-section">
              <div className="section-number">11</div>
              <span className="eyebrow">Worked Examples</span>
              <h2>{ui("Coba dulu sebelum membuka pembahasan.", "Try first, then reveal the solution.")}</h2>
              <div className="example-stack">
                {m.examples.map((example, index) => (
                  <div className="example-suite premium-example" key={example.title}>
                    <div className="example-box">
                      <div className="box-kicker">{ui("Contoh", "Example")} {index + 1}</div>
                      <strong>{example.title}</strong>
                      <RichParagraph text={example.problem} />
                    </div>
                    <details className="solution-box content-box solution-collapsible">
                      <summary>{ui("Buka pembahasan langkah demi langkah", "Reveal Step-by-Step Solution")}</summary>
                      <div className="solution-inside">
                        {example.solution.map((step, stepIndex) => (
                          <div className="solution-step" key={step}>
                            <span>{stepIndex + 1}</span>
                            <RichParagraph text={step} />
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </section>

            {explorations.length > 0 && (
              <MaterialExplorationLab explorations={explorations} storageKey={material.slug} />
            )}

            {practiceProblems.length > 0 && (
              <MaterialPractice problems={practiceProblems} storageKey={material.slug} />
            )}

            {supplement && <MaterialCheckpoint quiz={supplement.quiz} />}

            <section id="kesalahan" className="content-box warning-box book-section">
              <div className="section-number">13</div>
              <strong>{ui("Kesalahan Umum", "Common Mistakes")}</strong>
              <ul>{m.mistakes.map((item) => <li key={item}><RichMath>{item}</RichMath></li>)}</ul>
            </section>

            {supplement && (
              <section id="ringkasan" className="book-section chapter-summary-section">
                <div className="section-number">14</div>
                <span className="eyebrow">{ui("Ringkasan Bab", "Chapter Summary")}</span>
                <h2>{ui("Peta akhir yang harus kamu bawa.", "The final map to take away.")}</h2>
                <div className="chapter-summary-grid">
                  {supplement.summary.map((item, index) => (
                    <div className="chapter-summary-card" key={pick(item)}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p><RichMath>{pick(item)}</RichMath></p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section id="koneksi" className="book-section">
              <div className="section-number">15</div>
              <span className="eyebrow">{ui("Keterhubungan Konsep", "Concept Connections")}</span>
              <h2>{ui("Materi terkait", "Related Topics")}</h2>
              <div className="subjects">{m.related.map((item) => <span key={item}>{item}</span>)}</div>
            </section>

            <section id="referensi" className="book-section">
              <div className="section-number">16</div>
              <span className="eyebrow">{ui("Referensi", "References")}</span>
              <h2>{ui("Bacaan lanjutan", "Further Reading")}</h2>
              <ol className="reference-list">{m.references.map((reference) => <li key={reference}>{reference}</li>)}</ol>
            </section>

            <section className="chapter-neighbor-nav" aria-label={ui("Navigasi antar bab", "Chapter navigation")}>
              {previousChapter ? (
                <Link href={"/materi/" + previousChapter.slug} className="chapter-neighbor-card previous">
                  <span>← {ui("Bab sebelumnya", "Previous Chapter")}</span>
                  <strong>{en ? (deepMaterialEnMap[previousChapter.slug]?.title ?? previousChapter.title) : previousChapter.title}</strong>
                </Link>
              ) : <div />}
              {nextChapter ? (
                <Link href={"/materi/" + nextChapter.slug} className="chapter-neighbor-card next">
                  <span>{ui("Bab berikutnya", "Next Chapter")} →</span>
                  <strong>{en ? (deepMaterialEnMap[nextChapter.slug]?.title ?? nextChapter.title) : nextChapter.title}</strong>
                </Link>
              ) : <div />}
            </section>

            <section className="next-learning-block textbook-next">
              <div>
                <span className="eyebrow">{ui("Lanjutkan", "Continue")}</span>
                <h2>{ui("Uji pemahaman, jangan berhenti di membaca.", "Test Your Understanding—Do Not Stop at Reading.")}</h2>
                <p>{ui(
                  "Setelah bab selesai, lanjutkan ke bank soal. Materi matematika akan terasa benar-benar dikuasai ketika definisi dapat digunakan, teorema dapat dijelaskan, dan soal baru dapat diselesaikan tanpa meniru contoh.",
                  "After finishing the chapter, continue to the problem bank. Mathematical understanding becomes durable when definitions can be used, theorems can be explained, and unfamiliar problems can be solved without copying examples."
                )}</p>
              </div>
              <div className="actions">
                <Link href="/bank-soal" className="btn primary">{ui("Buka Bank Soal", "Open Problem Bank")}</Link>
                <Link href="/materi" className="btn secondary">{ui("Materi Lain", "Other Materials")}</Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
