# ShotCount Web Baseline

Treat the current deployed ShotCount web state as the product baseline for future edits.

- Do not restore or reintroduce legacy stack, black shell, swipe shell, or old `/openings` flows unless David explicitly asks for that exact change.
- Preserve the current landing page, auth entry, onboarding path, and `/app/jobs` destination behavior unless the requested task directly targets one of them.
- Default `/app/jobs` is owned by the golden desktop app behind the `DESKTOP_APP` service binding. Do not alter its UI, logic, flow, or data except for the approved selector arrow.
- The Jobs/Grad School selector arrow is injected at the worker edge only on default desktop `/app/jobs`.
- Preserve the Grad School flow at `/app/jobs?track=Grad+School+Admissions` unless David explicitly approves another path.
- Before adding or changing UI, routes, or workflows, show David screenshots or a visual preview plus the intended click/path logic and wait for explicit approval. This approval gate exists to prevent legacy bad UIs from being reintroduced.
- Keep edits narrowly scoped to the requested feature or bug. Do not use older screenshots or historical builds as source of truth unless David identifies that version for the current task.
- Do not remove the restored app asset/proxy setup unless replacement app serving has been verified end to end on production-like routes.
- When touching routes, verify that `/app/jobs` still loads and that removed legacy routes do not surface the old shell.

## Deployment Path

- `https://www.shotcount.app` is served by this Vercel project.
- App routes are rewritten in `vercel.json` to `https://shotcount-web.dosudavy.workers.dev`.
- Static app assets under `/_next/:path*` are also rewritten to `shotcount-web`; do not remove that rewrite without verified replacement serving.
- The `shotcount-web` worker has its own router. Desktop non-API traffic normally goes to the `DESKTOP_APP` service binding (`shotcount-web-desktop`).
- Default desktop `/app/jobs` must remain on `DESKTOP_APP`; the worker injects only the approved Jobs/Grad School selector arrow onto that page.
- `/app/jobs?track=Grad+School+Admissions` routes to the `shotcount-web` app bundle for the Grad School flow.
- Auth/onboarding/welcome/login/signup routes currently point at `shotcount-web-desktop`.
- When validating production behavior, check `https://www.shotcount.app/app/jobs` directly. Verifying only the worker URL is not enough because Vercel rewrites and worker routing both affect what users see.
