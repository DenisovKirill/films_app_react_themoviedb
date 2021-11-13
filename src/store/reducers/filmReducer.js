import { FILMS_ACTION_TYPES } from "../actions/types";

const initialState = {
    films: [],
    page: 1
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILMS_ACTION_TYPES.SET_FILMS:
            return {
                ...state,
                films: action.payload
            };
            case FILMS_ACTION_TYPES.SET_PAGE:
                return {
                    ...state,
                    page: action.payload
                };
            default:
                return state;
    }
};

export default filmReducer;