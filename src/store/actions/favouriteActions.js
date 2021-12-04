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
                console.log(error);
            });
    }
    catch {
        console.log('Some error');
    }

};

// export const init =  () => async (dispatch) => {
//     try {
//         const wait = await getData();
//         const wait1 = await getData();
//         const wait2 = await getData();
//         dispatch(wait, wait1, wait2);
//     }
//     catch(error) {

//     }
// }