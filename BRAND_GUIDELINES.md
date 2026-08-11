# BRAND GUIDELINES — MADAMS ADAM

## Identity

**MADAMS ADAM** — UAE-based creative, event, photography, memory and branding house.
**Tagline:** CREATE. CONNECT. BECOME.

Reference feel: *Vogue digital editorial × luxury fashion campaign × cinematic production studio × modern Dubai nightlife.*

Not: wedding photographer site, corporate branding agency, SaaS landing page.

## Brand pillars

- **CREATE** — Ideas, brands, films, experiences, identities.
- **CONNECT** — People, culture, communities, artists, business.
- **BECOME** — Transformation, ambition, expression, growth, memories.

The visitor should feel: *"I don't just want to hire this company. I want to be part of what they create."* Lead with emotion and curiosity; explain services only after the mood is set.

## Typography

| Role | Font | Usage |
|---|---|---|
| Display / personality | **Glancyr Neue** | Hero headlines, oversized editorial statements, section titles, numbers |
| Body / UI | **Inter** (or Geist / Neue Montreal / Manrope) | Navigation, body copy, form fields, metadata |

Rules:
- Glancyr Neue loaded locally from `/public/fonts` via `@font-face` — never substituted without flagging it.
- Uppercase labels, generous letter-spacing for metadata/nav (e.g. `EVENT / CULTURE / FILM`).
- Animate headline reveals by line, not by individual letter, unless a specific moment calls for it.
- Editorial numbering (`01`, `02`, `03`) used deliberately as a design element, not decoration.

## Color system

Not flat black — subtle tonal layering.

```
Background layers   #080808  #0D0D0D  #111111  #171717
Primary text        #F5F3EE
Secondary text      #A8A6A0
Borders              rgba(255,255,255,0.12)
```

Secondary accents (used sparingly): champagne, silver, warm grey. Occasionally pull an accent color from the photography itself rather than adding synthetic color. No generic gradients, no corporate blue, no saturated UI color.

## Motion principles

Cinematic, slow, precise, expensive, intentional — never decorative-for-its-own-sake.

- Text: clip-path / translateY reveals, staggered by line.
- Images: `scale: 1.12 → 1` with `clip-path: inset(10%) → inset(0)`.
- Parallax: hero background moves slower than scroll; typography moves at its own speed.
- CTAs: subtle magnetic pull toward cursor, never exaggerated.
- Respect `prefers-reduced-motion`: disable parallax/elaborate motion, keep visual hierarchy.
- Reusable primitives only: `RevealText`, `RevealImage`, `ParallaxImage`, `MagneticButton`, `Marquee`, `CustomCursor`, `PageTransition`. No one-off animation code duplicated per section.

## Logo

Use the existing logo asset as-is — do not recreate or reinterpret it. Prominent in nav and footer, never oversized or forced. Favicon derives from the logo.

## Voice and tone

Confident, minimal, emotional, cinematic, contemporary, premium. No corporate jargon.

| Instead of | Use |
|---|---|
| "We provide high-quality photography services for businesses." | "We capture the energy behind the moment." |
| "We offer branding solutions." | "Build identities people remember." |
| "We create websites." | "Digital experiences built to move people." |

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for section-by-section copy direction.

## UAE identity

Communicate UAE through nightlife, architecture, luxury, multicultural people, fashion, events, hospitality, art, modern culture — not generic Dubai skyline stock imagery.

## UI details

- 1px borders, thin dividers, asymmetric layouts, large whitespace.
- Buttons: `[ START A PROJECT → ]` — text links, underlines, thin bordered buttons, minimal circular buttons. Avoid pill-shaped buttons everywhere.
- Editorial asymmetric image grids instead of card grids.

## Anti-patterns — never do these

- Hero + 3 generic cards
- Generic "Our Services" card grids
- Generic portfolio cards with rounded corners
- Gradient blobs, excessive glassmorphism
- SaaS-style dashboards or UI chrome
- Stock icons in place of photography
- Boring testimonial cards
- Corporate blue color scheme
- Basic fade-up animation applied uniformly to everything
- Fabricated client logos, testimonials, or contact details

## Final gut-check (creative director review)

Before shipping any section, ask: Does this feel luxurious? Cinematic? Like entertainment? Like UAE? Does the motion feel expensive? Would this be mistaken for "Creative Agency Template #247"? If yes to the last question, redesign it.
