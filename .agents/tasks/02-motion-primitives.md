# 02 — Motion primitives

Depends on: 01-design-system

## Objective
Build the shared animation components every later section will reuse. See [../../BRAND_GUIDELINES.md](../../BRAND_GUIDELINES.md#motion-principles).

## Components to build (`src/components/motion/`)

- **RevealText** — line-by-line clip-path/translateY reveal with stagger, for headlines and paragraphs.
- **RevealImage** — `scale: 1.12 → 1` + `clip-path: inset(10%) → inset(0)` cinematic image reveal, triggered on scroll into view.
- **ParallaxImage** — scroll-linked translateY at a configurable speed multiplier, for hero and section backgrounds.
- **MagneticButton** — subtle cursor-attraction effect for primary CTAs.
- **Marquee** — infinite horizontal scroll, direction configurable (left/right), pausable on hover.
- **CustomCursor** — desktop-only cursor replacement (`VIEW`, `EXPLORE`, `→`), smoothly follows pointer, disabled below tablet breakpoint.
- **PageTransition** — black-overlay + logo transition wrapper, under ~700ms, only needed if/when multiple routes exist.
- Lenis smooth-scroll setup wired at the app root.

## Shared rules
- All animation driven by `transform`/`opacity` only (GPU-friendly) — no animating `top`/`left`/`width`/`height`.
- Every primitive respects `prefers-reduced-motion`: reduced/no motion variant built in, not bolted on later.
- Use Intersection Observer (or Framer Motion's `whileInView`) for scroll-triggered reveals, not scroll-position math, unless GSAP ScrollTrigger is specifically needed for a complex timeline.
- Export all primitives from a single `src/components/motion/index.ts`.

## Deliverables
- Each primitive as its own component with a minimal, typed prop API (no section-specific logic baked in).
- A small demo composition proving each primitive works in isolation before sections consume them.

## Acceptance criteria
- No later task writes its own bespoke scroll/reveal animation — everything composes these primitives.
- Reduced-motion mode verified for at least RevealText, RevealImage, ParallaxImage.
