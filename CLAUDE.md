## What this repo is

The public source of danulrich.com — Dan's professional site (home page + tag-filterable
deep resume at /resume), built on Astro (Nano theme), deployed via Cloudflare Pages.
Everything committed here is effectively public. Content source of truth is
`src/data/resume.json`; the private full-contact resume lives in career-ops, NOT here.

## Security & secrets rules (enforced, not optional)

- **This repo is public. Never commit:** phone numbers, personal email addresses,
  API keys/tokens, `.env` files, or any document from the career-ops vault.
  The site deliberately shows only location + LinkedIn as contact.
- **Commit guard:** `.githooks/pre-commit` scans every commit and blocks secrets/PII.
  It is wired up via `git config core.hooksPath .githooks` — if this repo is ever
  re-cloned, re-run that one command to re-arm the guard. Never bypass with
  `--no-verify`; if it false-alarms, tune the script instead and log why.
- **Dependencies:** Dependabot (`.github/dependabot.yml`) opens weekly PRs for
  updates; security PRs get priority. After any dependency change, `npm run build`
  must pass before committing. Stack notes: Astro 7; Tailwind 3 runs through
  PostCSS (`postcss.config.mjs`) because the old @astrojs/tailwind integration
  was retired; `.nvmrc` pins Node 22+ for Cloudflare builds — don't remove it.
- **Deploys:** commits to `main` go live. Content/visual changes Dan hasn't seen
  ship via a branch + Access-locked preview first (see DECISIONS.md 2026-07-06).
  Claude commits locally but does not push to `main` without Dan's go-ahead.

## Which model / mode for which task (Dan taps /model; Claude suggests)

Plain rule of thumb — match the tool to the stakes:

| Task in this repo | Model | Mode |
|---|---|---|
| Typos, wording tweaks, resume.json edits, date bumps | **Sonnet** (fast, light on quota) | just do it |
| Routine dependency PRs / rebuild checks | **Sonnet** | just do it |
| New page, layout or design work, anything visual | **Opus 4.8** | plan mode first if it touches 3+ files |
| Security decisions, deploy/DNS/headers changes | **Opus 4.8** | plan mode + confirm before outward-facing steps |
| Big migrations (e.g. Astro 5→7) | **Opus 4.8** (offer `/fast` if slow) | plan mode, on a branch, preview before merge |

Claude: if the session model doesn't match the task per this table, say so in one
line before starting ("this is mechanical — Sonnet would be faster: /model?"), then
proceed with whatever Dan picks. Never block on it.

## Self-learning loop

- Real decisions land in `DECISIONS.md` the same turn they're made (global rule).
- When a security rule fires (hook blocks something, audit finds something), record
  what happened and the fix here or in DECISIONS.md so the lesson persists.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
