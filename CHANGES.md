# Changes

_A plain-English log of what changed and why. Newest at the top._

## 2026-10-22 - Brought up to the current Claude Code standard
- Added a "Standards" section to `CLAUDE.md` pointing at the owner's global standards; no existing rule was changed.
- Added `SECURITY.md`, `WIP.md` and this `CHANGES.md`; added the journal header line and a new entry to `DECISIONS.md`.
- Added `private/` and `_proof/` to `.gitignore`, and a `.gitattributes` so the commit guard keeps Unix line endings.
- The existing `.githooks/pre-commit` guard was kept as is.
- Review fixes: `WIP.md` now states which branches are merged (and no longer names the feature branch); the two header lines in `DECISIONS.md` were merged into one.
