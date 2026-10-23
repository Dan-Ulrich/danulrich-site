# Security

## What this repo holds, and does not hold
This is a public repo: the source of a public website. It holds site source code, styles, public
assets and the web-safe resume data used to build the pages. It does not hold, and must never hold:
raw personal documents or personal data (phone numbers, personal email addresses), API keys or
tokens, `.env` files, or facts belonging to other projects.

## Protections (as present in the repo)
- `.gitignore` excludes `.env` files, `node_modules/`, build output, and local-only folders
  (`private/`, `_proof/`).
- `.githooks/pre-commit` scans each commit and blocks secret-looking files, API keys and tokens,
  phone numbers and personal email addresses. It is armed with `git config core.hooksPath .githooks`
  (re-run that after a fresh clone). `.gitattributes` keeps the hook on Unix line endings.
- The no-raw-PII rule from the owner's global standards applies: minimize copies of secrets.
- Dependabot (`.github/dependabot.yml`) opens weekly dependency update pull requests.
- `public/_headers` sets security headers on the deployed site.

## Incident register

| Date | What | Fix |
|------|------|-----|
