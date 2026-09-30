import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LearningTrackPage } from "@/components/LearningTrackPage";
import { learningTrackPageMap, learningTrackPages } from "@/data/learning-track-pages";

export function generateStaticParams() {
  return learningTrackPages.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track } = await params;
  const data = learningTrackPageMap[track];
  if (!data) return {};

  return {
    title: data.title.id,
    description: data.intro.id,
    alternates: { canonical: "/belajar/" + data.slug },
    openGraph: {
      title: data.title.id + " | DMath Learning",
      description: data.intro.id,
      type: "website",
    },
  };
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = await params;
  const data = learningTrackPageMap[track];
  if (!data) notFound();

  return <LearningTrackPage track={data} />;
}
