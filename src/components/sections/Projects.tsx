"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/ui/MotionContainer";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";
import { CardStack, CardStackControls, CardStackItem } from "@/components/ui/card-stack";
import { Badge, BadgeDot } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/spotlight-card";

type ProjectCmsItem = {
  uid: string;
  displayId: string;
  status: "LIVE" | "IN_DEVELOPMENT";
  title: string;
  summary: string;
  coverImage: string;
  tags: string[];
  externalUrl?: string;
  repositoryUrl?: string;
};

const cmsProjects: ProjectCmsItem[] = [
  {
    uid: "chesstogether",
    displayId: "01",
    title: "ChessTogether",
    summary:
      "Plataforma para organizar quedadas y torneos de ajedrez en la vida real. Sistema de Elo social y matchmaking para emparejar jugadores según nivel.",
    tags: ["TypeScript", "Next.js", "React", "Supabase"],
    coverImage: "/chesstogether.png",
    status: "LIVE",
    externalUrl: "https://chesstogether.app",
  },
  {
    uid: "codeorchestrator",
    displayId: "02",
    title: "CodeOrchestrator",
    summary:
      "Sistema de orquestación de agentes IA para generación y gestión de código, desde diseño hasta despliegue de funcionalidades completas.",
    tags: ["Python", "TypeScript", "LangGraph", "Claude_API", "MCP"],
    coverImage: "/CodeOrchestrator.png",
    status: "IN_DEVELOPMENT",
    repositoryUrl: "https://github.com/rflvz/codeOrchestrator",
  },
  {
    uid: "teamergy",
    displayId: "03",
    title: "Teamergy",
    summary:
      "Web de briefings para diseños NT con gestión completa del pipeline creativo, desde recepción de briefs hasta entrega de activos.",
    tags: ["TypeScript", "Next.js", "Python", "PostgreSQL"],
    coverImage: "/teamergy-design.png",
    status: "IN_DEVELOPMENT",
  },
  {
    uid: "stylecluster",
    displayId: "04",
    title: "StyleCluster",
    summary:
      "Modelo de clustering que analiza imágenes de referencia y genera grupos de estilos visuales con patrones formales y cromáticos.",
    tags: ["Python", "PyTorch", "CLIP", "scikit-learn"],
    coverImage: "/clustering.png",
    status: "IN_DEVELOPMENT",
  },
];

type ProjectStackCard = CardStackItem & { sourceUid: string };

const tagToVariant = (tag: string): "primary" | "info" | "success" | "warning" | "secondary" => {
  if (["TypeScript", "Next.js", "React"].includes(tag)) return "info";
  if (["Python", "PyTorch", "CLIP", "scikit-learn"].includes(tag)) return "success";
  if (["PostgreSQL", "Supabase"].includes(tag)) return "warning";
  if (["LangGraph", "MCP", "Claude_API"].includes(tag)) return "primary";
  return "secondary";
};

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [hasUnlockedScroll, setHasUnlockedScroll] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const descriptionPanelRef = useRef<HTMLDivElement | null>(null);
  const stackControlsRef = useRef<CardStackControls | null>(null);
  const lastWheelActionRef = useRef(0);

  const stackItems = useMemo<ProjectStackCard[]>(
    () =>
      cmsProjects.map((project) => ({
        id: project.uid,
        sourceUid: project.uid,
        title: project.title,
        description: project.summary,
        imageSrc: project.coverImage,
        href: project.externalUrl ?? project.repositoryUrl,
        ctaLabel: project.externalUrl ? "VER WEB" : project.repositoryUrl ? "VER REPOSITORIO" : "PRIVADO",
        tag: project.status,
      })),
    [],
  );

  const activeProject = cmsProjects[activeIndex] ?? cmsProjects[0];
  const shouldLockScroll = false;

  useEffect(() => {
    const updateDescriptionVisibility = () => {
      const panel = descriptionPanelRef.current;
      if (!panel) return;

      const rect = panel.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const enoughTopVisible = rect.top <= viewportHeight - 48;
      const enoughBottomInside = rect.bottom >= 96;

      setIsDescriptionVisible(enoughTopVisible && enoughBottomInside);
    };

    updateDescriptionVisibility();
    window.addEventListener("scroll", updateDescriptionVisibility, { passive: true });
    window.addEventListener("resize", updateDescriptionVisibility);

    return () => {
      window.removeEventListener("scroll", updateDescriptionVisibility);
      window.removeEventListener("resize", updateDescriptionVisibility);
    };
  }, []);

  useEffect(() => {
    if (!shouldLockScroll) return;

    const onWheel = (event: WheelEvent) => {
      const controls = stackControlsRef.current;
      if (!controls) return;

      // Keep the wheel interaction deterministic: one gesture changes one card.
      event.preventDefault();

      const now = Date.now();
      if (now - lastWheelActionRef.current < 320) return;
      if (Math.abs(event.deltaY) < 16) return;

      if (event.deltaY > 0) {
        controls.goNext();
      } else {
        controls.goPrev();
      }

      lastWheelActionRef.current = now;
      if (controls.isAtEnd()) {
        setHasUnlockedScroll(true);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [shouldLockScroll]);

  return (
    <section ref={sectionRef} id="projects" className="py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-6xl px-6">
        <StaggerContainer className="mb-16" delay={0.1}>
          <StaggerItem>
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#d94f3d] uppercase mb-3">
              {"// CODE"}
            </div>
            <h2 className="font-heading text-4xl font-bold text-[#e8ddd0] chiseled mb-3">
              Trabajo Seleccionado
            </h2>
            <p className="text-sm font-mono text-[rgba(232,221,208,0.6)] max-w-xl">
              Cada proyecto es una prueba de cómo la IA transforman el desarrollo de software desde el diseño hasta el deployment.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>

      <div className="w-full">
        <CardStack
          items={stackItems}
          initialIndex={0}
          maxVisible={5}
          cardWidth={720}
          cardHeight={360}
          overlap={0.72}
          spreadDeg={22}
          depthPx={120}
          activeLiftPx={16}
          activeScale={1.02}
          inactiveScale={0.93}
          loop={false}
          autoAdvance={false}
          intervalMs={3400}
          pauseOnHover
          className="w-full"
          onChangeIndex={(index) => setActiveIndex(index)}
          controlsRef={stackControlsRef}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <div ref={descriptionPanelRef}>
          <GlowCard
            customSize
            width="100%"
            glowColor="red"
            className="rounded-2xl border border-[rgba(196,31,58,0.42)] bg-[linear-gradient(160deg,#2a1618_0%,#1d1113_52%,#140c0f_100%)] [--backdrop:rgba(29,17,19,0.92)] [--backup-border:rgba(196,31,58,0.42)] p-8"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#d94f3d]">{activeProject.displayId}</span>
              <div className="h-px flex-1 bg-[rgba(196,31,58,0.38)]" />
              <Badge
                size="xs"
                variant={activeProject.status === "LIVE" ? "success" : "secondary"}
                appearance={activeProject.status === "LIVE" ? "light" : "outline"}
                className="font-mono tracking-[0.15em] uppercase"
              >
                {activeProject.status}
              </Badge>
            </div>

            <h3 className="mb-3 font-heading text-2xl font-bold text-[#e8ddd0] chiseled">{activeProject.title}</h3>
            <p className="text-sm font-mono text-[rgba(232,221,208,0.82)] leading-relaxed">{activeProject.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={tagToVariant(tag)}
                  appearance="light"
                  size="sm"
                  className="font-mono tracking-[0.05em] uppercase"
                >
                  <BadgeDot />
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              {activeProject.externalUrl ? (
                <LiquidMetalButton
                  label="VISITAR_SITIO →"
                  href={activeProject.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  width={175}
                />
              ) : (
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[rgba(232,221,208,0.55)]">PRIVADO</span>
              )}
              {activeProject.repositoryUrl ? (
                <LiquidMetalButton
                  label="VER_REPOSITORIO →"
                  href={activeProject.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  width={230}
                />
              ) : null}
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
