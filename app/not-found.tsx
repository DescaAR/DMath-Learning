import Link from "next/link";
import { RiemannHubShell } from "@/components/RiemannHubShell";

export default function NotFound() {
  return (
    <RiemannHubShell
      eyebrow="404 · Halaman Tidak Ditemukan"
      title="Halaman Tidak Ditemukan"
      lead="Gunakan jalur utama DMath Learning untuk kembali ke materi, bank soal, atau jalur belajar yang tersedia."
      meta={["DMath Learning","Navigasi"]}
      stats={[
        {value:404,label:"status"},
        {value:"Materi",label:"kembali belajar"},
        {value:"Bank Soal",label:"latihan"},
        {value:"Jalur",label:"roadmap"},
      ]}
      actions={[
        {label:"Kembali ke Beranda",href:"/",kind:"primary"},
        {label:"Buka Materi",href:"/materi",kind:"secondary"},
      ]}
      overviewTitle="Navigasi DMath Learning"
      roadmap={["Beranda","Jalur Belajar","Materi","Bank Soal","Olimpiade"]}
      sections={[{id:"not-found-navigation",label:"Navigasi"}]}
    >
      <section id="not-found-navigation" className="book-section ird-source-section">
        <div className="section-number">01</div>
        <span className="eyebrow">Navigasi</span>
        <h2>Navigasi</h2>
        <div className="actions">
          <Link className="btn primary" href="/belajar">Jalur Belajar</Link>
          <Link className="btn secondary" href="/materi">Materi</Link>
          <Link className="btn secondary" href="/bank-soal">Bank Soal</Link>
          <Link className="btn secondary" href="/olimpiade">Olimpiade</Link>
        </div>
      </section>
    </RiemannHubShell>
  );
}
