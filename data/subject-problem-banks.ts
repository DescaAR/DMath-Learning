import { bookSubjects } from "@/data/book-curricula";
import { bookSectionContent } from "@/data/book-section-content";
import type { BookFormalItem } from "@/data/book-content-types";
import { isPublicAcademicLevel, isPublicBookSubjectSlug } from "@/lib/public-content";

export type SubjectProblemKind =
  | "Latihan"
  | "Contoh"
  | "Definisi"
  | "Pembuktian"
  | "Pemahaman Konsep";

export type SubjectProblemDifficulty = "Dasar" | "Menengah" | "Sulit";

export type SubjectBankProblem = {
  id: string;
  subjectSlug: string;
  subjectTitle: string;
  chapterNumber: string;
  chapterTitle: string;
  sectionNumber: string;
  sectionTitle: string;
  concepts: string[];
  kind: SubjectProblemKind;
  difficulty: SubjectProblemDifficulty;
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

const formalKindName: Record<BookFormalItem["kind"], string> = {
  definition: "Definisi",
  lemma: "Lemma",
  proposition: "Proposisi",
  theorem: "Teorema",
  corollary: "Akibat",
  note: "Catatan",
};

function exerciseDifficulty(index: number, total: number): SubjectProblemDifficulty {
  if (index === 0) return "Dasar";
  if (total >= 3 && index === total - 1) return "Sulit";
  return "Menengah";
}

function formalDifficulty(item: BookFormalItem): SubjectProblemDifficulty {
  if (item.kind === "definition") return "Dasar";
  if (item.kind === "theorem" || item.kind === "lemma") {
    return item.proof?.length ? "Sulit" : "Menengah";
  }
  return "Menengah";
}

function buildFormalPrompt(item: BookFormalItem) {
  const label = formalKindName[item.kind];
  if (item.kind === "definition") {
    return `Tuliskan ${label.toLowerCase()} ${item.title} secara tepat.`;
  }
  if (item.proof?.length) {
    return `Buktikan ${label} ${item.title}. Pernyataan: ${item.statement}`;
  }
  return `Nyatakan ${label} ${item.title} secara tepat, kemudian jelaskan makna utamanya.`;
}

function buildFormalHint(item: BookFormalItem, concepts: string[]) {
  if (item.kind === "definition") {
    return `Perhatikan syarat-syarat yang harus dipenuhi. Konsep kunci: ${concepts
      .slice(0, 4)
      .join(", ")}.`;
  }
  if (item.proof?.length) {
    return `Identifikasi hipotesis dan kesimpulan, lalu susun argumen memakai ${concepts
      .slice(0, 4)
      .join(", ")}.`;
  }
  return `Fokus pada hipotesis, kesimpulan, dan hubungan dengan ${concepts
    .slice(0, 4)
    .join(", ")}.`;
}

function buildFormalAnswer(item: BookFormalItem, sectionSummary: string) {
  if (item.kind === "definition") return item.statement;
  if (item.proof?.length) {
    return [
      `Pernyataan: ${item.statement}`,
      ...item.proof,
      `Dengan demikian, ${formalKindName[item.kind]} ${item.title} terbukti.`,
    ].join("\n\n");
  }
  return `${item.statement}\n\nMakna utama: ${sectionSummary}`;
}

function buildBank(subject: (typeof bookSubjects)[number]): SubjectProblemBank {
  const problems: SubjectBankProblem[] = [];
  let serial = 1;
  const prefix = prefixBySubject[subject.slug] ?? "PB";

  const addProblem = (
    chapter: (typeof subject.chapters)[number],
    section: (typeof chapter.sections)[number],
    data: Omit<
      SubjectBankProblem,
      | "id"
      | "subjectSlug"
      | "subjectTitle"
      | "chapterNumber"
      | "chapterTitle"
      | "sectionNumber"
      | "sectionTitle"
      | "concepts"
    >
  ) => {
    problems.push({
      id: prefix + "-" + String(serial).padStart(3, "0"),
      subjectSlug: subject.slug,
      subjectTitle: subject.title,
      chapterNumber: chapter.number,
      chapterTitle: chapter.title,
      sectionNumber: section.number,
      sectionTitle: section.title,
      concepts: section.keyIdeas,
      ...data,
    });
    serial += 1;
  };

  for (const chapter of subject.chapters) {
    for (const section of chapter.sections) {
      const exercises = bookSectionContent[section.slug]?.exercises ?? [];
      exercises.forEach((exercise, index) => {
        addProblem(chapter, section, {
          kind: "Latihan",
          difficulty: exerciseDifficulty(index, exercises.length),
          prompt: exercise.prompt,
          hint: exercise.hint,
          answer: exercise.answer,
        });
      });
    }
  }

  for (const chapter of subject.chapters) {
    for (const section of chapter.sections) {
      const content = bookSectionContent[section.slug];
      if (!content) continue;

      addProblem(chapter, section, {
        kind: "Pemahaman Konsep",
        difficulty: "Dasar",
        prompt: `Jelaskan inti submateri ${section.title} dan hubungan konsep-konsep utamanya.`,
        hint: `Gunakan konsep ${section.keyIdeas.slice(0, 5).join(", ")} sebagai kerangka jawaban.`,
        answer: [
          section.summary,
          ...content.intro.slice(0, 2),
          `Konsep utama: ${section.keyIdeas.join(", ")}.`,
        ].join("\n\n"),
      });

      const formalItems = content.formal
        .filter((item) => item.kind !== "note")
        .slice(0, 3);

      for (const item of formalItems) {
        addProblem(chapter, section, {
          kind:
            item.kind === "definition"
              ? "Definisi"
              : item.proof?.length
                ? "Pembuktian"
                : "Pemahaman Konsep",
          difficulty: formalDifficulty(item),
          prompt: buildFormalPrompt(item),
          hint: buildFormalHint(item, section.keyIdeas),
          answer: buildFormalAnswer(item, section.summary),
        });
      }

      for (const example of content.examples.slice(0, 2)) {
        addProblem(chapter, section, {
          kind: "Contoh",
          difficulty: "Menengah",
          prompt: example.problem,
          hint: `Gunakan ide pada submateri ${section.title}. Perhatikan ${section.keyIdeas
            .slice(0, 4)
            .join(", ")}.`,
          answer: [
            ...example.solution,
            ...(example.conclusion ? [example.conclusion] : []),
          ].join("\n\n"),
        });
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
