/**
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-svelte"],
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  printWidth: 100
};

export default config;
