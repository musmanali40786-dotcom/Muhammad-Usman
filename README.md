# Muhammad Usman — Portfolio

A single-page portfolio site styled like an engineering drawing sheet — title
block, drawing numbers, dimension lines — built for a Mechanical Engineering
CAD/manufacturing background.

## What's inside
```
index.html          the page
styles.css           all styling
script.js             gallery + lightbox behavior
assets/images/        SolidWorks renders (already compressed for web)
assets/Muhammad_Usman_Resume.pdf   downloadable résumé
```

## Before you publish — 3 things to fill in

1. **LinkedIn & GitHub links** — open `index.html`, search for `Contact`
   section near the bottom, and replace the two `href="#"` placeholders with
   your real profile URLs.
2. **Résumé file** — `assets/Muhammad_Usman_Resume.pdf` is a copy of the file
   you uploaded. Swap it out any time you update your résumé (keep the same
   filename, or update the `href` in the hero section of `index.html`).
3. **Fire-rescue robot project image** — Project 01 uses a placeholder
   diagram instead of a photo, since none of your uploaded renders matched
   that project. If you have a screenshot or render of it, drop it in
   `assets/images/` and swap the `<div class="blueprint-placeholder">` block
   in `index.html` for an `<img>` tag (copy the pattern used in Project 02).

## Publish it on GitHub Pages (free hosting)

1. Create a new **public** repository on GitHub — name it whatever you like.
   A common convention: `username.github.io` gives you a URL like
   `https://username.github.io` with no extra path. Any other name works
   too, just with `/reponame` in the URL.
2. Upload these files to the repo. Easiest way with no command line:
   - On the repo page, click **Add file → Upload files**
   - Drag in `index.html`, `styles.css`, `script.js`, `README.md`, and the
     whole `assets` folder
   - Commit the changes
3. Go to the repo's **Settings → Pages**
4. Under **Build and deployment → Source**, choose **Deploy from a branch**
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**
6. Wait 1–2 minutes, then refresh — GitHub shows your live URL at the top of
   that Pages settings screen.

### If you prefer git on the command line
```bash
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
Then follow steps 3–6 above.

## Making future edits
Everything is plain HTML/CSS/JS — no build step. Edit `index.html` for
content, `styles.css` for colors/spacing/type, `script.js` for the gallery
list or lightbox behavior. Refresh the page locally to preview, then push to
GitHub — Pages redeploys automatically on every push to `main`.
