import React from "react";
import { createRoot } from "react-dom/client";
import "./style/main.scss";
import { App } from "./App";

const domNode = document.getElementById("root");
if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
}
