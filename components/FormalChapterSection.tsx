// Formal chapter deployment sync
"use client";

import type { FormalChapterContent, FormalBlockKind, Bilingual } from "@/data/formal-chapter-content";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";
import { ThesisFormalBlock } from "@/components/ThesisFormalBlock";
import { AcademicSolution } from "@/components/AcademicSolution";

const kindLabels: Record<FormalBlockKind, { id: string; en: string }> = {
  definition: { id: "Definisi", en: "Definition" },
  lemma: { id: "Lemma", en: "Lemma" },
  proposition: { id: "Proposisi", en: "Proposition" },
  theorem: { id: "Teorema", en: "Theorem" },
  corollary: { id: "Akibat", en: "Corollary" },
};

export function FormalChapterSection({
  content,
  chapterNumber="1",
}: {
  content: FormalChapterContent;
  chapterNumber?: string;
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

        <div className="formal-block-stack thesis-formal-stack">
          {content.blocks.map((block,index)=>{
            const ordinal=content.blocks.slice(0,index).filter(previous=>previous.kind===block.kind).length+1;
            const hasProof=!!block.proof?.length;
            const kind=block.kind==="definition" || hasProof?block.kind:"note";
            const title=pick(block.title);
            const related=content.examples.find(example=>example.forDefinition&&pick(example.forDefinition).trim().toLowerCase()===title.trim().toLowerCase())
              ??content.examples.find(example=>pick(example.title).trim().toLowerCase()===title.trim().toLowerCase());
            const definitionsCount=content.blocks.filter(item=>item.kind==="definition").length;
            const definitionExample=block.kind==="definition"
              ?related??(definitionsCount===1&&content.examples.length===1?content.examples[0]:undefined)
              :undefined;
            return <div className="definition-example-pair" key={block.kind+"-"+index}>
              <ThesisFormalBlock kind={kind} number={chapterNumber+"."+ordinal}
                title={title} statement={pick(block.statement)}
                proof={hasProof?block.proof?.map(pick):undefined} language={en?"en":"id"}/>
              {definitionExample&&<article className="detailed-example-card definition-direct-example">
                <div className="detailed-example-head">
                  <span>{en?"Example":"Contoh"}</span>
                  <h3><RichMath>{pick(definitionExample.title)}</RichMath></h3>
                </div>
                <div className="detailed-example-problem">
                  <p><RichMath>{pick(definitionExample.problem)}</RichMath></p>
                </div>
                <details className="detailed-example-solution">
                  <summary>{en?"Open solution":"Buka Solusi"}</summary>
                  <AcademicSolution steps={definitionExample.solution.map(pick)} conclusion={pick(definitionExample.conclusion)}/>
                </details>
              </article>}
              {block.intuition&&<div className="ird-formal-explanation">
                <strong>{en?"Explanation":"Penjelasan"}</strong>
                <RichMath>{pick(block.intuition)}</RichMath>
              </div>}
              {block.note&&<div className="ird-formal-explanation">
                <strong>{en?"Note":"Catatan"}</strong>
                <RichMath>{pick(block.note)}</RichMath>
              </div>}
            </div>;
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


              <details className="detailed-example-solution" open={index === 0}>
                <summary>{en ? "Open complete solution" : "Buka penyelesaian lengkap"}</summary>
                <AcademicSolution idea={pick(example.strategy)} steps={example.solution.map(pick)} conclusion={pick(example.conclusion)}/>
              </details>


            </article>
          ))}
        </div>
      </section>
    </>
  );
}
