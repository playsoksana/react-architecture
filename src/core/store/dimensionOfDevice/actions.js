import { SET_DIMENSIONS } from "./types.js";

const setDimensions = (dimensions) => ({
    type: SET_DIMENSIONS,
    payload: {
        dimensions,
    },
});

export { setDimensions };
