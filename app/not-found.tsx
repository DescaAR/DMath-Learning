import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <span className="eyebrow">404</span>
        <h1>Halaman belum tersedia.</h1>
        <p>Konten ini mungkin masih berada dalam roadmap DMath Learning.</p>
        <div className="actions">
          <Link className="btn primary" href="/">Kembali ke Beranda</Link>
          <Link className="btn secondary" href="/materi">Lihat Materi</Link>
        </div>
      </div>
    </section>
  );
}
