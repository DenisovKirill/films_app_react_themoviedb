import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom";
import qs from 'qs';

import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { setSearchSection, setFilmsSection } from "../../store/actions/sectionActions";

import './Search.css';


export const Search = () => {
    const dispatch = useDispatch();

    const { filmsSection } = useSelector(({ sections: { filmsSection} }) => ({
        filmsSection
    }));

    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

    useEffect(() => {
        const {query} = qs.parse(history.location.search, { ignoreQueryPrefix: true });
        if(query && query !== '') {
            setSearchValue(query);
            dispatch(setSearchSection);
        }
    }, [history.location]);

    const queryFromInput = ({ target: { value } }) => {
        setSearchValue(value);
    };

    const searchFilms = async () => {
        if (searchValue) {
            history.push({
                pathname: '/films',
                search: `?query=${searchValue}`
            })
        } else {
            history.push( '/films');
        };
    };
    const goToFilms = () => {
        history.push('/films');
        dispatch(setFilmsSection);
    };

    return(
        <div>
            <Input
                value={searchValue}
                placeHolder='Enter some film'
                onChange={queryFromInput}
            />
            <Button
                className='search__button'
                value={searchValue}
                text='Search'
                onClick={searchFilms}
            />
            {!filmsSection && <Button
                className='options__button'
                text='Back'
                onClick={goToFilms}
            />}

        </div>
    )
}
