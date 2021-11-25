import { combineReducers } from 'redux';

import filmReducer from './reducers/filmReducer.js';
import optionsReducer from './reducers/optionsReducer.js';
import aboutReducer from './reducers/aboutReducer.js';


export default combineReducers({
    myFilms: filmReducer,
    options: optionsReducer,
    about: aboutReducer,
})