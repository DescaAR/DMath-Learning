"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  fullSearchIndex,
  type SearchEntry,
  type SearchKind,
  type SearchLevel,
  type SearchTrack,
  type SearchDifficulty,
} from "@/data/search-index";
import { useLanguage } from "@/components/LanguageProvider";
import { RichMath } from "@/components/RichMath";

type LevelFilter = "Semua" | Exclude<SearchLevel, "Umum">;
type TrackFilter = "Semua" | "Reguler" | "Olimpiade";
type KindFilter = "Semua" | SearchKind;
type SubjectFilter = "Semua" | string;
type DifficultyFilter = "Semua" | Exclude<SearchDifficulty, "Umum">;

const LEVELS: LevelFilter[] = ["Semua", "SD", "SMP", "SMA", "Kuliah"];
const TRACKS: TrackFilter[] = ["Semua", "Reguler", "Olimpiade"];
const KINDS: KindFilter[] = ["Semua", "Materi", "Soal", "Teorema", "Definisi", "Contoh", "Halaman"];
const DIFFICULTIES: DifficultyFilter[] = ["Semua", "Dasar", "Menengah", "Sulit", "Sangat Sulit", "Challenge"];
const SUBJECTS: SubjectFilter[] = [
  "Semua",
  ...Array.from(
    new Set(
      fullSearchIndex
        .map((item) => item.subject)
        .filter((subject) => subject && subject !== "Umum")
    )
  ).sort((a, b) => a.localeCompare(b, "id-ID")),
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("id-ID")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function trigrams(value: string) {
  const text = "  " + normalize(value) + "  ";
  const grams = new Set<string>();
  for (let index = 0; index < text.length - 2; index += 1) {
    grams.add(text.slice(index, index + 3));
  }
  return grams;
}

function dice(a: string, b: string) {
  if (!a || !b) return 0;
  const left = trigrams(a);
  const right = trigrams(b);
  let overlap = 0;
  left.forEach((gram) => {
    if (right.has(gram)) overlap += 1;
  });
  return (2 * overlap) / Math.max(1, left.size + right.size);
}

function fuzzyScore(query: string, entry: SearchEntry, language: "id" | "en") {
  const q = normalize(query);
  if (!q) return 1;

  const localizedTitle = language === "en" ? entry.titleEn : entry.title;
  const localizedDescription = language === "en" ? entry.descriptionEn : entry.description;
  const localizedMeta = language === "en" ? entry.metaEn : entry.meta;
  const localizedKeywords = language === "en" ? entry.keywordsEn : entry.keywords;

  const title = normalize(entry.title + " " + entry.titleEn + " " + localizedTitle);
  const description = normalize(entry.description + " " + entry.descriptionEn + " " + localizedDescription);
  const meta = normalize(entry.meta + " " + entry.metaEn + " " + localizedMeta);
  const keywords = normalize(entry.keywords + " " + entry.keywordsEn + " " + localizedKeywords);
  const haystack = [title, description, meta, keywords].join(" ");

  if (title === q) return 1;
  if (title.startsWith(q)) return 0.97;
  if (title.includes(q)) return 0.92;
  if (haystack.includes(q)) return 0.84;

  const tokens = q.split(" ").filter(Boolean);
  const matchedTokens = tokens.filter((token) => haystack.includes(token)).length;
  const tokenCoverage = tokens.length ? matchedTokens / tokens.length : 0;

  const titleSimilarity = dice(q, title);
  const descriptionSimilarity = dice(q, description);
  const keywordSimilarity = dice(q, keywords);

  return Math.max(
    titleSimilarity * 0.92,
    descriptionSimilarity * 0.72,
    keywordSimilarity * 0.7,
    tokenCoverage * 0.78
  );
}

function ChipGroup<T extends string>({
  label,
  values,
  value,
  onChange,
  renderLabel,
}: {
  label: string;
  values: T[];
  value: T;
  onChange: (value: T) => void;
  renderLabel?: (value: T) => string;
}) {
  return (
    <div className="filter-chip-group">
      <span className="filter-chip-label">{label}</span>
      <div className="filter-chips">
        {values.map((item) => (
          <button
            key={item}
            type="button"
            className={"filter-chip" + (item === value ? " active" : "")}
            aria-pressed={item === value}
            onClick={() => onChange(item)}
          >
            {renderLabel ? renderLabel(item) : item}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SearchClient() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("Semua");
  const [track, setTrack] = useState<TrackFilter>("Semua");
  const [kind, setKind] = useState<KindFilter>("Semua");
  const [subject, setSubject] = useState<SubjectFilter>("Semua");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("Semua");

  const ranked = useMemo(() => {
    const q = query.trim();

    return fullSearchIndex
      .filter((item) => level === "Semua" || item.level === level || item.level === "Umum")
      .filter((item) => track === "Semua" || item.track === track || item.track === "Umum")
      .filter((item) => kind === "Semua" || item.kind === kind)
      .filter((item) => subject === "Semua" || item.subject === subject || item.subject === "Umum")
      .filter((item) => difficulty === "Semua" || item.difficulty === difficulty || item.difficulty === "Umum")
      .map((item) => ({ item, score: fuzzyScore(q, item, language) }))
      .filter(({ score }) => {
        if (!q) return true;
        const normalizedLength = normalize(q).length;
        const threshold = normalizedLength <= 2 ? 0.82 : normalizedLength <= 4 ? 0.38 : 0.27;
        return score >= threshold;
      })
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 80);
  }, [query, level, track, kind, subject, difficulty, language]);

  const exactCount = useMemo(() => {
    const q = normalize(query);
    if (!q) return ranked.length;
    return ranked.filter(({ item }) => {
      const localized = normalize(
        (language === "en" ? item.titleEn : item.title) + " " +
        (language === "en" ? item.descriptionEn : item.description)
      );
      return localized.includes(q);
    }).length;
  }, [query, ranked, language]);

  function clearFilters() {
    setLevel("Semua");
    setTrack("Semua");
    setKind("Semua");
    setSubject("Semua");
    setDifficulty("Semua");
  }

  function displayTrack(value: TrackFilter) {
    if (value === "Semua") return t("Semua Jalur");
    if (value === "Reguler") return t("Materi Reguler");
    return t("Olimpiade");
  }

  function displayKind(value: KindFilter) {
    if (value === "Semua") return t("Semua Konten");
    return t(value);
  }

  function displayLevel(value: LevelFilter) {
    if (value === "Semua") return language === "en" ? "All Levels" : "Semua Jenjang";
    if (language === "en") {
      if (value === "SD") return "Elementary";
      if (value === "SMP") return "Junior High";
      if (value === "SMA") return "Senior High";
      if (value === "Kuliah") return "University";
    }
    return value;
  }

  function displaySubject(value: SubjectFilter) {
    if (value === "Semua") return language === "en" ? "All Subjects" : "Semua Materi";
    if (language === "id") return value;
    const match = fullSearchIndex.find((item) => item.subject === value && item.subjectEn);
    return match?.subjectEn ?? value;
  }

  function displayDifficulty(value: DifficultyFilter) {
    if (value === "Semua") return language === "en" ? "All Difficulties" : "Semua Tingkat";
    if (language === "id") return value;
    if (value === "Dasar") return "Basic";
    if (value === "Menengah") return "Intermediate";
    if (value === "Sulit") return "Advanced";
    if (value === "Sangat Sulit") return "Very Advanced";
    return value;
  }

  return (
    <div className="search-shell search-shell-v2" data-no-translate>
      <div className="search-query-box">
        <label htmlFor="global-search">{t("Cari")}</label>
        <div className="search-input-wrap">
          <span aria-hidden="true">⌕</span>
          <input
            id="global-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              language === "en"
                ? "Type a topic, theorem, definition, or problem..."
                : "Ketik materi, teorema, definisi, atau soal..."
            }
            autoComplete="off"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label={language === "en" ? "Clear search" : "Hapus pencarian"}>
              ×
            </button>
          )}
        </div>
      </div>

      <div className="search-filter-board">
        <ChipGroup
          label={t("Jenjang")}
          values={LEVELS}
          value={level}
          onChange={setLevel}
          renderLabel={displayLevel}
        />
        <ChipGroup
          label={t("Jalur")}
          values={TRACKS}
          value={track}
          onChange={setTrack}
          renderLabel={displayTrack}
        />
        <ChipGroup
          label={language === "en" ? "Subject / Material" : "Bidang / Materi"}
          values={SUBJECTS}
          value={subject}
          onChange={setSubject}
          renderLabel={displaySubject}
        />
        <ChipGroup
          label={language === "en" ? "Difficulty" : "Tingkat Kesulitan"}
          values={DIFFICULTIES}
          value={difficulty}
          onChange={setDifficulty}
          renderLabel={displayDifficulty}
        />
        <ChipGroup
          label={t("Jenis Konten")}
          values={KINDS}
          value={kind}
          onChange={setKind}
          renderLabel={displayKind}
        />

        {(level !== "Semua" || track !== "Semua" || subject !== "Semua" || difficulty !== "Semua" || kind !== "Semua") && (
          <button className="clear-chip-filters" type="button" onClick={clearFilters}>
            {t("Hapus semua filter")}
          </button>
        )}
      </div>

      <div className="search-result-summary">
        <div>
          <strong>{ranked.length}</strong> {t("hasil")}
          {query && exactCount === 0 && ranked.length > 0 ? (
            <span className="fuzzy-note">
              · {language === "en" ? "showing similar matches for" : "menampilkan hasil serupa untuk"} “{query}”
            </span>
          ) : null}
        </div>
        <span>
          {level !== "Semua" ? displayLevel(level) + " · " : ""}
          {track !== "Semua" ? displayTrack(track) + " · " : ""}
          {subject !== "Semua" ? displaySubject(subject) + " · " : ""}
          {difficulty !== "Semua" ? displayDifficulty(difficulty) + " · " : ""}
          {kind !== "Semua" ? displayKind(kind) : ""}
        </span>
      </div>

      <div className="search-results search-results-v2">
        {ranked.map(({ item, score }) => (
          <Link href={item.href} className="search-result search-result-v2" key={item.id}>
            <div className="result-leading">
              <span className="result-type">{t(item.kind)}</span>
              <span className="result-level">
                {item.level === "Kuliah" ? t("Kuliah") : item.level}
                {item.track !== "Umum" ? " · " + (item.track === "Reguler" ? t("Materi Reguler") : t("Olimpiade")) : ""}
              </span>
            </div>
            <div>
              <h2>{language === "en" ? item.titleEn : item.title}</h2>
              <p><RichMath>{language === "en" ? item.descriptionEn : item.description}</RichMath></p>
              <small>{language === "en" ? item.metaEn : item.meta}</small>
            </div>
            <div className="result-score" aria-label="Similarity">
              {query ? Math.round(score * 100) + "%" : "→"}
            </div>
          </Link>
        ))}
      </div>

      {ranked.length === 0 && (
        <div className="empty-state search-empty-state">
          <div className="empty-search-mark">∅</div>
          <h2>{t("Tidak ada hasil yang cukup mirip.")}</h2>
          <p>{t("Coba kata kunci lain atau ubah filter.")}</p>
        </div>
      )}
    </div>
  );
}
