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
    typescript({ useTsconfigDeclarationDir: true, tsconfig: "./tsconfig.build.json" }),
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
      format: "cjs",
      dir: 'dist',
      sourcemap: true
    },
    {
      entryFileNames: "[name].esm.js",
      chunkFileNames: '[name]-[hash].esm.js',
      format: "esm",
      dir: 'dist',
      sourcemap: true
    }
  ],
  ...common,
  plugins: [
    css({ minify: true, output: 'datepicker.css' }),
    ...common.plugins
  ],
}, {
  input: {
    solid: 'src/icons/Solid.ts',
    outline: 'src/icons/Outline.ts',
  },
  output: [
    {
      entryFileNames: "[name].js",
      chunkFileNames: '[name]-[hash].js',
      format: "cjs",
      dir: 'icons',
      sourcemap: true
    },
    {
      entryFileNames: "[name].esm.js",
      chunkFileNames: '[name]-[hash].esm.js',
      format: "esm",
      dir: 'icons',
      sourcemap: true
    }
  ],
  ...common,
}];
