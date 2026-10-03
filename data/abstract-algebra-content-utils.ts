import type { BookLessonContent, BookFormalKind } from "@/data/book-content-types";

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

export function buildAlgebraLesson(spec: AlgebraLessonSpec): BookLessonContent {
  return {
    intro: [
      spec.focus,
      "Submateri " + spec.title + " dibangun dari definisi yang harus dibaca bersama seluruh syaratnya. Contoh dipilih untuk memperlihatkan bagaimana definisi bekerja dan untuk membedakan objek yang memenuhi syarat dari objek yang gagal pada satu syarat penting.",
      "Hasil formal pada bagian ini tidak diperlakukan sebagai rumus hafalan. Setiap teorema, lemma, proposisi, atau akibat diikuti pembuktian yang menelusuri penggunaan hipotesis sampai kesimpulan diperoleh.",
      "Setelah bagian formal, contoh terbahas dan latihan digunakan untuk menguji kemampuan menerapkan definisi, memilih teorema yang tepat, serta menuliskan argumen yang sahih."
    ],
    formal: [
      ...spec.definitions.map((item) => ({
        kind: "definition" as const,
        title: item.title,
        statement: item.statement,
      })),
      ...spec.results,
    ],
    examples: spec.examples,
    exercises: spec.exercises.map((item) => ({
      ...item,
      provenance: "dmath-original" as const,
    })),
    mistakes: [],
    connections: [],
  };
}

export function buildAlgebraContent(specs: Record<string, AlgebraLessonSpec>) {
  return Object.fromEntries(
    Object.entries(specs).map(([slug, spec]) => [slug, buildAlgebraLesson(spec)])
  ) as Record<string, BookLessonContent>;
}
