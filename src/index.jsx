import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/screens/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="py-10 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
      <Home />
      </div>
    </div>
  </React.StrictMode>
);
