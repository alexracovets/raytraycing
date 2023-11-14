import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import wasm from "vite-plugin-wasm";

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
    outDir: 'dist',
  },
  publicDir: "static",
  plugins: [
    glsl(),
    wasm(),
  ],
});
