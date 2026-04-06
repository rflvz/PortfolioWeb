import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(139,26,26,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        {/* Stencil label */}
        <p className="mb-8 text-[10px] font-mono tracking-[0.3em] text-[#8b1a1a] uppercase">
          [ AI_ARCHITECTURE_DEVELOPER ]
        </p>

        {/* Main headline */}
        <h1 className="font-heading text-6xl font-bold tracking-[-0.02em] text-[#e8ddd0] chiseled sm:text-8xl lg:text-[7rem] leading-none">
          RAFA
          <br />
          <span className="text-[rgba(232,221,208,0.35)]">ALVAREZ</span>
        </h1>

        {/* Divider */}
        <div className="scratched-divider my-10 max-w-sm mx-auto" />

        {/* Tagline */}
        <p className="mx-auto max-w-lg text-sm font-mono text-[rgba(232,221,208,0.5)] leading-loose tracking-wide">
          Architect of the ghost in the machine.<br />
          Design and deploy software where{" "}
          <span className="text-[#c4571a]">intelligence is the foundation</span>,
          not a feature.
        </p>

        {/* Tech tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            "AUTONOMOUS_AGENTS",
            "LLM_ORCHESTRATION",
            "MCP_PROTOCOL",
            "NEXT.JS",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono tracking-[0.15em] text-[rgba(232,221,208,0.25)] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="#projects" variant="primary">
            SEE_MY_WORK
          </Button>
          <Button href="#contact" variant="secondary">
            SIGNAL_FOR_ACCESS
          </Button>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2">
          <span className="text-[9px] font-mono tracking-[0.25em] text-[rgba(232,221,208,0.2)] uppercase">
            scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-[rgba(139,26,26,0.4)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
