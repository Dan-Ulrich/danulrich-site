# How `resume.json` works (plain English)

This one file is the entire content of the `/resume` page. Edit it, `git push`, and the
site rebuilds. Nothing on the resume page is hard-coded — the page just renders whatever
is in here.

**Golden rule:** every bullet, metric, date, employer, and title in this file must trace
to the career-ops knowledge files (`knowledge/01` master resume, `knowledge/04` proof
bank, `knowledge/05` bullet library). Never invent or "improve" a fact here — fix it in
the knowledge files first, then copy it over.

## The four blocks

### 1. `header`
The fixed top of the page. It never changes when a visitor filters by lane — that is
deliberate (the through-line is the unifying story, not a tag).

| Field | What it is |
|---|---|
| `name` | Displayed name |
| `tagline` | The one-line identity under the name |
| `location` | Must stay exactly `Salt Lake City, UT \| Remote – U.S.` |
| `contact` | `label` + `href`. LinkedIn only — never phone, street address, or email |
| `through_line` | One or more paragraphs. The "finds the hidden variable" spine |

### 2. `lanes`
The filter chips. `id` is the internal code used inside bullets (`TPM`, `PM`, `BA`,
`AI`); `label` is what the visitor sees on the chip; `description` is the hover/help
text. Don't rename an `id` without updating every bullet that uses it.

### 3. `roles`
Newest first — the page renders them in the order they appear here. Each role:

| Field | What it is |
|---|---|
| `id` | Short unique slug (used for HTML anchors) |
| `employer` | Exactly as the master resume states it (e.g. `Microsoft Corporation, via Rylem Staffing`) |
| `title` | Official title only — never a shadow scope label |
| `engagement` | Optional, e.g. `Contract` |
| `location` | Optional, e.g. `Remote` |
| `dates` | e.g. `Nov 2023–May 2025` (en dash, no spaces around it) |
| `bullets` | The list of bullet objects below |

Each **bullet**:

| Field | What it is |
|---|---|
| `id` | Short unique slug |
| `text_concise` | The bullet everyone sees. Must stand alone — most visitors never expand |
| `text_expanded` | Optional deeper paragraph (from the proof bank). If present, the bullet becomes click-to-expand |
| `lanes` | Every lane this TRUE fact legitimately serves (`TPM`, `PM`, `BA`, `AI`). Drives the dim-filter — bullets NOT in the selected lane are dimmed, never hidden |
| `tags` | Internal metadata for future filtering/search. Never rendered as visible `#hashtags` on the page |

### 4. `early_career`
The dateless section at the bottom. Compresses older work without deleting it (the
age-minimization rule: recency focus, no gaps, always keep the Navy line). `items` is a
simple list of strings — no dates, ever.

## Things the site intentionally does NOT do

- **No literal hashtags on bullets** — tags are filter metadata only.
- **Filtering dims, it never deletes** — the whole-self resume stays visible.
- **No PII** — no phone, street address, or email anywhere in this file.
- **NDA masking carries over** — if the knowledge files mask a client (e.g. the
  ConsultNet end-client is never named), this file masks it identically.
