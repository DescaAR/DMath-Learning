import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Problem Solving",description:"Kumpulan soal dan solusi.",path:"/proof-academy",noIndex:true});
export default function Page(){return <CompetitionCatalog/>;}
