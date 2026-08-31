# Using This Repo as a Template

Use this guide if you want your own recipe book based on this repository.
If you want to contribute to this repository instead, use [CONTRIBUTING.md](./CONTRIBUTING.md).

## Create Your Repository

1. On GitHub, click **`Use this template`**
2. Create a new repository under your own account or organization
3. Clone your new repository locally

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
npm install
```

## Update Site Configuration

Edit `astro.config.mjs` and update these values:

- `site`: your production URL
- `base`: your repository name if deploying under a subpath
- `title`: your site title
- `description`: your site description
- `social`: your own GitHub repository link

Example:

```js
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO',
  integrations: [
    starlight({
      title: 'My Recipe Book',
      description: 'Recipes collected by me.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
        },
      ],
    }),
  ],
});
```

## Replace the Starter Content

- Update `src/content/docs/index.mdx` for your homepage
- Edit or remove the sample recipes under `src/content/docs/`
- Add your own recipes using [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md)
- Update `README.md` so it describes your project instead of this one

## Run Locally

```bash
npm run dev
```

Build before publishing:

```bash
npm run build
```

## Deploy

You can deploy this Astro site anywhere Astro is supported.
Common options include:

- GitHub Pages
- Netlify
- Vercel

If you use GitHub Pages, make sure your `site` and `base` settings match the final URL.

## Content Structure

Recipes live under `src/content/docs/` and can be grouped however you want.
The current starter layout includes:

- `appetizers/`
- `main-courses/`
- `desserts/`

If you change the category structure significantly, also review the Starlight sidebar configuration in `astro.config.mjs`.
