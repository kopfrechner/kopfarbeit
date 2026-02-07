# Roadmap: Soda Zitrone Rebrand

**Goal:** Rebrand "KopfarbeIT" to "soda-zitrone.dev", implementing a high-contrast, neobrutalist aesthetic that emphasizes freshness and tactile interaction.

## Phase 1: Styling Baseline
**Goal:** Establish the core visual language, color palette, and foundational identity of Soda Zitrone.

**Plans:** 3 plans
- [ ] 01-01-PLAN.md — Branding & Cleanup
- [ ] 01-02-PLAN.md — CSS Foundation (Vars & Fonts)
- [ ] 01-03-PLAN.md — Global Layout & Background

### Requirements
- **SYS-01**: Implement core neobrutalist CSS variables (Zest, Fizz, Ink, Hard Shadow).
- **SYS-02**: Integrate "Archivo Black" and "JetBrains Mono" fonts.
- **SYS-03**: Implement dot-pattern background and remove legacy noise/bg assets.
- **SYS-04**: Robust light/dark mode support with high-contrast color shifts.
- **AST-01**: Clean up @public/images/ (remove bg-left, bg-right, noise.svg).
- **PAGE-02**: Update global metadata (title, site URL) to `soda-zitrone.dev`.

### Success Criteria
1. The site uses the new "Acid Lemon" and "Creamy Off-White" color palette.
2. Typography is exclusively "Archivo Black" (headings) and "JetBrains Mono" (body).
3. The background is a clean dot pattern; legacy noise/blobs are gone.
4. Browser tab displays "soda-zitrone.dev".

## Phase 2: Component Redesign
**Goal:** Transform core UI primitives into tactile, high-contrast neobrutalist elements.

### Requirements
- **COMP-01**: Redesign `Card.astro` with thick borders and hard shadows.
- **COMP-03**: Update buttons and tags to use neobrutalist hover translations.
- **AST-02**: Implement SVG-based pixel art components for Lemon, Bottle, and Leaf.

### Success Criteria
1. Cards have 3px solid black borders and 6px hard shadows.
2. Buttons and tags visually "jump" (translate) when hovered.
3. Pixel art decorations (lemon, bottle) appear correctly in components.

## Phase 3: Page Implementation
**Goal:** Apply the new branding to the site's structural layout and main landing areas.

### Requirements
- **COMP-02**: Redesign `Header.astro` and `Footer.astro` with "soda-zitrone" branding.
- **PAGE-01**: Update homepage Hero section with "Freshly Squeezed" theme.

### Success Criteria
1. The Hero section features high-impact, "Freshly Squeezed" typography.
2. Header and Footer are consistent with the neobrutalist theme.
3. Navigation elements are chunky and high-contrast.

## Phase 4: Final Polish
**Goal:** Ensure complete aesthetic consistency across all secondary features and edge cases.

### Requirements
- **COMP-04**: Ensure search and comments components match the new aesthetic.

### Success Criteria
1. Search modal/bar matches the site's thick-border style.
2. Comment section blends seamlessly with the theme (no default styles leaking).
3. Mobile responsiveness is verified; elements stack cleanly without breaking borders.

## Progress

| Phase | Status | Requirements |
|-------|--------|--------------|
| 1. Styling Baseline | **Pending** | 6 |
| 2. Component Redesign | **Pending** | 3 |
| 3. Page Implementation | **Pending** | 2 |
| 4. Final Polish | **Pending** | 1 |