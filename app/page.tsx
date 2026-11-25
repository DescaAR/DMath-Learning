import type { Metadata } from "next";
import Link from "next/link";
import { LevelCards, ProblemOfDay } from "@/components/CompetitionWorkspace";
import { competitionProblems, levels, levelMeta } from "@/data/competition-problems";
import { createPageMetadata } from "@/lib/seo";
export const metadata:Metadata={...createPageMetadata({title:"DMath Learning",description:"Kumpulan soal olimpiade matematika untuk SD, SMP, SMA, dan mahasiswa.",path:"/",keywords:["olimpiade matematika","OSN","IMO","ON-MIPA","IMC","SEAMO"]}),title:{absolute:"DMath Learning | Think Deeper, Solve Better."}};
export default function Home(){
 return <div className="cmp-home">
  <section className="cmp-hero" aria-labelledby="cmp-home-title">
   <div className="container cmp-hero-inner">
    <div className="cmp-hero-copy">
     <span className="cmp-hero-kicker">DMATH LEARNING · MATHEMATICS COMPETITION</span>
     <h1 id="cmp-home-title">Think Deeper.<br/><em>Solve Better.</em></h1>
     <p>Kumpulan soal olimpiade matematika dari tingkat SD hingga perguruan tinggi.</p>
     <div className="cmp-actions"><Link className="cmp-button cmp-primary" href="/problem-solving/">Jelajahi soal <span aria-hidden="true">→</span></Link><Link className="cmp-button cmp-hero-secondary" href="/problem-of-the-day/">Problem of the Day</Link></div>
    </div>
    <aside className="cmp-collection-panel" aria-label="Ringkasan koleksi soal">
     <span className="cmp-collection-label">PROBLEM COLLECTION</span>
     <div className="cmp-collection-total"><strong>{competitionProblems.length}</strong><span>soal tersedia</span></div>
     {levels.map(level=><div className="cmp-collection-row" key={level}><span>{levelMeta[level].title}</span><b>{String(competitionProblems.filter(p=>p.level===level).length).padStart(2,"0")}</b></div>)}
    </aside>
   </div>
  </section>
  <div className="container cmp-home-content">
   <section className="cmp-subsection"><div className="cmp-section-heading"><div><span className="cmp-kicker">Problem Solving</span><h2>Pilih jenjang</h2></div><Link className="cmp-link-text" href="/problem-solving/">Lihat semua soal →</Link></div><LevelCards/></section>
   <ProblemOfDay compact/>
  </div>
 </div>;
}
