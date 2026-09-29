import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-branding">
          <div className="brand footer-brand">
            <Image src="/brand/logo-symbol.webp" alt="" width={48} height={48} className="brand-logo" />
            <span className="brand-copy">
              <strong>{siteConfig.name}</strong>
              <small>{siteConfig.tagline}</small>
            </span>
          </div>
          <p>
            Platform pembelajaran matematika yang berfokus pada pemahaman konsep,
            pengembangan penalaran, dan kemampuan problem solving.
          </p>
        </div>
        <div>
          <h3>Jelajahi</h3>
          <div className="footer-links">
            <Link href="/belajar">Belajar</Link>
            <Link href="/materi">Materi</Link>
            <Link href="/bank-soal">Bank Soal</Link>
            <Link href="/olimpiade">Olimpiade</Link>
          </div>
        </div>
        <div>
          <h3>DMath Learning</h3>
          <div className="footer-links">
            <Link href="/bimbingan">Bimbingan</Link>
            <Link href="/riset">Riset</Link>
            <Link href="/tentang">Tentang</Link>
            <Link href="/search">Search</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} DMath Learning.</span>
        <span>Think Deeper, Solve Better.</span>
      </div>
    </footer>
  );
}
