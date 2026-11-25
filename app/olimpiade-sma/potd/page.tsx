import { ProblemOfDay } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Olimpiade SMA — Problem of the Day",description:"Soal harian Olimpiade SMA.",path:"/olimpiade-sma/potd"});
export default function Page(){return <ProblemOfDay fixedLevel="SMA"/>;}
