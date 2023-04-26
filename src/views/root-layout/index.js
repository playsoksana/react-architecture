import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
// import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import useDimensions from "core/hooks/use-dimensions/index.js";

import { setDimensions } from "core/store/dimensionOfDevice/actions.js";

import rootRoutes from "router/rootRoutes.js";

// import rootRoutes from "router/root.js";
// import Layout from "components/layout/index.js";
// TODO: useDimensions
//  TODO: ErrorBoundary

const RootLayout = () => {
    const dispatch = useDispatch();
    const dimensions = useDimensions();

    useEffect(() => {
        dispatch(setDimensions(dimensions));
    }, [dimensions.height, dimensions.width]);

    return <div>{rootRoutes}</div>;
};

export default RootLayout;
