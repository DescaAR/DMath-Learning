import { ProblemOfDay } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Olimpiade Kuliah — Problem of the Day",description:"Soal harian Olimpiade Kuliah.",path:"/olimpiade-kuliah/potd"});
export default function Page(){return <ProblemOfDay fixedLevel="Kuliah"/>;}
