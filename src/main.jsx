import { StrictMode } from "react";
import { HashRouter  } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter >
      <App />
    </HashRouter >
  </StrictMode>
);
