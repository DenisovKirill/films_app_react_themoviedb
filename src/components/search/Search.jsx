import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilms } from "../../store/actions/filmsActions";

import { API } from '../../api/Api';
import { KEY } from '../../api/Api';
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";


export const Search = () => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const {genres, userScore, page} = useSelector(({ options: { genres, userScore, page } }) => ({
        genres,
        userScore,
        page
    }));

    const queryFromInput = ({ target: { value } }) => {
        setSearchValue(value);
    };

    useEffect(() => {
        dispatch(setFilms(`${API}discover/movie?api_key=${KEY}&with_genres=${genres.join('%2C')}&page=${page}&vote_average.gte=${userScore[0]}&vote_average.lte=${userScore[1]}&sort_by=popularity.desc`));
    }, [genres, userScore, page]);

    const searchFilms = async () => {
        if (searchValue) {
            dispatch(setFilms(`${API}search/movie?api_key=${KEY}&query=${searchValue}`));
        };
    }

    return(
        <div>
            <Input value={searchValue} onChange={queryFromInput} />
            <Button text='Search' onClick={searchFilms} />
        </div>
    )
}