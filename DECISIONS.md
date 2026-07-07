# Decisions — danulrich-site

_Real decisions only: what we chose, why, and what lost. Newest on top. Claude writes it; Dan reads it. (Started 2026-07-07.)_

- **2026-07-07 — "Download PDF" serves a WEB-SAFE variant: contact line = location + LinkedIn, no phone/email.** Why: this repo and the site are public — contact PII would be scraper food and a permanent git record. The full-contact resume stays a direct-send file from career-ops.
- **2026-07-06 — Phase 2 resume built on a branch; nothing reaches production without Dan's review of the Access-locked preview.** Why: every content change to a public career property is outward-facing; the branch+preview flow makes "review before live" structural instead of a promise.
- **2026-07-06 — Resume data model: ONE canonical wording per bullet with a `lanes[]` list, instead of per-lane rewrites.** Why: four parallel phrasings per bullet is exactly the drift risk the one-source-of-truth rule exists to prevent; lane filters dim, they don't rewrite.
- **2026-07-06 — Base theme = Astro Nano; fonts = Source Serif 4 (headings) + Inter (body), self-hosted; interaction = native HTML (`<details>`, Popover) + one small vanilla-JS island; diagrams later = build-time SVG (D2/hand-authored), not Mermaid.** Why: typography-first executive credibility with near-zero JavaScript — every dependency must justify itself. Rejected: heavier themes (Astrofy/DaisyUI = generic dev-template look) and runtime diagram libraries.
- **2026-07-06 — Preview deployments locked behind Cloudflare Access; `_headers` ships noindex for pages.dev hosts only.** Why: preview URLs otherwise stay public forever, and raw pages.dev copies would compete with danulrich.com in search. The real domain stays fully indexable.
