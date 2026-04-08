"use client"

import type React from "react"

import { Warp } from "@paper-design/shaders-react"
import { content } from "@/content"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
  link: string
}

const icons = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#d94f3d]">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#d94f3d]">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#d94f3d]">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <path d="M2 10h20" />
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#d94f3d]">
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
];

const features: Feature[] = content.services.map((service, i) => ({
  title: service.title,
  description: service.description,
  icon: icons[i],
  link: service.link,
}));

export default function FeaturesCards() {
  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(350, 60%, 5%)", "hsl(352, 70%, 10%)", "hsl(348, 50%, 7%)", "hsl(354, 80%, 15%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "dots" as const,
        shapeScale: 0.12,
        colors: ["hsl(15, 60%, 5%)", "hsl(20, 70%, 10%)", "hsl(12, 50%, 7%)", "hsl(18, 80%, 15%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(5, 65%, 5%)", "hsl(8, 75%, 10%)", "hsl(2, 55%, 7%)", "hsl(10, 80%, 15%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "dots" as const,
        shapeScale: 0.09,
        colors: ["hsl(340, 60%, 5%)", "hsl(345, 70%, 10%)", "hsl(335, 50%, 7%)", "hsl(350, 80%, 15%)"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section id="services" className="py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <div className="text-[10px] font-mono tracking-[0.3em] text-[#d94f3d] uppercase mb-3">
            {"// SERVICES"}
          </div>
          <h2 className="font-heading text-4xl font-bold text-[#e8ddd0] chiseled mb-3">
            Qué Construyo
          </h2>
          <p className="text-sm font-mono text-[rgba(232,221,208,0.6)] max-w-xl">
            De interfaces a sistemas inteligentes — diseño, desarrollo y la arquitectura que los conecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div
                key={feature.title}
                className="relative h-72 rounded-xl overflow-hidden border border-[rgba(196,31,58,0.42)]"
              >
                {/* Dark carmine base layer */}
                <div className="absolute inset-0 bg-[linear-gradient(160deg,#0d0708_0%,#0a0607_52%,#060304_100%)]" />

                <div className="absolute inset-0 overflow-hidden">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape as any}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.5}
                    colors={shaderConfig.colors}
                  />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="shrink-0 mt-1">{feature.icon}</div>
                    <h3 className="font-heading text-xl font-semibold text-[#e8ddd0] chiseled">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="mt-auto">
                    <p className="text-sm font-mono text-[rgba(232,221,208,0.75)] leading-relaxed mb-5">
                      {feature.description}
                    </p>
                    <a
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#d94f3d] hover:text-[#d94f3d] transition-colors uppercase"
                    >
                      VER_DETALLES →
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}