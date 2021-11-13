import { INPUT_ACTION_TYPES } from "../actions/types";

const initialState = {
    value: 50
};

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_ACTION_TYPES.SET_NEW_VALUE:
            return {
                ...state,
                value: action.payload
            };
            default:
                return state;
    }
};

export default inputReducer;