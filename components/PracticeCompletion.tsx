"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const STORAGE_PREFIX="dmath:lesson-practice:v1:";
const EVENT="dmath-lesson-practice-progress";

function readProgress(lessonKey:string):Record<string,boolean>{
  try {
    const value=JSON.parse(localStorage.getItem(STORAGE_PREFIX+lessonKey)??"{}");
    if(!value||typeof value!=="object"||Array.isArray(value))return {};
    return Object.fromEntries(Object.entries(value).filter(([key,checked])=>
      typeof key==="string"&&key.length<150&&checked===true).slice(0,500)) as Record<string,boolean>;
  }catch{return {};}
}

function useLessonProgress(lessonKey:string){
  const [done,setDone]=useState<Record<string,boolean>>({});
  const [ready,setReady]=useState(false);
  useEffect(()=>{
    setReady(false);
    setDone(readProgress(lessonKey));
    setReady(true);
    const sync=()=>setDone(readProgress(lessonKey));
    const onOtherTab=(e:StorageEvent)=>{
      if(e.key===STORAGE_PREFIX+lessonKey)sync();
    };
    window.addEventListener(EVENT,sync);
    window.addEventListener("storage",onOtherTab);
    return()=>{
      window.removeEventListener(EVENT,sync);
      window.removeEventListener("storage",onOtherTab);
    };
  },[lessonKey]);
  const update=(id:string,checked:boolean)=>{
    const next={...readProgress(lessonKey)};
    if(checked)next[id]=true;
    else delete next[id];
    try{
      localStorage.setItem(STORAGE_PREFIX+lessonKey,JSON.stringify(next));
      window.dispatchEvent(new Event(EVENT));
    }catch{
      // If storage is blocked, retain an in-session state without claiming persistence.
      setDone(next);
    }
  };
  return {done,ready,update};
}

/** Lightweight, non-grading study tracker: individual completion never exposes the answer. */
export function PracticeCompletionToggle({lessonKey,exerciseKey}:{lessonKey:string;exerciseKey:string}){
  const {language}=useLanguage();
  const {done,ready,update}=useLessonProgress(lessonKey);
  const checked=ready&&Boolean(done[exerciseKey]);
  return <label className={"dmath-exercise-complete"+(checked?" is-complete":"")}>
    <input type="checkbox" checked={checked} onChange={e=>update(exerciseKey,e.target.checked)}
      aria-label={language==="en"?"Mark problem as completed":"Tandai soal selesai"}/>
    <span className="dmath-exercise-complete-icon" aria-hidden="true">{checked?"✓":""}</span>
    <span>{language==="en"?(checked?"Completed":"Mark completed"):(checked?"Selesai":"Tandai selesai")}</span>
  </label>;
}

export function PracticeSectionProgress({lessonKey,exerciseKeys}:{lessonKey:string;exerciseKeys:string[]}){
  const {language}=useLanguage();
  const {done,ready}=useLessonProgress(lessonKey);
  const completed=useMemo(()=>exerciseKeys.filter(key=>Boolean(done[key])).length,[done,exerciseKeys]);
  const fraction=exerciseKeys.length?Math.round(completed/exerciseKeys.length*100):0;
  const en=language==="en";
  return <div className="dmath-practice-dashboard">
    <div className="dmath-practice-dashboard-row">
      <div>
        <span className="dmath-practice-dashboard-kicker">{en?"YOUR PROGRESS":"PROGRES LATIHAN"}</span>
        <strong>{en?"Work through the problems at your own pace.":"Selesaikan latihan sesuai ritme belajarmu."}</strong>
      </div>
      <div className="dmath-practice-dashboard-count">
        <strong>{ready?completed:0}<span> / {exerciseKeys.length}</span></strong>
        <small>{en?"completed":"selesai"}</small>
      </div>
    </div>
    <div className="dmath-practice-dashboard-track" role="progressbar" aria-valuemin={0} aria-valuemax={exerciseKeys.length||1}
      aria-valuenow={ready?completed:0} aria-label={en?"Problems completed":"Latihan selesai"}>
      <span style={{width:(ready?fraction:0)+"%"}}/>
    </div>
    <p>{en?"Progress is saved on this device only. It doesn't grade or submit answers.":"Progres hanya disimpan di perangkat ini; tidak ada penilaian otomatis atau pengiriman jawaban."}</p>
  </div>;
}
