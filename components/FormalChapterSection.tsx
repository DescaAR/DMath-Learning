// Formal chapter deployment sync
"use client";

import type { FormalChapterContent, FormalBlockKind, Bilingual } from "@/data/formal-chapter-content";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

const kindLabels: Record<FormalBlockKind, { id: string; en: string }> = {
  definition: { id: "Definisi", en: "Definition" },
  lemma: { id: "Lemma", en: "Lemma" },
  proposition: { id: "Proposisi", en: "Proposition" },
  theorem: { id: "Teorema", en: "Theorem" },
  corollary: { id: "Akibat", en: "Corollary" },
};

export function FormalChapterSection({
  content,
}: {
  content: FormalChapterContent;
}) {
  const { language } = useLanguage();
  const en = language === "en";
  const pick = (value: Bilingual) => en ? value.en : value.id;

  return (
    <>
      <section id="struktur-formal" className="book-section formal-structure-section">
        <div className="section-number">10</div>
        <span className="eyebrow">{en ? "Formal Mathematical Structure" : "Struktur Matematis Formal"}</span>
        <h2>{en ? "Definitions, lemmas, propositions, theorems, and corollaries." : "Definisi, lemma, proposisi, teorema, dan akibat."}</h2>
        <p className="formal-section-intro"><RichMath>{pick(content.intro)}</RichMath></p>

        <div className="formal-block-stack">
          {content.blocks.map((block, index) => {
            const label = kindLabels[block.kind];
            return (
              <article className={"formal-math-block formal-" + block.kind} key={block.kind + "-" + index}>
                <div className="formal-block-header">
                  <div>
                    <span className="formal-kind">{en ? label.en : label.id} {index + 1}</span>
                    <h3>{pick(block.title)}</h3>
                  </div>
                  <span className="formal-symbol" aria-hidden="true">
                    {block.kind === "definition" ? "D" :
                     block.kind === "lemma" ? "L" :
                     block.kind === "proposition" ? "P" :
                     block.kind === "theorem" ? "T" : "A"}
                  </span>
                </div>

                <div className="formal-statement">
                  <RichMath>{pick(block.statement)}</RichMath>
                </div>

                {block.intuition && (
                  <div className="formal-intuition">
                    <strong>{en ? "Intuition" : "Intuisi"}</strong>
                    <p><RichMath>{pick(block.intuition)}</RichMath></p>
                  </div>
                )}

                {block.proof && block.proof.length > 0 && (
                  <details className="formal-proof" open={block.kind === "theorem"}>
                    <summary>
                      <span>{en ? "Complete proof" : "Pembuktian lengkap"}</span>
                      <small>{en ? "show / hide" : "buka / tutup"}</small>
                    </summary>
                    <div className="formal-proof-body">
                      {block.proof.map((step, stepIndex) => (
                        <div className="formal-proof-step" key={stepIndex}>
                          <span>{stepIndex + 1}</span>
                          <div><RichMath>{pick(step)}</RichMath></div>
                        </div>
                      ))}
                      <div className="formal-proof-qed">■</div>
                    </div>
                  </details>
                )}

                {block.note && (
                  <div className="formal-note">
                    <strong>{en ? "Remark" : "Catatan"}</strong>
                    <p><RichMath>{pick(block.note)}</RichMath></p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section id="contoh-detail" className="book-section detailed-example-section">
        <div className="section-number">11</div>
        <span className="eyebrow">{en ? "Detailed Worked Examples" : "Contoh Terbahas Detail"}</span>
        <h2>{en ? "From strategy to conclusion, one step at a time." : "Dari strategi sampai kesimpulan, langkah demi langkah."}</h2>

        <div className="detailed-example-stack">
          {content.examples.map((example, index) => (
            <article className="detailed-example-card" key={index}>
              <div className="detailed-example-head">
                <span>{en ? "Example" : "Contoh"} {index + 1}</span>
                <h3>{pick(example.title)}</h3>
              </div>

              <div className="detailed-example-problem">
                <strong>{en ? "Problem" : "Soal"}</strong>
                <p><RichMath>{pick(example.problem)}</RichMath></p>
              </div>

              <div className="detailed-example-strategy">
                <strong>{en ? "Strategy" : "Strategi"}</strong>
                <p><RichMath>{pick(example.strategy)}</RichMath></p>
              </div>

              <details className="detailed-example-solution" open={index === 0}>
                <summary>{en ? "Open complete solution" : "Buka penyelesaian lengkap"}</summary>
                <div>
                  {example.solution.map((step, stepIndex) => (
                    <div className="formal-proof-step" key={stepIndex}>
                      <span>{stepIndex + 1}</span>
                      <div><RichMath>{pick(step)}</RichMath></div>
                    </div>
                  ))}
                </div>
              </details>

              <div className="detailed-example-conclusion">
                <strong>{en ? "Conclusion" : "Kesimpulan"}</strong>
                <p><RichMath>{pick(example.conclusion)}</RichMath></p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
