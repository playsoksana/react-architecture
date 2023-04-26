import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "components/App.js";

// TODO: NotFound, views....

export default (
    <Routes>
        <Route exact path="/" element={<App />} />
    </Routes>
);
