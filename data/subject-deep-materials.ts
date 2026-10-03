export type SubjectDeepMaterial = {
  title: string;
  titleEn: string;
  href: string;
  summary: string;
  summaryEn: string;
  difficulty: string;
};

export const subjectDeepMaterials: Record<string, SubjectDeepMaterial[]> = {
  "analisis-real": [
    {
      title: "Integral Riemann dan Darboux",
      titleEn: "Riemann and Darboux Integrals",
      href: "/materi/integral-riemann",
      summary:
        "Pembahasan lengkap Integral Riemann dan Darboux: fungsi terbatas, partisi, partisi berlabel, jumlah Riemann, jumlah Darboux bawah dan atas, integral Darboux bawah dan atas, kriteria keterintegralan, ekuivalensi Riemann–Darboux, kelas fungsi terintegralkan Riemann, sifat integral, osilasi, Kriteria Lebesgue, serta latihan soal dengan solusi dan visualisasi.",
      summaryEn:
        "A complete treatment of Riemann and Darboux integration, including bounded functions, partitions, tagged partitions, Riemann sums, lower and upper Darboux sums and integrals, integrability criteria, Riemann–Darboux equivalence, integrable function classes, integral properties, oscillation, the Lebesgue criterion, exercises, solutions, and visualizations.",
      difficulty: "Lanjut",
    },
  ],
  "kombinatorika": [
    {
      title: "Prinsip Pigeonhole",
      titleEn: "Pigeonhole Principle",
      href: "/materi/prinsip-pigeonhole",
      summary:
        "Prinsip pigeonhole dasar dan umum, pemilihan kotak yang tepat, pembuktian eksistensi, dan aplikasi kombinatorial.",
      summaryEn:
        "Basic and generalized pigeonhole principles, choosing the right boxes, existence proofs, and combinatorial applications.",
      difficulty: "Menengah",
    },
  ],
  "aljabar-linear": [
    {
      title: "Basis dan Dimensi",
      titleEn: "Basis and Dimension",
      href: "/kuliah/aljabar-linear/basis-dan-dimensi",
      summary:
        "Bab lengkap tentang kombinasi linear, span, bebas linear, basis, koordinat, dimensi, basis subruang, ekstensi basis, ruang baris-kolom, dan rank-nullity.",
      summaryEn:
        "A complete chapter on linear combinations, span, linear independence, basis, coordinates, dimension, subspace bases, basis extension, row and column spaces, and rank-nullity.",
      difficulty: "Lanjut",
    },
  ],
};

export const nestedDeepMaterialHrefs = new Set(
  Object.values(subjectDeepMaterials).flatMap((items) => items.map((item) => item.href))
);
