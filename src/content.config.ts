import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

// Define recipe categories
const recipeCategories = [
  "appetizer",
  "first-course",
  "main-course",
  "side-dish",
  "dessert",
  "beverage",
] as const;

const docs = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.(md|mdx)",
    base: "./src/content/docs",
  }),
  schema: docsSchema({
    extend: z.object({
      // Recipe-specific fields (optional, only used for recipe pages)
      category: z.enum(recipeCategories).optional(),
      description: z.string().optional(),
      ingredients: z.array(z.string()).optional(),
      servings: z.number().positive().optional(),
      prepTime: z.string().optional(), // e.g., "15 minutes"
      cookTime: z.string().optional(), // e.g., "30 minutes"
    }),
  }),
});

export const collections = { docs };
