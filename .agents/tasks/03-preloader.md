# 03 — Preloader

Depends on: 02-motion-primitives

## Objective
Cinematic loading sequence, max ~1.5–2s, using copy from [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#preloader).

## Steps
1. Full-viewport black overlay, `MADAMS ADAM` centered.
2. Logo scale 98% → 100%.
3. Tagline reveals via `RevealText` (letter or word stagger, not a typewriter effect).
4. Progress indicator `01 — 100` (can be a stylized counter, not a literal loading bar).
5. Cinematic reveal transition into the homepage (wipe/fade/clip-path — pick one, keep it fast).
6. Skip preloader on subsequent navigations within the same session (sessionStorage flag) — only show on first load.
7. Respect `prefers-reduced-motion`: shorter/simpler transition, same content.

## Acceptance criteria
- Total duration does not exceed ~2s.
- No layout shift when preloader unmounts.
- Doesn't block interaction longer than necessary — remove from DOM after transition completes.
