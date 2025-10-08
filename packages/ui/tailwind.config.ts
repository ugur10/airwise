import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { tokens } from "./src/tokens";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx,svelte}",
    "../../apps/web/src/**/*.{svelte,ts}",
    "../../apps/api/src/**/*.{ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...fontFamily.sans],
        heading: ["Satoshi-Variable", ...fontFamily.sans],
        mono: ["JetBrains Mono", ...fontFamily.mono]
      },
      colors: {
        brand: tokens.color.brand,
        neutral: tokens.color.neutral
      },
      borderRadius: tokens.radius,
      boxShadow: tokens.shadow,
      spacing: tokens.spacing,
      transitionTimingFunction: tokens.motion.easing,
      transitionDuration: tokens.motion.duration
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

export default config;
