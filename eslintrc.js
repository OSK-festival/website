module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    // 'vue/setup-compiler-macros': true,
  },
  // parser: '@typescript-eslint/parser',
  // parser: 'vue-eslint-parser',
  extends: [
    // -----------------------------------------------------------------
    // 'plugin:@typescript-eslint/parser',
    // 'plugin:vue/vue3-recommended',
    // 'eslint:recommended',
    // 'plugin:vue/vue3-essential',
    // 'plugin:@typescript-eslint/recommended',
    // '@vue/prettier',
    // -----------------------------------------------------------------
    '@nuxt/eslint-config',
  ],
  // parser: 'vue-eslint-parser',
  // extends: [
  //   'plugin:vue/base',
  //   'eslint:recommended',
  //   'plugin:vue/vue3-recommended',
  //   'plugin:vue/essential',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:@typescript-eslint/parser',
  //   'plugin:prettier/recommended',
  //   'eslint-config-prettier',
  //   '@vue/prettier',
  // ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // plugins: ['vue', '@typescript-eslint'],
  rules: {},
};
