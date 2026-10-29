import { deepMaterials } from "@/data/deep-materials";

export type ContentStatus = "published" | "draft" | "planned";

export const learningTracks = [
  { title: "Matematika SD", description: "Fondasi bilangan, operasi, geometri, pengukuran, data, peluang, dan pemecahan masalah.", href: "/belajar/sd" },
  { title: "Matematika SMP", description: "Bilangan, aljabar, fungsi, geometri, statistika, peluang, dan diskrit awal.", href: "/belajar/smp" },
  { title: "Matematika SMA", description: "Fungsi, trigonometri, matriks, kalkulus, peluang, statistika, dan kombinatorika.", href: "/belajar/sma" },
  { title: "Matematika Kuliah", description: "Kalkulus, aljabar linear, analisis, struktur aljabar, matematika diskrit, statistika, probabilitas, riset operasi, analisis numerik, kalkulus stokastik, dan bidang lanjut.", href: "/belajar/kuliah" },
  { title: "Olimpiade SD", description: "Aritmetika kreatif, pola, geometri, logika, dan strategi pemecahan masalah.", href: "/belajar/olimpiade-sd" },
  { title: "Olimpiade SMP", description: "Aljabar, teori bilangan, kombinatorika, geometri, dan strategi problem solving.", href: "/belajar/olimpiade-smp" },
  { title: "Olimpiade SMA", description: "Empat bidang utama olimpiade dengan problem solving nonrutin dan pembahasan bertahap.", href: "/belajar/olimpiade-sma" },
  { title: "ON-MIPA Matematika", description: "Analisis Real, Analisis Kompleks, Aljabar Linear, Struktur Aljabar, dan Kombinatorika.", href: "/belajar/onmipa" },
];

export const subjects = [
  "Aritmetika", "Aljabar", "Teori Bilangan", "Kombinatorika", "Geometri",
  "Trigonometri", "Kalkulus", "Aljabar Linear", "Analisis Real", "Analisis Kompleks",
  "Struktur Aljabar", "Statistika", "Peluang", "Matematika Diskrit", "Teori Graf",
  "Topologi", "Persamaan Diferensial", "Analisis Numerik", "Metode Numerik", "Optimisasi", "Pemodelan Matematika", "Riset Operasi", "Statistika Terapan", "Statistika Matematika", "Kalkulus Stokastik", "Teori Ukuran & Probabilitas",
];

export const materials = [
  {
    title: "Pemodelan Matematika: Model Deterministik dan Stokastik",
    level: "Kuliah",
    subject: "Pemodelan Matematika",
    status: "published" as ContentStatus,
    summary: "Formulasi skenario, risiko ekspektasian, identifiabilitas, kelayakan tangguh, fraktil kritis, tujuh pembuktian dan solusi soal lengkap.",
    href: "/materi/riset-operasi/or-model-deterministik-stokastik",
  },
  {
    title: "Ukuran Pemusatan: Rata-rata, Median, Bobot, dan Pencilan",
    level: "Kuliah",
    subject: "Statistika",
    status: "published" as ContentStatus,
    summary: "Definisi dan contoh langsung, optimalitas rata-rata serta median dengan pembuktian, delapan soal lengkap, dan eksplorasi pencilan interaktif.",
    href: "/materi/statistika-terapan/sta-central",
  },
  {
    title: "Probabilitas Kontinu: Densitas, CDF, Ekspektasi, dan Pengondisian",
    level: "Kuliah",
    subject: "Peluang",
    status: "published" as ContentStatus,
    summary: "Normalisasi densitas, CDF, peluang interval, ekspektasi, transformasi monoton, probabilitas bersyarat, teorema dan pembuktian, serta solusi integral rinci.",
    href: "/materi/kalkulus/calc-probability",
  },
  {
    title: "Optimisasi Satu Variabel: Ekstrem Global dan Konveksitas",
    level: "Kuliah",
    subject: "Optimisasi",
    status: "published" as ContentStatus,
    summary: "Daerah layak, ekstrem lokal dan global, syarat Fermat, kekonveksan, bukti dua arah, kasus ujung dan solusi soal mendalam.",
    href: "/materi/kalkulus/calc-optimization",
  },
  {
    title: "Garis, Lingkaran, dan Parabola: Geometri Analitik",
    level: "Kuliah",
    subject: "Geometri",
    status: "published" as ContentStatus,
    summary: "Garis dan jarak, lingkaran, garis singgung, fokus–direktriks parabola, pembuktian dua arah, soal lengkap, dan laboratorium interaktif.",
    href: "/materi/kalkulus/calc-app-conics-basics",
  },
  ...deepMaterials.map((material) => ({
    title: material.title,
    level: material.level,
    subject: material.subject,
    status: "published" as ContentStatus,
    summary: material.summary,
    href: "/materi/" + material.slug,
  })),
  {
    title: "Metode Newton: Konvergensi dan Analisis Galat",
    level: "Kuliah",
    subject: "Metode Numerik",
    status: "published" as ContentStatus,
    summary: "Iterasi Newton, akar sederhana dan multipel, pembuktian konvergensi lokal kuadratik, batas galat residual, contoh dan latihan terbahas.",
    href: "/materi/analisis-numerik/num-newton",
  },
  {
    title: "Ruang Metrik: Fondasi Topologi",
    level: "Kuliah",
    subject: "Topologi",
    status: "published" as ContentStatus,
    summary: "Aksioma metrik, bola terbuka, konvergensi, barisan Cauchy, kelengkapan, dan karakterisasi kontinuitas melalui barisan, dengan pembuktian lengkap serta visualisasi interaktif.",
    href: "/materi/analisis-real/ruang-metrik",
  },
  {
    title: "Basis dan Dimensi",
    level: "Kuliah",
    subject: "Aljabar Linear",
    status: "published" as ContentStatus,
    summary: "Bab gold standard: kombinasi linear, span, bebas linear, basis, koordinat, dimensi, basis subruang, ekstensi basis, ruang baris-kolom, dan rank-nullity.",
    href: "/kuliah/aljabar-linear/basis-dan-dimensi",
  },
].sort((a, b) => {
  const order = ["SD", "SMP", "SMA", "Kuliah", "Olimpiade SMP", "Olimpiade SMA", "Olimpiade Mahasiswa / ON-MIPA"];
  return order.indexOf(a.level) - order.indexOf(b.level);
});


export const searchIndex = [
  ...materials.map((item) => ({
    type: "Materi",
    title: item.title,
    description: item.summary,
    meta: item.level + " · " + item.subject,
    href: item.href,
  })),
  { type: "Halaman", title: "Jalur Belajar", description: "Pilih jalur berdasarkan jenjang, kompetisi, atau bidang.", meta: "Navigasi", href: "/belajar" },
  { type: "Halaman", title: "Bank Soal", description: "Kumpulan soal per bab dengan filter dan halaman detail.", meta: "Latihan", href: "/bank-soal" },
  { type: "Halaman", title: "Olimpiade", description: "Jalur kompetisi dari SD hingga ON-MIPA.", meta: "Kompetisi", href: "/olimpiade" },];
