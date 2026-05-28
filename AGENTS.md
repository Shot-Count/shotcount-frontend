# ShotCount Web Baseline

Treat the current deployed ShotCount web state as the product baseline for future edits.

- Do not restore or reintroduce legacy stack, black shell, swipe shell, or old `/openings` flows unless David explicitly asks for that exact change.
- Preserve the current landing page, auth entry, onboarding path, and `/app/jobs` destination behavior unless the requested task directly targets one of them.
- Preserve the current `/app/jobs` visual direction, including the job/grad school track work, unless David explicitly approves a visual change.
- Before adding or changing UI, routes, or workflows, show David screenshots or a visual preview plus the intended click/path logic and wait for explicit approval. This approval gate exists to prevent legacy bad UIs from being reintroduced.
- Keep edits narrowly scoped to the requested feature or bug. Do not use older screenshots or historical builds as source of truth unless David identifies that version for the current task.
- Do not remove the restored app asset/proxy setup unless replacement app serving has been verified end to end on production-like routes.
- When touching routes, verify that `/app/jobs` still loads and that removed legacy routes do not surface the old shell.
