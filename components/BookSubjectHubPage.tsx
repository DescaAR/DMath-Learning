"use client";

import Link from "next/link";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import type { BookSubject } from "@/data/book-curricula";
import { subjectDeepMaterials } from "@/data/subject-deep-materials";

export function BookSubjectHubPage({subject}:{subject:BookSubject}){
  const sectionCount=subject.chapters.reduce((sum,chapter)=>sum+chapter.sections.length,0);
  const first=subject.chapters[0]?.sections[0];
  const deepMaterials=subjectDeepMaterials[subject.slug] ?? [];
  const sections=[
    ...(deepMaterials.length>0?[{id:"book-materi-mendalam",label:"Materi Mendalam"}]:[]),
    ...subject.chapters.map((chapter)=>({
      id:"book-chapter-"+chapter.number.replaceAll(".","-"),
      label:"Bab "+chapter.number+" · "+chapter.title,
    })),
  ];

  return(
    <RiemannHubShell
      className="book-subject-hub"
      breadcrumbs={[
        {label:"Materi",href:"/materi"},
        {label:subject.title},
      ]}
      eyebrow={subject.level}
      title={subject.title}
      lead=""
      meta={[
        subject.curriculumVersion??"DMath Curriculum",
        subject.chapters.length+" bab",
        sectionCount+" submateri",
        "Teori · Bukti · Contoh · Latihan",
      ]}
      stats={[
        {value:subject.chapters.length,label:"bab"},
        {value:sectionCount,label:"submateri"},
        {value:sectionCount,label:"halaman submateri"},
        {value:"1 pola",label:"struktur Integral Riemann"},
      ]}
      actions={[
        ...(first?[{label:"Mulai Materi",href:"/materi/"+subject.slug+"/"+first.slug,kind:"primary" as const}]:[]),
        {label:"Lihat Kurikulum",href:"#book-chapter-"+subject.chapters[0]?.number.replaceAll(".","-"),kind:"secondary" as const},
      ]}
      overviewEyebrow="Peta Materi"
      overviewTitle="Daftar Materi"
      overviewText=""
      roadmap={subject.chapters.map((chapter)=>"Bab "+chapter.number+" · "+chapter.title)}
      sections={sections}
    >
      <section className="subject-summary-card">
        <span className="eyebrow">Ringkasan Materi</span>
        <div className="chapter-stat-grid subject-summary-stats">
          <div><strong>{subject.chapters.length}</strong><span>Bab</span></div>
          <div><strong>{sectionCount}</strong><span>Submateri</span></div>
          <div><strong>1</strong><span>Submateri / Halaman</span></div>
        </div>
        <div className="subject-material-list">
          <strong>Daftar Materi</strong>
          <ol>
            {subject.chapters.map((chapter)=>(
              <li key={chapter.number}>
                <a href={"#book-chapter-"+chapter.number.replaceAll(".","-")}>
                  {chapter.title}
                </a>
              </li>
            ))}
            {deepMaterials.map((material)=>(
              <li key={material.href}>
                <Link href={material.href}>{material.title}</Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {deepMaterials.length>0&&(
        <section id="book-materi-mendalam" className="book-section ird-curriculum-section">
          <div className="section-number">01</div>
          <span className="eyebrow">Materi Mendalam</span>
          <h2>Materi Mendalam {subject.title}</h2>
          <p className="ird-paragraph">
            Materi berikut merupakan pembahasan khusus yang ditempatkan di dalam bidang {subject.title}. Isi halaman aslinya tetap dipertahankan.
          </p>
          <div className="ird-worked-grid">
            {deepMaterials.map((material,index)=>(
              <article className="ird-worked-card" key={material.href}>
                <div className="ird-worked-head">
                  <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                  <div>
                    <span className="eyebrow">Kuliah · {material.difficulty}</span>
                    <h3>{material.title}</h3>
                  </div>
                </div>
                <div className="ird-worked-prompt">
                  <p>{material.summary}</p>
                </div>
                <div className="actions">
                  <Link className="btn primary" href={material.href}>Pelajari</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {subject.chapters.map((chapter,chapterIndex)=>(
        <section
          key={chapter.number}
          id={"book-chapter-"+chapter.number.replaceAll(".","-")}
          className="book-section ird-curriculum-section"
        >
          <div className="section-number">{String(chapterIndex+1+(deepMaterials.length>0?1:0)).padStart(2,"0")}</div>
          <span className="eyebrow">Bab {chapter.number} · DMath Learning</span>
          <h2>{chapter.title}</h2>
          <p className="ird-paragraph">
            Bab ini terdiri atas {chapter.sections.length} submateri.
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
          <h2>Referensi Bidang</h2>
          <p>{subject.source} ({subject.sourceYear}) digunakan sebagai salah satu rujukan bidang untuk memeriksa cakupan dan terminologi. Penjelasan, urutan pembelajaran, contoh, pembuktian, latihan, dan visualisasi DMath Learning dikembangkan sebagai konten website.</p>
        </div>
        {first&&<div className="actions"><Link className="btn primary" href={"/materi/"+subject.slug+"/"+first.slug}>Mulai Belajar</Link></div>}
      </section>
    </RiemannHubShell>
  );
}
