import { OPTIONS_ACTIONS_TYPES } from "../actions/types";

const initialState = {
    genres: [],
    userScore: [0, 10],
    releaseDatesRange: [],
    page: 1
}

// const checkDouble = (arr, num) => {
//     if (!arr.some(value => num === value)) {
//         arr = [...arr, num]
//     } else {
//         const index = arr.indexOf(num);
//         arr.splice(index, 1)
//     }
//     return arr
// }

const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
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

        case OPTIONS_ACTIONS_TYPES.SET_RELEASE_DATES:
            return {
                ...state,
                releaseDatesRange: action.payload
            }

            case OPTIONS_ACTIONS_TYPES.SET_PAGE:
                return {
                    ...state,
                    page: action.payload
                };

        default:
            return state
    }
}

export default optionsReducer;