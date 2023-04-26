import React from "react";
import ReactDOM from "react-dom/client";

import RoutesApp from "RoutesApp/index.js";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RoutesApp />
    </React.StrictMode>
);
