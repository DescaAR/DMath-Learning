"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { lessonVideos } from "@/data/lesson-videos";
import { parseYouTubeVideo } from "@/lib/youtube-video";

type VideoCard={id:string;watchUrl:string;embedUrl:string;title:string;isLocal:boolean};
const STORAGE_PREFIX="dmath-learning-videos:v1:";

function YoutubeMark(){
  return <svg className="learning-video-youtube-mark" viewBox="0 0 28 20" fill="none" aria-hidden="true">
    <rect x=".5" y=".5" width="27" height="19" rx="5.5" fill="#FF0033"/>
    <path d="m11.25 5.5 8 4.5-8 4.5v-9Z" fill="#fff"/>
  </svg>;
}

/**
 * The site's public library comes from data/lesson-videos.ts.
 * Pasting into this editor saves privately in this browser because GitHub
 * Pages has no write API or server-side database.
 */
export function LearningVideoSection({
  materialKey,
  sectionId="materi-video",
  className="",
}:{
  materialKey:string;
  sectionId?:string;
  className?:string;
}){
  const {language}=useLanguage();
  const en=language==="en";
  const [localUrls,setLocalUrls]=useState<string[]>([]);
  const [ready,setReady]=useState(false);
  const [draft,setDraft]=useState("");
  const [editing,setEditing]=useState(false);
  const [error,setError]=useState("");
  const [playing,setPlaying]=useState<Record<string,boolean>>({});

  useEffect(()=>{
    setReady(false);
    setLocalUrls([]);
    setPlaying({});
    try{
      const stored=JSON.parse(localStorage.getItem(STORAGE_PREFIX+materialKey)??"[]");
      if(Array.isArray(stored))setLocalUrls(stored.filter((entry):entry is string=>
        typeof entry==="string"&&!!parseYouTubeVideo(entry)).slice(0,30));
    }catch{setLocalUrls([]);}
    setReady(true);
  },[materialKey]);

  const videos=useMemo(()=>{
    const collected:VideoCard[]=[];
    const ids=new Set<string>();
    const add=(url:string,title:string|undefined,isLocal:boolean)=>{
      const parsed=parseYouTubeVideo(url);
      if(!parsed||ids.has(parsed.id))return;
      ids.add(parsed.id);
      collected.push({id:parsed.id,watchUrl:parsed.watchUrl,embedUrl:parsed.embedUrl,
        title:title?.trim()||(en?"Learning video ":"Video Pembelajaran ")+(collected.length+1),
        isLocal});
    };
    for(const item of lessonVideos[materialKey]??[])add(item.url,item.title,false);
    for(const url of localUrls)add(url,undefined,true);
    return collected;
  },[materialKey,localUrls,en]);

  const saveLocal=(items:string[])=>{
    try{
      localStorage.setItem(STORAGE_PREFIX+materialKey,JSON.stringify(items));
      setLocalUrls(items);
      return true;
    }catch{
      setError(en?"Browser storage is unavailable. The link was not saved.":"Penyimpanan browser tidak tersedia. Link belum tersimpan.");
      return false;
    }
  };
  const addVideo=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const parsed=parseYouTubeVideo(draft);
    if(!parsed){
      setError(en?"Enter a valid YouTube video link (watch, youtu.be, Shorts, or Live).":"Masukkan link video YouTube yang valid (watch, youtu.be, Shorts, atau Live).");
      return;
    }
    if(videos.some(v=>v.id===parsed.id)){
      setError(en?"That video is already in this lesson.":"Video tersebut sudah tersedia pada materi ini.");
      return;
    }
    if(localUrls.length>=30){
      setError(en?"Maximum of 30 personal videos per lesson.":"Maksimal 30 video pribadi untuk satu materi.");
      return;
    }
    if(saveLocal([...localUrls,parsed.watchUrl])){
      setDraft("");setError("");setEditing(false);
    }
  };
  const removeLocal=(id:string)=>{
    saveLocal(localUrls.filter(url=>parseYouTubeVideo(url)?.id!==id));
    setPlaying(previous=>({...previous,[id]:false}));
  };

  return <section id={sectionId} className={"book-section learning-video-section "+className} aria-labelledby={sectionId+"-heading"}>
    <div className="learning-video-top">
      <div>
        <span className="learning-video-eyebrow"><span className="learning-video-eyebrow-dot"/> {en?"WATCH & REVIEW":"TONTON & PERDALAM"}</span>
        <h2 id={sectionId+"-heading"}>{en?"Learning Videos":"Video Pembelajaran"}</h2>
        <p>{en
          ?"Review the lesson through YouTube videos without leaving DMath Learning. Open the YouTube logo to watch the original."
          :"Perdalam materi melalui video YouTube langsung di DMath Learning. Klik logo YouTube untuk membuka video aslinya."}</p>
      </div>
      <span className="learning-video-count">{videos.length} {en?"video(s)":"video"}</span>
    </div>

    {ready&&videos.length>0
      ?<div className="learning-video-grid">
        {videos.map((video,index)=><article className="learning-video-card" key={video.id}>
          <div className="learning-video-media">
            {playing[video.id]
              ?<iframe
                src={video.embedUrl}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              :<button type="button" className="learning-video-play" onClick={()=>setPlaying(prev=>({...prev,[video.id]:true}))}
                aria-label={(en?"Play on this page: ":"Putar di halaman ini: ")+video.title}>
                <span className="learning-video-play-ring"><span className="learning-video-play-triangle"/></span>
                <strong>{en?"Play on DMath Learning":"Putar di DMath Learning"}</strong>
                <small>{en?"YouTube player loads when you click":"Pemutar YouTube dimuat setelah diklik"}</small>
              </button>}
          </div>
          <div className="learning-video-card-footer">
            <div className="learning-video-card-meta">
              <span>{en?"VIDEO ":"VIDEO "}{String(index+1).padStart(2,"0")}</span>
              <h3>{video.title}</h3>
              {video.isLocal&&<small>{en?"Saved on this device":"Tersimpan di perangkat ini"}</small>}
            </div>
            <div className="learning-video-card-actions">
              <a className="learning-video-youtube-link" href={video.watchUrl} target="_blank" rel="noopener noreferrer"
                aria-label={(en?"Watch on YouTube: ":"Tonton di YouTube: ")+video.title}
                title={en?"Open original on YouTube":"Buka video asli di YouTube"}>
                <YoutubeMark/><span>YouTube ↗</span>
              </a>
              {video.isLocal&&<button className="learning-video-remove" type="button" onClick={()=>removeLocal(video.id)}
                aria-label={(en?"Remove saved video: ":"Hapus video tersimpan: ")+video.title}
                title={en?"Remove personal video":"Hapus video pribadi"}>×</button>}
            </div>
          </div>
        </article>)}
      </div>
      :<div className="learning-video-empty">
        <div className="learning-video-empty-icon"><YoutubeMark/></div>
        <div><strong>{en?"No video has been added yet":"Belum ada video yang ditambahkan"}</strong>
          <p>{en?"You can paste a YouTube link to watch it here.":"Tempelkan link YouTube untuk menontonnya di sini."}</p>
        </div>
      </div>}

    <div className="learning-video-add-panel">
      <button type="button" className="learning-video-add-toggle" onClick={()=>{setEditing(v=>!v);setError("");}} aria-expanded={editing}
        aria-controls={sectionId+"-form"}>
        <span aria-hidden="true">{editing?"−":"+"}</span>
        {en?"Add a YouTube video":"Tambahkan video YouTube"}
      </button>
      {editing&&<div id={sectionId+"-form"} className="learning-video-editor">
        <form onSubmit={addVideo}>
          <label htmlFor={sectionId+"-input"}>{en?"YouTube video URL":"Link video YouTube"}</label>
          <div className="learning-video-input-row">
            <input id={sectionId+"-input"} type="url" value={draft} onChange={e=>{setDraft(e.target.value);setError("");}}
              placeholder="https://www.youtube.com/watch?v=..." autoComplete="off" required/>
            <button type="submit">{en?"Add video":"Tambahkan"}</button>
          </div>
          {error&&<p className="learning-video-error" role="alert">{error}</p>}
        </form>
        <p className="learning-video-notice">{en
          ?"Links pasted here are saved in this browser only, not published to other visitors. For a permanent public video, add it to data/lesson-videos.ts in the GitHub repository."
          :"Link yang dimasukkan di sini tersimpan hanya pada browser/perangkat ini, belum terlihat oleh pengunjung lain. Agar tampil untuk semua pengunjung, tambahkan link ke data/lesson-videos.ts di repository GitHub."}</p>
        <a className="learning-video-public-link" href="https://github.com/DescaAR/DMath-Learning/edit/github-pages-static/data/lesson-videos.ts"
          target="_blank" rel="noopener noreferrer">{en?"Edit public video list on GitHub ↗":"Kelola video publik di GitHub ↗"}</a>
      </div>}
    </div>
  </section>;
}
