"use client";

import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

function Text({children}:{children:string}){
  return <RichMath className="ird-rich-text">{children}</RichMath>;
}

export function AcademicSolution({
  known,
  target,
  idea,
  steps,
  conclusion,
  title,
}:{
  known?:string;
  target?:string;
  idea?:string;
  steps:string[];
  conclusion?:string;
  title?:string;
}){
  const {language}=useLanguage();
  const en=language==="en";
  const ui=(id:string,english:string)=>en?english:id;

  return(
    <div className="solution-stack full-solution">
      {(known||target)&&(
        <div className="solution-overview-grid">
          {known&&<div className="content-box"><span className="box-kicker">{ui("Diketahui","Given")}</span><div><Text>{known}</Text></div></div>}
          {target&&<div className="content-box"><span className="box-kicker">{ui("Dicari / Dibuktikan","Find / Prove")}</span><div><Text>{target}</Text></div></div>}
        </div>
      )}

      {idea&&(
        <div className="content-box idea-box">
          <span className="box-kicker">{ui("Ide Penyelesaian","Solution Idea")}</span>
          <div><Text>{idea}</Text></div>
        </div>
      )}

      <div className="content-box solution-box">
        <span className="box-kicker">{title??ui("Pembahasan","Solution")}</span>
        <div className="solution-steps">
          {steps.map((step,index)=>(
            <div className="solution-step" key={index}>
              <span>{String(index+1).padStart(2,"0")}</span>
              <div><Text>{step}</Text></div>
            </div>
          ))}
        </div>
      </div>

      {conclusion&&(
        <div className="content-box answer-box">
          <span className="box-kicker">{ui("Kesimpulan","Conclusion")}</span>
          <div><Text>{conclusion}</Text></div>
        </div>
      )}
    </div>
  );
}

export function splitAcademicSolution(text:string){
  const normalized=text
    .replace(/\r/g,"")
    .split(/\n+/)
    .map((item)=>item.trim())
    .filter(Boolean);

  if(normalized.length>1)return normalized;

  const sentences=text
    .split(/(?<=[.!?])\s+(?=[A-ZÀ-ÖØ-Ý0-9$])/)
    .map((item)=>item.trim())
    .filter(Boolean);

  return sentences.length?sentences:[text];
}
