import React from "react";
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import { Button } from "../button/Button";
// import { favouriteInit } from "../../services/favouriteInit";

import './FilmCard.css';

export const FilmCard = (props) => {


    return(
        <Grid className='film-card__container' item xs={3}>
        <div className='film-card__card'>
            <div className='film-card__content' data-id={props.id}>
                {<Link to='/about'>
                    <img
                        className='film-card__image'
                        src={props.src}
                        alt='poster'
                        onClick={props.onClick}
                    />
                </Link>}
                <h2 className='film-card__title'>{props.title}</h2>
                {/* <span>{props.id}</span> */}
                <Button
                    className='film-card__btn'
                    text='Fav'
                    onClick={props.favAction}
                />
            </div>
        </div>
    </Grid>
    )
};
