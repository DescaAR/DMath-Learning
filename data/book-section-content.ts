import type { BookLessonContent } from "@/data/book-content-types";
import { realAnalysisContentA } from "@/data/real-analysis-book-content-a";
import { realAnalysisContentB } from "@/data/real-analysis-book-content-b";
import { complexAnalysisContentA } from "@/data/complex-analysis-book-content-a";
import { complexAnalysisContentB } from "@/data/complex-analysis-book-content-b";

export const bookSectionContent:Record<string,BookLessonContent>={
  ...realAnalysisContentA,
  ...realAnalysisContentB,
  ...complexAnalysisContentA,
  ...complexAnalysisContentB,
};

export function getBookSectionContent(sectionSlug:string){
  return bookSectionContent[sectionSlug] ?? null;
}
