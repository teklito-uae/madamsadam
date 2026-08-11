# 07 — CREATE / CONNECT / BECOME

Depends on: 02-motion-primitives

## Objective
The signature three-part section. Copy in [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#create--connect--become).

## Steps
1. Three panels (`01 — CREATE`, `02 — CONNECT`, `03 — BECOME`), each with: large number, massive typography, cinematic image/video, short copy line, interactive hover state.
2. Desktop: consider horizontal-scroll-driven panel transitions (GSAP ScrollTrigger acceptable here if Framer Motion's scroll APIs aren't sufficient for the pinning behavior).
3. Mobile: stack vertically, same content, simpler transitions.
4. Each panel's image uses `RevealImage`; panel entrance uses `RevealText`.

## Acceptance criteria
- Each panel has a visually distinct treatment (not three copies of the same layout with different text).
- Horizontal-scroll implementation (if used) doesn't break normal page scroll or trap the scrollwheel unexpectedly.
