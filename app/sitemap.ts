import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { competitionProblems } from "@/data/competition-problems";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{
 const pages=["/","/problem-solving/","/proof-academy/","/problem-evolution/","/problem-of-the-day/","/tentang/"];
 return [...pages,...competitionProblems.map(p=>"/problem-solving/"+p.id+"/")].map(route=>({url:siteConfig.url+route,changeFrequency:route==="/problem-of-the-day/"?"daily":"monthly",priority:route==="/"?1:pages.includes(route)?0.9:0.75}));
}
