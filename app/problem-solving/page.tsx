import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Problem Solving",description:"Latihan matematika kompetisi SD, SMP, SMA dan mahasiswa dengan petunjuk bertahap dan solusi lengkap.",path:"/problem-solving"});
export default function Page(){return <CompetitionCatalog/>;}
