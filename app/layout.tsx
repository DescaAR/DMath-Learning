import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DMath Learning — Think Deeper, Solve Better.",
  description: "Platform pembelajaran matematika terstruktur dari tingkat sekolah hingga universitas dan olimpiade.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <header className="site-header">
          <div className="container nav">
            <a href="/" className="brand" aria-label="DMath Learning">
              <span className="brand-mark">D</span>
              <span>DMath Learning</span>
            </a>
            <nav aria-label="Navigasi utama">
              <a href="#belajar">Belajar</a>
              <a href="#materi">Materi</a>
              <a href="#bank-soal">Bank Soal</a>
              <a href="#olimpiade">Olimpiade</a>
              <a href="#bimbingan">Bimbingan</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="container footer-grid">
            <div>
              <div className="brand footer-brand"><span className="brand-mark">D</span><span>DMath Learning</span></div>
              <p>Platform pembelajaran matematika untuk memahami konsep, membangun penalaran, dan mengasah problem solving.</p>
            </div>
            <div><strong>Think Deeper, Solve Better.</strong><p>© {new Date().getFullYear()} DMath Learning.</p></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
