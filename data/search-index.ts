import { deepMaterials } from "@/data/deep-materials";
import { deepMaterialEnMap } from "@/data/deep-materials-en";
import { basisDimensionProblems } from "@/data/basis-dimension-problems";
import { localizeProblem } from "@/data/problem-translations-en";

export type SearchLevel = "SD" | "SMP" | "SMA" | "Kuliah" | "Umum";
export type SearchTrack = "Reguler" | "Olimpiade" | "Umum";
export type SearchKind = "Materi" | "Soal" | "Teorema" | "Definisi" | "Contoh" | "Halaman";

export type SearchEntry = {
  id: string;
  kind: SearchKind;
  level: SearchLevel;
  track: SearchTrack;
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

const materialEntries: SearchEntry[] = deepMaterials.flatMap((material) => {
  const en=deepMaterialEnMap[material.slug] ?? material;
  const level=normalizeLevel(material.level);
  const track=normalizeTrack(material.track,material.level,material.slug);
  const baseHref="/materi/"+material.slug;
  const meta=[material.level,material.subject,material.track].filter(Boolean).join(" · ");
  const metaEn=[en.level,en.subject,en.track].filter(Boolean).join(" · ");

  const main: SearchEntry={
    id:"material-"+material.slug,kind:"Materi",level,track,
    title:material.title,description:material.summary,meta,href:baseHref,
    keywords:[material.subject,material.track,material.level,...material.prerequisites,...material.objectives,...material.conceptMap,...material.related].join(" "),
    titleEn:en.title,descriptionEn:en.summary,metaEn,
    keywordsEn:[en.subject,en.track,en.level,...en.prerequisites,...en.objectives,...en.conceptMap,...en.related].join(" ")
  };

  const definitions=material.definitions.map((item,index):SearchEntry=>{
    const e=en.definitions[index] ?? item;
    return {id:"definition-"+material.slug+"-"+index,kind:"Definisi",level,track,title:item.title,description:item.body,meta:"Definisi · "+material.title+" · "+material.subject,href:baseHref+"#definisi",keywords:material.title+" "+material.subject+" definisi",titleEn:e.title,descriptionEn:e.body,metaEn:"Definition · "+en.title+" · "+en.subject,keywordsEn:en.title+" "+en.subject+" definition"};
  });
  const theorems=material.theorems.map((item,index):SearchEntry=>{
    const e=en.theorems[index] ?? item;
    return {id:"theorem-"+material.slug+"-"+index,kind:"Teorema",level,track,title:item.title,description:item.statement,meta:"Teorema · "+material.title+" · "+material.subject,href:baseHref+"#teorema",keywords:[material.title,material.subject,item.why,...item.proof].join(" "),titleEn:e.title,descriptionEn:e.statement,metaEn:"Theorem · "+en.title+" · "+en.subject,keywordsEn:[en.title,en.subject,e.why,...e.proof].join(" ")};
  });
  const examples=material.examples.map((item,index):SearchEntry=>{
    const e=en.examples[index] ?? item;
    return {id:"example-"+material.slug+"-"+index,kind:"Contoh",level,track,title:item.title,description:item.problem,meta:"Contoh · "+material.title+" · "+material.subject,href:baseHref+"#contoh",keywords:[material.title,material.subject,...item.solution].join(" "),titleEn:e.title,descriptionEn:e.problem,metaEn:"Example · "+en.title+" · "+en.subject,keywordsEn:[en.title,en.subject,...e.solution].join(" ")};
  });
  return [main,...definitions,...theorems,...examples];
});

const basisMaterial:SearchEntry={
  id:"material-basis-dimensi",kind:"Materi",level:"Kuliah",track:"Reguler",
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
  {id:"page-learn",kind:"Halaman",level:"Umum",track:"Umum",title:"Jalur Belajar",description:"Pilih jalur berdasarkan jenjang, bidang, dan tujuan belajar.",meta:"Navigasi",href:"/belajar",keywords:"SD SMP SMA kuliah olimpiade ON-MIPA belajar",titleEn:"Learning Tracks",descriptionEn:"Choose a track by level, field, and learning goal.",metaEn:"Navigation",keywordsEn:"elementary junior high senior high university olympiad ON-MIPA learning track"},
  {id:"page-materials",kind:"Halaman",level:"Umum",track:"Reguler",title:"Perpustakaan Materi",description:"Kumpulan materi matematika terstruktur dari sekolah hingga universitas.",meta:"Materi",href:"/materi",keywords:"materi SD SMP SMA kuliah",titleEn:"Material Library",descriptionEn:"Structured mathematics materials from school to university level.",metaEn:"Materials",keywordsEn:"materials library elementary junior high senior high university"},
  {id:"page-bank",kind:"Halaman",level:"Kuliah",track:"Reguler",title:"Bank Soal",description:"Kumpulan soal dengan filter, hint, dan pembahasan lengkap.",meta:"Latihan",href:"/bank-soal",keywords:"bank soal latihan pembahasan",titleEn:"Problem Bank",descriptionEn:"A searchable problem bank with filters, hints, and complete solutions.",metaEn:"Practice",keywordsEn:"problem bank practice hints solutions"},
  {id:"page-olympiad",kind:"Halaman",level:"Umum",track:"Olimpiade",title:"Olimpiade",description:"Jalur matematika kompetisi dari SD hingga ON-MIPA.",meta:"Kompetisi",href:"/olimpiade",keywords:"olimpiade SD SMP SMA ON-MIPA",titleEn:"Olympiad",descriptionEn:"Mathematics competition tracks from elementary level through ON-MIPA.",metaEn:"Competition",keywordsEn:"olympiad competition elementary junior high senior high ON-MIPA"},
  {id:"page-solutions",kind:"Halaman",level:"Umum",track:"Umum",title:"Pembahasan",description:"Indeks pembahasan soal DMath Learning.",meta:"Pembahasan",href:"/pembahasan",keywords:"pembahasan jawaban",titleEn:"Solutions",descriptionEn:"Index of DMath Learning problem solutions.",metaEn:"Solutions",keywordsEn:"solution answer problem"},
  {id:"page-tutoring",kind:"Halaman",level:"Umum",track:"Umum",title:"Bimbingan",description:"Program pendampingan matematika dan problem solving.",meta:"Program",href:"/bimbingan",keywords:"bimbingan belajar program",titleEn:"Tutoring",descriptionEn:"Mathematics tutoring and problem-solving programs.",metaEn:"Program",keywordsEn:"tutoring learning program"},
  {id:"page-research",kind:"Halaman",level:"Kuliah",track:"Umum",title:"Riset",description:"Eksplorasi proyek dan catatan akademik matematika.",meta:"Akademik",href:"/riset",keywords:"riset proyek graf analisis kombinatorika",titleEn:"Research",descriptionEn:"Mathematical projects and academic explorations.",metaEn:"Academic",keywordsEn:"research project graph analysis combinatorics"}
];

export const fullSearchIndex:SearchEntry[]=[...materialEntries,basisMaterial,...problemEntries,...pages];
