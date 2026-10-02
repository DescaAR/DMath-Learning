"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dmath-theme");
      const nextDark = saved === "dark";
      setDark(nextDark);
      document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    } catch {}
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    try {
      localStorage.setItem("dmath-theme", nextDark ? "dark" : "light");
    } catch {}
  }

  return (
    <header className="site-header" data-no-translate>
      <div className="container nav">
        <Link href="/" className="brand" aria-label={language === "en" ? "DMath Learning — Home" : "DMath Learning — Beranda"}>
          <Image src="/brand/logo-symbol.webp" alt="" width={42} height={42} priority className="brand-logo" />
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.tagline}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label={language === "en" ? "Main navigation" : "Navigasi utama"}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}>{t(item.label)}</Link>
          ))}
          <Link href="/search" className="nav-search" aria-label={language === "en" ? "Search all content" : "Cari seluruh konten"}>
            {t("Cari")}
          </Link>
        </nav>

        <div className="nav-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            title={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            data-no-translate
          >
            <span aria-hidden="true">◎</span>
            <strong>{language === "id" ? "ID" : "EN"}</strong>
          </button>

          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={language === "en" ? "Switch theme" : "Ganti tema"}>
            {dark ? "☀" : "◐"}
          </button>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={language === "en" ? "Open menu" : "Buka menu"}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label={language === "en" ? "Mobile navigation" : "Navigasi mobile"}>
          <div className="container mobile-nav-grid">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{t(item.label)}</Link>
            ))}
            <Link href="/search" onClick={() => setOpen(false)}>{t("Cari")}</Link>
            <button className="mobile-language-toggle" type="button" onClick={toggleLanguage} data-no-translate>
              {language === "id" ? "English" : "Bahasa Indonesia"}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
