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

  plugins: [
    'formatting'
  ],

  rules: {
    'accessor-pairs': ERROR,
    'array-bracket-spacing': [WARN, 'never'],
    'array-callback-return': WARN,
    'arrow-body-style': [WARN, 'as-needed'],
    'arrow-parens': [WARN, 'always'],
    'arrow-spacing': WARN,
    'block-scoped-var': WARN,
    'brace-style': WARN,
    'comma-dangle': 0,
    'comma-spacing': WARN,
    'curly': WARN,
    'dot-location': [WARN, 'property'],
    'dot-notation': WARN,
    'eqeqeq': [WARN, 'smart'],
    'indent': [WARN, 2],
    'key-spacing': [WARN, {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum'
    }],
    'keyword-spacing': WARN,
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
    'newline-per-chained-call': [WARN, {
      ignoreChainWithDepth: 3
    }],
    'no-alert': ERROR,
    'no-caller': ERROR,
    'no-console': WARN,
    'no-const-assign': ERROR,
    'no-template-curly-in-string': WARN,
    'no-debugger': WARN,
    'no-empty-function': WARN,
    'no-empty-pattern': WARN,
    'no-eval': ERROR,
    'no-extra-bind': WARN,
    'no-extra-label': WARN,
    'no-floating-decimal': WARN,
    'no-global-assign': ERROR,
    'no-implicit-coercion': ERROR,
    'no-invalid-this': ERROR,
    'no-lone-blocks': ERROR,
    'no-loop-func': WARN,
    // 'no-magic-numbers': [ERROR, {
    //   detectObjects: true,
    //   ignoreArrayIndexes: true,
    //   ignore: [-1, 0, 1, 2]
    // }],
    'no-multi-spaces': WARN,
    'no-multiple-empty-lines': [WARN, {
      max: 2,
      maxBOF: 0,
      maxEOF: 1
    }],
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-return-assign': WARN,
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': ERROR,
    'no-unmodified-loop-condition': WARN,
    'no-unused-expressions': [WARN, {
      'allowTernary': true
    }],
    'no-unused-vars': WARN,
    'no-useless-call': ERROR,
    'no-var': ERROR,
    'no-with': ERROR,
    'object-curly-spacing': [WARN, 'always'],
    'object-shorthand': [WARN, 'always'],
    'prefer-arrow-callback': WARN,
    'prefer-const': WARN,
    'quotes': [WARN, 'single'],
    'require-await': ERROR,
    'semi': [WARN, 'never'],
    'space-before-blocks': WARN,
    'space-before-function-paren': [WARN, 'never'],
    'space-in-parens': WARN,
    'space-infix-ops': WARN,
    'strict': [ERROR, 'global'],
    'yoda': [WARN, 'never', {
      exceptRange: true
    }],

    'formatting/newline-object-in-array': WARN
  }
}
