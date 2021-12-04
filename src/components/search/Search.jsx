import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilms } from "../../store/actions/filmsActions";

import { API, KEY } from '../../api/Api';
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";

import './Search.css';
import {useHistory} from "react-router-dom";

export const Search = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();
    // console.log('search history', history);

    const queryFromInput = ({ target: { value } }) => {
        setSearchValue(value);
    };

    const searchFilms = async () => {
        if (searchValue) {
            // history.push({
            //     pathname: '/',
            //     search: `?search=${searchValue}`
            // })
            dispatch(setFilms(`${API}search/movie${KEY}&query=${searchValue}`));
        };
    }

    return(
        <div>
            <Input value={searchValue} onChange={queryFromInput} />
            <Button
                className='search__button'
                value={searchValue}
                text='Search'
                onClick={searchFilms}
            />
        </div>
    )
}
