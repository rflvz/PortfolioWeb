import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "CodeOrchester",
    description:
      "Orquestador de desarrollo impulsado por IA. Gestiona flujos de trabajo complejos integrando multiples agentes y herramientas de desarrollo en un solo ecosistema.",
    tech: ["Electron", "TypeScript", "Claude API", "MCP", "React"],
    github: "https://github.com/rflvz/CodeOrchester",
    status: "In Development",
  },
  {
    title: "PortfolioWeb",
    description:
      "Este mismo portfolio — disenado con Google Stitch y construido con Next.js. Un ejemplo de como la IA participa en cada fase, desde el diseno UI hasta la implementacion del codigo.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Stitch"],
    github: "https://github.com/rflvz/PortfolioWeb",
    status: "Live",
  },
  {
    title: "ChessRadar",
    description:
      "Plataforma de analisis de ajedrez que usa IA para detectar patrones, evaluar posiciones y ofrecer insights tacticos en tiempo real.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/rflvz/chessRadar",
    status: "In Development",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Proyectos"
          subtitle="Cada proyecto es una exploracion de como la IA puede transformar el desarrollo de software."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Live"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <Badge key={t} variant="default">
                    {t}
                  </Badge>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-light transition-colors"
              >
                Ver en GitHub
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
