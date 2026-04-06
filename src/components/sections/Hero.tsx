import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-sm text-primary">
            AI Architecture Developer
          </span>
        </div>

        {/* Name */}
        <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Rafa
          <span className="text-primary"> Alvarez</span>
        </h1>

        {/* Tagline */}
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted sm:text-xl">
          Diseño y construyo software usando{" "}
          <span className="text-foreground font-medium">
            inteligencia artificial
          </span>{" "}
          como pilar arquitectonico. Del concepto al codigo, con IA en cada
          capa.
        </p>

        {/* Code snippet decoration */}
        <div className="mx-auto mt-8 max-w-md rounded-lg border border-border bg-surface/80 p-4 font-mono text-sm text-left backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-3 w-3 rounded-full bg-accent/60" />
            <span className="h-3 w-3 rounded-full bg-secondary/60" />
            <span className="h-3 w-3 rounded-full bg-primary/60" />
          </div>
          <code className="text-muted">
            <span className="text-primary">const</span>{" "}
            <span className="text-secondary">architect</span>{" "}
            <span className="text-muted">=</span>{" "}
            <span className="text-accent">{"{"}</span>
            <br />
            {"  "}
            <span className="text-foreground">name</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-secondary">{'"Rafa Alvarez"'}</span>
            <span className="text-muted">,</span>
            <br />
            {"  "}
            <span className="text-foreground">focus</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-secondary">{'"AI Architecture"'}</span>
            <span className="text-muted">,</span>
            <br />
            {"  "}
            <span className="text-foreground">status</span>
            <span className="text-muted">:</span>{" "}
            <span className="text-secondary">{'"Building the future"'}</span>
            <br />
            <span className="text-accent">{"}"}</span>
            <span className="text-muted">;</span>
          </code>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="#projects" variant="primary">
            Ver Proyectos
          </Button>
          <Button href="#contact" variant="outline">
            Contacto
          </Button>
        </div>
      </div>
    </section>
  );
}
