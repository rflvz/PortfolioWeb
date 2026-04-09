"use client";

import { motion } from "framer-motion";
import { MotionContainer, StaggerContainer, StaggerItem } from "@/components/ui/MotionContainer";
import { Badge, BadgeDot } from "@/components/ui/Badge";

const skillGroupVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const bioVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const skillGroups = [
  {
    label: "Lenguajes",
    skills: ["TypeScript", "Python", "Rust"],
  },
  {
    label: "IA / Agentes",
    skills: ["LLM_Orchestration", "MCP", "Prompt_Engineering", "Agent_Architecture"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "FastAPI", "PostgreSQL"],
  },
];

const skillToVariant = (skill: string): "primary" | "info" | "success" | "warning" | "secondary" => {
  if (["TypeScript", "Next.js", "React", "Tailwind"].includes(skill)) return "info";
  if (["Python", "Rust", "Node.js", "FastAPI"].includes(skill)) return "success";
  if (["PostgreSQL", "MCP"].includes(skill)) return "warning";
  if (["LLM_Orchestration", "Prompt_Engineering", "Agent_Architecture"].includes(skill)) return "primary";
  return "secondary";
};

export function About() {
  return (
    <section id="about" className="py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-6xl px-6">
        <StaggerContainer className="mb-16" delay={0.1}>
          <StaggerItem>
            <MotionContainer animation="fadeInUp">
              <div className="text-[10px] font-mono tracking-[0.3em] text-[#c41e3a] uppercase mb-3">
                {"// STORY"}
              </div>
              <h2 className="font-heading text-4xl font-bold text-[#e8ddd0] chiseled mb-3">
                Programar con IA
              </h2>
              <p className="text-sm font-mono text-[rgba(232,221,208,0.6)] max-w-xl">
                No integro IA. Programa con ella. Cada línea, cada arquitectura, cada decisión pasa por un modelo de lenguaje.
              </p>
            </MotionContainer>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid gap-8 md:grid-cols-5 md:gap-16">
          {/* Image with torn-edge */}
          <div className="md:col-span-2">
            <MotionContainer animation="fadeInLeft" delay={0.2}>
              <div className="relative">
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
                    alt="Circuit board macro"
                    className="w-full object-cover opacity-60 transition-opacity duration-500"
                    style={{ minHeight: "240px" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#140c0f] via-transparent to-transparent" />
              </div>
            </MotionContainer>
          </div>

          {/* Bio */}
          <div className="md:col-span-3 space-y-5">
            {[
              "Desarrollé ChessRadar (chesstogether.app) en 10 días con un equipo de 2 devs + 1 team leader. 4 días los hice en solitario. El proyecto existía en mi cabeza y en papel. La IA帮我 a materializarlo en tiempo récord.",
              "CodeOrchestrator es mi laboratorio personal: un sistema donde agentes autónomos generan, implementan y despliegan código siguiendo specs en lenguaje natural. Agentes que piensas antes de actuar.",
              "Mi stack mental es Flow — no frameworks. TypeScript y Python para traducir lógica. Agentes MCP para conectar herramientas. El resultado: software donde la inteligencia no es un feature, es el foundation.",
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={bioVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="text-sm font-mono text-[rgba(232,221,208,0.75)] leading-loose"
              >
                {text}
              </motion.p>
            ))}

            <MotionContainer animation="fadeInUp" delay={0.1}>
              <div className="pt-4">
                <div className="scratched-divider max-w-xs" />
                <p className="mt-4 text-[10px] font-mono tracking-[0.2em] text-[#c41e3a] uppercase">
                  rflvz &mdash; rafa alvarez
                </p>
              </div>
            </MotionContainer>
          </div>

          {/* Skills */}
          <div className="md:col-span-3 space-y-8">
            <StaggerContainer>
              {skillGroups.map((group) => (
                <StaggerItem key={group.label}>
                  <motion.div
                    variants={skillGroupVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                  >
                    <p className="text-[9px] font-mono tracking-[0.25em] text-[#c41e3a] uppercase mb-3">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          variants={skillItemVariants}
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                          className="cursor-crosshair"
                        >
                          <Badge variant={skillToVariant(skill)} appearance="light" size="sm" className="font-mono tracking-[0.05em]">
                            <BadgeDot />
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
