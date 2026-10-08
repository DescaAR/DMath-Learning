"use client";

import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";
import { prepareAcademicSolution, normalizeAcademicConnector } from "@/lib/academic-solution-format";
export { splitAcademicSolution } from "@/lib/academic-solution-format";

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
  const {paragraphs,independentIdea,independentConclusion}=prepareAcademicSolution(steps,idea,conclusion);

  return <div className="academic-solution-prose">
    {known&&<p className="academic-solution-context"><strong>{en?"Given.":"Diketahui."}</strong> <Text>{known}</Text></p>}
    {target&&<p className="academic-solution-context"><strong>{en?"To find or prove.":"Dibuktikan atau ditentukan."}</strong> <Text>{target}</Text></p>}
    {independentIdea&&<p className="academic-solution-idea"><strong>{en?"Approach.":"Gagasan."}</strong> <Text>{independentIdea}</Text></p>}
    <div className="academic-solution-body">
      <p className="academic-solution-heading"><strong>{title??(en?"Solution.":"Solusi.")}</strong></p>
      {paragraphs.map((paragraph,index)=><div className="academic-solution-paragraph" key={index}>
        <Text>{normalizeAcademicConnector(paragraph)}</Text>
      </div>)}
      {independentConclusion&&<div className="academic-solution-conclusion"><Text>{normalizeAcademicConnector(independentConclusion)}</Text></div>}
    </div>
  </div>;
}

