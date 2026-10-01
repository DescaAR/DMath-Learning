import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { learningTracks, materials, subjects } from "@/data/site-data";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "DMath Learning",
    description: "Belajar matematika dari konsep hingga problem solving: materi lengkap, pembuktian, visualisasi, bank soal, olimpiade, ON-MIPA, dan matematika kuliah.",
    path: "/",
    keywords: ["platform belajar matematika Indonesia", "belajar matematika online"],
  }),
  title: { absolute: "DMath Learning — Belajar Matematika Lebih Dalam" },
};

export default function Home() {
  const featured = materials.slice(0, 8);

  return (
    <>
      <section className="hero home-hero-v3">
        <div className="container hero-inner">
          <span className="eyebrow">DMath Learning · Think Deeper, Solve Better.</span>
          <h1>Bangun Pemahaman.<br />Asah Cara Berpikir.</h1>
          <p>
            Belajar matematika sebagai struktur yang utuh: intuisi, definisi formal, teorema,
            pembuktian, visualisasi, worked examples, latihan bertahap, dan bank soal.
          </p>
          <div className="actions">
            <Link className="btn primary" href="/materi">Mulai dari Materi</Link>
            <Link className="btn secondary" href="/bank-soal">Jelajahi Bank Soal</Link>
            <Link className="text-link" href="/olimpiade">Jalur Olimpiade →</Link>
          </div>

          <div className="home-proof-strip">
            <div><strong>13</strong><span>materi awal published</span></div>
            <div><strong>100</strong><span>soal Basis & Dimensi</span></div>
            <div><strong>30</strong><span>latihan terkurasi</span></div>
            <div><strong>KaTeX</strong><span>rumus terformat profesional</span></div>
          </div>

          <div className="hero-note">
            <strong>Concept → Intuition → Formalization → Example → Practice → Problem Solving → Mastery</strong>
            <span>Setiap materi dibangun untuk benar-benar dipelajari, bukan sekadar dibaca.</span>
          </div>
        </div>
      </section>

      <section className="section" id="jalur">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Pilih jalur belajar</span>
              <h2>Dari fondasi sekolah hingga matematika kompetisi mahasiswa.</h2>
            </div>
            <p>
              Jalur reguler dan kompetisi dipisahkan agar kedalaman teori, formalitas pembuktian,
              dan gaya problem solving sesuai dengan tujuan pengguna.
            </p>
          </div>
          <div className="grid tracks-grid">
            {learningTracks.map((track, index) => (
              <Link className="card track-card" href={track.href} key={track.title}>
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <span className="link">Lihat jalur →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Materi published</span>
              <h2>Bab digital yang berisi teori, bukti, contoh, dan visualisasi.</h2>
            </div>
            <Link href="/materi" className="text-link">Lihat semua 13 materi →</Link>
          </div>

          <div className="grid material-grid home-material-grid">
            {featured.map((item) => (
              <article className="card material-card" key={item.title}>
                <div className="card-top">
                  <span>{item.level} · {item.subject}</span>
                  <StatusBadge status={item.status} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link className="link" href={item.href}>Pelajari materi →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Gold standard chapter</span>
            <h2>Basis dan Dimensi dibuat seperti bab buku digital serius.</h2>
            <p>
              Materi mencakup motivasi, peta konsep, kombinasi linear, span, bebas linear,
              basis, koordinat, dimensi, basis subruang, ekstensi basis, ruang baris-kolom,
              rank–nullity, sebelas teorema dengan pembuktian, worked examples, dan ringkasan.
            </p>
            <div className="actions">
              <Link className="btn primary" href="/kuliah/aljabar-linear/basis-dan-dimensi">Buka Materi Lengkap</Link>
              <Link className="btn secondary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">Buka 100 Soal</Link>
            </div>
          </div>
          <div className="feature-card gold-standard-card">
            <span className="eyebrow cyan">Aljabar Linear · Kuliah</span>
            <h3>Basis & Dimensi</h3>
            <ul className="clean-list">
              <li>11 hasil utama + pembuktian bertahap</li>
              <li>Visualisasi basis pada bidang koordinat</li>
              <li>Worked examples dasar–lanjut</li>
              <li>30 latihan terkurasi satu-per-satu</li>
              <li>100 bank soal dengan 5 tingkat kesulitan</li>
              <li>Detail pembahasan per soal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Bidang matematika</span>
              <h2>Struktur konten siap berkembang tanpa menjadi kumpulan artikel acak.</h2>
            </div>
          </div>
          <div className="subjects">{subjects.map((subject) => <span key={subject}>{subject}</span>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <div>
            <span className="eyebrow">Belajar lebih terarah</span>
            <h2>Materi untuk memahami, soal untuk menguji.</h2>
            <p>
              Setelah membaca materi, lanjutkan ke latihan terkurasi atau bank soal agar konsep
              benar-benar menjadi kemampuan problem solving.
            </p>
          </div>
          <div className="actions callout-actions">
            <Link className="btn primary" href="/materi">Buka Materi</Link>
            <Link className="btn secondary" href="/bank-soal">Bank Soal</Link>
          </div>
        </div>
      </section>
    </>
  );
}
