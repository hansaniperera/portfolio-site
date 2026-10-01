# CLAUDE.md

## Project overview
Personal portfolio site showing backend engineering work to NZ employers, built as hands-on practice with an AI coding agent. [SPEC.md](SPEC.md) is the source of truth for scope, architecture and milestones. Read it before starting work.

## Tech stack
- **Frontend:** Vite, React, TypeScript, Tailwind CSS v4, React Router. Static build.
- **Backend (Milestone 2, not started):** Spring Boot 3, Java 21, Flyway, PostgreSQL.
- **Hosting (Milestone 4):** S3 + CloudFront (frontend), Docker Compose on Lightsail (backend + DB), Route 53.
- **Tooling:** ESLint (incl. jsx-a11y), Prettier (incl. Tailwind class sorting), Vitest + Testing Library.

## Repo layout
```
frontend/          Standalone npm package (no workspaces)
  src/components/  Shared layout pieces (Header, Footer, nav, theme toggle)
  src/hooks/       React hooks
  src/pages/       One component per route
  src/test/        Vitest setup and component tests
backend/           Spring Boot API (added in Milestone 2)
SPEC.md            Scope, architecture, milestones, working rules
```

## Commands (run from `frontend/`)
Node version is pinned in `frontend/.nvmrc`.
```sh
npm install           # install deps
npm run dev           # dev server at http://localhost:5173
npm test              # run tests once (vitest run)
npm run test:watch    # tests in watch mode
npm run lint          # ESLint
npm run format        # Prettier write; format:check to verify only
npm run build         # type-check + production build to dist/
npm run preview       # serve the production build
```
Before committing: `npm run lint && npm run format:check && npm test && npm run build`.

Version pins: TypeScript `~6.0` (typescript-eslint doesn't support TS 7 yet) and ESLint 9 (eslint-plugin-jsx-a11y doesn't support ESLint 10 yet). Don't bump these without checking those peer ranges.

## Coding conventions
- TypeScript strict mode; no `any` without a comment explaining why.
- Function components and hooks only; one component per file, PascalCase filenames.
- Style with Tailwind utility classes; dark mode via the `dark:` variant (class-based, `dark` on `<html>`).
- Accessibility is required: semantic elements, labelled form controls, keyboard operable, visible focus styles (`focus-visible:`), good contrast.
- Tests live in `src/test/` as `*.test.tsx`; test behaviour through Testing Library queries by role/label.
- Conventional-style commit messages (`feat:`, `fix:`, `chore:`, `test:`, `docs:`), small and logical.

## Working rules (from SPEC.md §8)
- Plan first, code after the user approves.
- One small feature per branch/PR, with tests.
- Explain non-obvious changes; don't add features or dependencies that weren't asked for.
- Never commit secrets; flag anything security-sensitive.
- Additionally: never push or merge without being asked; ask when something is ambiguous.
