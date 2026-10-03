/**
 * Temporary public-visibility rules.
 *
 * School material remains in the repository and keeps its routes/data.
 * These helpers only control what is surfaced in public navigation,
 * catalogs, search, and the sitemap.
 */
export function isPublicAcademicLevel(level: string, track = "") {
  const value = (level + " " + track).toLowerCase();

  if (
    value.includes("on-mipa") ||
    value.includes("onmipa") ||
    value.includes("mahasiswa") ||
    value.includes("kuliah") ||
    value.includes("universitas")
  ) {
    return true;
  }

  if (
    value.includes("sd") ||
    value.includes("smp") ||
    value.includes("sma")
  ) {
    return false;
  }

  if (value.includes("olimpiade")) return false;

  return true;
}

export function isPublicLearningTrackSlug(slug: string) {
  return slug === "kuliah" || slug === "onmipa";
}

export function isPublicOlympiadHubSlug(slug: string) {
  return slug === "onmipa";
}

export function isPublicContentHref(href: string) {
  const value = href.toLowerCase();

  const hiddenPrefixes = [
    "/belajar/sd",
    "/belajar/smp",
    "/belajar/sma",
    "/belajar/olimpiade-sd",
    "/belajar/olimpiade-smp",
    "/belajar/olimpiade-sma",
    "/olimpiade/sd",
    "/olimpiade/smp",
    "/olimpiade/sma",
  ];

  return !hiddenPrefixes.some((prefix) => value === prefix || value.startsWith(prefix + "/"));
}
