# Architecture

**Analysis Date:** 2025-02-14

## Pattern Overview

**Overall:** Static Site Generator (SSG) with Astro

**Key Characteristics:**
- **Content-Driven:** Built primarily around Markdown content collections managed via Astro Content Layer.
- **Islands Architecture:** Minimizes client-side JavaScript by only hydrating specific components (e.g., `src/components/Comments.tsx`).
- **File-based Routing:** Routes are defined by the file structure in `src/pages/`.

## Layers

**Content Layer:**
- Purpose: Manages the blog posts and their metadata.
- Location: `src/data/blog`
- Contains: Markdown files (`.md`).
- Depends on: `src/content.config.ts` for schema validation.
- Used by: Pages and layouts to render content.

**Page Layer:**
- Purpose: Defines the entry points and routes for the website.
- Location: `src/pages`
- Contains: Astro components (`.astro`) and API endpoints (`.ts`).
- Depends on: Layouts and Components.
- Used by: Astro build process.

**Layout Layer:**
- Purpose: Provides reusable structural wrappers for pages.
- Location: `src/layouts`
- Contains: Astro components like `Layout.astro` and `PostDetails.astro`.
- Depends on: Global styles and common components (Header, Footer).
- Used by: Pages.

**Component Layer:**
- Purpose: Reusable UI elements.
- Location: `src/components`
- Contains: Astro components and framework-specific components (e.g., React/TSX for Giscus).
- Depends on: Styles and Assets.
- Used by: Layouts and Pages.

## Data Flow

**Blog Post Rendering:**

1. **Content Fetching:** `getCollection("blog")` is called in `src/pages/posts/[...slug]/index.astro`.
2. **Path Generation:** `getStaticPaths` maps post IDs to slugs using `src/utils/getPath.ts`.
3. **Layout Rendering:** The selected post is passed to `src/layouts/PostDetails.astro`.
4. **Content Transformation:** `render(post)` converts Markdown to HTML content.

**State Management:**
- **Theme:** Handled via a script in `public/toggle-theme.js` that interacts with `localStorage`.
- **Static:** Most state is resolved at build time.

## Key Abstractions

**Content Schema:**
- Purpose: Ensures type safety for blog post frontmatter.
- Examples: `src/content.config.ts`
- Pattern: Zod schemas.

**Post Filtering & Sorting:**
- Purpose: Centralized logic for handling draft posts, scheduled posts, and sorting by date.
- Examples: `src/utils/getSortedPosts.ts`, `src/utils/postFilter.ts`
- Pattern: Utility functions.

## Entry Points

**Home Page:**
- Location: `src/pages/index.astro`
- Triggers: Root URL (`/`)
- Responsibilities: Displays featured and recent posts.

**Post Details:**
- Location: `src/pages/posts/[...slug]/index.astro`
- Triggers: Post URLs (`/posts/[slug]`)
- Responsibilities: Fetches and displays a specific blog post.

**RSS Feed:**
- Location: `src/pages/rss.xml.ts`
- Triggers: `/rss.xml`
- Responsibilities: Generates the RSS feed dynamically at build time.

## Error Handling

**Strategy:** Build-time validation and 404 page.

**Patterns:**
- **Schema Validation:** Zod validates frontmatter during build, throwing errors for missing required fields in `src/content.config.ts`.
- **404 Page:** `src/pages/404.astro` handles non-existent routes.

## Cross-Cutting Concerns

**Logging:** Minimal, primarily using console logs during the build process if needed.
**Validation:** Handled by Zod in the content layer.
**Authentication:** Not applicable (public static site).
**SEO:** Managed in `src/layouts/Layout.astro` via meta tags and JSON-LD structured data.

---

*Architecture analysis: 2025-02-14*
