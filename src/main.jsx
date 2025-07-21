import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "flowbite";
import "./utilities.css";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
