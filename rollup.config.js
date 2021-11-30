import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: {
    index: 'src/index.ts',
    atoms: 'src/atoms/index.ts'
  },
  output: [
    {
      dir: 'lib',
      entryFileNames: '[name].[format].js',
      format: "cjs",
      compact: true,
      sourcemap: true
    },
    {
      dir: 'lib',
      entryFileNames: '[name].[format].js',
      format: "es",
      compact: true,
      sourcemap: true
    }
  ],
  treeshake: true,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      extensions: ['.js']
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules',
      extentsions: ['.ts','.tsx']
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      minimize: true,
      modules: true,
      extract: true,
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ],
      extensions: ['.css']
    })
  ]
};
