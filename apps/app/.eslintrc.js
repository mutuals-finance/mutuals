/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@mutuals/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: ["src/lib/graphql/thegraph/__generated__/"],
};
