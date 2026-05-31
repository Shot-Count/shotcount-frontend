# ShotCount Web Baseline

Treat the current deployed ShotCount web state as the product baseline for future edits.

- Do not restore or reintroduce legacy stack, black shell, swipe shell, or old `/openings` flows unless David explicitly asks for that exact change.
- Make additions and edits only against the current deployed state. Do not inject UI, routing, logic, assets, or interaction patterns from older builds by mistake.
- Preserve the current landing page, auth entry, onboarding path, and `/app/jobs` destination behavior unless the requested task directly targets one of them.
- When David attaches a production screenshot, make changes to that exact live route/rendered implementation. Confirm the route owner in `shotcount-web/worker-router.js` before editing so work does not land in the wrong app bundle.
- This repo owns the public landing page and the public rewrite table. It must not directly target `shotcount-web-desktop`; app/auth/API traffic should enter the `shotcount-web` worker gateway first.
- Default `/app/jobs` is currently owned by the golden desktop app behind the `DESKTOP_APP` service binding. Do not alter its UI, logic, flow, or data except for explicitly approved changes to that exact live screen.
- The only approved default Jobs edge enhancements are the Jobs/Grad School selector arrow and live location autocomplete. They live in `shotcount-web/worker-router.js` until the desktop source is migrated into that repo.
- Preserve the Grad School flow at `/app/jobs?track=Grad+School+Admissions` unless David explicitly approves another path.
- Before adding or changing UI, routes, or workflows, show David screenshots or a visual preview plus the intended click/path logic and wait for explicit approval. This approval gate exists to prevent legacy bad UIs from being reintroduced.
- Keep edits narrowly scoped to the requested feature or bug. Do not use older screenshots or historical builds as source of truth unless David identifies that version for the current task.
- Do not remove the restored app asset/proxy setup unless replacement app serving has been verified end to end on production-like routes.
- When touching routes, verify that `/app/jobs` still loads and that removed legacy routes do not surface the old shell.

## Deployment Path

- `https://www.shotcount.app` is served by this Vercel project.
- App, auth, onboarding, and app API routes are rewritten in `vercel.json` to `https://shotcount-web.dosudavy.workers.dev`.
- Static app assets under `/_next/:path*` are also rewritten to `shotcount-web`; do not remove that rewrite without verified replacement serving.
- The `shotcount-web` worker is the single app gateway. Desktop non-API traffic may still delegate internally to the `DESKTOP_APP` service binding (`shotcount-web-desktop`), but public Vercel rewrites should not bypass the gateway.
- Default desktop `/app/jobs` must remain on `DESKTOP_APP`; the worker injects only the approved Jobs/Grad School selector arrow onto that page.
- `/app/jobs?track=Grad+School+Admissions` routes to the `shotcount-web` app bundle for the Grad School flow.
- Route ownership changes belong in `shotcount-web/worker-router.js`, not in this public rewrite file.
- When validating production behavior, check `https://www.shotcount.app/app/jobs` directly. Verifying only the worker URL is not enough because Vercel rewrites and worker routing both affect what users see.
- After every deployment, explicitly confirm the production sign-in flow still works as intended: `https://shotcount.app` remains the landing page, users click Google OAuth sign-in from the landing page, new users are redirected to onboarding, and already-onboarded users land on `https://www.shotcount.app/app/jobs`.
- Every post-deploy report must reiterate that future additions and edits are being made only on top of the current deployed state, and that old UI must not be injected unless David explicitly approves that exact restoration.
