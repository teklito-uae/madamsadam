# 14 — Testimonial + client/collaboration section

Depends on: 02-motion-primitives

## Objective
Copy/data direction in [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#testimonial) and [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#client--collaboration).

## Steps
1. Testimonial: single large editorial quote at a time (not a card), subtle transition if multiple quotes exist. `src/data/testimonials.ts`. Use only real quotes if supplied — otherwise a single clearly-marked placeholder, never a fabricated attributed name.
2. Client section: heading `MADE WITH PEOPLE WHO MOVE CULTURE.`, monochrome logo marks grouped by category (`EVENTS · HOSPITALITY · FASHION · ENTERTAINMENT · CORPORATE · LIFESTYLE · STARTUPS`), subtle hover (grayscale → color, or opacity shift). `src/data/clients.ts`.
3. Do not fabricate real client logos or names — use neutral placeholder marks until real assets exist.

## Acceptance criteria
- Testimonial and client data both live in `src/data`, not hardcoded in the component.
- No invented client identities.
