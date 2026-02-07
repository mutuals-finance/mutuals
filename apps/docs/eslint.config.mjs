import {globalIgnores} from 'eslint/config';

const mutualsConfig = require("@mutuals/eslint-config/next.js");

/** @type {import("eslint").Linter.Config[]} */
module.exports = [...mutualsConfig, globalIgnores([
  '.next/**',
  'out/**',
  'build/**',
  'next-env.d.ts',
  '.source/**',
])];
