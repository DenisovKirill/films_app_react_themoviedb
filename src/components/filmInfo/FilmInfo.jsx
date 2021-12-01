import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

import { Button } from "../button/Button";

import "./FilmInfo.css";

export const FilmInfo = (props) => {
    return (
        <div
            className='film-info__wrapper'
            style={{
            backgroundImage: `url(${props.sendUrl})`
          }}>
              <Container >
                <div className='film-info__block'>
                    <Grid container>
                        <Grid item xs={5}>
                            <img
                                className='film-info__poster'
                                src={props.poster}
                                alt="poster"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={7}
                            className='film-info__data'
                        >
                            <h2 className='film-info__title'>{props.title}</h2>
                            <div className='film-info__tagline'>{props.tagline}</div>
                            <div className='film-info__genres'>Genres: {props.genres}</div>
                            <div className='film-info__countries'>Production countries: {props.countries}</div>
                            <div className='film-info__release-date'>Release date: {props.release_date}</div>
                            <div className='film-info__release-runtime'>Runtime: {props.runtime} minutes</div>
                            <Rating
                                className='film-info__rating'
                                precision={0.1}
                                name="read-only"
                                value={props.rating}
                                max={10}
                                readOnly
                            />
                            <p className='film-info__overview'>{props.overview}</p>
                            <Button
                                className='film-info__btn'
                                text='Go back'
                                onClick={props.goBack}
                            />
                        </Grid>
                    </Grid>


                </div>
              </Container>


        </div>
    )
}
