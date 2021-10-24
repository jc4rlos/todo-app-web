module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'no-console': 'off',
    'vue/v-bind-style': ['error', 'shorthand'],
    'space-before-function-paren': 0,
  },
}
