# Agent task breakdown — MADAMS ADAM

Each file in [tasks/](tasks/) is a self-contained unit of work an agent (or developer) can pick up independently once its dependencies are done. Read [../PROJECT_PLAN.md](../PROJECT_PLAN.md) and [../BRAND_GUIDELINES.md](../BRAND_GUIDELINES.md) before starting any task — they're not repeated in full inside each task file.

## Order and dependencies

```
00-project-setup
  └─ 01-design-system
       └─ 02-motion-primitives
            ├─ 03-preloader
            ├─ 04-navigation
            ├─ 05-hero
            ├─ 06-brand-statement
            ├─ 07-create-connect-become
            ├─ 08-selected-stories
            ├─ 09-services
            ├─ 10-night-section
            ├─ 11-branding-section
            ├─ 12-memory-section
            ├─ 13-uae-marquee
            ├─ 14-testimonial-clients
            └─ 15-contact-footer
                 └─ 16-responsive-accessibility
                      └─ 17-performance-seo
                           └─ 99-final-review
```

Tasks 03–15 (the individual sections) can be built in any order or in parallel once 00–02 are complete, as long as each one consumes shared data from `src/data/` and shared motion primitives rather than inventing its own.

## Ground rules for every task

- Check for and reuse existing assets (logo, fonts, photography) before creating placeholders — see [../PROJECT_PLAN.md](../PROJECT_PLAN.md#4-pre-build-checklist-do-this-before-writing-any-component).
- Content goes in `src/data/*.ts`, never hardcoded inline in components.
- Copy comes from [../CONTENT_GUIDE.md](../CONTENT_GUIDE.md) — don't invent client names, testimonials, or contact info.
- No new dependencies beyond the stack listed in [../PROJECT_PLAN.md](../PROJECT_PLAN.md#2-tech-stack) without flagging it first.
- Every animated element uses a shared primitive from `components/motion/` (task 02) — no bespoke one-off animation logic per section.
- Run the anti-pattern checklist in [../BRAND_GUIDELINES.md](../BRAND_GUIDELINES.md#anti-patterns--never-do-these) before marking a task done.
