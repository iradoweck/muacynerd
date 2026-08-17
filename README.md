# MuacyNerd - Premium Editorial Portal

MuacyNerd is a high-craft, SPA (Single Page Application) editorial news portal built for optimal readability, premium aesthetics, and lightning-fast navigation.

## 🚀 Tech Stack
- **Framework**: React 19 + Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Typography**: Playfair Display (Serif) & DM Sans (Sans-serif)
- **Icons**: Lucide React
- **SEO & Meta**: React Helmet Async
- **Type Checking**: TypeScript (Strict Mode)
- **Linting & Formatting**: Oxlint & Prettier

## 🛠 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository and navigate into it:
   ```bash
   git clone <repository-url>
   cd librivas
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables (optional for local dev):
   ```bash
   cp .env.example .env
   ```

### Running Locally
To spin up the local Vite development server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173`.

### Building for Production
To build the application for deployment (which also automatically generates the `sitemap.xml`):
```bash
npm run build
```
The production-ready assets will be located in the `dist/` directory.

## 🏗 Architecture & Content

MuacyNerd uses a decoupled UI architecture. Rather than relying on a heavy backend during initial setup, it uses a mock CMS engine built into `src/lib/content.ts`.

### How to Add Content
Currently, data is served from local static files. To add or modify content without breaking the application, follow the structured types in `src/types/index.ts`:

- **Categories**: Edit `src/data/categories.ts`.
- **Authors**: Edit `src/data/authors.ts`.
- **Articles**: Edit `src/data/articles.ts`. 

The SPA routing automatically creates pages for any new category or article you add!

## ⚙️ Features
- **Editorial Premium Design**: High contrast typography, robust border usage, and careful whitespace matching print publications.
- **Instant SPA Navigation**: Powered by `react-router-dom`, meaning zero page reloads when navigating between articles.
- **Advanced Technical SEO**: Fully configured `<head>` tags per view, JSON-LD Schema integration for Google rich snippets, and dynamic Open Graph images.
- **Automated Sitemap**: A `prebuild` hook extracts all existing slugs and automatically generates a valid `sitemap.xml`.
- **Analytics Ready**: Centralized tracking structure in `src/lib/analytics.ts` ready to digest GA4 and Meta Pixel IDs.

---

> Built with precision in the **devlab**.
