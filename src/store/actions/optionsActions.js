import { OPTIONS_ACTIONS_TYPES } from "./types";

export const setQuery = (query) => {
    return {
        type: OPTIONS_ACTIONS_TYPES.SET_QUERY,
        payload: query
    }
};

export const setGenre = (newGenre) => {
    return {
        type: OPTIONS_ACTIONS_TYPES.SET_GENRES,
        payload: newGenre
    }
};

export const setUserScore = (newScoreRange) => {
    return {
        type: OPTIONS_ACTIONS_TYPES.SET_USER_SCORE,
        payload: newScoreRange
    }
};

export const setReleaseDateFrom = (newReleaseDateFrom) => {
    return {
        type: OPTIONS_ACTIONS_TYPES.SET_RELEASE_DATE_FROM,
        payload: newReleaseDateFrom
    }
};

export const setReleaseDateTo = (newReleaseDateTo) => {
    return {
        type: OPTIONS_ACTIONS_TYPES.SET_RELEASE_DATE_TO,
        payload: newReleaseDateTo
    }
};

export const setPage = (newPage) => {
    return {
        type: OPTIONS_ACTIONS_TYPES.SET_PAGE,
        payload: newPage
    }
};

export const clearOptions = {
    type: OPTIONS_ACTIONS_TYPES.CLEAR_OPTIONS
};
