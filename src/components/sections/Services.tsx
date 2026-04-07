"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { MotionContainer, StaggerContainer, StaggerItem } from "@/components/ui/MotionContainer";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#c41e3a]">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Full-stack applications built with modern frameworks. Next.js, React, and TypeScript for interfaces that perform as good as they look.",
    link: "#projects",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#c41e3a]">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "AI Systems",
    description:
      "LLM-powered features, agent architectures, and MCP integrations that bring intelligence to every layer of your stack.",
    link: "#about",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#c41e3a]">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    title: "Products",
    description:
      "End-to-end product development from concept to launch. Electron apps, dashboards, and SaaS platforms with AI at their core.",
    link: "#projects",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#c41e3a]">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Architecture",
    description:
      "System design and technical consulting. API architectures, database schemas, and infrastructure that scales with your ambitions.",
    link: "#contact",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-6xl px-6">
        <StaggerContainer className="mb-16" delay={0.1}>
          <StaggerItem>
            <MotionContainer animation="fadeInUp">
              <div className="text-[10px] font-mono tracking-[0.3em] text-[#c41e3a] uppercase mb-3">
                // SERVICES
              </div>
              <h2 className="font-heading text-4xl font-bold text-[#e8ddd0] chiseled mb-3">
                What I Build
              </h2>
              <p className="text-sm font-mono text-[rgba(232,221,208,0.6)] max-w-xl">
                From interfaces to intelligent systems — design, development, and the architecture that connects them.
              </p>
            </MotionContainer>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ x: 5, borderColor: "rgba(196,87,26,0.5)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Card className="p-8 group relative">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="shrink-0 mt-1">{service.icon}</div>
                    <h3 className="font-heading text-lg font-semibold text-[#e8ddd0] chiseled">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm font-mono text-[rgba(232,221,208,0.65)] leading-loose mb-5">
                    {service.description}
                  </p>

                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[rgba(232,221,208,0.4)] hover:text-[#d94f3d] transition-colors"
                  >
                    VIEW_DETAILS
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(58,42,26,0.3)]" />
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
