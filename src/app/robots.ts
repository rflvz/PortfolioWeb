import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rafalvz.dev/sitemap.xml",
    host: "https://rafalvz.dev",
  };
}
