export type ContentStatus = "published" | "draft" | "planned";

export const learningTracks = [
  { title: "Matematika SD", description: "Fondasi bilangan, operasi, geometri, pengukuran, data, peluang, dan pemecahan masalah.", href: "/belajar#sd" },
  { title: "Matematika SMP", description: "Bilangan, aljabar, fungsi, geometri, statistika, peluang, dan diskrit awal.", href: "/belajar#smp" },
  { title: "Matematika SMA", description: "Fungsi, trigonometri, matriks, kalkulus, peluang, statistika, dan kombinatorika.", href: "/belajar#sma" },
  { title: "Matematika Kuliah", description: "Kalkulus, aljabar linear, analisis, struktur aljabar, graf, topologi, dan bidang lanjut.", href: "/belajar#kuliah" },
  { title: "Olimpiade SD", description: "Aritmetika kreatif, pola, geometri, logika, dan strategi pemecahan masalah.", href: "/olimpiade#sd" },
  { title: "Olimpiade SMP", description: "Aljabar, teori bilangan, kombinatorika, geometri, dan strategi problem solving.", href: "/olimpiade#smp" },
  { title: "Olimpiade SMA", description: "Empat bidang utama olimpiade dengan problem solving nonrutin dan pembahasan bertahap.", href: "/olimpiade#sma" },
  { title: "ON-MIPA Matematika", description: "Analisis Real, Analisis Kompleks, Aljabar Linear, Struktur Aljabar, dan Kombinatorika.", href: "/olimpiade#onmipa" },
];

export const subjects = [
  "Aritmetika", "Aljabar", "Teori Bilangan", "Kombinatorika", "Geometri",
  "Trigonometri", "Kalkulus", "Aljabar Linear", "Analisis Real", "Analisis Kompleks",
  "Struktur Aljabar", "Statistika", "Peluang", "Matematika Diskrit", "Teori Graf",
  "Topologi", "Persamaan Diferensial", "Metode Numerik", "Optimisasi", "Pemodelan Matematika",
];

export const materials = [
  { title: "Pecahan", level: "SD", subject: "Aritmetika", status: "planned" as ContentStatus, summary: "Konsep pecahan, pecahan senilai, perbandingan, dan operasi." },
  { title: "Persamaan Linear", level: "SMP", subject: "Aljabar", status: "planned" as ContentStatus, summary: "Persamaan linear satu variabel hingga sistem sederhana." },
  { title: "Fungsi", level: "SMA", subject: "Aljabar", status: "planned" as ContentStatus, summary: "Definisi fungsi, domain, range, komposisi, invers, dan grafik." },
  { title: "Trigonometri", level: "SMA", subject: "Trigonometri", status: "planned" as ContentStatus, summary: "Rasio, identitas, persamaan, grafik, aturan sinus dan cosinus." },
  { title: "Basis dan Dimensi", level: "Kuliah", subject: "Aljabar Linear", status: "published" as ContentStatus, summary: "Kombinasi linear, span, bebas linear, basis, koordinat, dan dimensi.", href: "/kuliah/aljabar-linear/basis-dan-dimensi" },
  { title: "Integral Riemann", level: "Kuliah", subject: "Analisis Real", status: "draft" as ContentStatus, summary: "Partisi, jumlah Riemann, integrabilitas, dan hubungan dengan integral Darboux." },
  { title: "Prinsip Pigeonhole", level: "Kuliah", subject: "Kombinatorika", status: "draft" as ContentStatus, summary: "Prinsip dasar, bentuk umum, dan aplikasi kombinatorial." },
  { title: "Spektrum Graf", level: "Kuliah", subject: "Teori Graf", status: "planned" as ContentStatus, summary: "Matriks graf, nilai eigen, dan pengantar spektrum graf." },
  { title: "Teori Bilangan Olimpiade SMP", level: "Olimpiade SMP", subject: "Teori Bilangan", status: "planned" as ContentStatus, summary: "Keterbagian, prima, gcd/lcm, modulo, dan masalah digit." },
  { title: "Kombinatorika Olimpiade SMA", level: "Olimpiade SMA", subject: "Kombinatorika", status: "planned" as ContentStatus, summary: "Counting, bijeksi, pigeonhole, inklusi-eksklusi, dan invarian." },
  { title: "Aljabar Linear ON-MIPA", level: "ON-MIPA", subject: "Aljabar Linear", status: "planned" as ContentStatus, summary: "Ruang vektor, transformasi linear, rank-nullity, nilai eigen, dan ruang invarian." },
  { title: "Analisis Real ON-MIPA", level: "ON-MIPA", subject: "Analisis Real", status: "planned" as ContentStatus, summary: "Kelengkapan, barisan, kekontinuan, integral, dan konvergensi seragam." },
];

export const researchFields = [
  "Graph Theory", "Graph Labeling", "Spectral Graph Theory", "Graph Topology",
  "Applied Graph Theory", "Network Science", "Combinatorics", "Mathematical Analysis",
];

export const searchIndex = [
  ...materials.map((item) => ({
    type: "Materi",
    title: item.title,
    description: item.summary,
    meta: item.level + " · " + item.subject,
    href: item.href ?? "/materi",
  })),
  { type: "Halaman", title: "Jalur Belajar", description: "Pilih jalur berdasarkan jenjang, kompetisi, atau bidang.", meta: "Navigasi", href: "/belajar" },
  { type: "Halaman", title: "Bank Soal", description: "Kumpulan soal per bab dengan filter dan halaman detail.", meta: "Latihan", href: "/bank-soal" },
  { type: "Halaman", title: "Olimpiade", description: "Jalur kompetisi dari SD hingga ON-MIPA.", meta: "Kompetisi", href: "/olimpiade" },
  { type: "Halaman", title: "Bimbingan", description: "Pendampingan matematika terstruktur untuk berbagai jenjang.", meta: "Program", href: "/bimbingan" },
  { type: "Halaman", title: "Riset", description: "Eksplorasi dan proyek matematika.", meta: "Akademik", href: "/riset" },
];
