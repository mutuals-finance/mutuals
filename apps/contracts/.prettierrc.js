module.exports = {
  plugins: ['prettier-plugin-solidity'],
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.sol',
      options: {
        parser: 'solidity-parse',
        tabWidth: 4,
        printWidth: 128,
        bracketSpacing: true,
        singleQuote: false,
        compiler: '0.8.20',
      },
    },
  ],
};
