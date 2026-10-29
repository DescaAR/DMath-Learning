import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { learningTracks, materials, subjects } from "@/data/site-data";
import { HomeMathShowcase } from "@/components/HomeMathShowcase";
import { isPublicAcademicLevel, isPublicContentHref, isPublicMaterialSlug } from "@/lib/public-content";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "DMath Learning",
    description: "Belajar matematika tingkat universitas dan ON-MIPA melalui konsep, definisi, pembuktian, visualisasi interaktif, dan latihan.",
    path: "/",
    keywords: ["platform belajar matematika Indonesia", "belajar matematika online"],
  }),
  title: { absolute: "DMath Learning | Think Deeper, Solve Better." },
};

const subjectGroups=[
  {label:"DASAR & PENALARAN",start:0,end:6},
  {label:"ANALISIS & ALJABAR",start:6,end:11},
  {label:"STATISTIKA & DISKRIT",start:11,end:16},
  {label:"TERAPAN & LANJUT",start:16,end:26},
];

export default function Home(){
  const tracks=learningTracks.filter(track=>isPublicContentHref(track.href));
  const availableMaterials=materials.filter(material=>{
    const slug=material.href.startsWith("/materi/")?material.href.slice("/materi/".length):"";
    return isPublicAcademicLevel(material.level)&&(!slug||isPublicMaterialSlug(slug));
  });
  const onMipa=tracks.find(track=>track.title.includes("ON-MIPA"));
  const university=tracks.find(track=>track.title==="Matematika Kuliah");

  return <div className="dmath-home">
    <section className="dmath-home-hero" aria-labelledby="home-hero-title">
      <div className="dmath-home-grid" aria-hidden="true"/>
      <div className="container dmath-home-hero-grid">
        <div className="dmath-home-hero-copy">
          <div className="dmath-home-announcement"><span className="dmath-home-announcement-dot"/> RUANG BELAJAR MATEMATIKA <span className="dmath-home-announcement-separator"/> UNIVERSITAS & ON-MIPA</div>
          <h1 id="home-hero-title">Think deeper.<br/><span>Solve better.</span></h1>
          <p className="dmath-home-introduction">Pahami matematika hingga ke dasar penalarannya. Dari definisi dan pembuktian formal sampai visualisasi interaktif dan pemecahan soal yang menantang.</p>
          <div className="dmath-home-hero-actions">
            <Link className="dmath-button dmath-button-primary" href="/materi">Jelajahi Materi <span aria-hidden="true">↗</span></Link>
            <Link className="dmath-button dmath-button-glass" href="/bank-soal">Latihan Problem Solving <span aria-hidden="true">→</span></Link>
          </div>
          <div className="dmath-home-hero-evidence">
            <div><strong>26</strong><span>Bidang matematika</span></div>
            <div><strong>{availableMaterials.length}</strong><span>Materi terdaftar</span></div>
            <div><strong>{tracks.length}</strong><span>Jalur belajar</span></div>
          </div>
        </div>
        <HomeMathShowcase/>
      </div>
      <div className="container dmath-home-hero-bottom">
        <div className="dmath-home-hero-ticker"><span>01 / EXPLORE</span> Definisi & Teorema</div>
        <span className="dmath-home-hero-ticker">02 / UNDERSTAND <span>Visualisasi Interaktif</span></span>
        <span className="dmath-home-hero-ticker">03 / MASTER <span>Latihan & Pembuktian</span></span>
        <a href="#bidang" className="dmath-scroll-cue">Lihat semua bidang <span aria-hidden="true">↓</span></a>
      </div>
    </section>

    <section className="dmath-home-section dmath-home-paths" id="jalur">
      <div className="container">
        <div className="dmath-section-intro">
          <div><span className="dmath-kicker">LEARNING PATHS / 01</span><h2>Pilih perjalanan belajarmu.</h2></div>
          <p>Mulai dari teori, lanjutkan ke pembuktian, lalu uji pemahaman melalui soal.</p>
        </div>
        <div className="dmath-paths-grid">
          {university&&<Link href={university.href} className="dmath-path-card dmath-path-university">
            <span className="dmath-path-card-kicker">01 — UNIVERSITY MATHEMATICS</span>
            <span className="dmath-path-card-icon" aria-hidden="true">∫</span>
            <div className="dmath-path-card-content"><h3>Matematika<br/>Universitas</h3><p>Kuasai analisis, aljabar, geometri, teori peluang, dan bidang lanjut melalui penjelasan yang ketat dan terstruktur.</p></div>
            <span className="dmath-path-card-link">Jelajahi jalur <span aria-hidden="true">↗</span></span>
          </Link>}
          {onMipa&&<Link href={onMipa.href} className="dmath-path-card dmath-path-olympiad">
            <span className="dmath-path-card-kicker">02 — COMPETITION MATHEMATICS</span>
            <span className="dmath-path-card-icon" aria-hidden="true">∑</span>
            <div className="dmath-path-card-content"><h3>ON-MIPA<br/>& Problem Solving</h3><p>Perdalam intuisi, ketelitian pembuktian, dan strategi menyelesaikan persoalan nonrutin.</p></div>
            <span className="dmath-path-card-link">Jelajahi jalur <span aria-hidden="true">↗</span></span>
          </Link>}
        </div>
      </div>
    </section>

    <section className="dmath-home-section dmath-home-fields" id="bidang">
      <div className="container">
        <div className="dmath-section-intro">
          <div><span className="dmath-kicker">MATHEMATICS LIBRARY / 02</span><h2>26 bidang. Satu ekosistem belajar.</h2></div>
          <p>Temukan bidang matematika yang ingin dipelajari. Setiap materi dikembangkan secara bertahap, dari konsep hingga pembuktian dan latihan.</p>
        </div>
        {subjectGroups.map(group=><div className="dmath-subject-group" key={group.label}>
          <div className="dmath-subject-group-label"><span>{group.label}</span><span>{String(group.end-group.start).padStart(2,"0")} BIDANG</span></div>
          <div className="dmath-subject-grid">
            {subjects.slice(group.start,group.end).map((subject,index)=>{
              const number=group.start+index+1;
              return <Link key={subject} href={"/materi?subject="+encodeURIComponent(subject)} className="dmath-subject-link">
                <span className="dmath-subject-index">{String(number).padStart(2,"0")}</span>
                <strong>{subject}</strong>
                <span className="dmath-subject-arrow" aria-hidden="true">↗</span>
              </Link>;
            })}
          </div>
        </div>)}
        <div className="dmath-home-library-link"><Link href="/materi">Buka seluruh katalog materi <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>

    <section className="dmath-home-section dmath-home-method" id="metode">
      <div className="container dmath-method-grid">
        <div className="dmath-method-heading">
          <span className="dmath-kicker">HOW WE LEARN / 03</span>
          <h2>Lebih dari sekadar menghafal rumus.</h2>
          <p>Setiap gagasan dibangun dari alasan matematisnya, bukan hanya hasil akhir.</p>
          <Link className="dmath-method-link" href="/materi/integral-riemann">Lihat contoh: Integral Riemann <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="dmath-method-steps">
          <div className="dmath-method-step"><span>01</span><div><h3>Pahami konsep</h3><p>Definisi formal, contoh yang tepat, dan intuisi di balik setiap pernyataan.</p></div><span aria-hidden="true">↗</span></div>
          <div className="dmath-method-step"><span>02</span><div><h3>Ikuti pembuktiannya</h3><p>Lemma, proposisi, teorema, dan argumentasi matematis yang disusun runtut.</p></div><span aria-hidden="true">↗</span></div>
          <div className="dmath-method-step"><span>03</span><div><h3>Eksplorasi & uji diri</h3><p>Visualisasi yang relevan, contoh terbahas, latihan, dan bank soal.</p></div><span aria-hidden="true">↗</span></div>
        </div>
      </div>
    </section>

    <section className="dmath-home-bottom-cta">
      <div className="container dmath-bottom-cta-inner">
        <div><span className="dmath-kicker">READY TO GO DEEPER?</span><h2>Satu langkah lebih dalam, setiap hari.</h2><p>Mulai dari suatu definisi. Pahami alasannya. Buktikan hasilnya. Selesaikan masalahnya.</p></div>
        <Link href="/materi" className="dmath-button dmath-button-primary">Mulai Belajar <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  </div>;
}
