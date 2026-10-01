import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Image from "next/image";
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
            <p>Huruf D merepresentasikan identitas personal pendiri, sedangkan Math Learning menunjukkan fokus utama platform pada pembelajaran matematika.</p>
            <p>Karakter brand diarahkan agar akademik, modern, intelektual, profesional, matang, minimal, dan terpercaya.</p>
            <div className="content-box">
              <strong>Tentang Pengelola</strong>
              <p>Profil, minat akademik, pengalaman mengajar, kompetisi, dan kontak disiapkan sebagai konfigurasi yang mudah diperbarui. Detail publik belum diisi pada versi ini untuk menghindari data placeholder yang dianggap final.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
