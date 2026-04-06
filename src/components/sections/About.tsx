import { SectionHeading } from "@/components/ui/SectionHeading";

const skillGroups = [
  {
    label: "AI / ML",
    skills: ["Claude_API", "MCP", "Agent_Architecture", "Prompt_Engineering", "LLM_Orchestration"],
  },
  {
    label: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind_CSS", "Electron"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Python", "Rust", "REST_APIs", "PostgreSQL"],
  },
  {
    label: "Toolchain",
    skills: ["Git", "Linear", "Google_Stitch", "Vercel", "Docker"],
  },
];

export function About() {
  return (
    <section id="about" className="py-28" style={{ background: "#0f0c07" }}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// STORY"
          title="Architect of the Ghost"
          subtitle="I build software where AI is not an afterthought. From the architecture to the interface, intelligence is the core."
        />

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-sm font-mono text-[rgba(232,221,208,0.75)] leading-loose">
              Desarrollador enfocado en{" "}
              <span className="text-[#e8ddd0]">arquitectura IA</span>. Integro
              modelos de lenguaje y agentes inteligentes en cada fase del
              desarrollo — desde el diseño hasta el deployment.
            </p>
            <p className="text-sm font-mono text-[rgba(232,221,208,0.75)] leading-loose">
              Trabajo con{" "}
              <span className="text-[#d94f3d]">protocolos MCP</span> para
              conectar herramientas de IA con flujos de trabajo reales, donde
              la inteligencia artificial no es un accesorio, sino la base.
            </p>
            <p className="text-sm font-mono text-[rgba(232,221,208,0.75)] leading-loose">
              El desarrollo asistido por IA es el estándar del futuro. Cada
              proyecto es una prueba de ese principio.
            </p>

            <div className="pt-4">
              <div className="scratched-divider max-w-xs" />
              <p className="mt-4 text-[10px] font-mono tracking-[0.2em] text-[#c41e3a] uppercase">
                rflvz &mdash; rafa alvarez
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-3 space-y-8">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[9px] font-mono tracking-[0.25em] text-[#c41e3a] uppercase mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono tracking-[0.05em] text-[rgba(232,221,208,0.7)] border border-[rgba(58,42,26,0.4)] px-3 py-1.5 hover:text-[#e8ddd0] hover:border-[rgba(196,87,26,0.4)] transition-colors cursor-crosshair"
                    >
                      {skill}
                    </span>
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
