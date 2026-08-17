# Changelog - MuacyNerd

All notable changes to the MuacyNerd project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2026-08-16

### Added
- `.geminiignore` configured for token optimization and AI context management.
- `.gitignore` configured for standard React/Node.js ignore patterns.
- `Agent.md` (moved to `.agents/`) with workspace behavioral constraints, language rules, and Git strategy.
- Git repository initialized.
- Branch `devlab` established as the active development branch.
- Branch `main` established as the production branch (currently empty).
- React + Vite + TypeScript project initialized.
- Tailwind CSS v4 configured with editorial palette and typography in `src/index.css`.
- ESLint (oxlint) and Prettier configured with Tailwind plugin.
- Absolute path aliases (`@/`) configured in `tsconfig.json` and `vite.config.ts`.
- Base folder architecture established (`src/components`, `src/pages`, `src/content`, `src/seo`, `src/config`).
- Strict TypeScript types for editorial engine (`Article`, `Author`, `Category`, `SEOData`) in `src/types/index.ts`.
- Static mock data implemented:
  - `src/data/categories.ts`: 5 core categories.
  - `src/data/authors.ts`: 3 mock journalist profiles.
  - `src/data/articles.ts`: 5 DEMO articles across different categories.
- Content helper library (`src/lib/content.ts`) simulating CMS functionality (fetch by slug, category, featured, etc.).
- **Phase 3**: Core UI components & Design System implemented (Editorial Premium Redesign):
  - Installed `lucide-react` for iconography.
  - Ads configuration system (`src/config/ads.ts`).
  - Layout components: `<Header />` (responsive navbar, thick borders) and `<Footer />` (high contrast, minimal).
  - Base UI components: `<Breadcrumbs />`, `<Tag />`.
  - Content components: `<NewsCard />` (supports full, compact, and featured grid views).
  - Monetization components: `<AdSlot />`, `<AffiliateCard />`, `<SponsoredBadge />`.
- **Phase 4**: Routing and Single Page Application (SPA) architecture:
  - Installed `react-router-dom` for client-side routing.
  - Setup `<BrowserRouter>` and primary `<Routes>` in `App.tsx`.
  - Created `src/pages/Home.tsx` (Grid-based editorial layout).
  - Created `src/pages/ArticleView.tsx` (Immersive reading view with dynamic content fetching).
  - Created `src/pages/CategoryView.tsx` (Dynamic category listing with fallback for empty states).
  - Created `src/pages/NotFound.tsx` (Custom editorial 404 page).
  - Refactored UI components (`Header`, `Footer`, `NewsCard`) to use `<Link>` for instantaneous navigation.
- **Phase 5**: Advanced Technical SEO and Analytics:
  - Installed `react-helmet-async` for dynamic metadata management.
  - Created reusable `<SEO />` utility component supporting basic tags, Open Graph, Twitter Cards, and JSON-LD schema (Article and Breadcrumb).
  - Integrated static and dynamic `<SEO />` tags across all application views (`Home`, `ArticleView`, `CategoryView`, `NotFound`).
  - Created `src/lib/analytics.ts` module with placeholder logic for Google Analytics 4 (GA4) and Meta Pixel.
  - Configured `AnalyticsTracker` in `App.tsx` to automatically record SPA pageviews using React Router's `useLocation`.
  - Added `public/robots.txt` for crawler guidance.
  - Implemented `scripts/generate-sitemap.js` to dynamically generate `sitemap.xml` based on mock CMS data, and hooked it into the npm `prebuild` step.
- **Phase 6**: CI/CD and Rebranding:
  - Added GitHub Actions workflow (`.github/workflows/ci.yml`) for automated build, linting, and deployment to GitHub Pages.
  - Rebranded project from LIBRIVAS to MuacyNerd across configuration, domains, text, and assets.
  - Configured CI concurrency settings for dynamic cancellation on PRs to optimize runner usage.
- **Phase 7**: Search, Pagination, and Dark Mode:
  - Created `src/hooks/useTheme.ts` to manage light/dark mode preference via local storage and system media queries.
  - Refactored `src/index.css` to use CSS variables mapped to `:root` and `:root[data-theme="dark"]` for dynamic theming.
  - Updated `<Header />` to include a Theme toggle and a Search link.
  - Created `src/pages/SearchView.tsx` for real-time text-based search across articles.
  - Implemented "Load More" pagination in `<CategoryView />` and `<SearchView />` using `visibleCount` state.
  - Removed placeholder articles, leaving only a single AI-related article for production readiness.
