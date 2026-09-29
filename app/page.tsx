const tracks = [
  ["Matematika SD","Fondasi numerasi, geometri, data, dan pemecahan masalah."],
  ["Matematika SMP","Aljabar, geometri, peluang, statistika, dan penalaran."],
  ["Matematika SMA","Fungsi, trigonometri, kalkulus, matriks, dan kombinatorika."],
  ["Matematika Kuliah","Kalkulus, aljabar linear, analisis, graf, topologi, dan lainnya."],
  ["Olimpiade SD","Aritmetika kreatif, pola, logika, dan strategi problem solving."],
  ["Olimpiade SMP","Aljabar, teori bilangan, kombinatorika, dan geometri."],
  ["Olimpiade SMA","Persiapan kompetisi dengan soal nonrutin dan strategi mendalam."],
  ["ON-MIPA","Analisis Real, Analisis Kompleks, Aljabar, dan Kombinatorika."]
];

const subjects = ["Aritmetika","Aljabar","Teori Bilangan","Kombinatorika","Geometri","Trigonometri","Kalkulus","Aljabar Linear","Analisis Real","Analisis Kompleks","Struktur Aljabar","Statistika","Peluang","Matematika Diskrit","Teori Graf","Topologi","Persamaan Diferensial","Optimisasi"];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="eyebrow">Think Deeper, Solve Better.</div>
          <h1>Bangun Pemahaman.<br/>Asah Cara Berpikir.</h1>
          <p>Pelajari matematika dari konsep dasar hingga teori tingkat lanjut melalui materi lengkap, latihan bertahap, bank soal, dan pembahasan mendalam.</p>
          <div className="actions">
            <a className="btn primary" href="#belajar">Mulai Belajar</a>
            <a className="btn secondary" href="#bank-soal">Jelajahi Bank Soal</a>
          </div>
        </div>
      </section>

      <section id="belajar" className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Pilih jalur belajar</span><h2>Dari sekolah hingga matematika tingkat lanjut</h2></div>
            <p>Struktur belajar dipisahkan berdasarkan jenjang dan tujuan agar navigasi tetap jelas saat konten terus berkembang.</p>
          </div>
          <div className="grid">{tracks.map(([title,desc])=><article className="card" key={title}><span className="card-index">→</span><h3>{title}</h3><p>{desc}</p><span className="link">Lihat kurikulum</span></article>)}</div>
        </div>
      </section>

      <section id="materi" className="section soft">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Topik utama</span><h2>Matematika sebagai ekosistem belajar</h2></div></div>
          <div className="subjects">{subjects.map(s=><span key={s}>{s}</span>)}</div>
        </div>
      </section>

      <section id="bank-soal" className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Bank soal</span>
            <h2>Latihan terstruktur, bukan kumpulan soal acak.</h2>
            <p>DMath Learning dirancang untuk memiliki latihan per soal dengan hint dan pembahasan, serta bank soal besar per materi yang dapat difilter berdasarkan tingkat kesulitan dan tipe soal.</p>
          </div>
          <div className="feature-card">
            <strong>Gold Standard awal</strong>
            <h3>Basis dan Dimensi</h3>
            <p>Materi universitas dengan definisi formal, teorema, contoh, latihan bertahap, dan bank soal yang dikembangkan menuju 100 soal berkualitas.</p>
            <span className="status">Sedang dikembangkan</span>
          </div>
        </div>
      </section>

      <section id="olimpiade" className="section soft">
        <div className="container split">
          <div><span className="eyebrow">Olimpiade</span><h2>Persiapan dari SD hingga ON-MIPA.</h2></div>
          <p>Jalur kompetisi dipisahkan dari kurikulum reguler dan berfokus pada problem solving nonrutin, strategi, hint bertahap, dan pembahasan formal.</p>
        </div>
      </section>

      <section id="bimbingan" className="section">
        <div className="container callout">
          <div><span className="eyebrow">Bimbingan DMath</span><h2>Ingin belajar lebih terarah?</h2><p>Pendampingan matematika yang berfokus pada pemahaman konsep, penalaran, dan problem solving.</p></div>
          <a className="btn primary" href="mailto:hello@dmathlearning.id">Hubungi DMath</a>
        </div>
      </section>
    </>
  );
}
