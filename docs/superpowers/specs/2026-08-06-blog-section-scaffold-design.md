# Blog section scaffold — design

**Date:** 2026-08-06
**Status:** approved

## Purpose

Activate the blog section of danulrich.com. The Astro Nano theme already
shipped with the full plumbing (listing page, post page, content schema) —
this project turns that scaffold into a real, reachable section with a
placeholder post or two, so the pipeline (write → commit → live) is proven.
Real content topics are a separate, future decision.

## What already exists (no changes)

- `src/pages/blog/index.astro` — listing page, groups posts by year,
  newest year first, uses `ArrowCard` for each entry.
- `src/pages/blog/[...slug].astro` — individual post page, shows date,
  reading time, title, and rendered content; has a "back to blog" link.
- `src/content.config.ts` — `blog` collection schema: `title` (string),
  `description` (string), `date` (coerced date), `draft` (optional bool).
  Draft posts are filtered out of both the listing and static paths.

## Changes in this pass

1. **Nav link.** Add a "blog" link to `src/components/Header.astro`,
   alongside the existing "resume" link.
2. **Broaden the blog description.** `src/consts.ts` currently describes
   the blog as "Notes on program delivery, operations, and AI-enabled
   work" — purely professional framing. Dan wants the blog to be mixed
   (professional + personal), so this copy will be broadened to something
   like "Notes on program delivery, technology, and things I'm thinking
   about" (exact wording finalized during implementation).
3. **2–3 placeholder posts** in `src/content/blog/` as real markdown
   files conforming to the existing schema. These are explicitly
   placeholder content — short posts that plainly say so — not fake
   polished writing. Purpose is to prove the section works, not to
   simulate real content. Real topics/writing are out of scope here.
4. **Verify end-to-end.** Run the dev server and confirm: `/blog` lists
   the placeholder posts grouped by year; an individual post page renders
   correctly (title, date, reading time, content, back link); `npm run
   build` still passes clean.

## Explicitly out of scope

- Tags/categories system for posts.
- Homepage "recent posts" preview (theme supports `NUM_POSTS_ON_HOMEPAGE`
  but Dan wants the homepage left untouched for now).
- Real post topics or finished writing — a future, separate session once
  Dan decides what to actually write about.
- Tailwind 3→4 upgrade (already deferred separately, unrelated to this
  work).

## Testing / acceptance

- `npm run build` passes with zero errors.
- `/blog` renders the placeholder posts, grouped correctly by year.
- Each placeholder post's individual page renders without error.
- Nav shows a working "blog" link on all pages that include `Header.astro`.
