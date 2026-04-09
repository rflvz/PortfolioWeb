"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial";
import { MotionContainer, StaggerContainer, StaggerItem } from "@/components/ui/MotionContainer";
import { content } from "@/content";

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
                Lo Que Dicen los Colaboradores
              </h2>
              <p className="text-sm font-mono text-[rgba(232,221,208,0.6)] max-w-xl">
                Feedback de personas con quienes he trabajado en proyectos y equipos.
              </p>
            </MotionContainer>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer staggerDelay={0.12}>
          <StaggerItem>
            <TestimonialCarousel
              testimonials={content.testimonials}
              className="mx-auto max-w-4xl"
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
