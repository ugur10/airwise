import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import { createTailwindTheme } from "@airwise/ui/theme";

const baseTheme = createTailwindTheme();

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}", "../../packages/ui/src/**/*.{svelte,ts}"],
  theme: {
    extend: {
      ...(baseTheme?.extend ?? {}),
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "3rem"
        }
      }
    }
  },
  plugins: [forms]
};

export default config;
