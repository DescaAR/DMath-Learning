"use client";

import { useEffect, useMemo, useState } from "react";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";
import type { MaterialPracticeProblem } from "@/data/material-practice";

type Filter="Semua"|"Dasar"|"Menengah"|"Menantang";

export function MaterialPractice({ problems, storageKey }: { problems: MaterialPracticeProblem[]; storageKey?: string }) {
  const { language } = useLanguage();
  const en=language==="en";
  const [filter,setFilter]=useState<Filter>("Semua");
  const [openHint,setOpenHint]=useState<Record<string,boolean>>({});
  const [openAnswer,setOpenAnswer]=useState<Record<string,boolean>>({});
  const [done,setDone]=useState<Record<string,boolean>>({});
  const persistenceKey = storageKey ? "dmath:practice:" + storageKey : "";

  useEffect(() => {
    if (!persistenceKey) return;
    try {
      const saved = window.localStorage.getItem(persistenceKey);
      if (saved) setDone(JSON.parse(saved));
    } catch {}
  }, [persistenceKey]);

  useEffect(() => {
    if (!persistenceKey) return;
    try {
      window.localStorage.setItem(persistenceKey, JSON.stringify(done));
    } catch {}
  }, [done, persistenceKey]);

  const filtered=useMemo(()=>filter==="Semua"?problems:problems.filter(p=>p.difficulty===filter),[filter,problems]);
  const solved=Object.values(done).filter(Boolean).length;

  const difficulty=(d:MaterialPracticeProblem["difficulty"])=>{
    if(!en)return d;
    return d==="Dasar"?"Basic":d==="Menengah"?"Intermediate":"Challenge";
  };

  return (
    <section className="material-practice" id="latihan-bertingkat">
      <div className="practice-head">
        <div>
          <span className="eyebrow">{en?"Guided Practice":"Latihan Bertingkat"}</span>
          <h2>{en?"Practice from fundamentals to proof-level problems.":"Latihan dari konsep dasar sampai soal pembuktian."}</h2>
          <p>{en?"Use a hint only when necessary, reveal the solution afterward, and mark a problem complete when you can reproduce the argument independently.":"Gunakan hint hanya jika diperlukan, buka jawaban setelah mencoba, lalu tandai selesai ketika kamu sudah dapat mengulang argumennya secara mandiri."}</p>
        </div>
        <div className="practice-progress"><strong>{solved}/{problems.length}</strong><span>{en?"completed":"selesai"}</span></div>
      </div>

      <div className="practice-filter-chips">
        {(["Semua","Dasar","Menengah","Menantang"] as Filter[]).map(item=>(
          <button type="button" className={filter===item?"active":""} onClick={()=>setFilter(item)} key={item}>
            {item==="Semua"?(en?"All":"Semua"):difficulty(item as MaterialPracticeProblem["difficulty"])}
          </button>
        ))}
      </div>

      <div className="practice-list">
        {filtered.map(problem=>(
          <article className={"practice-card"+(done[problem.id]?" completed":"")} key={problem.id}>
            <div className="practice-card-top">
              <div>
                <span className="practice-id">{problem.id}</span>
                <span className="practice-difficulty">{difficulty(problem.difficulty)}</span>
              </div>
              <label className="practice-done">
                <input type="checkbox" checked={Boolean(done[problem.id])} onChange={e=>setDone(prev=>({...prev,[problem.id]:e.target.checked}))}/>
                <span>{en?"Done":"Selesai"}</span>
              </label>
            </div>

            <h3>{en?problem.title.en:problem.title.id}</h3>
            <p className="practice-prompt"><RichMath>{en?problem.prompt.en:problem.prompt.id}</RichMath></p>

            <div className="practice-actions">
              <button type="button" onClick={()=>setOpenHint(prev=>({...prev,[problem.id]:!prev[problem.id]}))}>
                {openHint[problem.id]?(en?"Hide Hint":"Tutup Hint"):(en?"Show Hint":"Lihat Hint")}
              </button>
              <button type="button" onClick={()=>setOpenAnswer(prev=>({...prev,[problem.id]:!prev[problem.id]}))}>
                {openAnswer[problem.id]?(en?"Hide Solution":"Tutup Pembahasan"):(en?"Reveal Solution":"Buka Pembahasan")}
              </button>
            </div>

            {openHint[problem.id]&&(
              <div className="practice-reveal hint">
                <strong>{en?"Hint":"Hint"}</strong>
                <p><RichMath>{en?problem.hint.en:problem.hint.id}</RichMath></p>
              </div>
            )}

            {openAnswer[problem.id]&&(
              <div className="practice-reveal answer">
                <strong>{en?"Solution":"Pembahasan"}</strong>
                <p><RichMath>{en?problem.answer.en:problem.answer.id}</RichMath></p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
