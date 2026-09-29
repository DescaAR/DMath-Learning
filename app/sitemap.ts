import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/belajar",
    "/materi",
    "/bank-soal",
    "/olimpiade",
    "/pembahasan",
    "/bimbingan",
    "/riset",
    "/tentang",
    "/search",
    "/kuliah/aljabar-linear/basis-dan-dimensi",
    "/kuliah/aljabar-linear/basis-dan-dimensi/latihan",
    "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi",
  ];

  return routes.map((route) => ({
    url: siteConfig.url + route,
    lastModified: new Date(),
    priority: route === "" ? 1 : 0.7,
  }));
}
