# 🍳 Git Recipe Book

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A hands-on Git tutorial where you learn by contributing recipes to a collaborative cookbook. This project teaches Git fundamentals through practical, real-world contributions.

## 🎯 Purpose

This repository serves as both:
- A **learning tool** for Git/GitHub fundamentals
- A **template repository** that anyone can fork to create their own recipe collection

## 🚀 Quick Start

### For Learners: Fork and Contribute

1. **Fork this repository** by clicking the "Fork" button at the top right
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/git-recipe-book.git
   cd git-recipe-book
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Add your recipe** (see Contributing section below)
6. **Commit and push** your changes
7. **Create a Pull Request** to the original repository

### For Template Users: Create Your Own Recipe Book

1. Click "Use this template" on GitHub to create your own repository
2. Clone your new repository
3. Update the configuration in `astro.config.mjs`:
   - Change `site` to your GitHub Pages URL
   - Update `base` to your repository name
   - Update the GitHub link in the social section
4. Start adding your own recipes!

## 📝 Contributing a Recipe

### Recipe File Structure

Recipes are stored as MDX files in category-specific directories:

```
src/content/docs/
├── appetizers/
├── main-courses/
├── desserts/
└── index.mdx
```

### Recipe Template

Create a new `.mdx` file in the appropriate category folder:

```mdx
---
title: Your Recipe Name
description: A brief introduction to your recipe (will appear at the top of your page)
category: dessert  # appetizer, first-course, main-course, side-dish, dessert, or beverage
ingredients:
  - Ingredient 1 with quantity
  - Ingredient 2 with quantity
  - Ingredient 3 with quantity
servings: 4
prepTime: 15 minutes
cookTime: 30 minutes
---

import { Steps } from '@astrojs/starlight/components';

## Instructions

<Steps>

1. First step with clear instructions

2. Second step with clear instructions

3. Continue with numbered steps

4. Final step

</Steps>

## Tips

- Add any helpful tips or variations here
```

**That's it!** Copy the import line, add your frontmatter, and write the instructions. The description and ingredients are automatically displayed.

### Git Workflow

1. **Create a branch** for your recipe:
   ```bash
   git checkout -b add-your-recipe-name
   ```

2. **Add your recipe file** to the appropriate category folder

3. **Test locally**:
   ```bash
   npm run dev
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add [Recipe Name] to [Category]"
   ```

5. **Push to your fork**:
   ```bash
   git push origin add-your-recipe-name
   ```

6. **Create a Pull Request** on GitHub

## 🛠️ Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🌐 Deploying to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository Settings
2. Navigate to Pages (under "Code and automation")
3. Under "Source", select "GitHub Actions"
4. Push to the `main` branch - the site will build and deploy automatically

### Update Site Configuration

Before deploying, update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO-NAME',
  // ...
});
```

Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPO-NAME` with your repository name.

## 📚 What You'll Learn

By contributing to this project, you'll practice:

- ✅ Forking repositories
- ✅ Cloning repositories to your local machine
- ✅ Creating branches for new features
- ✅ Making commits with clear messages
- ✅ Pushing changes to remote repositories
- ✅ Creating pull requests
- ✅ Collaborating through code review
- ✅ Keeping your fork in sync with the original

## 🏗️ Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/                      # Static assets
├── src/
│   ├── assets/                 # Images and media
│   ├── content/
│   │   ├── config.ts           # Content collection schema
│   │   └── docs/               # All recipe content
│   │       ├── appetizers/
│   │       ├── main-courses/
│   │       ├── desserts/
│   │       └── index.mdx       # Home page
│   └── env.d.ts
├── astro.config.mjs            # Astro configuration
├── package.json
└── tsconfig.json
```

## 🤝 Contributing Guidelines

### Recipe Requirements

- Must include all required frontmatter fields (title, description, category, ingredients)
- Instructions must use the `<Steps>` component for proper formatting
- Ingredients should be listed with quantities
- Include prep time and cook time when applicable
- Test your recipe page locally before submitting

### Pull Request Guidelines

- One recipe per pull request
- Use descriptive commit messages (e.g., "Add Chocolate Chip Cookies to Desserts")
- Include a brief description in your PR about the recipe
- Make sure the site builds successfully (`npm run build`)

## 📖 Resources

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub's Git Guides](https://github.com/git-guides)

## 🎓 For Educators

This template is perfect for teaching Git in a classroom setting:

- Students fork the repo and work on their own recipes
- Practice creating pull requests in a fun, non-technical context
- Review and merge student contributions
- Students see their contributions go live on the class website

## 📄 License

This project is open source and available under the MIT License.

---

Happy cooking and happy coding! 👨‍🍳👩‍💻
