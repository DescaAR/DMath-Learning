import type { BookLessonContent } from "@/data/book-content-types";
import { realAnalysisContentA } from "@/data/real-analysis-book-content-a";
import { realAnalysisContentB } from "@/data/real-analysis-book-content-b";
import { complexAnalysisContentA } from "@/data/complex-analysis-book-content-a";
import { complexAnalysisContentB } from "@/data/complex-analysis-book-content-b";
import { additionalBookContent } from "@/data/additional-book-content";
import { expandedBookContent } from "@/data/expanded-book-content";
import { numericalAnalysisContent } from "@/data/numerical-analysis-content";

export const bookSectionContent:Record<string,BookLessonContent>={
  ...realAnalysisContentA,
  ...realAnalysisContentB,
  ...complexAnalysisContentA,
  ...complexAnalysisContentB,
  ...additionalBookContent,
  ...expandedBookContent,
  ...numericalAnalysisContent,
};

export function getBookSectionContent(sectionSlug:string){
  return bookSectionContent[sectionSlug] ?? null;
}
