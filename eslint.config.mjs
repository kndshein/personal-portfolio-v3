// @ts-check

import js from '@eslint/js';
import ts from 'typescript-eslint';
import json from 'eslint-plugin-json';
import react from 'eslint-plugin-react';
import react_hooks from 'eslint-plugin-react-hooks';
import jsx_a11y from 'eslint-plugin-jsx-a11y';
import astro from 'eslint-plugin-astro';
import mdx from 'eslint-plugin-mdx';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['.astro/', 'dist/', '.netlify/'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{[jt]s,[jt]sx,[mc][jt]s}'],
    languageOptions: { ecmaVersion: 2023 },
    rules: {
      'no-implicit-globals': 'error',
      'no-lonely-if': 'error',
      'new-cap': [
        'error',
        {
          newIsCap: true,
          capIsNew: false,
          properties: false,
        },
      ],
      'no-extend-native': 'error',
      'no-use-before-define': ['error', { functions: false }],
      'linebreak-style': ['error', 'windows'],
    },
  },
  ...ts.configs.recommended,
  ...ts.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })),
  {
    files: ['**/*.json'],
    ignores: ['**/tsconfig.json'],
    ...json.configs.recommended,
  },
  {
    files: ['**/tsconfig.json'],
    ...json.configs['recommended-with-comments'],
  },
  {
    files: ['**/*.{[jt]sx}'],
    ...jsx_a11y.flatConfigs.recommended,
  },
  {
    files: ['**/*.tsx'],
    // TODO: Remove type assertion when https://github.com/jsx-eslint/eslint-plugin-react/issues/3838 is fixed
    .../** @type {any} */ (react.configs.flat.recommended),
    settings: {
      react: { version: 'detect' },
    },
  },
  {
    files: ['**/*.tsx'],
    // TODO: Remove type assertion when https://github.com/jsx-eslint/eslint-plugin-react/issues/3838 is fixed
    .../** @type {any} */ (react.configs.flat['jsx-runtime']),
  },
  {
    files: ['**/*.tsx'],
    // TODO: Directly use recommended config when https://github.com/facebook/react/issues/28313 is fixed
    // ...react_hooks.configs.recommended
    plugins: {
      'react-hooks': /** @type {any} */ (react_hooks),
    },
    rules: {
      .../** @type {any} */ (react_hooks.configs.recommended.rules),
    },
  },
  {
    files: ['gulpfile.js', 'config/ts-node-register.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  ...astro.configs.recommended,
  {
    ...mdx.flat,
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Not sure how to fix w/ mdx https://github.com/mdx-js/eslint-mdx/issues/444
      ...mdx.flat.rules,
    },
  },
  prettier,
];
