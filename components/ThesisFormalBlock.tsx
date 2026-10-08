"use client";

import { RichMath } from "@/components/RichMath";
import type { BookFormalKind } from "@/data/book-content-types";
import {
  parseThesisProof,
  type ThesisProofDirection,
  type ThesisProofTarget,
} from "@/lib/thesis-proof-parser";

export type { ThesisProofDirection, ThesisProofTarget };

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

const names:Record<BookFormalKind,[string,string]>={
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

function normalizeProse(source:string){
  // Only normalize connective words at sentence boundaries; never rewrite formulas.
  return source.trim()
    .replace(/(^|[.!?]\s+)Jadi(?=[\s,])/g,"$1Dengan demikian")
    .replace(/(^|[.!?]\s+)Maka(?=[\s,])/g,"$1Oleh karena itu")
    .replace(/(^|[.!?]\s+)Sehingga(?=[\s,])/g,"$1Dengan demikian");
}

const repeatedClosing=/(?:^|\s+)(?:Dengan demikian|Oleh karena itu),?\s+(?:(?:kedua|ketiga)\s+)?(?:teorema|lemma|lema|proposisi|akibat|identitas|hasil|pernyataan|sifat)(?:\s+(?:ini|tersebut|di atas))?\s+terbukti\.?\s*$/i;

function cleanClosing(source:string){
  return source.replace(repeatedClosing,"").trim();
}

function ProofParagraphs({steps}:{steps:string[]}){
  return <div className="thesis-proof-paragraphs">
    {steps.map((step,index)=>cleanClosing(step)).filter(Boolean).map((step,index)=>
      <div className="thesis-proof-paragraph" key={index}><Text>{normalizeProse(step)}</Text></div>
    )}
  </div>;
}

export function ThesisFormalBlock({
  kind,number,title,statement,citation,proof,known,goal,directions,targets,language="id"
}:Props){
  const en=language==="en";
  const name=names[kind][en?1:0];
  const parsed=parseThesisProof(proof??[]);
  const activeDirections=directions?.length?directions:parsed.directions;
  const activeTargets=targets?.length?targets:parsed.targets;
  const assumption=known??parsed.known;
  const objective=goal??parsed.goal;
  const showProof=kind!=="definition"&&kind!=="note"&&
    !!((proof??[]).some(p=>p.trim())||activeDirections.length||activeTargets.length);
  const hasExplicitClosing=parsed.alreadyConcluded &&
    ![...parsed.paragraphs,...parsed.directions.flatMap(d=>d.steps),...parsed.targets.flatMap(t=>t.steps)]
      .some(item=>repeatedClosing.test(item));

  return <div className="thesis-formal-group">
    <article className={"ird-formal thesis-formal ird-"+kind}>
      <div className="thesis-formal-head">
        <strong className="thesis-formal-label">{name} {number}.</strong>
        {citation&&<span className="thesis-citation">{citation}</span>}
        {title&&<span className="thesis-formal-title"><Text>{title}</Text></span>}
      </div>
      <div className="ird-formal-body thesis-formal-body"><Text>{statement}</Text></div>
    </article>

    {showProof&&<details className="ird-proof thesis-proof">
      <summary>{en?"Buka Bukti / Open Proof":"Buka Bukti"}</summary>
      <div className="ird-proof-body thesis-proof-body">
        <div className="thesis-proof-lead">
          <strong>{en?"Proof.":"Bukti."}</strong>
          {assumption&&<span className="thesis-proof-assumption"> <strong>{en?"Given":"Diketahui"}</strong> <Text>{normalizeProse(assumption)}</Text></span>}
          {objective&&<span className="thesis-proof-objective"> <strong>{en?"To prove":"Dibuktikan"}</strong> <Text>{normalizeProse(objective)}</Text></span>}
        </div>

        {parsed.introduction.length>0&&<ProofParagraphs steps={parsed.introduction}/>}
        {parsed.paragraphs.length>0&&<ProofParagraphs steps={parsed.paragraphs}/>}

        {activeDirections.length>0&&<>
          {parsed.introduction.length===0&&
            <p className="thesis-proof-transition">{en?"The proof proceeds in two directions.":"Pembuktian dilakukan dalam dua arah."}</p>}
          {activeDirections.map((part,index)=><section className="thesis-proof-direction" key={index}>
            <div className="thesis-direction-heading">
              <strong>{part.direction==="forward"?"(⇒)":"(⇐)"}</strong>
              <div>
                {part.known&&<span><strong>{en?"Given":"Diketahui"}</strong> <Text>{normalizeProse(part.known)}</Text> </span>}
                {part.target&&<span><strong>{en?"To prove":"Dibuktikan"}</strong> <Text>{normalizeProse(part.target)}</Text></span>}
              </div>
            </div>
            <ProofParagraphs steps={part.steps}/>
          </section>)}
        </>}

        {activeTargets.length>0&&<>
          {parsed.introduction.length===0&&
            <p className="thesis-proof-transition">{en?"The proof follows the parts below.":"Pembuktian dilakukan melalui bagian-bagian berikut."}</p>}
          <ol className="thesis-proof-targets">
            {activeTargets.map((part,index)=><li key={index}>
              {part.title&&part.title!==part.target&&
                <p className="thesis-part-title"><strong><Text>{part.title}</Text></strong></p>}
              {part.known&&<p className="thesis-proof-assumption">
                <strong>{en?"Given":"Diketahui"}</strong> <Text>{normalizeProse(part.known)}</Text>
              </p>}
              <p className="thesis-proof-target"><strong>{en?"To prove":"Dibuktikan bahwa"} <Text>{part.target}</Text></strong></p>
              <ProofParagraphs steps={part.steps}/>
            </li>)}
          </ol>
        </>}
        <p className="thesis-proof-conclusion">
          {!hasExplicitClosing&&(en
            ?"Thus, "+name+" "+number+" is proved."
            :"Dengan demikian, "+name+" "+number+" terbukti.")}
          <span aria-hidden="true" className="thesis-qed">■</span>
        </p>
      </div>
    </details>}
  </div>;
}
