import React from "react";

import { FilmCard } from "../components/filmCard/FilmCard";
import { favouriteInit } from "./favouriteInit";

const renderFilm = (film) => {
    return (
        <React.Fragment key={film.id}>
            <FilmCard
                id={film.id}
                title={film.title}
                src={film.poster_path}
                rating={film.vote_average}
                favAction={() => {
                    favouriteInit(film.id)
                }}
            />
        </React.Fragment>
    )
};

export const spawnFilms = (arr) => {
    return arr.map(item => renderFilm(item))
};
