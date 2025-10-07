# Recipe Template

Use this template when creating a new recipe. Copy the content below to a new `.mdx` file in the appropriate category folder.

## File Naming

- Use lowercase letters
- Replace spaces with hyphens
- Example: `chocolate-chip-cookies.mdx`

## Category Folders

Save your recipe in one of these folders:
- `src/content/docs/appetizers/`
- `src/content/docs/main-courses/`
- `src/content/docs/desserts/`

## Template

```mdx
---
title: Your Recipe Name
description: A brief, enticing description of your dish. What makes it special? What's its origin? (This will appear at the top of your recipe page)
category: dessert  # Choose one: appetizer, first-course, main-course, side-dish, dessert, or beverage
ingredients:
  - Ingredient 1 with quantity (e.g., "2 cups all-purpose flour")
  - Ingredient 2 with quantity
  - Ingredient 3 with quantity
  - Add as many as needed
servings: 4  # Optional: number of servings
prepTime: 15 minutes  # Optional: preparation time
cookTime: 30 minutes  # Optional: cooking time
---

import { Steps } from '@astrojs/starlight/components';

## Instructions

<Steps>

1. First step with clear, detailed instructions

2. Second step with clear instructions

3. Continue with numbered steps - be as detailed as needed

4. Include cooking times, temperatures, and visual cues (e.g., "until golden brown")

5. Final step

</Steps>

## Tips (optional)

- Add helpful tips here
- Mention possible variations or substitutions
- Include storage instructions if relevant
- Note any common mistakes to avoid

## Notes (optional)

Optional section for any additional information:
- Origin or history of the dish
- Dietary information (vegetarian, vegan, gluten-free, etc.)
- Suggested pairings or accompaniments
```

**Important Notes:**
- The `description` from your frontmatter will automatically appear at the top of your recipe page
- The ingredients list is automatically generated from your frontmatter
- You only need to copy the import line and write the instructions - that's it!

## Example Usage

For a file named `src/content/docs/desserts/chocolate-cake.mdx`:

```mdx
---
title: Decadent Chocolate Cake
description: This chocolate cake is incredibly moist and rich, with a deep chocolate flavor that chocolate lovers will adore.
category: dessert
ingredients:
  - 2 cups all-purpose flour
  - 2 cups granulated sugar
  - 3/4 cup cocoa powder
  - 2 large eggs
  - 1 cup milk
servings: 12
prepTime: 20 minutes
cookTime: 35 minutes
---

import { Steps } from '@astrojs/starlight/components';

## Instructions

<Steps>

1. Preheat oven to 350°F (175°C). Grease and flour two 9-inch round pans.

2. In a large bowl, combine flour, sugar, and cocoa powder.

3. Add eggs and milk, beat until smooth.

4. Pour batter into prepared pans.

5. Bake for 30-35 minutes or until a toothpick comes out clean.

6. Cool in pans for 10 minutes, then turn out onto wire racks.

</Steps>

## Tips

- Don't overbake - the cake should be moist
- Let layers cool completely before frosting
- This cake pairs wonderfully with vanilla buttercream
```

## Checklist Before Submitting

- [ ] File is saved in the correct category folder
- [ ] File name uses lowercase and hyphens
- [ ] All required frontmatter fields are filled (title, description, category, ingredients)
- [ ] Ingredients include quantities
- [ ] Instructions use the `<Steps>` component
- [ ] Recipe has been tested locally (`npm run dev`)
- [ ] Site builds successfully (`npm run build`)
