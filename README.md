# Kenta Vert — personal website

Plain HTML/CSS site (no build step) ready for GitHub Pages.

```
index.html          About, news, publications
publications.html   Full publication list
cv.html             CV + PDF download
404.html            "Page not found" page
assets/css/style.css  All styling (change --accent to re-color)
assets/img/         kenta-square.jpg (photo), lizard_mmse_s255.png + lizard_proximap_s255.png (paper teaser), favicon.svg
assets/js/site.js   Copy-email and BibTeX buttons
assets/cv.pdf       Copy of Kenta_CV_short.pdf — re-copy it when your CV changes
.nojekyll           Tells GitHub Pages to serve files as-is
```

## 1. Fill in your content

The content comes from `~/Documents/CV/cv_content.tex` (short-CV selection).

**Link previews:** the `og:` lines at the top of each page assume the site lives at
`https://kentavert.github.io/`. If your GitHub username is different, search-and-replace
that URL in `index.html`, `publications.html` and `cv.html`.

- **Photo:** replace `assets/img/kenta-square.jpg` (square, ~500×500 px works best).
- **CV:** copy the latest `Kenta_CV_short.pdf` over `assets/cv.pdf`.
- **New paper:** copy the `<article class="pub has-thumb">…</article>` block in `publications.html` (and `index.html`); give its BibTeX `id`/`aria-controls` a new name, and swap the two teaser images (square, e.g. 256×256 px).
- **News item:** copy an `<li>` in the News list on `index.html`.

Preview locally: open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## 2. Publish on GitHub Pages

1. On GitHub, create a **public** repository named exactly `USERNAME.github.io` (your GitHub username). Don't add a README.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin git@github.com:USERNAME/USERNAME.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`, Save.
4. After a minute or two the site is live at `https://USERNAME.github.io`.

To update later: edit files, then `git add . && git commit -m "Update" && git push`.

**Using a different repo name** (e.g. `website`) also works, but the site will live at
`https://USERNAME.github.io/website/` and the 404 page's `/assets/...` links need the `/website` prefix.

**Custom domain (optional):** Settings → Pages → Custom domain, then add the DNS records GitHub shows you.
