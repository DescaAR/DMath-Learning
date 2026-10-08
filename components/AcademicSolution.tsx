"use client";

import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

function Text({children}:{children:string}){
  return <RichMath className="ird-rich-text">{children}</RichMath>;
}

/** Keep author's mathematics intact; remove only duplicate headings and repeated content. */
function comparable(value:string){
  return value.trim().replace(/\\s+/g," ").replace(/[.!?]+$/g,"").toLocaleLowerCase();
}
function uniqueParagraphs(values:string[]){
  const used=new Set<string>();
  return values.map(x=>x.trim()).filter(x=>{
    const key=comparable(x);
    if(!key||used.has(key))return false;
    used.add(key);
    return true;
  });
}
function leadingConnector(value:string){
  return value.replace(/^(Jadi|Maka|Sehingga)(?=\\s|,)/,match=>
    match==="Jadi"?"Dengan demikian":match==="Maka"?"Oleh karena itu":"Dengan demikian");
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
  const paragraphs=uniqueParagraphs(steps);
  // Older data occasionally uses the first solution line as a synthetic 'idea'.
  // Only show a genuine, independent strategy, never repeat a proof paragraph.
  const showIdea=Boolean(idea?.trim())&&!paragraphs.some(
    p=>comparable(p)===comparable(idea??"")||comparable(p).includes(comparable(idea??""))
  );
  const showConclusion=Boolean(conclusion?.trim())&&
    !paragraphs.some(p=>comparable(p)===comparable(conclusion??""));

  return <div className="academic-solution-prose">
    {known&&<p className="academic-solution-context"><strong>{en?"Given.":"Diketahui."}</strong> <Text>{known}</Text></p>}
    {target&&<p className="academic-solution-context"><strong>{en?"To find or prove.":"Dibuktikan atau ditentukan."}</strong> <Text>{target}</Text></p>}
    {showIdea&&<p className="academic-solution-idea"><strong>{en?"Approach.":"Gagasan."}</strong> <Text>{idea!.trim()}</Text></p>}
    <div className="academic-solution-body">
      <p className="academic-solution-heading"><strong>{title??(en?"Solution.":"Solusi.")}</strong></p>
      {paragraphs.map((paragraph,index)=><div className="academic-solution-paragraph" key={index}>
        <Text>{leadingConnector(paragraph)}</Text>
      </div>)}
      {showConclusion&&<div className="academic-solution-conclusion"><Text>{leadingConnector(conclusion!.trim())}</Text></div>}
    </div>
  </div>;
}

/** Keep authored paragraphs intact; never convert every sentence into a numbered step. */
export function splitAcademicSolution(text:string){
  const lines=text.replace(/\\r/g,"").split(/\\n\\s*\\n|\\n(?=\\s*\\([a-z]\\)\\s)/)
    .map(x=>x.trim()).filter(Boolean);
  return lines.length?lines:[text.trim()].filter(Boolean);
}
