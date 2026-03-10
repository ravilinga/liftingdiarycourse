# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16** app using the App Router with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

- `app/` — App Router directory. `layout.tsx` is the root layout; `page.tsx` is the home route.
- `public/` — Static assets served at root.
- Styling uses Tailwind v4 with PostCSS (`@tailwindcss/postcss`).
- Fonts are loaded via `next/font/google` (Geist Sans + Geist Mono) and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).

This project is a fresh Create Next App scaffold — the actual course content has not yet been built.
