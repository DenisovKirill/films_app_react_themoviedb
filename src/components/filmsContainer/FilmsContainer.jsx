import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { FilmCard } from "../../components/filmCard/FilmCard";
import { setAboutInfo } from "../../store/actions/aboutActions";


export const FilmsContainer = () => {
    const dispatch = useDispatch();
    const {films} = useSelector(({ myFilms: { films } }) => ({
        films
    }));


    const showAbout = (id) => {
        console.log(id);
        dispatch(setAboutInfo(id));
    }

    const renderFilms = () => {
        return films.map(item => {
            const imgUrl = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
            return (
                <React.Fragment key={item.id}>
                    <FilmCard
                        title={item.original_title}
                        src={imgUrl}
                        onClick={() => {
                            showAbout(item.id)
                        }}
                        // genres = {item.genre_ids.join(', ')}
                        // score = {item.vote_average}
                    />
                </React.Fragment>
            )
        })
    }

    return(
        <div>
            <Grid container>
                {renderFilms()}
            </Grid>
        </div>
    )
}
