import { FILMS_ACTION_TYPES } from "../actions/types";


const initialState = {
    films: [],
    total_pages: 0
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FILMS_ACTION_TYPES.SET_DATA:
        //     return {
        //         ...state,
        //         ...action.payload
        //     };

        case FILMS_ACTION_TYPES.SET_FILMS:
            return {
                ...state,
                films: action.payload.films
            };

            case FILMS_ACTION_TYPES.SET_TOTAL_PAGES:
                return {
                    ...state,
                    total_pages: action.payload.total_pages
                }

            default:
                return state;
    }
};

export default filmReducer;