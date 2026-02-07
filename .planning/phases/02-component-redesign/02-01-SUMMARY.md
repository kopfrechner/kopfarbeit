# Summary: Neobrutalist Primitives (02-01)

## Objective
Transform core UI primitives (Cards, Buttons, Tags) into tactile, high-contrast neobrutalist elements.

## Changes
- **src/components/LinkButton.astro**: 
    - Added `variant` prop ("link" | "button").
    - Implemented `button` variant with `border-neo`, `shadow-neo`, and `hover-neo` classes.
- **src/components/Tag.astro**:
    - Updated to use `LinkButton` with `variant="button"`.
    - Removed rounded corners and adjusted padding for a "tactile" feel.
- **src/components/Card.astro**:
    - Removed all `rounded-*` classes.
    - Updated typography to use `font-heading` (Archivo Black) for titles.
    - Increased padding and updated hover effects for consistency.
- **src/pages/index.astro**:
    - Cleaned up `rounded-md` leftovers from homepage sections.
    - Updated "All Posts" link to use `LinkButton` with `variant="button"`.
    - Applied `font-heading` to homepage section titles and hero.

## Verification Results
- Cards are sharp-edged (no rounding).
- Tags and Buttons "jump" up-left on hover.
- Shadow offsets are 6px (hard).
- Borders are 3px (solid).
- "All Posts" button is now a high-contrast neobrutalist element.

## Next Steps
- Implement SVG-based pixel art components for Lemon, Bottle, and Leaf (02-02-PLAN.md).
