# Recipe Template

Copy this into a new `.mdx` file under `src/content/docs/`.
Remember to choose the right folder to place your recipe in.

## Quick Rules

- Recipe pages are MDX files inside `src/content/docs/`
- Use a lowercase, hyphenated file name such as `chocolate-chip-cookies.mdx`
- Put the file in the correct category folder
- Include `title`, `description`, `category`, and `ingredients` in the recipe details block at the top
- Use ingredient quantities where possible
- Import `Steps` from `@astrojs/starlight/components`
- Write the method inside the `<Steps>` block

## Recipe Content Model

**The schema supports these recipe fields:**

- `title`
- `description`
- `category`
- `ingredients`
- `servings`
- `prepTime`
- `cookTime`

**Supported recipe categories are:**

- `appetizer`
- `first-course`
- `main-course`
- `side-dish`
- `dessert`
- `beverage`

## Template

```mdx
---
title: Your Recipe Name
description: A short introduction to the dish.
category: dessert
ingredients:
  - 2 cups ingredient one
  - 1 tablespoon ingredient two
servings: 4
prepTime: 15 minutes
cookTime: 30 minutes
---

import { Steps } from '@astrojs/starlight/components';

## Instructions

<Steps>

1. First step.

2. Second step.

3. Final step.

</Steps>

## Tips

- Optional tip or variation
```

## Notes

- `description` is displayed automatically on the page
- `ingredients` are rendered automatically from the recipe details block at the top
- `servings`, `prepTime`, and `cookTime` are optional
