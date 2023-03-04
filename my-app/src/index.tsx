import React from "react";
import ReactDOM from "react-dom/client";
import "./config/configureMobX";
import "./styles/index.scss";
import App from "./App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
