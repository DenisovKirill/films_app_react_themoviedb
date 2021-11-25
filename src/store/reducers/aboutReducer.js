import { ABOUT_ACTIONS_TYPES } from "../actions/types";

const initialState = {
    info: {}
};

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ABOUT_ACTIONS_TYPES.SET_ABOUT_INFO:
            return {
                ...state,
                info: action.payload
            }

        default:
            return state
    }
};

export default aboutReducer;