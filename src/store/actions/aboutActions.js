import { ABOUT_ACTIONS_TYPES } from "./types";
import { API, KEY } from '../../api/Api';
import { getData } from "../../services/getData";

export const setAboutInfo = (id) => async (dispatch) => {
    try {
    const data = await getData(`${API}movie/${id}${KEY}`);
    dispatch({type: ABOUT_ACTIONS_TYPES.SET_ABOUT_INFO, payload: data});
    }
    catch {
        alert('Error');
    }
};

export const clearAboutInfo = {
    type: ABOUT_ACTIONS_TYPES.CLEAR_ABOUT_INFO
};
