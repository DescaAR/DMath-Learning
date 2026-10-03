import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { LearningTrackPage } from "@/components/LearningTrackPage";
import { learningTrackPageMap, learningTrackPages } from "@/data/learning-track-pages";
import { isPublicLearningTrackSlug } from "@/lib/public-content";

export function generateStaticParams() {
  return learningTrackPages.filter((track) => isPublicLearningTrackSlug(track.slug)).map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track } = await params;
  const data = learningTrackPageMap[track];
  if (!data || !isPublicLearningTrackSlug(track)) return {};

  return createPageMetadata({
    title: data.title.id,
    description: data.intro.id,
    path: "/belajar/" + data.slug,
    keywords: [data.title.id, "jalur belajar matematika"],
  });
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = await params;
  const data = learningTrackPageMap[track];
  if (!data || !isPublicLearningTrackSlug(track)) notFound();

  return <LearningTrackPage track={data} />;
}
