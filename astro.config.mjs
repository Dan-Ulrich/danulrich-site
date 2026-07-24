import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://danulrich.com",
  // Astro 7 changed the default whitespace handling ('jsx'); keep the old
  // full-minification behavior so rendered spacing stays identical.
  compressHTML: true,
  integrations: [mdx(), sitemap()],
});
