import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Rafa doesn&apos;t just write code — he architects systems. Working with him on AI infrastructure was eye-opening. He sees patterns where others see problems.",
    author: "Lucas M.",
    role: "Backend Engineer",
  },
  {
    quote:
      "Rare combination of deep technical skill and genuine vision. He shipped an AI-powered feature in weeks that we&apos;d been planning for quarters. The architecture he designed is still the backbone of our product.",
    author: "Elena R.",
    role: "Frontend Lead",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#0a0705]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="// VOICES"
          title="What Collaborators Say"
          subtitle="Feedback from people I&apos;ve worked with across projects and teams."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.author} className="p-10 relative overflow-hidden">
              {/* Quote mark */}
              <div
                className="absolute top-4 left-6 font-heading text-[80px] leading-none text-[#c41e3a] opacity-20 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <blockquote className="relative z-10 mb-6">
                <p
                  className="text-sm font-mono text-[rgba(232,221,208,0.7)] leading-loose italic"
                  dangerouslySetInnerHTML={{ __html: t.quote }}
                />
              </blockquote>

              {/* Scratched divider */}
              <div className="scratched-divider mb-5 max-w-[120px]" />

              {/* Author */}
              <div>
                <p className="font-heading text-sm font-semibold text-[#e8ddd0] chiseled">
                  {t.author}
                </p>
                <p className="text-[10px] font-mono tracking-[0.15em] text-[rgba(196,31,58,0.8)] uppercase mt-1">
                  {t.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
