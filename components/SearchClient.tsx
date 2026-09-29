"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { searchIndex } from "@/data/site-data";

export function SearchClient() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Semua");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return searchIndex.filter((item) => {
      const matchesType = type === "Semua" || item.type === type;
      const haystack = (item.title + " " + item.description + " " + item.meta).toLowerCase();
      return matchesType && (!q || haystack.includes(q));
    });
  }, [query, type]);

  return (
    <div className="search-shell">
      <div className="search-controls">
        <label>
          <span>Cari</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Basis, kombinatorika, ON-MIPA..." />
        </label>
        <label>
          <span>Tipe</span>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option>Semua</option>
            <option>Materi</option>
            <option>Halaman</option>
          </select>
        </label>
      </div>
      <p className="result-count">{results.length} hasil</p>
      <div className="search-results">
        {results.map((item) => (
          <Link href={item.href} className="search-result" key={item.type + item.title}>
            <span className="result-type">{item.type}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <small>{item.meta}</small>
            </div>
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
