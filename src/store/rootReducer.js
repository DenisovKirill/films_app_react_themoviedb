import { combineReducers } from 'redux';

import dataReducer from './reducers/dataReducer.js';
import filmReducer from './reducers/filmReducer.js';
import inputReducer from './reducers/inputReducer.js';

export default combineReducers({
    myData: dataReducer,
    myFilms: filmReducer,
    inputData: inputReducer
    // тут будут все остальные редьюсеры
})