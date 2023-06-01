import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/screens/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="py-10 bg-gray-900 h-screen">
      <Home />
    </div>
  </React.StrictMode>
);
