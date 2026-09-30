import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { learningTracks, subjects } from "@/data/site-data";

export const metadata: Metadata = { title: "Belajar" };

export default function BelajarPage() {
  return (
    <>
      <PageHero eyebrow="Jalur belajar" title="Mulai dari tujuanmu, bukan dari artikel acak." description="Pilih jenjang, jalur kompetisi, atau bidang matematika. Struktur konten dirancang agar setiap bab memiliki prasyarat dan arah belajar berikutnya." />
      <section className="section">
        <div className="container">
          <div className="grid tracks-grid">
            {learningTracks.map((track) => (
              <a className="card track-card" href={track.href} key={track.title}>
                <span className="card-index">{track.title.includes("Olimpiade") || track.title.includes("ON-MIPA") ? "Kompetisi" : "Reguler"}</span>
                <h2>{track.title}</h2>
                <p>{track.description}</p>
                <span className="link">Buka jalur →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Berdasarkan bidang</span><h2>Jelajahi hubungan antarkonsep.</h2></div></div>
          <div className="subjects">{subjects.map((subject) => <span key={subject}>{subject}</span>)}</div>
        </div>
      </section>
    </>
  );
}
