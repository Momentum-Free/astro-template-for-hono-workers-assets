# Astro Starter Kit: Basics + Hono on Cloudflare Workers with Static Assets

As Astro template to run on Cloudflare Workers: with Assets for SSG and a Hono backend for API requests.

This repo serves as a base for anyone who wishes to build a website using the new [Cloudflare Workers with Static Assets](https://developers.cloudflare.com/workers/platform/static-assets/) capabilities (to replace Cloudflare Pages websites), with [Hono](https://hono.dev/docs/getting-started/cloudflare-workers) as the framework for the backend and [Astro](https://astro.build/) for the frontend.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── worker/
│   └── api/
│       └── index.ts
├── wrangler.jsonc
├── tsconfig.json
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [Astro's guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
Alternatively, here's the [Cloudflare Developers Discord server](https://discord.com/invite/cloudflaredev).
