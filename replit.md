# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### Portfolio Website (`artifacts/portfolio`)
- **Type:** React + Vite (static)
- **Preview path:** `/`
- **Pages:**
  - `/` — Home: Hero, About, Skills, Experience, Education, Contact
  - `/projects` — Projects showcase page (6 projects grid with category badges)
- **Navigation:** Sticky nav with anchor-scroll links on home, page routing to /projects via wouter Link
- **Features:** Light/dark mode toggle, framer-motion animations, responsive design, generated avatar image

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
