import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import { AffixProvider } from "./context/AffixContext";
import { SearchProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AffixProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </AffixProvider>
  </React.StrictMode>
);
