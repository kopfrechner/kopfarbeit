# Codebase Concerns

## Test Coverage Gaps
- **High Risk:** Lack of automated tests for core logic in `src/utils/` (sorting, filtering, slugification). Regressions could easily be introduced during refactoring.
- **Verification:** Relies solely on manual testing and static analysis (`astro check`).

## Tech Debt & Maintenance
- **Maintenance:** Project lacks a regular dependency audit and update workflow beyond basic Dependabot usage.
- **Type Safety:** Potential for `any` usage or loose typing in complex generic functions within content collection logic.

## Performance
- **Build Times:** Post sorting and tag generation (`getSortedPosts`, `getUniqueTags`) iterate over the entire collection. As the number of posts grows, this could impact build performance.
- **Static Assets:** Ensure OG image generation remains performant and doesn't bottleneck the build process.

## Fragility
- **Dynamic Routing:** `src/pages/posts/[...slug].md.ts` handles catch-all routing which can be fragile if slug generation patterns change.
- **Search Indexing:** Pagefind search only works after a full build, which can lead to confusion during local development if `npm run build` hasn't been executed recently.
