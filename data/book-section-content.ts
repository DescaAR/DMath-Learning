import type { BookLessonContent } from "@/data/book-content-types";
import { realAnalysisContentA } from "@/data/real-analysis-book-content-a";
import { realAnalysisContentB } from "@/data/real-analysis-book-content-b";
import { complexAnalysisContentA } from "@/data/complex-analysis-book-content-a";
import { complexAnalysisContentB } from "@/data/complex-analysis-book-content-b";
import { additionalBookContent } from "@/data/additional-book-content";
import { expandedBookContent } from "@/data/expanded-book-content";
import { numericalAnalysisContent } from "@/data/numerical-analysis-content";
import { newAcademicContent } from "@/data/new-academic-content";
import { abstractAlgebraContentA } from "@/data/abstract-algebra-book-content-a";
import { abstractAlgebraContentB } from "@/data/abstract-algebra-book-content-b";
import { abstractAlgebraContentC9 } from "@/data/abstract-algebra-book-content-c9";
import { abstractAlgebraContentC10 } from "@/data/abstract-algebra-book-content-c10";
import { abstractAlgebraContentC11 } from "@/data/abstract-algebra-book-content-c11";
import { abstractAlgebraContentD12 } from "@/data/abstract-algebra-book-content-d12";
import { abstractAlgebraContentD13 } from "@/data/abstract-algebra-book-content-d13";
import { abstractAlgebraContentD14 } from "@/data/abstract-algebra-book-content-d14";
import { measureProbabilityContentA } from "@/data/measure-probability-content-a";
import { measureProbabilityContentB } from "@/data/measure-probability-content-b";
import { measureProbabilityContentC } from "@/data/measure-probability-content-c";
import { measureProbabilityContentD } from "@/data/measure-probability-content-d";

export const bookSectionContent:Record<string,BookLessonContent>={
  ...realAnalysisContentA,
  ...realAnalysisContentB,
  ...complexAnalysisContentA,
  ...complexAnalysisContentB,
  ...additionalBookContent,
  ...expandedBookContent,
  ...numericalAnalysisContent,
  ...newAcademicContent,
  ...abstractAlgebraContentA,
  ...abstractAlgebraContentB,
  ...abstractAlgebraContentC9,
  ...abstractAlgebraContentC10,
  ...abstractAlgebraContentC11,
  ...abstractAlgebraContentD12,
  ...abstractAlgebraContentD13,
  ...abstractAlgebraContentD14,
  ...measureProbabilityContentA,
  ...measureProbabilityContentB,
  ...measureProbabilityContentC,
  ...measureProbabilityContentD,
};

export function getBookSectionContent(sectionSlug:string){
  return bookSectionContent[sectionSlug] ?? null;
}
