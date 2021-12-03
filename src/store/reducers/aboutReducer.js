import { ABOUT_ACTIONS_TYPES } from "../actions/types";

const initialState = {
    info: null
};

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ABOUT_ACTIONS_TYPES.SET_ABOUT_INFO:
            return {
                ...state,
                info: action.payload
            }
        case ABOUT_ACTIONS_TYPES.CLEAR_ABOUT_INFO: {
            return initialState;
        }
        default:
            return state
    }
};

export default aboutReducer;