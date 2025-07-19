module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2022: true,
  },
  extends: 'eslint:recommended',
  plugins: [
    '@stylistic/js'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@stylistic/js/indent': ['error', 2],
    '@stylistic/js/quotes': ['error', 'single'],
    '@stylistic/js/semi': ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 'off'
  },
  ignorePatterns: ['dist/**', 'build/**']
}
