import { GENRES_ACTIONS_TYPES } from "../actions/types";

const initialState = {
    genresList: []
};

const setReceivedGenresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENRES_ACTIONS_TYPES.SET_RECEIVED_GENRES:
            return {
                    ...state,
                    genresList: action.payload
            }

        default:
            return state
    }
};

export default setReceivedGenresReducer;