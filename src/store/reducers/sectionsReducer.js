import { SECTIONS_ACTIONS_TYPES } from "../actions/types";

const initialState = {
    filmsSection: true,
    favoriteSection: false,
    searchSection: false
};

const sectionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SECTIONS_ACTIONS_TYPES.SET_FILMS_SECTION:
            return {
                filmsSection: true,
                favoriteSection: false,
                searchSection: false
            }

        case SECTIONS_ACTIONS_TYPES.SET_FAVOURITE_SECTION:
            return {
                filmsSection: false,
                favoriteSection: true,
                searchSection: false
            }

            case SECTIONS_ACTIONS_TYPES.SET_SEARCH_SECTION:
                return {
                    filmsSection: false,
                    favoriteSection: false,
                    searchSection: true
                }

        default:
            return state
    }
};

export default sectionsReducer;