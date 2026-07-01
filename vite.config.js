import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Strona serwowana z korzenia domeny (homdu.pl) → base "/".
// Multi-page: B2C (/), B2B (/partnerzy) + landingi SEO i blog.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        partners: resolve(__dirname, "partnerzy.html"),
        sharing: resolve(__dirname, "wspoldzielenie-inwestycji.html"),
        build: resolve(__dirname, "aplikacja-budowa-domu.html"),
        reno: resolve(__dirname, "aplikacja-remont.html"),
        blog: resolve(__dirname, "blog.html"),
        blogArticle: resolve(__dirname, "blog-artykul.html"),
      },
    },
  },
});
