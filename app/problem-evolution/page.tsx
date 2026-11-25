import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Problem Solving",description:"Kumpulan soal dan solusi.",path:"/problem-evolution",noIndex:true});
export default function Page(){return <CompetitionCatalog/>;}
