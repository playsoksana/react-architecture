import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";

import dimensionOfDevice from "./dimensionOfDevice/reducer.js";

const configureStore = () => {
    const rootReducer = combineReducers({
        dimensionOfDevice,
    });

    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const initialState = {};
    return createStore(rootReducer, initialState, composedEnhancers);
};

export default configureStore;
