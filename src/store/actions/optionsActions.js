import { OPTIONS_ACTIONS_TYPES } from "./types";

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

export const setReleaseDatesRange = (newReleaseDatesRange) => {
    return {
        type: OPTIONS_ACTIONS_TYPES.SET_RELEASE_DATES,
        payload: newReleaseDatesRange
    }
};