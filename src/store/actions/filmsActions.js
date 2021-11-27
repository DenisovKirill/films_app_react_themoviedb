import { FILMS_ACTION_TYPES } from "./types";
import { getData } from "../../services/getData";

// export const setPage = (newPage) => {
//     return {
//         type: FILMS_ACTION_TYPES.SET_PAGE,
//         payload: newPage
//     }
// };

// export const setTotalPages = (newTotalPage) => {
//     return {
//         type: FILMS_ACTION_TYPES.SET_TOTAL_PAGES,
//         payload: newTotalPage
//     }
// };


// export const setTotalPages = (url) => async (dispatch) =>  {
//     const data = await getData(url);
//     dispatch({type: FILMS_ACTION_TYPES.SET_TOTAL_PAGES, payload: data});
// };


export const setFilms = (url) => async (dispatch) =>  {
    const data = await getData(url);
    dispatch({type: FILMS_ACTION_TYPES.SET_FILMS, payload: {
        films: data.results,
    }});
    dispatch({type: FILMS_ACTION_TYPES.SET_TOTAL_PAGES, payload: {
        total_pages: data.total_pages
    }});
};