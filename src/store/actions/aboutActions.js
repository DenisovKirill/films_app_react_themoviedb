import { ABOUT_ACTIONS_TYPES } from "./types";
import { API } from '../../api/Api';
import { KEY } from '../../api/Api';
import { getData } from "../../services/getData";

export const setAboutInfo = (id) => async (dispatch) => {
    const data = await getData(`${API}movie/${id}?api_key=${KEY}`);
    dispatch({type: ABOUT_ACTIONS_TYPES.SET_ABOUT_INFO, payload: data});
};