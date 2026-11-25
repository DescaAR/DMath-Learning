import type { Metadata } from "next";
import Link from "next/link";
import { LevelCards, ProblemOfDay } from "@/components/CompetitionWorkspace";
import { competitionProblems } from "@/data/competition-problems";
import { createPageMetadata } from "@/lib/seo";

export const metadata:Metadata={...createPageMetadata({title:"DMath Learning",description:"Kumpulan soal olimpiade matematika untuk SD, SMP, SMA, dan mahasiswa.",path:"/",keywords:["olimpiade matematika","OSN","IMO","ON-MIPA","IMC","SEAMO"]}),title:{absolute:"DMath Learning | Think Deeper, Solve Better."}};

export default function Home(){
 return <div className="cmp-home">
  <section className="cmp-hero" aria-labelledby="cmp-home-title">
   <div className="container cmp-hero-inner">
    <div className="cmp-hero-copy">
     <span className="cmp-hero-kicker">MATHEMATICS COMPETITION</span>
     <h1 id="cmp-home-title">Think Deeper,<br/><em>Solve Better.</em></h1>
     <p>Kumpulan soal olimpiade matematika, dari tingkat sekolah dasar hingga perguruan tinggi.</p>
     <div className="cmp-actions">
      <Link className="cmp-button cmp-primary" href="/problem-solving/">Problem Solving <span aria-hidden="true">→</span></Link>
      <Link className="cmp-button cmp-secondary" href="/problem-of-the-day/">Problem of the Day</Link>
     </div>
    </div>
    <div className="cmp-hero-index">
     <div className="cmp-index-heading"><span className="cmp-kicker">PROBLEM COLLECTION</span><span>{competitionProblems.length} soal</span></div>
     <h2>Pilih jenjang</h2>
     <LevelCards/>
     <Link className="cmp-index-all" href="/problem-solving/">Lihat seluruh koleksi <span aria-hidden="true">↗</span></Link>
    </div>
   </div>
  </section>
  <div className="container cmp-home-content"><ProblemOfDay compact/></div>
 </div>;
}
