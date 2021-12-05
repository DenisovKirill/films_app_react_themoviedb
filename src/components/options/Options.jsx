import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Search } from "../search/Search";
import { Filters } from "../filters/Filters";
import { Button } from "../button/Button";
import { clearOptions } from "../../store/actions/optionsActions";

import './Options.css'

export const Options = () => {
    const dispatch = useDispatch();

    const { filmsSection, searchSection, favoriteSection } = useSelector(({ sections: { filmsSection, searchSection, favoriteSection } }) => ({
        filmsSection,
        searchSection,
        favoriteSection
    }));

    const history = useHistory();

    const clearFilters = () => {
        dispatch(clearOptions);
        history.push('./films')
    };

    return(
        <>
        {!favoriteSection &&
            <div>
                <Search/>
                {!searchSection && <Filters/>}
                {!searchSection && <Button
                    className='options__button'
                    text='Clear options'
                    onClick={clearFilters}
                />}
            </div>
        }
        </>
    )
}