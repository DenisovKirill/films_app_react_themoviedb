import { FAVOURITE_ACTIONS_TYPES } from "./types";
import { getData } from "../../services/getData";
import { API, KEY } from '../../api/Api';

export const setFavourite = () => async (dispatch) =>  {
    try {
        const favIds = JSON.parse(localStorage.getItem('favoriteInStorage'));

        const favArr = favIds.map((item) => getData(`${API}movie/${item}${KEY}`));

        Promise.all(favArr)
            .then(response => {
                dispatch({type: FAVOURITE_ACTIONS_TYPES.SET_FAVOURITE, payload: [...response]});
            })
            .catch(error => {
                alert('Error');
            });
    }
    catch {
        alert('Error');
    }
};
