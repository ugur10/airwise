# AirWise

AirWise is an airline loyalty ROI calculator designed as a polished SaaS-style experience. The project uses a Bun-powered monorepo with the Hono framework for the API and a Svelte 5 front-end.

## Workspace Layout

- `apps/api` – Hono + Bun server for loyalty calculations.
- `apps/web` – Svelte 5 client application with Tailwind CSS.
- `packages/ui` – shared design system tokens and UI components.
- `packages/config` – reusable tooling configuration (linting, Tailwind, etc.).
- `docs` – product notes and documentation.
- `tests` – integration and end-to-end tests.

## Getting Started

```bash
bun install
bun run lint
```

Additional app-specific scripts live under their respective `apps/*` directories.
