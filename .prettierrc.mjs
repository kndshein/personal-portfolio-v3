export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  singleQuote: true,
  quoteProps: 'consistent',
  endOfLine: 'auto',
  printWidth: 100,
  trailingComma: 'es5',
};
