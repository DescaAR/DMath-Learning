import { deepMaterials } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";
import { localizeProblem } from "@/data/problem-translations-en";
import { materialPractice } from "@/data/material-practice";
import { materialPracticeExtra } from "@/data/material-practice-extra";

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
    href: "/materi/"+material.slug+"#latihan-bertingkat",
    keywords: [material.title,material.subject,problem.difficulty,problem.hint.id,problem.answer.id].join(" "),
    titleEn: problem.id+" · "+problem.title.en,
    descriptionEn: problem.prompt.en,
    metaEn: "Guided Practice · "+enMaterial.title+" · "+(
      problem.difficulty==="Dasar"?"Basic":problem.difficulty==="Menengah"?"Intermediate":"Challenge"
    ),
    keywordsEn: [enMaterial.title,enMaterial.subject,problem.hint.en,problem.answer.en].join(" ")
  }));
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
  {id:"page-learn",kind:"Halaman",level:"Umum",track:"Umum",subject:"Umum",subjectEn:"General",difficulty:"Umum",title:"Jalur Belajar",description:"Pilih jalur berdasarkan jenjang, bidang, dan tujuan belajar.",meta:"Navigasi",href:"/belajar",keywords:"SD SMP SMA kuliah olimpiade ON-MIPA belajar",titleEn:"Learning Tracks",descriptionEn:"Choose a track by level, field, and learning goal.",metaEn:"Navigation",keywordsEn:"elementary junior high senior high university olympiad ON-MIPA learning track"},
  {id:"page-materials",kind:"Halaman",level:"Umum",track:"Reguler",subject:"Umum",subjectEn:"General",difficulty:"Umum",title:"Perpustakaan Materi",description:"Kumpulan materi matematika terstruktur dari sekolah hingga universitas.",meta:"Materi",href:"/materi",keywords:"materi SD SMP SMA kuliah",titleEn:"Material Library",descriptionEn:"Structured mathematics materials from school to university level.",metaEn:"Materials",keywordsEn:"materials library elementary junior high senior high university"},
  {id:"page-bank",kind:"Halaman",level:"Kuliah",track:"Reguler",subject:"Aljabar Linear",subjectEn:"Linear Algebra",difficulty:"Umum",title:"Bank Soal",description:"Kumpulan soal dengan filter, hint, dan pembahasan lengkap.",meta:"Latihan",href:"/bank-soal",keywords:"bank soal latihan pembahasan",titleEn:"Problem Bank",descriptionEn:"A searchable problem bank with filters, hints, and complete solutions.",metaEn:"Practice",keywordsEn:"problem bank practice hints solutions"},
  {id:"page-olympiad",kind:"Halaman",level:"Umum",track:"Olimpiade",subject:"Umum",subjectEn:"General",difficulty:"Umum",title:"Olimpiade",description:"Jalur matematika kompetisi dari SD hingga ON-MIPA.",meta:"Kompetisi",href:"/olimpiade",keywords:"olimpiade SD SMP SMA ON-MIPA",titleEn:"Olympiad",descriptionEn:"Mathematics competition tracks from elementary level through ON-MIPA.",metaEn:"Competition",keywordsEn:"olympiad competition elementary junior high senior high ON-MIPA"},
  {id:"page-solutions",kind:"Halaman",level:"Umum",track:"Umum",subject:"Umum",subjectEn:"General",difficulty:"Umum",title:"Pembahasan",description:"Indeks pembahasan soal DMath Learning.",meta:"Pembahasan",href:"/pembahasan",keywords:"pembahasan jawaban",titleEn:"Solutions",descriptionEn:"Index of DMath Learning problem solutions.",metaEn:"Solutions",keywordsEn:"solution answer problem"},
  {id:"page-tutoring",kind:"Halaman",level:"Umum",track:"Umum",subject:"Umum",subjectEn:"General",difficulty:"Umum",title:"Bimbingan",description:"Program pendampingan matematika dan problem solving.",meta:"Program",href:"/bimbingan",keywords:"bimbingan belajar program",titleEn:"Tutoring",descriptionEn:"Mathematics tutoring and problem-solving programs.",metaEn:"Program",keywordsEn:"tutoring learning program"}
];

export const fullSearchIndex:SearchEntry[]=[...materialEntries,...guidedPracticeEntries,basisMaterial,...problemEntries,...pages];
