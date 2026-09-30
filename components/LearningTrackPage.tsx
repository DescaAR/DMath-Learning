"use client";

import Link from "next/link";
import type { LearningTrackPageData, LocalText } from "@/data/learning-track-pages";
import { deepMaterials } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { useLanguage } from "@/components/LanguageProvider";

export function LearningTrackPage({ track }: { track: LearningTrackPageData }) {
  const { language } = useLanguage();
  const en = language === "en";
  const pick = (text: LocalText) => en ? text.en : text.id;

  const published = track.publishedMaterials
    .map((slug) => deepMaterials.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="track-detail-page" data-no-translate>
      <section className="track-detail-hero">
        <div className="container">
          <div className="track-detail-breadcrumb">
            <Link href="/belajar">{en ? "Learning Tracks" : "Jalur Belajar"}</Link>
            <span>/</span>
            <strong>{pick(track.title)}</strong>
          </div>

          <div className="track-detail-hero-grid">
            <div>
              <span className="eyebrow">{pick(track.eyebrow)}</span>
              <h1>{pick(track.title)}</h1>
              <p className="track-detail-intro">{pick(track.intro)}</p>
              <div className="actions">
                <a className="btn primary" href="#kurikulum">{en ? "Explore Curriculum" : "Lihat Kurikulum"}</a>
                <a className="btn secondary" href="#roadmap">{en ? "View Roadmap" : "Lihat Roadmap"}</a>
              </div>
            </div>

            <aside className="track-detail-summary">
              <div>
                <span>{en ? "For whom?" : "Untuk siapa?"}</span>
                <p>{pick(track.audience)}</p>
              </div>
              <div>
                <span>{en ? "Main goal" : "Tujuan utama"}</span>
                <p>{pick(track.goal)}</p>
              </div>
              <div>
                <span>{en ? "Learning approach" : "Pendekatan belajar"}</span>
                <p>{pick(track.philosophy)}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="kurikulum">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{en ? "Curriculum Map" : "Peta Kurikulum"}</span>
              <h2>{en ? "What you will learn in this track." : "Apa saja yang dipelajari di jalur ini."}</h2>
            </div>
            <p>
              {en
                ? "The curriculum is grouped by mathematical field so you can see the structure before opening individual chapters."
                : "Kurikulum dikelompokkan berdasarkan bidang agar struktur belajarnya terlihat sebelum masuk ke bab per bab."}
            </p>
          </div>

          <div className="track-subject-grid">
            {track.subjects.map((subject, index) => (
              <article className="track-subject-card" key={pick(subject.name)}>
                <span className="track-subject-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{pick(subject.name)}</h3>
                <p>{pick(subject.description)}</p>
                <div className="track-topic-chips">
                  {subject.topics.map((topic) => <span key={pick(topic)}>{pick(topic)}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="roadmap">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{en ? "Roadmap" : "Roadmap Belajar"}</span>
              <h2>{en ? "A sequence that makes the progression clear." : "Urutan belajar yang membuat progresnya jelas."}</h2>
            </div>
          </div>

          <div className="track-roadmap">
            {track.roadmap.map((stage, index) => (
              <article className="track-roadmap-step" key={pick(stage.title)}>
                <div className="track-roadmap-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <span className="eyebrow">{pick(stage.label)}</span>
                  <h3>{pick(stage.title)}</h3>
                  <p>{pick(stage.description)}</p>
                  <div className="track-topic-chips">
                    {stage.topics.map((topic) => <span key={pick(topic)}>{pick(topic)}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container track-skills-layout">
          <div>
            <span className="eyebrow">{en ? "Skills Built" : "Kemampuan yang Dibangun"}</span>
            <h2>{en ? "The track develops more than topic coverage." : "Jalur ini tidak hanya mengejar selesai materi."}</h2>
            <p>
              {en
                ? "Each field contributes a different way of thinking. Together they develop mathematical maturity appropriate to the level."
                : "Setiap bidang melatih cara berpikir yang berbeda. Gabungannya membangun kematangan matematis sesuai jenjang."}
            </p>
          </div>
          <div className="track-skill-list">
            {track.skills.map((skill, index) => (
              <div key={pick(skill)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{pick(skill)}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="materi-tersedia">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{en ? "Available Now" : "Materi yang Sudah Tersedia"}</span>
              <h2>{en ? "Start with published chapters." : "Mulai dari bab yang sudah dipublikasikan."}</h2>
            </div>
            <Link href="/materi" className="text-link">
              {en ? "Browse all materials →" : "Lihat seluruh materi →"}
            </Link>
          </div>

          {published.length > 0 ? (
            <div className="grid material-grid track-published-grid">
              {published.map((material) => {
                const localized = en ? (deepMaterialEnMap[material.slug] ?? material) : material;
                return (
                  <article className="card material-card" key={material.slug}>
                    <div className="card-top">
                      <span>{localized.level} · {localized.subject}</span>
                      <span className="status-badge published">{en ? "Published" : "Published"}</span>
                    </div>
                    <h3>{localized.title}</h3>
                    <p>{localized.summary}</p>
                    <Link className="link" href={"/materi/" + material.slug}>
                      {en ? "Open chapter →" : "Buka materi →"}
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="track-empty-published">
              <span className="eyebrow">{en ? "In Development" : "Sedang Dikembangkan"}</span>
              <h3>{en ? "The curriculum page is ready; full chapters are being added progressively." : "Peta jalurnya sudah siap; bab lengkap akan ditambahkan bertahap."}</h3>
              <p>
                {en
                  ? "You can already use the roadmap as a study sequence while waiting for the full digital chapters."
                  : "Roadmap di atas sudah bisa digunakan sebagai urutan belajar sambil menunggu bab digital lengkapnya."}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container track-detail-cta">
          <div>
            <span className="eyebrow">{en ? "Continue Learning" : "Lanjut Belajar"}</span>
            <h2>{en ? "Choose a chapter, practice, then return to the roadmap." : "Pilih bab, latihan, lalu kembali ke roadmap."}</h2>
            <p>
              {en
                ? "Use the track page as your map. Individual material pages contain theory, proof, visualizations, examples, exploration projects, and guided practice."
                : "Gunakan halaman jalur ini sebagai peta. Halaman materi berisi teori, bukti, visualisasi, contoh, proyek eksplorasi, dan latihan bertingkat."}
            </p>
          </div>
          <div className="actions">
            <Link className="btn primary" href="/materi">{en ? "Open Materials" : "Buka Materi"}</Link>
            <Link className="btn secondary" href="/bank-soal">{en ? "Open Problem Bank" : "Buka Bank Soal"}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
