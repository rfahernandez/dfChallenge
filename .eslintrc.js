module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "simple-import-sort", 'jest','testing-library'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  extends: [
    '@react-native-community',
    'plugin:jest/recommended',
    'prettier'
  ],
  rules: {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-duplicate-imports": "error",
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": true,
    }],
    "simple-import-sort/imports": "error",
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off"

  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      }
    },
    {
      files: ['**/types.ts'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
};
