import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  root: "./public",
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["../src/index.jsx"],
    },
  },
});
