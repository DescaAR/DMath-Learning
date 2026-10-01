import type { ContentProvenance } from "@/data/book-content-types";
export type ProblemDifficulty = "Dasar" | "Menengah" | "Sulit" | "Sangat Sulit" | "Challenge";
export type ProblemType = "Konsep" | "Hitungan" | "Pembuktian" | "True/False" | "Counterexample" | "Construction";

export type Problem = {
  id: string;
  title: string;
  subchapter: string;
  difficulty: ProblemDifficulty;
  type: ProblemType;
  estimatedTime: string;
  concepts: string[];
  problem: string;
  hint1: string;
  hint2: string;
  known: string;
  target: string;
  idea: string;
  solution: string[];
  answer: string;
  alternative?: string;
  mistake: string;
  insight: string;
  provenance?: ContentProvenance;
  sourceNote?: string;
};
