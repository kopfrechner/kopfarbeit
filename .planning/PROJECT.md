# Project: Sodazitron Rebrand

**Goal:** Rebrand "KopfarbeIT" to **"sodazitron.dev"** and implement a high-contrast, neobrutalist "fresh" design.

## Context
The user wants to pivot their existing Astro/Tailwind blog from a dark/tech aesthetic to a "sodazitron" vibe: sour, refreshing, and zesty.
 The new design emphasizes neobrutalism—sharp borders, hard shadows, vibrant acidic colors—and pixel art accents.

## Core Value
**"Freshness."** The site should feel like a cold drink: crisp, distinct, and energizing.

## Key Changes

### 1. Visual Identity (Neobrutalism)
- **Colors:** Acid Lemon (`#DAFF00`), Electric Blue (`#00F0FF`), Magenta (`#FF00EA` for dark mode fizz), Pure Black borders.
- **Typography:**
  - Headers: `Archivo Black` (Chunky, uppercase).
  - Body: `JetBrains Mono` (Dev-friendly, raw).
- **Styling:**
  - Thick borders (`3px solid black`).
  - Hard shadows (`6px` offset, no blur).
  - Hover effects: Translate + Shadow adjustment (tactile feel).

### 2. Assets & Cleanup
- **Remove:** `bg-left.webp`, `bg-right.webp`, `noise.svg`.
- **Add:** Pixel art SVGs (Lemon, Bottle, Leaf) floating as decorations.
- **Background:** Radial gradient dot pattern (cleaner than noise).

### 3. Theming
- **Light Mode:** Creamy Off-White background (`#FFFDF5`).
- **Dark Mode:** Deep Charcoal background (`#121212`) with high-contrast text (`#DAFF00`).
- **Toggle:** Retain functionality but style button to match neobrutal theme.

## Constraints
- **Tech Stack:** Keep Astro v5 + Tailwind v4.
- **Content:** Existing markdown content remains untouched; this is purely a visual/layout layer update.
- **Responsiveness:** Maintain mobile compatibility.

## Reference
- **Design Spec:** Provided HTML/CSS prototype (refer to chat history).
- **Vibe:** "100% natural code. No artificial sweeteners."

