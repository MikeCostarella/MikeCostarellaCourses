# MikeCostarellaCourses — course directory

The hub for every course Mike Costarella teaches or has designed: one card per
course with links to the live course site, the primary repository, and the
supporting repos (student templates, starters, instructor tools). Same stack
and conventions as the rest of the fleet: React + TypeScript + Vite PWA,
deployed to GitHub Pages by GitHub Actions, driven by one typed registry
(`react-app/src/data/courses.ts`).

Created by Mike Costarella, Costarella Innovations, LLC.

## Adding a course

Add an entry to `react-app/src/data/courses.ts`. The card, the menu section
for its institution, the Repositories menu, and the stats all derive from it.
Fields: `id` (URL hash), `title`, `number`, `institution`, `term`, `status`
(`teaching` / `proposed` / `designed` / `archived`), `credits`, `summary`,
`siteUrl`, `repo`, `related[]`, `tags[]`.

## Develop & build

```
cd C:\projects\MikeCostarellaCourses\react-app
npm install
npm run dev
npm run build      # tsc -b && vite build
```

Pushing to `main` triggers the GitHub Pages deploy workflow (set Settings →
Pages → Source to "GitHub Actions" once). Served at
https://mikecostarella.github.io/MikeCostarellaCourses/

## Fleet conventions

Hamburger accordion main menu (View / institutions / Repositories / Links),
build timestamp in the masthead, menu foot, and footer, and the
"© Costarella Innovations, LLC" footer. Base path in `vite.config.ts` must
equal `/MikeCostarellaCourses/`.
