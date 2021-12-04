import React from "react";
import { useHistory } from "react-router";

import Grid from '@material-ui/core/Grid';
import { useDispatch } from "react-redux";
import { setFilmsSection, setFavouriteSection } from "../../store/actions/sectionActions";

import './Navigation.css';

export const Navigation = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const showFilmsSection = () => {
        dispatch(setFilmsSection)
    }

    const showFavouriteSection = () => {
        dispatch(setFavouriteSection);
        history.location.pathname ='./favourite';
        console.log(history);
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
