"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";

export function SiteFooter() {
  const { language, t } = useLanguage();

  return (
    <footer className="site-footer" data-no-translate>
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
            {language === "en"
              ? "A mathematics learning platform focused on conceptual understanding, reasoning, and problem-solving ability."
              : "Platform pembelajaran matematika yang berfokus pada pemahaman konsep, pengembangan penalaran, dan kemampuan problem solving."}
          </p>
        </div>
        <div>
          <h3>{language === "en" ? "Explore" : "Jelajahi"}</h3>
          <div className="footer-links">
            <Link href="/materi">{t("Materi")}</Link>
            <Link href="/latihan-soal">{t("Latihan Soal")}</Link>
            <Link href="/bank-soal">{t("Bank Soal")}</Link>
            <Link href="/olimpiade">{t("Olimpiade")}</Link>
          </div>
        </div>
        <div>
          <h3>DMath Learning</h3>
          <div className="footer-links">
            <Link href="/tentang">{t("Tentang")}</Link>
            <Link href="/sumber-belajar-lain">{t("Sumber Belajar Lain")}</Link>
            <Link href="/search">{language === "en" ? "Search" : "Cari"}</Link>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
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
