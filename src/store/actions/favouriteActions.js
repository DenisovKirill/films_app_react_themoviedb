import { FAVOURITE_ACTIONS_TYPES } from "./types";

export const setFavourite = (favourite) => {
    return {
        type: FAVOURITE_ACTIONS_TYPES.SET_FAVOURITE,
        payload: favourite
    }
};