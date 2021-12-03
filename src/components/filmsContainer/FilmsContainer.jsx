import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { FilmsPagination } from "../pagination/Pagination";
import { spawnFilms } from "../../services/spawnFilms";

export const FilmsContainer = () => {
    const { films } = useSelector(({ myFilms: { films } }) => ({
        films
    }));

    if (!films || films.length === 0) return <p>Loading...</p>
    return(
        <div>
            <Grid container>
                {spawnFilms(films)}
            </Grid>
            <FilmsPagination />
        </div>
    )
};
