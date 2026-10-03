import type { BookLessonContent, BookFormalKind } from "@/data/book-content-types";

export type MeasureProbabilityResultSpec = {
  kind: Exclude<BookFormalKind, "definition" | "note">;
  title: string;
  statement: string;
  proof: string[];
};

export type MeasureProbabilityExampleSpec = {
  title: string;
  problem: string;
  solution: string[];
  conclusion?: string;
};

export type MeasureProbabilityLessonSpec = {
  title: string;
  focus: string;
  definitions: Array<{ title: string; statement: string }>;
  results: MeasureProbabilityResultSpec[];
  examples: MeasureProbabilityExampleSpec[];
  connections?: string;
};

function proofExercise(result: MeasureProbabilityResultSpec) {
  return {
    prompt: "Buktikan " + result.title + ". " + result.statement,
    hint: "Tuliskan seluruh hipotesis, gunakan definisi atau teorema yang relevan, lalu jelaskan setiap inferensi sampai kesimpulan diperoleh.",
    answer: result.proof.join("\n"),
    provenance: "dmath-original" as const,
  };
}

export function buildMeasureProbabilityLesson(spec: MeasureProbabilityLessonSpec): BookLessonContent {
  const definitionNames = spec.definitions.map((item) => item.title).join(", ");
  const resultNames = spec.results.map((item) => item.title).join(", ");
  const baseExercises = [
    {
      prompt: "Tuliskan definisi formal " + spec.definitions[0].title + " dan jelaskan peran setiap syarat dalam definisi tersebut.",
      hint: "Pisahkan objek, domain, dan setiap syarat formal. Berikan alasan mengapa syarat tersebut tidak boleh dihilangkan.",
      answer: "Definisi yang digunakan adalah: " + spec.definitions[0].statement + " Setiap syarat menentukan kelas objek yang sedang dibahas. Untuk memeriksa contoh, seluruh syarat harus diverifikasi satu per satu.",
      provenance: "dmath-original" as const,
    },
    {
      prompt: "Buat satu contoh dan satu noncontoh yang berkaitan dengan " + spec.title + ".",
      hint: "Gunakan objek sesederhana mungkin, lalu ubah satu sifat penting untuk membentuk noncontoh.",
      answer: "Contoh harus memenuhi seluruh syarat definisi pada " + definitionNames + ". Noncontoh dipilih dengan menggagalkan sedikitnya satu syarat secara eksplisit. Perbedaan keduanya harus dijelaskan melalui definisi, bukan hanya melalui intuisi.",
      provenance: "dmath-original" as const,
    },
    {
      prompt: "Jelaskan hubungan antara definisi utama dan hasil formal pada " + spec.title + ".",
      hint: "Tunjukkan bagian definisi yang digunakan pada pembuktian hasil formal.",
      answer: "Definisi utama pada bagian ini adalah " + definitionNames + ", sedangkan hasil formal utamanya adalah " + resultNames + ". Hubungan keduanya diperoleh dengan menelusuri hipotesis hasil formal dan menunjukkan definisi mana yang memastikan setiap langkah pembuktian sah.",
      provenance: "dmath-original" as const,
    },
    {
      prompt: "Identifikasi hipotesis yang paling penting pada salah satu hasil formal " + spec.title + " dan jelaskan apa yang dapat gagal jika hipotesis tersebut dihapus.",
      hint: "Pilih satu syarat seperti nonnegativitas, integrabilitas, sigma-finiteness, independensi, atau keterukuran sesuai konteks.",
      answer: "Dipilih satu hipotesis yang muncul secara eksplisit pada hasil formal. Hipotesis tersebut perlu diperiksa sebelum teorema digunakan. Jika dihapus, kesimpulan dapat gagal atau ekspresi yang digunakan bahkan tidak terdefinisi. Contoh tandingan harus tetap memenuhi hipotesis lain sebanyak mungkin.",
      provenance: "dmath-original" as const,
    },
    {
      prompt: "Selesaikan kembali salah satu contoh pada " + spec.title + " dengan menuliskan alasan pada setiap langkah.",
      hint: "Jangan hanya melakukan manipulasi simbol. Sebutkan definisi atau hasil formal yang dipakai.",
      answer: "Penyelesaian dimulai dari data pada contoh, lalu setiap langkah dikaitkan dengan definisi atau hasil formal yang sesuai. Kesimpulan akhir harus memuat hasil dan alasan mengapa syarat penerapan teorema terpenuhi.",
      provenance: "dmath-original" as const,
    },
  ];

  return {
    intro: [
      spec.focus,
      "Bagian ini dibangun secara bertahap dari definisi formal menuju hasil yang dapat dibuktikan. Perbedaan antara pernyataan titik demi titik, hampir di mana-mana, dalam ukuran, dalam peluang, dan dalam distribusi dinyatakan secara eksplisit ketika relevan.",
      "Definisi utama pada submateri ini adalah " + definitionNames + ". Setiap definisi langsung diikuti contoh agar syarat formal dapat diperiksa pada objek konkret.",
      "Hasil formal utama adalah " + resultNames + ". Pembuktian ditulis dengan menunjukkan penggunaan hipotesis dan alasan setiap pertukaran limit, integral, ekspektasi, atau operasi ukuran.",
      spec.connections ?? "Submateri ini dihubungkan dengan bagian sebelum dan sesudahnya agar konstruksi ukuran, integral Lebesgue, ruang fungsi, dan teori peluang modern terbaca sebagai satu rantai konsep."
    ],
    formal: [
      ...spec.definitions.map((item) => ({
        kind: "definition" as const,
        title: item.title,
        statement: item.statement,
      })),
      ...spec.results,
      ...(spec.connections ? [{
        kind: "note" as const,
        title: "Keterkaitan Konsep",
        statement: spec.connections,
      }] : []),
    ],
    examples: spec.examples,
    exercises: [
      ...baseExercises,
      ...spec.results.map(proofExercise),
    ],
    mistakes: [],
    connections: spec.connections ? [spec.connections] : [],
  };
}

export function buildMeasureProbabilityContent(specs: Record<string, MeasureProbabilityLessonSpec>) {
  return Object.fromEntries(
    Object.entries(specs).map(([slug, spec]) => [slug, buildMeasureProbabilityLesson(spec)])
  ) as Record<string, BookLessonContent>;
}
