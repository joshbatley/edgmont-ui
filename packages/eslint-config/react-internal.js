const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "eslint-config-turbo", "airbnb-typescript"],
  plugins: ["only-warn", "@typescript-eslint", "react-hooks", "react"],
  globals: {
    React: true,
    JSX: true,
  },
  root: true,
  // env: {
  //   browser: true,
  //   jest: true,
  // },
  parserOptions: {
    project,
  },
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
    "**/jest.config.js"
  ],
  rules: {
    'no-prototype-builtins': 'off',
    'consistent-return': "off",
    'prefer-const': "off",
    'lines-between-class-members': "off",
    'react/button-has-type': "off",
    'react/jsx-one-expression-per-line': "off",
    'react/jsx-props-no-spreading': "off",
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
    'react/no-array-index-key': "off",
    'react-hooks/rules-of-hooks': "error",
    'react-hooks/exhaustive-deps': "warn",
    'import/no-unresolved': "off",
    'import/extensions': "off",
    'import/prefer-default-export': "off",
    'import/no-extraneous-dependencies': "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/indent": "off"
  },
};
