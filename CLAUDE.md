# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**Owner**: Rafa Alvarez (rflvz) — AI Architecture Developer
**Stack**: Next.js 16.2.2, TypeScript, React 19, Tailwind CSS v4, Framer Motion
**Purpose**: Portfolio website with "Digital Zine" aesthetic — "The Analog Artifact" design system

## Development Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture

### Framework & Build
- **Next.js 16** (App Router) with `src/` directory
- **TypeScript** strict mode
- **Tailwind CSS v4** — configured via CSS `@theme inline` in `globals.css`, NOT via `tailwind.config.ts`
- **No Tailwind config file** — all tokens live in `globals.css`

### Fonts (next/font/google)
- `Cinzel` — headings/serif (weights: 400, 600, 700, 900)
- `IBM_Plex_Mono` — body/code (weights: 300, 400, 500, 600)
- Font variables: `--font-heading`, `--font-sans`, `--font-mono`

### Key Dependencies
- `framer-motion` — animations (Hero, Navbar, UI components)
- `@paper-design/shaders` + `@paper-design/shaders-react` — GPU shader effects (transpiled via `next.config.ts`)
- `clsx` + `tailwind-merge` — className utility (`cn()` helper in `src/lib/utils.ts`)
- `lucide-react` — icons
- `@radix-ui/react-slot` — polymorphic component pattern
- `class-variance-authority` — component variant utilities

### Color Tokens (defined in `globals.css` @theme inline)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#140c0f` | Page background (dark charcoal) |
| `--color-surface` | `#141008` | Card/panel backgrounds |
| `--color-surface-variant` | `#1c1510` | Elevated surfaces |
| `--color-foreground` | `#e8ddd0` | Primary text (warm white) |
| `--color-foreground-muted` | `rgba(232,221,208,0.55)` | Secondary text |
| `--color-accent` | `#c41e3a` | Carmine red — labels, IDs, primary accents |
| `--color-accent-orange` | `#d94f3d` | Warm red — highlights, hover states |
| `--color-border` | `#3a2a1a` | Subtle borders |

## File Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind v4 config, CSS utilities, animations
│   ├── layout.tsx        # Root layout (fonts, Navbar, Footer, metadata)
│   ├── page.tsx          # Home page (Hero → About → Services → Projects → TechMarquee → Testimonials → Contact)
│   └── card-stack-demo/  # Demo pages (dev-only)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # "use client" — mobile menu toggle
│   │   ├── Footer.tsx
│   │   └── DynamicEtherealShadow.tsx
│   ├── sections/
│   │   ├── Hero.tsx           # "use client" — parallax scroll, TextGlitch
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── LiquidButton.tsx
│       ├── LiquidMetalButton.tsx
│       ├── SectionHeading.tsx
│       ├── AnimateIn.tsx
│       ├── MotionContainer.tsx
│       ├── InputField.tsx
│       ├── TextGlitch.tsx
│       ├── EtherealShadowBackground.tsx
│       └── [feature-shader-cards, card-stack, spotlight-card, testimonial, demo, etc.]
└── lib/
    └── utils.ts          # cn() helper
```

## Component Conventions

### Server vs Client Components
- **Default**: Server Components (no "use client")
- **Exceptions** (require client):
  - `Navbar.tsx` — mobile menu state (`useState`)
  - `Hero.tsx` — scroll parallax (`useScroll`, `useTransform`)
  - `src/app/page.tsx` — uses framer-motion variants
  - UI components using Framer Motion or React hooks

### ClassName Utilities
Use `cn()` from `@/lib/utils` for conditional classes:
```tsx
import { cn } from "@/lib/utils";
<div className={cn("base-class", isActive && "active-class", className)} />
```

### Animation Patterns
- **Easing**: `const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number]`
- **Variants**: Stagger children with `delayChildren` and `staggerChildren`
- **Transitions**: Always use `ease: EASE_OUT` for smooth deceleration

## Design System: "The Analog Artifact"

### Visual Rules
- **Cursor**: `crosshair` everywhere (set on `body`)
- **Corners**: `border-radius: 0px` — square aesthetic throughout
- **No solid borders** to define sections — use background color shifts
- **No pure white text** — always `rgba(232,221,208,X)` or `#e8ddd0`
- **Grain overlay + vignette** — CSS `::before`/`::after` on body

### CSS Utility Classes
- `.chiseled` — Chiseled text-shadow on headlines
- `.scratched-divider` — Gradient line with carmine center
- `.iron-plate` — Card with metallic gradient + inset glow
- `.card-hover` — Hover lift with border glow
- `.text-shimmer-hover` — Text shimmer on hover
- `.glow-pulse` — Pulsing glow animation
- `.animate-float` — Floating animation
- `.torn-top` — Jagged clip-path top edge

### Glassmorphism
Floating elements (navbar, tooltips): `backdrop-filter: blur(12px)` with gradient backgrounds

### Text Contrast
Body text minimum `rgba(232,221,208,0.75)` (WCAG AA compliance)

## Key Patterns

### Section Rendering
All page sections are composed in `src/app/page.tsx` as a flat list of Server Components.

### Scroll Animations
Hero uses `framer-motion` `useScroll` + `useTransform` for parallax. Components can use `AnimateIn.tsx` for intersection-based reveals.

### Shader Components
Paper-design shaders are transpiled via `next.config.ts` `transpilePackages`. Used in `feature-shader-cards.tsx` and similar GPU-accelerated visual effects.

### Marquee
Tech stack marquee uses CSS animation (`@keyframes marquee`) with duplicated content for seamless loop.

## Styling Approach

**Tailwind v4 with CSS-first configuration**:
- All design tokens in `globals.css` `@theme inline` block
- NO `tailwind.config.ts` file
- CSS custom properties (variables) for colors, fonts, spacing
- Custom CSS classes for complex effects (grain, vignette, scratched lines)

## Dev Origin Config

`next.config.ts` allows `192.168.1.100` as a dev origin for local network access.

## SEO & Metadata

Root layout exports `Metadata` with Spanish title/description. HTML lang is `"es"`.

## Design Tool

Google Stitch MCP is configured globally.
- **Project**: PortfolioWeb (ID: `718002708572066993`)
- **Design System**: "Iron and Ash / The Analog Artifact" with carmine (#c41e3a) and warm red (#d94f3d) accents