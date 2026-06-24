import React from "react";
import ReactDOM from "react-dom/client";
import PortfolioApp from "./app/PortfolioApp";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <PortfolioApp />
  </React.StrictMode>,
);
