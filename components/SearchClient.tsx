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
import { allBookSections, bookSubjects } from "@/data/book-curricula";
import { bookSectionContent } from "@/data/book-section-content";
import { isPublicAcademicLevel, isPublicBookSubjectSlug, isPublicContentHref } from "@/lib/public-content";

type LevelFilter = "Semua" | "Kuliah";
type TrackFilter = "Semua" | "Reguler" | "Olimpiade";
type KindFilter = "Semua" | SearchKind;
type SubjectFilter = "Semua" | string;
type DifficultyFilter = "Semua" | Exclude<SearchDifficulty, "Umum">;

const LEVELS: LevelFilter[] = ["Semua", "Kuliah"];
const TRACKS: TrackFilter[] = ["Semua", "Reguler", "Olimpiade"];
const KINDS: KindFilter[] = ["Semua", "Materi", "Soal", "Teorema", "Definisi", "Contoh", "Halaman"];
const DIFFICULTIES: DifficultyFilter[] = ["Semua", "Dasar", "Menengah", "Sulit", "Sangat Sulit", "Challenge"];
function lessonSearchText(sectionSlug: string) {
  const content = bookSectionContent[sectionSlug];
  if (!content) return "";

  return [
    ...content.intro,
    ...(content.notation ?? []).flatMap((item) => [item.symbol, item.meaning]),
    ...content.formal.flatMap((item) => [
      item.kind,
      item.kind === "lemma" ? "lemma lema" : "",
      item.kind === "theorem" ? "theorem teorema" : "",
      item.kind === "proposition" ? "proposition proposisi" : "",
      item.kind === "corollary" ? "corollary akibat" : "",
      item.kind === "definition" ? "definition definisi" : "",
      item.title,
      item.statement,
      ...(item.proof ?? []),
    ]),
    ...content.examples.flatMap((item) => [
      item.title,
      item.problem,
      ...item.solution,
      item.conclusion ?? "",
    ]),
    ...content.exercises.flatMap((item) => [
      item.prompt,
      item.hint,
      item.answer,
      item.sourceNote ?? "",
    ]),
    ...content.mistakes,
    ...content.connections,
  ].join(" ");
}

const visibleSearchBooks = bookSubjects.filter(
  (book) => isPublicBookSubjectSlug(book.slug) && isPublicAcademicLevel(book.level, book.level)
);
const visibleSearchSections = allBookSections.filter(
  ({subject}) => isPublicBookSubjectSlug(subject.slug) && isPublicAcademicLevel(subject.level, subject.level)
);

const DIGITAL_BOOK_SEARCH_INDEX: SearchEntry[] = [
  ...visibleSearchBooks.map((book):SearchEntry=>({
    id:"digital-book-"+book.slug,
    kind:"Materi",
    level:"Kuliah",
    track:book.level.toLowerCase().includes("on-mipa")?"Olimpiade":"Reguler",
    subject:book.title,
    subjectEn:book.title,
    difficulty:"Umum",
    title:book.title,
    description:book.subtitle,
    meta:(book.curriculumVersion??"DMath Curriculum")+" · "+book.chapters.length+" bab",
    href:"/materi/"+book.slug,
    keywords:[book.title,book.subtitle,book.level,...book.chapters.map((unit)=>unit.title)].join(" "),
    titleEn:book.title,
    descriptionEn:book.subtitle,
    metaEn:(book.curriculumVersion??"DMath Curriculum")+" · "+book.chapters.length+" chapters",
    keywordsEn:[book.title,book.subtitle,book.level,...book.chapters.map((unit)=>unit.title)].join(" "),
  })),
  ...visibleSearchSections.map(({subject:book,chapter,section}):SearchEntry=>({
    id:"digital-book-section-"+book.slug+"-"+section.slug,
    kind:"Materi",
    level:"Kuliah",
    track:book.level.toLowerCase().includes("on-mipa")?"Olimpiade":"Reguler",
    subject:book.title,
    subjectEn:book.title,
    difficulty:"Umum",
    title:section.title,
    description:section.summary,
    meta:book.title+" · Bab "+chapter.number+" · "+chapter.title,
    href:"/materi/"+book.slug+"/"+section.slug,
    keywords:[book.title,chapter.title,section.title,section.summary,...section.keyIdeas,lessonSearchText(section.slug)].join(" "),
    titleEn:section.title,
    descriptionEn:section.summary,
    metaEn:book.title+" · Bab "+chapter.number+" · "+chapter.title,
    keywordsEn:[book.title,chapter.title,section.title,section.summary,...section.keyIdeas,lessonSearchText(section.slug)].join(" "),
  })),
  ...visibleSearchSections.flatMap(({subject:book,chapter,section})=>{
    const content=bookSectionContent[section.slug];
    if(!content)return [];
    return content.formal.map((formal,index):SearchEntry=>({
      id:"digital-book-formal-"+book.slug+"-"+section.slug+"-"+index,
      kind:formal.kind==="definition"?"Definisi":formal.kind==="note"?"Materi":"Teorema",
      level:"Kuliah",
      track:book.level.toLowerCase().includes("on-mipa")?"Olimpiade":"Reguler",
      subject:book.title,
      subjectEn:book.title,
      difficulty:"Umum",
      title:formal.title,
      description:formal.statement,
      meta:(
        formal.kind==="definition"?"Definisi":
        formal.kind==="lemma"?"Lemma":
        formal.kind==="proposition"?"Proposisi":
        formal.kind==="theorem"?"Teorema":
        formal.kind==="corollary"?"Akibat":"Catatan"
      )+" · "+book.title+" · "+section.title,
      href:"/materi/"+book.slug+"/"+section.slug+(formal.kind==="definition"?"#book-lesson-4":"#book-lesson-5"),
      keywords:[
        book.title,chapter.title,section.title,section.summary,...section.keyIdeas,
        formal.kind,formal.title,formal.statement,...(formal.proof??[])
      ].join(" "),
      titleEn:formal.title,
      descriptionEn:formal.statement,
      metaEn:(
        formal.kind==="definition"?"Definition":
        formal.kind==="lemma"?"Lemma":
        formal.kind==="proposition"?"Proposition":
        formal.kind==="theorem"?"Theorem":
        formal.kind==="corollary"?"Corollary":"Note"
      )+" · "+book.title+" · "+section.title,
      keywordsEn:[
        book.title,chapter.title,section.title,section.summary,...section.keyIdeas,
        formal.kind,formal.title,formal.statement,...(formal.proof??[])
      ].join(" "),
    }));
  }),
];

const COMBINED_SEARCH_INDEX: SearchEntry[] = [...DIGITAL_BOOK_SEARCH_INDEX,...fullSearchIndex]
  .filter((item) => isPublicContentHref(item.href) && isPublicAcademicLevel(item.level, item.track));

const SUBJECTS: SubjectFilter[] = [
  "Semua",
  ...Array.from(
    new Set(
      COMBINED_SEARCH_INDEX
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

const SEARCH_ALIASES: Record<string, string[]> = {
  lema: ["lemma"],
  lemma: ["lema"],
  teorema: ["theorem"],
  theorem: ["teorema"],
  definisi: ["definition"],
  definition: ["definisi"],
  proposisi: ["proposition"],
  proposition: ["proposisi"],
  akibat: ["corollary"],
  corollary: ["akibat"],
  rumus: ["formula"],
  formula: ["rumus"],
  stokastik: ["stochastic"],
  stochastic: ["stokastik"],
  turunan: ["derivative", "diferensial", "differential"],
  derivative: ["turunan", "diferensial", "differential"],
  diferensial: ["differential", "derivative", "turunan"],
  integral: ["integrasi", "integration"],
  integrasi: ["integral", "integration"],
  peluang: ["probabilitas", "probability"],
  probabilitas: ["peluang", "probability"],
  matriks: ["matrix"],
  matrix: ["matriks"],
  graf: ["graph"],
  graph: ["graf"],
};

const STRUCTURAL_QUERY_TOKENS = new Set([
  "lemma","lema","teorema","theorem","definisi","definition",
  "proposisi","proposition","akibat","corollary","materi","bab",
  "subbab","topik","konsep",
]);

function tokenMatches(token: string, haystack: string) {
  if (haystack.includes(token)) return true;
  return (SEARCH_ALIASES[token] ?? []).some((alias) => haystack.includes(alias));
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
  const contentTokens = tokens.filter((token) => !STRUCTURAL_QUERY_TOKENS.has(token));
  const effectiveTokens = contentTokens.length ? contentTokens : tokens;
  const matchedTokens = effectiveTokens.filter((token) => tokenMatches(token, haystack)).length;
  const tokenCoverage = effectiveTokens.length ? matchedTokens / effectiveTokens.length : 0;

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

    return COMBINED_SEARCH_INDEX
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
    return "ON-MIPA";
  }

  function displayKind(value: KindFilter) {
    if (value === "Semua") return t("Semua Konten");
    return t(value);
  }

  function displayLevel(value: LevelFilter) {
    if (value === "Semua") return language === "en" ? "All Levels" : "Semua Jenjang";
    if (language === "en") return "University";
    return value;
  }

  function displaySubject(value: SubjectFilter) {
    if (value === "Semua") return language === "en" ? "All Subjects" : "Semua Materi";
    if (language === "id") return value;
    const match = COMBINED_SEARCH_INDEX.find((item) => item.subject === value && item.subjectEn);
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
