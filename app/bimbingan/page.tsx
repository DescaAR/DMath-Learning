import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = createPageMetadata({
  title: "Bimbingan Matematika",
  description: "Informasi program bimbingan matematika DMath Learning.",
  path: "/bimbingan",
  noIndex: true,
});

const programs = [
  "Bimbingan Matematika SD",
  "Bimbingan Matematika SMP",
  "Bimbingan Matematika SMA",
  "Bimbingan Olimpiade SD",
  "Bimbingan Olimpiade SMP",
  "Bimbingan Olimpiade SMA",
  "Bimbingan Matematika Kuliah",
  "Bimbingan Olimpiade Mahasiswa / ON-MIPA",
];

export default function BimbinganPage() {
  return (
    <>
      <PageHero
        eyebrow="Bimbingan matematika"
        title="Pendampingan yang menekankan cara berpikir."
        description="Program bimbingan tidak menampilkan harga pada versi awal. Fokus halaman ini adalah metode belajar, target, format pertemuan, dan cakupan materi."
      />
      <section className="section">
        <div className="container">
          <div className="grid two-col-grid">
            {programs.map((program) => (
              <article className="card" key={program}>
                <span className="eyebrow">Program</span>
                <h2>{program}</h2>
                <p>Fokus pada konsep, penalaran, latihan bertahap, identifikasi kesalahan, dan problem solving yang sesuai tingkat peserta.</p>
                <div className="program-meta">
                  <span>Online / menyesuaikan</span>
                  <span>Materi terstruktur</span>
                </div>
              </article>
            ))}
          </div>

          <div className="callout contact-callout">
            <div>
              <span className="eyebrow">Kontak</span>
              <h2>Tertarik berdiskusi tentang program?</h2>
              <p>CTA WhatsApp akan diaktifkan setelah nomor kontak resmi DMath Learning ditetapkan di konfigurasi website.</p>
            </div>
            <span className="btn disabled">WhatsApp segera tersedia</span>
          </div>
        </div>
      </section>
    </>
  );
}
