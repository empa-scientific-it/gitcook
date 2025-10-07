# Contributing to Git Recipe Book

Thank you for your interest in contributing! This project is designed to help you learn Git and GitHub through hands-on practice.

## 🎯 Who Should Contribute?

- **Git Beginners**: Learn by doing! This is a safe space to practice Git workflows.
- **Recipe Enthusiasts**: Share your favorite recipes with the community.
- **Documentation Improvers**: Help make our guides clearer and more helpful.
- **Educators**: Use this as a teaching tool for your students.

## 🚀 Getting Started

### Prerequisites

- [Git](https://git-scm.com/) installed on your computer
- [Node.js](https://nodejs.org/) (version 18 or higher)
- A [GitHub](https://github.com/) account
- A text editor (VS Code, Sublime Text, etc.)

### First Time Setup

1. **Fork the Repository**
   - Click the "Fork" button at the top right of this repository
   - This creates your own copy of the project

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/git-recipe-book.git
   cd git-recipe-book
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open http://localhost:4321 in your browser to see the site

## 📝 Adding a Recipe

### Step 1: Create a Branch

Always create a new branch for your contribution:

```bash
git checkout -b add-chocolate-cookies
```

Use descriptive branch names like:
- `add-chocolate-cookies`
- `add-thai-curry`
- `fix-typo-in-carbonara`

### Step 2: Create Your Recipe File

1. Choose the appropriate category folder:
   - `src/content/docs/appetizers/`
   - `src/content/docs/main-courses/`
   - `src/content/docs/desserts/`

2. Create a new `.mdx` file with a descriptive name:
   - Use lowercase letters
   - Use hyphens instead of spaces
   - Example: `chocolate-chip-cookies.mdx`

3. Use the template from `RECIPE_TEMPLATE.md` as a starting point

### Step 3: Write Your Recipe

Your recipe must include:

**Required Frontmatter:**
```yaml
---
title: Your Recipe Name
description: Brief description of your recipe (This will appear at the top of your recipe page)
category: dessert  # or appetizer, first-course, main-course, side-dish, beverage
ingredients:
  - First ingredient with quantity
  - Second ingredient with quantity
---
```

**Required in Recipe Body:**
- Import statement: `import { Steps } from '@astrojs/starlight/components';`
- Instructions section using the `<Steps>` component
- Tips section (recommended)

**Automatic Sections:**
- Description (automatically displayed from frontmatter)
- Ingredients list (automatically generated from frontmatter)

**Example:**
```mdx
---
title: Chocolate Chip Cookies
description: These cookies are a family favorite with a crispy edge and chewy center!
category: dessert
ingredients:
  - 2 cups all-purpose flour
  - 1 cup chocolate chips
servings: 24
prepTime: 15 minutes
cookTime: 12 minutes
---

import { Steps } from '@astrojs/starlight/components';

## Instructions

<Steps>

1. Preheat oven to 350°F.

2. Mix dry ingredients in a bowl.

3. Bake for 12 minutes until golden.

</Steps>

## Tips

- Don't overbake for chewier cookies
```

**Note:** Just copy the import line exactly as shown. The description and ingredients sections are automatically displayed from your frontmatter!

### Step 4: Test Your Recipe

1. **View in browser:**
   ```bash
   npm run dev
   ```
   Navigate to your recipe and check formatting

2. **Build the site:**
   ```bash
   npm run build
   ```
   Ensure no errors occur

### Step 5: Commit Your Changes

```bash
# Add your new file
git add src/content/docs/desserts/chocolate-chip-cookies.mdx

# Commit with a descriptive message
git commit -m "Add Chocolate Chip Cookies recipe to Desserts"
```

**Good commit messages:**
- ✅ "Add Chocolate Chip Cookies recipe to Desserts"
- ✅ "Add Thai Green Curry to Main Courses"
- ✅ "Fix typo in Tiramisu recipe"

**Bad commit messages:**
- ❌ "Update"
- ❌ "Changes"
- ❌ "New recipe"

### Step 6: Push to Your Fork

```bash
git push origin add-chocolate-cookies
```

### Step 7: Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Write a clear description:
   ```
   ## Recipe Added
   Chocolate Chip Cookies

   ## Description
   Classic chocolate chip cookies with a crispy edge and chewy center.
   This is my grandmother's recipe!

   ## Checklist
   - [x] Recipe tested locally
   - [x] Follows template structure
   - [x] Build succeeds
   ```
4. Click "Create Pull Request"

## 🔄 Keeping Your Fork Up to Date

If the main repository has been updated, sync your fork:

```bash
# Add the upstream repository (only needed once)
git remote add upstream https://github.com/ORIGINAL-OWNER/git-recipe-book.git

# Fetch the latest changes
git fetch upstream

# Switch to your main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push updates to your fork
git push origin main
```

## 📋 Contribution Checklist

Before submitting your pull request, ensure:

- [ ] Recipe file is in the correct category folder
- [ ] File name uses lowercase and hyphens (no spaces)
- [ ] All required frontmatter fields are present
- [ ] Ingredients include quantities
- [ ] Instructions use the `<Steps>` component (default if you copied the template)
- [ ] Recipe displays correctly (`npm run dev`)
- [ ] Build succeeds without errors (`npm run build`)
- [ ] Commit message is descriptive
- [ ] Branch name is descriptive

## 🎨 Style Guidelines

### Recipe Writing

- **Be Clear**: Write instructions as if explaining to a beginner cook
- **Include Details**: Specify temperatures, times, and visual cues
- **Add Context**: Mention why certain steps matter
- **Use Active Voice**: "Mix the flour" not "The flour should be mixed"

### Formatting

- Use proper Markdown syntax
- Keep lines under 80 characters when possible
- Use proper punctuation
- Check spelling

## 🐛 Reporting Issues

Found a bug or have a suggestion?

1. Check if an issue already exists
2. If not, create a new issue with:
   - Clear title
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior

## ❓ Questions?

- Check the [README.md](README.md) for project overview
- Review [RECIPE_TEMPLATE.md](RECIPE_TEMPLATE.md) for the recipe format
- Look at existing recipes for examples
- Open an issue with the label "question"

## 🏆 Recognition

All contributors will be acknowledged! Your GitHub profile will appear in:
- The repository's contributors list
- Pull request history
- Commit history

## 📚 Learning Resources

### Git Basics
- [Our Git Tutorial](https://github.com/empa-scientific-it/how-to-git/)
- [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Learn Git Branching](https://learngitbranching.js.org/)
- [Git Documentation](https://git-scm.com/doc)

### Markdown
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)

### Astro/Starlight
- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! Every recipe makes this project better. 🎉
