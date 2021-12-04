import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from '@material-ui/core/Container';
import { Grid } from "@material-ui/core";

import { Options } from "../../components/options/Options";
import { FilmsContainer } from "../../components/filmsContainer/FilmsContainer";
import { FavouriteContainer } from "../../components/favouriteContainer/FavouriteContainer";
import { Header } from "../../components/header/Header";
import { setFilms } from "../../store/actions/filmsActions";
import { getGenres } from "../../services/getGenres";
import { setReceivedGenres } from "../../store/actions/genresActions";
import { API, KEY } from '../../api/Api';

import qs from 'qs';

export const Main = () => {
    const dispatch = useDispatch();


    const {genres, userScore, page, filmsSection, favoriteSection} = useSelector((
        {options: { genres, userScore, page }, sections: {filmsSection, favoriteSection} }
        ) => ({
        genres,
        userScore,
        page,
        filmsSection,
        favoriteSection
    }));

    const options = {
        'with_genres': genres.join(','),
        'page': page,
        'vote_average.gte': userScore[0],
        'vote_average.lte': userScore[1],
        'sort_by': 'popularity.desc'
    }

    const optionsString = qs.stringify(options);

    useEffect(() => {
        getGenres()
        .then((success) => {
            dispatch(setReceivedGenres(success.genres))
        })
    }, [])

    useEffect(() => {
        dispatch(setFilms(`${API}discover/movie${KEY}&${optionsString}`));
    }, [genres, userScore, page]);

    return (
        <div>
            <Header/>
            <Container>
                <Grid container>
                    <Grid item xs={2}>
                        <Options />
                    </Grid>
                    <Grid item xs={10}>
                        {filmsSection && <FilmsContainer />}
                        {favoriteSection && <FavouriteContainer />}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};
