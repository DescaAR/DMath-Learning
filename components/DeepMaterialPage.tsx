"use client";

import Link from "next/link";
import type { DeepMaterial } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { MathVisualization } from "@/components/MathVisualizations";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

function RichParagraph({ text }: { text: string }) {
  return <p><RichMath>{text}</RichMath></p>;
}

export function DeepMaterialPage({ material }: { material: DeepMaterial }) {
  const { language } = useLanguage();
  const m = language === "en" ? (deepMaterialEnMap[material.slug] ?? material) : material;
  const ui = (id: string, en: string) => language === "en" ? en : id;

  return (
    <div data-no-translate>
      <section className="chapter-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/materi">{ui("Materi", "Materials")}</Link>
            <span>/</span>
            <span>{m.level}</span>
            <span>/</span>
            <strong>{m.title}</strong>
          </div>
          <span className="eyebrow">{m.track} · {m.subject}</span>
          <h1>{m.title}</h1>
          <p>{m.summary}</p>
          <div className="chapter-meta">
            <span>{m.level}</span>
            <span>{m.subject}</span>
            <span>{m.difficulty}</span>
            <span>{m.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <aside className="toc material-toc">
            <strong>{ui("Isi Materi", "Contents")}</strong>
            <a href="#overview">Overview</a>
            <a href="#prasyarat">{ui("Prasyarat", "Prerequisites")}</a>
            <a href="#tujuan">{ui("Tujuan Pembelajaran", "Learning Objectives")}</a>
            <a href="#peta">{ui("Peta Konsep", "Concept Map")}</a>
            <a href="#motivasi">{ui("Motivasi & Intuisi", "Motivation & Intuition")}</a>
            <a href="#notasi">{ui("Notasi", "Notation")}</a>
            <a href="#definisi">{ui("Definisi Formal", "Formal Definitions")}</a>
            <a href="#teorema">{ui("Teorema & Bukti", "Theorems & Proofs")}</a>
            <a href="#contoh">Worked Examples</a>
            <a href="#kesalahan">{ui("Kesalahan Umum", "Common Mistakes")}</a>
            <a href="#koneksi">{ui("Koneksi", "Connections")}</a>
            <a href="#referensi">{ui("Referensi", "References")}</a>
          </aside>

          <article className="article deep-article">
            <section id="overview">
              <span className="eyebrow">Overview</span>
              <h2>{ui("Gambaran besar materi", "Big Picture")}</h2>
              <RichParagraph text={m.summary} />
              <MathVisualization kind={m.visualization} />
            </section>

            <section id="prasyarat" className="content-box prerequisite-box">
              <strong>{ui("Prasyarat", "Prerequisites")}</strong>
              <ul>{m.prerequisites.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section id="tujuan">
              <span className="eyebrow">{ui("Tujuan Pembelajaran", "Learning Objectives")}</span>
              <h2>{ui("Setelah mempelajari bab ini", "After Studying This Chapter")}</h2>
              <ul className="check-list">{m.objectives.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section id="peta">
              <span className="eyebrow">{ui("Peta Konsep", "Concept Map")}</span>
              <h2>{ui("Alur konsep", "Concept Flow")}</h2>
              <div className="concept-map">
                {m.conceptMap.map((item, index) => (
                  <div className="concept-node" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                    {index < m.conceptMap.length - 1 && <i aria-hidden="true">→</i>}
                  </div>
                ))}
              </div>
            </section>

            <section id="motivasi">
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

            <section id="notasi">
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

            <section id="definisi">
              <span className="eyebrow">{ui("Definisi Formal", "Formal Definitions")}</span>
              <h2>{ui("Bahasa matematis yang presisi", "Precise Mathematical Language")}</h2>
              <div className="stacked-boxes">
                {m.definitions.map((definition, index) => (
                  <div className="definition-box numbered-box" key={definition.title}>
                    <div className="box-kicker">{ui("Definisi", "Definition")} {index + 1}</div>
                    <strong>{definition.title}</strong>
                    <RichParagraph text={definition.body} />
                  </div>
                ))}
              </div>
            </section>

            <section id="teorema">
              <span className="eyebrow">{ui("Teorema & Bukti", "Theorems & Proofs")}</span>
              <h2>{ui("Hasil utama, lengkap dengan pembuktian", "Main Results, with Complete Proofs")}</h2>
              <div className="theorem-stack">
                {m.theorems.map((theorem, index) => (
                  <div className="theorem-suite" key={theorem.title}>
                    <div className="theorem-box">
                      <div className="box-kicker">{ui("Teorema", "Theorem")} {index + 1}</div>
                      <strong>{theorem.title}</strong>
                      <RichParagraph text={theorem.statement} />
                    </div>
                    <div className="proof-box proof-detailed">
                      <div className="box-kicker">{ui("Bukti", "Proof")}</div>
                      {theorem.proof.map((step, stepIndex) => (
                        <div className="proof-step" key={step}>
                          <span>{stepIndex + 1}</span>
                          <RichParagraph text={step} />
                        </div>
                      ))}
                      <p className="proof-end">■</p>
                    </div>
                    <div className="why-box">
                      <strong>{ui("Mengapa teorema ini penting?", "Why Is This Theorem Important?")}</strong>
                      <RichParagraph text={theorem.why} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contoh">
              <span className="eyebrow">Worked Examples</span>
              <h2>{ui("Dari konsep menuju penyelesaian", "From Concept to Solution")}</h2>
              <div className="example-stack">
                {m.examples.map((example, index) => (
                  <div className="example-suite" key={example.title}>
                    <div className="example-box">
                      <div className="box-kicker">{ui("Contoh", "Example")} {index + 1}</div>
                      <strong>{example.title}</strong>
                      <RichParagraph text={example.problem} />
                    </div>
                    <div className="solution-box content-box">
                      <strong>{ui("Pembahasan", "Solution")}</strong>
                      {example.solution.map((step, stepIndex) => (
                        <div className="solution-step" key={step}>
                          <span>{stepIndex + 1}</span>
                          <RichParagraph text={step} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="kesalahan" className="content-box warning-box">
              <strong>{ui("Kesalahan Umum", "Common Mistakes")}</strong>
              <ul>{m.mistakes.map((item) => <li key={item}><RichMath>{item}</RichMath></li>)}</ul>
            </section>

            <section id="koneksi">
              <span className="eyebrow">{ui("Keterhubungan Konsep", "Concept Connections")}</span>
              <h2>{ui("Materi terkait", "Related Topics")}</h2>
              <div className="subjects">{m.related.map((item) => <span key={item}>{item}</span>)}</div>
            </section>

            <section id="referensi">
              <span className="eyebrow">{ui("Referensi", "References")}</span>
              <h2>{ui("Bacaan lanjutan", "Further Reading")}</h2>
              <ol className="reference-list">{m.references.map((reference) => <li key={reference}>{reference}</li>)}</ol>
            </section>

            <section className="next-learning-block">
              <div>
                <span className="eyebrow">{ui("Lanjutkan", "Continue")}</span>
                <h2>{ui("Uji pemahaman, jangan berhenti di membaca.", "Test Your Understanding—Do Not Stop at Reading.")}</h2>
                <p>{ui(
                  "Latihan dan bank soal untuk materi ini akan terus ditambah secara terkurasi. Bab yang sudah memiliki bank soal lengkap ditautkan langsung dari halaman Bank Soal.",
                  "Curated practice and problem banks for this topic will continue to grow. Chapters with complete problem banks are linked directly from the Problem Bank page."
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
