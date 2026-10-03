import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { OlympiadHubPage } from "@/components/OlympiadHubPage";
import { olympiadHubMap, olympiadHubs } from "@/data/olympiad-hubs";
import { isPublicOlympiadHubSlug } from "@/lib/public-content";

export function generateStaticParams() {
  return olympiadHubs.filter((hub) => isPublicOlympiadHubSlug(hub.slug)).map((hub) => ({ track: hub.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track } = await params;
  const hub = olympiadHubMap[track];
  if (!hub || !isPublicOlympiadHubSlug(track)) return {};

  return createPageMetadata({
    title: hub.title.id,
    description: hub.subtitle.id,
    path: "/olimpiade/" + hub.slug,
    keywords: [hub.title.id, "olimpiade matematika", "soal olimpiade matematika"],
  });
}

export default async function OlympiadTrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = await params;
  const hub = olympiadHubMap[track];
  if (!hub || !isPublicOlympiadHubSlug(track)) notFound();

  return <OlympiadHubPage hub={hub} />;
}
