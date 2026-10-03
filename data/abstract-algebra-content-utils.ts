import type { BookLessonContent, BookFormalKind } from "@/data/book-content-types";
import { abstractAlgebraDepthNotes } from "@/data/abstract-algebra-depth-notes";

export type AlgebraResultSpec = {
  kind: Exclude<BookFormalKind, "definition" | "note">;
  title: string;
  statement: string;
  proof: string[];
};

export type AlgebraExampleSpec = {
  title: string;
  problem: string;
  solution: string[];
  conclusion?: string;
};

export type AlgebraExerciseSpec = {
  prompt: string;
  hint: string;
  answer: string;
};

export type AlgebraLessonSpec = {
  title: string;
  focus: string;
  definitions: Array<{ title: string; statement: string }>;
  results: AlgebraResultSpec[];
  examples: AlgebraExampleSpec[];
  exercises: AlgebraExerciseSpec[];
};

export function buildAlgebraLesson(spec: AlgebraLessonSpec, slug?: string): BookLessonContent {
  const depth = slug ? abstractAlgebraDepthNotes[slug] : undefined;
  const definitionTitles = spec.definitions.map((item) => item.title).join(", ");
  const resultTitles = spec.results.map((item) => item.title).join(", ");

  const proofExercises: AlgebraExerciseSpec[] = spec.results.map((result) => ({
    prompt: "Buktikan " + result.title + ". " + result.statement,
    hint: "Mulai dari definisi yang relevan, tuliskan hipotesis secara eksplisit, lalu tunjukkan bagaimana setiap hipotesis digunakan sampai kesimpulan diperoleh.",
    answer: result.proof.join("\n"),
  }));

  const conceptualExercise: AlgebraExerciseSpec[] = depth ? [{
    prompt: "Jelaskan hubungan konsep-konsep utama pada submateri " + spec.title + " dan terangkan mengapa hubungan tersebut penting dalam Struktur Aljabar.",
    hint: "Hubungkan definisi pada bagian ini dengan hasil formal dan konstruksi pada bab-bab berikutnya.",
    answer: depth.connection,
  }] : [];

  return {
    intro: [
      spec.focus,
      ...(depth?.overview ?? []),
      "Definisi formal yang menjadi pusat pembahasan adalah " + definitionTitles + ". Setiap definisi dibaca bersama semua syaratnya agar contoh dan bukan-contoh dapat dibedakan secara tepat.",
      "Hasil formal utama pada submateri ini adalah " + resultTitles + ". Pembuktian tidak diperlakukan sebagai rumus hafalan, tetapi sebagai rangkaian argumen yang menunjukkan kapan dan bagaimana setiap hipotesis digunakan.",
      "Setelah bagian formal, contoh terbahas dan latihan digunakan untuk menguji penerapan definisi, penggunaan teorema, konstruksi contoh, serta penulisan pembuktian yang lengkap."
    ],
    formal: [
      ...spec.definitions.map((item) => ({
        kind: "definition" as const,
        title: item.title,
        statement: item.statement,
      })),
      ...spec.results,
      ...(depth ? [{
        kind: "note" as const,
        title: "Keterkaitan Konsep",
        statement: depth.connection,
      }] : []),
    ],
    examples: spec.examples,
    exercises: [...spec.exercises, ...proofExercises, ...conceptualExercise].map((item) => ({
      ...item,
      provenance: "dmath-original" as const,
    })),
    mistakes: [],
    connections: depth ? [depth.connection] : [],
  };
}

export function buildAlgebraContent(specs: Record<string, AlgebraLessonSpec>) {
  return Object.fromEntries(
    Object.entries(specs).map(([slug, spec]) => [slug, buildAlgebraLesson(spec, slug)])
  ) as Record<string, BookLessonContent>;
}
