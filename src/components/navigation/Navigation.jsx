import React from "react";
import Grid from '@material-ui/core/Grid';
import { useDispatch } from "react-redux";
import { setFilmsSection, setFavouriteSection } from "../../store/actions/sectionActions";

import './Navigation.css';

export const Navigation = () => {
    const dispatch = useDispatch();

    const showFilmsSection = () => {
        console.log('films');
        dispatch(setFilmsSection)
    }

    const showFavouriteSection = () => {
        console.log('favourite');
        dispatch(setFavouriteSection)
    }

    return(
        <Grid container className='navigation' justifyContent='flex-end'>
            <Grid className='navigation__item' item>
                <span onClick={showFilmsSection} >Films</span>
            </Grid>
            <Grid className='navigation__item' item>
                <span onClick={showFavouriteSection} >Favourite</span>
            </Grid>
            <Grid className='navigation__item' item>
                Logout
            </Grid>
        </Grid>
    )
};
