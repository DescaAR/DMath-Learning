import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeepMaterialPage } from "@/components/DeepMaterialPage";
import { StructuredData } from "@/components/StructuredData";
import { IntegralRiemannDarbouxPage } from "@/components/IntegralRiemannDarbouxPage";
import { ComplexAnalysisPage } from "@/components/ComplexAnalysisPage";
import { deepMaterialMap, deepMaterials } from "@/data/deep-materials";
import { breadcrumbJsonLd, createPageMetadata, learningResourceJsonLd } from "@/lib/seo";

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

  return createPageMetadata({
    title: material.title,
    description: material.summary,
    path: "/materi/" + material.slug,
    type: "article",
    keywords: [material.title, material.subject, material.level + " matematika"],
  });
}

export default async function MaterialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = deepMaterialMap[slug];

  if (!material) notFound();

  const content =
    material.slug === "integral-riemann" ? (
      <IntegralRiemannDarbouxPage material={material} />
    ) : material.slug === "analisis-kompleks" ? (
      <ComplexAnalysisPage material={material} />
    ) : (
      <DeepMaterialPage material={material} />
    );

  return (
    <>
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "Beranda", path: "/" },
            { name: "Materi", path: "/materi" },
            { name: material.title, path: "/materi/" + material.slug },
          ]),
          learningResourceJsonLd(material),
        ]}
      />
      {content}
    </>
  );
}
