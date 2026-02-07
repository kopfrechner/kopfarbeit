# Phase 1 Context: Styling Baseline

## Implementation Decisions

### 1. Color Palette & Variables
The theme uses a high-contrast neobrutalist palette with specific overrides for dark mode.
- **Zest (Primary Accent):** `#DAFF00` (Acid Lemon).
- **Fizz (Secondary Accent):** `#00F0FF` (Electric Blue) in Light Mode; `#FF00EA` (Magenta) in Dark Mode.
- **Ink:** `#000000` (Used for borders and light-mode shadows).
- **Backgrounds:**
    - Light: `#FFFDF5` (Main), `#FFFFFF` (Cards).
    - Dark: `#121212` (Main), `#252525` (Cards).
- **Text:**
    - Light: `#1A1A1A`.
    - Dark: `#DAFF00` (Zest color for high-contrast reading).

### 2. Typography
- **Headings (H1-H6) & Brand:** `Archivo Black`.
    - Style: Uppercase, `letter-spacing: -1px`.
- **Body & Metadata:** `JetBrains Mono`.
    - Style: Standard weight for readability.

### 3. Visual Primitives (The "Neo" Look)
- **Borders:** Constant `3px` solid `#000000` (Ink) in both Light and Dark modes.
- **Shadows:** 
    - Offset: `6px 6px 0px`.
    - Light Mode: Ink (`#000000`).
    - Dark Mode: White (`#FFFFFF`) for high contrast.
- **Hover States:** Elements translate `(-2px, -2px)` with a corresponding shadow increase to simulate a "lift" off the page.

### 4. Background Pattern
- **Type:** Fixed dot grid (`radial-gradient`).
- **Dimensions:** `1px` dots on a `40px 40px` grid.
- **Behavior:** `background-attachment: fixed`.
- **Dark Mode:** Dots must be inverted (Light dots on Dark background).

### 5. Scope & Identity
- **Site Identity:** Rename all instances of "KopfarbeIT" to "soda-zitrone.dev".
- **Asset Purge:** Delete `bg-left.webp`, `bg-right.webp`, and `noise.svg` as they are replaced by the CSS dot pattern.
