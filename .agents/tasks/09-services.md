# 09 — Services

Depends on: 02-motion-primitives

## Objective
Editorial service list (fashion-site feel), not service cards. Copy in [../../CONTENT_GUIDE.md](../../CONTENT_GUIDE.md#services).

## Steps
1. `src/data/services.ts` with `{ number, title, image }` per service (8 entries from CONTENT_GUIDE.md).
2. Each service is a large horizontal row: `01  STORYTELLING`.
3. On hover (desktop): row typography scales up slightly, underline animates in, arrow shifts, a floating image tied to that service follows the cursor or appears beside the row, background shifts subtly.
4. Mobile: rows remain but hover interactions become tap/simple reveal — no cursor-follow behavior on touch.

## Acceptance criteria
- No card containers, no icons standing in for photography.
- Floating hover image is GPU-cheap (transform/opacity only, preloaded so there's no flash on first hover).
