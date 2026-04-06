"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "STORY" },
  { href: "#projects", label: "CODE" },
  { href: "#contact", label: "SIGNAL" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(20, 16, 8, 0.72)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(58, 42, 26, 0.3)",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-sm font-semibold tracking-[0.3em] text-[#e8ddd0] hover:text-[#d94f3d] transition-colors uppercase chiseled"
        >
          rflvz
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[10px] font-mono tracking-[0.25em] text-[rgba(232,221,208,0.75)] hover:text-[#e8ddd0] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/rflvz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono tracking-[0.25em] text-[rgba(232,221,208,0.75)] hover:text-[#e8ddd0] transition-colors"
            >
              GITHUB
            </a>
          </li>
        </ul>

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
            background: "rgba(10, 7, 5, 0.95)",
            borderTop: "1px solid rgba(58, 42, 26, 0.3)",
          }}
          className="md:hidden"
        >
          <ul className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[10px] font-mono tracking-[0.25em] text-[rgba(232,221,208,0.75)] hover:text-[#e8ddd0] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/rflvz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono tracking-[0.25em] text-[rgba(232,221,208,0.75)] hover:text-[#e8ddd0] transition-colors"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
