import Link from "next/link";
import { competitionProblems } from "@/data/competition-problems";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({title:"Sumber Lain",description:"Katalog soal dari MathNet dan Art of Problem Solving.",path:"/sumber-lain"});
const collections = [
 {id:"mathnet",name:"MathNet",key:"MathNet",description:"Koleksi olimpiade matematika nasional dan internasional.",url:"https://mathnet.mit.edu/explorer.html"},
 {id:"aops",name:"Art of Problem Solving (AoPS)",key:"AoPS",description:"Koleksi soal kompetisi matematika dan komunitas problem solving.",url:"https://artofproblemsolving.com/resources"}
] as const;

export default function Page(){
 return <div className="cmp-page container">
  <header className="cmp-page-head"><div><span className="cmp-kicker">KOLEKSI SOAL</span><h1>Sumber Lain</h1><p>Kumpulan soal berdasarkan sumber referensi.</p></div></header>
  <div className="cmp-feature-grid">{collections.map(s=><article key={s.id} className="cmp-feature"><h2>{s.name}</h2><p>{s.description}</p><p>{competitionProblems.filter(p=>p.source.collection===s.key).length} soal tersedia di DMath</p><Link className="cmp-link-text" href={"/sumber-lain/"+s.id+"/"}>Lihat kumpulan soal →</Link></article>)}</div>
 </div>;
}
