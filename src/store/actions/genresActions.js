import { GENRES_ACTIONS_TYPES } from "./types";

export const setReceivedGenres = (newGenre) => {
    return {
        type: GENRES_ACTIONS_TYPES.SET_RECEIVED_GENRES,
        payload: newGenre
    }
};
