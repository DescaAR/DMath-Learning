import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Olimpiade Kuliah",description:"Kumpulan soal Olimpiade Kuliah.",path:"/olimpiade-kuliah"});
export default function Page(){return <CompetitionCatalog fixedLevel="Kuliah"/>;}
