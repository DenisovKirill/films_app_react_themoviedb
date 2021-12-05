import { OPTIONS_ACTIONS_TYPES } from "../actions/types";

let now = new Date().toISOString().split('T')[0]

const initialState = {
    query: '',
    genres: [],
    userScore: [0, 10],
    releaseDateFrom: null,
    releaseDateTo: now,
    page: 1
};

const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPTIONS_ACTIONS_TYPES.SET_QUERY:
            return {
                ...state,
                userScore: action.payload
            };

        case OPTIONS_ACTIONS_TYPES.SET_GENRES:
            return {
                ...state,
                genres: !state.genres.some(arrVal => action.payload === arrVal) ?
                [...state.genres, action.payload] :
                state.genres.filter(item => item !== action.payload)
            };

        case OPTIONS_ACTIONS_TYPES.SET_USER_SCORE:
            return {
                ...state,
                userScore: action.payload
            };

        case OPTIONS_ACTIONS_TYPES.SET_RELEASE_DATE_FROM:
            return {
                ...state,
                releaseDateFrom: action.payload
            }

        case OPTIONS_ACTIONS_TYPES.SET_RELEASE_DATE_TO:
            return {
                ...state,
                releaseDateTo: action.payload
            }

        case OPTIONS_ACTIONS_TYPES.SET_PAGE:
            return {
                ...state,
                page: action.payload
            };

        case OPTIONS_ACTIONS_TYPES.CLEAR_OPTIONS:
            return initialState;

        default:
            return state
    }
};

export default optionsReducer;
