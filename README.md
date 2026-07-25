# Ram Mohan — Portfolio

Public **Impact Atlas** portfolio for [Ram Mohan](mailto:ram10.rm6@gmail.com), Senior Android Engineer.

Live site (after Pages is enabled):  
[https://raiden1001.github.io/ram-mohan-portfolio/](https://raiden1001.github.io/ram-mohan-portfolio/)

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Content

Edit [`src/data/resume.js`](src/data/resume.js) for name, metrics, projects, and social links.

Set `social.linkedin` and `social.github` to your real profile URLs (placeholders ship as `#`).

## Deploy (GitHub Pages)

1. Push this repo to GitHub (public).
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow).

Vite `base` is set to `/ram-mohan-portfolio/` in [`vite.config.js`](vite.config.js). If you rename the repo, update that path.
