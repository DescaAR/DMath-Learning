import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookSubjectHubPage } from "@/components/BookSubjectHubPage";
import { DeepMaterialPage } from "@/components/DeepMaterialPage";
import { StructuredData } from "@/components/StructuredData";
import { IntegralRiemannDarbouxPage } from "@/components/IntegralRiemannDarbouxPage";
import { bookSubjectMap, bookSubjects } from "@/data/book-curricula";
import { deepMaterialMap, deepMaterials } from "@/data/deep-materials";
import { breadcrumbJsonLd, createPageMetadata, learningResourceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  const slugs=new Set([
    ...deepMaterials.map((material)=>material.slug),
    ...bookSubjects.map((subject)=>subject.slug),
  ]);
  return Array.from(slugs).map((slug)=>({slug}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subject=bookSubjectMap[slug];

  if(subject){
    const sectionCount=subject.chapters.reduce((sum,chapter)=>sum+chapter.sections.length,0);
    return createPageMetadata({
      title:subject.title+" — Buku Digital",
      description:subject.subtitle+" Tersusun dalam "+subject.chapters.length+" unit belajar dan "+sectionCount+" submateri dengan teori, pembuktian, contoh, latihan, dan navigasi berurutan.",
      path:"/materi/"+subject.slug,
      keywords:[subject.title,"buku digital matematika",subject.level,"materi lengkap"],
    });
  }

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
  const subject=bookSubjectMap[slug];

  if(subject){
    return(
      <>
        <StructuredData
          data={breadcrumbJsonLd([
            {name:"Beranda",path:"/"},
            {name:"Materi",path:"/materi"},
            {name:subject.title,path:"/materi/"+subject.slug},
          ])}
        />
        <BookSubjectHubPage subject={subject}/>
      </>
    );
  }

  const material = deepMaterialMap[slug];
  if (!material) notFound();

  const content =
    material.slug === "integral-riemann" ? (
      <IntegralRiemannDarbouxPage material={material} />
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
