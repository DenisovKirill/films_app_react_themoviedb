import { DATA_ACTION_TYPES } from "./types"


// export const dataAction = {
//     type: 'SET_NEW_DATA',
//     payload: 2
// }

//action creator
export const dataActionCreator = (newData) => {
    return {
        type: DATA_ACTION_TYPES.SET_DATA,
        payload: newData
    }
};