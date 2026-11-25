import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Problem Evolution",description:"Eksplorasi variasi soal dan generalisasi matematis untuk setiap jenjang.",path:"/problem-evolution"});
export default function Page(){return <CompetitionCatalog mode="evolve"/>;}
