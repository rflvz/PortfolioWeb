import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rflvz.com/sitemap.xml",
    host: "https://rflvz.com",
  };
}
