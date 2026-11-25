import { OtherSourceCatalog } from "@/components/OtherSourceCatalog";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"MathNet",description:"Kumpulan soal matematika berdasarkan sumber.",path:"/sumber-lain/mathnet"});
export default function Page(){return <OtherSourceCatalog source="MathNet"/>;}
