import type { Problem } from "@/data/problem-types";
import { problemTranslationsEnA } from "@/data/problem-translations-en-a";
import { problemTranslationsEnB } from "@/data/problem-translations-en-b";
import { problemTranslationsEnC } from "@/data/problem-translations-en-c";
import { problemTranslationsEnD } from "@/data/problem-translations-en-d";

export type ProblemTranslation = Omit<Problem, "id" | "difficulty" | "type"> & {
  difficulty: string;
  type: string;
};

export type LocalizedProblem = Omit<Problem, "difficulty" | "type"> & {
  difficulty: string;
  type: string;
};

export const problemTranslationEnMap: Record<string, ProblemTranslation> = {
  ...problemTranslationsEnA,
  ...problemTranslationsEnB,
  ...problemTranslationsEnC,
  ...problemTranslationsEnD,
};

export function localizeProblem(problem: Problem, language: "id" | "en"): LocalizedProblem {
  if (language === "id") return problem;
  const translated = problemTranslationEnMap[problem.id];
  return translated ? { id: problem.id, ...translated } : problem;
}
