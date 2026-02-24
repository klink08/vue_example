# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with hot-reload
npm run build      # Production build
npm run preview    # Preview production build
npm run test       # Run tests (watch mode)
npm run coverage   # Run tests with coverage report
```

To run a single test file:
```bash
npx vitest run src/components/dashboard/__test__/dashboard.spec.js
```

Node version is pinned to v24.1.0 via `.nvmrc`.

## Code Style

Prettier is configured with: no semicolons, single quotes, 2-space tabs, ES5 trailing commas.

## Architecture

Vue 3 SPA using Pinia for state management and Tailwind CSS 4 (via Vite plugin).

- `src/App.vue` — root component; composes `Header` and `Dashboard`
- `src/components/Header.vue` — calls `userStore.fetchUser()` on mount to hydrate user state
- `src/components/dashboard/` — feature components use `index.vue` as the entry point
- `src/stores/user.js` — Pinia store holding `firstName`/`lastName` state with a `fullName` getter and `fetchUser()` action (currently simulates an async API call)
- `src/icons/` — shared SVG icon components

The `@` alias maps to `src/`.

## Testing

Tests live alongside components in `__test__/` subdirectories as `*.spec.js` files. Vitest is configured to only pick up `src/components/**/*.spec.js`. Tests use Gherkin-style nested `describe` blocks (Given/When/Then). Pinia must be initialized in `beforeEach` via `setActivePinia(createPinia())` before using any store.
