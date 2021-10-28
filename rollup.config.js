import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";

module.exports = [
  {
    input: "src/main.js",
    output: [
      {
        file: "lib/index.js",
        // How to configure packaging modularization es: ESM cjs:CommonJS
        format: "es",
      },
    ],
    plugins: [
      vue({
        // Insert the style in the single file component into the style tag in html
        css: true,
        // Convert component to render function
        compileTemplate: true,
      }),
      // Code compression
      terser(),
    ],
  },
];
