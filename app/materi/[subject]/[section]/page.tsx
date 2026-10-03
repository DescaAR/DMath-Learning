import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookSectionPage } from "@/components/BookSectionPage";
import { StructuredData } from "@/components/StructuredData";
import { allBookSections, getBookSection } from "@/data/book-curricula";
import { getBookSectionContent } from "@/data/book-section-content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { isPublicAcademicLevel, isPublicBookSubjectSlug } from "@/lib/public-content";

export function generateStaticParams(){
  return allBookSections
    .filter(({subject})=>isPublicBookSubjectSlug(subject.slug) && isPublicAcademicLevel(subject.level,subject.level))
    .map(({subject,section})=>({
      subject:subject.slug,
      section:section.slug,
    }));
}

export async function generateMetadata({
  params,
}:{
  params:Promise<{subject:string;section:string}>;
}):Promise<Metadata>{
  const {subject:subjectSlug,section:sectionSlug}=await params;
  const result=getBookSection(subjectSlug,sectionSlug);
  if(!result || !isPublicBookSubjectSlug(result.subject.slug) || !isPublicAcademicLevel(result.subject.level,result.subject.level))return {};

  const {subject,chapter,section}=result;
  return createPageMetadata({
    title:section.title+" — "+subject.title,
    description:section.summary,
    path:"/materi/"+subject.slug+"/"+section.slug,
    type:"article",
    keywords:[subject.title,section.title,chapter.title,...section.keyIdeas],
  });
}

export default async function BookSectionRoute({
  params,
}:{
  params:Promise<{subject:string;section:string}>;
}){
  const {subject:subjectSlug,section:sectionSlug}=await params;
  const result=getBookSection(subjectSlug,sectionSlug);
  if(!result || !isPublicBookSubjectSlug(result.subject.slug) || !isPublicAcademicLevel(result.subject.level,result.subject.level))notFound();

  const {subject,chapter,section}=result;
  const content=getBookSectionContent(section.slug);
  if(!content)notFound();

  const flat=subject.chapters.flatMap((item)=>item.sections);
  const index=flat.findIndex((item)=>item.slug===section.slug);
  const previous=index>0?flat[index-1]:null;
  const next=index>=0&&index<flat.length-1?flat[index+1]:null;

  return(
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          {name:"Beranda",path:"/"},
          {name:"Materi",path:"/materi"},
          {name:subject.title,path:"/materi/"+subject.slug},
          {name:section.title,path:"/materi/"+subject.slug+"/"+section.slug},
        ])}
      />
      <BookSectionPage
        subject={subject}
        chapter={chapter}
        section={section}
        content={content}
        previous={previous}
        next={next}
      />
    </>
  );
}
