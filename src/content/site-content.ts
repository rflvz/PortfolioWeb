export const AUTHOR_SOCIALS = {
  github: "https://github.com/rflvz",
  linkedin: "https://linkedin.com/in/rflvz",
  telegram: "https://t.me/rflvz",
  email: "mailto:rafaceitunoalvarez@gmail.com",
} as const;

export interface CollaboratorTestimonial {
  id: number;
  name: string;
  avatar: string;
  description: string;
  strengths?: string[];
}

export const TESTIMONIALS: CollaboratorTestimonial[] = [
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
  {
    id: 4,
    name: "Clemente Alvarez Boix",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80",
    description:
      "Trabajar con Rafa fue una experiencia que me cambio bastante la forma de enfocar el dia a dia. Monto un entorno de trabajo con herramientas de IA que al principio no sabia muy bien como aprovechar, pero que con su ayuda acabe integrando en mi flujo sin darme casi cuenta. Le veo muy solto tanto en la parte tecnica como a la hora de tomar decisiones de producto, y eso se agradece porque no tienes que estar adivinando hacia donde va el proyecto. Ademas es de esas personas con las que apetece trabajar, el ambiente que genera en el equipo es bueno de verdad.",
    strengths: [
      "IA aplicada",
      "Decision de producto",
      "Liderazgo tecnico",
      "Colaboracion de equipo",
    ],
  },
  {
    id: 5,
    name: "Marcos Garcia",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    description:
      "Trabajar con Rafa en ChessTogether ha sido una experiencia realmente positiva. Desde el primer momento demostro un nivel tecnico solido y una capacidad de resolucion de problemas que agilizo mucho el desarrollo del proyecto. Lo que mas destaco es su criterio a la hora de tomar decisiones de arquitectura: siempre buscando soluciones escalables y bien fundamentadas, sin perder de vista los plazos. Tambien tiene una gran habilidad para comunicar ideas tecnicas con claridad, lo que hizo que la colaboracion fuera fluida en todo momento. Es de esas personas con las que da gusto trabajar porque lleva el trabajo hecho, propone mejoras sin que nadie se las pida y tiene un ojo muy bueno para los detalles. Sin duda lo recomendaria para cualquier proyecto de desarrollo web o movil que requiera rigor tecnico y buena actitud.",
    strengths: [
      "Arquitectura escalable",
      "Resolucion de problemas",
      "Comunicacion tecnica",
      "Proactividad y detalle",
    ],
  },
];
