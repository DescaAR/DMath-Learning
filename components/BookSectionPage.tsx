"use client";

import Link from "next/link";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { RichMath } from "@/components/RichMath";
import { MathVisualization, type VisualizationKind } from "@/components/MathVisualizations";
import type { BookChapter, BookSection, BookSubject } from "@/data/book-curricula";
import type { BookLessonContent, BookFormalKind } from "@/data/book-content-types";

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
  };
  return map[slug];
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
  const results=content.formal.filter((item)=>item.kind!=="definition");
  const resultCount=results.filter((item)=>["lemma","proposition","theorem","corollary"].includes(item.kind)).length;

  const sections=[
    {id:"book-lesson-1",label:"Prasyarat & Tujuan"},
    {id:"book-lesson-2",label:"Motivasi & Intuisi"},
    {id:"book-lesson-3",label:"Notasi"},
    {id:"book-lesson-4",label:"Definisi Formal"},
    {id:"book-lesson-5",label:"Teorema & Pembuktian"},
    {id:"book-lesson-6",label:"Contoh Terbahas"},
    {id:"book-lesson-7",label:"Kesalahan & Koneksi"},
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
        "9 bagian materi + latihan",
        subject.title,
        subject.level,
        "Formal & bertahap",
      ]}
      stats={[
        {value:definitions.length,label:"definisi"},
        {value:resultCount,label:"hasil formal"},
        {value:content.examples.length,label:"contoh terbahas"},
        {value:content.exercises.length,label:"latihan dengan solusi"},
      ]}
      actions={[
        {label:"Mulai Materi",href:"#ird-overview",kind:"primary"},
        {label:"Buka Latihan Soal",href:"#book-latihan-soal",kind:"secondary"},
      ]}
      overviewId="ird-overview"
      tocTitle="Isi Materi"
      overviewEyebrow="Gambaran Besar"
      overviewTitle={"Alur konsep "+section.number+" · "+section.title}
      overviewText={section.summary}
      roadmap={section.keyIdeas}
      sections={sections}
    >
      <section id="book-lesson-1" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Bagian 1</span>
        <h2>Prasyarat dan tujuan pembelajaran</h2>
        <div className="solution-overview-grid">
          <div className="content-box">
            <strong>Prasyarat</strong>
            <p>
              {previous
                ?"Sebaiknya telah memahami submateri sebelumnya, “"+previous.number+" · "+previous.title+"”, termasuk definisi dan hasil formal yang digunakan di sana."
                :"Submateri ini merupakan titik awal buku digital "+subject.title+". Gunakan bagian ini untuk membangun fondasi sebelum melanjutkan ke submateri berikutnya."}
            </p>
            {previous&&<Link className="text-link" href={"/materi/"+subject.slug+"/"+previous.slug}>← Buka {previous.title}</Link>}
          </div>
          <div className="content-box">
            <strong>Tujuan Pembelajaran</strong>
            <ul>
              {section.keyIdeas.map((idea)=><li key={idea}>Memahami dan menggunakan konsep <strong>{idea}</strong> secara tepat.</li>)}
              <li>Mampu membaca definisi formal, mengikuti pembuktian, dan menggunakan hasilnya pada contoh maupun latihan.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="book-lesson-2" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Bagian 2</span>
        <h2>Motivasi dan intuisi</h2>
        {content.intro.map((paragraph,index)=><div className="ird-paragraph" key={index}><Text>{paragraph}</Text></div>)}
        <div className="ird-roadmap">
          {section.keyIdeas.map((idea,index)=><div key={idea}><span>{String(index+1).padStart(2,"0")}</span><strong>{idea}</strong></div>)}
        </div>
        <div style={{marginTop:28}}>
          <MathVisualization kind={visualizationForSubject(subject.slug)} />
        </div>
      </section>

      <section id="book-lesson-3" className="book-section ird-source-section">
        <div className="section-number">03</div>
        <span className="eyebrow">Bagian 3</span>
        <h2>Notasi yang digunakan</h2>
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
          <article className="ird-formal ird-note">
            <div className="ird-formal-head"><span>Catatan</span><strong>Notasi</strong></div>
            <div className="ird-formal-body">Tidak ada notasi baru yang perlu diperkenalkan pada submateri ini. Notasi mengikuti bagian-bagian sebelumnya.</div>
          </article>
        )}
      </section>

      <section id="book-lesson-4" className="book-section ird-source-section">
        <div className="section-number">04</div>
        <span className="eyebrow">Bagian 4</span>
        <h2>Definisi formal</h2>
        <p className="ird-paragraph">Definisi dibaca terlebih dahulu sebelum hasil formal berikutnya. Perhatikan setiap syarat, domain, dan urutan kuantor yang muncul.</p>
        {definitions.length?definitions.map((item,index)=>(
          <article className="ird-formal ird-definition" key={item.title+index}>
            <div className="ird-formal-head"><span>Definisi</span><strong>{item.title}</strong></div>
            <div className="ird-formal-body"><Text>{item.statement}</Text></div>
          </article>
        )):(
          <article className="ird-formal ird-note">
            <div className="ird-formal-head"><span>Catatan</span><strong>Tidak ada definisi baru</strong></div>
            <div className="ird-formal-body">Submateri ini menggunakan definisi yang telah diperkenalkan sebelumnya dan berfokus pada konsekuensi atau penerapannya.</div>
          </article>
        )}
      </section>

      <section id="book-lesson-5" className="book-section ird-source-section">
        <div className="section-number">05</div>
        <span className="eyebrow">Bagian 5</span>
        <h2>Teorema, lemma, proposisi, akibat, dan pembuktian</h2>
        <p className="ird-paragraph">Setiap hasil formal ditempatkan pada kartu tersendiri. Pembuktian dibuka setelah pernyataan dan seluruh hipotesisnya dipahami.</p>
        {results.map((item,index)=>(
          <article className={"ird-formal ird-"+item.kind} key={item.title+index}>
            <div className="ird-formal-head">
              <span>{kindLabel[item.kind]}</span>
              <strong>{item.title}</strong>
            </div>
            <div className="ird-formal-body"><Text>{item.statement}</Text></div>
            {item.proof?.length?(
              <details className="ird-proof">
                <summary>Buka pembuktian</summary>
                <div className="ird-proof-body">
                  {item.proof.map((step,stepIndex)=>(
                    <div className="proof-step" key={stepIndex}>
                      <span>{stepIndex+1}</span>
                      <Text>{step}</Text>
                    </div>
                  ))}
                  <div className="ird-qed">■</div>
                </div>
              </details>
            ):null}
          </article>
        ))}
      </section>

      <section id="book-lesson-6" className="book-section ird-source-section">
        <div className="section-number">06</div>
        <span className="eyebrow">Bagian 6</span>
        <h2>Contoh terbahas</h2>
        <p className="ird-paragraph">Contoh disusun untuk memperlihatkan bagaimana definisi dan teorema digunakan. Solusi dapat dibuka setelah soal dicoba secara mandiri.</p>
        <div className="ird-worked-grid">
          {content.examples.map((example,index)=>(
            <article className="ird-worked-card" key={example.title+index}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                <div><span className="eyebrow">Contoh</span><h3>{example.title}</h3></div>
              </div>
              <div className="ird-worked-prompt"><Text>{example.problem}</Text></div>
              <details className="ird-worked-solution">
                <summary>Buka Solusi</summary>
                <div className="ird-worked-solution-body">
                  {example.solution.map((step,stepIndex)=>(
                    <div className="solution-step" key={stepIndex}>
                      <span>{stepIndex+1}</span>
                      <Text>{step}</Text>
                    </div>
                  ))}
                  {example.conclusion&&(
                    <div className="content-box answer-box">
                      <strong>Kesimpulan</strong>
                      <div><Text>{example.conclusion}</Text></div>
                    </div>
                  )}
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="book-lesson-7" className="book-section ird-source-section">
        <div className="section-number">07</div>
        <span className="eyebrow">Bagian 7</span>
        <h2>Kesalahan umum dan koneksi materi</h2>
        <div className="solution-overview-grid">
          <div className="content-box warning-box">
            <strong>Kesalahan Umum</strong>
            <ul>{content.mistakes.map((item)=><li key={item}><Text>{item}</Text></li>)}</ul>
          </div>
          <div className="content-box insight-box">
            <strong>Koneksi Materi</strong>
            <ul>{content.connections.map((item)=><li key={item}><Text>{item}</Text></li>)}</ul>
          </div>
        </div>
      </section>

      <section id="book-lesson-8" className="book-section ird-source-section">
        <div className="section-number">08</div>
        <span className="eyebrow">Bagian 8</span>
        <h2>Ringkasan dan referensi</h2>
        <div className="summary-grid">
          {section.keyIdeas.map((idea,index)=>(
            <div className="summary-card" key={idea}>
              <span className="eyebrow">{String(index+1).padStart(2,"0")}</span>
              <p><strong>{idea}</strong> merupakan konsep inti pada submateri ini dan akan digunakan pada bagian selanjutnya.</p>
            </div>
          ))}
        </div>
        <article className="ird-formal ird-note" style={{marginTop:24}}>
          <div className="ird-formal-head"><span>Referensi</span><strong>Referensi dan bacaan lanjut</strong></div>
          <div className="ird-formal-body">
            {subject.source} ({subject.sourceYear}) digunakan sebagai salah satu rujukan bidang untuk terminologi dan pemeriksaan cakupan konsep. Penjelasan, contoh, pembuktian, latihan, serta visualisasi pada halaman ini dikembangkan untuk DMath Learning.
          </div>
        </article>
      </section>

      <section id="book-latihan-soal" className="book-section ird-practice-section">
        <div className="section-number">09</div>
        <span className="eyebrow">Latihan Soal dan Solusi</span>
        <h2>{content.exercises.length} latihan soal · {section.title}</h2>
        <p className="ird-paragraph">Kerjakan setiap soal terlebih dahulu. Buka petunjuk bila diperlukan dan buka solusi setelah mencoba menyelesaikannya secara mandiri.</p>
        <div className="ird-worked-grid">
          {content.exercises.map((exercise,index)=>(
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
                <div className="ird-worked-solution-body"><Text>{exercise.answer}</Text></div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="next-learning-block textbook-next">
        <div>
          <span className="eyebrow">{next?"Materi Berikutnya":"Akhir Buku Digital"}</span>
          <h2>{next?next.number+" · "+next.title:"Kamu telah sampai pada submateri terakhir "+subject.title+"."}</h2>
          <p>{next?"Lanjutkan setelah definisi, hasil formal, contoh, dan latihan pada halaman ini sudah dipahami.":"Kembali ke daftar isi untuk meninjau unit atau memilih jalur belajar lain."}</p>
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
