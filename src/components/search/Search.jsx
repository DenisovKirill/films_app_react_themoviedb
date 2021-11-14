import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilms } from "../../store/actions/filmsActions";
import { getInputValue } from "../../store/actions/inputActions";

import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";

const initialUrl = 'https://api.themoviedb.org/3/search/movie?api_key=8e526a58ae4ed5fe38e95586eb468e63&query='


export const Search = () => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const {query} = useSelector(({ inputData: { value } }) => ({
        query: value
    }));

    const queryFromInput = ({ target: { value } }) => {
        setSearchValue(value);
    }

    const getFilms = async (value) => {
        const data = await fetch(`${initialUrl}${value}`);
        const formattedData = await data.json();

        dispatch(setFilms(formattedData.results))
    };

    useEffect(() => {
        getFilms(query)
    }, [query])

    const searchFilms = () => {
        if (searchValue) {
            dispatch(getInputValue(searchValue));
            getFilms(query);
        }
    }

    return(
        <div>
            <Input value={query} onChange={queryFromInput} />
            <Button text='Render films' onClick={searchFilms} />
        </div>
    )


}