"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useMemo, useState } from "react";

type Crumb={label:string;href?:string};
type Stat={value:string|number;label:string};
type Action={label:string;href:string;kind?:"primary"|"secondary"};
type SectionNav={id:string;label:string};

export function RiemannHubShell({
  breadcrumbs=[],
  eyebrow,
  title,
  lead,
  meta=[],
  stats=[],
  actions=[],
  overviewEyebrow="Gambaran Besar",
  overviewTitle,
  overviewText,
  roadmap=[],
  sections,
  children,
  className="",
}:{
  breadcrumbs?:Crumb[];
  eyebrow:string;
  title:string;
  lead:string;
  meta?:string[];
  stats?:Stat[];
  actions?:Action[];
  overviewEyebrow?:string;
  overviewTitle:string;
  overviewText?:string;
  roadmap?:string[];
  sections:SectionNav[];
  children:ReactNode;
  className?:string;
}){
  const ids=useMemo(()=>sections.map((section)=>section.id),[sections]);
  const [active,setActive]=useState(ids[0] ?? "");
  const [progress,setProgress]=useState(0);

  useEffect(()=>{
    const updateProgress=()=>{
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      setProgress(Math.min(100,Math.max(0,(window.scrollY/max)*100)));
    };
    updateProgress();
    window.addEventListener("scroll",updateProgress,{passive:true});
    window.addEventListener("resize",updateProgress);

    const observer=new IntersectionObserver((entries)=>{
      const visible=entries
        .filter((entry)=>entry.isIntersecting)
        .sort((a,b)=>Math.abs(a.boundingClientRect.top-120)-Math.abs(b.boundingClientRect.top-120));
      if(visible[0]) setActive(visible[0].target.id);
    },{rootMargin:"-110px 0px -62% 0px",threshold:[0,0.01,0.2]});

    ids.forEach((id)=>{
      const element=document.getElementById(id);
      if(element) observer.observe(element);
    });

    return()=>{
      observer.disconnect();
      window.removeEventListener("scroll",updateProgress);
      window.removeEventListener("resize",updateProgress);
    };
  },[ids]);

  return(
    <div className={"textbook-page ird-page "+className} data-no-translate>
      <div className="reading-progress" aria-hidden="true"><span style={{width:progress+"%"}}/></div>

      <section className="chapter-hero textbook-hero ird-hero">
        <div className="container narrow">
          {breadcrumbs.length>0&&(
            <div className="breadcrumb">
              {breadcrumbs.map((crumb,index)=>(
                <span key={crumb.label+index} style={{display:"contents"}}>
                  {index>0&&<span>/</span>}
                  {crumb.href?<Link href={crumb.href}>{crumb.label}</Link>:<strong>{crumb.label}</strong>}
                </span>
              ))}
            </div>
          )}

          <div className="chapter-label-row"><span className="eyebrow">{eyebrow}</span></div>
          <h1>{title}</h1>
          <p className="chapter-lead">{lead}</p>

          {meta.length>0&&<div className="chapter-meta textbook-meta">{meta.map((item)=><span key={item}>{item}</span>)}</div>}

          {stats.length>0&&(
            <div className="chapter-stat-grid">
              {stats.map((stat)=><div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
            </div>
          )}

          {actions.length>0&&(
            <div className="actions">
              {actions.map((action)=><Link key={action.label} className={"btn "+(action.kind??"secondary")} href={action.href}>{action.label}</Link>)}
            </div>
          )}
        </div>
      </section>

      <section className="section ird-overview">
        <div className="container narrow">
          <span className="eyebrow">{overviewEyebrow}</span>
          <h2>{overviewTitle}</h2>
          {overviewText&&<p>{overviewText}</p>}
          {roadmap.length>0&&(
            <div className="ird-roadmap">
              {roadmap.map((item,index)=><div key={item+index}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}
            </div>
          )}
        </div>
      </section>

      <section className="section textbook-section-shell">
        <div className="container article-layout textbook-layout">
          <aside className="toc material-toc textbook-toc ird-toc">
            <div className="toc-progress-mini"><span>Progres membaca</span><strong>{Math.round(progress)}%</strong></div>
            <strong>Isi Halaman</strong>
            {sections.map((section,index)=>(
              <a href={"#"+section.id} className={active===section.id?"active":""} key={section.id}>
                <span>{String(index+1).padStart(2,"0")}</span>{section.label}
              </a>
            ))}
          </aside>

          <article className="article deep-article textbook-article ird-article">
            {children}
          </article>
        </div>
      </section>
    </div>
  );
}
