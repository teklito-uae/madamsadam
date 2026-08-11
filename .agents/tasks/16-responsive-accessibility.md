# 16 — Responsive + accessibility pass

Depends on: all section tasks (03–15)

## Objective
Make every section intentional at each breakpoint — not desktop-shrunk-to-fit — and meet baseline accessibility.

## Responsive
- Breakpoints: 1920px+, 1440px (12-col grid), tablet (8-col grid), mobile (4-col grid).
- Review each section individually for a mobile-specific composition (typography scale, image cropping/aspect ratio, spacing), not just a CSS reflow.
- Verify horizontal-scroll sections (CREATE/CONNECT/BECOME, night strip, memory film-strip) work with touch drag on mobile/tablet.
- Custom cursor (task 08) confirmed disabled below `pointer: fine` devices everywhere it's used.

## Accessibility
- Semantic HTML: single `h1` (hero), logical `h2`/`h3` per section.
- Keyboard navigation: full site usable via keyboard, visible focus states matching brand style (thin border, not browser default blue).
- Alt text on all meaningful images; decorative images marked `alt=""`.
- Color contrast checked for text-over-image overlays (secondary text `#A8A6A0` on dark backgrounds especially).
- `prefers-reduced-motion`: audit every motion primitive and section for a working reduced variant — parallax and elaborate reveals disabled, hierarchy/content unchanged.
- Form (contact section) has proper labels, `aria-invalid`/error messaging, and works without JS-dependent styling breaking layout.

## Acceptance criteria
- Manual pass at 375px, 768px, 1024px, 1440px, 1920px with no overlapping/clipped content.
- Full keyboard walkthrough from nav to footer with no dead ends or invisible focus.
- Reduced-motion toggle tested in-browser (OS-level setting), site remains usable and on-brand.
