"use client";

import Link from "next/link";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import type { BookSubject } from "@/data/book-curricula";

export function BookSubjectHubPage({subject}:{subject:BookSubject}){
  const sectionCount=subject.chapters.reduce((sum,chapter)=>sum+chapter.sections.length,0);
  const first=subject.chapters[0]?.sections[0];
  const sections=subject.chapters.map((chapter)=>({
    id:"book-chapter-"+chapter.number.replaceAll(".","-"),
    label:"Unit "+chapter.number+" · "+chapter.title,
  }));

  return(
    <RiemannHubShell
      className="book-subject-hub"
      breadcrumbs={[
        {label:"Materi",href:"/materi"},
        {label:subject.title},
      ]}
      eyebrow={subject.level+" · Buku Digital Lengkap"}
      title={subject.title}
      lead={subject.subtitle}
      meta={[
        subject.curriculumVersion??"DMath Curriculum",
        subject.chapters.length+" unit belajar",
        sectionCount+" submateri",
        "Teori · Bukti · Contoh · Latihan",
      ]}
      stats={[
        {value:subject.chapters.length,label:"unit belajar"},
        {value:sectionCount,label:"submateri"},
        {value:sectionCount,label:"halaman submateri"},
        {value:"1 pola",label:"struktur Integral Riemann"},
      ]}
      actions={[
        ...(first?[{label:"Mulai dari Awal",href:"/materi/"+subject.slug+"/"+first.slug,kind:"primary" as const}]:[]),
        {label:"Lihat Kurikulum",href:"#book-chapter-"+subject.chapters[0]?.number.replaceAll(".","-"),kind:"secondary" as const},
      ]}
      overviewEyebrow="Peta Buku"
      overviewTitle="Pilih unit belajar, lalu pelajari satu submateri sampai selesai."
      overviewText="Setiap halaman submateri mempunyai struktur yang konsisten: tujuan, intuisi, notasi, definisi, teorema, pembuktian, contoh terbahas, latihan dengan petunjuk dan solusi, kesalahan umum, koneksi, ringkasan, serta navigasi ke materi berikutnya."
      roadmap={subject.chapters.map((chapter)=>"Unit "+chapter.number+" · "+chapter.title)}
      sections={sections}
    >
      {subject.chapters.map((chapter,chapterIndex)=>(
        <section
          key={chapter.number}
          id={"book-chapter-"+chapter.number.replaceAll(".","-")}
          className="book-section ird-curriculum-section"
        >
          <div className="section-number">{String(chapterIndex+1).padStart(2,"0")}</div>
          <span className="eyebrow">Unit {chapter.number} · DMath Learning</span>
          <h2>{chapter.title}</h2>
          <p className="ird-paragraph">
            Unit ini terdiri atas {chapter.sections.length} submateri. Setiap submateri dibuka pada halaman tersendiri agar pembahasan tidak terlalu padat dan urutan belajar tetap jelas.
          </p>

          <div className="ird-worked-grid">
            {chapter.sections.map((section,index)=>(
              <article className="ird-worked-card" key={section.slug}>
                <div className="ird-worked-head">
                  <div className="ird-problem-number">{section.number}</div>
                  <div>
                    <span className="eyebrow">Submateri {index+1}</span>
                    <h3>{section.title}</h3>
                  </div>
                </div>
                <div className="ird-worked-prompt">
                  <p>{section.summary}</p>
                </div>
                <div className="track-topic-chips">
                  {section.keyIdeas.map((idea)=><span key={idea}>{idea}</span>)}
                </div>
                <div className="actions">
                  <Link className="btn primary" href={"/materi/"+subject.slug+"/"+section.slug}>
                    Pelajari Submateri
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="next-learning-block textbook-next">
        <div>
          <span className="eyebrow">Referensi dan Bacaan Lanjut</span>
          <h2>Materi DMath Learning disusun sebagai pengalaman belajar mandiri.</h2>
          <p>{subject.source} ({subject.sourceYear}) digunakan sebagai salah satu rujukan bidang untuk memeriksa cakupan dan terminologi. Penjelasan, urutan pembelajaran, contoh, pembuktian, latihan, dan visualisasi DMath Learning dikembangkan sebagai konten website.</p>
        </div>
        {first&&<div className="actions"><Link className="btn primary" href={"/materi/"+subject.slug+"/"+first.slug}>Mulai Belajar</Link></div>}
      </section>
    </RiemannHubShell>
  );
}
