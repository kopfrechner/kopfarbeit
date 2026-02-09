---
author: Christoph Kopf
pubDatetime: 2026-01-31T12:00:00Z
title: Vibe Coding an OpenAPI Viewer Chrome Extension
featured: true
draft: false
tags:
  - chrome-extension
  - openapi
  - scalar
  - gemini-cli
description: How I built a Scalar OpenAPI Viewer Chrome extension using Gemini CLI, navigated the Manifest V3 sandbox, and faced the Google Web Store review process.
---

Today I "vibe coded" a simple [Google Chrome extension](https://chromewebstore.google.com/detail/enljnjkaijiflghcdkhgoimoeecifbdh). It was my first time building one, and I didn't even read the documentation.

I used the **Gemini CLI** and VS Code to create **Scalar OpenAPI Viewer**, a tool to render OpenAPI/Swagger files beautifully using [Scalar](https://scalar.com/). The project is open source: [Scalar Chrome Extension](https://github.com/kopfrechner/scalar-chrome-extension).

The problem was simple: I often hit raw OpenAPI spec files (JSON or YAML) and don't have a proper editor or Swagger UI handy. I wanted a simple, private developer tool to fix that.

## The Process

I started with a vague idea and let the AI drive. I didn't verify permissions or read up on Manifest V3; I just asked Gemini to scaffold the project. We hit walls, broke things, and fixed them. That's "vibe coding" to me—iterating fast with an assistant until the software feels right. Though, i review all changes and want to get a feeling of how the code is working under the hood.

## Technical Hurdles

My [git history](https://github.com/kopfrechner/scalar-chrome-extension/commits/main/) shows exactly where we tripped up.

### 1. The Sandbox

I wanted to use the Scalar API Reference library, so my first instinct was to just load the JS from a CDN. Chrome's Manifest V3 blocked that immediately. The Content Security Policy is strict for extension pages.

To get around it, we moved the viewer logic to a "Sandboxed" page (`viewer.html`). This isolates the scripts from the rest of the extension's privileges but allows them to run.

### 2. The `localStorage` Crash

Once the CDN was working, Scalar crashed anyway. It ignores the sandbox context and tries to access `window.localStorage` to save user preferences (like light/dark mode). In a null-origin sandboxed iframe, that throws a `SecurityError`.

We had to code an in-memory mock to shut it up:

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

I initially asked for `<all_urls>` permission so the extension would work on any page. Google creates a terrifying warning for users when you do that.

I switched to `activeTab` instead. It only grants access to the _current_ tab when you explicitly click the icon. It's better for privacy and (hopefully) speeds up the review.

## The Web Store Experience

I just wanted to share this with people, so I was annoyed to find a **$5 registration fee** for the Chrome Web Store.

The submission process is tedious. Google asks _a lot_ of privacy questions. Easy for me—I'm not collecting anything—but still a chore.

Now I wait. The review process apparently takes weeks, and the worst part is the lock-in. You can't stop or update the submission once it's triggered. I have a footer update ready to go, but I'm locked out until they finish.

## Thoughts

It was a fun experiment. We went from `git init` to submission in Google Chrome Store in exactly **161 minutes** (about 2 hours 40 minutes).

In one session, we went from zero knowledge to a mostly automated, fully functional extension with CI/CD and a privacy policy.

While I wait for Google, you can grab the code or sideload it yourself from the [repository](https://github.com/kopfrechner/scalar-chrome-extension).
