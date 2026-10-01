"use client";

import Link from "next/link";
import { deepMaterials, type DeepMaterial } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { materialPractice } from "@/data/material-practice";
import { materialPracticeExtra } from "@/data/material-practice-extra";
import { formalChapterContent } from "@/data/formal-chapter-content";
import { MathVisualization } from "@/components/MathVisualizations";
import { InteractiveMathLab } from "@/components/InteractiveMathLab";
import { RichMath } from "@/components/RichMath";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { useLanguage } from "@/components/LanguageProvider";

function Text({ children }: { children: string }) {
  return <RichMath className="ird-rich-text">{children}</RichMath>;
}

export function DeepMaterialPage({ material }: { material: DeepMaterial }) {
  const { language } = useLanguage();
  const en = language === "en";
  const m = en ? (deepMaterialEnMap[material.slug] ?? material) : material;
  const formal = formalChapterContent[material.slug];
  const practice = [...(materialPractice[material.slug] ?? []), ...(materialPracticeExtra[material.slug] ?? [])];
  const ui = (id: string, english: string) => en ? english : id;
  const pick = (value: { id: string; en: string }) => en ? value.en : value.id;

  const chapterIndex = deepMaterials.findIndex((item) => item.slug === material.slug);
  const nextChapter = chapterIndex >= 0 && chapterIndex < deepMaterials.length - 1 ? deepMaterials[chapterIndex + 1] : null;
  const formalDefinitions = formal?.blocks.filter((block) => block.kind === "definition") ?? [];
  const formalResults = formal?.blocks.filter((block) => block.kind !== "definition") ?? [];
  const definitionCount = m.definitions.length + formalDefinitions.length;
  const resultCount = m.theorems.length + formalResults.length;
  const exampleCount = m.examples.length + (formal?.examples.length ?? 0);

  const sections = [
    {id:"gm-section-1",label:ui("Prasyarat & Tujuan","Prerequisites & Objectives")},
    {id:"gm-section-2",label:ui("Motivasi & Intuisi","Motivation & Intuition")},
    {id:"gm-section-3",label:ui("Notasi","Notation")},
    {id:"gm-section-4",label:ui("Definisi Formal","Formal Definitions")},
    {id:"gm-section-5",label:ui("Teorema & Pembuktian","Theorems & Proofs")},
    {id:"gm-section-6",label:ui("Contoh Terbahas","Worked Examples")},
    {id:"gm-section-7",label:ui("Visualisasi","Visualization")},
    {id:"gm-section-8",label:ui("Kesalahan & Koneksi","Mistakes & Connections")},
    {id:"gm-section-9",label:ui("Ringkasan & Referensi","Summary & References")},
    {id:"gm-latihan",label:ui("Latihan Soal","Practice Problems")},
  ];

  return (
    <RiemannHubShell
      className="deep-material-page"
      breadcrumbs={[
        {label:ui("Materi","Materials"),href:"/materi"},
        {label:m.level},
        {label:m.title},
      ]}
      eyebrow={m.subject+" · "+ui("Bab Digital Lengkap","Complete Digital Chapter")}
      title={m.title}
      lead={m.summary}
      meta={[
        ui("10 bagian materi + latihan","10 material sections + practice"),
        m.level,
        m.track,
        m.difficulty,
      ]}
      stats={[
        {value:definitionCount,label:ui("definisi","definitions")},
        {value:resultCount,label:ui("hasil formal","formal results")},
        {value:exampleCount,label:ui("contoh terbahas","worked examples")},
        {value:practice.length,label:ui("latihan dengan solusi","problems with solutions")},
      ]}
      actions={[
        {label:ui("Mulai Bab","Start Chapter"),href:"#ird-overview",kind:"primary"},
        {label:ui("Buka Latihan Soal","Open Practice"),href:"#gm-latihan",kind:"secondary"},
      ]}
      overviewId="ird-overview"
      tocTitle={ui("Isi Materi","Contents")}
      progressLabel={ui("Progres membaca","Reading progress")}
      overviewEyebrow={ui("Gambaran Besar","Big Picture")}
      overviewTitle={ui("Alur konsep yang akan dipelajari.","Concept flow for this chapter.")}
      overviewText={m.summary}
      roadmap={m.conceptMap}
      sections={sections}
    >
      <section id="gm-section-1" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">{ui("Bagian 1","Part 1")}</span>
        <h2>{ui("Prasyarat dan tujuan pembelajaran","Prerequisites and learning objectives")}</h2>
        <div className="solution-overview-grid">
          <div className="content-box">
            <strong>{ui("Prasyarat","Prerequisites")}</strong>
            <ul>{m.prerequisites.map((item) => <li key={item}><Text>{item}</Text></li>)}</ul>
          </div>
          <div className="content-box">
            <strong>{ui("Tujuan Pembelajaran","Learning Objectives")}</strong>
            <ul>{m.objectives.map((item) => <li key={item}><Text>{item}</Text></li>)}</ul>
          </div>
        </div>
      </section>

      <section id="gm-section-2" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">{ui("Bagian 2","Part 2")}</span>
        <h2>{ui("Motivasi dan intuisi","Motivation and intuition")}</h2>
        {m.motivation.map((item) => <div className="ird-paragraph" key={item}><Text>{item}</Text></div>)}
        <div className="ird-worked-grid">
          {m.intuition.map((item, index) => (
            <article className="ird-worked-card" key={item}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index + 1).padStart(2, "0")}</div>
                <div><span className="eyebrow">{ui("Intuisi","Intuition")}</span><h3>{ui("Cara memandang konsep","How to view the concept")}</h3></div>
              </div>
              <div className="ird-worked-prompt"><Text>{item}</Text></div>
            </article>
          ))}
        </div>
      </section>

      <section id="gm-section-3" className="book-section ird-source-section">
        <div className="section-number">03</div>
        <span className="eyebrow">{ui("Bagian 3","Part 3")}</span>
        <h2>{ui("Notasi yang digunakan","Notation used")}</h2>
        <div className="notation-table">
          {m.notation.map((item) => (
            <div className="notation-row" key={item.symbol}>
              <div className="notation-symbol"><Text>{item.symbol}</Text></div>
              <div className="notation-meaning"><Text>{item.meaning}</Text></div>
            </div>
          ))}
        </div>
      </section>

      <section id="gm-section-4" className="book-section ird-source-section">
        <div className="section-number">04</div>
        <span className="eyebrow">{ui("Bagian 4","Part 4")}</span>
        <h2>{ui("Definisi formal","Formal definitions")}</h2>
        {m.definitions.map((definition) => (
          <article className="ird-formal ird-definition" key={definition.title}>
            <div className="ird-formal-head"><span>{ui("Definisi","Definition")}</span><strong>{definition.title}</strong></div>
            <div className="ird-formal-body"><Text>{definition.body}</Text></div>
          </article>
        ))}
        {formalDefinitions.map((block, index) => (
          <article className="ird-formal ird-definition" key={pick(block.title) + index}>
            <div className="ird-formal-head"><span>{ui("Definisi","Definition")}</span><strong>{pick(block.title)}</strong></div>
            <div className="ird-formal-body"><Text>{pick(block.statement)}</Text></div>
            {block.intuition && <div className="ird-paragraph"><strong>{ui("Intuisi. ","Intuition. ")}</strong><Text>{pick(block.intuition)}</Text></div>}
          </article>
        ))}
      </section>

      <section id="gm-section-5" className="book-section ird-source-section">
        <div className="section-number">05</div>
        <span className="eyebrow">{ui("Bagian 5","Part 5")}</span>
        <h2>{ui("Teorema, lemma, proposisi, akibat, dan pembuktian","Theorems, lemmas, propositions, corollaries, and proofs")}</h2>
        {m.theorems.map((theorem) => (
          <article className="ird-formal ird-theorem" key={theorem.title}>
            <div className="ird-formal-head"><span>{ui("Teorema","Theorem")}</span><strong>{theorem.title}</strong></div>
            <div className="ird-formal-body"><Text>{theorem.statement}</Text></div>
            <details className="ird-proof">
              <summary>{ui("Buka pembuktian","Open proof")}</summary>
              <div className="ird-proof-body">
                {theorem.proof.map((step, stepIndex) => <div className="proof-step" key={stepIndex}><span>{stepIndex + 1}</span><Text>{step}</Text></div>)}
                <div className="ird-qed">■</div>
              </div>
            </details>
            <div className="ird-paragraph"><strong>{ui("Makna hasil. ","Why it matters. ")}</strong><Text>{theorem.why}</Text></div>
          </article>
        ))}
        {formalResults.map((block, index) => {
          const label = block.kind === "lemma"
            ? "Lemma"
            : block.kind === "proposition"
              ? ui("Proposisi","Proposition")
              : block.kind === "corollary"
                ? ui("Akibat","Corollary")
                : ui("Teorema","Theorem");
          return (
            <article className={"ird-formal ird-" + block.kind} key={pick(block.title) + index}>
              <div className="ird-formal-head"><span>{label}</span><strong>{pick(block.title)}</strong></div>
              <div className="ird-formal-body"><Text>{pick(block.statement)}</Text></div>
              {block.proof && (
                <details className="ird-proof">
                  <summary>{ui("Buka pembuktian","Open proof")}</summary>
                  <div className="ird-proof-body">
                    {block.proof.map((step, stepIndex) => <div className="proof-step" key={stepIndex}><span>{stepIndex + 1}</span><Text>{pick(step)}</Text></div>)}
                    <div className="ird-qed">■</div>
                  </div>
                </details>
              )}
              {block.note && <div className="ird-paragraph"><strong>{ui("Catatan. ","Note. ")}</strong><Text>{pick(block.note)}</Text></div>}
            </article>
          );
        })}
      </section>

      <section id="gm-section-6" className="book-section ird-source-section">
        <div className="section-number">06</div>
        <span className="eyebrow">{ui("Bagian 6","Part 6")}</span>
        <h2>{ui("Contoh terbahas","Worked examples")}</h2>
        <div className="ird-worked-grid">
          {m.examples.map((example, index) => (
            <article className="ird-worked-card" key={example.title}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index + 1).padStart(2, "0")}</div>
                <div><span className="eyebrow">{ui("Contoh","Example")}</span><h3>{example.title}</h3></div>
              </div>
              <div className="ird-worked-prompt"><Text>{example.problem}</Text></div>
              <details className="ird-worked-solution">
                <summary>{ui("Buka Solusi","Open Solution")}</summary>
                <div className="ird-worked-solution-body">
                  {example.solution.map((step, stepIndex) => <div className="solution-step" key={stepIndex}><span>{stepIndex + 1}</span><Text>{step}</Text></div>)}
                </div>
              </details>
            </article>
          ))}
          {formal?.examples.map((example, index) => (
            <article className="ird-worked-card" key={pick(example.title)}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(m.examples.length + index + 1).padStart(2, "0")}</div>
                <div><span className="eyebrow">{ui("Contoh","Example")}</span><h3>{pick(example.title)}</h3></div>
              </div>
              <div className="ird-worked-prompt"><Text>{pick(example.problem)}</Text></div>
              <details className="ird-worked-solution">
                <summary>{ui("Buka Solusi","Open Solution")}</summary>
                <div className="ird-worked-solution-body">
                  <div className="ird-paragraph"><strong>{ui("Strategi. ","Strategy. ")}</strong><Text>{pick(example.strategy)}</Text></div>
                  {example.solution.map((step, stepIndex) => <div className="solution-step" key={stepIndex}><span>{stepIndex + 1}</span><Text>{pick(step)}</Text></div>)}
                  <div className="ird-paragraph"><strong>{ui("Kesimpulan. ","Conclusion. ")}</strong><Text>{pick(example.conclusion)}</Text></div>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="gm-section-7" className="book-section ird-source-section">
        <div className="section-number">07</div>
        <span className="eyebrow">{ui("Bagian 7","Part 7")}</span>
        <h2>{ui("Visualisasi dan eksplorasi interaktif","Visualization and interactive exploration")}</h2>
        <p className="ird-paragraph">{ui("Visualisasi menghubungkan definisi formal dengan representasi geometris atau komputasionalnya.","The visualization connects formal definitions with their geometric or computational representations.")}</p>
        <MathVisualization kind={m.visualization} />
        <InteractiveMathLab kind={m.visualization} />
      </section>

      <section id="gm-section-8" className="book-section ird-source-section">
        <div className="section-number">08</div>
        <span className="eyebrow">{ui("Bagian 8","Part 8")}</span>
        <h2>{ui("Kesalahan umum dan koneksi materi","Common mistakes and connections")}</h2>
        <div className="solution-overview-grid">
          <div className="content-box warning-box">
            <strong>{ui("Kesalahan Umum","Common Mistakes")}</strong>
            <ul>{m.mistakes.map((item) => <li key={item}><Text>{item}</Text></li>)}</ul>
          </div>
          <div className="content-box insight-box">
            <strong>{ui("Koneksi Materi","Connections")}</strong>
            <ul>{m.related.map((item) => <li key={item}><Text>{item}</Text></li>)}</ul>
          </div>
        </div>
      </section>

      <section id="gm-section-9" className="book-section ird-source-section">
        <div className="section-number">09</div>
        <span className="eyebrow">{ui("Bagian 9","Part 9")}</span>
        <h2>{ui("Ringkasan dan referensi","Summary and references")}</h2>
        <div className="summary-grid">
          {m.conceptMap.map((item,index)=>(
            <div className="summary-card" key={item}>
              <span className="eyebrow">{String(index+1).padStart(2,"0")}</span>
              <p><strong>{item}</strong></p>
            </div>
          ))}
        </div>
        <article className="ird-formal ird-note" style={{marginTop:24}}>
          <div className="ird-formal-head"><span>{ui("Referensi","References")}</span><strong>{ui("Sumber bacaan","Further reading")}</strong></div>
          <div className="ird-formal-body">
            <ol>{m.references.map((reference) => <li key={reference}><Text>{reference}</Text></li>)}</ol>
          </div>
        </article>
      </section>

      <section id="gm-latihan" className="book-section ird-practice-section">
        <div className="section-number">10</div>
        <span className="eyebrow">{ui("Latihan Soal dan Solusi","Practice Problems and Solutions")}</span>
        <h2>{practice.length} {ui("latihan untuk menguji pemahaman","problems to test understanding")}</h2>
        <p className="ird-paragraph">{ui("Kerjakan soal terlebih dahulu. Petunjuk dan solusi dapat dibuka setelah mencoba secara mandiri.","Try each problem first. Open the hint and solution only after attempting it independently.")}</p>
        <div className="ird-worked-grid">
          {practice.map((problem, index) => (
            <article className="ird-worked-card" key={problem.id}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index + 1).padStart(2, "0")}</div>
                <div><span className="eyebrow">{problem.difficulty}</span><h3>{pick(problem.title)}</h3></div>
              </div>
              <div className="ird-worked-prompt"><Text>{pick(problem.prompt)}</Text></div>
              <details className="ird-proof"><summary>{ui("Buka Petunjuk","Open Hint")}</summary><div className="ird-proof-body"><Text>{pick(problem.hint)}</Text></div></details>
              <details className="ird-worked-solution"><summary>{ui("Buka Solusi","Open Solution")}</summary><div className="ird-worked-solution-body"><Text>{pick(problem.answer)}</Text></div></details>
            </article>
          ))}
        </div>
      </section>

      <section className="next-learning-block textbook-next">
        <div>
          <span className="eyebrow">{ui("Lanjutkan","Continue")}</span>
          <h2>{ui("Uji definisi melalui soal, bukan hanya membaca.","Test definitions through problems, not only reading.")}</h2>
          <p>{ui("Setelah memahami bagian formal, kerjakan latihan dan coba jelaskan kembali ide utama tanpa melihat pembahasan.","After studying the formal material, solve the exercises and reconstruct the main ideas without looking at the solutions.")}</p>
        </div>
        <div className="actions">
          <a className="btn primary" href="#gm-latihan">{ui("Kerjakan Latihan","Practice Now")}</a>
          {nextChapter
            ? <Link className="btn secondary" href={"/materi/" + nextChapter.slug}>{ui("Materi Berikutnya","Next Material")}</Link>
            : <Link className="btn secondary" href="/materi">{ui("Materi Lain","Other Materials")}</Link>}
        </div>
      </section>
    </RiemannHubShell>
  );
}
