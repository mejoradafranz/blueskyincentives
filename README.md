# Blue Sky Incentives

Employee incentive & rewards platform. A public marketing site, a client-admin
portal for managing programs and participants, and an employee portal for
redeeming reward points.

## Stack

- **Client:** React + TypeScript, Vite, React Router
- **Server:** Express + TypeScript (ESM), PostgreSQL (`pg`), JWT auth in an
  httpOnly cookie
- **Dev database:** PostgreSQL via Docker Compose

## Project layout

```
client/     React SPA (marketing site + admin portal + employee portal)
server/     Express API
docker-compose.yml   local Postgres
```

## Local development

Prerequisites: Node.js 20+, Docker Desktop.

```bash
docker compose up -d              # start Postgres
cp server/.env.example server/.env
# edit server/.env and set a real JWT_SECRET

npm install
npm run db:migrate
npm run db:seed                   # creates a demo company + logins, prints credentials
npm run dev                       # runs client (5173) and server (4000) together
```

The Vite dev server proxies `/api/*` to the Express server, so the client
always talks to a same-origin `/api` path — no `VITE_API_URL` or CORS
configuration needed in dev.

Seeded demo logins (password `password123` for both):

- `admin@acme.demo` — client admin
- `employee@acme.demo` — employee

## Environment variables

`server/.env` (see `server/.env.example`):

| Var | Purpose |
|---|---|
| `DATABASE_URL` | Postgres connection string |
| `JWT_SECRET` | Signs the auth cookie — use a long random string, unique per environment |
| `PORT` | API port (default 4000) |
| `CLIENT_ORIGIN` | Allowed CORS origin in dev; unused in production single-service deploys |
| `NODE_ENV` | `development` or `production` |

The client has no build-time env vars — it always calls the relative `/api`
path, whether proxied by Vite in dev or served same-origin in production.

## Production build & deploy

```bash
npm run build
```

Builds `client/dist` (static assets) and `server/dist` (compiled API). When
`NODE_ENV=production`, the Express server also serves `client/dist` directly
and falls back to `index.html` for client-side routes — so the whole app is
one deployable service on one port:

```bash
NODE_ENV=production node server/dist/index.js
```

Point `DATABASE_URL` at a production Postgres instance and run the migration
before first boot:

```bash
npm run db:migrate --workspace=server
```

No seed data is created in production automatically — `db:seed` is a
local/demo-only script.

## Notes

- No self-service signup: client-admins and employees are provisioned by an
  admin (or the seed script). Adding a new employee via the admin portal
  generates a one-time temporary password shown once in the UI.
- Rate limiting is applied to `/api/auth/login` and `/api/contact`.
- Marketing pages ship without real photography — CSS-based visuals only, by
  design, so real brand imagery can be dropped in later without restructuring
  layouts.
