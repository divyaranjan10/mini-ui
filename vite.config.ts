import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      name: "MiniUI",
      fileName: "mini-ui",
    },
    rolldownOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
