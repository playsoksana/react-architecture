import { SET_DIMENSIONS } from "./types.js";

const initialState = {
    dimensions: {
        width: null,
        height: null,
    },
};

export default (state, action) => {
    switch (action.type) {
        case SET_DIMENSIONS: {
            return {
                ...state,
                dimensions: action.payload.dimensions,
            };
        }

        default: {
            return state || { ...initialState };
        }
    }
};
