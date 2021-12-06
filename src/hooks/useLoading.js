import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";

import qs from 'qs';

import { setFilms } from "../store/actions/filmsActions";
import { API, KEY } from '../api/Api';


export const useLoading = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { query } = qs.parse(history.location.search, { ignoreQueryPrefix: true });

    const {genres, userScore, page, releaseDateFrom, releaseDateTo} = useSelector((
        {options: { genres, userScore, page, releaseDateFrom, releaseDateTo }, sections: {filmsSection, favoriteSection} }
        ) => ({
            genres,
            userScore,
            page,
            releaseDateFrom,
            releaseDateTo,
            filmsSection,
            favoriteSection
    }));

    const options = {
        'with_genres': genres.join(','),
        'page': page,
        'vote_average.gte': userScore[0],
        'vote_average.lte': userScore[1],
        'primary_release_date.gte': releaseDateFrom,
        'primary_release_date.lte': releaseDateTo,
        'sort_by': 'popularity.desc'
    }

    const optionsString = qs.stringify(options);

    return useEffect(() => {
        let url = `${API}discover/movie${KEY}&${optionsString}`;
        if(query && query !== '') {
            url = `${API}search/movie${KEY}&query=${query}&page=${page}`;
        }
        dispatch(setFilms(url));
    }, [genres, userScore, page, releaseDateFrom, releaseDateTo, query]);
};
