import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import sveltePlugin from "eslint-plugin-svelte";

const svelteConfigs = sveltePlugin.configs["flat/recommended"].map((config) => ({
  ...config,
  languageOptions: {
    ...(config.languageOptions ?? {}),
    parserOptions: {
      ...(config.languageOptions?.parserOptions ?? {}),
      parser: tsParser,
      tsconfigRootDir: process.cwd()
    },
    globals: {
      ...(config.languageOptions?.globals ?? {}),
      ...globals.browser,
      ...globals.node,
      Bun: "readonly"
    }
  },
  rules: {
    ...(config.rules ?? {}),
    "no-console": ["warn", { allow: ["warn", "error", "info"] }]
  }
}));

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.svelte-kit/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "eslint.config.mjs"
    ]
  },
  js.configs.recommended,
  ...svelteConfigs,
  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    ignores: ["**/node_modules/**", "dist/**", "build/**", "**/.svelte-kit/**"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        projectService: true
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        Bun: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error", "info"] }]
    }
  }
];
