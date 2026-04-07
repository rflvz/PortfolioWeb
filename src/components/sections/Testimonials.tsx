"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { MotionContainer, StaggerContainer, StaggerItem } from "@/components/ui/MotionContainer";

const testimonials = [
  {
    quote:
      "The architecture he designed for our AI pipeline reduced latency by 60%. He doesn&apos;t just understand LLMs — he understands how to make them work in production.",
    author: "CTO",
    role: "//NEURAL_SYNAPSE",
  },
  {
    quote:
      "Finally, someone who gets it. Autonomous agents that actually work. The system he built is the backbone of our entire product line now.",
    author: "FOUNDER",
    role: "//VOID_LOGIC",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-6xl px-6">
        <StaggerContainer className="mb-16" delay={0.1}>
          <StaggerItem>
            <MotionContainer animation="fadeInUp">
              <div className="text-[10px] font-mono tracking-[0.3em] text-[#c41e3a] uppercase mb-3">
                // VOICES
              </div>
              <h2 className="font-heading text-4xl font-bold text-[#e8ddd0] chiseled mb-3">
                What Collaborators Say
              </h2>
              <p className="text-sm font-mono text-[rgba(232,221,208,0.6)] max-w-xl">
                Feedback from people I&apos;ve worked with across projects and teams.
              </p>
            </MotionContainer>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer staggerDelay={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="p-10 relative overflow-hidden">
                  <div
                    className="absolute top-4 left-6 font-heading text-[80px] leading-none text-[#c41e3a] opacity-20 select-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>

                  <blockquote className="relative z-10 mb-6">
                    <p
                      className="text-sm font-mono text-[rgba(232,221,208,0.7)] leading-loose italic"
                      dangerouslySetInnerHTML={{ __html: t.quote }}
                    />
                  </blockquote>

                  <div className="scratched-divider mb-5 max-w-[120px]" />

                  <div>
                    <p className="font-heading text-sm font-semibold text-[#e8ddd0] chiseled">
                      {t.author}
                    </p>
                    <p className="text-[10px] font-mono tracking-[0.15em] text-[rgba(196,31,58,0.8)] uppercase mt-1">
                      {t.role}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
