import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Kumpulan Soal",description:"Latihan matematika kompetisi SD, SMP, SMA dan mahasiswa.",path:"/problem-solving"});
export default function Page(){return <CompetitionCatalog/>;}
