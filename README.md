# ShotCount

**ShotCount helps you take more shots — and learn from every one.**  
It’s an AI app that helps you turn rejection into feedback, grow your confidence, and increase your success rate over time.

---

## Features

---

## Tech stacks
To offer simplicity while delivering lightning speed, **ShotCount** is built with:

| Category | Tool | Purpose |
|-----------|------|----------|
| **Framework** | [Astro](https://astro.build) | Lightning-fast hybrid web framework |
| **Styling** | [TailwindCSS](https://tailwindcss.com) | Utility-first styling for clean UI |
| **Animations** | [Motion](https://motion.dev) | Smooth, composable animations |
| **Package Manager** | [pnpm](https://pnpm.io) | Efficient, fast dependency management |
| **Languages** | Astro, JavaScript, TypeScript | Core languages for flexibility and type safety |

---

### Project Structure

```php
/
├── src/
│   ├── assets/          # Images for optimization
│   ├── components/      # Sections
│   ├── ui/              # Reusable ui elements
│   ├── layouts/         # Page layouts
│   ├── pages/           # Main app pages
│   ├── styles/          # Global and component styles
│   ├── scripts/         # JavaScript files for animations
│   └── utils/           # Helpers and configurations
│     └── config.ts      # Configuration file to edit important links or details (e.g: Socials, name, about, faq...etc)
├── public/              # Static assets
└── astro.config.mjs     # Astro configuration

```
---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended)

### Run locally

```bash
# Clone the repository
git clone https://github.com/Shot-Count/shotcount-frontend.git

# Navigate to project directory
cd shotCount

# Install dependencies
pnpm install

# Start development server
pnpm dev

```
- View on browser @ http://localhost:4321

---

### Dev Notes
- ***Config edits***: All configurable content (links, names, text) can be updated in src/utils/config.ts.
- ***Animations***: All animation scripts are and should be stored in src/scripts for easy navigation. It should then be imported dynamically into the needed file.
- ***Components Naming***: Preferrably, All Components should be named using CamelCase. Naming components with snake case in JavaScript is madness.

## Build and Deployment
- Shotcount development live link is currently deployed on Vercel @ https://www.shot-count.vercel.app
- Production landing traffic is served at https://shotcount.app and https://www.shotcount.app by this Vercel project.
- App traffic rewrites through `vercel.json` to `https://shotcount-web.dosudavy.workers.dev`; auth/onboarding routes currently rewrite to `https://shotcount-web-desktop.dosudavy.workers.dev`.
- Always build and test before pushing to the repo and review before merging

  ```bash
  # Run Build
  pnpm build

  # Preview production
  pnpm preview
  ``` 

### Production Verification Rule

After every deploy, confirm the full user path on production:

1. `https://shotcount.app` is still the public landing page.
2. Users can start Google OAuth sign-in from the landing page.
3. New users are redirected to onboarding.
4. Already-onboarded users land on `https://www.shotcount.app/app/jobs`.

Future work must build only on the current deployed state. Do not reintroduce old UI, legacy shell screens, or historical route behavior unless David explicitly approves that exact restoration.



