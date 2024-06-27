/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@splitfi/eslint-config/react-internal.js"],
  env: {
    node: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
