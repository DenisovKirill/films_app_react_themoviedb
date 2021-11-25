import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FilmInfo } from "../../components/filmInfo/FilmInfo";

export const About = () => {
    const dispatch = useDispatch()

    const {info} = useSelector(({ about: { info } }) =>( {
        info
    }));

    const renderAbout = () => {
        return (
            <FilmInfo
                sendUrl={background}
                // size={20}
                title={info.title}
                overview={info.overview}
            />
        )
    }

    useEffect(() => {
        renderAbout()
    }, [info])

    const background = `https://image.tmdb.org/t/p/original/${info?.backdrop_path}`
    console.log(background)
    return(
        <div>
            {/* <FilmInfo
                sendUrl={background}
                // size={20}
                title={info.title}
                overview={info.overview}
            /> */}
            {renderAbout()}
        </div>
    )
}
