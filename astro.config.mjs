import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://Xiredge.github.io",
  base: "/portfolioAstroWebsite/",
  integrations: [
    sitemap(),
    tailwind(),
  ],
  compressHTML: true,
});
