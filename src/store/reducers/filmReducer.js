import { FILMS_ACTION_TYPES } from "../actions/types";


const initialState = {
    films: [],
    loading: true,
    total_pages: 0
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
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

        case FILMS_ACTION_TYPES.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state;
    }
};

export default filmReducer;