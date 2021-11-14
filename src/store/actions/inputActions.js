import { INPUT_ACTION_TYPES } from "./types";

export const getInputValue = (value) => {
    return {
        type: INPUT_ACTION_TYPES.SET_NEW_VALUE,
        payload: value
    }
};
