import type { Metadata } from "next";
import { Cinzel, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  title: "Rafa Alvarez | AI Architecture Developer",
  description:
    "Portfolio de Rafa Alvarez — Desarrollador especializado en arquitectura IA, construyendo el futuro con inteligencia artificial.",
  openGraph: {
    title: "Rafa Alvarez | AI Architecture Developer",
    description:
      "Desarrollador especializado en arquitectura IA, construyendo el futuro con inteligencia artificial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
