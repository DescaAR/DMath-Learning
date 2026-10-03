import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { allBookSections, bookSubjects } from "@/data/book-curricula";
import { deepMaterials } from "@/data/deep-materials";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";
import { learningTrackPages } from "@/data/learning-track-pages";
import { olympiadHubs } from "@/data/olympiad-hubs";
import { isPublicAcademicLevel, isPublicBookSubjectSlug, isPublicLearningTrackSlug, isPublicOlympiadHubSlug, isPublicMaterialSlug } from "@/lib/public-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/materi",
    "/bank-soal",
    "/olimpiade",
    "/latihan-soal",
    "/sumber-belajar-lain",
    "/tentang",
    "/kuliah/aljabar-linear/basis-dan-dimensi",
    "/kuliah/aljabar-linear/basis-dan-dimensi/latihan",
    "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi",
  ];

  const trackRoutes = learningTrackPages.filter((track) => isPublicLearningTrackSlug(track.slug)).map((track) => "/belajar/" + track.slug);
  const olympiadRoutes = olympiadHubs.filter((hub) => isPublicOlympiadHubSlug(hub.slug)).map((hub) => "/olimpiade/" + hub.slug);
  const materialRoutes = deepMaterials.filter((material) => isPublicAcademicLevel(material.level, material.track) && isPublicMaterialSlug(material.slug)).map((material) => "/materi/" + material.slug);
  const bookSubjectRoutes = bookSubjects
    .filter((subject) => isPublicBookSubjectSlug(subject.slug) && isPublicAcademicLevel(subject.level, subject.level))
    .map((subject) => "/materi/" + subject.slug);
  const bookSectionRoutes = allBookSections
    .filter(({subject}) => isPublicBookSubjectSlug(subject.slug) && isPublicAcademicLevel(subject.level, subject.level))
    .map(({subject,section}) => "/materi/" + subject.slug + "/" + section.slug);
  const problemRoutes = basisDimensionProblems.map(
    (problem) => "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + problem.id.toLowerCase()
  );

  const routes = Array.from(new Set([
    ...staticRoutes,
    ...trackRoutes,
    ...olympiadRoutes,
    ...materialRoutes,
    ...bookSubjectRoutes,
    ...bookSectionRoutes,
    ...problemRoutes,
  ]));

  return routes.map((route) => ({
    url: siteConfig.url + route,
    changeFrequency: route === "" ? "weekly" : route.startsWith("/materi/") ? "monthly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/materi" || route === "/bank-soal" || route === "/olimpiade"
          ? 0.9
          : bookSubjectRoutes.includes(route)
            ? 0.9
            : route.startsWith("/materi/")
              ? 0.85
              : route.includes("/bank-soal/kuliah/")
                ? 0.75
                : 0.7,
  }));
}
