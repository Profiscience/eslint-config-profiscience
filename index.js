'use strict'

const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  rules: {
    'no-console': [WARN, { allow: ['error', 'info', 'warn'] }],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    '@typescript-eslint/no-use-before-define': [ERROR, { functions: false }],
    'import/no-absolute-path': ERROR,
    'import/no-self-import': ERROR,
    'import/no-useless-path-segments': WARN,
    'import/no-unused-modules': WARN,
    'import/no-deprecated': WARN,
    'import/no-extraneous-dependencies': WARN,
    'import/no-mutable-exports': WARN,
    'import/first': WARN,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@profiscience/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/newline-after-import': WARN,
  },

  overrides: [
    {
      files: [
        '**/__test__/**/*',
        '**/__tests__/**/*',
        '**/test/**/*',
        '**/tests/**/*',
        '**/test.*',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/no-empty-function': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
      rules: {
        'import/no-unresolved': OFF,
        'import/named': OFF,
        'import/namespaced': OFF,
        'import/default': OFF,
        'import/export': OFF,
      },
    },
  ],
}
