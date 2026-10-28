"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { lessonVideos } from "@/data/lesson-videos";
import { parseYouTubeVideo } from "@/lib/youtube-video";

type VideoCard = { id:string; watchUrl:string; embedUrl:string; title:string };

function YoutubeMark(){
  return <svg className="learning-video-youtube-mark" viewBox="0 0 28 20" fill="none" aria-hidden="true">
    <rect x=".5" y=".5" width="27" height="19" rx="5.5" fill="#FF0033"/>
    <path d="m11.25 5.5 8 4.5-8 4.5v-9Z" fill="#fff"/>
  </svg>;
}

/**
 * Read-only player. Videos come exclusively from data/lesson-videos.ts at build time.
 * Visitors cannot add, remove, or edit videos, and nothing is saved in the browser.
 * Publishing a new video requires repository write access and a new deployment.
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
  const [playing,setPlaying]=useState<Record<string,boolean>>({});

  useEffect(()=>setPlaying({}),[materialKey]);

  const videos=useMemo(()=>{
    const collected:VideoCard[]=[];
    const ids=new Set<string>();
    for(const item of lessonVideos[materialKey]??[]){
      const parsed=parseYouTubeVideo(item.url);
      if(!parsed||ids.has(parsed.id))continue;
      ids.add(parsed.id);
      collected.push({
        id:parsed.id,
        watchUrl:parsed.watchUrl,
        embedUrl:parsed.embedUrl,
        title:item.title?.trim()||(en?"Learning video ":"Video Pembelajaran ")+(collected.length+1),
      });
    }
    return collected;
  },[materialKey,en]);

  return <section id={sectionId} className={"book-section learning-video-section "+className} aria-labelledby={sectionId+"-heading"}>
    <div className="learning-video-top">
      <div>
        <span className="learning-video-eyebrow"><span className="learning-video-eyebrow-dot"/> {en?"WATCH & REVIEW":"TONTON & PERDALAM"}</span>
        <h2 id={sectionId+"-heading"}>{en?"Learning Videos":"Video Pembelajaran"}</h2>
        <p>{en
          ?"Review this lesson through curated YouTube videos within DMath Learning, or open the original on YouTube."
          :"Pelajari kembali materi melalui video YouTube pilihan di DMath Learning, atau buka video aslinya di YouTube."}</p>
      </div>
      {videos.length>0&&<span className="learning-video-count">{videos.length} {en?"video(s)":"video"}</span>}
    </div>

    {videos.length>0
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
              <span>VIDEO {String(index+1).padStart(2,"0")}</span>
              <h3>{video.title}</h3>
            </div>
            <a className="learning-video-youtube-link" href={video.watchUrl} target="_blank" rel="noopener noreferrer"
              aria-label={(en?"Watch on YouTube: ":"Tonton di YouTube: ")+video.title}
              title={en?"Open original on YouTube":"Buka video asli di YouTube"}>
              <YoutubeMark/><span>YouTube ↗</span>
            </a>
          </div>
        </article>)}
      </div>
      :<div className="learning-video-empty" role="status">
        <div className="learning-video-empty-icon"><YoutubeMark/></div>
        <div>
          <strong>{en?"Video coming soon":"Video belum tersedia"}</strong>
          <p>{en
            ?"Curated videos for this lesson will appear here once published by DMath Learning."
            :"Video untuk materi ini akan ditampilkan setelah ditambahkan oleh pengelola DMath Learning."}</p>
        </div>
      </div>}
  </section>;
}
