# PROJECT PLAN — MADAMS ADAM

## 1. Vision

A cinematic, immersive one-page (initially) scrolling experience that reads as a luxury entertainment brand, not a creative agency template. The homepage tells a story in this order:

```
INTRO → CREATE → CONNECT → BECOME → WORK → SERVICES → CULTURE → CONTACT
```

Emotional arc for the visitor: **CURIOUS → INSPIRED → IMPRESSED → CONNECTED → READY TO CREATE**.

## 2. Tech stack

| Layer | Choice |
|---|---|
| Framework | React + TypeScript + Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Motion | Framer Motion (primary), GSAP (only for advanced timelines) |
| Smooth scroll | Lenis |
| Icons | Lucide React |
| Routing | React Router (only if/when multiple pages are needed) |

No additional libraries unless a specific gap can't be filled by the above.

### 2.1 Optional, scoped additions

Evaluated against [awesome-react](https://github.com/enaqx/awesome-react). Add only if the specific task calls for it — not installed upfront.

| Library | Use it for | Task |
|---|---|---|
| `keen-slider` | Touch-first horizontal galleries (CREATE/CONNECT/BECOME panels, night-section image strip, memory film-strip) instead of hand-rolled drag logic | 07, 10, 12 |
| `react-hook-form` | Contact form state/validation, headless — no UI weight added | 15 |
| `react-parallax-tilt` | Subtle tilt-on-hover for portfolio images | 08 |
| `floating-ui` | Precise positioning for the custom cursor label and hover-preview images | 04, 08, 09 |

Everything else surveyed in awesome-react (state libraries, chart/map/i18n packages, testing frameworks, alternate UI kits) has no use case on this site and should not be added speculatively.

### 2.2 shadcn MCP

`.mcp.json` registers the shadcn MCP server (`npx shadcn@latest mcp init --client claude`) so components can be pulled directly via the shadcn registry during build tasks instead of `npx shadcn add` by hand.

## 3. Folder structure

```
src/
  components/
    navigation/
    hero/
    sections/
    gallery/
    services/
    projects/
    testimonials/
    footer/
    motion/        # RevealText, RevealImage, ParallaxImage, MagneticButton,
                    # CustomCursor, Marquee, PageTransition
  pages/
  data/             # projects.ts, services.ts, testimonials.ts, clients.ts
  hooks/
  lib/
  assets/
  styles/
public/
  fonts/            # Glancyr Neue
  assets/           # logo, images, video
```

Content (portfolio, services, testimonials, clients) lives in `src/data/*.ts`, decoupled from UI components, so it can later move to a CMS/API without a rebuild.

## 4. Pre-build checklist (do this before writing any component)

1. Inspect repo for existing `package.json`, Tailwind config, shadcn setup.
2. Locate the existing MADAMS ADAM logo (`/assets`, `/public/assets`) — reuse, never recreate.
3. Locate Glancyr Neue font files — if present, wire up via `@font-face`; if absent, flag to the user rather than substituting silently.
4. Locate any real photography/video assets — prioritize over placeholders, but build the data layer so placeholders can be swapped 1:1 later.

## 5. Build sequence

Matches the task breakdown in [.agents/tasks](.agents/tasks). Build in this order:

1. Project scaffold (Vite + TS + Tailwind + shadcn + Lenis + Framer Motion)
2. Typography + color system (tokens in Tailwind config, `@font-face`)
3. Motion primitives (`RevealText`, `RevealImage`, `ParallaxImage`, `MagneticButton`, `Marquee`, `CustomCursor`, `PageTransition`)
4. Preloader
5. Navigation (desktop overlay nav + mobile cinematic full-screen menu)
6. Hero
7. Brand statement section
8. CREATE / CONNECT / BECOME section
9. Selected Stories (portfolio gallery)
10. Services (editorial list)
11. Night/nightlife section
12. Branding section
13. Memory/storytelling section
14. UAE identity + marquee
15. Testimonial + client/collaboration section
16. Contact
17. Footer
18. Responsive pass (1440, 1920, tablet, mobile — intentional compositions, not shrink-to-fit)
19. Accessibility pass (`prefers-reduced-motion`, focus states, semantic HTML, alt text)
20. Performance pass (lazy loading, responsive images, WebP/AVIF, transform/opacity-only animation)
21. SEO (title, description, OG tags, favicon from logo, semantic heading order)
22. Final creative-director review against [.agents/tasks/99-final-review.md](.agents/tasks/99-final-review.md)

Visual experience comes first — no backend/CMS work in this phase.

## 6. Definition of done (per section)

A section is done when it has: real or placeholder data wired through `src/data`, entrance motion via a shared motion primitive (not one-off animation code), responsive behavior at all four breakpoints, and passes the "does this look like agency template #247" check in BRAND_GUIDELINES.md.
