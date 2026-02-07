# Coding Conventions

## File Naming
- **General Files:** Use kebab-case (e.g., `eslint.config.js`, `astro.config.ts`, `src/utils/get-sorted-posts.ts`).
- **Astro Components:** Use PascalCase (e.g., `src/components/Card.astro`, `src/components/BackButton.astro`).
- **React Components:** Use PascalCase (e.g., `src/components/Comments.tsx`).

## Code Style
- **Functions & Variables:** Use camelCase (e.g., `getSortedPosts`, `postFilter`).
- **Types:** Use TypeScript in strict mode. Prefer type imports: `import type { CollectionEntry } from "astro:content";`.
- **Formatting:** Managed by Prettier (`.prettierrc.mjs`).
  - Indentation: 2 spaces.
  - Quotes: Double quotes.
  - Semi-colons: Always.
  - Plugins: `prettier-plugin-astro`, `prettier-plugin-tailwindcss`.

## Linting
- **ESLint:** Managed by `eslint.config.js`.
- **Rules:** Uses recommended rules for TypeScript and Astro. `no-console` is enforced as an error.

## Path Aliases
- Use `@/` to refer to the `src/` directory (e.g., `import Layout from "@/layouts/Layout.astro"`).
