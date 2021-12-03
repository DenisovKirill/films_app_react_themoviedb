import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { FilmInfo } from "../../components/filmInfo/FilmInfo";
import {setAboutInfo} from "../../store/actions/aboutActions";
import {clearAboutInfo} from "../../store/actions/aboutActions";

export const About = (props) => {
    const dispatch = useDispatch();

    const {info} = useSelector(({ about: { info } }) =>( {
        info
    }));

    const {history, match: {params: { id }}} = props;
    console.log(props);

    const goBack = () => {
        history.go(-1)
    }

    useEffect(() => {

        if(id) dispatch(setAboutInfo(id));
        return function () {
            dispatch(clearAboutInfo);
        }
    }, [id]);

    const renderAbout = () => {
        const background = `https://image.tmdb.org/t/p/original/${info?.backdrop_path}`
        console.log('background: ', background);
        const genres = info.genres.map(item => item.name).join(', ')
        const countries= info.production_countries.map(item => item.name).join(', ');

        return (
            <FilmInfo
                sendUrl={background}
                poster={info.poster_path}
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

    return(
        <div>
            {info&&renderAbout()}
        </div>
    )
}
