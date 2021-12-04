import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilms } from "../../store/actions/filmsActions";
import qs from 'qs';

import { API, KEY } from '../../api/Api';
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";

import './Search.css';
import {useHistory} from "react-router-dom";

export const Search = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

    const {query} = qs.parse(history.location.search, { ignoreQueryPrefix: true });

    useEffect(() => {
        if(query && query !== '') {
            setSearchValue(query);
        }
    }, []);

    const queryFromInput = ({ target: { value } }) => {
        setSearchValue(value);
    };

    const searchFilms = async () => {
        if (searchValue) {
            history.push({
                pathname: '/films',
                search: `?query=${searchValue}`
            })
            // dispatch(setFilms(`${API}search/movie${KEY}&query=${searchValue}`));
        } else {
            history.push( '/films');
        };
    };
    const goToFilms = () => {
        history.push('/films')
    };

    return(
        <div>
            <Input value={searchValue} onChange={queryFromInput} />
            <Button
                className='search__button'
                value={searchValue}
                text='Search'
                onClick={searchFilms}
            />
            <Button className='options__button' text='Back' onClick={goToFilms} />

        </div>
    )
}
