# CareLens

Policy-integrated healthcare decision-support PoC — Precision Care Challenge 2026, Team Char-Pai.

## Setup

**Base install — no external services needed:**

```bash
pnpm install
pnpm dev
```

- Frontend: http://localhost:5173
- API: http://localhost:4000

This is enough for everyone to build and run the frontend/API skeleton, work with `packages/schemas` and `packages/fixtures`, and hit any route that returns fixture data — no Supabase or Gemini account required to get started.

**When your work needs persistence or AI extraction, add the relevant key:**

| Env var | Required for |
|---|---|
| `DATABASE_URL` | anything going through Prisma/Postgres — `prisma db push`, the seed script, and any route reading/writing the DB instead of returning fixtures |
| `GEMINI_API_KEY` | M1's `/policy/parse` once it calls the real Gemini extraction (it can return fixture-based drafts until then) |

```bash
cp .env.example apps/api/.env   # fill in DATABASE_URL and/or GEMINI_API_KEY as needed
pnpm --filter @carelens/api exec prisma db push
pnpm --filter @carelens/api exec tsx prisma/seed.ts
```

No one needs to do this to start coding their slice — only when they're ready to wire up the real DB or the real AI call.

## Structure

- `apps/web` — React + TS + Vite frontend
- `apps/api` — Node + TS + Express backend, Prisma + Supabase Postgres
- `packages/schemas` — shared Zod contracts, imported by both apps
- `packages/fixtures` — synthetic policies/hospitals/events used for mocking and DB seeding
- `docs` — workstream plan, API contracts, architecture

## Ownership

- M1 — Policy & AI/Normalization: `apps/api/src/modules/policy`, `apps/web/src/features/policy`
- M2 — Hospital Data & Matching: `apps/api/src/modules/hospitals`, `apps/web/src/features/hospitals`
- M3 — Decision Engine & Divergence: `apps/api/src/modules/decision`, `apps/web/src/features/decision`
- M4 — Journey, Events & Output: `apps/api/src/modules/journey`, `apps/web/src/features/journey`

Shared files (`packages/schemas`, `apps/api/prisma/schema.prisma`, `apps/api/src/app.ts`) go through a quick PR reviewed by someone not mid-feature — see `docs/CareLens_Repo_Setup.md`.
