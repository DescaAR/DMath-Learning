import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Cari Soal",description:"Cari soal menurut topik, jenjang, tingkat kesulitan, dan sumber.",path:"/search",noIndex:true});
export default function SearchPage(){return <CompetitionCatalog/>;}
