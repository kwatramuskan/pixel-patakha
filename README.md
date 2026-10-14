# PIXEL PATAKHA — Landing Page

A responsive, Minecraft-inspired voxel-style landing page for a college-level creative design competition. Built with React, TypeScript, Vite, and CSS-generated original pixel/voxel illustrations. No proprietary game assets are used.

## Features

- Responsive navigation with an accessible mobile menu and in-page anchors
- CSS voxel hero landscape, pixel fireworks, floating blocks, and arcade-inspired styling
- Competition highlights, workflow, editable timeline, rules, prize tiers, suggested judging criteria, interactive FAQ, and footer
- Configurable registration destination and organizer details
- Reduced-motion support and semantic interactive controls
- No fake authentication, registration, uploads, or judging workflows

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Setup

```bash
npm install
npm run dev
```

Vite prints the local development URL in your terminal.

## Production build

```bash
npm run build
npm run preview
```

The production bundle is generated in `dist/`. The build command runs TypeScript project checks before Vite builds the site.

## Configure event details

Edit `src/eventConfig.ts` to update:

- Registration URL
- Contact email and social links
- Timeline dates
- Official eligibility, team size, file formats, deadlines, and policies
- Prize names and reward descriptions

Unknown details are intentionally labelled as placeholders. Suggested judging dimensions are not represented as confirmed official rules.

To configure registration with an environment variable, copy `.env.example` to `.env.local` and set:

```dotenv
VITE_REGISTRATION_URL=https://your-official-registration-page.example
```

Do not put secrets in `VITE_*` variables; these values are exposed to the client bundle. The default empty URL opens an explanatory placeholder dialog instead of pretending registration is available.

## Project structure

```text
pixel-patakha/
├── index.html
├── src/
│   ├── App.tsx          # Page sections and interactions
│   ├── eventConfig.ts   # Editable event content and destinations
│   ├── main.tsx         # React entry point
│   └── styles.css       # Responsive design system and voxel artwork
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## GitHub

```bash
git init
git add .
git commit -m "Build PIXEL PATAKHA landing page"
```

Check with your team before merging into an existing repository. This starter is a standalone landing page; it does not replace an existing admin panel, team dashboard, judging system, or backend. If integrating into an existing application, preserve its established routing and conventions.
