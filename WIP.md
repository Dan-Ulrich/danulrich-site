# WIP - danulrich-site

## What this repo is for
The public source of danulrich.com: a professional home page and a tag-filterable resume at /resume,
built on Astro (Nano theme) and deployed through Cloudflare Pages (source: CLAUDE.md, README.md).
Content source of truth is `src/data/resume.json`. Commits to `main` go live (CLAUDE.md, "Deploys").

## Where to resume
- Most recent design document in the repo: `docs/superpowers/specs/2026-08-06-blog-section-scaffold-design.md`
  (blog section scaffold).
- Most recent decisions: `DECISIONS.md` (blog build-out is scaffolding only; real blog topics are not yet decided).

## Open loops visible in the files and git history
- Blog topics: DECISIONS.md (2026-08-06) says real content topics are a separate decision not yet made.
  The `src/content/blog`, `projects` and `work` folders are empty in the current checkout.
- Unmerged remote branches exist on GitHub (several `dependabot/npm_and_yarn/*` update branches,
  plus `phase-2-resume` and `frost-family-page`). Whether each is merged or abandoned: NOT CHECKED.
- Dependabot opens weekly update pull requests; per CLAUDE.md, run `npm run build` after any dependency change.
