import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Olimpiade SMP",description:"Kumpulan soal Olimpiade SMP.",path:"/olimpiade-smp"});
export default function Page(){return <CompetitionCatalog fixedLevel="SMP"/>;}
