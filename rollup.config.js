import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-import-css";

const packageJson = require("./package.json");

export default {
  input: 'src/index.ts',
  output: [
    {
      entryFileNames: "[name].js",
      chunkFileNames: '[name]-[hash].js',
      format: "esm",
      dir: 'dist',
      sourcemap: true
    }
  ],
  treeshake: true,
  plugins: [
    css({ minify: true, output: 'datepicker.css' }),
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
};
