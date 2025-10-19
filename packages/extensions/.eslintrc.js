/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@mutuals/eslint-config/react.js"],
  env: {
    node: true,
    browser: true,
  },
};
