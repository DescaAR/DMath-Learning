import { notFound } from "next/navigation";
import { competitionProblems } from "@/data/competition-problems";
import { CompetitionProblemDetail } from "@/components/CompetitionWorkspace";
import { materialOf } from "@/lib/competition-material";
import { createPageMetadata } from "@/lib/seo";
export const dynamicParams=false;
export function generateStaticParams(){return competitionProblems.map(p=>({id:p.id}));}
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const p=competitionProblems.find(x=>x.id===id);return p?createPageMetadata({title:materialOf(p)+" | "+p.id.toUpperCase()+" | "+p.level,description:materialOf(p)+" — "+p.source.label+". Soal olimpiade matematika.",path:"/problem-solving/"+p.id,type:"article"}):{};}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const p=competitionProblems.find(x=>x.id===id);if(!p)notFound();return <CompetitionProblemDetail key={p.id} problem={p}/>;}
