import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  const normalized = path.startsWith("/") ? path : "/" + path;
  return siteConfig.url + normalized;
}

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  noIndex = false,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noIndex?: boolean;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = title.includes(siteConfig.name) ? title : title + " | " + siteConfig.name;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: siteConfig.name + " — " + siteConfig.tagline,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: absoluteUrl("/brand/logo-symbol.webp"),
    description: siteConfig.description,
    sameAs: [siteConfig.social.youtube],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function learningResourceJsonLd(material: {
  slug: string;
  title: string;
  summary: string;
  level: string;
  subject: string;
  objectives: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "@id": absoluteUrl("/materi/" + material.slug + "#learning-resource"),
    name: material.title,
    description: material.summary,
    url: absoluteUrl("/materi/" + material.slug),
    inLanguage: siteConfig.language,
    learningResourceType: "Digital textbook chapter",
    educationalLevel: material.level,
    about: material.subject,
    teaches: material.objectives,
    isPartOf: { "@id": absoluteUrl("/#website") },
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}
