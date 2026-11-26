import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { ContestDirectory } from "@/components/ContestDirectory";
export const metadata: Metadata=createPageMetadata({title:"Info Lomba Matematika",description:"Temukan olimpiade, lomba riset matematika, dan kompetisi pemodelan matematika untuk pelajar dan mahasiswa.",path:"/info-lomba",keywords:["info lomba matematika","olimpiade matematika","kompetisi riset","pemodelan matematika"]});
export default function ContestInfoPage(){return <ContestDirectory/>;}
