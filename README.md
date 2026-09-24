# Lara Tarkh — Academic Website

A fast, static academic site. No build step, no framework — just HTML, CSS, and a small
vanilla JS file. Deploy free on GitHub Pages, Netlify, or Cloudflare Pages.

## Structure

| File | What it is |
|------|-----------|
| `index.html` | Home: hero, about, education, research focus, selected publications, skills, contact |
| `publications.html` | Full publications list with a bibliometrics strip |
| `style.css` | All styling. Plum/rose palette with dark + light themes (CSS variables at the top) |
| `script.js` | Theme toggle (remembers your choice), mobile menu, navbar shadow, BibTeX toggles |
| `profile.png` | Profile photo |
| `sitemap.xml`, `robots.txt` | SEO |

The `Webiste-main 2/` folder is kept as the original source material and is not part of the
published site.

## Editing content

Everything lives directly in the HTML — open `index.html` or `publications.html` and edit the
text. Common edits:

- **Email:** search for `your.email@example.com` (two places in `index.html`) and replace it.
- **Add a publication:** copy an existing `<li class="pub-entry">` block in `publications.html`.
- **Colors:** change the CSS variables under `[data-theme="dark"]` / `[data-theme="light"]` at
  the top of `style.css`.
- **Photo:** replace `profile.png`.

## Run locally

```bash
# from this folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push these files to a repo (e.g. `laratarkh.github.io`).
2. In the repo, go to **Settings → Pages** and set the source to the `main` branch, root folder.
3. Update the `laratarkh.com` URLs in the meta tags and `sitemap.xml` if you use a different domain.
