# Codebase Structure

**Analysis Date:** 2025-02-14

## Directory Layout

```
[project-root]/
├── public/             # Static assets (favicons, scripts, images)
├── src/
│   ├── assets/         # Managed assets (icons, images)
│   ├── components/     # Reusable UI components
│   ├── config.ts       # Site configuration
│   ├── constants.ts    # Shared constants (social links, etc.)
│   ├── content.config.ts # Content collection definitions
│   ├── data/           # Content source (blog posts)
│   ├── layouts/        # Page layout templates
│   ├── pages/          # Routing entry points
│   ├── styles/         # Global CSS and typography
│   └── utils/          # Helper functions and logic
├── astro.config.ts     # Astro framework configuration
└── package.json        # Dependencies and scripts
```

## Directory Purposes

**src/pages:**
- Purpose: Defines the URL structure and routing for the site.
- Contains: Astro components for HTML routes and TypeScript files for API-like endpoints (RSS, robots.txt).
- Key files: `src/pages/index.astro`, `src/pages/posts/[...slug]/index.astro`.

**src/layouts:**
- Purpose: Shared structure across multiple pages.
- Contains: Astro components that wrap page content.
- Key files: `src/layouts/Layout.astro` (base), `src/layouts/PostDetails.astro` (posts).

**src/components:**
- Purpose: Small, reusable UI units.
- Contains: Astro components and some React components (TSX).
- Key files: `src/components/Header.astro`, `src/components/Footer.astro`, `src/components/Comments.tsx`.

**src/data/blog:**
- Purpose: The actual content of the blog.
- Contains: Markdown (`.md`) files.
- Key files: All blog post files.

**src/utils:**
- Purpose: Decouples business logic from UI components.
- Contains: Helper functions for sorting, filtering, and path generation.
- Key files: `src/utils/getSortedPosts.ts`, `src/utils/getPath.ts`.

## Key File Locations

**Entry Points:**
- `src/pages/index.astro`: The homepage.
- `src/pages/posts/[...page].astro`: The paginated list of all posts.

**Configuration:**
- `astro.config.ts`: Main Astro config.
- `src/config.ts`: User-defined site settings (title, author, etc.).
- `src/constants.ts`: Social media and external service settings.

**Core Logic:**
- `src/content.config.ts`: Defines the blog content schema and loader.

**Testing:**
- Not detected (no dedicated `tests` directory or standard test file patterns found in initial scan).

## Naming Conventions

**Files:**
- Astro Components: PascalCase (e.g., `Card.astro`, `BackButton.astro`).
- Utilities/Scripts: camelCase (e.g., `slugify.ts`, `postFilter.ts`).
- Pages: lowercase or bracketed for dynamic routes (e.g., `index.astro`, `[...slug].astro`).

**Directories:**
- lowercase (e.g., `components`, `layouts`, `utils`).

## Where to Add New Code

**New Blog Post:**
- Primary code: `src/data/blog/your-post-title.md`

**New Route/Page:**
- Primary code: `src/pages/your-page-name.astro`

**New Reusable Component:**
- Implementation: `src/components/YourComponent.astro`

**Shared Logic:**
- Implementation: `src/utils/yourHelper.ts`

## Special Directories

**public/:**
- Purpose: Files here are served directly at the root path.
- Generated: No.
- Committed: Yes.

**.astro/:**
- Purpose: Local cache and generated types for content collections.
- Generated: Yes.
- Committed: No.

---

*Structure analysis: 2025-02-14*
