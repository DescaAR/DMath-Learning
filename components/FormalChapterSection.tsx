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
        <h2>{en ? "Formal definitions and results" : "Definisi dan hasil formal"}</h2>
        <p className="formal-section-intro"><RichMath>{pick(content.intro)}</RichMath></p>

        <div className="formal-block-stack">
          {content.blocks.map((block, index) => {
            const label = kindLabels[block.kind];
            const isResult=block.kind==="lemma"||block.kind==="proposition"||block.kind==="theorem"||block.kind==="corollary";
            const hasProof=Boolean(block.proof&&block.proof.length>0);
            const displayLabel=isResult&&!hasProof?{id:"Catatan",en:"Note"}:label;
            const definitionExample=block.kind==="definition" ? content.examples[index] : undefined;
            return (
              <div className="definition-example-pair" key={block.kind + "-" + index}>
              <article className={"formal-math-block formal-" + (isResult&&!hasProof?"note":block.kind)}>
                <div className="formal-block-header">
                  <div>
                    <span className="formal-kind">{en ? displayLabel.en : displayLabel.id} {index + 1}</span>
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

                {hasProof && (
                  <details className="formal-proof" open={block.kind === "theorem"}>
                    <summary>
                      <span>{en ? "Complete proof" : "Pembuktian lengkap"}</span>
                      <small>{en ? "show / hide" : "buka / tutup"}</small>
                    </summary>
                    <div className="formal-proof-body">
                      {(block.proof??[]).map((step, stepIndex) => (
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
              {definitionExample&&(
                <article className="detailed-example-card definition-direct-example">
                  <div className="detailed-example-head">
                    <span>{en?"Example":"Contoh"}</span>
                    <h3>{pick(definitionExample.title)}</h3>
                  </div>
                  <div className="detailed-example-problem">
                    <p><RichMath>{pick(definitionExample.problem)}</RichMath></p>
                  </div>
                  <details className="detailed-example-solution">
                    <summary>{en?"Open solution":"Buka Solusi"}</summary>
                    <div>{definitionExample.solution.map((step,stepIndex)=>(
                      <div className="formal-proof-step" key={stepIndex}>
                        <span>{stepIndex+1}</span><div><RichMath>{pick(step)}</RichMath></div>
                      </div>
                    ))}</div>
                  </details>
                </article>
              )}
              </div>
            );
          })}
        </div>
      </section>

      <section id="contoh-detail" className="book-section detailed-example-section">
        <div className="section-number">11</div>
        <span className="eyebrow">{en ? "Detailed Worked Examples" : "Contoh Terbahas Detail"}</span>
        <h2>{en ? "Worked examples" : "Contoh terbahas"}</h2>

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
