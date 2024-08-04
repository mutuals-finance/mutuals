/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./base.js"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  env: {
    commonjs: true,
  },
};
