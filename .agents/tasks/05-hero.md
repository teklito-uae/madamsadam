# 05 — Hero

Depends on: 02-motion-primitives, 03-preloader

## Objective
The most important section — a fashion-film opening, not a conventional "Welcome to X" hero. Copy in [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#hero).

## Steps
1. Full viewport (100–110vh) cinematic background image/video with dark overlay for text contrast. Use real photography/video if available (see task 00 asset inventory); otherwise a clearly-marked placeholder.
2. Load sequence (in order): background scales 1.08 → 1 → logo fades in → headline reveals via clip-path (`MADAMS` / `ADAM`) → tagline fades in → nav enters from top → scroll indicator appears.
3. Scroll behavior: background moves slower than page (parallax via `ParallaxImage`), typography moves at its own speed, content fades out gradually, slight additional scale on the image.
4. Bottom-left: `UAE / CREATIVE HOUSE`. Bottom-right: `SCROLL TO EXPLORE ↓`.
5. Video: provide a poster image, keep file size reasonable, no autoplay-with-sound, respect reduced-motion (fall back to static image).

## Acceptance criteria
- Feels like a film opening, not a card-based hero.
- LCP-friendly: hero background is prioritized/preloaded appropriately, not render-blocking.
- Reduced-motion users get the same content with parallax/scale effects disabled.
