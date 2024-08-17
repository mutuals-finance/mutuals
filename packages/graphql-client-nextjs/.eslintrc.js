/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@mutuals/eslint-config/next.js"],
  env: {
    node: true,
    browser: true,
  },
};
