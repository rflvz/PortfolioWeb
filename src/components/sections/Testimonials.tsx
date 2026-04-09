"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial";
import { MotionContainer, StaggerContainer, StaggerItem } from "@/components/ui/MotionContainer";

const testimonials = [
  {
    id: 1,
    name: "CTO",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    description:
      "The architecture he designed for our AI pipeline reduced latency by 60%. He doesn&apos;t just understand LLMs — he understands how to make them work in production.",
  },
  {
    id: 2,
    name: "Founder",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    description:
      "Finally, someone who gets it. Autonomous agents that actually work. The system he built is the backbone of our entire product line now.",
  },
  {
    id: 3,
    name: "Head of Product",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    description:
      "Execution speed was unreal. From idea to working system in days, without sacrificing quality or clarity.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-6xl px-6">
        <StaggerContainer className="mb-16" delay={0.1}>
          <StaggerItem>
            <MotionContainer animation="fadeInUp">
              <div className="text-[10px] font-mono tracking-[0.3em] text-[#d94f3d] uppercase mb-3">
                {"// VOICES"}
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
          <StaggerItem>
            <TestimonialCarousel
              testimonials={testimonials}
              className="mx-auto max-w-4xl"
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
