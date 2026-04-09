import type { Metadata } from "next";
import { Cinzel, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DynamicEtherealShadow } from "@/components/layout/DynamicEtherealShadow";
import {
  buildPersonSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildServiceSchema,
  SERVICES_DATA,
} from "@/lib/seo/schemas";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rflvz.com"),
  title: {
    default: "Rafa Alvarez | AI Architecture Developer",
    template: "%s | Rafa Alvarez",
  },
  description:
    "Portfolio de Rafa Alvarez — Desarrollador especializado en arquitectura IA. Construyo sistemas con LLMs, agentes autónomos y MCP. Spec-driven development, issue-driven development.",
  keywords: [
    "AI Architecture Developer",
    "LLM Orchestration",
    "Agentes autónomos",
    "MCP protocol",
    "Spec-driven development",
    "Issue-driven development",
    "Next.js",
    "TypeScript",
    "Rafa Alvarez",
    "Rafael Aceituno",
    "portfolio desarrollador IA",
    "arquitectura inteligente",
  ],
  authors: [{ name: "Rafa Alvarez", url: "https://rflvz.com" }],
  creator: "Rafa Alvarez",
  category: "technology",
  alternates: {
    canonical: "https://rflvz.com",
  },
  openGraph: {
    title: "Rafa Alvarez | AI Architecture Developer",
    description:
      "Desarrollador especializado en arquitectura IA. Construyo sistemas con LLMs, agentes autónomos y MCP donde la inteligencia es el foundation, no un feature.",
    type: "website",
    url: "https://rflvz.com",
    siteName: "Rafa Alvarez Portfolio",
    locale: "es_ES",
    images: [
      {
        url: "/about-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Rafa Alvarez — AI Architecture Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafa Alvarez | AI Architecture Developer",
    description:
      "Desarrollador especializado en arquitectura IA. LLMs, agentes autónomos y MCP.",
    creator: "@rflvz",
    images: ["/about-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const person = buildPersonSchema();
  const organization = buildOrganizationSchema();
  const webSite = buildWebSiteSchema();
  const services = SERVICES_DATA.map(buildServiceSchema);

  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [person, organization, webSite, ...services],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <DynamicEtherealShadow />
        <div className="relative z-10">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
