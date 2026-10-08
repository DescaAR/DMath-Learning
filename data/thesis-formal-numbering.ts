import type { BookChapter } from "@/data/book-curricula";
import type { BookFormalKind } from "@/data/book-content-types";
import { getBookSectionContent } from "@/data/book-section-content";

type FormalNumbers=Partial<Record<BookFormalKind,string[]>>;

const cache=new WeakMap<BookChapter,Map<string,FormalNumbers>>();
const results=new Set<BookFormalKind>(["lemma","proposition","theorem","corollary"]);

function validDefinition(statement:string){
  const value=statement.trim().toLowerCase();
  return Boolean(value)&&
    !["mempelajari ","membahas ","pembahasan ","konsep utama ","submateri ini ","halaman ini ","fokus pada "].some(p=>value.startsWith(p))&&
    !value.includes("secara konseptual dan formal");
}
function validProof(proof?:string[]){
  return !!proof&&proof.length>=2&&proof.every(step=>step.trim().length>0);
}

/** Thesis-style numbering: independent consecutive counters for each kind, reset per chapter. */
export function getChapterFormalNumbers(chapter:BookChapter,sectionSlug:string):FormalNumbers{
  let numbering=cache.get(chapter);
  if(!numbering){
    numbering=new Map();
    const counters:Partial<Record<BookFormalKind,number>>={};
    for(const section of chapter.sections){
      const numbers:FormalNumbers={};
      const content=getBookSectionContent(section.slug);
      for(const item of content?.formal??[]){
        const visible=item.kind==="definition"
          ?validDefinition(item.statement)
          :results.has(item.kind)&&validProof(item.proof);
        if(!visible)continue;
        counters[item.kind]=(counters[item.kind]??0)+1;
        (numbers[item.kind]??=[]).push(chapter.number+"."+counters[item.kind]);
      }
      numbering.set(section.slug,numbers);
    }
    cache.set(chapter,numbering);
  }
  return numbering.get(sectionSlug)??{};
}
