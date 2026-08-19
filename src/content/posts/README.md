Drop a `.md` file in this folder to publish a post. This file itself is
ignored by the generator.

```md
---
title: Animating without dropping frames
tag: Performance
blurb: A short one-liner shown on the writing list and preview cards.
date: 2026 · 04
---

The rest of the file is the post body, written in normal markdown.
```

- `title` — shown as the post heading. Falls back to the filename if omitted.
- `tag` / `blurb` — shown on the writing list and home page preview. Omit
  either to leave it blank.
- `date` — optional. Without it, the date is read from the file's creation
  time and formatted as `YYYY · MM`. Set it explicitly to override.
- The slug (its URL and React Router param) is derived from the filename:
  lowercased, non-alphanumeric runs collapsed to `-`. `My First Post.md`
  becomes `/writing/my-first-post`.

Nothing needs to be run by hand — `src/data/posts.ts` regenerates on the
next dev reload or build.
