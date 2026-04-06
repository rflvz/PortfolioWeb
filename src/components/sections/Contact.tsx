import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const links = [
  {
    label: "GITHUB",
    value: "rflvz",
    href: "https://github.com/rflvz",
  },
  {
    label: "LINKEDIN",
    value: "rflvz",
    href: "https://linkedin.com/in/rflvz",
  },
  {
    label: "EMAIL",
    value: "rafaceitunoalvarez@gmail.com",
    href: "mailto:rafaceitunoalvarez@gmail.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28" style={{ background: "#0f0c07" }}>
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label="// SIGNAL"
          title="Open for Connection"
          subtitle="Interested in collaboration or have a project in mind? Send the signal."
        />

        <div className="iron-plate p-10 space-y-10">
          {/* Links table */}
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "EMAIL" ? "_blank" : undefined}
                rel={link.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between group py-3 border-b border-[rgba(58,42,26,0.3)] hover:border-[rgba(196,87,26,0.4)] transition-colors"
              >
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[rgba(232,221,208,0.6)] group-hover:text-[#c41e3a] transition-colors">
                  {link.label}
                </span>
                <span className="text-sm font-mono text-[rgba(232,221,208,0.75)] group-hover:text-[#e8ddd0] transition-colors">
                  {link.value}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2 flex justify-center">
            <Button
              href="mailto:rafaceitunoalvarez@gmail.com"
              variant="primary"
            >
              TRANSMIT_MESSAGE
            </Button>
          </div>
        </div>

        {/* Bottom label */}
        <p className="mt-8 text-center text-[10px] font-mono tracking-[0.2em] text-[rgba(232,221,208,0.5)] uppercase">
          Response within 48h &mdash; All signals received
        </p>
      </div>
    </section>
  );
}
