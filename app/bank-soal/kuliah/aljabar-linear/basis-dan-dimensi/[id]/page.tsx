import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { basisDimensionProblems, basisProblemMap } from "@/data/basis-dimension-problems";
import { RichMath } from "@/components/RichMath";

export function generateStaticParams() {
  return basisDimensionProblems.map((problem) => ({ id: problem.id.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const problem = basisProblemMap[id.toLowerCase()];
  if (!problem) return {};

  return {
    title: problem.id + " — " + problem.title,
    description: "Soal " + problem.subchapter + " tingkat " + problem.difficulty + " pada Bank Soal Basis dan Dimensi DMath Learning.",
  };
}

export default async function ProblemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const problem = basisProblemMap[id.toLowerCase()];
  if (!problem) notFound();

  const index = basisDimensionProblems.findIndex((item) => item.id === problem.id);
  const previous = index > 0 ? basisDimensionProblems[index - 1] : null;
  const next = index < basisDimensionProblems.length - 1 ? basisDimensionProblems[index + 1] : null;

  return (
    <section className="section problem-detail-page">
      <div className="container narrow">
        <div className="breadcrumb">
          <Link href="/bank-soal">Bank Soal</Link>
          <span>/</span>
          <Link href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">Basis dan Dimensi</Link>
          <span>/</span>
          <strong>{problem.id}</strong>
        </div>

        <article className="problem-focus problem-detail-card">
          <div className="problem-meta">
            <span className="problem-id">{problem.id}</span>
            <span>{problem.subchapter}</span>
            <span>{problem.difficulty}</span>
            <span>{problem.type}</span>
            <span>{problem.estimatedTime}</span>
          </div>

          <h1>{problem.title}</h1>
          <div className="problem-text rich-problem-text">
            <RichMath>{problem.problem}</RichMath>
          </div>

          <div className="concept-pills">
            {problem.concepts.map((concept) => <span key={concept}>{concept}</span>)}
          </div>

          <div className="problem-detail-hints">
            <details className="details-box hint-details">
              <summary>Hint 1</summary>
              <p><RichMath>{problem.hint1}</RichMath></p>
            </details>
            <details className="details-box hint-details">
              <summary>Hint 2</summary>
              <p><RichMath>{problem.hint2}</RichMath></p>
            </details>
          </div>

          <details className="details-box solution-details">
            <summary>Lihat Pembahasan Lengkap</summary>
            <div className="full-solution detail-solution">
              <div className="solution-overview-grid">
                <div className="content-box">
                  <span className="box-kicker">Diketahui</span>
                  <p><RichMath>{problem.known}</RichMath></p>
                </div>
                <div className="content-box">
                  <span className="box-kicker">Dibuktikan / Dicari</span>
                  <p><RichMath>{problem.target}</RichMath></p>
                </div>
              </div>

              <div className="content-box idea-box">
                <span className="box-kicker">Ide Utama</span>
                <p><RichMath>{problem.idea}</RichMath></p>
              </div>

              <div className="content-box solution-box">
                <span className="box-kicker">Pembahasan Langkah demi Langkah</span>
                <div className="solution-steps">
                  {problem.solution.map((step, stepIndex) => (
                    <div className="solution-step" key={step}>
                      <span>{stepIndex + 1}</span>
                      <p><RichMath>{step}</RichMath></p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="content-box answer-box">
                <span className="box-kicker">Jawaban Akhir</span>
                <p><RichMath>{problem.answer}</RichMath></p>
              </div>

              {problem.alternative && (
                <div className="content-box alternative-box">
                  <span className="box-kicker">Metode Alternatif</span>
                  <p><RichMath>{problem.alternative}</RichMath></p>
                </div>
              )}

              <div className="solution-overview-grid">
                <div className="content-box warning-box">
                  <span className="box-kicker">Kesalahan Umum</span>
                  <p><RichMath>{problem.mistake}</RichMath></p>
                </div>
                <div className="content-box insight-box">
                  <span className="box-kicker">Insight / Generalisasi</span>
                  <p><RichMath>{problem.insight}</RichMath></p>
                </div>
              </div>
            </div>
          </details>
        </article>

        <nav className="problem-detail-nav">
          {previous ? (
            <Link href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + previous.id.toLowerCase()}>
              <span>← Soal sebelumnya</span>
              <strong>{previous.id}</strong>
            </Link>
          ) : <span />}
          <Link className="all-problems-link" href="/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi">100 soal</Link>
          {next ? (
            <Link href={"/bank-soal/kuliah/aljabar-linear/basis-dan-dimensi/" + next.id.toLowerCase()}>
              <span>Soal berikutnya →</span>
              <strong>{next.id}</strong>
            </Link>
          ) : <span />}
        </nav>
      </div>
    </section>
  );
}
