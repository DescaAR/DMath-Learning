import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const banned=[
  "Gambaran Soal",
  "Alur Latihan",
  "Kesalahan umum dan koneksi materi",
  "Kesalahan Umum dan Koneksi Materi",
  "Gambaran Besar",
  "Mulai dari tujuanmu, bukan dari artikel acak.",
  "Bukan ringkasan satu halaman. Belajar sampai paham.",
  "Banyak soal, tetap terstruktur dan bermakna.",
  "Jalur kompetisi yang terpisah dari kurikulum reguler.",
  "Seratus pembahasan, masing-masing punya halaman sendiri.",
  "Matematika dipelajari sebagai struktur, bukan kumpulan rumus."
];

const files=[];
const walk=(dir)=>{
  if(!fs.existsSync(dir)) return;
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    const full=path.join(dir,entry.name);
    if(entry.isDirectory()) walk(full);
    else if(/\.(tsx?|mjs)$/.test(entry.name)) files.push(full);
  }
};
for(const dir of ["app","components"]) walk(path.join(root,dir));

const failures=[];
for(const file of files){
  const source=fs.readFileSync(file,"utf8");
  for(const phrase of banned){
    if(source.includes(phrase)) failures.push(path.relative(root,file)+": "+phrase);
  }
}

const generatedPath=path.join(root,"data/new-academic-content.ts");
if(fs.existsSync(generatedPath)){
  const source=fs.readFileSync(generatedPath,"utf8");
  if(/return special\[slug\]\?\?\[\s*\{kind:"definition"/.test(source)){
    failures.push("data/new-academic-content.ts: generic fallback may not create a formal definition.");
  }
}

for(const file of ["components/BookSectionPage.tsx","components/DeepMaterialPage.tsx"]){
  const source=fs.readFileSync(path.join(root,file),"utf8");
  if(!source.includes("InteractiveMathLab")) failures.push(file+": interactive visualization missing.");
  if(!source.includes("AcademicSolution")) failures.push(file+": structured solutions missing.");
  if(!source.includes("Definisi dan contoh")&&!source.includes("Definitions and examples")){
    failures.push(file+": definition-example pairing missing.");
  }
}

if(failures.length){
  console.error("DMath content audit failed:\n"+failures.map(x=>" - "+x).join("\n"));
  process.exit(1);
}
console.log("DMath content audit passed.");
