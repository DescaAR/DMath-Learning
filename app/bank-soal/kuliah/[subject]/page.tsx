import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import {
  subjectProblemBankMap,
  subjectProblemBanks,
} from "@/data/subject-problem-banks";
import { SubjectProblemBank } from "@/components/SubjectProblemBank";

export function generateStaticParams() {
  return subjectProblemBanks.map((bank) => ({ subject: bank.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject } = await params;
  const bank = subjectProblemBankMap[subject];
  if (!bank) return {};

  return createPageMetadata({
    title: "Bank Soal " + bank.title,
    description:
      bank.problemCount +
      " soal " +
      bank.title +
      " dari seluruh bab, dilengkapi petunjuk dan solusi.",
    path: "/bank-soal/kuliah/" + bank.slug,
    keywords: ["bank soal " + bank.title.toLowerCase(), "soal matematika kuliah"],
  });
}

export default async function SubjectBankPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const bank = subjectProblemBankMap[subject];
  if (!bank) notFound();

  return (
    <div className="textbook-page ird-page">
      <section className="chapter-hero textbook-hero ird-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/">DMath Learning</Link>
            <span>/</span>
            <Link href="/bank-soal">Bank Soal</Link>
            <span>/</span>
            <strong>{bank.title}</strong>
          </div>

          <div className="chapter-label-row">
            <span className="eyebrow">{bank.title} · Bank Soal</span>
          </div>

          <h1>Bank Soal {bank.title}</h1>
          <p className="chapter-lead">
            Kumpulan soal lintas bab {bank.title} yang dapat dicari dan
            difilter berdasarkan bab serta submateri.
          </p>

          <div className="chapter-meta textbook-meta">
            <span>{bank.problemCount} soal</span>
            <span>{bank.chapterCount} bab</span>
            <span>Petunjuk + solusi</span>
            <span>Filter per topik</span>
          </div>

          <div className="actions">
            <a className="btn primary" href="#bank-subject">
              Jelajahi Soal
            </a>
            <Link className="btn secondary" href={"/materi/" + bank.slug}>
              Buka Materi
            </Link>
          </div>
        </div>
      </section>

      <section id="bank-subject" className="section textbook-section-shell">
        <div className="container">
          <article className="article deep-article textbook-article ird-article">
            <section className="book-section ird-practice-section">
              <div className="section-number">01</div>
              <span className="eyebrow">Bank Soal</span>
              <h2>Daftar Soal {bank.title}</h2>
              <SubjectProblemBank bank={bank} />
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
