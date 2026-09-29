import { deepMaterials } from "@/data/deep-materials";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";

export type SearchLevel = "SD" | "SMP" | "SMA" | "Kuliah" | "Umum";
export type SearchTrack = "Reguler" | "Olimpiade" | "Umum";
export type SearchKind = "Materi" | "Soal" | "Teorema" | "Definisi" | "Contoh" | "Halaman";

export type SearchEntry = {
  id: string;
  kind: SearchKind;
  level: SearchLevel;
  track: SearchTrack;
  title: string;
  description: string;
  meta: string;
  href: string;
  keywords: string;
};

function normalizeLevel(level: string): SearchLevel {
  const value = level.toLowerCase();
  if (value.includes("sd")) return "SD";
  if (value.includes("smp")) return "SMP";
  if (value.includes("sma")) return "SMA";
  if (
    value.includes("kuliah") ||
    value.includes("mahasiswa") ||
    value.includes("on-mipa") ||
    value.includes("onmipa")
  ) {
    return "Kuliah";
  }
  return "Umum";
}

function normalizeTrack(track: string, level: string, slug: string): SearchTrack {
  const joined = (track + " " + level + " " + slug).toLowerCase();
  return joined.includes("olimpiade") || joined.includes("on-mipa") || joined.includes("onmipa")
    ? "Olimpiade"
    : "Reguler";
}

const materialEntries: SearchEntry[] = deepMaterials.flatMap((material) => {
  const level = normalizeLevel(material.level);
  const track = normalizeTrack(material.track, material.level, material.slug);
  const baseMeta = [material.level, material.subject, material.track].filter(Boolean).join(" · ");
  const baseHref = "/materi/" + material.slug;

  const main: SearchEntry = {
    id: "material-" + material.slug,
    kind: "Materi",
    level,
    track,
    title: material.title,
    description: material.summary,
    meta: baseMeta,
    href: baseHref,
    keywords: [
      material.subject,
      material.track,
      material.level,
      ...material.prerequisites,
      ...material.objectives,
      ...material.conceptMap,
      ...material.related,
    ].join(" "),
  };

  const definitions: SearchEntry[] = material.definitions.map((item, index) => ({
    id: "definition-" + material.slug + "-" + index,
    kind: "Definisi",
    level,
    track,
    title: item.title,
    description: item.body,
    meta: "Definisi · " + material.title + " · " + material.subject,
    href: baseHref + "#definisi",
    keywords: material.title + " " + material.subject + " definition definisi",
  }));

  const theorems: SearchEntry[] = material.theorems.map((item, index) => ({
    id: "theorem-" + material.slug + "-" + index,
    kind: "Teorema",
    level,
    track,
    title: item.title,
    description: item.statement,
    meta: "Teorema · " + material.title + " · " + material.subject,
    href: baseHref + "#teorema",
    keywords: [material.title, material.subject, item.why, ...item.proof].join(" "),
  }));

  const examples: SearchEntry[] = material.examples.map((item, index) => ({
    id: "example-" + material.slug + "-" + index,
    kind: "Contoh",
    level,
    track,
    title: item.title,
    description: item.problem,
    meta: "Contoh · " + material.title + " · " + material.subject,
    href: baseHref + "#contoh",
    keywords: [material.title, material.subject, ...item.solution].join(" "),
  }));

  return [main, ...definitions, ...theorems, ...examples];
});

const basisMaterial: SearchEntry = {
  id: "material-basis-dimensi",
  kind: "Materi",
  level: "Kuliah",
  track: "Reguler",
  title: "Basis dan Dimensi",
  description:
    "Kombinasi linear, span, bebas linear, basis, koordinat, dimensi, basis subruang, ekstensi basis, ruang baris-kolom, dan rank-nullity.",
  meta: "Kuliah · Aljabar Linear · Reguler",
  href: "/kuliah/aljabar-linear/basis-dan-dimensi",
  keywords:
    "basis dimensi span kombinasi linear bebas linear linearly independent coordinates rank nullity row space column space subspace vector space",
};

const problemEntries: SearchEntry[] = basisDimensionProblems.map((problem) => ({
  id: "problem-" + problem.id,
  kind: "Soal",
  level: "Kuliah",
  track: "Reguler",
  title: problem.id + " · " + problem.title,
  description: problem.problem,
  meta:
    "Soal · Basis dan Dimensi · " +
    problem.subchapter +
    " · " +
    problem.difficulty +
    " · " +
    problem.type,
  href:
    "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" +
    problem.id.toLowerCase(),
  keywords: [
    problem.subchapter,
    problem.difficulty,
    problem.type,
    ...problem.concepts,
    problem.hint1,
    problem.hint2,
    problem.known,
    problem.target,
    problem.idea,
    ...problem.solution,
    problem.answer,
    problem.insight,
  ].join(" "),
}));

const pages: SearchEntry[] = [
  {
    id: "page-learn",
    kind: "Halaman",
    level: "Umum",
    track: "Umum",
    title: "Jalur Belajar",
    description: "Pilih jalur berdasarkan jenjang, bidang, dan tujuan belajar.",
    meta: "Navigasi",
    href: "/belajar",
    keywords: "SD SMP SMA kuliah universitas olimpiade ON-MIPA belajar learning track",
  },
  {
    id: "page-materials",
    kind: "Halaman",
    level: "Umum",
    track: "Reguler",
    title: "Perpustakaan Materi",
    description: "Kumpulan materi matematika terstruktur dari sekolah hingga universitas.",
    meta: "Materi",
    href: "/materi",
    keywords: "materi materials library SD SMP SMA kuliah",
  },
  {
    id: "page-bank",
    kind: "Halaman",
    level: "Kuliah",
    track: "Reguler",
    title: "Bank Soal",
    description: "Kumpulan soal dengan filter, hint, dan pembahasan lengkap.",
    meta: "Latihan",
    href: "/bank-soal",
    keywords: "bank soal practice problems latihan pembahasan",
  },
  {
    id: "page-olympiad",
    kind: "Halaman",
    level: "Umum",
    track: "Olimpiade",
    title: "Olimpiade",
    description: "Jalur matematika kompetisi dari SD hingga ON-MIPA.",
    meta: "Kompetisi",
    href: "/olimpiade",
    keywords: "olimpiade olympiad SD SMP SMA ON-MIPA competition",
  },
  {
    id: "page-solutions",
    kind: "Halaman",
    level: "Umum",
    track: "Umum",
    title: "Pembahasan",
    description: "Indeks pembahasan soal DMath Learning.",
    meta: "Pembahasan",
    href: "/pembahasan",
    keywords: "solution pembahasan jawaban answer",
  },
  {
    id: "page-tutoring",
    kind: "Halaman",
    level: "Umum",
    track: "Umum",
    title: "Bimbingan",
    description: "Program pendampingan matematika dan problem solving.",
    meta: "Program",
    href: "/bimbingan",
    keywords: "tutoring bimbingan belajar program",
  },
  {
    id: "page-research",
    kind: "Halaman",
    level: "Kuliah",
    track: "Umum",
    title: "Riset",
    description: "Eksplorasi proyek dan catatan akademik matematika.",
    meta: "Akademik",
    href: "/riset",
    keywords: "research riset project graph analysis combinatorics",
  },
];

export const fullSearchIndex: SearchEntry[] = [
  ...materialEntries,
  basisMaterial,
  ...problemEntries,
  ...pages,
];
