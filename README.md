# Git Recipe Book

[![Netlify Status](https://api.netlify.com/api/v1/badges/5ebe8ac0-7b17-4218-972b-2ce23700e1da/deploy-status)](https://app.netlify.com/projects/gitcook/deploys)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Git Recipe Book is an Astro + Starlight site for publishing recipes as MDX pages.
It can be used as a collaborative teaching repo for Git practice or as the starting point for a standalone recipe book.

## Purpose

This repository serves as both:
- A **learning tool** for Git/GitHub fundamentals
- A **template repository** that anyone can fork to create their own recipe collection

## What This Repo Contains

- A Starlight documentation site configured as a recipe book
- MDX recipe pages stored under `src/content/docs/`
- A content schema for the recipe details block at the top of each file in `src/content.config.ts`
- A custom Markdown content component for rendering recipe metadata

## Documentation Map

- Want to add or edit recipes in this repository? See [CONTRIBUTING.md](./CONTRIBUTING.md).
- Need the recipe file format? See [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md).
- Want to reuse this repository as your own recipe book? See [GIT_TEMPLATE.md](./GIT_TEMPLATE.md).

## Quick Start for Local Development 

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:4321`.

### Commands

| Command | Purpose |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- ...` | Run Astro CLI commands |

### Project Structure

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   └── docs/
│   │       ├── appetizers/
│   │       ├── desserts/
│   │       ├── main-courses/
│   │       └── index.mdx
|   ├── styles/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Contribute by Developing Locally

Use this when you want a local preview or need to make larger edits.

#### Setup

```bash
git clone https://github.com/empa-scientific-it/gitcook.git
cd gitcook
npm install
```

#### Create a Branch

```bash
git checkout -b add-your-recipe-name
```

#### Make Your Change

- Add or edit files under `src/content/docs/`
- Use [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md) for recipe pages

#### Check Changes Locally

```bash
npm run dev
npm run build
```

#### Commit and Push

```bash
git add .
git commit -m "Add your recipe name"
git push origin add-your-recipe-name
```

Then open a pull request against this repository.

#### Pull Request Checklist

- [ ] Recipe or docs change is focused and complete
- [ ] File names are lowercase and hyphenated
- [ ] Recipe follows [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md)
- [ ] Local build succeeds with `npm run build`
- [ ] Pull request description explains the change

## Configuration Notes

Main site configuration lives in `astro.config.mjs`, including:

- site URL
- sidebar structure
- social links
- Starlight component overrides

If you publish this site under a repository subpath, also set `base` in `astro.config.mjs`.

## License

This project is available under the MIT License.
