import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setGenre } from "../../store/actions/optionsActions";
import { FILMS_ACTION_TYPES } from "../../store/actions/types";

import './Genres.css';

export const Genres = () => {
    const { genresList, genres } = useSelector(({ genres: { genresList }, options: { genres } }) => (
       { genresList,
        genres}
    ));
    const dispatch = useDispatch();

    const genreButtonClick = (item, { target }) => {
        dispatch({type: FILMS_ACTION_TYPES.SET_LOADING , payload: true});
        dispatch(setGenre(item.id));
    };

    const renderGenres = () => {
        return genresList.map((item, i) => {
            let cls = ['genres-buttton'];
            const exist = genres.some( it => item.id === it);

            if (exist) {
                cls = [...cls, 'genres-buttton-active']
            }
            return (
                <React.Fragment key={i}>
                    <button
                        className={cls.join(' ')}
                        onClick={({ target }) => {
                            genreButtonClick(item, { target })
                        }}
                    >
                        {item.name}
                    </button>
                </React.Fragment>
            )
        })
    };

    return(
        <div className='genres-holder'>
            <div>Genres</div>
            {renderGenres()}
        </div>
    )
};
