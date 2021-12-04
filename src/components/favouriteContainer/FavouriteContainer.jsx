import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { setFavourite } from "../../store/actions/favouriteActions";
import { FilmCard } from "../filmCard/FilmCard";
import { favouriteInit } from "../../services/favouriteInit";

export const FavouriteContainer = () => {
    const dispatch = useDispatch();
    const { favouritesInfo } = useSelector(({ favourite: { favouritesInfo }}) => ({
        favouritesInfo
    }));

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
                        dispatch(setFavourite());
                    }}
                />
            </React.Fragment>
        )
    };

    const spawnFilms = (arr) => {
        return arr.map(item => renderFilm(item))
    };

    useEffect(() => {
        dispatch(setFavourite());

    }, []);

    return (
        <div>
            <Grid container>
                {spawnFilms(favouritesInfo)}
            </Grid>
        </div>
    )
};
