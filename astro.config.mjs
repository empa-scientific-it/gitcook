// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://gitcook.github.io",
  base: "/gitcook",
  integrations: [
    starlight({
      title: "Git Recipe Book",
      description:
        "A collaborative recipe book - Learn Git by contributing recipes!",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/empa-scientific-it/gitcook",
        },
      ],
      components: {
        MarkdownContent: "./src/components/overrides/MarkdownContent.astro",
      },
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Appetizers",
          autogenerate: { directory: "appetizers" },
        },
        {
          label: "Main Courses",
          autogenerate: { directory: "main-courses" },
        },
        {
          label: "Desserts",
          autogenerate: { directory: "desserts" },
        },
      ],
    }),
  ],
});
