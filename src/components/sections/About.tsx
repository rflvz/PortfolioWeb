import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillCategories = [
  {
    name: "AI / ML",
    variant: "primary" as const,
    skills: [
      "Claude API",
      "MCP",
      "Agent Architecture",
      "Prompt Engineering",
      "LLM Integration",
    ],
  },
  {
    name: "Frontend",
    variant: "secondary" as const,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Electron"],
  },
  {
    name: "Backend",
    variant: "accent" as const,
    skills: ["Node.js", "Python", "Rust", "REST APIs", "PostgreSQL"],
  },
  {
    name: "Tools",
    variant: "default" as const,
    skills: ["Git", "Linear", "Google Stitch", "Vercel", "Docker"],
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Sobre mi"
          subtitle="Combino desarrollo de software con inteligencia artificial para crear soluciones que van mas alla de lo convencional."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-muted leading-relaxed">
              Soy un desarrollador enfocado en{" "}
              <span className="text-foreground font-medium">
                arquitectura IA
              </span>
              . Mi objetivo es integrar modelos de lenguaje y agentes
              inteligentes en cada fase del desarrollo — desde el diseno hasta
              el deployment.
            </p>
            <p className="text-muted leading-relaxed">
              Trabajo con{" "}
              <span className="text-primary">protocolos como MCP</span> para
              conectar herramientas de IA con flujos de trabajo reales, y diseno
              sistemas donde la inteligencia artificial no es solo un accesorio,
              sino la base de la arquitectura.
            </p>
            <p className="text-muted leading-relaxed">
              Creo en el desarrollo asistido por IA como el estandar del futuro.
              Cada proyecto que construyo es una prueba de ese principio.
            </p>
          </div>

          {/* Skills grid */}
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant={category.variant}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
