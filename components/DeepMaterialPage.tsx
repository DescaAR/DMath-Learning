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
import { AcademicSolution, splitAcademicSolution } from "@/components/AcademicSolution";
import { useLanguage } from "@/components/LanguageProvider";

function Text({ children }: { children: string }) {
  return <RichMath className="ird-rich-text">{children}</RichMath>;
}

function isAcademicDefinition(statement:string){
  const normalized=statement.trim().toLowerCase();
  if(!normalized)return false;
  return !["mempelajari ","membahas ","pembahasan ","submateri ini ","halaman ini ","fokus pada "]
    .some((prefix)=>normalized.startsWith(prefix))
    && !normalized.includes("secara konseptual dan formal");
}

function hasSubstantiveProof(proof?:unknown[]){
  if(!proof||proof.length<2)return false;
  return proof.map(String).join(" ").replace(/\s+/g," ").trim().length>=100;
}

type LocalExample={
  title:string;
  problem:string;
  strategy?:string;
  solution:string[];
  conclusion?:string;
};

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

  const formalDefinitions = formal?.blocks.filter((block) => block.kind === "definition"&&isAcademicDefinition(pick(block.statement))) ?? [];
  const formalResults = formal?.blocks.filter((block) => block.kind !== "definition") ?? [];
  const provenFormalResults=formalResults.filter((block)=>hasSubstantiveProof(block.proof));
  const explanatoryFormalResults=formalResults.filter((block)=>!hasSubstantiveProof(block.proof));

  const localizedFormalExamples:LocalExample[]=(formal?.examples??[]).map((example)=>({
    title:pick(example.title),
    problem:pick(example.problem),
    strategy:pick(example.strategy),
    solution:example.solution.map(pick),
    conclusion:pick(example.conclusion),
  }));
  const localExamples:LocalExample[]=[
    ...m.examples.map((example)=>({title:example.title,problem:example.problem,solution:example.solution})),
    ...localizedFormalExamples,
  ];

  const definitions=[
    ...m.definitions.filter((definition)=>isAcademicDefinition(definition.body)).map((definition)=>({title:definition.title,statement:definition.body,intuition:""})),
    ...formalDefinitions.map((block)=>({title:pick(block.title),statement:pick(block.statement),intuition:block.intuition?pick(block.intuition):""})),
  ];

  const resultCount=m.theorems.length+provenFormalResults.length;

  const sections = [
    {id:"gm-section-1",label:ui("Pengantar","Introduction")},
    {id:"gm-section-4",label:ui("Definisi & Contoh","Definitions & Examples")},
    {id:"gm-section-5",label:ui("Hasil Formal & Bukti","Formal Results & Proofs")},
    {id:"gm-section-6",label:ui("Contoh Terbahas","Worked Examples")},
    {id:"gm-section-7",label:ui("Visualisasi","Visualization")},
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
      eyebrow={m.subject+" · "+ui("Materi Lengkap","Complete Material")}
      title={m.title}
      lead={m.summary}
      meta={[
        ui("6 bagian","6 sections"),
        m.level,
        m.track,
        m.difficulty,
      ]}
      stats={[
        {value:definitions.length,label:ui("definisi","definitions")},
        {value:resultCount,label:ui("hasil formal terbukti","proven formal results")},
        {value:localExamples.length,label:ui("contoh terbahas","worked examples")},
        {value:practice.length,label:ui("latihan dengan solusi","problems with solutions")},
      ]}
      actions={[
        {label:ui("Mulai Materi","Start Material"),href:"#gm-section-1",kind:"primary"},
        {label:ui("Latihan Soal","Practice Problems"),href:"#gm-latihan",kind:"secondary"},
      ]}
      overviewId="ird-overview"
      tocTitle={ui("Isi Materi","Contents")}
      progressLabel={ui("Progres membaca","Reading progress")}
      overviewEyebrow={ui("Struktur Materi","Material Structure")}
      overviewTitle={ui("Urutan pembelajaran","Learning sequence")}
      overviewText={ui(
        "Materi dibaca dari pengantar dan definisi menuju hasil formal, contoh, visualisasi, dan latihan.",
        "Study the introduction and definitions first, then formal results, examples, visualization, and practice."
      )}
      roadmap={[
        ui("Pengantar","Introduction"),
        ui("Definisi & contoh","Definitions & examples"),
        ui("Hasil formal & bukti","Formal results & proofs"),
        ui("Contoh terbahas","Worked examples"),
        ui("Visualisasi","Visualization"),
        ui("Latihan","Practice"),
      ]}
      sections={sections}
    >
      <section id="gm-section-1" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">{ui("Bagian 1","Part 1")}</span>
        <h2>{ui("Pengantar","Introduction")}</h2>
        {m.motivation.map((item) => <div className="ird-paragraph" key={item}><Text>{item}</Text></div>)}
        {m.intuition.map((item,index)=>(
          <div className="content-box idea-box" key={item}>
            <span className="box-kicker">{ui("Intuisi","Intuition")} {index+1}</span>
            <Text>{item}</Text>
          </div>
        ))}
        <div style={{marginTop:28}}><MathVisualization kind={m.visualization} /></div>
      </section>

      <section id="gm-section-4" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">{ui("Bagian 2","Part 2")}</span>
        <h2>{ui("Definisi dan contoh","Definitions and examples")}</h2>
        <p className="ird-paragraph">{ui(
          "Setiap definisi diikuti contoh agar syarat formal dapat langsung diperiksa.",
          "Each definition is followed by an example so its formal conditions can be checked immediately."
        )}</p>

        {definitions.map((definition,index)=>{
          const example=localExamples[index%Math.max(1,localExamples.length)];
          return(
            <div className="definition-example-pair" key={definition.title+index}>
              <article className="ird-formal ird-definition">
                <div className="ird-formal-head"><span>{ui("Definisi","Definition")}</span><strong>{definition.title}</strong></div>
                <div className="ird-formal-body"><Text>{definition.statement}</Text></div>
                {definition.intuition&&<div className="ird-paragraph"><strong>{ui("Penjelasan. ","Explanation. ")}</strong><Text>{definition.intuition}</Text></div>}
              </article>
              {example&&(
                <article className="ird-worked-card">
                  <div className="ird-worked-head">
                    <div className="ird-problem-number">EX</div>
                    <div><span className="eyebrow">{ui("Contoh setelah definisi","Example after definition")}</span><h3>{example.title}</h3></div>
                  </div>
                  <div className="ird-worked-prompt"><Text>{example.problem}</Text></div>
                  <details className="ird-worked-solution">
                    <summary>{ui("Buka Solusi","Open Solution")}</summary>
                    <div className="ird-worked-solution-body">
                      <AcademicSolution idea={example.strategy??example.solution[0]} steps={example.solution} conclusion={example.conclusion}/>
                    </div>
                  </details>
                </article>
              )}
            </div>
          );
        })}
      </section>

      <section id="gm-section-5" className="book-section ird-source-section">
        <div className="section-number">03</div>
        <span className="eyebrow">{ui("Bagian 3","Part 3")}</span>
        <h2>{ui("Hasil formal dan pembuktian","Formal results and proofs")}</h2>
        <p className="ird-paragraph">{ui(
          "Setiap teorema, lemma, proposisi, dan akibat yang ditampilkan di sini disertai penjelasan dan pembuktian.",
          "Every theorem, lemma, proposition, and corollary shown here includes an explanation and proof."
        )}</p>

        {m.theorems.map((theorem) => (
          <article className="ird-formal ird-theorem" key={theorem.title}>
            <div className="ird-formal-head"><span>{ui("Teorema","Theorem")}</span><strong>{theorem.title}</strong></div>
            <div className="ird-formal-body"><Text>{theorem.statement}</Text></div>
            <div className="content-box idea-box" style={{marginTop:18}}>
              <strong>{ui("Penjelasan","Explanation")}</strong>
              <Text>{theorem.why}</Text>
            </div>
            <details className="ird-proof">
              <summary>{ui("Buka pembuktian","Open proof")}</summary>
              <div className="ird-proof-body">
                {theorem.proof.map((step, stepIndex) => <div className="proof-step" key={stepIndex}><span>{stepIndex + 1}</span><Text>{step}</Text></div>)}
                <div className="ird-qed">■</div>
              </div>
            </details>
          </article>
        ))}

        {provenFormalResults.map((block, index) => {
          const label = block.kind === "lemma"
            ? "Lemma"
            : block.kind === "proposition"
              ? ui("Proposisi","Proposition")
              : block.kind === "corollary"
                ? ui("Akibat","Corollary")
                : ui("Teorema","Theorem");
          const explanation=block.intuition?pick(block.intuition):(block.note?pick(block.note):ui(
            "Hasil ini merumuskan hubungan formal yang digunakan pada contoh dan latihan berikutnya.",
            "This result states a formal relationship used in the examples and exercises that follow."
          ));
          return (
            <article className={"ird-formal ird-" + block.kind} key={pick(block.title) + index}>
              <div className="ird-formal-head"><span>{label}</span><strong>{pick(block.title)}</strong></div>
              <div className="ird-formal-body"><Text>{pick(block.statement)}</Text></div>
              <div className="content-box idea-box" style={{marginTop:18}}>
                <strong>{ui("Penjelasan","Explanation")}</strong>
                <Text>{explanation}</Text>
              </div>
              <details className="ird-proof">
                <summary>{ui("Buka pembuktian","Open proof")}</summary>
                <div className="ird-proof-body">
                  {block.proof!.map((step, stepIndex) => <div className="proof-step" key={stepIndex}><span>{stepIndex + 1}</span><Text>{pick(step)}</Text></div>)}
                  <div className="ird-qed">■</div>
                </div>
              </details>
            </article>
          );
        })}

        {explanatoryFormalResults.map((block,index)=>(
          <article className="ird-formal ird-note" key={"note-"+index}>
            <div className="ird-formal-head"><span>{ui("Catatan","Note")}</span><strong>{pick(block.title)}</strong></div>
            <div className="ird-formal-body"><Text>{pick(block.statement)}</Text></div>
          </article>
        ))}
      </section>

      <section id="gm-section-6" className="book-section ird-source-section">
        <div className="section-number">04</div>
        <span className="eyebrow">{ui("Bagian 4","Part 4")}</span>
        <h2>{ui("Contoh terbahas","Worked examples")}</h2>
        <div className="ird-worked-grid">
          {localExamples.map((example, index) => (
            <article className="ird-worked-card" key={example.title+index}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index + 1).padStart(2, "0")}</div>
                <div><span className="eyebrow">{ui("Contoh","Example")}</span><h3>{example.title}</h3></div>
              </div>
              <div className="ird-worked-prompt"><Text>{example.problem}</Text></div>
              <details className="ird-worked-solution">
                <summary>{ui("Buka Solusi","Open Solution")}</summary>
                <div className="ird-worked-solution-body">
                  <AcademicSolution idea={example.strategy??example.solution[0]} steps={example.solution} conclusion={example.conclusion}/>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="gm-section-7" className="book-section ird-source-section">
        <div className="section-number">05</div>
        <span className="eyebrow">{ui("Bagian 5","Part 5")}</span>
        <h2>{ui("Visualisasi dan eksplorasi interaktif","Visualization and interactive exploration")}</h2>
        <p className="ird-paragraph">{ui(
          "Visualisasi dipakai untuk melihat struktur konsep, sedangkan panel interaktif memungkinkan parameter diubah dan hasilnya dibandingkan.",
          "Visualization reveals the structure of the concept, while the interactive panel lets parameters change and outcomes be compared."
        )}</p>
        <div className="ird-visual-stack">
          <MathVisualization kind={m.visualization} />
          <InteractiveMathLab kind={m.visualization} />
        </div>
      </section>

      <section id="gm-latihan" className="book-section ird-practice-section">
        <div className="section-number">06</div>
        <span className="eyebrow">{ui("Latihan Soal dan Solusi","Practice Problems and Solutions")}</span>
        <h2>{practice.length} {ui("latihan soal","practice problems")}</h2>
        <p className="ird-paragraph">{ui(
          "Kerjakan setiap soal terlebih dahulu. Petunjuk dan pembahasan lengkap dapat dibuka setelah mencoba.",
          "Attempt each problem first. Hints and complete solutions can be opened afterward."
        )}</p>
        <div className="ird-worked-grid">
          {practice.map((problem, index) => {
            const allSteps=splitAcademicSolution(pick(problem.answer));
            const steps=allSteps.length>1?allSteps.slice(0,-1):allSteps;
            const conclusion=allSteps.length>1?allSteps[allSteps.length-1]:undefined;
            return(
              <article className="ird-worked-card" key={problem.id}>
                <div className="ird-worked-head">
                  <div className="ird-problem-number">{String(index + 1).padStart(2, "0")}</div>
                  <div><span className="eyebrow">{problem.difficulty}</span><h3>{pick(problem.title)}</h3></div>
                </div>
                <div className="ird-worked-prompt"><Text>{pick(problem.prompt)}</Text></div>
                <details className="ird-proof">
                  <summary>{ui("Buka Petunjuk","Open Hint")}</summary>
                  <div className="ird-proof-body"><Text>{pick(problem.hint)}</Text></div>
                </details>
                <details className="ird-worked-solution">
                  <summary>{ui("Buka Solusi","Open Solution")}</summary>
                  <div className="ird-worked-solution-body">
                    <AcademicSolution target={pick(problem.prompt)} idea={pick(problem.hint)} steps={steps} conclusion={conclusion}/>
                  </div>
                </details>
              </article>
            );
          })}
        </div>
      </section>

      <section className="next-learning-block textbook-next">
        <div>
          <span className="eyebrow">{ui("Materi Berikutnya","Next Material")}</span>
          <h2>{nextChapter? (en?(deepMaterialEnMap[nextChapter.slug]?.title??nextChapter.title):nextChapter.title) : ui("Daftar Materi","Material Index")}</h2>
          <p>{ui(
            "Lanjutkan setelah definisi, pembuktian, contoh, visualisasi, dan latihan pada materi ini dipahami.",
            "Continue after understanding the definitions, proofs, examples, visualization, and practice in this material."
          )}</p>
        </div>
        <div className="actions">
          <a className="btn primary" href="#gm-latihan">{ui("Latihan Soal","Practice Problems")}</a>
          {nextChapter
            ? <Link className="btn secondary" href={"/materi/" + nextChapter.slug}>{ui("Materi Berikutnya","Next Material")}</Link>
            : <Link className="btn secondary" href="/materi">{ui("Daftar Materi","Material Index")}</Link>}
        </div>
      </section>
    </RiemannHubShell>
  );
}
