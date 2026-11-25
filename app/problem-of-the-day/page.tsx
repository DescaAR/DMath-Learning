import { ProblemOfDay } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Problem of the Day",description:"Pilihan persoalan matematika harian untuk Olimpiade SD, SMP, SMA dan mahasiswa.",path:"/problem-of-the-day"});
export default function Page(){return <ProblemOfDay/>;}
