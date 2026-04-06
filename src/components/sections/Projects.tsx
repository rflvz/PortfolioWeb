import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    id: "01",
    title: "CodeOrchester",
    description:
      "Orquestador de desarrollo impulsado por IA. Gestiona flujos de trabajo complejos integrando múltiples agentes y herramientas en un solo ecosistema.",
    tech: ["Electron", "TypeScript", "Claude_API", "MCP", "React"],
    github: "https://github.com/rflvz/CodeOrchester",
    status: "IN_DEVELOPMENT",
  },
  {
    id: "02",
    title: "PortfolioWeb",
    description:
      "Este portfolio — diseñado con Google Stitch y construido con Next.js. Demostración de IA participando en cada fase, desde el diseño UI hasta el código.",
    tech: ["Next.js", "TypeScript", "Tailwind_CSS", "Google_Stitch"],
    github: "https://github.com/rflvz/PortfolioWeb",
    status: "LIVE",
  },
  {
    id: "03",
    title: "ChessRadar",
    description:
      "Plataforma de análisis de ajedrez que usa IA para detectar patrones, evaluar posiciones y ofrecer insights tácticos en tiempo real.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/rflvz/chessRadar",
    status: "IN_DEVELOPMENT",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#0a0705]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// CODE"
          title="Selected Work"
          subtitle="Each project is an exploration of how AI can transform software development from the ground up."
        />

        <div className="grid gap-px border border-[#3a2a1a]">
          {projects.map((project, index) => (
            <Card key={project.title} className="p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  {/* Header row */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#c41e3a]">
                      {project.id}
                    </span>
                    <div className="h-px flex-1 bg-[rgba(58,42,26,0.4)]" />
                    <span
                      className={`text-[9px] font-mono tracking-[0.2em] uppercase ${
                        project.status === "LIVE"
                          ? "text-[#d94f3d]"
                          : "text-[rgba(232,221,208,0.65)]"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-[#e8ddd0] chiseled mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm font-mono text-[rgba(232,221,208,0.7)] leading-loose mb-5">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono tracking-[0.05em] text-[rgba(232,221,208,0.65)] border border-[rgba(58,42,26,0.3)] px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="md:ml-8 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[rgba(232,221,208,0.7)] hover:text-[#d94f3d] border border-[rgba(58,42,26,0.3)] hover:border-[rgba(196,87,26,0.4)] px-4 py-3 transition-all"
                  >
                    VIEW_SOURCE
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Bottom border for all but last */}
              {index < projects.length - 1 && (
                <div className="scratched-divider mt-2 -mx-8 -mb-8" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
