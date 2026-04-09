"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LiquidMetalButton } from "@/components/ui/LiquidMetalButton";

const linkVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { href: "#about", label: "SOBRE_MÍ" },
  { href: "#services", label: "SERVICIOS" },
  { href: "#projects", label: "PROYECTOS" },
  { href: "#testimonials", label: "TESTIMONIOS" },
  { href: "#contact", label: "CONTACTO" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "linear-gradient(160deg, rgba(42,22,24,0.88) 0%, rgba(29,17,19,0.85) 52%, rgba(20,12,15,0.86) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(196, 31, 58, 0.32)",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-sm font-semibold tracking-[0.3em] text-[#e8ddd0] hover:text-[#d94f3d] transition-colors uppercase chiseled"
        >
          RAFA_ALVAREZ
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={link.href}
                  className="text-[10px] font-mono tracking-[0.25em] text-[rgba(232,221,208,0.75)] hover:text-[#e8ddd0] transition-colors"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <LiquidMetalButton label="INICIAR_CONTACTO" href="#contact" width={185} />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[rgba(232,221,208,0.6)] p-2 hover:text-[#e8ddd0] transition-colors cursor-crosshair"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            background: "linear-gradient(160deg, rgba(42,22,24,0.95) 0%, rgba(29,17,19,0.95) 52%, rgba(20,12,15,0.95) 100%)",
            borderTop: "1px solid rgba(196, 31, 58, 0.32)",
          }}
          className="md:hidden"
        >
          <ul className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((link) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={link.href}
                  className="text-xs sm:text-[10px] font-mono tracking-wider sm:tracking-[0.25em] text-[rgba(232,221,208,0.75)] hover:text-[#e8ddd0] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
