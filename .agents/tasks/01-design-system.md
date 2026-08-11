# 01 — Design system

Depends on: 00-project-setup

## Objective
Turn [../../BRAND_GUIDELINES.md](../../BRAND_GUIDELINES.md) into working Tailwind tokens and font loading.

## Steps
1. `@font-face` for Glancyr Neue in `src/styles`, loaded from `/public/fonts`. If the font files aren't present, use a close free fallback temporarily and flag it clearly — don't ship a silent substitution as final.
2. Configure Inter (or agreed fallback) as the UI/body font.
3. Add Tailwind color tokens for the background layers, text, and border values from BRAND_GUIDELINES.md's color system table.
4. Add Tailwind `fontFamily` tokens: `display` (Glancyr Neue) and `sans` (Inter).
5. Set up a type scale for oversized editorial headlines (hero-scale, section-scale, label-scale) plus letter-spacing utilities for uppercase labels.
6. Set global base styles: background, default text color, selection color, focus-visible outline style.

## Deliverables
- `tailwind.config` with brand tokens.
- `src/styles/fonts.css` (or equivalent) with `@font-face` rules.
- A short internal style reference (Storybook not required — a single `/dev/style-guide` route or component is enough) showing type scale and color swatches, useful for the sections that follow.

## Acceptance criteria
- No hardcoded hex values allowed in later tasks — everything pulls from these tokens.
- Fonts render correctly with `font-display: swap` or equivalent to avoid layout shift.
