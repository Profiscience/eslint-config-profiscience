module.exports = {
  ...require('./index'),

  env: {
    node: true,
  },

  parserOptions: {
    project: './tsconfig.json',
  },

  ignorePatterns: ['.eslintrc.js'],
}
