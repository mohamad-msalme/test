import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./style/main.scss";

const domNode = document.getElementById("root");
if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
}
