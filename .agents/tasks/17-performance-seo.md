# 17 — Performance + SEO

Depends on: 16-responsive-accessibility

## Performance
- Lazy-load all below-the-fold images/media; eager-load only the hero's first frame/poster.
- Serve responsive image sizes (`srcset`/`sizes` or a build-time image pipeline); prefer WebP/AVIF with fallback.
- Video: poster image required, compressed source, no autoplay-with-sound, consider swapping heavy background video for a looping compressed clip or falling back to image on slow connections.
- Confirm all animation uses `transform`/`opacity` only (audit against tasks 02–15).
- Check bundle size; code-split routes if React Router is in use.
- Run Lighthouse (or equivalent) and address flagged regressions in LCP/CLS/TBT.

## SEO
- `<title>MADAMS ADAM — Create. Connect. Become.</title>`
- Meta description: "MADAMS ADAM is a UAE-based creative house specialising in storytelling, events, photography, film, branding and digital experiences."
- Open Graph tags (title, description, image, url, type).
- Favicon generated from the existing logo asset.
- Verify heading order (`h1` → `h2` → `h3`) is semantically correct, not just visually correct.

## Acceptance criteria
- Lighthouse performance and accessibility scores recorded before/after this pass.
- No console errors/warnings on load.
- OG tags verified with a social preview check (e.g. paste URL into a debugger tool, if the site is deployed).
