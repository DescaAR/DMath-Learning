import { ProblemOfDay } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Olimpiade SMP — Problem of the Day",description:"Soal harian Olimpiade SMP.",path:"/olimpiade-smp/potd"});
export default function Page(){return <ProblemOfDay fixedLevel="SMP"/>;}
