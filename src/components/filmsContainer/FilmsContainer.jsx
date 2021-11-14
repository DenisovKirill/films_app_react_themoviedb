import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { FilmCard } from "../../components/filmCard/FilmCard";

export const FilmsContainer = () => {
    const {films} = useSelector(({ myFilms: { films } }) => ({
        films
    }));

    const renderFilms = () => {
        return films.map(item => {
            const imgUrl = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
            return (
                    <React.Fragment key={item.id}>
                        <FilmCard title={item.original_title} src={imgUrl}/>
                    </React.Fragment>
            )
        })
    }

    return(
        <div>
            <Grid container>
                {renderFilms()}
            </Grid>
        </div>
    )
}
