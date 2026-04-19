# vue_example

A Vue 3 single-page application demonstrating component architecture, Pinia state management, Vue Router navigation, and data fetching via Pinia Colada. User profile and feature flag data is loaded on navigation using route data loaders.

## Dependencies

| Package                   | Purpose                                      |
| ------------------------- | -------------------------------------------- |
| Vue 3                     | UI framework                                 |
| Pinia                     | State management                             |
| Vue Router 5              | Client-side routing with data loader support |
| `@pinia/colada`           | Data fetching and caching layer              |
| Tailwind CSS 4            | Utility-first styling (via Vite plugin)      |
| Vite 8                    | Build tool and dev server                    |
| Vitest                    | Unit testing                                 |
| `@vue/test-utils`         | Vue component test utilities                 |
| `happy-dom`               | DOM environment for tests                    |
| `vite-plugin-magical-svg` | SVG bundling and sprite generation           |
| ESLint + Prettier         | Linting and formatting                       |
| Husky                     | Git hooks                                    |

Node version is pinned to **v24.1.0** via `.nvmrc`. Use [nvm](https://github.com/nvm-sh/nvm) to switch automatically.

## Installation

```sh
nvm use       # switch to the pinned Node version
npm install
```

## Architecture

### Data Flow

Data is fetched during navigation using Vue Router 5's data loader feature and Pinia Colada's `defineColadaLoader` (imported from `vue-router/experimental/pinia-colada`). Loaders are defined in `src/loaders/` and exported from the page component that uses them — this is required for the router to run them before the page renders.

On the Home page (`src/pages/Home.vue`), two loaders run in parallel during navigation:

- `useUserProfileLoader` — calls `src/api/userProfile.js` to fetch the user's first and last name
- `useFeatureFlagsLoader` — calls `src/api/featureFlags.js` to fetch feature flag values

Once the loader data resolves, `watch` callbacks in `Home.vue` write it into the corresponding Pinia stores:

- `useUserStore` (`src/stores/user/user.js`) — holds `firstName`, `lastName`, and a `fullName` getter; updated via `setUserProfile()`
- `useFeatureFlagsStore` (`src/stores/featureFlags/featureFlags.js`) — holds a `flags` map and an `isReady` flag; updated via `setAllFlags()`

Child components (`Header`, `Dashboard`) read directly from the Pinia stores — they have no knowledge of the loaders or API layer. Feature flag checks (e.g. `isFeatureFlagEnabled('isDashboardDisplayed')`) control conditional rendering in the page template.

### Plugin Registration Order

`main.js` registers plugins in this order: Pinia → Vue Router → `DataLoaderPlugin`. The `DataLoaderPlugin` must be registered after the router so it can intercept navigation guards.

## Development

```sh
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # ESLint + Prettier checks
npm run test      # run tests in watch mode
npm run test:coverage  # run tests with coverage report
```
