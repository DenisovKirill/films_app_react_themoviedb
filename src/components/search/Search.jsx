import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilms } from "../../store/actions/filmsActions";

import { API } from '../../api/Api';
import { KEY } from '../../api/Api';
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";

import './Search.css';

export const Search = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const queryFromInput = ({ target: { value } }) => {
        setSearchValue(value);
    };

    const searchFilms = async () => {
        if (searchValue) {
            dispatch(setFilms(`${API}search/movie?api_key=${KEY}&query=${searchValue}`));
        };
    }

    return(
        <div>
            <Input value={searchValue} onChange={queryFromInput} />
            <Button
                className='search__button'
                text='Search'
                onClick={searchFilms}
            />
        </div>
    )
}
