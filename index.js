'use strict'

const WARN = 1
const ERROR = 2

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
    'accessor-pairs': ERROR,
    'array-bracket-spacing': [ERROR, 'never'],
    'array-callback-return': ERROR,
    'arrow-body-style': [ERROR, 'as-needed'],
    'arrow-parens': [ERROR, 'always'],
    'arrow-spacing': ERROR,
    'block-scoped-var': ERROR,
    'brace-style': ERROR,
    'comma-dangle': 0,
    'comma-spacing': ERROR,
    'curly': ERROR,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eqeqeq': [ERROR, 'smart'],
    'indent': [ERROR, ERROR],
    'key-spacing': [ERROR, {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum'
    }],
    'keyword-spacing': ERROR,
    'max-len': [WARN, {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'max-lines': [WARN, 500],
    'max-depth': [WARN, 4],
    'max-nested-callbacks': [WARN, 10],
    'newline-per-chained-call': [ERROR, {
      ignoreChainWithDepth: 3
    }],
    'no-alert': ERROR,
    'no-caller': ERROR,
    'no-console': WARN,
    'no-const-assign': ERROR,
    'no-template-curly-in-string': ERROR,
    'no-debugger': WARN,
    'no-empty-function': ERROR,
    'no-empty-pattern': ERROR,
    'no-eval': ERROR,
    'no-extra-bind': ERROR,
    'no-extra-label': ERROR,
    'no-floating-decimal': ERROR,
    'no-global-assign': ERROR,
    'no-implicit-coercion': ERROR,
    'no-invalid-this': ERROR,
    'no-lone-blocks': ERROR,
    'no-loop-func': ERROR,
    // 'no-magic-numbers': [ERROR, {
    //   detectObjects: true,
    //   ignoreArrayIndexes: true,
    //   ignore: [-1, 0, 1, 2]
    // }],
    'no-multi-spaces': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-return-assign': ERROR,
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': ERROR,
    'no-unmodified-loop-condition': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': ERROR,
    'no-useless-call': ERROR,
    'no-var': ERROR,
    'no-with': ERROR,
    'object-curly-spacing': [ERROR, 'always'],
    'object-shorthand': [ERROR, 'always'],
    'prefer-arrow-callback': ERROR,
    'prefer-const': ERROR,
    'quotes': [ERROR, 'single'],
    'require-await': ERROR,
    'semi': [ERROR, 'never'],
    'space-before-blocks': ERROR,
    'space-before-function-paren': [ERROR, 'never'],
    'space-in-parens': ERROR,
    'space-infix-ops': ERROR,
    'strict': [ERROR, 'global'],
    'yoda': [ERROR, 'never', {
      exceptRange: true
    }],

    'formatting/newline-object-in-array': ERROR
  }
}
