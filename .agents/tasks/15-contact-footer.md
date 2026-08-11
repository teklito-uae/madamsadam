# 15 — Contact + footer

Depends on: 02-motion-primitives

## Objective
The closing scene of the site. Copy in [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#contact) and [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#footer).

## Contact
1. Large typography: `LET'S CREATE SOMETHING WORTH REMEMBERING.` via `RevealText`.
2. Minimal form: `NAME · EMAIL · COMPANY · PROJECT TYPE · TELL US ABOUT IT`. Simple bordered inputs, no heavy chrome. `PROJECT TYPE` can be a minimal select or button group.
3. CTA: `START THE CONVERSATION →`, built on `MagneticButton`.
4. Location `Dubai, UAE`. Email/phone: only include if the user has supplied real values — otherwise leave clearly marked as TBD, don't invent.
5. Wire form submission to a stub handler (e.g., `console.log`/no-op) unless a backend/integration is specified — don't build a fake success state that implies delivery.

## Footer
1. Logo, tagline, nav links.
2. Social links (`Instagram · LinkedIn · TikTok · WhatsApp`) — only render links with real URLs; omit entries without one rather than linking to `#`.
3. `MADAMS ADAM — Creative House — UAE`, copyright with dynamic year.
4. `BACK TO TOP ↑` control, smooth-scrolls via Lenis.

## Acceptance criteria
- Form fields have labels and accessible error states (even if submission is stubbed).
- No placeholder social/contact links pointing to `#` or fake numbers.
