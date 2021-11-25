import React from "react";
import { useDispatch } from "react-redux";

import { setGenre } from "../../store/actions/optionsActions";

import './Genres.css'

const genresList = [
    {"id":28,"name":"Action"},
    {"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},
    {"id":35,"name":"Comedy"},
    {"id":80,"name":"Crime"},
    {"id":99,"name":"Documentary"},
    {"id":18,"name":"Drama"},
    {"id":10751,"name":"Family"},
    {"id":14,"name":"Fantasy"},
    {"id":36,"name":"History"},
    {"id":27,"name":"Horror"},
    {"id":10402,"name":"Music"},
    {"id":9648,"name":"Mystery"},
    {"id":10749,"name":"Romance"},
    {"id":878,"name":"Science Fiction"},
    {"id":10770,"name":"TV Movie"},
    {"id":53,"name":"Thriller"},
    {"id":10752,"name":"War"},
    {"id":37,"name":"Western"}
];

export const Genres = () => {
    const dispatch = useDispatch();

    const renderGenres = () => {
        return genresList.map((item, i) => {
            return (
                <React.Fragment key={i}>
                    <button
                        className='genres-buttton'
                        onClick={() => {
                            dispatch(setGenre(item.id));
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
}