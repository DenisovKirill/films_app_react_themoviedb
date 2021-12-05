import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from '@material-ui/core/Container';
import { Grid } from "@material-ui/core";

import { Options } from "../../components/options/Options";
import { FilmsContainer } from "../../components/filmsContainer/FilmsContainer";
import { FavouriteContainer } from "../../components/favouriteContainer/FavouriteContainer";
import { Header } from "../../components/header/Header";
import { getGenres } from "../../services/getGenres";
import { setReceivedGenres } from "../../store/actions/genresActions";
import { setQuery } from "../../store/actions/optionsActions";
import { useLoading } from "../../hooks/useLoading";


export const Main = () => {
    const dispatch = useDispatch();

    const { favoriteSection } = useSelector(({ sections: {  favoriteSection } }) => ({
            favoriteSection
    }));

    useEffect(() => {
        setQuery('')
        getGenres()
        .then((success) => {
            dispatch(setReceivedGenres(success.genres));
        })
    }, [])

    useLoading();

    return (
        <div>
            <Header/>
            <Container>
            {!favoriteSection &&
                <Grid container>
                    <Grid item xs={2}>
                        <Options />
                    </Grid>
                    <Grid item xs={10}>
                        <FilmsContainer />
                    </Grid>
                </Grid>}

            {favoriteSection &&
                <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <FavouriteContainer />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>}
            </Container>
        </div>
    )
};
