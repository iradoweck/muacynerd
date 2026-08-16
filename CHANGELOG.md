# Changelog - LIBRIVAS

All notable changes to the LIBRIVAS project will be documented in this file.

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
