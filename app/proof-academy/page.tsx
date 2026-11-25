import { CompetitionCatalog } from "@/components/CompetitionWorkspace";
import { createPageMetadata } from "@/lib/seo";
export const metadata=createPageMetadata({title:"Proof Academy",description:"Latihan melengkapi argumen, membuktikan klaim dan membangun penalaran matematis.",path:"/proof-academy"});
export default function Page(){return <CompetitionCatalog mode="proof"/>;}
