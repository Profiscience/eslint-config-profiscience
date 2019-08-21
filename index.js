'use strict'

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint'
  ],

  env: {
    browser: true,
    node: true,
    es6: true
  },

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  rules: {
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }]
  }
}
