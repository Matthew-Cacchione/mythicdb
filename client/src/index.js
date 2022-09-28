import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import { AffixProvider } from "./context/AffixContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AffixProvider>
      <App />
    </AffixProvider>
  </React.StrictMode>
);
