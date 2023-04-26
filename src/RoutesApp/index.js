import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import RootLayout from "views/root-layout/index";
import store from "core/store/index.js";

const RoutesApp = () => {
    return (
        <Provider store={store()}>
            <Router>
                <RootLayout />
            </Router>
        </Provider>
    );
};

export default RoutesApp;
