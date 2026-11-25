import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { competitionProblems } from "@/data/competition-problems";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{
 const pages=["/","/problem-solving/","/problem-of-the-day/","/tentang/","/olimpiade-sd/","/olimpiade-sd/potd/","/olimpiade-smp/","/olimpiade-smp/potd/","/olimpiade-sma/","/olimpiade-sma/potd/","/olimpiade-kuliah/","/olimpiade-kuliah/potd/"];
 return [...pages,...competitionProblems.map(p=>"/problem-solving/"+p.id+"/")].map(route=>({url:siteConfig.url+route,changeFrequency:(route==="/problem-of-the-day/"||route.endsWith("/potd/"))?"daily":"monthly",priority:route==="/"?1:pages.includes(route)?0.9:0.75}));
}
