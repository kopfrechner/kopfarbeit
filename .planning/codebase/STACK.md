# Technology Stack

**Analysis Date:** 2024-02-12

## Languages

**Primary:**
- TypeScript 5.9.3 - Used for configuration, components, and logic (`tsconfig.json`)
- Astro - Used for page templates and layouts (`src/**/*.astro`)
- Markdown/MDX - Used for content authoring (`src/content/`)

**Secondary:**
- CSS - Used for global styles and Tailwind configuration (`src/styles/global.css`)
- React 19.2.4 - Used for interactive components like Comments (`src/components/Comments.tsx`)

## Runtime

**Environment:**
- Node.js (Implied by `package.json` scripts)

**Package Manager:**
- npm (Implied by `package-lock.json` presence, though `pnpm-lock.yaml` also exists. `package.json` scripts use `astro` directly or `npx`)
- Lockfile: `package-lock.json` and `pnpm-lock.yaml` present.

## Frameworks

**Core:**
- Astro v5.17.1 - Static Site Generator (`astro.config.ts`)

**Styling:**
- Tailwind CSS v4.1.18 - Utility-first CSS framework
  - Configured via `@tailwindcss/vite` plugin in `astro.config.ts`
  - Imported in `src/styles/global.css` via `@import "tailwindcss";`

**UI Library:**
- React v19.2.4 - Used for islands architecture (e.g., Search, Comments)
  - Integration: `@astrojs/react`

**Testing/Quality:**
- ESLint v9.39.2 - Linting (`eslint.config.js`)
- Prettier v3.8.1 - Formatting (`.prettierrc.mjs`)

## Key Dependencies

**Content & Data:**
- `@astrojs/rss` v4.0.15 - RSS feed generation
- `@astrojs/sitemap` v3.7.0 - Sitemap generation
- `remark-toc` / `remark-collapse` - Markdown table of contents processing

**Search:**
- `pagefind` v1.4.0 - Static search library
  - Integrated via custom hook in `astro.config.ts`
  - UI: `@pagefind/default-ui`

**Image Processing:**
- `sharp` v0.34.5 - Image optimization
- `satori` v0.19.1 - Open Graph image generation

**Interactivity:**
- `@giscus/react` v3.1.0 - Comments system powered by GitHub Discussions

## Configuration

**Environment:**
- `astro.config.ts` - Main Astro configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - Linting rules

**Build:**
- Scripts in `package.json`:
  - `dev`: `astro dev`
  - `build`: `astro check && astro build && pagefind --site dist && cp -r dist/pagefind public/` (Includes Pagefind indexing)

## Platform Requirements

**Development:**
- Node.js environment
- VS Code (recommended extensions in `.vscode/extensions.json`)

**Production:**
- Cloudflare Pages
  - Static hosting optimized for Astro
  - No specific `wrangler.toml` found, likely configured via Dashboard or implicit defaults.

---

*Stack analysis: 2024-02-12*
