import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Olimpiade SD",description:"Kumpulan soal Olimpiade SD.",path:"/olimpiade-sd"});
export default function Page(){return <CompetitionCatalog fixedLevel="SD"/>;}
