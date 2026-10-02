"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";
import { localizeProblem } from "@/data/problem-translations-en";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

const PAGE_SIZE = 20;

const difficultyEn: Record<string,string> = {
  "Dasar":"Basic","Menengah":"Intermediate","Lanjut":"Advanced",
};

function difficultyGroup(value:string) {
  if (value === "Dasar") return "Dasar";
  if (value === "Menengah") return "Menengah";
  return "Lanjut";
}
const typeEn: Record<string,string> = {
  "Konsep":"Concept","Hitungan":"Computation","Pembuktian":"Proof","True/False":"True/False","Counterexample":"Counterexample","Construction":"Construction",
};

export function ProblemBank() {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("Semua");
  const [type, setType] = useState("Semua");
  const [subchapter, setSubchapter] = useState("Semua");
  const [page, setPage] = useState(1);

  const subchapters = useMemo(
    () => Array.from(new Set(basisDimensionProblems.map((problem) => problem.subchapter))),
    []
  );

  function displaySubchapter(value:string) {
    if (value === "Semua") return language === "en" ? "All" : "Semua";
    if (language === "id") return value;
    const source = basisDimensionProblems.find((p) => p.subchapter === value);
    return source ? localizeProblem(source, "en").subchapter : value;
  }
  function displayDifficulty(value:string) {
    if (value === "Semua") return language === "en" ? "All" : "Semua";
    return language === "en" ? (difficultyEn[value] ?? value) : value;
  }
  function displayType(value:string) {
    if (value === "Semua") return language === "en" ? "All" : "Semua";
    return language === "en" ? (typeEn[value] ?? value) : value;
  }

  const filtered = useMemo(() => {
    const q = query.toLocaleLowerCase(language === "en" ? "en-US" : "id-ID").trim();
    return basisDimensionProblems.filter((raw) => {
      const localized = localizeProblem(raw, language);
      const haystack = [
        raw.id, raw.title, raw.problem, raw.subchapter, ...raw.concepts,
        localized.title, localized.problem, localized.subchapter, ...localized.concepts
      ].join(" ").toLowerCase();
      return (!q || haystack.includes(q))
        && (difficulty === "Semua" || difficultyGroup(raw.difficulty) === difficulty)
        && (type === "Semua" || raw.type === type)
        && (subchapter === "Semua" || raw.subchapter === subchapter);
    });
  }, [query, difficulty, type, subchapter, language]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function clearFilters() {
    setQuery(""); setDifficulty("Semua"); setType("Semua"); setSubchapter("Semua"); setPage(1);
  }

  function randomProblem() {
    const pool = filtered.length ? filtered : basisDimensionProblems;
    const selected = pool[Math.floor(Math.random() * pool.length)];
    window.location.href = "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + selected.id.toLowerCase();
  }

  const ChipRow = ({label, values, value, setValue, display}:{label:string;values:string[];value:string;setValue:(x:string)=>void;display:(x:string)=>string}) => (
    <div className="filter-chip-group bank-chip-group">
      <span className="filter-chip-label">{label}</span>
      <div className="filter-chips bank-filter-chips">
        {values.map((item) => (
          <button key={item} type="button" className={"filter-chip"+(item===value?" active":"")} aria-pressed={item===value}
            onClick={()=>{setValue(item);setPage(1);}}>
            {display(item)}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="problem-bank-component" data-no-translate>
      <div className="bank-summary">
        <div>
          <span className="eyebrow">{language==="en"?"Complete Problem Bank":"Bank Soal Lengkap"}</span>
          <h2>{language==="en"?"100 Basis and Dimension Problems":"100 soal Basis dan Dimensi"}</h2>
          <p>{language==="en"
            ?"Distribution: 20 Basic · 30 Intermediate · 50 Advanced. Every problem has hints and a complete structured solution."
            :"Distribusi: 20 Dasar · 30 Menengah · 50 Lanjut. Setiap soal memiliki petunjuk dan pembahasan lengkap yang terstruktur."}</p>
        </div>
        <button className="btn secondary" type="button" onClick={randomProblem}>{language==="en"?"Random Problem":"Acak Soal"}</button>
      </div>

      <div className="filter-panel chip-filter-panel">
        <label className="bank-search-field">
          <span>{language==="en"?"Search":"Cari"}</span>
          <div className="search-input-wrap">
            <span aria-hidden="true">⌕</span>
            <input value={query} onChange={(e)=>{setQuery(e.target.value);setPage(1);}}
              placeholder={language==="en"?"Search ID, title, concept, or problem text...":"Cari ID, judul, konsep, atau isi soal..."} />
            {query && <button type="button" onClick={()=>{setQuery("");setPage(1);}} aria-label={language==="en"?"Clear search":"Hapus pencarian"}>×</button>}
          </div>
        </label>

        <ChipRow label={language==="en"?"Subchapter":"Subbab"} values={["Semua",...subchapters]} value={subchapter} setValue={setSubchapter} display={displaySubchapter}/>
        <ChipRow label={language==="en"?"Difficulty":"Kesulitan"} values={["Semua","Dasar","Menengah","Lanjut"]} value={difficulty} setValue={setDifficulty} display={displayDifficulty}/>
        <ChipRow label={language==="en"?"Type":"Tipe"} values={["Semua","Konsep","Hitungan","Pembuktian","True/False","Counterexample","Construction"]} value={type} setValue={setType} display={displayType}/>

        <div className="filter-footer">
          <span>{filtered.length} {language==="en"?"of":"dari"} {basisDimensionProblems.length} {language==="en"?"problems":"soal"}</span>
          <button type="button" onClick={clearFilters}>{language==="en"?"Clear All Filters":"Hapus semua filter"}</button>
        </div>
      </div>

      <div className="problem-list problem-bank-grid">
        {visible.map((raw) => {
          const problem=localizeProblem(raw,language);
          return <article className="problem-card premium-problem-card" key={problem.id}>
            <div className="problem-meta">
              <span className="problem-id">{problem.id}</span><span>{displayDifficulty(difficultyGroup(raw.difficulty))}</span><span>{problem.type}</span>
            </div>
            <span className="problem-subchapter">{problem.subchapter}</span>
            <h2>{problem.title}</h2>
            <div className="problem-preview"><RichMath>{problem.problem}</RichMath></div>
            <div className="concept-pills compact-pills">{problem.concepts.slice(0,3).map(c=><span key={c}>{c}</span>)}</div>
            <div className="problem-footer">
              <span>± {problem.estimatedTime}</span>
              <Link href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/"+problem.id.toLowerCase()}>{language==="en"?"Open Problem →":"Buka Soal →"}</Link>
            </div>
          </article>;
        })}
      </div>

      {visible.length===0 && <div className="empty-state"><h2>{language==="en"?"No Matching Problems":"Tidak Ada Soal yang Cocok"}</h2><p>{language==="en"?"Try another keyword or clear some filters.":"Coba ubah kata pencarian atau hapus beberapa filter."}</p></div>}

      <nav className="pagination" aria-label={language==="en"?"Problem bank pagination":"Pagination bank soal"}>
        <button disabled={safePage===1} onClick={()=>setPage(v=>Math.max(1,v-1))}>← {language==="en"?"Previous":"Sebelumnya"}</button>
        <div>{Array.from({length:pageCount},(_,i)=>i+1).map(n=><button className={n===safePage?"active":""} onClick={()=>setPage(n)} key={n} aria-current={n===safePage?"page":undefined}>{n}</button>)}</div>
        <button disabled={safePage===pageCount} onClick={()=>setPage(v=>Math.min(pageCount,v+1))}>{language==="en"?"Next":"Berikutnya"} →</button>
      </nav>
    </div>
  );
}
