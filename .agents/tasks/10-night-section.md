# 10 — Night / nightlife section

Depends on: 02-motion-primitives

## Objective
UAE nightlife/club/event energy. Copy in [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#night--nightlife).

## Steps
1. Full-width cinematic imagery (club/event photography), dark overlay for text legibility.
2. Overlay copy via `RevealText`: `THE NIGHT / IS A STORY.` + supporting lines.
3. Subtle horizontal-scrolling image strip (can reuse `Marquee` with images instead of text, slower speed).
4. Optional motion-blur-style transition between images — keep subtle, GPU-cheap.

## Acceptance criteria
- Feels distinct from Selected Stories (task 08) — this is mood/atmosphere, not a portfolio grid.
- Image strip pauses or slows under `prefers-reduced-motion`.
