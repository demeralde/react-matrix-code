import babel from "@rollup/plugin-babel";
import sourcemaps from "rollup-plugin-sourcemaps";
import typescript from "@rollup/plugin-typescript";

import packageJson from "./package.json";

const formats = ["cjs", "esm"];
const configs = [];

formats.forEach((format) => {
  configs.push({
    input: "src/index.ts",
    output: {
      name: "react-matrix-code",
      dir: "dist",
      format: "cjs",
      exports: "default",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist",
      }),
      babel({
        exclude: "node_modules/**",
        plugins: ["@babel/transform-runtime"],
        babelHelpers: "runtime",
      }),
      sourcemaps(),
    ],
    external: [
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
  });
});

export default configs;
