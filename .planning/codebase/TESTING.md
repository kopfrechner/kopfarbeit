# Testing Patterns

## Current State
- **Test Runner:** None currently configured in `package.json`.
- **Unit Tests:** No unit tests (`*.test.ts` or `*.spec.ts`) found in the codebase.
- **Integration Tests:** No E2E or integration tests (e.g., Playwright, Cypress) detected.

## Verification Workflow
- **Type Checking:** The project relies on `astro check` and TypeScript compilation (`tsc`) for static analysis.
- **Build Verification:** The `npm run build` command performs `astro check` before building.

## Recommendations
- Introduce **Vitest** for unit testing utility functions in `src/utils/`.
- Introduce **Playwright** for E2E testing of critical paths (e.g., search, navigation, post rendering).
