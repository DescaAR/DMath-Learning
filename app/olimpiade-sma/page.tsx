import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Olimpiade SMA",description:"Kumpulan soal Olimpiade SMA.",path:"/olimpiade-sma"});
export default function Page(){return <CompetitionCatalog fixedLevel="SMA"/>;}
