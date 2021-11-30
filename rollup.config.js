import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
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
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      minimize: true,
      extract: true,
      extensions: ['.css'],
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ],
    })
  ]
};
