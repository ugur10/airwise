import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      "@components": "./src/lib/components",
      "@features": "./src/features",
      "@styles": "./src/lib/styles",
      "@utils": "./src/lib/utils"
    }
  }
};

export default config;
