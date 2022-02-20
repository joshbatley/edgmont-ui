import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-import-css";

const packageJson = require("./package.json");

const common = {
  treeshake: true,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      extensions: ['.js']
    }),

    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: ['macros'],
    }),
  ]
}

export default [{
  input: {
    index: 'src/index.ts',
  },
  output: [
    {
      entryFileNames: "[name].js",
      chunkFileNames: '[name]-[hash].js',
      format: "esm",
      dir: 'dist',
      sourcemap: true
    }
  ],
  ...common,
  plugins: [
    css({ minify: true, output: 'datepicker.css' }),
    typescript({ useTsconfigDeclarationDir: true, tsconfig: "./tsconfig.build.json" }),
    ...common.plugins
  ],
}, {
  input: {
    Solid: 'src/icons/Solid.ts',
    Outline: 'src/icons/Outline.ts',
  },
  output: [
    {
      entryFileNames: "[name].js",
      chunkFileNames: '[name]-[hash].js',
      format: "esm",
      dir: 'icons',
      sourcemap: true
    }
  ],
  ...common,
  plugins: [
    typescript({ useTsconfigDeclarationDir: true, tsconfig: "./tsconfig.icon.json" }),
    ...common.plugins
  ]
}];
