import { notFound } from "next/navigation";
import { competitionProblems } from "@/data/competition-problems";
import { CompetitionProblemDetail } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const dynamicParams=false;
export function generateStaticParams(){return competitionProblems.map(p=>({id:p.id}));}
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const p=competitionProblems.find(x=>x.id===id);return p?createPageMetadata({title:p.title+" | "+p.level,description:p.topic+" — "+p.source.label+". Petunjuk, pembahasan dan generalisasi.",path:"/problem-solving/"+p.id,type:"article"}):{};}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const p=competitionProblems.find(x=>x.id===id);if(!p)notFound();return <CompetitionProblemDetail key={p.id} problem={p}/>;}
