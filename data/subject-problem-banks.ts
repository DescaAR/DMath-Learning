import { bookSubjects } from "@/data/book-curricula";
import { bookSectionContent } from "@/data/book-section-content";
import { isPublicAcademicLevel, isPublicBookSubjectSlug } from "@/lib/public-content";

export type SubjectBankProblem = {
  id: string;
  subjectSlug: string;
  subjectTitle: string;
  chapterNumber: string;
  chapterTitle: string;
  sectionNumber: string;
  sectionTitle: string;
  concepts: string[];
  prompt: string;
  hint: string;
  answer: string;
};

export type SubjectProblemBank = {
  slug: string;
  title: string;
  level: string;
  source: string;
  problemCount: number;
  chapterCount: number;
  problems: SubjectBankProblem[];
};

const prefixBySubject: Record<string, string> = {
  "analisis-real": "AR",
  "analisis-kompleks": "AK",
  "kombinatorika": "KOM",
  "aljabar-linear": "AL",
  "struktur-aljabar": "SA",
  "kalkulus": "KAL",
  "teori-graf": "TG",
  "persamaan-diferensial": "PD",
  "analisis-numerik": "AN",
  "riset-operasi": "RO",
  "statistika-terapan": "ST",
  "statistika-matematika": "SM",
  "matematika-diskrit": "MD",
  "kalkulus-stokastik": "KS",
  "teori-ukuran-probabilitas": "TUP",
};

function buildBank(subject: (typeof bookSubjects)[number]): SubjectProblemBank {
  const problems: SubjectBankProblem[] = [];
  let serial = 1;
  const prefix = prefixBySubject[subject.slug] ?? "PB";

  for (const chapter of subject.chapters) {
    for (const section of chapter.sections) {
      const exercises = bookSectionContent[section.slug]?.exercises ?? [];
      for (const exercise of exercises) {
        problems.push({
          id: prefix + "-" + String(serial).padStart(3, "0"),
          subjectSlug: subject.slug,
          subjectTitle: subject.title,
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          sectionNumber: section.number,
          sectionTitle: section.title,
          concepts: section.keyIdeas,
          prompt: exercise.prompt,
          hint: exercise.hint,
          answer: exercise.answer,
        });
        serial += 1;
      }
    }
  }

  return {
    slug: subject.slug,
    title: subject.title,
    level: subject.level,
    source: subject.source,
    problemCount: problems.length,
    chapterCount: subject.chapters.length,
    problems,
  };
}

export const subjectProblemBanks: SubjectProblemBank[] = bookSubjects
  .filter(
    (subject) =>
      isPublicBookSubjectSlug(subject.slug) &&
      isPublicAcademicLevel(subject.level, subject.level)
  )
  .map(buildBank)
  .filter((bank) => bank.problemCount > 0);

export const subjectProblemBankSummaries = subjectProblemBanks.map((bank) => ({
  slug: bank.slug,
  title: bank.title,
  level: bank.level,
  problemCount: bank.problemCount,
  chapterCount: bank.chapterCount,
}));

export const subjectProblemBankMap = Object.fromEntries(
  subjectProblemBanks.map((bank) => [bank.slug, bank])
);
