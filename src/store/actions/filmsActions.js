import { FILMS_ACTION_TYPES } from "./types";
import { getData } from "../../services/getData";

export const getPage = (newPage) => {
    return {
        type: FILMS_ACTION_TYPES.SET_PAGE,
        payload: newPage
    }
};

// export const setFilms = (url) => async (dispatch) =>  {
//     try {
//         const data = await fetch(url);
//         const formattedData = await data.json();
//         dispatch({type: FILMS_ACTION_TYPES.SET_FILMS, payload: formattedData.results});
//     }
//     catch {
//         console.log('Some error');
//     }
// }


export const setFilms = (url) => async (dispatch) =>  {
    const data = await getData(url);
    dispatch({type: FILMS_ACTION_TYPES.SET_FILMS, payload: data.results});
};