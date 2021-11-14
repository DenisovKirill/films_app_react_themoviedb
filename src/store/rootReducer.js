import { combineReducers } from 'redux';

import filmReducer from './reducers/filmReducer.js';
import inputReducer from './reducers/inputReducer.js';

export default combineReducers({
    myFilms: filmReducer,
    inputData: inputReducer
})