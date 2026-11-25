const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmath-learning.vercel.app";

export const siteConfig = {
  name: "DMath Learning",
  shortName: "DMath",
  tagline: "Think Deeper, Solve Better.",
  description:
    "Platform latihan olimpiade dan problem solving matematika untuk SD, SMP, SMA, dan mahasiswa, dengan petunjuk, pembuktian, dan generalisasi.",
  url: publicSiteUrl,
  basePath: githubPagesBasePath,
  locale: "id_ID",
  language: "id-ID",
  ogImage: "/opengraph-image?v=20261004-3",
  social: {
    youtube: "https://www.youtube.com/@DMathLearning",
  },
  keywords: ["DMath Learning","olimpiade matematika","problem solving","OSN","ON-MIPA","IMO","IMC","SEAMO","proof academy","problem of the day"],
  nav: [
    { label: "Problem Solving", href: "/problem-solving" },
    { label: "Proof Academy", href: "/proof-academy" },
    { label: "Problem Evolution", href: "/problem-evolution" },
    { label: "Problem of the Day", href: "/problem-of-the-day" },
  ],
} as const;
