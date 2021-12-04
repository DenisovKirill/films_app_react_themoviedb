import { FILMS_ACTION_TYPES } from "./types";
import { getData } from "../../services/getData";

export const setFilms = (url) => async (dispatch) =>  {
    try {
        dispatch({type: FILMS_ACTION_TYPES.SET_LOADING , payload: true});
        const data = await getData(url);
        dispatch({type: FILMS_ACTION_TYPES.SET_FILMS, payload: {
            films: data.results,
        }});
        dispatch({type: FILMS_ACTION_TYPES.SET_TOTAL_PAGES, payload: {
            total_pages: data.total_pages
        }});
        dispatch({type: FILMS_ACTION_TYPES.SET_LOADING , payload: false});
    }
    catch {
        console.log('Some error');
        dispatch({type: FILMS_ACTION_TYPES.SET_LOADING , payload: false});
    }
};
