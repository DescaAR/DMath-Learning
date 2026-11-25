"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { competitionProblems, levels, levelMeta, type CompetitionProblem, type Level } from "@/data/competition-problems";
import { dailySchedule, dailyDates } from "@/data/competition-daily";
import { RichMath } from "@/components/RichMath";
import { splitCompetitionPrompt, splitSubquestions, compactCompetitionMath } from "@/lib/competition-prompt";
import { materialOf } from "@/lib/competition-material";

const difficultyLabels=["","Dasar","Menengah","Lanjutan","Sulit","Sangat Sulit"];
const isLevel=(v:string):v is Level=>levels.some(x=>x===v);
const link=(p:CompetitionProblem)=>"/problem-solving/"+p.id+"/";
const difficulty=(p:CompetitionProblem)=>difficultyLabels[p.difficulty]||"—";
const shortSource=(p:CompetitionProblem)=>p.source.label;
const categoryOf=(p:CompetitionProblem)=>p.source.competition||"DMath Learning Proposed";
const competitionFullNames: Readonly<Record<string, string>> = {
  "APMO": "Asian Pacific Mathematical Olympiad",
  "HMMT": "Harvard–MIT Mathematics Tournament",
  "IMO": "International Mathematical Olympiad",
  "IYMC": "International Youth Math Challenge",
  "IMC": "International Mathematics Competition for University Students",
  "IMSO": "International Mathematics and Science Olympiad",
  "KMNR": "Kompetisi Matematika Nalaria Realistik",
  "LMNas UGM": "Lomba Matematika Nasional Universitas Gadjah Mada",
  "OSN": "Olimpiade Sains Nasional",
  "ON-MIPA": "Olimpiade Nasional Matematika dan Ilmu Pengetahuan Alam",
  "Putnam": "William Lowell Putnam Mathematical Competition",
  "AMC 8": "American Mathematics Competitions 8",
  "AMC 10": "American Mathematics Competitions 10",
  "AMC 12": "American Mathematics Competitions 12",
  "AIME": "American Invitational Mathematics Examination",
  "USAMO": "USA Mathematical Olympiad",
  "USAJMO": "USA Junior Mathematical Olympiad",
  "EGMO": "European Girls’ Mathematical Olympiad",
  "BMO UK": "British Mathematical Olympiad",
  "JBMO": "Junior Balkan Mathematical Olympiad",
  "Balkan MO": "Balkan Mathematical Olympiad",
  "MEMO": "Middle European Mathematical Olympiad",
  "RMM": "Romanian Master of Mathematics",
  "SASMO": "Singapore and Asian Schools Math Olympiad",
  "SEAMO": "Southeast Asian Mathematical Olympiad",
  "SMKC": "Singapore Math Kangaroo Contest",
  "SMMC": "Simon Marais Mathematics Competition",
  "VJIMC": "Vojtěch Jarník International Mathematical Competition",
  "JMC UKMT": "Junior Mathematical Challenge",
  "IMC UKMT": "Intermediate Mathematical Challenge",
  "SMC UKMT": "Senior Mathematical Challenge",
  "UMC UNDIP": "UNDIP's Mathematics Competition",
  "UMO": "Utah Mathematical Olympiad",
  "OLMAT UNSOED": "Olimpiade Matematika Universitas Jenderal Soedirman",
  "OMITS": "Olimpiade Matematika ITS",
  "PEMNAS UB": "Pekan Matematika Nasional Universitas Brawijaya",
  "MCR UNESA": "Mathematics Competition Revolution Universitas Negeri Surabaya",
  "OMVN UM": "Olimpiade Matematika Vektor Nasional Universitas Negeri Malang",
  "VTRMC": "Virginia Tech Regional Mathematics Contest",
  "SEEMOUS": "South Eastern European Mathematical Olympiad for University Students"
};
const competitionHeading = (name: string) => competitionFullNames[name] ? `${name} (${competitionFullNames[name]})` : name;
const categoryOrder=(a:string,b:string)=>a==="DMath Learning Proposed"?1:b==="DMath Learning Proposed"?-1:a.localeCompare(b,"id");
const levelHref=(l:Level)=>"/olimpiade-"+l.toLowerCase()+"/";
const levelTitle=(l:Level)=>l==="Kuliah"?"Olimpiade Kuliah":levelMeta[l].title;

export function LevelCards(){
 return <div className="cmp-levels">{levels.map((level)=><Link className="cmp-level-card" key={level} href={levelHref(level)}>
  <span className="cmp-level-code">{level==="Kuliah"?"PT":level}</span>
  <span className="cmp-level-title"><strong>{levelTitle(level)}</strong><small>{levelMeta[level].targets}</small></span>
  <span className="cmp-level-count">{competitionProblems.filter(p=>p.level===level).length}<small>soal</small></span><span aria-hidden="true" className="cmp-level-arrow">›</span>
 </Link>)}</div>;
}

function QuestionProse({value,problemId,compact=false}:{value:string;problemId?:string;compact?:boolean}){
 const chunks=value.split("[[FIGURE]]");
 if(chunks.length===1)return <RichMath className="cmp-question-prose">{compactCompetitionMath(value)}</RichMath>;
 return <>{chunks.map((chunk,i)=><div key={i}>
  {i>0&&problemId&&<GeometryFigure id={problemId} compact={compact}/>}
  {chunk.trim()&&<RichMath className="cmp-question-prose">{compactCompetitionMath(chunk.trim())}</RichMath>}
 </div>)}</>;
}
function QuestionBody({prompt,problemId,compact=false}:{prompt:string;problemId?:string;compact?:boolean}){
 const parsed=splitSubquestions(prompt);
 if(!parsed)return <QuestionProse value={prompt} problemId={problemId} compact={compact}/>;
 return <div className="cmp-question-body">
  {parsed.intro&&<div className="cmp-question-intro"><QuestionProse value={parsed.intro} problemId={problemId} compact={compact}/></div>}
  <ol className="cmp-subquestions" aria-label="Subbagian soal">
   {parsed.parts.map(part=><li key={part.label}>
    <span className="cmp-subquestion-label" aria-hidden="true">({part.label})</span><div className="cmp-subquestion-content"><QuestionProse value={part.text} problemId={problemId} compact={compact}/></div>
   </li>)}
  </ol>
 </div>;
}

export function CompetitionPrompt({ prompt, problemId, compact=false }: { prompt: string; problemId?: string; compact?: boolean }) {
 const parsed=splitCompetitionPrompt(prompt);
 return <div className="cmp-question">
  <QuestionBody prompt={parsed?.question??prompt} problemId={problemId} compact={compact}/>
  {problemId&&!prompt.includes("[[FIGURE]]")&&<GeometryFigure id={problemId} compact={compact}/>}
  {problemId==="ksn-smp-2021-07"&&<div style={{maxWidth:"100%",overflowX:"auto",margin:"1em 0"}}><table aria-label="Tabel tiga baris dan delapan kolom" style={{borderCollapse:"collapse",margin:"0 auto",minWidth:"min(320px,100%)"}}><tbody>{[0,1,2].map(r=><tr key={r}>{Array.from({length:8},(_,i)=><td key={i} style={{border:"1px solid currentColor",textAlign:"center",width:"2em",height:"2em",padding:"0.2em"}}>{r===0?i+1:" "}</td>)}</tr>)}</tbody></table></div>}
  {parsed&&<ol type="A" className="cmp-answer-options" aria-label="Pilihan jawaban">
   {parsed.options.map((option,index)=><li key={index}><RichMath className="cmp-question-prose">{compactCompetitionMath(option)}</RichMath></li>)}
  </ol>}
 </div>;
}

// Link to the complete published IMC sets without duplicating copyrighted statements.
const imcEditions = Array.from({length:22}, (_,i)=>{
 const year=2026-i;
 const perDay=year<=2008?6:year>=2020&&year<=2022?4:5;
 return {year,perDay};
});
const imcAll = imcEditions.flatMap(({year,perDay})=>[1,2].flatMap(day=>Array.from({length:perDay},(_,i)=>{
 const number=(day-1)*perDay+i+1;
 const local=competitionProblems.find(p=>p.source.competition==="IMC"&&p.source.year===year&&p.source.number==="Hari "+day+", Nomor "+number);
 return {year,day,number,localId:local?.id,url:"https://studolymp.com/imc/problems/imc-"+year+"-d"+day+"-p"+(i+1)};
})));
const imcMissing=imcAll.filter(p=>!p.localId);
type YearPaper={competition:string;level:Level;year:number;stage:string;label:string;url:string};
const yearPapers:YearPaper[]=imcEditions.flatMap(({year}):YearPaper[]=>[
 {competition:"IMO",level:"SMA",year,stage:"IMO",label:"Naskah resmi · Nomor 1–6",url:"https://www.imo-official.org/problems/"+year+"/"},
 {competition:"APMO",level:"SMA",year,stage:"APMO",label:"Naskah resmi · Nomor 1–5",url:"https://www.apmo-official.org/static/problems/apmo"+year+"_prb.pdf"},
 ...(year<=2025?[{competition:"Putnam",level:"Kuliah" as const,year,stage:"Putnam",label:"Naskah · A1–A6 dan B1–B6"+(year===2020?" (edisi tidak resmi)":""),url:"https://kskedlaya.org/putnam-archive/"+year+".pdf"}]:[]),
 ...(year>=2006?[{competition:"ON-MIPA",level:"Kuliah" as const,year,stage:"ON-MIPA Wilayah",label:year<=2018?"Seleksi wilayah · lima bidang":"Seleksi wilayah · hari 1 dan 2",url:"https://onmipa.filzabuana.id/onmipa/"+year+(year>=2019?"-wilayah":"")+"/"}]:[])
]);

const extraYearPapers:YearPaper[] = [
  {
    "competition": "OSN",
    "level": "SD",
    "year": 2024,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://drive.google.com/file/d/1lctOFVATo7DeBOba_78k4yRl7etAGSfi/view"
  },
  {
    "competition": "OSN",
    "level": "SD",
    "year": 2024,
    "stage": "OSN-P",
    "label": "Provinsi",
    "url": "https://drive.google.com/file/d/13LOhovBg7FknahJpX3xS8SnyeerK8bn/view"
  },
  {
    "competition": "OSN",
    "level": "SD",
    "year": 2024,
    "stage": "OSN Nasional",
    "label": "Nasional — Teori I",
    "url": "https://drive.google.com/file/d/1LdmqS0EMG_GtOTSg_kxwkyTOWCm8ANco/view"
  },
  {
    "competition": "OSN",
    "level": "SD",
    "year": 2024,
    "stage": "OSN Nasional",
    "label": "Nasional — Teori II",
    "url": "https://drive.google.com/file/d/1HqKxxdxjKfXA4ClNyeSO6oqbjt0SIucV/view"
  },
  {
    "competition": "OSN",
    "level": "SD",
    "year": 2024,
    "stage": "OSN Nasional",
    "label": "Nasional — Eksplorasi",
    "url": "https://drive.google.com/file/d/1hH2zqGbdzMkwp45WKTfpRc2RUdxFe_DW/view"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2024,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-smp-tahun-2024.html"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2024,
    "stage": "OSN-P",
    "label": "Provinsi",
    "url": "https://www.folderosn.com/2025/01/download-soal-osn-matematika-smp-tahun.html"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2024,
    "stage": "OSN Nasional",
    "label": "Nasional — Hari 1",
    "url": "https://drive.google.com/file/d/1TGX4eJCP-6W-07-asCkqdJbPokQsOgM6/view"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2024,
    "stage": "OSN Nasional",
    "label": "Nasional — Hari 2",
    "url": "https://drive.google.com/file/d/1aS8w4K3keEbT4Aw6wxiaJTe1gsFYS2Q3/view"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "year": 2024,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota — Paket 1",
    "url": "https://drive.google.com/file/d/1m6s_-HKN767-nOW_0MMxwjrQjAG6d7_z/view"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "year": 2024,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota — Paket 2",
    "url": "https://drive.google.com/file/d/1Rgse1-Kmp3vg0mXvfZsL_KdVUFjbfSq8/view"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "year": 2024,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota — Paket 3",
    "url": "https://drive.google.com/file/d/1z0YhJYk9yrh2Shd8Z4goeNZCediGA4Zr/view"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "year": 2024,
    "stage": "OSN-P",
    "label": "Provinsi",
    "url": "https://drive.google.com/file/d/1HuGpvjsKbAybNr7O860L0uJ0Z8G0zFXF/view"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "year": 2024,
    "stage": "OSN Nasional",
    "label": "Nasional — Paket 2024",
    "url": "https://drive.google.com/file/d/1UQTeKFt6Cv3wH954vjH582eh-qc51md1/view"
  },
  {
    "competition": "ON-MIPA",
    "level": "Kuliah",
    "year": 2024,
    "stage": "ON-MIPA Wilayah",
    "label": "Seleksi wilayah",
    "url": "https://wildan-wicaksono.github.io/files/Olympiad/ONMIPA_Wil2024.pdf"
  },
  {
    "competition": "ON-MIPA",
    "level": "Kuliah",
    "year": 2024,
    "stage": "ON-MIPA Nasional",
    "label": "Seleksi nasional",
    "url": "https://wildan-wicaksono.github.io/files/Olympiad/ONMIPA_Nas2024.pdf"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2025,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://www.catatanmatematika.com/2026/05/soal-osn-k-smp-2025.html"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2025,
    "stage": "OSN-P",
    "label": "Provinsi",
    "url": "https://www.acceleratemyedu.com/resources/osn/smp/matematika/provinsi"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2025,
    "stage": "OSN Nasional",
    "label": "Semifinal",
    "url": "https://www.acceleratemyedu.com/resources/osn/smp/matematika/semifinal"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2025,
    "stage": "OSN Nasional",
    "label": "Final",
    "url": "https://www.acceleratemyedu.com/resources/osn/smp/matematika/final"
  },
  {
    "competition": "OSN",
    "level": "SD",
    "year": 2026,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://www.catatanmatematika.com/2026/06/soal-osn-k-sd-2026.html"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2026,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://www.m4th-lab.net/artikel/download-soal-asli-dan-pembahasan-osn-k-matematika-smp-2026"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "year": 2026,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://www.catatanmatematika.com/2026/06/soal-osn-k-sma-2026.html"
  },
  {
    "competition": "OSN",
    "level": "SD",
    "year": 2023,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://www.defantri.com/2023/06/soal-dan-pembahasan-osnk-matematika-sd.html"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2020,
    "stage": "KSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://www.defantri.com/2020/09/soal-pembahasan-ksn-k-2020-matematika.html?m=1"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2021,
    "stage": "KSN Nasional",
    "label": "Nasional",
    "url": "https://www.ruangparabintang.com/2021/09/soal-kompetisi-sains-nasional-ksn.html"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2022,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://melajah-matematika.blogspot.com/2024/04/osk-smp-2022.html"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2023,
    "stage": "OSN-K",
    "label": "Kabupaten/Kota",
    "url": "https://www.catatanmatematika.com/2023/06/pembahasan-soal-osn-k-smp-2023.html"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "year": 2020,
    "stage": "KSN-K",
    "label": "Kemampuan Dasar",
    "url": "https://www.soalfismat.com/pembahasan-soal-seleksi-ksn-k-osk-matematika-sma-ma-2020-kemampuan-dasar/"
  },
  {
    "competition": "KMNR",
    "level": "SMP",
    "year": 2016,
    "stage": "KMNR Penyisihan",
    "label": "Kelas 7–8",
    "url": "https://mathcyber1997.com/soal-dan-pembahasan-babak-penyisihan-kategori-kelas-7-8-matematika-nalaria-realistik/"
  },
  {
    "competition": "KMNR",
    "level": "SMP",
    "year": 2016,
    "stage": "KMNR Penyisihan",
    "label": "Kelas 9",
    "url": "https://mathcyber1997.com/soal-dan-pembahasan-babak-penyisihan-kategori-kelas-9-kompetisi-matematika-nalaria-realistik-kmnr-tahun-2016/"
  },
  {
    "competition": "IMSO",
    "level": "SD",
    "year": 2005,
    "stage": "IMSO",
    "label": "Isian singkat",
    "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/short-answer1.pdf"
  },
  {
    "competition": "ON-MIPA",
    "level": "Kuliah",
    "year": 2018,
    "stage": "ON-MIPA Seleksi Universitas",
    "label": "Universitas Tanjungpura",
    "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2018/"
  },
  {
    "competition": "ON-MIPA",
    "level": "Kuliah",
    "year": 2019,
    "stage": "ON-MIPA Seleksi Universitas",
    "label": "Universitas Tanjungpura",
    "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2019/"
  },
  {
    "competition": "HMMT",
    "level": "SMA",
    "year": 2005,
    "stage": "HMMT Babak Individu",
    "label": "Februari — Aljabar",
    "url": "https://hmmt-archive.s3.amazonaws.com/tournaments/2005/feb/alg/problems.pdf"
  },
  {
    "competition": "HMMT",
    "level": "SMA",
    "year": 2025,
    "stage": "HMMT Babak Individu",
    "label": "Februari — Aljabar dan Teori Bilangan",
    "url": "https://hmmt-archive.s3.amazonaws.com/tournaments/2025/feb/algnt/problems.pdf"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "year": 2005,
    "stage": "OSN Nasional",
    "label": "Naskah nasional 2005",
    "url": "https://masdwijanto.wordpress.com/wp-content/uploads/2011/07/osn-matematika-smp-2005.pdf"
  },
  {
    "competition": "JBMO",
    "level": "SMP",
    "year": 2024,
    "stage": "JBMO",
    "label": "Naskah resmi",
    "url": "https://jbmo2024.tubitak.gov.tr/problems"
  },
  {
    "competition": "Balkan MO",
    "level": "SMA",
    "year": 2023,
    "stage": "Balkan MO",
    "label": "Naskah resmi",
    "url": "https://bmo2023.tubitak.gov.tr/problems"
  },
  {
    "competition": "Balkan MO",
    "level": "SMA",
    "year": 2024,
    "stage": "Balkan MO",
    "label": "Naskah resmi",
    "url": "https://bmo2024.org/problems/"
  },
  {
    "competition": "Balkan MO",
    "level": "SMA",
    "year": 2012,
    "stage": "Balkan MO",
    "label": "Naskah resmi",
    "url": "https://bmo2012.tubitak.gov.tr/problems.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2017,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/20171.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2018,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/20181.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2019,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/20191.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2020,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/20201.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2021,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/2021.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2022,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/20221.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2023,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/20231.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2024,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/20241.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2025,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/2025.html"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "year": 2026,
    "stage": "SMMC",
    "label": "Paket resmi kompetisi",
    "url": "https://www.simonmarais.org/2026.html"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SD",
    "year": 2023,
    "stage": "Penyisihan",
    "label": "Penyisihan · SD (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SD",
    "year": 2023,
    "stage": "Semifinal",
    "label": "Semifinal · SD (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SD",
    "year": 2024,
    "stage": "Penyisihan",
    "label": "Penyisihan · SD (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SD",
    "year": 2024,
    "stage": "Semifinal",
    "label": "Semifinal · SD (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SD",
    "year": 2025,
    "stage": "Penyisihan",
    "label": "Penyisihan · SD (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SD",
    "year": 2025,
    "stage": "Semifinal",
    "label": "Semifinal · SD (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMP",
    "year": 2023,
    "stage": "Penyisihan",
    "label": "Penyisihan · SMP (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMP",
    "year": 2023,
    "stage": "Semifinal",
    "label": "Semifinal · SMP (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMP",
    "year": 2024,
    "stage": "Penyisihan",
    "label": "Penyisihan · SMP (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMP",
    "year": 2024,
    "stage": "Semifinal",
    "label": "Semifinal · SMP (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMP",
    "year": 2025,
    "stage": "Penyisihan",
    "label": "Penyisihan · SMP (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMP",
    "year": 2025,
    "stage": "Semifinal",
    "label": "Semifinal · SMP (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMA",
    "year": 2023,
    "stage": "Penyisihan",
    "label": "Penyisihan · SMA (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMA",
    "year": 2023,
    "stage": "Semifinal",
    "label": "Semifinal · SMA (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMA",
    "year": 2024,
    "stage": "Penyisihan",
    "label": "Penyisihan · SMA (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMA",
    "year": 2024,
    "stage": "Semifinal",
    "label": "Semifinal · SMA (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMA",
    "year": 2025,
    "stage": "Penyisihan",
    "label": "Penyisihan · SMA (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "PEMNAS UB",
    "level": "SMA",
    "year": 2025,
    "stage": "Semifinal",
    "label": "Semifinal · SMA (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "MIC Logika UI",
    "level": "SMA",
    "year": 2022,
    "stage": "Semifinal",
    "label": "Semifinal (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "MIC Logika UI",
    "level": "SMA",
    "year": 2022,
    "stage": "Final",
    "label": "Final (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  },
  {
    "competition": "UMC UNDIP",
    "level": "SMA",
    "year": 2022,
    "stage": "Final",
    "label": "Final (pilih paket pada sumber)",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/"
  }
];
for(let year=2005;year<=2026;year++){
 if(year!==2021)extraYearPapers.push({competition:"AMC 8",level:"SMP",year,stage:"AMC 8",label:"Nomor 1–25",url:"https://live.poshenloh.com/past-contests/amc8/"+year});
 for(const contest of ["AMC 10","AMC 12","AIME"]){
  const versions=contest==="AIME"?["I","II"]:year===2021?["A","B","C","D"]:["A","B"];
  for(const version of versions)extraYearPapers.push({competition:contest,level:"SMA",year,stage:contest+" "+(version==="C"?"A Fall":version==="D"?"B Fall":version),label:"Paket "+(version==="C"?"A Fall":version==="D"?"B Fall":version)+" · Nomor 1–"+(contest==="AIME"?15:25),url:"https://live.poshenloh.com/past-contests/"+contest.toLowerCase().replace(" ","")+"/"+year+version});
 }
 if(year>=2012)extraYearPapers.push({competition:"EGMO",level:"SMA",year,stage:"EGMO",label:"Naskah resmi · Hari 1 dan 2",url:"https://www.egmo.org/egmos/egmo"+(year-2011)+"/"});
}
yearPapers.push(...extraYearPapers);

const otherFullSets: Readonly<Record<string,{label:string;url:string}[]>> = {
 HMMT:[{label:"Naskah tiap turnamen HMMT",url:"https://www.hmmt.org/www/archive/problems"}],
 Putnam:[{label:"Naskah resmi terbaru dari MAA",url:"https://maa.org/maa-putnam-archive/"}],
 "ON-MIPA":[{label:"Koleksi tambahan ON-MIPA, termasuk beberapa naskah nasional",url:"https://mathcyber1997.com/kumpulan-soal-on-mipa-pt-bidang-matematika-tahun-2006-sekarang/"}],
 OSN:[{label:"Kumpulan naskah OSN SD, SMP, SMA",url:"https://mathcyber1997.com/download-soal-osn-ksn-bidang-matematika/"}]
};
type ContestSource = {competition:string;level:Level;label:string;url:string;kind:string};
const contestSources: ContestSource[] = [
  {
    "competition": "OSN",
    "level": "SD",
    "label": "Bank soal resmi BPTI",
    "url": "https://bpti.kemendikdasmen.go.id/2024/07/02/bank-soal-osn-jenjang-sd-smp-dan-sma/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "label": "Bank soal resmi BPTI",
    "url": "https://bpti.kemendikdasmen.go.id/2024/07/02/bank-soal-osn-jenjang-sd-smp-dan-sma/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "label": "Bank soal resmi BPTI",
    "url": "https://bpti.kemendikdasmen.go.id/2024/07/02/bank-soal-osn-jenjang-sd-smp-dan-sma/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SD",
    "label": "Paket OSK, OSP, OSN menurut jenjang dan tahun",
    "url": "https://www.mathsolar.com/download",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "label": "Paket OSK, OSP, OSN menurut jenjang dan tahun",
    "url": "https://www.mathsolar.com/download",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "label": "Paket OSK, OSP, OSN menurut jenjang dan tahun",
    "url": "https://www.mathsolar.com/download",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SD",
    "label": "Paket OSK, OSP dan OSN — forum pelatihan",
    "url": "https://www.forum.pelatihan-osn.com/arsip",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "label": "Paket OSK, OSP dan OSN — forum pelatihan",
    "url": "https://www.forum.pelatihan-osn.com/arsip",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SMA",
    "label": "Paket OSK, OSP dan OSN — forum pelatihan",
    "url": "https://www.forum.pelatihan-osn.com/arsip",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SMP",
    "label": "OSK dan OSP 2003–2023 — MGMP Makassar",
    "url": "https://www.mgmpmatsmpmakassar.org/2019/03/soal-soal-olimpiade-matematika.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OSN",
    "level": "SD",
    "label": "Paket nasional 2003–2017",
    "url": "https://www.infodikdasmen.com/2019/01/soal-dan-pembahasan-olimpiade-sains.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "AMC 8",
    "level": "SMP",
    "label": "Paket tahunan dan nomor soal — arsip berizin MAA",
    "url": "https://live.poshenloh.com/past-contests",
    "kind": "Koleksi soal"
  },
  {
    "competition": "AMC 10",
    "level": "SMA",
    "label": "Paket tahunan dan nomor soal — arsip berizin MAA",
    "url": "https://live.poshenloh.com/past-contests",
    "kind": "Koleksi soal"
  },
  {
    "competition": "AMC 12",
    "level": "SMA",
    "label": "Paket tahunan dan nomor soal — arsip berizin MAA",
    "url": "https://live.poshenloh.com/past-contests",
    "kind": "Koleksi soal"
  },
  {
    "competition": "AIME",
    "level": "SMA",
    "label": "Paket tahunan dan nomor soal — arsip berizin MAA",
    "url": "https://live.poshenloh.com/past-contests",
    "kind": "Koleksi soal"
  },
  {
    "competition": "USAMO",
    "level": "SMA",
    "label": "Paket tahunan USAMO dan USAJMO",
    "url": "https://en.amcclub.org.cn/usajmo-past-papers",
    "kind": "Koleksi soal"
  },
  {
    "competition": "USAJMO",
    "level": "SMA",
    "label": "Paket tahunan USAMO dan USAJMO",
    "url": "https://en.amcclub.org.cn/usajmo-past-papers",
    "kind": "Koleksi soal"
  },
  {
    "competition": "EGMO",
    "level": "SMA",
    "label": "Seluruh edisi sejak 2012 — penyelenggara",
    "url": "https://www.egmo.org/egmos/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "BMO UK",
    "level": "SMA",
    "label": "Babak 1 dan 2 — penyelenggara",
    "url": "https://bmos.ukmt.org.uk/home/bmo",
    "kind": "Koleksi soal"
  },
  {
    "competition": "JBMO",
    "level": "SMP",
    "label": "Koleksi soal JBMO",
    "url": "https://www.k12mathcontests.com/contest/jbmo",
    "kind": "Koleksi soal"
  },
  {
    "competition": "Balkan MO",
    "level": "SMA",
    "label": "Telusuri kompetisi di MathNet Explorer",
    "url": "https://mathnet.mit.edu/explorer.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "MEMO",
    "level": "SMA",
    "label": "Telusuri kompetisi di MathNet Explorer",
    "url": "https://mathnet.mit.edu/explorer.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "RMM",
    "level": "SMA",
    "label": "Telusuri kompetisi di MathNet Explorer",
    "url": "https://mathnet.mit.edu/explorer.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "Math Kangaroo",
    "level": "SD",
    "label": "Paket tahun sebelumnya — Math Kangaroo USA",
    "url": "https://mathkangaroo.org/mks/practice/pdf-exams/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "Math Kangaroo",
    "level": "SMP",
    "label": "Paket tahun sebelumnya — Math Kangaroo USA",
    "url": "https://mathkangaroo.org/mks/practice/pdf-exams/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "Math Kangaroo",
    "level": "SMA",
    "label": "Paket tahun sebelumnya — Math Kangaroo USA",
    "url": "https://mathkangaroo.org/mks/practice/pdf-exams/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "MATHCOUNTS",
    "level": "SMP",
    "label": "Paket kompetisi — penyelenggara",
    "url": "https://www.mathcounts.org/resources/past-competitions",
    "kind": "Koleksi soal"
  },
  {
    "competition": "MATHCOUNTS",
    "level": "SMP",
    "label": "Koleksi paket berbagai tahun dan babak",
    "url": "https://ruizesun.com/resource/mathcounts-resources/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SASMO",
    "level": "SD",
    "label": "Koleksi soal menurut jenjang",
    "url": "https://www.k12mathcontests.com/contest/sasmo",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SASMO",
    "level": "SMP",
    "label": "Koleksi soal menurut jenjang",
    "url": "https://www.k12mathcontests.com/contest/sasmo",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SASMO",
    "level": "SMA",
    "label": "Koleksi soal menurut jenjang",
    "url": "https://www.k12mathcontests.com/contest/sasmo",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SASMO",
    "level": "SD",
    "label": "Paket 2025 — penyelenggara (akses sesuai ketentuan)",
    "url": "https://sasmo.simcc.org/courses/sasmo-past-papers-year-2025/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SASMO",
    "level": "SMP",
    "label": "Paket 2025 — penyelenggara (akses sesuai ketentuan)",
    "url": "https://sasmo.simcc.org/courses/sasmo-past-papers-year-2025/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SASMO",
    "level": "SMA",
    "label": "Paket 2025 — penyelenggara (akses sesuai ketentuan)",
    "url": "https://sasmo.simcc.org/courses/sasmo-past-papers-year-2025/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SEAMO",
    "level": "SD",
    "label": "Contoh soal resmi",
    "url": "https://seamo-official.org/resources",
    "kind": "Contoh soal"
  },
  {
    "competition": "SEAMO",
    "level": "SMP",
    "label": "Contoh soal resmi",
    "url": "https://seamo-official.org/resources",
    "kind": "Contoh soal"
  },
  {
    "competition": "SEAMO",
    "level": "SMA",
    "label": "Contoh soal resmi",
    "url": "https://seamo-official.org/resources",
    "kind": "Contoh soal"
  },
  {
    "competition": "SMKC",
    "level": "SD",
    "label": "Kursus dan paket soal penyelenggara",
    "url": "https://smkc.simcc.org/courses/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SMKC",
    "level": "SMP",
    "label": "Kursus dan paket soal penyelenggara",
    "url": "https://smkc.simcc.org/courses/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SMKC",
    "level": "SMA",
    "label": "Kursus dan paket soal penyelenggara",
    "url": "https://smkc.simcc.org/courses/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "JMC UKMT",
    "level": "SMP",
    "label": "Kumpulan paket UKMT",
    "url": "https://www.westiesworkshop.com/whole-past-papers/ukmt-papers/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "IMC UKMT",
    "level": "SMA",
    "label": "Kumpulan paket UKMT",
    "url": "https://www.westiesworkshop.com/whole-past-papers/ukmt-papers/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SMC UKMT",
    "level": "SMA",
    "label": "Kumpulan paket UKMT",
    "url": "https://www.westiesworkshop.com/whole-past-papers/ukmt-papers/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "CEMC Waterloo",
    "level": "SMP",
    "label": "Paket kontes berdasarkan kelas dan tahun",
    "url": "https://cemc.uwaterloo.ca/resources/past-contests",
    "kind": "Koleksi soal"
  },
  {
    "competition": "CEMC Waterloo",
    "level": "SMA",
    "label": "Paket kontes berdasarkan kelas dan tahun",
    "url": "https://cemc.uwaterloo.ca/resources/past-contests",
    "kind": "Koleksi soal"
  },
  {
    "competition": "ON-MIPA",
    "level": "Kuliah",
    "label": "Seleksi wilayah 2006–2026 (nasional belum lengkap)",
    "url": "https://onmipa.filzabuana.id/onmipa/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "ON-MIPA",
    "level": "Kuliah",
    "label": "Seleksi universitas, wilayah dan nasional",
    "url": "https://mathcyber1997.com/kumpulan-soal-on-mipa-pt-bidang-matematika-tahun-2006-sekarang/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "label": "Paket kompetisi 2024",
    "url": "https://www.simonmarais.org/2024.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "label": "Paket kompetisi 2025",
    "url": "https://www.simonmarais.org/2025.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SMMC",
    "level": "Kuliah",
    "label": "Paket kompetisi 2021",
    "url": "https://www.simonmarais.org/2021.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "VJIMC",
    "level": "Kuliah",
    "label": "Kumpulan soal 1991–2022",
    "url": "https://www.eisatopon.gr/2024/06/vojtech-jarnik-international.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "VJIMC",
    "level": "Kuliah",
    "label": "Edisi 2026 — kategori II",
    "url": "https://jarnik.osu.cz/storage/uploads/j33problems2.pdf",
    "kind": "Koleksi soal"
  },
  {
    "competition": "MIC Logika UI",
    "level": "SMA",
    "label": "Koleksi naskah lomba kampus",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "UMC UNDIP",
    "level": "SMA",
    "label": "Koleksi naskah lomba kampus",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "Penta Mathematics Competition",
    "level": "SMA",
    "label": "Koleksi naskah lomba kampus",
    "url": "https://wildan-wicaksono.github.io/portfolio/Contest-Collection/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OMITS",
    "level": "SMP",
    "label": "Indeks kompetisi matematika — KoMa",
    "url": "https://www.konsep-matematika.com/p/halaman-download-soal-olimpiade.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OMITS",
    "level": "SMA",
    "label": "Indeks kompetisi matematika — KoMa",
    "url": "https://www.konsep-matematika.com/p/halaman-download-soal-olimpiade.html",
    "kind": "Koleksi soal"
  }
];
const additionalContestSources: ContestSource[] = [
  {
    "competition": "LMNas UGM",
    "level": "SMP",
    "label": "Kumpulan soal terdahulu resmi LMNas UGM",
    "url": "https://lmnas.fmipa.ugm.ac.id/soal-lmnas-sebelumnya/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "LMNas UGM",
    "level": "SMA",
    "label": "Kumpulan soal terdahulu resmi LMNas UGM",
    "url": "https://lmnas.fmipa.ugm.ac.id/soal-lmnas-sebelumnya/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "LMNas UGM",
    "level": "SMP",
    "label": "Koleksi soal LMNas UGM dari beberapa tahun",
    "url": "https://www.defantri.com/2021/11/kumpulan-soal-lmnas-ugm-smp-sma.html?m=1",
    "kind": "Koleksi soal"
  },
  {
    "competition": "LMNas UGM",
    "level": "SMA",
    "label": "Koleksi soal LMNas UGM dari beberapa tahun",
    "url": "https://www.defantri.com/2021/11/kumpulan-soal-lmnas-ugm-smp-sma.html?m=1",
    "kind": "Koleksi soal"
  },
  {
    "competition": "LMNas UGM",
    "level": "SMP",
    "label": "Paket terbaru dari penyelenggara",
    "url": "https://lmnas.fmipa.ugm.ac.id/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "LMNas UGM",
    "level": "SMA",
    "label": "Paket terbaru dari penyelenggara",
    "url": "https://lmnas.fmipa.ugm.ac.id/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OMITS",
    "level": "SD",
    "label": "Kumpulan soal OMITS",
    "url": "https://www.konsep-matematika.com/2022/11/download-kumpulan-soal-omits.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OMITS",
    "level": "SMP",
    "label": "Kumpulan soal OMITS",
    "url": "https://www.konsep-matematika.com/2022/11/download-kumpulan-soal-omits.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OMITS",
    "level": "SMA",
    "label": "Kumpulan soal OMITS",
    "url": "https://www.konsep-matematika.com/2022/11/download-kumpulan-soal-omits.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "MCR UNESA",
    "level": "SMP",
    "label": "Soal matematika UNESA beberapa edisi",
    "url": "https://kamtoalrasyid84.wordpress.com/mathematic-competition/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "MCR UNESA",
    "level": "SMA",
    "label": "Soal matematika UNESA beberapa edisi",
    "url": "https://kamtoalrasyid84.wordpress.com/mathematic-competition/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OMVN UM",
    "level": "SD",
    "label": "Koleksi soal OMVN — LMS Matematika",
    "url": "https://www.math-lms.com/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OMVN UM",
    "level": "SMP",
    "label": "Koleksi soal OMVN — LMS Matematika",
    "url": "https://www.math-lms.com/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OMVN UM",
    "level": "SMA",
    "label": "Koleksi soal OMVN — LMS Matematika",
    "url": "https://www.math-lms.com/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "OLMAT UNSOED",
    "level": "SMA",
    "label": "Kumpulan soal resmi HIMATIKA UNSOED",
    "url": "https://himatika.ukm.unsoed.ac.id/olmat/kumpulan-soal/",
    "kind": "Koleksi soal"
  },
  {
    "competition": "VTRMC",
    "level": "Kuliah",
    "label": "Paket resmi Virginia Tech 1987–2022",
    "url": "https://math.vt.edu/undergrad-math/vtrmc.html",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SEAMO",
    "level": "SD",
    "label": "Kumpulan soal SEAMO",
    "url": "https://www.k12mathcontests.com/contest/seamo",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SEAMO",
    "level": "SMP",
    "label": "Kumpulan soal SEAMO",
    "url": "https://www.k12mathcontests.com/contest/seamo",
    "kind": "Koleksi soal"
  },
  {
    "competition": "SEAMO",
    "level": "SMA",
    "label": "Kumpulan soal SEAMO",
    "url": "https://www.k12mathcontests.com/contest/seamo",
    "kind": "Koleksi soal"
  }
];
contestSources.push(...additionalContestSources);
yearPapers.push(...[
  {
    "competition": "SEEMOUS",
    "level": "Kuliah",
    "year": 2020,
    "stage": "SEEMOUS",
    "label": "Naskah resmi kompetisi",
    "url": "https://seemous2020.math.auth.gr/contestproblems"
  },
  {
    "competition": "SEEMOUS",
    "level": "Kuliah",
    "year": 2024,
    "stage": "SEEMOUS",
    "label": "Naskah resmi kompetisi",
    "url": "https://math.etti.tuiasi.ro/seemous2024/index.php/group-contest/problems/"
  },
  {
    "competition": "SEEMOUS",
    "level": "Kuliah",
    "year": 2007,
    "stage": "SEEMOUS",
    "label": "Naskah kompetisi",
    "url": "https://armaganka.org.mk/uploads/books/7cO4YoWQyE6pSRQpj36AKQ.pdf"
  },
  {
    "competition": "LMNas UGM",
    "level": "SMP",
    "year": 2021,
    "stage": "Penyisihan",
    "label": "LMNas 32 · SMP",
    "url": "https://lmnas.fmipa.ugm.ac.id/wp-content/uploads/sites/770/2021/10/Penyisihan-SMp-merged.pdf"
  },
  {
    "competition": "LMNas UGM",
    "level": "SMP",
    "year": 2023,
    "stage": "Penyisihan",
    "label": "LMNas 34 · SMP",
    "url": "https://lmnas.fmipa.ugm.ac.id/wp-content/uploads/sites/770/2024/09/LMNas34-SMP-Penyisihan.pdf"
  },
  {
    "competition": "LMNas UGM",
    "level": "SMP",
    "year": 2023,
    "stage": "Semifinal",
    "label": "LMNas 34 · SMP",
    "url": "https://lmnas.fmipa.ugm.ac.id/wp-content/uploads/sites/770/2024/09/LMNas34-SMP-Semifinal.pdf"
  }
] as YearPaper[]);
function YearPaperIndex({items}:{items:YearPaper[]}){
 return <details open={items.length===1||undefined} style={{margin:"0 0 16px",padding:"14px 16px",border:"1px solid var(--cmp-line)",borderRadius:10,background:"var(--cmp-paper)"}}>
  <summary style={{fontWeight:700,cursor:"pointer"}}>Buka naskah per tahun · {items.length} paket</summary>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:8,marginTop:12}}>{items.map(p=><a key={p.level+"-"+p.year+"-"+p.stage+"-"+p.label} href={p.url} className="cmp-link-text" target="_blank" rel="noopener noreferrer" style={{display:"block",padding:"10px 12px",border:"1px solid var(--cmp-line)",borderRadius:7}}><strong>{p.competition} {p.year} ↗</strong><span style={{display:"block",fontSize:12,fontWeight:400,color:"var(--cmp-muted)"}}>{p.label}</span></a>)}</div>
 </details>;
}
function IMCFullIndex({items}:{items:typeof imcAll}){
 const visible=imcEditions.filter(e=>items.some(p=>p.year===e.year));
 return <div style={{margin:"0 0 16px",padding:"16px",border:"1px solid var(--cmp-line)",borderRadius:10,background:"var(--cmp-paper)"}}>
  <p style={{margin:"0 0 10px",fontSize:13,color:"var(--cmp-muted)"}}>Pilih tahun, hari, dan nomor soal. Tanda ↗ menunjukkan tautan eksternal; soal tanpa tanda tersebut tersedia langsung di DMath.</p>
  {visible.map(({year})=><details key={year} open={visible.length===1||undefined} style={{borderTop:"1px solid var(--cmp-line)",padding:"10px 0"}}>
   <summary style={{cursor:"pointer",fontWeight:700,color:"var(--cmp-heading)"}}>IMC {year} · {items.filter(p=>p.year===year).length} soal</summary>
   {[1,2].map(day=>{const dayItems=items.filter(p=>p.year===year&&p.day===day);return dayItems.length?<div key={day} style={{marginTop:12}}><div style={{fontSize:13,fontWeight:700,marginBottom:6}}>Hari {day}</div><div style={{display:"flex",flexWrap:"wrap",gap:8}}>{dayItems.map(p=>p.localId?<Link key={p.number} href={"/problem-solving/"+p.localId+"/"} className="cmp-button cmp-secondary" style={{minHeight:36,padding:"6px 12px",fontSize:13}}>Nomor {p.number}</Link>:<a key={p.number} href={p.url} target="_blank" rel="noopener noreferrer" className="cmp-button cmp-secondary" style={{minHeight:36,padding:"6px 12px",fontSize:13}}>Nomor {p.number} ↗</a>)}</div></div>:null;})}
   <a className="cmp-link-text" href={"https://www.imc-math.org.uk/?item=problems&year="+year} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",marginTop:12}}>Naskah resmi IMC {year} ↗</a>
  </details>)}
 </div>;
}

// Source-only visual registry: a figure may be displayed only if it appears in the source question. Never add explanatory or solution figures.
const geometryFigures: Readonly<Record<string, {alt:string; width:number; caption?:string}>> = {
 "calculus-cup-xv-2024-final-01":{alt:"Dua busur lingkaran merah dan biru membatasi D, dengan label C serta sumbu x dan y, x = −4 dan y = 2.",width:320},
 "calculus-cup-xv-2024-final-02":{alt:"Juring lingkaran biru dengan D₁ dan D₂, titik potong sumbu x di −√3 dan √3, dan titik bawah y = −1.",width:320},
 "calculus-cup-xv-2024-final-03":{alt:"Dua busur lingkaran merah dan biru membatasi D di sebelah kanan sumbu y, dengan tanda x = 2, y = 2 dan y = −2.",width:320},
 "iymc-2022-qr-e":{alt:"Two horizontally shifted equilateral triangles with common region A shaded.",width:420},
 "iymc-2023-qr-e":{alt:"Equilateral triangle with vertical side a and parallel dotted segment b enclosing shaded triangle A.",width:300},
 "iymc-2025-qr-e":{alt:"Rectangle of height a and width b cut by a diagonal.",width:420},
 "umo-2018-03":{alt:"An empty four by four grid, with a vertical domino labelled Kim and a horizontal domino labelled Li.",width:360},
 "umo-2018-04":{alt:"Square ABCD inside triangle XYZ; B lies on XY, C on YZ, D on ZX, and segment XA is drawn.",width:340},
 "umo-2018-05":{alt:"Twelve uncolored equally spaced points on a circle, numbered clockwise from 1 at the top.",width:290},
 "cemc-waterloo-2025-gauss-grade-8-06":{alt:"An uncolored triangle directly above a square, sharing its top edge.",width:145},
 "cemc-waterloo-2025-gauss-grade-8-07":{alt:"A coordinate grid with x and y axes and the point (5, 7) marked.",width:290},
 "ksnk-sd-2020-02":{alt:"Ilustrasi pola satu, dua, dan tiga meja segienam yang disambung, dengan kursi pada setiap sisi luar.",width:400},
 "osn-sd-2006-i2":{alt:"Segitiga ABC dengan D pada AB; sudut ACD 43 derajat, DCB 29 derajat, ABC 48 derajat.",width:310},
 "cemc-waterloo-2025-gauss-grade-7-11":{alt:"Coordinate plane with point R at (2, 6).",width:290},
 "cemc-waterloo-2026-pascal-grade-9-12":{alt:"Coordinate plane with point P at (2, 3).",width:290},
 "cemc-waterloo-2026-pascal-grade-9-16":{alt:"Four distinct collinear points in order P, Q, R, S; schematic, not to scale.",width:320},
 "umo-2016-01":{alt:"Six vertices and nine sticks: AB, BC, CD, DE, EF, FA, AC, CE, EA.",width:280},
 "umo-2017-01":{alt:"Invalid road coloring: orange edges 1–3 and 2–4, blue edges 1–2, 1–4, 2–3, 3–4.",width:250,caption:"Example of an inadmissible coloring: cities 1 and 2 cannot be connected using only orange roads."},
 "umo-2017-05":{alt:"Eight identical empty containers.",width:400},
 "umo-2019-01":{alt:"Three different tilings of a four by four square, as illustrated in the contest paper.",width:390,caption:"Three distinct examples of tilings."},
 "umo-2022-01":{alt:"Four overlapping squares, each shifted by one sixth of its side length to the upper right.",width:245},
 "umo-2023-01":{alt:"Diamond-shaped board with 25 unit cells in seven centered rows.",width:260},
 "umo-2013-01":{alt:"Six unit squares in a three-step staircase rising to the right.",width:190},
 "umo-2013-04":{alt:"Lines l1, l2, l3 meet at I; X lies on l1, Y lies on l2; the angles alpha, beta, gamma are marked as in the paper.",width:265},
 "umo-2013-06":{alt:"Boundary hexagons of triangular arrays with side lengths 3, 4, 5, 6; separate single and double hexagon tiles.",width:160},
 "umo-2019-04":{alt:"Example instruction cards for players 1 to 10; the first three recipients on each list are reproduced.",width:230},
 "umo-2020-01":{alt:"Nine islands connected by twelve horizontal and vertical bridges.",width:170},
 "umo-2020-03":{alt:"Three by three grid shaded at row 1 column 2, row 2 column 1, row 3 columns 1 and 2.",width:180},
 "umo-2020-05":{alt:"Triangle with side lengths 3, 5, and 7, as in the source.",width:135},
 "umo-2020-06":{alt:"Circular seating order from 1 through 10 clockwise, with 1 near the upper right.",width:250},
 "umo-2026-02":{alt:"Possible lattice moves: four green cardinal directions for Brutus and eight red directions for James.",width:140},
 "umo-2026-03":{alt:"Cube viewing directions and three identical stair-shaped projections; face labels specify the orientation of each view.",width:220},
 "umo-2026-05":{alt:"Sample path with two pairs of perpendicular logs, the second radial direction indicated by a dashed line.",width:285},
 "umo-2014-01":{alt:"Eight by eight grid with an orange stone at the center and corners A, B, C, D as in the source.",width:270},
 "umo-2014-03":{alt:"Right triangle and arrangement of four congruent right triangles around a smaller square, with right-angle marks.",width:190},
 "umo-2014-06":{alt:"Triangular diamond grid for n=3 with the original example path and four legal directions.",width:225},
 "umo-2024-02":{alt:"Four dark unit squares and their lightly shaded convex hull, matching the source arrangement.",width:205},
 "umo-2024-06":{alt:"Type A and B triangles and the specific n=4 rectangle tiling from the contest.",width:155},
 "iymc-2019-qr-e":{alt:"A square inscribed in a circle.",width:190},
 "iymc-2020-qr-e":{alt:"Gray composite figure with two tilted squares, a triangular region, a rectangle and a semicircle. A white diamond in the rectangle is marked A; its horizontal diagonal is a and rectangle width is 2a.",width:420},
 "iymc-2021-qr-e":{alt:"Right triangle with an interior line parallel to side z, lower segment x, upper segment y and angle alpha.",width:340},
 "iymc-2024-qr-e":{alt:"Two equal squares, one rotated 45 degrees with its left vertex at the center of the upright square. The nonoverlapping part of the rotated square is gray.",width:250},
 "imo-2023-05":{alt:"Japanese triangle of six rows, with one red circle per row and a path visiting two red circles.",width:220},
};
function GeometryFigure({id,compact=false}:{id:string;compact?:boolean}){
 const figure=geometryFigures[id];
 if(!figure)return null;
 const src=(process.env.NEXT_PUBLIC_BASE_PATH||"")+"/figures/competition/"+id+".svg";
 return <figure className={"cmp-geometry-figure"+(compact?" cmp-geometry-compact":"")} style={{margin:"16px auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:"100%"}}>
  <img src={src} alt={figure.alt} loading="lazy" decoding="async" style={{display:"block",width:compact?Math.min(figure.width,280):figure.width,maxWidth:"100%",height:"auto",padding:12,background:"#fff",borderRadius:4,boxSizing:"border-box"}}/>
  {figure.caption&&<figcaption style={{fontSize:"0.85em",lineHeight:1.5,textAlign:"center",color:"var(--cmp-muted)",maxWidth:"100%"}}>{figure.caption}</figcaption>}
 </figure>;
}

function ProblemCard({p,kind="list"}:{p:CompetitionProblem;kind?:"list"|"daily"|"related"}){
 return <article className={"cmp-problem-card cmp-problem-"+kind}>
  <div className="cmp-problem-meta"><span className="cmp-id">{p.id.toUpperCase()}</span>{p.topic!==materialOf(p)&&<span>{p.topic}</span>}<span className="cmp-difficulty">{difficulty(p)}</span></div>
  <div className="cmp-problem-main">
   <div className="cmp-problem-heading"><Link className="cmp-material-tag" href={link(p)} aria-label={"Buka soal "+p.id.toUpperCase()+": "+materialOf(p)}>{materialOf(p)}</Link>{kind==="daily"&&<span className="cmp-level-tag">{levelTitle(p.level)}</span>}</div>
   <div className="cmp-question-preview"><CompetitionPrompt prompt={p.prompt} problemId={p.id} compact/></div>
   <div className="cmp-problem-foot"><span>{kind!=="daily"&&<>{p.level}<span className="cmp-meta-dot">·</span></>}{shortSource(p)}</span><Link className="cmp-link-text" href={link(p)}>Lihat soal <span aria-hidden="true">→</span></Link></div>
  </div>
 </article>;
}

export function CompetitionCatalog({fixedLevel}:{fixedLevel?:Level}={}){
 const [level,setLevel]=useState<string>(fixedLevel||"Semua"),[query,setQuery]=useState(""),[topic,setTopic]=useState("Semua"),[diff,setDiff]=useState("Semua"),[source,setSource]=useState("Semua"),[year,setYear]=useState("Semua"),[contest,setContest]=useState("Semua"),[stage,setStage]=useState("Semua");
 useEffect(()=>{const params=new URLSearchParams(window.location.search);const l=params.get("level"),q=params.get("q"),s=params.get("source");if(!fixedLevel&&l&&isLevel(l))setLevel(l);if(q)setQuery(q);if(s==="competition"||s==="original")setSource(s);},[fixedLevel]);
 const pool=useMemo(()=>competitionProblems.filter(p=>level==="Semua"||p.level===level),[level]);
 const contests=Array.from(new Set(pool.map(categoryOf))).sort(categoryOrder);
 const contestPool=pool.filter(p=>contest==="Semua"||categoryOf(p)===contest);
 const years=Array.from(new Set(contestPool.flatMap(p=>p.source.year?[p.source.year]:[]))).sort((a,b)=>b-a);
 const stages=Array.from(new Set(contestPool.filter(p=>year==="Semua"||String(p.source.year)===year).flatMap(p=>p.source.stage?[p.source.stage]:[]))).sort();
 const topics=Array.from(new Set(pool.map(materialOf))).sort((a,b)=>a.localeCompare(b,"id"));
 const filtered=pool.filter(p=>(stage==="Semua"||p.source.stage===stage)&&(year==="Semua"||String(p.source.year)===year)&&(contest==="Semua"||categoryOf(p)===contest)&&(topic==="Semua"||materialOf(p)===topic)&&(diff==="Semua"||String(p.difficulty)===diff)&&(source==="Semua"||p.source.kind===source)&&[materialOf(p),p.title,p.prompt,p.topic,p.source.label,p.source.stage,p.source.number,p.level,p.id].join(" ").toLowerCase().includes(query.toLowerCase().trim()));
 const groups=contests.map(c=>({name:c,items:filtered.filter(p=>categoryOf(p)===c).sort((a,b)=>(b.source.year||0)-(a.source.year||0)||(a.source.stage||"").localeCompare(b.source.stage||"","id")||(a.source.number||a.id).localeCompare(b.source.number||b.id,"id",{numeric:true}))})).filter(g=>g.items.length>0);
 const reset=()=>{setQuery("");setLevel(fixedLevel||"Semua");setTopic("Semua");setDiff("Semua");setSource("Semua");setYear("Semua");setContest("Semua");setStage("Semua");};
 return <div className="cmp-page container cmp-catalog">
  <header className="cmp-page-head"><div><span className="cmp-kicker">KOLEKSI SOAL</span><h1>{fixedLevel?levelTitle(fixedLevel):"Kumpulan Soal"}</h1><p>{fixedLevel?levelMeta[fixedLevel].description:"Kumpulan soal olimpiade matematika untuk SD, SMP, SMA, dan mahasiswa."}</p></div><div className="cmp-page-count"><strong>{pool.length}</strong><span>soal tersedia</span></div></header>
  {fixedLevel&&<nav className="cmp-level-section-nav" aria-label="Menu jenjang"><span aria-current="page">Kumpulan Soal</span><Link href={levelHref(fixedLevel)+"potd/"}>Soal Harian →</Link></nav>}
  <div className="cmp-catalog-layout">
   <aside className="cmp-filter" aria-label="Filter soal">
    <div className="cmp-filter-title"><h2>Filter soal</h2><button className="cmp-text-button" type="button" onClick={reset}>Atur ulang</button></div>
    <label className="cmp-search-label">Pencarian<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Materi, kompetisi, kata kunci…"/></label>
    {!fixedLevel&&<><div className="cmp-filter-label">Jenjang</div>
    <div className="cmp-level-tabs" role="group" aria-label="Jenjang">{["Semua",...levels].map(l=><button type="button" key={l} aria-pressed={l===level} onClick={()=>{setLevel(l);setTopic("Semua");setYear("Semua");setContest("Semua");setStage("Semua");}}><span>{l==="Semua"?"Semua jenjang":l==="Kuliah"?"Mahasiswa":l}</span><small>{l==="Semua"?competitionProblems.length:competitionProblems.filter(p=>p.level===l).length}</small></button>)}</div></>}
    <div className="cmp-filter-grid">
     <label>Kompetisi<select aria-label="Kategori kompetisi" value={contest} onChange={e=>{setContest(e.target.value);setStage("Semua");setYear("Semua");setSource("Semua");setTopic("Semua");setDiff("Semua");}}><option value="Semua">Semua kompetisi</option>{contests.map(c=><option key={c} value={c}>{c}</option>)}</select></label>
     <label>Tahun<select value={year} onChange={e=>{setYear(e.target.value);setStage("Semua");}}><option>Semua</option>{years.map(y=><option key={y} value={y}>{y}</option>)}</select></label>
     
     <label>Tahap seleksi<select value={stage} onChange={e=>setStage(e.target.value)}><option>Semua</option>{stages.map(s=><option key={s}>{s}</option>)}</select></label>
     <label>Materi<select value={topic} onChange={e=>setTopic(e.target.value)}><option>Semua</option>{topics.map(t=><option key={t}>{t}</option>)}</select></label>
     <label>Kesulitan<select value={diff} onChange={e=>setDiff(e.target.value)}><option>Semua</option>{difficultyLabels.slice(1).map((d,i)=><option value={i+1} key={d}>{d}</option>)}</select></label>
     <label>Sumber<select value={source} onChange={e=>setSource(e.target.value)}><option>Semua</option><option value="original">DMath Learning Proposed</option><option value="competition">Soal kompetisi</option></select></label>
    </div>
   </aside>
   <div className="cmp-results">

    <div className="cmp-result-head"><h2>{level==="Semua"?"Semua soal":levelMeta[level as Level].title}</h2><span role="status">{filtered.length} soal ditemukan</span></div>
    {groups.map(g=><section className="cmp-contest-group" key={g.name}><div className="cmp-contest-heading"><h3 style={{minWidth:0,overflowWrap:"break-word"}}>{competitionHeading(g.name)}</h3><span style={{flexShrink:0,whiteSpace:"nowrap"}}>{g.items.length} soal</span></div><div className="cmp-problem-list">{g.items.map(p=><ProblemCard p={p} key={p.id}/>)}</div></section>)}
    {!filtered.length&&<div className="cmp-empty"><h2>Belum ada soal sesuai filter</h2><p>Coba ubah jenjang, sumber, atau kata kunci.</p><button type="button" className="cmp-button cmp-secondary" onClick={reset}>Atur ulang filter</button></div>}
   </div>
  </div>
 </div>;
}

export function CompetitionProblemDetail({problem:p}:{problem:CompetitionProblem}){
 const related=competitionProblems.filter(x=>x.id!==p.id&&x.level===p.level).sort((a,b)=>Number(materialOf(b)===materialOf(p))-Number(materialOf(a)===materialOf(p))).slice(0,3);
 return <div className="cmp-page container"><div className="cmp-simple-reading">
  <nav className="cmp-breadcrumb" aria-label="Jejak navigasi"><Link href="/problem-solving/">Kumpulan Soal</Link><span>/</span><Link href={levelHref(p.level)}>{p.level}</Link><span>/</span><span>{p.id.toUpperCase()}</span></nav>
  <article className="cmp-detail">
   <header className="cmp-detail-head"><div className="cmp-problem-meta"><span className="cmp-id">{p.id.toUpperCase()}</span><span>{levelTitle(p.level)}</span><span>{p.topic}</span><span className="cmp-difficulty">{difficulty(p)}</span></div><h1 className="cmp-material-detail"><span className="cmp-material-tag">{materialOf(p)}</span></h1></header>
   <div className="cmp-main-prompt"><h2>Soal</h2><div><CompetitionPrompt prompt={p.prompt} problemId={p.id}/></div></div>
   <section className="cmp-source-panel" id="source"><h2>Sumber soal</h2><p>{p.source.label}</p>{p.source.collection&&<p>Referensi tambahan: <Link href={"/sumber-lain/"+p.source.collection.toLowerCase()+"/"}>{p.source.collection}</Link>{p.source.collectionUrl&&<> · <a href={p.source.collectionUrl} target="_blank" rel="noopener noreferrer">Buka referensi ↗</a></>}</p>}{p.source.url&&<a href={p.source.url} target="_blank" rel="noopener noreferrer" className="cmp-link-text">Lihat sumber ↗</a>}</section>
  </article>
  <div className="cmp-back"><Link href={levelHref(p.level)} className="cmp-button cmp-secondary">← Kembali ke kumpulan soal</Link></div>
  <section className="cmp-subsection cmp-related"><h2>Soal lainnya</h2><div className="cmp-problem-list">{related.map(x=><ProblemCard p={x} key={x.id} kind="related"/>)}</div></section>
 </div></div>;
}

function dateParts(){const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jakarta",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());const part=(t:string)=>parts.find(x=>x.type===t)?.value||"";return part("year")+"-"+part("month")+"-"+part("day");}
export function ProblemOfDay({compact=false,fixedLevel}:{compact?:boolean;fixedLevel?:Level}={}){
 const [selectedDate,setDate]=useState(""),[today,setToday]=useState("");const date=selectedDate||today;
 useEffect(()=>{const update=()=>setToday(dateParts());update();const timer=window.setInterval(update,60000);return()=>window.clearInterval(timer);},[]);
 const dates=dailyDates.filter(d=>d<=today);
 const visibleLevels=fixedLevel?[fixedLevel]:levels;
 const record=dailySchedule[date];
 const daily=date&&date<=today&&record?visibleLevels.flatMap(l=>{const p=competitionProblems.find(x=>x.id===record[l]&&x.level===l);return p?[p]:[];}):[];
 const displayDate=date?new Intl.DateTimeFormat("id-ID",{dateStyle:"full",timeZone:"UTC"}).format(new Date(date+"T00:00:00Z")):"";
 const previous=dates.filter(d=>d<date).at(-1);
 const next=dates.find(d=>d>date);
 return <section className={compact?"cmp-potd-compact":"cmp-page container cmp-potd"}>
  <header className={compact?"cmp-section-heading":"cmp-page-head"}><div><span className="cmp-kicker">{fixedLevel?levelTitle(fixedLevel):"SOAL HARIAN"}</span>{compact?<h2>Soal Harian</h2>:<h1>Soal Harian</h1>}<p>{fixedLevel?"Soal harian "+levelTitle(fixedLevel)+".":"Satu soal per jenjang pada setiap tanggal yang terjadwal."}</p></div>{compact&&<Link className="cmp-link-text" href="/problem-of-the-day/">Lihat arsip harian →</Link>}</header>
  {fixedLevel&&<nav className="cmp-level-section-nav" aria-label="Menu jenjang"><Link href={levelHref(fixedLevel)}>Kumpulan Soal</Link><span aria-current="page">Soal Harian</span></nav>}
  {date?<><div className="cmp-date-bar"><div className="cmp-potd-date"><span className="cmp-date-mark" aria-hidden="true"/><span>{displayDate}</span><small>WIB</small></div>{!compact&&<div className="cmp-date-controls"><button type="button" className="cmp-button cmp-secondary" aria-label="Hari sebelumnya" disabled={!previous} onClick={()=>{if(previous)setDate(previous);}}>←</button><select aria-label="Tanggal soal" value={date} onChange={e=>setDate(e.target.value)}>{!dates.includes(date)&&<option value={date}>{date} — belum tersedia</option>}{dates.slice().reverse().map(d=><option key={d} value={d}>{d}</option>)}</select><button type="button" className="cmp-button cmp-secondary" aria-label="Hari berikutnya" disabled={!next} onClick={()=>{if(next)setDate(next);}}>→</button><button type="button" className="cmp-text-button" onClick={()=>setDate("")}>Hari ini</button></div>}</div>{daily.length?<div className={"cmp-daily-grid"+(fixedLevel?" cmp-daily-single":"")}>{daily.map(p=><ProblemCard key={p.id} p={p} kind="daily"/>)}</div>:<div className="cmp-empty"><h2>Belum ada soal untuk tanggal ini</h2><p>Soal baru belum dijadwalkan. Soal sebelumnya tetap tersedia di arsip.</p>{compact&&<Link className="cmp-link-text" href="/problem-of-the-day/">Buka arsip →</Link>}</div>}</>:<div className="cmp-empty" role="status">Memuat pilihan soal harian…</div>}
 </section>;
}
