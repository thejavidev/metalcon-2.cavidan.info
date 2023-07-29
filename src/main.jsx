import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { LightgalleryProvider } from "react-lightgallery";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LightgalleryProvider>
        <App />
      </LightgalleryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
