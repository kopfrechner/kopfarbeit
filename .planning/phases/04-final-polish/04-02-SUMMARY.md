# Summary: Sharp Layouts & Typography (04-02)

## Objective
Remove all remaining rounded corners from main layout files and global typography to achieve a 100% sharp neobrutalist look.

## Changes
- **src/layouts/Main.astro**: Removed `rounded-md` from all container wrappers.
- **src/layouts/AboutLayout.astro**: Removed `rounded-md` from header and content wrappers.
- **src/layouts/PostDetails.astro**:
    - Removed `rounded-md` from the main container.
    - Updated the "archived" notice block with `border-neo`, `shadow-neo`, and removed `rounded-lg`.
    - Removed `rounded` from the "Copy" code button in the client-side script.
- **src/styles/typography.css**:
    - Removed `rounded` from inline `code` elements.
    - Removed `rounded-sm` from `.highlighted-word`.
    - Applied `border-neo` and `shadow-neo` to `.astro-code` blocks for consistent neobrutalist styling.

## Verification Results
- All main structural containers on Homepage, About, and Post pages are now sharp-edged.
- Inline code and highlighted words are sharp rectangles.
- Code blocks (Shiki) feature neobrutalist borders and shadows.
- Archived notice on post pages matches the new theme.

## Next Steps
- Final sweep: Remove rounding from remaining components and scripts (04-03-PLAN.md).
