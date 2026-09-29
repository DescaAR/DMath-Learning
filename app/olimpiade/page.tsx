import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Olimpiade" };

const tracks = [
  { id: "sd", title: "Olimpiade SD", fields: "Aritmetika · Teori Bilangan Dasar · Kombinatorika Dasar · Geometri · Logika" },
  { id: "smp", title: "Olimpiade SMP", fields: "Aljabar · Teori Bilangan · Kombinatorika · Geometri · Strategi Problem Solving" },
  { id: "sma", title: "Olimpiade SMA", fields: "Aljabar · Number Theory · Combinatorics · Geometry · Problem Solving Methods" },
  { id: "onmipa", title: "Olimpiade Mahasiswa / ON-MIPA", fields: "Analisis Real · Analisis Kompleks · Aljabar Linear · Struktur Aljabar · Kombinatorika" },
];

export default function OlimpiadePage() {
  return (
    <>
      <PageHero
        eyebrow="Matematika kompetisi"
        title="Jalur olimpiade yang terpisah dari kurikulum reguler."
        description="Fokus pada problem solving nonrutin, strategi, hint bertahap, dan pembahasan yang menjelaskan alasan di balik solusi."
      />
      <section className="section">
        <div className="container">
          <div className="grid two-col-grid">
            {tracks.map((track) => (
              <article className="card olympiad-card" id={track.id} key={track.id}>
                <span className="card-index">Roadmap</span>
                <h2>{track.title}</h2>
                <p>{track.fields}</p>
                <div className="mini-roadmap">
                  <span>Syllabus</span>
                  <span>Roadmap</span>
                  <span>Curated Problems</span>
                  <span>Bank Soal</span>
                  <span>Pembahasan</span>
                  <span>Challenge</span>
                </div>
                <span className="muted-link">Konten dikembangkan bertahap</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
