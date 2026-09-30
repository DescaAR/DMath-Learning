import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OlympiadHubPage } from "@/components/OlympiadHubPage";
import { olympiadHubMap, olympiadHubs } from "@/data/olympiad-hubs";

export function generateStaticParams() {
  return olympiadHubs.map((hub) => ({ track: hub.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track } = await params;
  const hub = olympiadHubMap[track];
  if (!hub) return {};

  return {
    title: hub.title.id,
    description: hub.subtitle.id,
    alternates: { canonical: "/olimpiade/" + hub.slug },
    openGraph: {
      title: hub.title.id + " | DMath Learning",
      description: hub.subtitle.id,
      type: "website",
    },
  };
}

export default async function OlympiadTrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = await params;
  const hub = olympiadHubMap[track];
  if (!hub) notFound();

  return <OlympiadHubPage hub={hub} />;
}
