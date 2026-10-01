import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sumber Belajar Lain",
  description: "Daftar sumber belajar matematika lain yang direkomendasikan DMath Learning.",
  path: "/sumber-belajar-lain",
  keywords: ["sumber belajar matematika", "AoPS", "COLIMP", "MORFID"],
});

const resources = [
  { name: "AoPS", url: "https://artofproblemsolving.com/" },
  { name: "COLIMP", url: "https://rivalfaiz.github.io/colimp" },
  { name: "MORFID", url: "https://morfidmath.wordpress.com/" },
] as const;

export default function SumberBelajarLainPage() {
  return (
    <main className="section">
      <div className="container narrow">
        <h1>Sumber Belajar Lain</h1>

        <div className="ird-worked-grid" style={{ marginTop: 32 }}>
          {resources.map((resource) => (
            <a
              className="ird-worked-card"
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              key={resource.url}
            >
              <h2>{resource.name}</h2>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
