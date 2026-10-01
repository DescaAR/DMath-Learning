import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { basisDimensionProblems, basisProblemMap } from "@/data/basis-dimension-problems";
import { ProblemDetailClient } from "@/components/ProblemDetailClient";

export function generateStaticParams() {
  return basisDimensionProblems.map((problem) => ({ id: problem.id.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const problem = basisProblemMap[id.toLowerCase()];
  if (!problem) return {};

  return createPageMetadata({
    title: problem.id + " — " + problem.title,
    description: "Soal " + problem.subchapter + " tingkat " + problem.difficulty + " pada Bank Soal Basis dan Dimensi DMath Learning.",
    path: "/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + problem.id.toLowerCase(),
    type: "article",
    keywords: ["soal basis dan dimensi", problem.subchapter, "aljabar linear"],
  });
}

export default async function ProblemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const problem = basisProblemMap[id.toLowerCase()];
  if (!problem) notFound();

  const index = basisDimensionProblems.findIndex((item) => item.id === problem.id);
  const previous = index > 0 ? basisDimensionProblems[index - 1] : null;
  const next = index < basisDimensionProblems.length - 1 ? basisDimensionProblems[index + 1] : null;

  return <ProblemDetailClient rawProblem={problem} rawPrevious={previous} rawNext={next} />;
}
