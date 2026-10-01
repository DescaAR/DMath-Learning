"use client";

import Link from "next/link";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { RichMath } from "@/components/RichMath";
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
  const proofCount=content.formal.filter((item)=>item.proof?.length).length;
  const sections=[
    {id:"book-lesson-1",label:"Tujuan & Prasyarat"},
    {id:"book-lesson-2",label:"Motivasi & Intuisi"},
    ...(content.notation?.length?[{id:"book-lesson-3",label:"Notasi"}]:[]),
    {id:"book-lesson-4",label:"Definisi & Teori"},
    {id:"book-lesson-5",label:"Contoh Terbahas"},
    {id:"book-lesson-6",label:"Latihan"},
    {id:"book-lesson-7",label:"Kesalahan & Koneksi"},
    {id:"book-lesson-8",label:"Ringkasan & Referensi"},
  ];

  return(
    <RiemannHubShell
      className="book-section-page"
      breadcrumbs={[
        {label:"Materi",href:"/materi"},
        {label:subject.title,href:"/materi/"+subject.slug},
        {label:"Bab "+chapter.number+" · "+chapter.title,href:"/materi/"+subject.slug+"#book-chapter-"+chapter.number.replaceAll(".","-")},
        {label:section.title},
      ]}
      eyebrow={subject.title+" · "+section.number+" · Bab Digital"}
      title={section.title}
      lead={section.summary}
      meta={[
        subject.level,
        "Bab "+chapter.number,
        section.sourceTitle,
        "Satu submateri per halaman",
      ]}
      stats={[
        {value:content.formal.length,label:"hasil formal"},
        {value:proofCount,label:"pembuktian"},
        {value:content.examples.length,label:"contoh terbahas"},
        {value:content.exercises.length,label:"latihan"},
      ]}
      actions={[
        {label:"Mulai Membaca",href:"#book-lesson-1",kind:"primary"},
        {label:"Ke Latihan",href:"#book-lesson-6",kind:"secondary"},
      ]}
      overviewEyebrow="Gambaran Besar"
      overviewTitle={"Apa yang dipelajari pada "+section.number+"?"}
      overviewText={section.summary}
      roadmap={section.keyIdeas}
      sections={sections}
    >
      <section id="book-lesson-1" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Prasyarat & Tujuan</span>
        <h2>Posisi submateri dalam alur belajar.</h2>
        <div className="solution-overview-grid">
          <div className="content-box">
            <strong>Prasyarat</strong>
            <p>
              {previous
                ?"Sebaiknya telah memahami submateri sebelumnya, “"+previous.title+"”, beserta definisi dan hasil formal yang digunakan di sana."
                :"Tidak ada submateri sebelumnya pada buku digital ini. Gunakan halaman ini sebagai titik awal fondasi."}
            </p>
            {previous&&<Link className="text-link" href={"/materi/"+subject.slug+"/"+previous.slug}>← Buka {previous.title}</Link>}
          </div>
          <div className="content-box">
            <strong>Tujuan Pembelajaran</strong>
            <ul>
              {section.keyIdeas.map((idea)=><li key={idea}>Memahami dan menggunakan konsep <strong>{idea}</strong> secara tepat.</li>)}
              <li>Mampu membaca definisi dan pembuktian formal, lalu menerapkannya pada contoh dan latihan.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="book-lesson-2" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">Motivasi & Intuisi</span>
        <h2>Mengapa bagian ini diperlukan?</h2>
        {content.intro.map((paragraph,index)=><div className="ird-paragraph" key={index}><Text>{paragraph}</Text></div>)}
        <div className="ird-roadmap">
          {section.keyIdeas.map((idea,index)=><div key={idea}><span>{String(index+1).padStart(2,"0")}</span><strong>{idea}</strong></div>)}
        </div>
      </section>

      {content.notation?.length?(
        <section id="book-lesson-3" className="book-section ird-source-section">
          <div className="section-number">03</div>
          <span className="eyebrow">Notasi</span>
          <h2>Notasi yang digunakan.</h2>
          <div className="notation-table">
            {content.notation.map((item)=>(
              <div className="notation-row" key={item.symbol}>
                <div className="notation-symbol"><Text>{item.symbol}</Text></div>
                <div className="notation-meaning"><Text>{item.meaning}</Text></div>
              </div>
            ))}
          </div>
        </section>
      ):null}

      <section id="book-lesson-4" className="book-section ird-source-section">
        <div className="section-number">{content.notation?.length?"04":"03"}</div>
        <span className="eyebrow">Definisi, Teorema, dan Pembuktian</span>
        <h2>Teori formal.</h2>
        <p className="ird-paragraph">Setiap hasil formal ditempatkan terpisah. Pembuktian dapat dibuka setelah pernyataan dibaca dan dipahami.</p>

        {content.formal.map((item,index)=>(
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

      <section id="book-lesson-5" className="book-section ird-source-section">
        <div className="section-number">{content.notation?.length?"05":"04"}</div>
        <span className="eyebrow">Contoh Terbahas</span>
        <h2>Dari teori menuju penggunaan.</h2>
        <div className="ird-worked-grid">
          {content.examples.map((example,index)=>(
            <article className="ird-worked-card" key={example.title}>
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
                  {example.conclusion&&<div className="content-box answer-box"><strong>Kesimpulan</strong><div><Text>{example.conclusion}</Text></div></div>}
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="book-lesson-6" className="book-section ird-practice-section">
        <div className="section-number">{content.notation?.length?"06":"05"}</div>
        <span className="eyebrow">Latihan Soal</span>
        <h2>Uji pemahaman sebelum melanjutkan.</h2>
        <p className="ird-paragraph">Kerjakan setiap soal terlebih dahulu. Petunjuk dan solusi disembunyikan agar proses berpikir tetap aktif.</p>
        <div className="ird-worked-grid">
          {content.exercises.map((exercise,index)=>(
            <article className="ird-worked-card" key={index}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                <div><span className="eyebrow">Latihan</span><h3>Soal {index+1}</h3></div>
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

      <section id="book-lesson-7" className="book-section ird-source-section">
        <div className="section-number">{content.notation?.length?"07":"06"}</div>
        <span className="eyebrow">Audit Pemahaman</span>
        <h2>Kesalahan umum dan koneksi materi.</h2>
        <div className="solution-overview-grid">
          <div className="content-box warning-box">
            <strong>Kesalahan Umum</strong>
            <ul>{content.mistakes.map((item)=><li key={item}><Text>{item}</Text></li>)}</ul>
          </div>
          <div className="content-box insight-box">
            <strong>Koneksi</strong>
            <ul>{content.connections.map((item)=><li key={item}><Text>{item}</Text></li>)}</ul>
          </div>
        </div>
      </section>

      <section id="book-lesson-8" className="book-section ird-source-section">
        <div className="section-number">{content.notation?.length?"08":"07"}</div>
        <span className="eyebrow">Ringkasan & Referensi</span>
        <h2>Yang perlu dibawa ke submateri berikutnya.</h2>
        <div className="summary-grid">
          {section.keyIdeas.map((idea,index)=>(
            <div className="summary-card" key={idea}>
              <span className="eyebrow">{String(index+1).padStart(2,"0")}</span>
              <p><strong>{idea}</strong> merupakan konsep inti pada submateri ini dan akan digunakan pada bagian selanjutnya.</p>
            </div>
          ))}
        </div>
        <div className="content-box" style={{marginTop:24}}>
          <strong>Referensi struktur dan pengembangan materi</strong>
          <p>{subject.source} ({subject.sourceYear}). Materi DMath Learning ditulis ulang dan dikembangkan sebagai penjelasan mandiri; susunan topik mengikuti alur referensi utama.</p>
        </div>
      </section>

      <section className="next-learning-block textbook-next">
        <div>
          <span className="eyebrow">{next?"Materi Berikutnya":"Akhir Buku Digital"}</span>
          <h2>{next?next.number+" · "+next.title:"Kamu telah sampai pada submateri terakhir "+subject.title+"."}</h2>
          <p>{next?"Lanjutkan setelah definisi, hasil formal, dan latihan pada halaman ini sudah dipahami.":"Kembali ke indeks untuk meninjau ulang bab atau memilih jalur belajar lain."}</p>
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
