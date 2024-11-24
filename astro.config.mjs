// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
  base: "/amic-invisible", // github pages has a sub-folder as the repo name
  trailingSlash: "never",
});
