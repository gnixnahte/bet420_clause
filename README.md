# Clause × Socially

A complete, local-only frontend demonstration of a fictional privacy companion layered over a fictional social platform. Built with React, TypeScript, Vite, Tailwind CSS, Lucide React, and Framer Motion.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Open the URL printed by Vite (normally http://localhost:5173).

```sh
npm run build
npm run preview
```

The production bundle is in `dist/`. Serve it using any static HTTP server. After dependencies are installed, development, builds, and the application work without internet access. All fonts, artwork, legal content, icons, and analysis are bundled locally. There are no runtime API requests, remote assets, authentication, or backend. Do not open `index.html` directly as a file; use the local server.

## 60–90 second pitch

1. Start on Socially’s homepage.
2. Click **Privacy & you** and scroll through the eight-section policy.
3. Click the Clause brand tab on the right edge (or the matching mark in the simulated browser toolbar).
4. Click **Analyze Privacy Policy** and wait about three seconds.
5. Show the overview, then choose **Key findings**.
6. Select “Your activity can travel beyond Socially.” The page scrolls to section 4 and highlights its original source text.
7. Show the plain-English explanation and “Why this matters.” Expand the original excerpt to compare it directly.
8. Open **Privacy basics** for short explanations of common privacy concepts.

The reset icon in Clause returns analysis to its initial state and clears the source highlight. Closing the panel preserves the result for a smooth presentation. Escape closes overlays. Policy and Terms links support URL hashes and browser back/forward.

## Content and behavior

`src/data.ts` is the single source of truth for fictional policy passages and predetermined explanations. Findings reference real section IDs and render their original excerpts directly from the policy data. Analysis always produces the same five findings; it does not inspect another website or use AI.

The local sign-up form validates its fields but stores and sends nothing. Cookie controls persist demonstration preferences in localStorage; the application never actually tracks or serves advertising. Optional preferences default to off. Legal documents are original fictional examples, not legal advice. All branding uses Clause.

## Brand assets

The supplied brand references are recreated as local, transparent SVG assets in `public/clause-mark.svg` and `public/clause-wordmark.svg`. The full Clause lockup appears in the panel header; the standalone folded-page mark appears on the floating right-edge launcher and toolbar. These are vector recreations of the reference images.
