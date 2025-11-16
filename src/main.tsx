import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CompaniesProvider } from "./features/companies/context/CompaniesContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>

      <CompaniesProvider>
        <App />
      </CompaniesProvider>

    </BrowserRouter>
  </React.StrictMode>
);

