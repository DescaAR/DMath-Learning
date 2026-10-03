"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollSpyTocSection = {
  id: string;
  label: string;
};

export function ScrollSpyToc({
  sections,
  title = "Isi Materi",
  progress,
  progressLabel = "Progres membaca",
  className = "",
}: {
  sections: readonly ScrollSpyTocSection[];
  title?: string;
  progress?: number;
  progressLabel?: string;
  className?: string;
}) {
  const sectionKey = sections.map((section) => section.id).join("|");
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const tocRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ids = sectionKey ? sectionKey.split("|") : [];

    const updateActive = () => {
      if (!ids.length) return;

      const triggerY = window.scrollY + Math.min(170, window.innerHeight * 0.28);
      let next = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= triggerY) next = id;
        else break;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        next = ids[ids.length - 1];
      }

      setActive((current) => (current === next ? current : next));
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sectionKey]);

  useEffect(() => {
    const toc = tocRef.current;
    if (!toc || !active) return;

    const link = Array.from(toc.querySelectorAll<HTMLAnchorElement>("a[data-section-id]"))
      .find((item) => item.dataset.sectionId === active);
    if (!link) return;

    const tocRect = toc.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const topPadding = progress === undefined ? 46 : 82;
    const bottomPadding = 14;

    if (linkRect.top < tocRect.top + topPadding) {
      toc.scrollTo({
        top: Math.max(0, toc.scrollTop + linkRect.top - tocRect.top - topPadding),
        behavior: "smooth",
      });
    } else if (linkRect.bottom > tocRect.bottom - bottomPadding) {
      toc.scrollTo({
        top: toc.scrollTop + linkRect.bottom - tocRect.bottom + bottomPadding,
        behavior: "smooth",
      });
    }
  }, [active, progress]);

  return (
    <aside ref={tocRef} className={"toc material-toc textbook-toc ird-toc " + className}>
      {progress !== undefined && (
        <div className="toc-progress-mini">
          <span>{progressLabel}</span>
          <strong>{Math.round(progress)}%</strong>
        </div>
      )}
      <strong>{title}</strong>
      {sections.map((section, index) => (
        <a
          href={"#" + section.id}
          className={active === section.id ? "active" : ""}
          data-section-id={section.id}
          aria-current={active === section.id ? "location" : undefined}
          onClick={() => setActive(section.id)}
          key={section.id}
        >
          <span className="toc-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="toc-label">{section.label}</span>
        </a>
      ))}
    </aside>
  );
}
