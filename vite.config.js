import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Strona serwowana z korzenia domeny (homdu.pl) → base "/".
// Dwie strony (multi-page): B2C (/) i B2B (/partnerzy).
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        partners: resolve(__dirname, "partnerzy.html"),
      },
    },
  },
});
