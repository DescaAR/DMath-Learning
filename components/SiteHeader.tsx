"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dmath-theme");
      const nextDark = saved === "dark";
      setDark(nextDark);
      document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    } catch {}
  }, []);

  useEffect(() => setOpen(false), [pathname]);

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
        <Link href="/" className="brand" aria-label="DMath Learning — Beranda">
          <Image src={siteConfig.basePath + "/brand/logo-symbol.webp"} alt="" width={42} height={42} priority className="brand-logo" />
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.tagline}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={"site-nav-link"+(pathname===item.href||pathname.startsWith(item.href+"/")?" is-active":"")} aria-current={pathname===item.href||pathname.startsWith(item.href+"/")?"page":undefined}>{item.label}</Link>
          ))}
          <Link href="/search" className="nav-search" aria-label="Cari soal kompetisi">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg><span>Cari</span>
          </Link>
        </nav>

        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Ganti tema">
            {dark ? <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg> : <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"/></svg>}
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
            <Link href="/search" onClick={() => setOpen(false)}>Cari</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
