/// <reference types="vitest" />
import { defineConfig } from "vite";
import angular from "@analogjs/vite-plugin-angular";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"],
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [angular()],
  test: {
    globals: true,
    setupFiles: ["src/test-setup.ts"],
    // environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: [],
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text-summary", "lcov", "html"],
    },
    browser: {
      enabled: true,
      headless: false,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
  },
  define: {
    "import.meta.vitest": mode !== "production",
  },
}));
