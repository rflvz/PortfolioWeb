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
        {/* Grain overlay interactive effect */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const grain = document.createElement('div');
                grain.style.cssText = 'position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E");background-size:200px 200px;opacity:0;pointer-events:none;z-index:9999;transition:opacity 0.3s ease,filter 0.3s ease;';
                document.body.appendChild(grain);

                let mouseX = 0, mouseY = 0;
                let currentX = 0, currentY = 0;

                document.addEventListener('mousemove', function(e) {
                  mouseX = e.clientX / window.innerWidth;
                  mouseY = e.clientY / window.innerHeight;
                });

                function animate() {
                  currentX += (mouseX - currentX) * 0.05;
                  currentY += (mouseY - currentY) * 0.05;

                  const distX = Math.abs(currentX - 0.5);
                  const distY = Math.abs(currentY - 0.5);
                  const baseOpacity = 0.06;
                  const maxOpacity = 0.12;
                  const opacity = baseOpacity + (distX + distY) * maxOpacity;

                  grain.style.opacity = Math.min(opacity, 0.15).toString();
                  grain.style.filter = 'brightness(' + (1 + distY * 0.3) + ')';

                  requestAnimationFrame(animate);
                }
                animate();

                document.addEventListener('mouseleave', function() {
                  grain.style.opacity = '0.04';
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
