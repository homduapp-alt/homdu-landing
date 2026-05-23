import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Strona serwowana z korzenia domeny (homdu.pl) → base "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
