import Link from "next/link";
import { learningTracks, materials, subjects } from "@/data/site-data";
import { StatusBadge } from "@/components/StatusBadge";

export default function Home() {
  const featured = materials.filter((item) => item.status !== "planned").slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">DMath Learning · Think Deeper, Solve Better.</span>
          <h1>Bangun Pemahaman.<br />Asah Cara Berpikir.</h1>
          <p>
            Pelajari matematika dari konsep dasar hingga teori tingkat lanjut melalui materi lengkap,
            latihan bertahap, bank soal, dan pembahasan mendalam.
          </p>
          <div className="actions">
            <Link className="btn primary" href="/belajar">Mulai Belajar</Link>
            <Link className="btn secondary" href="/bank-soal">Jelajahi Bank Soal</Link>
            <Link className="text-link" href="/olimpiade">Lihat Jalur Olimpiade →</Link>
          </div>
          <div className="hero-note">
            <strong>Concept → Intuition → Formalization → Example → Practice → Problem Solving → Mastery</strong>
            <span>Struktur belajar DMath dirancang agar pengguna tidak berhenti pada definisi.</span>
          </div>
        </div>
      </section>

      <section className="section" id="jalur">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Pilih jalur belajar</span><h2>Dari fondasi hingga kompetisi mahasiswa.</h2></div>
            <p>Jalur reguler dan kompetisi dipisahkan agar tujuan belajar, kedalaman formalitas, dan tipe soal tetap jelas.</p>
          </div>
          <div className="grid tracks-grid">
            {learningTracks.map((track, index) => (
              <Link className="card track-card" href={track.href} key={track.title}>
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <span className="link">Lihat kurikulum →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Topik utama</span><h2>Satu ekosistem matematika yang saling terhubung.</h2></div>
          </div>
          <div className="subjects">{subjects.map((subject) => <span key={subject}>{subject}</span>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Konten awal</span><h2>Dibangun bertahap, statusnya transparan.</h2></div>
            <Link href="/materi" className="text-link">Lihat seluruh roadmap →</Link>
          </div>
          <div className="grid material-grid">
            {featured.map((item) => (
              <article className="card material-card" key={item.title}>
                <div className="card-top"><span>{item.level} · {item.subject}</span><StatusBadge status={item.status} /></div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                {item.href ? <Link className="link" href={item.href}>Pelajari →</Link> : <span className="muted-link">Sedang disusun</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="eyebrow">Gold standard</span>
            <h2>Basis dan Dimensi sebagai contoh bab lengkap.</h2>
            <p>
              Bab ini menjadi prototipe struktur materi universitas: prasyarat, tujuan, definisi,
              teorema, pembuktian, contoh, latihan satu per satu, bank soal, dan keterhubungan antarkonsep.
            </p>
            <div className="actions">
              <Link className="btn primary" href="/kuliah/aljabar-linear/basis-dan-dimensi">Buka Bab</Link>
              <Link className="btn secondary" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">25 Soal Published</Link>
            </div>
          </div>
          <div className="feature-card">
            <span className="eyebrow cyan">Aljabar Linear · Kuliah</span>
            <h3>Basis & Dimensi</h3>
            <ul className="clean-list">
              <li>Kombinasi linear dan span</li>
              <li>Bebas linear dan basis</li>
              <li>Koordinat dan dimensi</li>
              <li>Basis subruang dan ekstensi basis</li>
              <li>Hubungan rank dan dimensi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <div>
            <span className="eyebrow">Bimbingan</span>
            <h2>Ingin belajar lebih terarah?</h2>
            <p>Pendampingan berfokus pada pemahaman konsep, penalaran, pembuktian, dan problem solving.</p>
          </div>
          <Link className="btn primary" href="/bimbingan">Lihat Program Bimbingan</Link>
        </div>
      </section>
    </>
  );
}
