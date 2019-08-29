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
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true }
    ],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }]
  },

  overrides: [
    {
      files: [
        '**/__test__/**/*',
        '**/__tests__/**/*',
        '**/test/**/*',
        '**/tests/**/*',
        '**/test.*'
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
}
