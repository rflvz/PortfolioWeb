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
      "La arquitectura que diseñó para nuestro pipeline de IA redujo la latencia un 60%. No solo entiende los LLMs — entiende cómo hacerlos funcionar en producción.",
  },
  {
    id: 2,
    name: "Founder",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    description:
      "Por fin, alguien que lo entiende. Agentes autónomos que realmente funcionan. El sistema que construyó es ahora la columna vertebral de toda nuestra línea de producto.",
  },
  {
    id: 3,
    name: "Head of Product",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    description:
      "La velocidad de ejecución fue increíble. De idea a sistema funcional en días, sin sacrificar calidad ni claridad.",
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
              testimonials={testimonials}
              className="mx-auto max-w-4xl"
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
