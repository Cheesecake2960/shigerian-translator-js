import esbuild from "rollup-plugin-esbuild";
import { dts } from "rollup-plugin-dts";

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'es'
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs'
      },
    ],
    plugins: [esbuild()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
    plugins: [dts()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: "dist/index.min.mjs",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      esbuild({
        target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
        minify: true,
      }),
    ],
  },
];