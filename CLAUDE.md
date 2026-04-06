# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PortfolioWeb is the personal portfolio for Rafa Alvarez (rflvz), an AI Architecture Developer. Built with Next.js 16, TypeScript, and Tailwind CSS v4.

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
- **Fonts**: Inter (body), Space Grotesk (headings), JetBrains Mono (code) via `next/font/google`

### Component Organization

```
src/components/
  layout/     → Navbar, Footer (persistent layout components)
  sections/   → Hero, About, Projects, Contact (landing page sections)
  ui/         → Button, Card, Badge, SectionHeading (reusable primitives)
```

### Design System

- **Theme**: Dark background (`#0a0a0f`), dot-pattern overlay via `.dot-pattern` CSS class
- **Colors**: primary `#7c8aff`, secondary `#5effa5`, accent `#ff8f5e`, surface `#12121a`
- **Background pattern**: CSS `radial-gradient` in `globals.css` — do not use image-based backgrounds
- **Tailwind v4 custom colors**: Defined as `@theme inline` CSS variables, referenced as `bg-primary`, `text-secondary`, etc.

### Key Patterns

- All sections are **Server Components** by default. Only `Navbar.tsx` uses `"use client"` for mobile menu toggle.
- Color tokens are defined once in `globals.css` `@theme inline` block and consumed via Tailwind utilities.
- The dot-pattern background is applied to `<body>` in `layout.tsx`.

### Design Tool

Google Stitch MCP is configured globally for UI design. Stitch project: "PortfolioWeb".
