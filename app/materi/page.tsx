import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StatusBadge } from "@/components/StatusBadge";
import { materials } from "@/data/site-data";

export const metadata: Metadata = { title: "Materi" };

export default function MateriPage() {
  return (
    <>
      <PageHero eyebrow="Perpustakaan materi" title="Materi yang dalam, terstruktur, dan saling terhubung." description="Status konten ditampilkan secara terbuka. Published berarti siap dibaca; Draft sedang ditulis; Planned masih berada dalam roadmap." />
      <section className="section">
        <div className="container">
          <div className="material-list">
            {materials.map((item) => (
              <article className="material-row" key={item.title}>
                <div>
                  <span className="meta-line">{item.level} · {item.subject}</span>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                </div>
                <div className="material-row-actions">
                  <StatusBadge status={item.status} />
                  {item.href ? <Link href={item.href} className="btn secondary">Pelajari</Link> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
