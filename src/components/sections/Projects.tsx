"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StaggerContainer, StaggerItem } from "@/components/ui/MotionContainer";

const projects = [
  {
    id: "01",
    title: "ChessTogether",
    description:
      "Plataforma multiplayer para ajedrez en tiempo real. 10 días de desarrollo con un equipo de 2 devs + 1 team leader — 4 días en solitario. Construida con Supabase, Next.js y React.",
    tech: ["TypeScript", "Next.js", "React", "Supabase"],
    image: "/chesstogether.png",
    status: "LIVE",
    link: "https://chesstogether.app",
    repo: "#",
  },
  {
    id: "02",
    title: "CodeOrchestrator",
    description:
      "Sistema de orquestación de agentes IA para generación y gestión de código. Agentes autónomos que diseñan, implementan y despliegan funcionalidades completas siguiendo specs en lenguaje natural.",
    tech: ["Python", "TypeScript", "LangGraph", "Claude_API", "MCP"],
    image: "/CodeOrchestrator.png",
    status: "IN_DEVELOPMENT",
    link: "#",
    repo: "https://github.com/rflvz/codeOrchestrator",
  },
  {
    id: "03",
    title: "Teamergy",
    description:
      "Web de briefings para diseños NT (New Talent). Gestión completa del pipeline creativo — desde la recepción de briefs hasta la entrega de activos. Información protegida.",
    tech: ["TypeScript", "Next.js", "Python", "PostgreSQL"],
    image: "/teamergy-design.png",
    status: "IN_DEVELOPMENT",
    link: "#",
    repo: "#",
  },
  {
    id: "04",
    title: "StyleCluster",
    description:
      "Modelo de clustering que analiza imágenes de referencia y genera grupos de estilos visuales basados en patrones formales, cromáticos y compositivos.",
    tech: ["Python", "PyTorch", "CLIP", "scikit-learn"],
    image: "/clustering.png",
    status: "IN_DEVELOPMENT",
    link: "#",
    repo: "#",
  },
];

function ImagePanel({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateY: isLeft ? 30 : -20 }
          : {}
      }
      whileHover={{ rotateY: 0, rotateX: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 26 }}
      style={{
        perspective: 800,
        transformStyle: "preserve-3d",
        rotateX: 8,
      }}
      className="group relative"
    >
      {/* 3D shadow projection */}
      <div
        className="absolute inset-0 rounded-2xl bg-[#c41e3a]/20"
        style={{
          transform: `translateZ(-20px) translateX(${isLeft ? -12 : 12}px) translateY(8px)`,
          filter: "blur(8px)",
          zIndex: -1,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl border border-[rgba(196,30,58,0.3)]"
        style={{
          transform: `translateZ(-10px) translateX(${isLeft ? -6 : 6}px) translateY(4px)`,
          zIndex: -1,
        }}
      />
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705]/50 via-transparent to-transparent rounded-2xl pointer-events-none" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c41e3a] via-[#d94f3d] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

function TextPanel({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#1c1510] p-8 rounded-2xl border border-[rgba(58,42,26,0.4)]"
    >
      <div className="flex items-center gap-4 mb-3">
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#c41e3a]">
          {project.id}
        </span>
        <div className="h-px flex-1 bg-[rgba(58,42,26,0.3)]" />
        <span
          className={`text-[9px] font-mono tracking-[0.15em] uppercase ${
            project.status === "LIVE" ? "text-[#d94f3d]" : "text-[rgba(232,221,208,0.4)]"
          }`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="font-heading text-2xl font-bold text-[#e8ddd0] chiseled mb-3">
        {project.title}
      </h3>

      <p className="text-sm font-mono text-[rgba(232,221,208,0.7)] leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono tracking-[0.05em] text-[rgba(232,221,208,0.6)] border border-[rgba(58,42,26,0.3)] px-2.5 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-6 mt-6">
        {project.link !== "#" ? (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 6 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[10px] font-mono tracking-[0.2em] uppercase text-[rgba(232,221,208,0.5)] hover:text-[#c41e3a] transition-colors"
          >
            VISIT_SITE →
          </motion.a>
        ) : (
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[rgba(232,221,208,0.25)]">
            PRIVATE
          </span>
        )}
        {project.repo !== "#" && (
          <motion.a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 6 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[10px] font-mono tracking-[0.2em] uppercase text-[rgba(232,221,208,0.5)] hover:text-[#c41e3a] transition-colors"
          >
            VIEW_REPOSITORY →
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#0a0705]">
      <div className="mx-auto max-w-6xl px-6">
        <StaggerContainer className="mb-16" delay={0.1}>
          <StaggerItem>
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#c41e3a] uppercase mb-3">
              // CODE
            </div>
            <h2 className="font-heading text-4xl font-bold text-[#e8ddd0] chiseled mb-3">
              Selected Work
            </h2>
            <p className="text-sm font-mono text-[rgba(232,221,208,0.6)] max-w-xl">
              Cada proyecto es una prueba de cómo la IA transforman el desarrollo de software desde el diseño hasta el deployment.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className={isEven ? "order-1" : "order-2 md:order-2"}>
                  <TextPanel project={project} index={index} />
                </div>
                <div className={isEven ? "order-2" : "order-1 md:order-1"}>
                  <ImagePanel project={project} index={index} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
