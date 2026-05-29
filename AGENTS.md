# ShotCount Web Baseline

Treat the current deployed ShotCount web state as the product baseline for future edits.

- Do not restore or reintroduce legacy stack, black shell, swipe shell, or old `/openings` flows unless David explicitly asks for that exact change.
- Preserve the current landing page, auth entry, onboarding path, and `/app/jobs` destination behavior unless the requested task directly targets one of them.
- `/app/jobs` is owned by the consolidated `shotcount-web` React implementation. Jobs and Grad School must live in the same component tree and routing system.
- Preserve the Jobs visual direction at default `/app/jobs`. The approved additive UI on Jobs is the small Jobs/Grad School selector arrow.
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
- `/app/jobs` and `/app/jobs?track=Grad+School+Admissions` intentionally route to the `shotcount-web` app bundle so Jobs and Grad School share one route owner and one selector implementation.
- Do not add edge-injected UI scripts for the Jobs/Grad School selector. The selector belongs in the React Jobs component.
- Auth/onboarding/welcome/login/signup routes currently point at `shotcount-web-desktop`.
- When validating production behavior, check `https://www.shotcount.app/app/jobs` directly. Verifying only the worker URL is not enough because Vercel rewrites and worker routing both affect what users see.
