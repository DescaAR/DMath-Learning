import { basisProblemsA } from "@/data/basis-problems-a";
import { basisProblemsB } from "@/data/basis-problems-b";
import { basisProblemsC } from "@/data/basis-problems-c";
import { basisProblemsD } from "@/data/basis-problems-d";
export type { Problem, ProblemDifficulty, ProblemType } from "@/data/problem-types";

export const basisDimensionProblems = [
  ...basisProblemsA,
  ...basisProblemsB,
  ...basisProblemsC,
  ...basisProblemsD,
];

const curatedIds = new Set([
  "LA-BD-001","LA-BD-003","LA-BD-004","LA-BD-005","LA-BD-006",
  "LA-BD-007","LA-BD-009","LA-BD-011","LA-BD-012","LA-BD-018",
  "LA-BD-021","LA-BD-022","LA-BD-024","LA-BD-026","LA-BD-029",
  "LA-BD-032","LA-BD-038","LA-BD-042","LA-BD-046","LA-BD-050",
  "LA-BD-053","LA-BD-057","LA-BD-060","LA-BD-065","LA-BD-068",
  "LA-BD-076","LA-BD-087","LA-BD-096","LA-BD-098","LA-BD-100"
]);

export const curatedBasisProblems = basisDimensionProblems.filter((problem) =>
  curatedIds.has(problem.id)
);

export const basisProblemMap = Object.fromEntries(
  basisDimensionProblems.map((problem) => [problem.id.toLowerCase(), problem])
);
