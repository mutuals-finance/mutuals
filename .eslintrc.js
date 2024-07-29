// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
const config = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@mutuals/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

module.exports = config;
