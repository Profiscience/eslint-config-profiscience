'use strict'

module.exports = {
  extends: 'eslint:recommended',

  env: {
    browser: true,
    node: true,
    es6: true
  },

  parser: 'babel-eslint',

  plugins: [
    'formatting'
  ],

  rules: {
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': 2,
    'comma-dangle': 0,
    'no-console': 1,
    'no-const-assign': 2,
    'no-debugger': 1,
    'no-unused-vars': 1,
    'no-var': 2,
    'object-curly-spacing': [2, 'always'],
    'object-shorthand': [1, 'always'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'quotes': [1, 'single'],
    'semi': [2, 'never'],
    'space-before-function-paren': [2, 'never'],
    'strict': [1, 'global'],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],

    'formatting/newline-object-in-array': 2
  }
}
