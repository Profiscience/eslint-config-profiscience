'use strict'

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
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
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }]
  }
}
