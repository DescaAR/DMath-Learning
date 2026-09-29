import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { deepMaterials } from "@/data/deep-materials";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
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

  const materialRoutes = deepMaterials.map((material) => "/materi/" + material.slug);
  const problemRoutes = basisDimensionProblems.map(
    (problem) => "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + problem.id.toLowerCase()
  );

  return [...staticRoutes, ...materialRoutes, ...problemRoutes].map((route) => ({
    url: siteConfig.url + route,
    lastModified: new Date(),
    priority: route === "" ? 1 : route.includes("/bank-soal/kuliah/") ? 0.75 : 0.7,
  }));
}
