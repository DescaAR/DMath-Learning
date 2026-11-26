const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmath-learning.vercel.app";

export const siteConfig = {
  name: "DMath Learning",
  shortName: "DMath",
  tagline: "Think Deeper, Solve Better.",
  description:
    "Kumpulan soal olimpiade matematika untuk SD, SMP, SMA, dan perguruan tinggi.",
  url: publicSiteUrl,
  basePath: githubPagesBasePath,
  locale: "id_ID",
  language: "id-ID",
  ogImage: "/opengraph-image?v=20261004-3",
  social: {
    youtube: "https://www.youtube.com/@DMathLearning",
  },
  keywords: ["DMath Learning","olimpiade matematika","pemecahan masalah","OSN","ON-MIPA","IMO","IMC","SEAMO","soal harian"],
  nav: [
    { label: "Olimpiade SD", href: "/olimpiade-sd" },
    { label: "Olimpiade SMP", href: "/olimpiade-smp" },
    { label: "Olimpiade SMA", href: "/olimpiade-sma" },
    { label: "Olimpiade Kuliah", href: "/olimpiade-kuliah" },
    { label: "Info Lomba", href: "/info-lomba" },
    { label: "Sumber Lain", href: "/sumber-lain" },
  ],
} as const;
