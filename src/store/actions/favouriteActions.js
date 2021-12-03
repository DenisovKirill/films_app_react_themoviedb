import { FAVOURITE_ACTIONS_TYPES } from "./types";
import { getData } from "../../services/getData";

export const setFavourite = () => async (dispatch) =>  {
    const favIds = JSON.parse(localStorage.getItem('favoriteInStorage'));

    const favArr = favIds.map((item) => getData(`https://api.themoviedb.org/3/movie/${item}?api_key=8e526a58ae4ed5fe38e95586eb468e63`));

    Promise.all(favArr)
        .then(response => {
            dispatch({type: FAVOURITE_ACTIONS_TYPES.SET_FAVOURITE, payload: [...response]});
        })
        .catch(error => {
            console.log(error);
        });
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