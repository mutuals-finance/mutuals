const mutualsConfig = require("@mutuals/eslint-config/next.js");

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  ...mutualsConfig,
  {
    ignores: ["src/lib/graphql/thegraph/__generated__/"],
  },
];
