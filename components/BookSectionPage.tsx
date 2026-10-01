"use client";

import Link from "next/link";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { RichMath } from "@/components/RichMath";
import { MathVisualization, type VisualizationKind } from "@/components/MathVisualizations";
import { InteractiveMathLab } from "@/components/InteractiveMathLab";
import { AcademicSolution, splitAcademicSolution } from "@/components/AcademicSolution";
import type { BookChapter, BookSection, BookSubject } from "@/data/book-curricula";
import type { BookExample, BookFormalKind, BookLessonContent } from "@/data/book-content-types";

const kindLabel:Record<BookFormalKind,string>={
  definition:"Definisi",
  lemma:"Lemma",
  proposition:"Proposisi",
  theorem:"Teorema",
  corollary:"Akibat",
  note:"Catatan",
};

function Text({children}:{children:string}){
  return <RichMath className="ird-rich-text">{children}</RichMath>;
}

function visualizationForSubject(slug:BookSubject["slug"]):VisualizationKind{
  const map:Record<BookSubject["slug"],VisualizationKind>={
    "analisis-real":"real-analysis",
    "analisis-kompleks":"complex-analysis",
    "kombinatorika":"combinatorics",
    "aljabar-linear":"onmipa-linear",
    "struktur-aljabar":"abstract-algebra",
    "olimpiade-matematika-sma":"olympiad",
    "kalkulus":"calculus",
    "teori-graf":"graph-theory",
    "teori-bilangan-olimpiade":"number-theory",
    "persamaan-diferensial":"differential-equations",
    "analisis-numerik":"numerical-analysis",
    "riset-operasi":"operations-research",
    "statistika-terapan":"statistics",
    "statistika-matematika":"statistics",
    "matematika-diskrit":"combinatorics",
    "kalkulus-stokastik":"stochastic-process",
    "teori-ukuran-probabilitas":"measure-probability",
  };
  return map[slug];
}

function ExampleCard({example,label="Contoh"}:{example:BookExample;label?:string}){
  return(
    <article className="ird-worked-card">
      <div className="ird-worked-head">
        <div className="ird-problem-number">EX</div>
        <div><span className="eyebrow">{label}</span><h3>{example.title}</h3></div>
      </div>
      <div className="ird-worked-prompt"><Text>{example.problem}</Text></div>
      <details className="ird-worked-solution">
        <summary>Buka Solusi</summary>
        <div className="ird-worked-solution-body">
          <AcademicSolution
            idea={example.solution[0]}
            steps={example.solution}
            conclusion={example.conclusion}
          />
        </div>
      </details>
    </article>
  );
}

export function BookSectionPage({
  subject,
  chapter,
  section,
  content,
  previous,
  next,
}:{
  subject:BookSubject;
  chapter:BookChapter;
  section:BookSection;
  content:BookLessonContent;
  previous:BookSection|null;
  next:BookSection|null;
}){
  const definitions=content.formal.filter((item)=>item.kind==="definition");
  const formalResults=content.formal.filter((item)=>["lemma","proposition","theorem","corollary"].includes(item.kind));
  const provenResults=formalResults.filter((item)=>item.proof&&item.proof.length>0);
  const explanatoryNotes=content.formal.filter((item)=>item.kind==="note"||(["lemma","proposition","theorem","corollary"].includes(item.kind)&&(!item.proof||item.proof.length===0)));
  const visualKind=visualizationForSubject(subject.slug);
  const workedExamples=content.examples.slice(Math.min(definitions.length,content.examples.length));
  const examplesForSection=workedExamples.length?workedExamples:content.examples;

  const sections=[
    {id:"book-lesson-1",label:"Pengantar"},
    {id:"book-lesson-2",label:"Prasyarat & Tujuan"},
    {id:"book-lesson-3",label:"Notasi & Konsep"},
    {id:"book-lesson-4",label:"Definisi & Contoh"},
    {id:"book-lesson-5",label:"Hasil Formal & Bukti"},
    {id:"book-lesson-6",label:"Contoh Terbahas"},
    {id:"book-lesson-7",label:"Visualisasi"},
    {id:"book-lesson-8",label:"Ringkasan & Referensi"},
    {id:"book-latihan-soal",label:"Latihan Soal"},
  ];

  return(
    <RiemannHubShell
      className="book-section-page"
      breadcrumbs={[
        {label:"Materi",href:"/materi"},
        {label:subject.title,href:"/materi/"+subject.slug},
        {label:"Unit "+chapter.number+" · "+chapter.title,href:"/materi/"+subject.slug+"#book-chapter-"+chapter.number.replaceAll(".","-")},
        {label:section.title},
      ]}
      eyebrow={subject.title+" · "+section.number+" · DMath Curriculum"}
      title={section.title}
      lead={section.summary}
      meta={[
        "9 bagian",
        subject.title,
        subject.level,
        "Definisi · Bukti · Contoh · Latihan",
      ]}
      stats={[
        {value:definitions.length,label:"definisi"},
        {value:provenResults.length,label:"hasil formal terbukti"},
        {value:content.examples.length,label:"contoh terbahas"},
        {value:content.exercises.length,label:"latihan dengan solusi"},
      ]}
      actions={[
        {label:"Mulai Materi",href:"#book-lesson-1",kind:"primary"},
        {label:"Latihan Soal",href:"#book-latihan-soal",kind:"secondary"},
      ]}
      overviewId="ird-overview"
      tocTitle="Isi Materi"
      overviewEyebrow="Struktur Materi"
      overviewTitle="Urutan pembelajaran"
      overviewText="Materi dibaca dari pengantar dan definisi menuju hasil formal, contoh, visualisasi, lalu latihan soal."
      roadmap={["Pengantar","Prasyarat","Notasi","Definisi & contoh","Hasil formal & bukti","Contoh terbahas","Visualisasi","Ringkasan","Latihan"]}
      sections={sections}
    >
      <section id="book-lesson-1" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Bagian 1</span>
        <h2>Pengantar</h2>
        {content.intro.map((paragraph,index)=><div className="ird-paragraph" key={index}><Text>{paragraph}</Text></div>)}
        <div style={{marginTop:28}}><MathVisualization kind={visualKind}/></div>
      </section>

      <section id="book-lesson-2" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Bagian 2</span>
        <h2>Prasyarat dan tujuan pembelajaran</h2>
        <div className="solution-overview-grid">
          <div className="content-box">
            <strong>Prasyarat</strong>
            <p>
              {previous
                ?"Sebaiknya telah memahami submateri sebelumnya, “"+previous.number+" · "+previous.title+"”, terutama definisi dan hasil formal yang digunakan kembali."
                :"Submateri ini merupakan bagian awal pada "+subject.title+" dan digunakan untuk membangun konsep yang diperlukan pada unit berikutnya."}
            </p>
            {previous&&<Link className="text-link" href={"/materi/"+subject.slug+"/"+previous.slug}>← {previous.title}</Link>}
          </div>
          <div className="content-box">
            <strong>Tujuan Pembelajaran</strong>
            <ul>
              {section.keyIdeas.map((idea)=><li key={idea}>Menjelaskan dan menggunakan <strong>{idea}</strong> secara tepat.</li>)}
              <li>Menghubungkan definisi dengan contoh, hasil formal, pembuktian, dan penyelesaian soal.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="book-lesson-3" className="book-section ird-source-section">
        <div className="section-number">03</div>
        <span className="eyebrow">Bagian 3</span>
        <h2>Notasi dan konsep utama</h2>
        {content.notation?.length?(
          <div className="notation-table">
            {content.notation.map((item)=>(
              <div className="notation-row" key={item.symbol}>
                <div className="notation-symbol"><Text>{item.symbol}</Text></div>
                <div className="notation-meaning"><Text>{item.meaning}</Text></div>
              </div>
            ))}
          </div>
        ):(
          <p className="ird-paragraph">Submateri ini menggunakan notasi yang telah diperkenalkan pada bagian sebelumnya.</p>
        )}
        <div className="ird-roadmap" style={{marginTop:28}}>
          {section.keyIdeas.map((idea,index)=><div key={idea}><span>{String(index+1).padStart(2,"0")}</span><strong>{idea}</strong></div>)}
        </div>
      </section>

      <section id="book-lesson-4" className="book-section ird-source-section">
        <div className="section-number">04</div>
        <span className="eyebrow">Bagian 4</span>
        <h2>Definisi dan contoh</h2>
        <p className="ird-paragraph">Setiap definisi diikuti contoh agar syarat formalnya dapat langsung diperiksa pada objek konkret.</p>

        {definitions.length?definitions.map((item,index)=>{
          const example=content.examples[index%Math.max(1,content.examples.length)];
          return(
            <div className="definition-example-pair" key={item.title+index}>
              <article className="ird-formal ird-definition">
                <div className="ird-formal-head"><span>Definisi</span><strong>{item.title}</strong></div>
                <div className="ird-formal-body"><Text>{item.statement}</Text></div>
              </article>
              {example&&<ExampleCard example={example} label={"Contoh · "+item.title}/>}
            </div>
          );
        }):(
          <article className="ird-formal ird-note">
            <div className="ird-formal-head"><span>Catatan</span><strong>Tidak ada definisi baru</strong></div>
            <div className="ird-formal-body">Submateri ini menggunakan definisi yang telah diperkenalkan sebelumnya. Tidak ada pernyataan deskriptif yang dipaksakan menjadi definisi.</div>
          </article>
        )}
      </section>

      <section id="book-lesson-5" className="book-section ird-source-section">
        <div className="section-number">05</div>
        <span className="eyebrow">Bagian 5</span>
        <h2>Hasil formal dan pembuktian</h2>
        <p className="ird-paragraph">Pernyataan formal dibaca bersama hipotesisnya. Setiap lemma, proposisi, teorema, atau akibat yang ditampilkan pada bagian ini disertai pembuktian.</p>

        {provenResults.length?provenResults.map((item,index)=>{
          const explanation=content.connections[index%Math.max(1,content.connections.length)]
            ??("Hasil ini memperjelas struktur "+section.title+" dan digunakan bersama konsep "+section.keyIdeas.slice(0,2).join(" serta ")+".");
          return(
            <article className={"ird-formal ird-"+item.kind} key={item.title+index}>
              <div className="ird-formal-head">
                <span>{kindLabel[item.kind]}</span>
                <strong>{item.title}</strong>
              </div>
              <div className="ird-formal-body"><Text>{item.statement}</Text></div>
              <div className="content-box idea-box" style={{marginTop:18}}>
                <strong>Penjelasan</strong>
                <div><Text>{explanation}</Text></div>
              </div>
              <details className="ird-proof">
                <summary>Buka pembuktian</summary>
                <div className="ird-proof-body">
                  {item.proof!.map((step,stepIndex)=>(
                    <div className="proof-step" key={stepIndex}>
                      <span>{stepIndex+1}</span>
                      <Text>{step}</Text>
                    </div>
                  ))}
                  <div className="ird-qed">■</div>
                </div>
              </details>
            </article>
          );
        }):(
          <article className="ird-formal ird-note">
            <div className="ird-formal-head"><span>Catatan</span><strong>Fokus konseptual</strong></div>
            <div className="ird-formal-body">Tidak ada teorema baru yang perlu dinyatakan pada submateri ini. Pembahasan difokuskan pada definisi, konstruksi, atau penerapan konsep.</div>
          </article>
        )}

        {explanatoryNotes.map((item,index)=>(
          <article className="ird-formal ird-note" key={"note-"+item.title+index}>
            <div className="ird-formal-head"><span>Catatan</span><strong>{item.title}</strong></div>
            <div className="ird-formal-body"><Text>{item.statement}</Text></div>
          </article>
        ))}
      </section>

      <section id="book-lesson-6" className="book-section ird-source-section">
        <div className="section-number">06</div>
        <span className="eyebrow">Bagian 6</span>
        <h2>Contoh terbahas</h2>
        <p className="ird-paragraph">Contoh berikut memperlihatkan penggunaan definisi dan hasil formal pada penyelesaian masalah.</p>
        <div className="ird-worked-grid">
          {examplesForSection.map((example,index)=>(
            <article className="ird-worked-card" key={example.title+index}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                <div><span className="eyebrow">Contoh</span><h3>{example.title}</h3></div>
              </div>
              <div className="ird-worked-prompt"><Text>{example.problem}</Text></div>
              <details className="ird-worked-solution">
                <summary>Buka Solusi</summary>
                <div className="ird-worked-solution-body">
                  <AcademicSolution
                    idea={example.solution[0]}
                    steps={example.solution}
                    conclusion={example.conclusion}
                  />
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="book-lesson-7" className="book-section ird-source-section">
        <div className="section-number">07</div>
        <span className="eyebrow">Bagian 7</span>
        <h2>Visualisasi dan eksplorasi</h2>
        <p className="ird-paragraph">Representasi visual digunakan untuk memeriksa struktur konsep, sedangkan panel interaktif memungkinkan parameter diubah dan akibatnya diamati langsung.</p>
        <InteractiveMathLab kind={visualKind}/>
      </section>

      <section id="book-lesson-8" className="book-section ird-source-section">
        <div className="section-number">08</div>
        <span className="eyebrow">Bagian 8</span>
        <h2>Ringkasan dan referensi</h2>
        <div className="summary-grid">
          {section.keyIdeas.map((idea,index)=>(
            <div className="summary-card" key={idea}>
              <span className="eyebrow">{String(index+1).padStart(2,"0")}</span>
              <p><strong>{idea}</strong></p>
            </div>
          ))}
        </div>
        <article className="ird-formal ird-note" style={{marginTop:24}}>
          <div className="ird-formal-head"><span>Referensi</span><strong>Bacaan bidang</strong></div>
          <div className="ird-formal-body">
            {subject.source} ({subject.sourceYear}) digunakan untuk memeriksa terminologi dan cakupan bidang. Urutan pembelajaran, penjelasan, contoh, pembuktian, latihan, dan visualisasi pada halaman ini disusun untuk DMath Learning.
          </div>
        </article>
      </section>

      <section id="book-latihan-soal" className="book-section ird-practice-section">
        <div className="section-number">09</div>
        <span className="eyebrow">Latihan Soal dan Solusi</span>
        <h2>{content.exercises.length} latihan soal</h2>
        <p className="ird-paragraph">Kerjakan soal terlebih dahulu. Petunjuk dan solusi lengkap dapat dibuka setelah mencoba.</p>
        <div className="ird-worked-grid">
          {content.exercises.map((exercise,index)=>{
            const allSteps=splitAcademicSolution(exercise.answer);
            const steps=allSteps.length>1?allSteps.slice(0,-1):allSteps;
            const conclusion=allSteps.length>1?allSteps[allSteps.length-1]:undefined;
            return(
              <article className="ird-worked-card" key={index}>
                <div className="ird-worked-head">
                  <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                  <div><span className="eyebrow">Latihan Soal</span><h3>Soal {index+1}</h3></div>
                </div>
                <div className="ird-worked-prompt"><Text>{exercise.prompt}</Text></div>
                <details className="ird-proof">
                  <summary>Buka Petunjuk</summary>
                  <div className="ird-proof-body"><Text>{exercise.hint}</Text></div>
                </details>
                <details className="ird-worked-solution">
                  <summary>Buka Solusi</summary>
                  <div className="ird-worked-solution-body">
                    <AcademicSolution idea={exercise.hint} steps={steps} conclusion={conclusion}/>
                  </div>
                </details>
              </article>
            );
          })}
        </div>
      </section>

      <section className="next-learning-block textbook-next">
        <div>
          <span className="eyebrow">{next?"Materi Berikutnya":"Akhir Buku Digital"}</span>
          <h2>{next?next.number+" · "+next.title:subject.title}</h2>
          <p>{next?"Lanjutkan setelah definisi, pembuktian, contoh, visualisasi, dan latihan pada halaman ini dipahami.":"Kembali ke daftar isi untuk meninjau unit lain."}</p>
        </div>
        <div className="actions">
          {previous&&<Link className="btn secondary" href={"/materi/"+subject.slug+"/"+previous.slug}>← {previous.title}</Link>}
          <Link className="btn secondary" href={"/materi/"+subject.slug}>Daftar Isi</Link>
          {next&&<Link className="btn primary" href={"/materi/"+subject.slug+"/"+next.slug}>{next.title} →</Link>}
        </div>
      </section>
    </RiemannHubShell>
  );
}
