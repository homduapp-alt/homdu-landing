import React from "react";
import { createRoot } from "react-dom/client";

import "./image-slot.js";
import "./styles.css";

import { PageShell } from "./components/PageShell.jsx";
import { BlogArticle } from "./components/BlogArticle.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageShell navVariant="b2c">
      <BlogArticle />
    </PageShell>
  </React.StrictMode>
);
