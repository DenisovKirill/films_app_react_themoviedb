import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { FilmCard } from "../../components/filmCard/FilmCard";
import { setAboutInfo } from "../../store/actions/aboutActions";
import { FilmsPagination } from "../pagination/Pagination";
import { favouriteInit } from "../../services/favouriteInit";

import defaultPoster from '../../images/no-img.jpg'

export const FilmsContainer = () => {
    const dispatch = useDispatch();
    const { films } = useSelector(({ myFilms: { films } }) => ({
        films
    }));

    const spawnItem = (film) => {
        const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
        const showAbout = (id) => {
            dispatch(setAboutInfo(id));
        };
        
        return (
            <React.Fragment key={film.id}>
                <FilmCard
                    id={film.id}
                    title={film.title}
                    src={imgUrl ?? defaultPoster}
                    rating={film.vote_average}
                    favAction={() => {
                        favouriteInit(film.id)
                    }}
                    onClick={() => {
                        showAbout(film.id)
                    }}
                />
            </React.Fragment>
        )
    }

    const renderFilms = () => {
        return films.map(item => spawnItem(item))
    };

    return(
        <div>
            <Grid container>
                {renderFilms()}
            </Grid>
            <FilmsPagination />
        </div>
    )
};
