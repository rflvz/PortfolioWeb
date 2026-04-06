export function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid rgba(58, 42, 26, 0.3)" }}
      className="bg-[#0a0705]"
    >
      {/* Marquee */}
      <div className="overflow-hidden py-3 border-b border-[rgba(58,42,26,0.2)]">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-[10px] font-mono tracking-[0.2em] text-[#c41e3a] px-8 whitespace-nowrap"
            >
              AI_ARCHITECTURE &nbsp;&bull;&nbsp; LLM_ORCHESTRATION &nbsp;&bull;&nbsp; AUTONOMOUS_AGENTS &nbsp;&bull;&nbsp; RFLVZ
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[10px] font-mono tracking-[0.15em] text-[rgba(232,221,208,0.7)] uppercase">
            &copy; {new Date().getFullYear()} Rafa Alvarez &mdash; Built with AI Architecture
          </p>
          <div className="flex items-center gap-8">
            {[
              { label: "GITHUB", href: "https://github.com/rflvz" },
              { label: "LINKEDIN", href: "https://linkedin.com/in/rflvz" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono tracking-[0.2em] text-[rgba(232,221,208,0.6)] hover:text-[rgba(232,221,208,0.9)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
