# Contributing to This Repository

This guide is for contributing directly to the existing Git Recipe Book repository.
If you want to create your own recipe site from this codebase instead, use [GIT_TEMPLATE.md](./GIT_TEMPLATE.md).

For the recipe format itself, use [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md).

## Before You Start

- Use one change per branch or pull request when possible
- Keep recipe file names lowercase and hyphenated (i.e. lower-case)

## Recipe Rules

Each recipe page should follow the template and rules found [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md).

## Option 1: Contribute in the GitHub Web Interface

Use this when you want to make a quick recipe or documentation change without cloning the repo.

1. Open the file you want to edit on GitHub, or navigate to the folder where you want to add a new recipe.
2. Click the pencil icon to edit a file, or use **Add file** to create a new one.
3. For new recipes, place the file in the correct folder under `src/content/docs/`.
4. Copy the structure from [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md).
5. Preview your changes if needed, then commit them.
6. Open a pull request against this repository.

### Pull Request Checklist

- [ ] Recipe or docs change is focused and complete
- [ ] File names are lowercase and hyphenated
- [ ] Recipe follows [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md)
- [ ] Check the PR preview by netlify
- [ ] Pull request description explains the change

## Option 2: Contribute Locally

Use this when you want a local preview or need to make larger edits.

### Setup

```bash
git clone https://github.com/empa-scientific-it/gitcook.git
cd gitcook
npm install
```

### Create a Branch

```bash
git checkout -b add-your-recipe-name
```

### Make Your Change

- Add or edit files under `src/content/docs/`
- Use [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md) for recipe pages

### Check Locally

```bash
npm run dev
npm run build
```

### Commit and Push

```bash
git add .
git commit -m "Add your recipe name"
git push origin add-your-recipe-name
```

Then open a pull request against this repository.

### Pull Request Checklist

- [ ] Recipe or docs change is focused and complete
- [ ] File names are lowercase and hyphenated
- [ ] Recipe follows [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md)
- [ ] Local build succeeds with `npm run build`
- [ ] Pull request description explains the change

## Need Help?

- Project overview: [README.md](./README.md)
- Recipe format: [RECIPE_TEMPLATE.md](./RECIPE_TEMPLATE.md)

By contributing, you agree that your contributions are included in the public repo and are licensed under the MIT License.
