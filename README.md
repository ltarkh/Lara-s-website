# Lara Tarkh — Academic Website

Static site, no build step. Each section is its own page, so nothing is one long scroll.

| Page | File |
|------|------|
| Home (profile, short bio, interests, recent news) | `index.html` |
| Bio (biography, education, experience, honours, skills) | `bio.html` |
| Research (themes, projects) | `research.html` |
| Publications (stats, numbered list, links, BibTeX) | `publications.html` |
| Talks | `talks.html` |
| Awards & funding | `awards.html` |
| Teaching & mentoring | `teaching.html` |
| News | `news.html` |
| Not-found page (GitHub Pages / Netlify use it automatically) | `404.html` |

Logos are loaded from each institution's website icon (falls back to a monogram).

Shared: `style.css` (colors at the top, light + dark), `script.js` (theme toggle, BibTeX), `profile.jpg`.

## Before publishing

1. **CV** — add your CV as `cv.pdf` next to `index.html` (linked from Home and Bio).
2. Delete the old `profile.png` from the repo; the site now uses `profile.jpg`.

## Common edits

- **Add a paper:** in `publications.html`, copy one `<li>…</li>` inside `<ol class="pubs">`,
  change the citation and the BibTeX, and give its `id="bib-N"` and the two `data-…="bib-N"`
  buttons a new number. Update the counts in the stats boxes.
- **Add news:** add a `<li><time>Mon YYYY</time><div>…</div></li>` at the top of the list in
  `news.html`; copy it into the three-item list on `index.html` too.
- **Nav:** the tab list is repeated at the top of each page — edit all pages if you add one.

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
