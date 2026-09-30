"use client";

import { useMemo, useState } from "react";
import type { DeepMaterial } from "@/data/deep-materials";
import { formalChapterContent, type FormalBlockKind } from "@/data/formal-chapter-content";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

type Entry = {
  type: "notation" | "definition" | "lemma" | "proposition" | "theorem" | "corollary" | "example";
  title: string;
  description: string;
  href: string;
};

export function ConceptIndex({ material }: { material: DeepMaterial }) {
  const { language } = useLanguage();
  const en = language === "en";
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"all" | Entry["type"]>("all");

  const formal = formalChapterContent[material.slug];
  const entries: Entry[] = useMemo(() => [
    ...material.notation.map((item) => ({
      type: "notation" as const,
      title: item.symbol,
      description: item.meaning,
      href: "#notasi",
    })),
    ...material.definitions.map((item) => ({
      type: "definition" as const,
      title: item.title,
      description: item.body,
      href: "#definisi",
    })),
    ...material.theorems.map((item) => ({
      type: "theorem" as const,
      title: item.title,
      description: item.statement,
      href: "#teorema",
    })),
    ...material.examples.map((item) => ({
      type: "example" as const,
      title: item.title,
      description: item.problem,
      href: "#contoh",
    })),
    ...(formal?.blocks.map((item) => ({
      type: item.kind as FormalBlockKind,
      title: en ? item.title.en : item.title.id,
      description: en ? item.statement.en : item.statement.id,
      href: "#struktur-formal",
    })) ?? []),
    ...(formal?.examples.map((item) => ({
      type: "example" as const,
      title: en ? item.title.en : item.title.id,
      description: en ? item.problem.en : item.problem.id,
      href: "#contoh-detail",
    })) ?? []),
  ], [material, formal, en]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((entry) => {
      const matchesType = type === "all" || entry.type === type;
      const haystack = (entry.title + " " + entry.description).toLowerCase();
      return matchesType && (!q || haystack.includes(q));
    });
  }, [entries, query, type]);

  const labels: Record<Entry["type"], string> = {
    notation: en ? "Notation" : "Notasi",
    definition: en ? "Definition" : "Definisi",
    lemma: en ? "Lemma" : "Lemma",
    proposition: en ? "Proposition" : "Proposisi",
    theorem: en ? "Theorem" : "Teorema",
    corollary: en ? "Corollary" : "Akibat",
    example: en ? "Example" : "Contoh",
  };

  return (
    <section className="concept-index" id="indeks-konsep">
      <div className="concept-index-head">
        <div>
          <span className="eyebrow">{en ? "Concept Index" : "Indeks Konsep"}</span>
          <h2>{en ? "Find a definition, theorem, symbol, or example quickly." : "Temukan definisi, teorema, simbol, atau contoh dengan cepat."}</h2>
        </div>
        <div className="concept-index-count">
          <strong>{filtered.length}</strong>
          <span>{en ? "entries" : "entri"}</span>
        </div>
      </div>

      <div className="concept-index-tools">
        <div className="concept-index-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={en ? "Search inside this chapter..." : "Cari di dalam bab ini..."}
            aria-label={en ? "Search concept index" : "Cari indeks konsep"}
          />
          {query && <button type="button" onClick={() => setQuery("")}>×</button>}
        </div>

        <div className="concept-index-chips">
          {(["all","notation","definition","lemma","proposition","theorem","corollary","example"] as const).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setType(item)}
              className={type === item ? "active" : ""}
            >
              {item === "all" ? (en ? "All" : "Semua") : labels[item]}
            </button>
          ))}
        </div>
      </div>

      <div className="concept-index-list">
        {filtered.map((entry, index) => (
          <a className="concept-index-row" href={entry.href} key={entry.type + "-" + index + "-" + entry.title}>
            <span className={"concept-index-type " + entry.type}>{labels[entry.type]}</span>
            <div>
              <strong><RichMath>{entry.title}</RichMath></strong>
              <p><RichMath>{entry.description}</RichMath></p>
            </div>
            <span className="concept-index-arrow">→</span>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="concept-index-empty">
          {en ? "No chapter entry matches this search." : "Tidak ada entri bab yang cocok dengan pencarian ini."}
        </div>
      )}
    </section>
  );
}
