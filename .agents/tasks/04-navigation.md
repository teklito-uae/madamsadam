# 04 — Navigation

Depends on: 02-motion-primitives

## Objective
Minimal premium nav, transparent-over-hero → opaque-on-scroll, plus a full-screen cinematic mobile menu.

## Desktop
- Left: logo. Center/right: `WORK · SERVICES · STORY · CONTACT`. Right: menu button/icon.
- Transparent + no border over the hero; on scroll, transitions to slightly opaque background, backdrop blur, subtle 1px bottom border — animate the transition, don't snap it.

## Mobile
- Full-screen overlay menu, oversized typography for each item.
- On hover/focus (or tap-and-hold on touch where feasible), a background image preview can appear behind the selected item — optional enhancement, skip if it compromises touch usability.
- Menu icon animates between hamburger/close states.

## Acceptance criteria
- Keyboard-navigable: tab order logical, focus-visible states present, Escape closes mobile menu.
- Nav never overlaps content awkwardly at any breakpoint.
- Scroll-state transition uses transform/opacity, not layout-affecting properties.
