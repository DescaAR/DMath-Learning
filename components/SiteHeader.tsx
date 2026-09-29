"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

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
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="DMath Learning — Beranda">
          <Image src="/brand/logo-symbol.webp" alt="" width={42} height={42} priority className="brand-logo" />
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.tagline}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {siteConfig.nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link href="/search" className="nav-search" aria-label="Cari konten">Cari</Link>
        </nav>

        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Ganti tema">
            {dark ? "☀" : "◐"}
          </button>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Buka menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Navigasi mobile">
          <div className="container mobile-nav-grid">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <Link href="/search" onClick={() => setOpen(false)}>Search</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
