import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = createPageMetadata({
  title: "Tentang DMath Learning",
  description: "Mengenal DMath Learning, platform pembelajaran matematika yang menekankan pemahaman konsep, pembuktian, visualisasi, latihan, dan problem solving.",
  path: "/tentang",
  keywords: ["tentang DMath Learning"],
});

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang DMath Learning"
        title="Matematika dipelajari sebagai struktur, bukan kumpulan rumus."
        description="DMath Learning merupakan platform pembelajaran matematika yang berfokus pada pemahaman konsep, pengembangan penalaran, dan kemampuan problem solving."
      />
      <section className="section">
        <div className="container split about-split">
          <div className="logo-panel">
            <Image src="/brand/logo-symbol.webp" alt="Logo DMath Learning" width={260} height={260} />
          </div>
          <div>
            <span className="eyebrow">Identitas</span>
            <h2>DMath Learning</h2>
            <p>DMath Learning adalah platform pembelajaran matematika berbahasa Indonesia yang menyusun materi sebagai struktur belajar: intuisi, definisi formal, teorema, pembuktian, visualisasi, contoh, latihan, dan problem solving.</p>
            <p>Konten mencakup matematika sekolah, matematika universitas, olimpiade, dan ON-MIPA. Tujuannya bukan hanya menyediakan jawaban, tetapi membantu pembaca memahami alasan matematis di balik setiap langkah.</p>
            <div className="content-box">
              <strong>Standar Konten</strong>
              <p>Setiap bab utama diarahkan untuk memiliki notasi yang konsisten, definisi yang presisi, pembuktian yang dapat ditelusuri, visualisasi yang relevan, serta latihan yang bertahap dari pemahaman konsep menuju penyelesaian masalah.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Ruang Belajar</span>
              <h2>Satu ekosistem untuk memahami, berlatih, dan memecahkan masalah.</h2>
            </div>
          </div>
          <div className="grid three-col-grid">
            <article className="card">
              <h3>Materi</h3>
              <p>Bab digital dengan konsep, definisi, teorema, pembuktian, visualisasi, contoh, dan latihan.</p>
              <Link className="link" href="/materi">Jelajahi materi →</Link>
            </article>
            <article className="card">
              <h3>Bank Soal</h3>
              <p>Kumpulan soal terstruktur berdasarkan materi dan tingkat kesulitan untuk latihan mandiri.</p>
              <Link className="link" href="/bank-soal">Buka bank soal →</Link>
            </article>
            <article className="card">
              <h3>Olimpiade & ON-MIPA</h3>
              <p>Jalur kompetisi dengan roadmap, soal nonrutin, challenge, dan pembahasan matematis.</p>
              <Link className="link" href="/olimpiade">Lihat jalur kompetisi →</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
