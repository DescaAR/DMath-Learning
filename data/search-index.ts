import { deepMaterials } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";
import { localizeProblem } from "@/data/problem-translations-en";
import { materialPractice } from "@/data/material-practice";
import { materialPracticeExtra } from "@/data/material-practice-extra";
import { materialExtensions } from "@/data/material-extensions";
import { materialExplorations } from "@/data/material-explorations";
import { learningTrackPages } from "@/data/learning-track-pages";
import { olympiadHubs } from "@/data/olympiad-hubs";
import { formalChapterContent } from "@/data/formal-chapter-content";

export type SearchLevel = "SD" | "SMP" | "SMA" | "Kuliah" | "Umum";
export type SearchTrack = "Reguler" | "Olimpiade" | "Umum";
export type SearchKind = "Materi" | "Soal" | "Teorema" | "Definisi" | "Contoh" | "Halaman";
export type SearchDifficulty = "Dasar" | "Menengah" | "Sulit" | "Sangat Sulit" | "Challenge" | "Umum";

export type SearchEntry = {
  id: string;
  kind: SearchKind;
  level: SearchLevel;
  track: SearchTrack;
  subject: string;
  subjectEn: string;
  difficulty: SearchDifficulty;
  title: string;
  description: string;
  meta: string;
  href: string;
  keywords: string;
  titleEn: string;
  descriptionEn: string;
  metaEn: string;
  keywordsEn: string;
};

function normalizeLevel(level: string): SearchLevel {
  const value = level.toLowerCase();
  if (value.includes("sd")) return "SD";
  if (value.includes("smp")) return "SMP";
  if (value.includes("sma")) return "SMA";
  if (value.includes("kuliah") || value.includes("mahasiswa") || value.includes("on-mipa") || value.includes("onmipa")) return "Kuliah";
  return "Umum";
}

function normalizeTrack(track: string, level: string, slug: string): SearchTrack {
  const joined=(track+" "+level+" "+slug).toLowerCase();
  return joined.includes("olimpiade")||joined.includes("on-mipa")||joined.includes("onmipa")?"Olimpiade":"Reguler";
}

function normalizeDifficulty(value: string): SearchDifficulty {
  const v=value.toLowerCase();
  if (v.includes("challenge") || v.includes("menantang")) return "Challenge";
  if (v.includes("sangat sulit") || v.includes("very advanced")) return "Sangat Sulit";
  if (v.includes("lanjut") || v.includes("advanced") || v.includes("sulit")) return "Sulit";
  if (v.includes("menengah") || v.includes("intermediate")) return "Menengah";
  if (v.includes("dasar") || v.includes("basic")) return "Dasar";
  return "Umum";
}

const materialEntries: SearchEntry[] = deepMaterials.flatMap((material) => {
  const en=deepMaterialEnMap[material.slug] ?? material;
  const level=normalizeLevel(material.level);
  const track=normalizeTrack(material.track,material.level,material.slug);
  const difficulty=normalizeDifficulty(material.difficulty);
  const baseHref="/materi/"+material.slug;
  const meta=[material.level,material.subject,material.track].filter(Boolean).join(" · ");
  const metaEn=[en.level,en.subject,en.track].filter(Boolean).join(" · ");

  const main: SearchEntry={
    id:"material-"+material.slug,kind:"Materi",level,track,
    subject:material.subject,subjectEn:en.subject,difficulty,
    title:material.title,description:material.summary,meta,href:baseHref,
    keywords:[material.subject,material.track,material.level,...material.prerequisites,...material.objectives,...material.conceptMap,...material.related].join(" "),
    titleEn:en.title,descriptionEn:en.summary,metaEn,
    keywordsEn:[en.subject,en.track,en.level,...en.prerequisites,...en.objectives,...en.conceptMap,...en.related].join(" ")
  };

  const definitions=material.definitions.map((item,index):SearchEntry=>{
    const e=en.definitions[index] ?? item;
    return {id:"definition-"+material.slug+"-"+index,kind:"Definisi",level,track,subject:material.subject,subjectEn:en.subject,difficulty,title:item.title,description:item.body,meta:"Definisi · "+material.title+" · "+material.subject,href:baseHref+"#definisi",keywords:material.title+" "+material.subject+" definisi",titleEn:e.title,descriptionEn:e.body,metaEn:"Definition · "+en.title+" · "+en.subject,keywordsEn:en.title+" "+en.subject+" definition"};
  });
  const theorems=material.theorems.map((item,index):SearchEntry=>{
    const e=en.theorems[index] ?? item;
    return {id:"theorem-"+material.slug+"-"+index,kind:"Teorema",level,track,subject:material.subject,subjectEn:en.subject,difficulty,title:item.title,description:item.statement,meta:"Teorema · "+material.title+" · "+material.subject,href:baseHref+"#teorema",keywords:[material.title,material.subject,item.why,...item.proof].join(" "),titleEn:e.title,descriptionEn:e.statement,metaEn:"Theorem · "+en.title+" · "+en.subject,keywordsEn:[en.title,en.subject,e.why,...e.proof].join(" ")};
  });
  const examples=material.examples.map((item,index):SearchEntry=>{
    const e=en.examples[index] ?? item;
    return {id:"example-"+material.slug+"-"+index,kind:"Contoh",level,track,subject:material.subject,subjectEn:en.subject,difficulty,title:item.title,description:item.problem,meta:"Contoh · "+material.title+" · "+material.subject,href:baseHref+"#contoh",keywords:[material.title,material.subject,...item.solution].join(" "),titleEn:e.title,descriptionEn:e.problem,metaEn:"Example · "+en.title+" · "+en.subject,keywordsEn:[en.title,en.subject,...e.solution].join(" ")};
  });
  return [main,...definitions,...theorems,...examples];
});

const guidedPracticeEntries: SearchEntry[] = deepMaterials.flatMap((material) => {
  const items = [...(materialPractice[material.slug] ?? []), ...(materialPracticeExtra[material.slug] ?? [])];
  const enMaterial = deepMaterialEnMap[material.slug] ?? material;
  const level = normalizeLevel(material.level);
  const track = normalizeTrack(material.track, material.level, material.slug);

  return items.map((problem) => ({
    id: "guided-"+material.slug+"-"+problem.id,
    kind: "Soal" as const,
    level,
    track,
    subject: material.subject,
    subjectEn: enMaterial.subject,
    difficulty: normalizeDifficulty(problem.difficulty),
    title: problem.id+" · "+problem.title.id,
    description: problem.prompt.id,
    meta: "Latihan Bertingkat · "+material.title+" · "+problem.difficulty,
    href: "/materi/"+material.slug+(material.slug==="integral-riemann"?"#ird-latihan-soal":"#gm-latihan"),
    keywords: [material.title,material.subject,problem.difficulty,problem.hint.id,problem.answer.id].join(" "),
    titleEn: problem.id+" · "+problem.title.en,
    descriptionEn: problem.prompt.en,
    metaEn: "Guided Practice · "+enMaterial.title+" · "+(
      problem.difficulty==="Dasar"?"Basic":problem.difficulty==="Menengah"?"Intermediate":"Challenge"
    ),
    keywordsEn: [enMaterial.title,enMaterial.subject,problem.hint.en,problem.answer.en].join(" ")
  }));
});


const extensionEntries: SearchEntry[] = deepMaterials.flatMap((material) => {
  const units = materialExtensions[material.slug] ?? [];
  const enMaterial = deepMaterialEnMap[material.slug] ?? material;
  const level = normalizeLevel(material.level);
  const track = normalizeTrack(material.track, material.level, material.slug);
  const difficulty = normalizeDifficulty(material.difficulty);

  return units.flatMap((unit, unitIndex) => {
    const baseHref = "/materi/" + material.slug + "#subbab-lanjutan";
    const main: SearchEntry = {
      id: "extension-" + material.slug + "-" + unitIndex,
      kind: "Materi",
      level,
      track,
      subject: material.subject,
      subjectEn: enMaterial.subject,
      difficulty,
      title: unit.title.id,
      description: unit.intro.id,
      meta: "Subbab Lanjutan · " + material.title,
      href: baseHref,
      keywords: [unit.intro.id, ...unit.paragraphs.map((p) => p.id), ...unit.notes.map((p) => p.id)].join(" "),
      titleEn: unit.title.en,
      descriptionEn: unit.intro.en,
      metaEn: "Extended Topic · " + enMaterial.title,
      keywordsEn: [unit.intro.en, ...unit.paragraphs.map((p) => p.en), ...unit.notes.map((p) => p.en)].join(" ")
    };

    const theorem: SearchEntry[] = unit.theorem ? [{
      id: "extension-theorem-" + material.slug + "-" + unitIndex,
      kind: "Teorema",
      level,
      track,
      subject: material.subject,
      subjectEn: enMaterial.subject,
      difficulty,
      title: unit.theorem.name.id,
      description: unit.theorem.statement.id,
      meta: "Teorema · Subbab Lanjutan · " + material.title,
      href: baseHref,
      keywords: unit.theorem.proof.map((p) => p.id).join(" "),
      titleEn: unit.theorem.name.en,
      descriptionEn: unit.theorem.statement.en,
      metaEn: "Theorem · Extended Topic · " + enMaterial.title,
      keywordsEn: unit.theorem.proof.map((p) => p.en).join(" ")
    }] : [];

    const example: SearchEntry[] = unit.example ? [{
      id: "extension-example-" + material.slug + "-" + unitIndex,
      kind: "Contoh",
      level,
      track,
      subject: material.subject,
      subjectEn: enMaterial.subject,
      difficulty,
      title: unit.title.id + " · Contoh",
      description: unit.example.question.id,
      meta: "Contoh · Subbab Lanjutan · " + material.title,
      href: baseHref,
      keywords: unit.example.solution.map((p) => p.id).join(" "),
      titleEn: unit.title.en + " · Example",
      descriptionEn: unit.example.question.en,
      metaEn: "Example · Extended Topic · " + enMaterial.title,
      keywordsEn: unit.example.solution.map((p) => p.en).join(" ")
    }] : [];

    return [main, ...theorem, ...example];
  });
});


const explorationEntries: SearchEntry[] = deepMaterials.flatMap((material) => {
  const projects = materialExplorations[material.slug] ?? [];
  const enMaterial = deepMaterialEnMap[material.slug] ?? material;
  const level = normalizeLevel(material.level);
  const track = normalizeTrack(material.track, material.level, material.slug);
  const difficulty = normalizeDifficulty(material.difficulty);

  return projects.map((project, projectIndex) => ({
    id: "exploration-" + material.slug + "-" + projectIndex,
    kind: "Materi" as const,
    level,
    track,
    subject: material.subject,
    subjectEn: enMaterial.subject,
    difficulty,
    title: project.title.id,
    description: project.goal.id,
    meta: "Proyek Eksplorasi · " + material.title,
    href: "/materi/" + material.slug + "#eksplorasi",
    keywords: [project.goal.id, ...project.tasks.map((item) => item.id), project.expected.id, project.extension.id].join(" "),
    titleEn: project.title.en,
    descriptionEn: project.goal.en,
    metaEn: "Exploration Project · " + enMaterial.title,
    keywordsEn: [project.goal.en, ...project.tasks.map((item) => item.en), project.expected.en, project.extension.en].join(" ")
  }));
});


const learningTrackEntries: SearchEntry[] = learningTrackPages.map((item) => {
  const level: SearchLevel =
    item.slug === "sd" || item.slug === "olimpiade-sd" ? "SD" :
    item.slug === "smp" || item.slug === "olimpiade-smp" ? "SMP" :
    item.slug === "sma" || item.slug === "olimpiade-sma" ? "SMA" :
    item.slug === "kuliah" || item.slug === "onmipa" ? "Kuliah" : "Umum";
  const track: SearchTrack = item.category === "olimpiade" ? "Olimpiade" : "Reguler";
  const subjectId = item.subjects.map((subject) => subject.name.id).join(", ");
  const subjectEn = item.subjects.map((subject) => subject.name.en).join(", ");

  return {
    id: "learning-track-" + item.slug,
    kind: "Halaman",
    level,
    track,
    subject: "Umum",
    subjectEn: "General",
    difficulty: "Umum",
    title: item.title.id,
    description: item.intro.id,
    meta: "Jalur Belajar · " + item.eyebrow.id,
    href: "/belajar/" + item.slug,
    keywords: [item.audience.id,item.goal.id,item.philosophy.id,subjectId,...item.skills.map((skill)=>skill.id)].join(" "),
    titleEn: item.title.en,
    descriptionEn: item.intro.en,
    metaEn: "Learning Track · " + item.eyebrow.en,
    keywordsEn: [item.audience.en,item.goal.en,item.philosophy.en,subjectEn,...item.skills.map((skill)=>skill.en)].join(" ")
  };
});


const olympiadHubEntries: SearchEntry[] = olympiadHubs.map((hub) => {
  const level: SearchLevel = hub.slug === "sd" ? "SD" : hub.slug === "smp" ? "SMP" : hub.slug === "sma" ? "SMA" : "Kuliah";
  return {
    id: "olympiad-hub-" + hub.slug,
    kind: "Halaman",
    level,
    track: "Olimpiade",
    subject: "Umum",
    subjectEn: "General",
    difficulty: "Umum",
    title: hub.title.id,
    description: hub.subtitle.id,
    meta: "Olimpiade · Syllabus · Roadmap · Soal · Challenge",
    href: "/olimpiade/" + hub.slug,
    keywords: [hub.subtitle.id, ...hub.fields.map((field)=>field.id), ...hub.syllabus.map((unit)=>unit.title.id)].join(" "),
    titleEn: hub.title.en,
    descriptionEn: hub.subtitle.en,
    metaEn: "Olympiad · Syllabus · Roadmap · Problems · Challenge",
    keywordsEn: [hub.subtitle.en, ...hub.fields.map((field)=>field.en), ...hub.syllabus.map((unit)=>unit.title.en)].join(" ")
  };
});


const formalChapterEntries: SearchEntry[] = deepMaterials.flatMap((material) => {
  const formal = formalChapterContent[material.slug];
  if (!formal) return [];
  const enMaterial = deepMaterialEnMap[material.slug] ?? material;
  const level = normalizeLevel(material.level);
  const track = normalizeTrack(material.track, material.level, material.slug);
  const difficulty = normalizeDifficulty(material.difficulty);

  const blockEntries: SearchEntry[] = formal.blocks.map((item, index) => ({
    id: "formal-" + material.slug + "-" + item.kind + "-" + index,
    kind: item.kind === "theorem" ? "Teorema" : "Materi",
    level,
    track,
    subject: material.subject,
    subjectEn: enMaterial.subject,
    difficulty,
    title: item.title.id,
    description: item.statement.id,
    meta: (item.kind === "definition" ? "Definisi" :
      item.kind === "lemma" ? "Lemma" :
      item.kind === "proposition" ? "Proposisi" :
      item.kind === "theorem" ? "Teorema" : "Akibat") + " · " + material.title,
    href: "/materi/" + material.slug + "#struktur-formal",
    keywords: [
      item.intuition?.id ?? "",
      item.note?.id ?? "",
      ...(item.proof?.map((step) => step.id) ?? [])
    ].join(" "),
    titleEn: item.title.en,
    descriptionEn: item.statement.en,
    metaEn: (item.kind === "definition" ? "Definition" :
      item.kind === "lemma" ? "Lemma" :
      item.kind === "proposition" ? "Proposition" :
      item.kind === "theorem" ? "Theorem" : "Corollary") + " · " + enMaterial.title,
    keywordsEn: [
      item.intuition?.en ?? "",
      item.note?.en ?? "",
      ...(item.proof?.map((step) => step.en) ?? [])
    ].join(" ")
  }));

  const exampleEntries: SearchEntry[] = formal.examples.map((item, index) => ({
    id: "formal-example-" + material.slug + "-" + index,
    kind: "Contoh",
    level,
    track,
    subject: material.subject,
    subjectEn: enMaterial.subject,
    difficulty,
    title: item.title.id,
    description: item.problem.id,
    meta: "Contoh Detail · " + material.title,
    href: "/materi/" + material.slug + "#contoh-detail",
    keywords: [item.strategy.id,item.conclusion.id,...item.solution.map((step)=>step.id)].join(" "),
    titleEn: item.title.en,
    descriptionEn: item.problem.en,
    metaEn: "Detailed Example · " + enMaterial.title,
    keywordsEn: [item.strategy.en,item.conclusion.en,...item.solution.map((step)=>step.en)].join(" ")
  }));

  return [...blockEntries, ...exampleEntries];
});

const basisMaterial:SearchEntry={
  id:"material-basis-dimensi",kind:"Materi",level:"Kuliah",track:"Reguler",
  subject:"Aljabar Linear",subjectEn:"Linear Algebra",difficulty:"Menengah",
  title:"Basis dan Dimensi",description:"Kombinasi linear, span, bebas linear, basis, koordinat, dimensi, basis subruang, ekstensi basis, ruang baris-kolom, dan rank-nullity.",
  meta:"Kuliah · Aljabar Linear · Reguler",href:"/kuliah/aljabar-linear/basis-dan-dimensi",
  keywords:"basis dimensi span kombinasi linear bebas linear koordinat rank nullity ruang baris ruang kolom subruang",
  titleEn:"Basis and Dimension",descriptionEn:"Linear combinations, span, linear independence, basis, coordinates, dimension, subspace bases, basis extension, row and column spaces, and rank-nullity.",
  metaEn:"University · Linear Algebra · Regular",keywordsEn:"basis dimension span linear combination linear independence coordinates rank nullity row space column space subspace vector space"
};

const problemEntries:SearchEntry[]=basisDimensionProblems.map(raw=>{
  const en=localizeProblem(raw,"en");
  return {
    id:"problem-"+raw.id,kind:"Soal",level:"Kuliah",track:"Reguler",
    subject:"Aljabar Linear",subjectEn:"Linear Algebra",difficulty:normalizeDifficulty(raw.difficulty),
    title:raw.id+" · "+raw.title,description:raw.problem,
    meta:"Soal · Basis dan Dimensi · "+raw.subchapter+" · "+raw.difficulty+" · "+raw.type,
    href:"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/"+raw.id.toLowerCase(),
    keywords:[raw.subchapter,raw.difficulty,raw.type,...raw.concepts,raw.hint1,raw.hint2,raw.known,raw.target,raw.idea,...raw.solution,raw.answer,raw.insight].join(" "),
    titleEn:raw.id+" · "+en.title,descriptionEn:en.problem,
    metaEn:"Problem · Basis and Dimension · "+en.subchapter+" · "+en.difficulty+" · "+en.type,
    keywordsEn:[en.subchapter,en.difficulty,en.type,...en.concepts,en.hint1,en.hint2,en.known,en.target,en.idea,...en.solution,en.answer,en.insight].join(" ")
  };
});

const pages:SearchEntry[]=[
  {id:"page-materials",kind:"Halaman",level:"Umum",track:"Reguler",subject:"Umum",subjectEn:"General",difficulty:"Umum",title:"Perpustakaan Materi",description:"Kumpulan materi matematika terstruktur dari sekolah hingga universitas.",meta:"Materi",href:"/materi",keywords:"materi SD SMP SMA kuliah",titleEn:"Material Library",descriptionEn:"Structured mathematics materials from school to university level.",metaEn:"Materials",keywordsEn:"materials library elementary junior high senior high university"},
  {id:"page-bank",kind:"Halaman",level:"Kuliah",track:"Reguler",subject:"Aljabar Linear",subjectEn:"Linear Algebra",difficulty:"Umum",title:"Bank Soal",description:"Kumpulan soal dengan filter, hint, dan pembahasan lengkap.",meta:"Latihan",href:"/bank-soal",keywords:"bank soal latihan pembahasan",titleEn:"Problem Bank",descriptionEn:"A searchable problem bank with filters, hints, and complete solutions.",metaEn:"Practice",keywordsEn:"problem bank practice hints solutions"},
  {id:"page-olympiad",kind:"Halaman",level:"Umum",track:"Olimpiade",subject:"Umum",subjectEn:"General",difficulty:"Umum",title:"Olimpiade",description:"Jalur matematika kompetisi dari SD hingga ON-MIPA.",meta:"Kompetisi",href:"/olimpiade",keywords:"olimpiade SD SMP SMA ON-MIPA",titleEn:"Olympiad",descriptionEn:"Mathematics competition tracks from elementary level through ON-MIPA.",metaEn:"Competition",keywordsEn:"olympiad competition elementary junior high senior high ON-MIPA"},
  {id:"page-practice",kind:"Halaman",level:"Umum",track:"Umum",subject:"Umum",subjectEn:"General",difficulty:"Umum",title:"Latihan Soal",description:"Kumpulan latihan soal berdasarkan materi dengan petunjuk dan solusi.",meta:"Latihan",href:"/latihan-soal",keywords:"latihan soal latihan matematika petunjuk solusi pembahasan",titleEn:"Practice Problems",descriptionEn:"Practice problems organized by topic with hints and solutions.",metaEn:"Practice",keywordsEn:"practice problems exercises hints solutions mathematics"},
  {id:"page-other-resources",kind:"Halaman",level:"Umum",track:"Umum",subject:"Umum",subjectEn:"General",difficulty:"Umum",title:"Sumber Belajar Lain",description:"Referensi eksternal pilihan untuk melengkapi pembelajaran matematika di DMath Learning.",meta:"Referensi",href:"/sumber-belajar-lain",keywords:"sumber belajar referensi AoPS Art of Problem Solving COLIMP MORFID matematika olimpiade kuliah",titleEn:"Other Learning Resources",descriptionEn:"Selected external references to complement mathematics learning on DMath Learning.",metaEn:"References",keywordsEn:"learning resources references AoPS Art of Problem Solving COLIMP MORFID mathematics olympiad university"},
];

export const fullSearchIndex:SearchEntry[]=[...learningTrackEntries,...olympiadHubEntries,...materialEntries,...formalChapterEntries,...extensionEntries,...explorationEntries,...guidedPracticeEntries,basisMaterial,...problemEntries,...pages];
