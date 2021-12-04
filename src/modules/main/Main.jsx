import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

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
    const history = useHistory();
    const {query} = qs.parse(history.location.search, { ignoreQueryPrefix: true });
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
        let url = `${API}discover/movie${KEY}&${optionsString}`;
        if(query && query !== '') {
            console.log('query', query);
            url = `${API}search/movie${KEY}&query=${query}`;
        }
        dispatch(setFilms(url));
    }, [genres, userScore, page, query]);

    return (
        <div>
            <Header/>
            <Container>
            {filmsSection &&
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
