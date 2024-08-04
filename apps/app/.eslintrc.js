/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@mutuals/eslint-config/next.js"],
  ignorePatterns: ["src/lib/graphql/thegraph/__generated__/"],
};
