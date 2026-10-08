"use client";

import { RichMath } from "@/components/RichMath";
import type { BookFormalKind } from "@/data/book-content-types";

export type ThesisProofDirection = {
  direction:"forward"|"backward";
  known:string;
  target:string;
  steps:string[];
};
export type ThesisProofTarget = {target:string;steps:string[]};

type Props={
  kind:BookFormalKind;
  number:string;
  title?:string;
  statement:string;
  citation?:string;
  proof?:string[];
  known?:string;
  goal?:string;
  directions?:ThesisProofDirection[];
  targets?:ThesisProofTarget[];
  language?:"id"|"en";
};

const labels:Record<BookFormalKind,[string,string]>={
  definition:["Definisi","Definition"],
  lemma:["Lemma","Lemma"],
  proposition:["Proposisi","Proposition"],
  theorem:["Teorema","Theorem"],
  corollary:["Akibat","Corollary"],
  note:["Catatan","Note"],
};

function Text({children}:{children:string}){
  return <RichMath className="ird-rich-text">{children}</RichMath>;
}

function academicProse(source:string){
  // Style-only normalization: never alter mathematical expressions or assert new claims.
  return source.trim()
    .replace(/(^|[.!?]\s+)Jadi(?=[\s,])/g,"$1Dengan demikian")
    .replace(/(^|[.!?]\s+)Maka(?=[\s,])/g,"$1Oleh karena itu")
    .replace(/(^|[.!?]\s+)Sehingga(?=[\s,])/g,"$1Dengan demikian");
}

function ProofParagraphs({steps}:{steps:string[]}){
  return <div className="thesis-proof-paragraphs">
    {steps.filter((s)=>s.trim()).map((step,index)=>
      <p className="thesis-proof-paragraph" key={index}><Text>{academicProse(step)}</Text></p>
    )}
  </div>;
}

export function ThesisFormalBlock({
  kind,number,title,statement,citation,proof,known,goal,directions,targets,language="id"
}:Props){
  const en=language==="en";
  const name=labels[kind][en?1:0];
  const isProof=kind!=="definition"&&kind!=="note"&&
    !!(proof?.length||directions?.length||targets?.length);
  const text=proof??[];
  const activeDirections=directions?.filter((item)=>item.steps.length)??[];
  const activeTargets=targets?.filter((item)=>item.steps.length)??[];
  const lastStep=text[text.length-1]?.trim()??"";
  const conclusionPattern=/(?:Dengan demikian|Oleh karena itu),?[^.\n]{0,145}\bterbukti\.?\s*$/i;
  const redundantClose=conclusionPattern.test(lastStep);
  const proofBody=redundantClose
    ?[...text.slice(0,-1),lastStep.replace(conclusionPattern,"").trim()].filter(Boolean)
    :text;

  return <div className="thesis-formal-group">
    <article className={"ird-formal thesis-formal ird-"+kind}>
      <div className="thesis-formal-head">
        <strong className="thesis-formal-label">{name} {number}.</strong>
        {citation&&<span className="thesis-citation">{citation}</span>}
        {title&&<span className="thesis-formal-title"><Text>{title}</Text></span>}
      </div>
      <div className="ird-formal-body thesis-formal-body"><Text>{statement}</Text></div>
    </article>
    {isProof&&
      <details className="ird-proof thesis-proof">
        <summary>{en?"Open proof":"Buka Bukti"}</summary>
        <div className="ird-proof-body thesis-proof-body">
          <div className="thesis-proof-lead">
            <strong>{en?"Proof.":"Bukti."}</strong>
            {known&&<span><strong>{en?" Given":" Diketahui"}</strong> <Text>{academicProse(known)}</Text></span>}
            {goal&&<span><strong>{en?" To prove":" Dibuktikan"}</strong> <Text>{academicProse(goal)}</Text></span>}
          </div>

          {activeDirections.length>0&&
            <>
              <p className="thesis-proof-transition">{en?"The proof proceeds in two directions.":"Pembuktian dilakukan dalam dua arah."}</p>
              {activeDirections.map((direction,i)=><div className="thesis-proof-direction" key={i}>
                <p className="thesis-direction-heading">
                  <strong>{direction.direction==="forward"?"(⇒)":"(⇐)"}</strong>
                  <span>{en?"Given":"Diketahui"} <Text>{academicProse(direction.known)}</Text> {en?"To prove":"Dibuktikan"} <Text>{academicProse(direction.target)}</Text></span>
                </p>
                <ProofParagraphs steps={direction.steps}/>
              </div>)}
            </>
          }

          {activeTargets.length>0&&
            <>
              <p className="thesis-proof-transition">{en?"The proof has the following parts.":"Pembuktian dilakukan melalui bagian-bagian berikut."}</p>
              <ol className="thesis-proof-targets">
                {activeTargets.map((item,i)=><li key={i}>
                  <p className="thesis-proof-target"><strong>{en?"To prove":"Dibuktikan bahwa"} <Text>{item.target}</Text></strong></p>
                  <ProofParagraphs steps={item.steps}/>
                </li>)}
              </ol>
            </>
          }

          {activeDirections.length===0&&activeTargets.length===0&&<ProofParagraphs steps={proofBody}/>}
          <p className="thesis-proof-conclusion">
            {en?"Thus, "+name+" "+number+" is proved.":"Dengan demikian, "+name+" "+number+" terbukti."}
            <span aria-hidden="true" className="thesis-qed">■</span>
          </p>
        </div>
      </details>
    }
  </div>;
}
