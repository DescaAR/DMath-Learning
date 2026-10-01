import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { deepMaterials } from "@/data/deep-materials";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";
import { learningTrackPages } from "@/data/learning-track-pages";
import { olympiadHubs } from "@/data/olympiad-hubs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/belajar",
    "/materi",
    "/bank-soal",
    "/olimpiade",
    "/pembahasan",
    "/tentang",
    "/kuliah/aljabar-linear/basis-dan-dimensi",
    "/kuliah/aljabar-linear/basis-dan-dimensi/latihan",
    "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi",
  ];

  const trackRoutes = learningTrackPages.map((track) => "/belajar/" + track.slug);
  const olympiadRoutes = olympiadHubs.map((hub) => "/olimpiade/" + hub.slug);
  const materialRoutes = deepMaterials.map((material) => "/materi/" + material.slug);
  const problemRoutes = basisDimensionProblems.map(
    (problem) => "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + problem.id.toLowerCase()
  );

  const routes = [...staticRoutes, ...trackRoutes, ...olympiadRoutes, ...materialRoutes, ...problemRoutes];

  return routes.map((route) => ({
    url: siteConfig.url + route,
    changeFrequency: route === "" ? "weekly" : route.startsWith("/materi/") ? "monthly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/materi" || route === "/bank-soal" || route === "/olimpiade"
          ? 0.9
          : route.startsWith("/materi/")
            ? 0.85
            : route.includes("/bank-soal/kuliah/")
              ? 0.75
              : 0.7,
  }));
}
