module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    indent: 'off',
    quotes: ['error', 'single'],
    'import/no-unresolved': [2, { commonjs: true }],
    'no-undef': 2,
    'prefer-const': 2,
    semi: ['error', 'always'],
    'comma-dangle': 'off',
    'no-console': 2,
    '@typescript-eslint/ban-ts-comment': 'off',
  },
}
