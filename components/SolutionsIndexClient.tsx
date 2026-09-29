"use client";

import Link from "next/link";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";
import { localizeProblem } from "@/data/problem-translations-en";
import { useLanguage } from "@/components/LanguageProvider";

export function SolutionsIndexClient() {
  const { language } = useLanguage();
  return (
    <div className="solution-index solution-index-rich" data-no-translate>
      {basisDimensionProblems.map((raw) => {
        const problem = localizeProblem(raw, language);
        return (
          <Link
            href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + problem.id.toLowerCase()}
            className="solution-row"
            key={problem.id}
          >
            <span className="problem-id">{problem.id}</span>
            <strong>{problem.title}</strong>
            <span>{problem.subchapter} · {problem.difficulty} · {problem.type}</span>
            <span>→</span>
          </Link>
        );
      })}
    </div>
  );
}
