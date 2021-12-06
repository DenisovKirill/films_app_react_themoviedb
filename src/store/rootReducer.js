import { combineReducers } from 'redux';

import filmReducer from './reducers/filmReducer.js';
import optionsReducer from './reducers/optionsReducer.js';
import aboutReducer from './reducers/aboutReducer.js';
import sectionsReducer from './reducers/sectionsReducer.js';
import favouriteReducer from './reducers/favouriteReducer.js';
import setReceivedGenresReducer from './reducers/genresReducer.js';

export default combineReducers({
    filmsInfo: filmReducer,
    options: optionsReducer,
    about: aboutReducer,
    sections: sectionsReducer,
    favourite: favouriteReducer,
    genres: setReceivedGenresReducer
});
