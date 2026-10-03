/**
 * Temporary public-visibility rules.
 *
 * School material remains in the repository, but its public routes are
 * temporarily disabled. These helpers control public navigation, catalogs,
 * search, sitemap entries, and route visibility.
 */
export function isPublicAcademicLevel(level: string, track = "") {
  const value = (level + " " + track).toLowerCase();

  if (
    value.includes("sd") ||
    value.includes("smp") ||
    value.includes("sma")
  ) {
    return false;
  }

  if (
    value.includes("on-mipa") ||
    value.includes("onmipa") ||
    value.includes("mahasiswa") ||
    value.includes("kuliah") ||
    value.includes("universitas")
  ) {
    return true;
  }

  if (value.includes("olimpiade")) return false;

  return true;
}

const hiddenPublicMaterialSlugs = new Set([
  "pecahan",
  "persamaan-linear",
  "fungsi",
  "trigonometri",
  "teori-bilangan-olimpiade-smp",
  "kombinatorika-olimpiade-sma",
  "aljabar-linear-onmipa",
  "analisis-real-onmipa",
  "spektrum-graf",
]);

export function isPublicMaterialSlug(slug: string) {
  return !hiddenPublicMaterialSlugs.has(slug);
}

const hiddenPublicBookSubjectSlugs = new Set([
  "olimpiade-matematika-sma",
  "teori-bilangan-olimpiade",
]);

export function isPublicBookSubjectSlug(slug: string) {
  return !hiddenPublicBookSubjectSlugs.has(slug);
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
    "/materi/teori-bilangan-olimpiade",
    "/materi/olimpiade-matematika-sma",
    "/materi/spektrum-graf",
    "/materi/pecahan",
    "/materi/persamaan-linear",
    "/materi/fungsi",
    "/materi/trigonometri",
    "/materi/teori-bilangan-olimpiade-smp",
    "/materi/kombinatorika-olimpiade-sma",
    "/materi/aljabar-linear-onmipa",
    "/materi/analisis-real-onmipa",
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
