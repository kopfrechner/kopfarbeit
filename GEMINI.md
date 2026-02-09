# GEMINI.md - Sodazitron

## Project Overview
**Sodazitron** is the personal blog and digital playground of **Christoph Kopf**. It is a static site built using **Astro v5** and **TailwindCSS v4**, based on a customized version of the [AstroPaper](https://github.com/satnaing/astro-paper) theme. The blog serves as a professional portfolio and knowledge base, focusing on .NET, modern web technologies (Kotlin, Spring, Astro), and AI-assisted development.

### Key Technologies
- **Framework**: [Astro v5](https://astro.build/) (SSG)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **Search**: [Pagefind](https://pagefind.app/) for static site search
- **Content**: Markdown with Astro Content Collections
- **Comments**: [Giscus](https://giscus.app/) (GitHub Discussions)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **UI Components**: Primarily `.astro` components, with React (`.tsx`) for interactive features like comments.

## Architecture
The project follows the standard Astro structure with a focus on content-driven development:
- **`src/data/blog/`**: Contains the blog post Markdown files.
- **`src/content.config.ts`**: Defines the `blog` collection schema (author, date, title, tags, etc.).
- **`src/layouts/`**: Base layouts like `Layout.astro` and specialized ones like `PostDetails.astro`.
- **`src/components/`**: Reusable UI components (Buttons, Cards, Socials, etc.).
- **`src/pages/`**: Routing and page templates (Index, About, Posts, Tags, Search).
- **`src/utils/`**: Helper functions for sorting posts, slugifying, and OG image generation.

## Building and Running
The project uses `npm` for task execution:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `localhost:4321`. |
| `npm run build` | Performs `astro check`, builds the static site, and runs `pagefind` indexing. |
| `npm run preview` | Previews the production build locally. |
| `npm run format` | Formats the codebase using **Prettier**. |
| `npm run lint` | Lints the code using **ESLint**. |
| `npm run sync` | Generates TypeScript types for content collections. |

## Development Conventions
- **Path Aliases**: Use `@/` to refer to the `src/` directory (e.g., `import Layout from "@/layouts/Layout.astro"`).
- **Quality Control**: Run the linter (`npm run lint`) and code formatter (`npm run format`) often to ensure code quality and consistent styling.
- **Formatting Rule**: ALWAYS run `npm run format` before committing changes to ensure the CI pipeline passes.
- **Content Schema**: All blog posts must adhere to the schema defined in `src/content.config.ts`.
- **Styling**: Favor Tailwind CSS utility classes. The project uses the latest Tailwind v4 engine via Vite.
- **Type Safety**: The project uses **TypeScript** and **astro-check** to ensure type safety across the codebase and content collections.
- **Static Search**: Search functionality depends on **Pagefind**. Remember that search only works after a full build (`npm run build`).
- **OG Images**: Dynamic Open Graph images are generated during the build process using `satori` and `resvg-js`.

## Key Files
- `astro.config.ts`: Main Astro and Vite configuration, including Tailwind and Markdown plugins.
- `src/config.ts`: Global site configuration (site URL, author, posts per page, etc.).
- `src/content.config.ts`: Content collection definitions and validation schemas.
- `package.json`: Dependency management and build scripts.
