"use client";

import Link from "next/link";
import type { OlympiadHub, OText } from "@/data/olympiad-hubs";
import { useLanguage } from "@/components/LanguageProvider";
import { RichMath } from "@/components/RichMath";
import { RiemannHubShell } from "@/components/RiemannHubShell";
import { AcademicSolution } from "@/components/AcademicSolution";

export function OlympiadHubPage({ hub }: { hub: OlympiadHub }) {
  const { language } = useLanguage();
  const en = language === "en";
  const pick = (value: OText) => en ? value.en : value.id;

  const sections=[
    {id:"olympiad-syllabus",label:"Syllabus"},
    {id:"olympiad-roadmap",label:"Roadmap"},
    {id:"olympiad-problems",label:en?"Curated Problems":"Soal Terkurasi"},
    {id:"olympiad-bank",label:en?"Problem Bank":"Bank Soal"},
    {id:"olympiad-challenge",label:en?"Challenge Problem":"Soal Tantangan"},
  ];

  return (
    <RiemannHubShell
      className="olympiad-hub-page"
      breadcrumbs={[
        {label:en?"Olympiad":"Olimpiade",href:"/olimpiade"},
        {label:pick(hub.title)},
      ]}
      eyebrow={en?"Competition Mathematics":"Matematika Kompetisi"}
      title={pick(hub.title)}
      lead={pick(hub.subtitle)}
      meta={hub.fields.map((field)=>pick(field))}
      stats={[
        {value:hub.syllabus.length,label:en?"core fields":"bidang inti"},
        {value:hub.roadmap.length,label:en?"roadmap phases":"fase roadmap"},
        {value:hub.curated.length,label:en?"curated problems":"soal terkurasi"},
        {value:1,label:"challenge"},
      ]}
      actions={[
        {label:en?"Open Syllabus":"Buka Syllabus",href:"#olympiad-syllabus",kind:"primary"},
        {label:en?"Try Problems":"Coba Soal",href:"#olympiad-problems",kind:"secondary"},
      ]}
      overviewEyebrow={en?"Competition Map":"Peta Kompetisi"}
      overviewTitle={en?"Competition Structure":"Struktur Kompetisi"}
      overviewText={en
        ?"Each field is organized as a competition-learning sequence rather than a list of isolated topics."
        :"Setiap bidang disusun sebagai urutan belajar kompetisi, bukan daftar topik yang berdiri sendiri."}
      roadmap={hub.fields.map((field)=>pick(field))}
      sections={sections}
    >
      <section id="olympiad-syllabus" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">{en?"Part 1":"Bagian 1"}</span>
        <h2>{en?"Competition Syllabus":"Silabus Kompetisi"}</h2>
        <div className="ird-worked-grid">
          {hub.syllabus.map((unit,index)=>(
            <article className="ird-worked-card" key={pick(unit.title)}>
              <div className="ird-worked-head"><div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div><div><span className="eyebrow">{en?"Field":"Bidang"}</span><h3>{pick(unit.title)}</h3></div></div>
              <div className="ird-worked-prompt"><p>{pick(unit.description)}</p></div>
              <div className="track-topic-chips">{unit.topics.map((topic)=><span key={pick(topic)}>{pick(topic)}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="olympiad-roadmap" className="book-section ird-source-section">
        <div className="section-number">02</div>
        <span className="eyebrow">{en?"Part 2":"Bagian 2"}</span>
        <h2>{en?"Competition Roadmap":"Roadmap Kompetisi"}</h2>
        <div className="ird-worked-grid">
          {hub.roadmap.map((phase,index)=>(
            <article className="ird-worked-card" key={pick(phase.title)}>
              <div className="ird-worked-head"><div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div><div><span className="eyebrow">Roadmap</span><h3>{pick(phase.title)}</h3></div></div>
              <div className="ird-worked-prompt"><p>{pick(phase.focus)}</p></div>
              <ul>{phase.outcomes.map((outcome)=><li key={pick(outcome)}>{pick(outcome)}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="olympiad-problems" className="book-section ird-practice-section">
        <div className="section-number">03</div>
        <span className="eyebrow">{en?"Curated Problems and Solutions":"Soal Terkurasi dan Solusi"}</span>
        <h2>{en?"Curated Problems":"Soal Terkurasi"}</h2>
        <div className="ird-worked-grid">
          {hub.curated.map((problem,index)=>(
            <article className="ird-worked-card" key={problem.id}>
              <div className="ird-worked-head">
                <div className="ird-problem-number">{String(index+1).padStart(2,"0")}</div>
                <div><span className="eyebrow">{problem.id} · {problem.difficulty}</span><h3>{pick(problem.title)}</h3></div>
              </div>
              <div className="ird-worked-prompt"><RichMath>{pick(problem.problem)}</RichMath></div>
              <details className="ird-proof"><summary>{en?"Open Hint":"Buka Petunjuk"}</summary><div className="ird-proof-body"><RichMath>{pick(problem.hint)}</RichMath></div></details>
              <details className="ird-worked-solution">
                <summary>{en?"Open Solution":"Buka Solusi"}</summary>
                <div className="ird-worked-solution-body">
                  <AcademicSolution
                    idea={pick(problem.hint)}
                    steps={problem.solution.map((step)=>pick(step))}
                  />
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="olympiad-bank" className="book-section ird-source-section">
        <div className="section-number">04</div>
        <span className="eyebrow">{en?"Problem Bank":"Bank Soal"}</span>
        <h2>{en?"Problem Bank":"Bank Soal"}</h2>
        <p>{en
          ?"Use the problem bank for volume practice, then return to this roadmap to review strategy."
          :"Gunakan bank soal untuk latihan volume besar, lalu kembali ke roadmap ini untuk mengaudit strategi."}</p>
        <div className="actions">
          <Link className="btn primary" href="/bank-soal">{en?"Open Problem Bank":"Buka Bank Soal"}</Link>
          <Link className="btn secondary" href={"/belajar/"+hub.learningTrackSlug}>{en?"Open Full Track":"Buka Jalur Lengkap"}</Link>
          <Link className="btn secondary" href="/pembahasan">{en?"Solution Index":"Indeks Pembahasan"}</Link>
        </div>
      </section>

      <section id="olympiad-challenge" className="book-section ird-practice-section">
        <div className="section-number">05</div>
        <span className="eyebrow">{en?"Challenge Problem":"Soal Tantangan"} · {pick(hub.challenge.field)}</span>
        <h2>{pick(hub.challenge.title)}</h2>
        <article className="ird-worked-card">
          <div className="ird-worked-head"><div className="ird-problem-number">C</div><div><span className="eyebrow">{hub.challenge.difficulty}</span><h3>{en?"Challenge Problem":"Soal Tantangan"}</h3></div></div>
          <div className="ird-worked-prompt"><RichMath>{pick(hub.challenge.problem)}</RichMath></div>
          <details className="ird-proof"><summary>{en?"Open Hint":"Buka Petunjuk"}</summary><div className="ird-proof-body"><RichMath>{pick(hub.challenge.hint)}</RichMath></div></details>
          <details className="ird-worked-solution">
            <summary>{en?"Open Complete Solution":"Buka Solusi"}</summary>
            <div className="ird-worked-solution-body">
              <AcademicSolution
                idea={pick(hub.challenge.hint)}
                steps={hub.challenge.solution.map((step)=>pick(step))}
              />
            </div>
          </details>
        </article>
      </section>

      <section className="next-learning-block textbook-next">
        <div><span className="eyebrow">{en?"Navigation":"Navigasi"}</span><h2>{en?"Practice and Challenge":"Latihan dan Challenge"}</h2></div>
        <div className="actions"><a className="btn primary" href="#olympiad-problems">{en?"Practice Now":"Kerjakan Soal"}</a><a className="btn secondary" href="#olympiad-challenge">Challenge</a></div>
      </section>
    </RiemannHubShell>
  );
}
