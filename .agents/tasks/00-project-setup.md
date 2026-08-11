# 00 — Project setup

## Objective
Scaffold the project and inventory existing assets before any UI work begins.

## Steps
1. Check whether `package.json` already exists. If not, init Vite + React + TypeScript.
2. Install and configure: Tailwind CSS, shadcn/ui, Framer Motion, Lenis, Lucide React, React Router (only if multi-page is confirmed needed).
3. Set up the folder structure from [../../PROJECT_PLAN.md](../../PROJECT_PLAN.md#3-folder-structure).
4. Inventory existing assets:
   - Logo file(s) in `/assets` or `/public/assets` (PNG/WEBP/SVG)
   - Glancyr Neue font files
   - Any real photography/video
   Record what was found (and what's missing) in a short note back to the user — do not silently substitute placeholders for missing brand assets without flagging it.
5. Configure absolute imports / path aliases if the stack supports it cleanly.
6. Add `.gitignore`, base `index.html` with placeholder meta tags (real SEO tags land in task 17).

## Deliverables
- Working `npm run dev` with a blank but correctly configured app shell.
- Folder structure in place (empty component/data files acceptable as stubs).
- Asset inventory note.

## Acceptance criteria
- No existing files overwritten without checking first.
- Build and dev server run cleanly with no config errors.
