# External Integrations

**Analysis Date:** 2024-02-12

## APIs & External Services

**Comments:**
- **Giscus** - GitHub Discussions powered comments
  - SDK/Client: `@giscus/react`
  - Config: `src/constants.ts` (Repo: `kopfrechner/kopfarbeit`, RepoId: `R_kgDOQ0ON2A`)
  - Usage: `src/components/Comments.tsx`

**Search:**
- **Pagefind** - Static search indexing
  - Integration: Custom hook in `astro.config.ts` executes `npx pagefind` after build
  - Index location: `dist/pagefind` (copied to `public/pagefind` in build script)
  - Usage: `src/pages/search.astro`

## Data Storage

**Content:**
- **Local Filesystem** - Markdown files in `src/data/blog/`
  - Managed via Astro Content Collections (`src/content.config.ts`)

## Authentication & Identity

**None Detected** - Public static site.
- Admin/Auth via GitHub (for Giscus comments and content editing via git)

## Monitoring & Observability

**SEO & Analytics:**
- **Google Site Verification**
  - Env Var: `PUBLIC_GOOGLE_SITE_VERIFICATION` (Optional)
  - Configured in `astro.config.ts` env schema

## CI/CD & Deployment

**Hosting:**
- **Cloudflare Pages**
  - Target: Static files in `dist/`
  - Referenced in `README.md` as deployment target.

**CI Pipeline:**
- **GitHub Actions**
  - Workflows in `.github/workflows/`:
    - `ci.yml`: Likely build and test checks
    - `dependabot-auto-merge.yml`: Dependency management

## Environment Configuration

**Required env vars:**
- `PUBLIC_GOOGLE_SITE_VERIFICATION` (Optional, client-side accessible)

**Secrets location:**
- Likely GitHub Secrets for CI/CD context.
- No `.env` file content inspected (forbidden).

## Webhooks & Callbacks

**Outgoing:**
- **Social Sharing**
  - Hardcoded links in `src/constants.ts` (`SHARE_LINKS`) for X, LinkedIn, WhatsApp, etc.

---

*Integration audit: 2024-02-12*
