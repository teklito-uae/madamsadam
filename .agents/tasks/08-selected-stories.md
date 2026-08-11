# 08 — Selected Stories (portfolio)

Depends on: 02-motion-primitives

## Objective
Editorial asymmetric gallery, not a standard card grid. Copy/data structure in [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#selected-stories-portfolio).

## Steps
1. Create `src/data/projects.ts`:
   ```ts
   export interface Project {
     title: string;
     category: string;
     year?: string;
     image: string;
   }
   export const projects: Project[] = [ /* ... */ ];
   ```
2. Layout: asymmetric grid — large/small image pairing, varied aspect ratios, not a uniform 3-column grid.
3. Hover (desktop): image slowly zooms, overlay appears with title/category/year via `RevealText`/`RevealImage`.
4. Wire up `CustomCursor` here — `VIEW`/`EXPLORE` label following the pointer over images, disabled on mobile/tablet.
5. Use placeholder entries from CONTENT_GUIDE.md until real photography is supplied.

## Acceptance criteria
- No two adjacent images share the same aspect ratio/size.
- Cursor custom state only active on pointer-fine devices (`@media (hover: hover) and (pointer: fine)`), never on touch.
