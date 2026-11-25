import { ProblemOfDay } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Olimpiade SD — Problem of the Day",description:"Soal harian Olimpiade SD.",path:"/olimpiade-sd/potd"});
export default function Page(){return <ProblemOfDay fixedLevel="SD"/>;}
