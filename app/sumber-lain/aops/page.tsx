import { OtherSourceCatalog } from "@/components/OtherSourceCatalog";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"AoPS",description:"Kumpulan soal matematika berdasarkan sumber.",path:"/sumber-lain/aops"});
export default function Page(){return <OtherSourceCatalog source="AoPS"/>;}
