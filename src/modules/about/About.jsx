import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FilmInfo } from "../../components/filmInfo/FilmInfo";

export const About = (props) => {
    const dispatch = useDispatch()

    const {info} = useSelector(({ about: { info } }) =>( {
        info
    }));

    const {history} = props

    const goBack = () => {
        history.go(-1)
    }

    const background = `https://image.tmdb.org/t/p/original/${info?.backdrop_path}`
    const poster = `https://image.tmdb.org/t/p/original/${info.poster_path}`;
    console.log(background);
    const genres = info.genres.map(item => item.name).join(', ')
    const countries= info.production_countries.map(item => item.name).join(', ')

    const renderAbout = () => {
        return (
            <FilmInfo
                sendUrl={background}
                poster={poster}
                title={info.title}
                tagline={info.tagline}
                genres={genres}
                countries={countries}
                runtime={info.runtime}
                rating={info.vote_average}
                release_date={info.release_date}
                overview={info.overview}
                goBack={goBack}
            />
        )
    }

    // useEffect(() => {
    //     renderAbout()
    // }, [info])

    return(
        <div>
            {renderAbout()}
        </div>
    )
}
