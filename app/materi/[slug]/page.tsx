import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookSubjectHubPage } from "@/components/BookSubjectHubPage";
import { DeepMaterialPage } from "@/components/DeepMaterialPage";
import { StructuredData } from "@/components/StructuredData";
import { IntegralRiemannDarbouxPage } from "@/components/IntegralRiemannDarbouxPage";
import { bookSubjectMap, bookSubjects } from "@/data/book-curricula";
import { deepMaterialMap, deepMaterials } from "@/data/deep-materials";
import { breadcrumbJsonLd, createPageMetadata, learningResourceJsonLd } from "@/lib/seo";
import { isPublicAcademicLevel, isPublicBookSubjectSlug, isPublicMaterialSlug } from "@/lib/public-content";

export function generateStaticParams() {
  const slugs=new Set([
    ...deepMaterials.filter((material)=>isPublicMaterialSlug(material.slug) && isPublicAcademicLevel(material.level,material.track)).map((material)=>material.slug),
    ...bookSubjects.filter((subject)=>isPublicBookSubjectSlug(subject.slug) && isPublicAcademicLevel(subject.level,subject.level)).map((subject)=>subject.slug),
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

  if(subject && (!isPublicBookSubjectSlug(subject.slug) || !isPublicAcademicLevel(subject.level,subject.level))) return {};

  if(subject){
    const sectionCount=subject.chapters.reduce((sum,chapter)=>sum+chapter.sections.length,0);
    return createPageMetadata({
      title:subject.title,
      description:subject.subtitle+" Terdiri atas "+subject.chapters.length+" bab dan "+sectionCount+" submateri.",
      path:"/materi/"+subject.slug,
      keywords:[subject.title,"materi matematika",subject.level,"materi lengkap"],
    });
  }

  const material = deepMaterialMap[slug];
  if (!material || !isPublicMaterialSlug(material.slug) || !isPublicAcademicLevel(material.level,material.track)) return {};

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

  if(subject && (!isPublicBookSubjectSlug(subject.slug) || !isPublicAcademicLevel(subject.level,subject.level))) notFound();

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
  if (!material || !isPublicMaterialSlug(material.slug) || !isPublicAcademicLevel(material.level,material.track)) notFound();

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
