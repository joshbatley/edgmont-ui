const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "eslint-config-turbo", "airbnb-typescript"],
  plugins: ["only-warn", "@typescript-eslint", "react-hooks"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'consistent-return': "off",
    'prefer-const': "off",
    'lines-between-class-members': "off",
    'react/button-has-type': "off",
    'react/jsx-one-expression-per-line': "off",
    'react/jsx-props-no-spreading': "off",
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
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
};
