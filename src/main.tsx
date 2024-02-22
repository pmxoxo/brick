// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { SiteProvider } from "./components/SiteProvider"; // Import SiteProvider
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <SiteProvider> {/* Wrap App with SiteProvider */}
      <App />
    </SiteProvider>
  </React.StrictMode>
);
