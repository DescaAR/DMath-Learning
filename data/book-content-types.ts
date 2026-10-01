export type ContentProvenance="dmath-original"|"user-provided-adapted"|"public-domain"|"licensed"|"competition-reference"|"review-required";
export type BookFormalKind="definition"|"lemma"|"proposition"|"theorem"|"corollary"|"note";
export type BookFormalItem={
  kind:BookFormalKind;
  title:string;
  statement:string;
  proof?:string[];
};
export type BookExample={
  title:string;
  problem:string;
  solution:string[];
  conclusion?:string;
};
export type BookExercise={
  prompt:string;
  hint:string;
  answer:string;
  provenance?:ContentProvenance;
  sourceNote?:string;
};
export type BookLessonContent={
  intro:string[];
  notation?:{symbol:string;meaning:string}[];
  formal:BookFormalItem[];
  examples:BookExample[];
  exercises:BookExercise[];
  mistakes:string[];
  connections:string[];
};
