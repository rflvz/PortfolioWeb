# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

PortfolioWeb is the personal portfolio for Rafa Alvarez (rflvz), an AI Architecture Developer. Built with Next.js 16, TypeScript, and Tailwind CSS v4. Design system: **"The Analog Artifact"** (Iron and Ash) — a "Digital Zine" aesthetic with cinematic tones.

## Development Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 (App Router) with `src/` directory
- **Styling**: Tailwind CSS v4 — configured via CSS (`@theme inline` in `globals.css`), NOT via `tailwind.config.ts`
- **Fonts**: Cinzel (headings/serif), IBM Plex Mono (body/code) via `next/font/google`

### Component Organization

```
src/components/
  layout/     → Navbar, Footer (persistent layout components)
  sections/   → Hero, About, Projects, Contact (landing page sections)
  ui/         → Button, Card, Badge, SectionHeading (reusable primitives)
```

### Design System: "The Analog Artifact"

- **Theme**: Dark cinematic — background `#140c0f`, no solid black
- **Palette**:
  - `--color-accent: #c41e3a` (carmine red — use for labels, IDs, accents)
  - `--color-accent-orange: #d94f3d` (warm red — use for highlights, hovers)
  - `--color-foreground: #e8ddd0` (warm white — primary text, always high contrast)
- **Background**: Grain overlay (SVG noise at 6% opacity) + vignette radial-gradient
- **Cursor**: `crosshair` throughout
- **Corners**: `border-radius: 0px` everywhere (square aesthetic)
- **Typography**: Chiseled text-shadow on headlines, monospace for all body/tech text
- **Dividers**: Scratched gradient lines (no solid borders)

### Design Rules

- **No line borders** to define sections — use background color shifts or texture changes
- **No pure white text** — always `rgba(232,221,208,X)` or `#e8ddd0`
- **Glassmorphism** on floating elements (navbar, tooltips): `backdrop-filter: blur(12px)`
- **Text contrast**: Body text minimum `rgba(232,221,208,0.75)` (WCAG AA)

### Key Patterns

- All sections are **Server Components** by default. Only `Navbar.tsx` uses `"use client"` for mobile menu toggle.
- Color tokens are defined once in `globals.css` `@theme inline` block
- Grain overlay and vignette are CSS `::before`/`::after` on `body`

### Design Tool

Google Stitch MCP is configured globally. Stitch project: **"PortfolioWeb"** (ID: `718002708572066993`). The design uses the "Iron and Ash / The Analog Artifact" system with carmine (#c41e3a) and warm red (#d94f3d) accents.
