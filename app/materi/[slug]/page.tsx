import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeepMaterialPage } from "@/components/DeepMaterialPage";
import { IntegralRiemannDarbouxPage } from "@/components/IntegralRiemannDarbouxPage";
import { ComplexAnalysisPage } from "@/components/ComplexAnalysisPage";
import { deepMaterialMap, deepMaterials } from "@/data/deep-materials";

export function generateStaticParams() {
  return deepMaterials.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const material = deepMaterialMap[slug];
  if (!material) return {};

  return {
    title: material.title,
    description: material.summary,
    alternates: { canonical: "/materi/" + material.slug },
    openGraph: {
      title: material.title + " | DMath Learning",
      description: material.summary,
      type: "article",
    },
  };
}

export default async function MaterialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = deepMaterialMap[slug];

  if (!material) notFound();

  if (material.slug === "integral-riemann") return <IntegralRiemannDarbouxPage material={material} />;
  if (material.slug === "analisis-kompleks") return <ComplexAnalysisPage material={material} />;

  return <DeepMaterialPage material={material} />;
}
