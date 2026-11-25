import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Kumpulan Soal",description:"Kumpulan soal.",path:"/proof-academy",noIndex:true});
export default function Page(){return <CompetitionCatalog/>;}
