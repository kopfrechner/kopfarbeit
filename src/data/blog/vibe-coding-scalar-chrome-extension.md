---
author: Christoph Kopf
pubDatetime: 2026-01-31T12:00:00Z
title: Vibe Coding a OpenAPI Viewer Chrome Extension
featured: true
draft: false
tags:
  - chrome-extension
  - openapi
  - scalar
  - gemini-cli
description: How I built a Scalar OpenAPI Viewer Chrome extension using Gemini CLI, navigated the Manifest V3 sandbox, and faced the Google Web Store review process.
---

Today I "vibe coded" a simple Google Chrome extension. It was my first time building one, and I did it without even really knowing how they work under the hood.

I used the **Gemini CLI** and VS Code to create **Scalar OpenAPI Viewer**, a tool to render OpenAPI/Swagger files beautifully using [Scalar](https://scalar.com/). The project is open source and located here: [Scalar Chrome Extension](https://github.com/kopfrechner/scalar-chrome-extension).

The problem was simple: I regularly face raw OpenAPI spec files (JSON or YAML) without a proper editor or Swagger UI handy. I wanted to solve this pain point with a simple, private developer tool.

## The Process: "Vibe Coding"

I started with a vague idea and let the AI guide me. I didn't read the Chrome Extension documentation first; I just asked Gemini to help me scaffold the project. We hit walls, we broke things, and we fixed them. That's the essence of "vibe coding"—iterating fast with an intelligent assistant until the software matches the vibe you're going for.

## Technical Challenges

Looking back at the [git history](https://github.com/kopfrechner/scalar-chrome-extension/commits/main/), you can see the specific hurdles we jumped.

### 1. The Sandbox & CDN Dilemma

I wanted to use the Scalar API Reference library. My first instinct was to just load the JS files from a CDN.

- **The Block:** Chrome's Manifest V3 has a strict Content Security Policy (CSP) that blocks external scripts in standard extension pages.
- **The Fix:** We had to move the viewer logic to a "Sandboxed" page (`viewer.html`). This allows us to run scripts that would otherwise be blocked, but it isolates them from the rest of the extension's privileges.

### 2. The `localStorage` Crash

Once we got the CDN working in the sandbox, the Scalar library immediately crashed.

- **The Bug:** Scalar tries to access `window.localStorage` to save user preferences (like light/dark mode). In a null-origin sandboxed iframe, accessing `localStorage` throws a `SecurityError`.
- **The Fix:** We had to implement an in-memory mock to satisfy the library.

```javascript
// viewer.js
try {
  window.localStorage;
} catch (e) {
  // Mock localStorage to prevent SecurityError
  const store = {};
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: key => store[key] || null,
      setItem: (key, value) => {
        store[key] = String(value);
      },
      // ... rest of the mock
    },
    // ...
  });
}
```

### 3. Permission Anxiety

Initially, I requested `<all_urls>` permission because I wanted the extension to work on any page.

- **The Warning:** Google creates a scary warning for users and reviewers when you ask for broad access.
- **The Pivot:** We switched to `activeTab`. This is much friendlier—it only grants access to the _current_ tab when the user explicitly clicks the extension icon. It’s better for privacy and (hopefully) speeds up the review.

## The Store Experience

I just wanted to contribute and make this accessible for others, so I paid the **$5 registration fee** for the Chrome Web Store.

Then came the submission process.

1.  **Privacy Questions:** Google asks _a lot_ of questions. In my case, it was easy: **no data is collected at all.** It's purely a client-side tool.
2.  **The Waiting Game:** It is now in the review process, which can apparently take weeks.
3.  **The Lock-in:** The most annoying part is that you can't stop the process once triggered. I wanted to release some more changes (like a footer update), but I'm locked out until they finish the review.

## Conclusion

It was a fun experiment in AI-assisted development. I went from "zero knowledge" to a "submitted extension" in a single session.

Now I am waiting for Google to review it. If you want to build your own or sideload it while I wait, check out the [repository](https://github.com/kopfrechner/scalar-chrome-extension).
