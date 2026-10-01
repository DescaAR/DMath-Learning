// Vercel deployment sync
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { olympiadHubs } from "@/data/olympiad-hubs";

export const metadata: Metadata = createPageMetadata({
  title: "Olimpiade Matematika dan ON-MIPA",
  description: "Jalur olimpiade matematika dan ON-MIPA dengan syllabus, roadmap, soal terkurasi, challenge, serta pembahasan untuk SD, SMP, SMA, dan mahasiswa.",
  path: "/olimpiade",
  keywords: ["olimpiade matematika", "ON-MIPA matematika", "soal olimpiade matematika"],
});

export default function OlimpiadePage() {
  return (
    <>
      <PageHero
        eyebrow="Matematika kompetisi"
        title="Jalur olimpiade yang terpisah dari kurikulum reguler."
        description="Fokus pada problem solving nonrutin, strategi, hint bertahap, pembahasan lengkap, roadmap, dan latihan yang dibangun khusus untuk kompetisi."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Pilih jalur kompetisi</span>
              <h2>Setiap jenjang sekarang punya syllabus, roadmap, soal, dan challenge sendiri.</h2>
            </div>
            <p>
              Klik salah satu jalur untuk membuka halaman khusus. Tombol di dalam kartu juga langsung
              menuju bagian yang kamu butuhkan.
            </p>
          </div>

          <div className="grid two-col-grid olympiad-overview-grid">
            {olympiadHubs.map((hub) => (
              <article className="card olympiad-card olympiad-filled-card" key={hub.slug}>
                <div className="olympiad-card-topline">
                  <span className="card-index">Roadmap</span>
                  <span className="olympiad-ready-badge">Ready</span>
                </div>

                <h2>{hub.title.id}</h2>
                <p>{hub.fields.map((field) => field.id).join(" · ")}</p>

                <div className="olympiad-card-stats">
                  <div><strong>{hub.syllabus.length}</strong><span>bidang</span></div>
                  <div><strong>{hub.curated.length}</strong><span>soal terkurasi</span></div>
                  <div><strong>3</strong><span>fase roadmap</span></div>
                  <div><strong>1</strong><span>challenge</span></div>
                </div>

                <div className="mini-roadmap olympiad-action-roadmap">
                  <Link href={"/olimpiade/" + hub.slug + "#syllabus"}>Syllabus</Link>
                  <Link href={"/olimpiade/" + hub.slug + "#roadmap"}>Roadmap</Link>
                  <Link href={"/olimpiade/" + hub.slug + "#problems"}>Curated Problems</Link>
                  <Link href={"/olimpiade/" + hub.slug + "#bank-soal"}>Problem Bank</Link>
                  <Link href={"/olimpiade/" + hub.slug + "#problems"}>Pembahasan</Link>
                  <Link href={"/olimpiade/" + hub.slug + "#challenge"}>Challenge</Link>
                </div>

                <Link className="olympiad-open-track" href={"/olimpiade/" + hub.slug}>
                  Buka jalur lengkap →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
