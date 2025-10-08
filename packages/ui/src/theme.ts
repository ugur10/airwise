import type { Config } from "tailwindcss";
import { tokens } from "./tokens";

export const createTailwindTheme = (): Config["theme"] => ({
  extend: {
    colors: {
      brand: tokens.color.brand,
      neutral: tokens.color.neutral,
      accent: tokens.color.accent
    },
    fontFamily: {
      sans: [tokens.typography.font.sans],
      heading: [tokens.typography.font.heading],
      mono: [tokens.typography.font.mono]
    },
    borderRadius: tokens.radius,
    boxShadow: tokens.shadow,
    spacing: tokens.spacing,
    transitionTimingFunction: tokens.motion.easing,
    transitionDuration: tokens.motion.duration
  }
});

export const semanticColors = {
  background: "rgba(10, 13, 26, 1)",
  surface: "rgba(17, 21, 43, 0.9)",
  "surface-muted": "rgba(29, 35, 69, 0.6)",
  "primary-solid": tokens.color.brand[500],
  "primary-soft": "rgba(31, 133, 255, 0.2)",
  "accent-sky": tokens.color.accent.sky,
  "accent-mint": tokens.color.accent.mint,
  "accent-amber": tokens.color.accent.amber,
  "text-primary": "rgba(240, 245, 255, 0.97)",
  "text-muted": "rgba(172, 182, 215, 0.76)",
  outline: "rgba(73, 99, 151, 0.45)"
};

export const layerStyles = {
  card: "rounded-xl border border-white/5 bg-slate-900/70 backdrop-blur",
  "card-elevated": "rounded-2xl border border-white/5 bg-slate-900/70 shadow-[0_40px_80px_-50px_rgba(12,45,115,0.65)] backdrop-blur",
  chip: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold",
  button: "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 font-semibold transition-transform duration-200 will-change-transform"
};

export type SemanticColorKey = keyof typeof semanticColors;
export type LayerStyleKey = keyof typeof layerStyles;
