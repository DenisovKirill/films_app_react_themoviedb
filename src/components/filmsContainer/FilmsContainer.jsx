import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { FilmsPagination } from "../pagination/Pagination";
import { spawnFilms } from "../../services/spawnFilms";

export const FilmsContainer = () => {
    const { films, loading } = useSelector(({ filmsInfo: { films, loading } }) => ({
        films,
        loading
    }));

    if (loading) {
        return <p>Loading...</p>
    };

    if (!loading && films.length === 0) {
        return <p>Films not found</p>;
    }

    return(
        <div>
            <Grid container>
                {spawnFilms(films)}
            </Grid>
            <FilmsPagination />
        </div>
    )
};
