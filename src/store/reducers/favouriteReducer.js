import { FAVOURITE_ACTIONS_TYPES } from "../actions/types";

const initialState = {
    favouritesInfo: []
};



const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVOURITE_ACTIONS_TYPES.SET_FAVOURITE:
            return {
                ...state,
                favouritesInfo: action.payload
            }
        default:
            return state
    }
};

export default favouriteReducer;