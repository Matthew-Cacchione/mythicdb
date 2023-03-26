// Required packages.
import React from "react";
import ReactDOM from "react-dom/client";

// Required components.
import App from "./components/App";

// Required data.
import { AffixProvider } from "./context/AffixContext";
import { SearchProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AffixProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </AffixProvider>
  </React.StrictMode>
);
