export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-heading text-sm text-muted">
            &copy; {new Date().getFullYear()} Rafa Alvarez. Built with AI
            Architecture.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rflvz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rflvz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
