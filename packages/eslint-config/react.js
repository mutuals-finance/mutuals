/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./base.js"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
