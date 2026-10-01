import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F3F7FB",
    theme_color: "#0B2D6B",
    lang: siteConfig.language,
    icons: [
      {
        src: "/brand/logo-symbol.webp",
        sizes: "any",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
