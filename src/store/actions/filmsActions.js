import { FILMS_ACTION_TYPES } from "./types"

export const setFilms = (newFilms) => {
    return {
        type: FILMS_ACTION_TYPES.SET_FILMS,
        payload: newFilms
    }
}

export const getPage = (newPage) => {
    return {
        type: FILMS_ACTION_TYPES.SET_PAGE,
        payload: newPage
    }
}