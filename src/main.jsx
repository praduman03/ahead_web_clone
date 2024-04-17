import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./page/Result.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/admin" element={<App isAdmin={true} />} />
        <Route path="/" element={<App isAdmin={false} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
