import type { MetadataRoute } from "next";

const BASE_URL = "https://rflvz.com";
const LAST_MODIFIED = new Date("2026-04-10T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
