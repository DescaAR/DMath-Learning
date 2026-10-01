"use client";

import Link from "next/link";
import type { LearningTrackPageData, LocalText } from "@/data/learning-track-pages";
import { deepMaterials } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { bookSubjects } from "@/data/book-curricula";
import { useLanguage } from "@/components/LanguageProvider";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export function LearningTrackPage({ track }: { track: LearningTrackPageData }) {
  const { language } = useLanguage();
  const en = language === "en";
  const pick = (text: LocalText) => en ? text.en : text.id;

  const published = track.publishedMaterials
    .map((slug) => deepMaterials.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const digitalBooks = (track.slug === "kuliah" || track.slug === "onmipa") ? bookSubjects : [];

  const sections=[
    {id:"track-kurikulum",label:en?"Curriculum":"Kurikulum"},
    {id:"track-roadmap",label:"Roadmap"},
    {id:"track-skills",label:en?"Skills":"Kemampuan"},
    {id:"track-materials",label:en?"Available Materials":"Materi Tersedia"},
  ];

  return (
    <RiemannHubShell
      className="track-detail-page"
      breadcrumbs={[
        {label:en?"Learning Tracks":"Jalur Belajar",href:"/belajar"},
        {label:pick(track.title)},
      ]}
      eyebrow={pick(track.eyebrow)}
      title={pick(track.title)}
      lead={pick(track.intro)}
      meta={[
        track.category==="olimpiade"?(en?"Competition Track":"Jalur Kompetisi"):(en?"Regular Track":"Jalur Reguler"),
        pick(track.audience),
        pick(track.goal),
      ]}
      stats={[
        {value:track.subjects.length,label:en?"core fields":"bidang inti"},
        {value:track.roadmap.length,label:en?"roadmap stages":"tahap roadmap"},
        {value:track.skills.length,label:en?"skills":"kemampuan"},
        {value:published.length + digitalBooks.length,label:en?"published chapters":"materi tersedia"},
      ]}
      actions={[
        {label:en?"Open Curriculum":"Buka Kurikulum",href:"#track-kurikulum",kind:"primary"},
        {label:en?"Open Materials":"Buka Materi",href:"#track-materials",kind:"secondary"},
      ]}
      overviewEyebrow={en?"Track Structure":"Struktur Jalur"}
      overviewTitle={en?"Learning sequence":"Urutan Pembelajaran"}
      overviewText={pick(track.philosophy)}
      roadmap={track.roadmap.map((stage)=>pick(stage.title))}
      sections={sections}
    >
      <section id="track-kurikulum" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">{en?"Part 1":"Bagian 1"}</span>
        <h2>{en?"Curriculum":"Kurikulum"}</h2>
        <p>{en
          ?"The curriculum is grouped by mathematical field so the structure is visible before opening individual chapters."
          :"Kurikulum dikelompokkan berdasarkan bidang agar struktur belajar terlihat sebelum masuk ke bab per bab."}</p>
        <div className="ird-worked-grid">
          {track.subjects.map((subject,index)=>(
            <article className="ird-worked-card" key={pick(subject.name)}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                <div><span className="eyebrow">{en?"Field":"Bidang"}</span><h3>{pick(subject.name)}</h3></div>
              </div>
              <div className="ird-worked-prompt"><p>{pick(subject.description)}</p></div>
              <div className="track-topic-chips">{subject.topics.map((topic)=><span key={pick(topic)}>{pick(topic)}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="track-roadmap" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">{en?"Part 2":"Bagian 2"}</span>
        <h2>{en?"Learning Roadmap":"Roadmap Pembelajaran"}</h2>
        <div className="ird-worked-grid">
          {track.roadmap.map((stage,index)=>(
            <article className="ird-worked-card" key={pick(stage.title)}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                <div><span className="eyebrow">{pick(stage.label)}</span><h3>{pick(stage.title)}</h3></div>
              </div>
              <div className="ird-worked-prompt"><p>{pick(stage.description)}</p></div>
              <div className="track-topic-chips">{stage.topics.map((topic)=><span key={pick(topic)}>{pick(topic)}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="track-skills" className="book-section ird-source-section">
        <div className="section-number">03</div>
        <span className="eyebrow">{en?"Part 3":"Bagian 3"}</span>
        <h2>{en?"Learning Outcomes":"Capaian Pembelajaran"}</h2>
        <p>{pick(track.goal)}</p>
        <div className="ird-roadmap">
          {track.skills.map((skill,index)=>(
            <div key={pick(skill)}><span>{String(index+1).padStart(2,"0")}</span><strong>{pick(skill)}</strong></div>
          ))}
        </div>
      </section>

      <section id="track-materials" className="book-section ird-practice-section">
        <div className="section-number">04</div>
        <span className="eyebrow">{en?"Available Now":"Materi yang Sudah Tersedia"}</span>
        <h2>{en?"Available Materials":"Materi Tersedia"}</h2>
        {published.length>0 || digitalBooks.length>0?(
          <div className="ird-worked-grid">
            {digitalBooks.map((book,index)=>(
              <article className="ird-worked-card" key={book.slug}>
                <div className="ird-worked-head">
                  <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                  <div><span className="eyebrow">{book.level} · {en?"Digital Book":"Buku Digital"}</span><h3>{book.title}</h3></div>
                </div>
                <div className="ird-worked-prompt"><p>{book.subtitle}</p></div>
                <div className="actions"><Link className="btn primary" href={"/materi/"+book.slug}>{en?"Open Book":"Buka Buku Digital"}</Link></div>
              </article>
            ))}
            {published.map((material,index)=>{
              const localized=en?(deepMaterialEnMap[material.slug]??material):material;
              return(
                <article className="ird-worked-card" key={material.slug}>
                  <div className="ird-worked-head">
                    <div className="ird-problem-number">{String(index+digitalBooks.length+1).padStart(2,"0")}</div>
                    <div><span className="eyebrow">{localized.level} · {localized.subject}</span><h3>{localized.title}</h3></div>
                  </div>
                  <div className="ird-worked-prompt"><p>{localized.summary}</p></div>
                  <div className="actions"><Link className="btn primary" href={"/materi/"+material.slug}>{en?"Open Chapter":"Buka Materi"}</Link></div>
                </article>
              );
            })}
          </div>
        ):(
          <div className="content-box">
            <strong>{en?"In Development":"Sedang Dikembangkan"}</strong>
            <p>{en?"The curriculum and roadmap are ready; complete digital chapters are being added progressively.":"Kurikulum dan roadmap sudah siap; bab digital lengkap akan ditambahkan bertahap."}</p>
          </div>
        )}
      </section>

      <section className="next-learning-block textbook-next">
        <div>
          <span className="eyebrow">{en?"Continue":"Lanjutkan"}</span>
          <h2>{en?"Materials and Practice":"Materi dan Latihan"}</h2>
          <p>{en?"Use this page as the map for the whole track.":"Gunakan halaman ini sebagai peta untuk seluruh jalur belajar."}</p>
        </div>
        <div className="actions">
          <Link className="btn primary" href="/materi">{en?"Open Materials":"Buka Materi"}</Link>
          <Link className="btn secondary" href="/bank-soal">{en?"Open Problem Bank":"Buka Bank Soal"}</Link>
        </div>
      </section>
    </RiemannHubShell>
  );
}
