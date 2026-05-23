import React from "react";
import { createRoot } from "react-dom/client";

// Rejestruje <image-slot> (web component) zanim wyrenderujemy aplikację.
import "./image-slot.js";
import "./styles.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
