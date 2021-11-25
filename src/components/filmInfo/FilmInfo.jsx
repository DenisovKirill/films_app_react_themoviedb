import React from "react";
// import { useSelector } from "react-redux";

import "./FilmInfo.css";

export const FilmInfo = (props) => {
    return (
        <div
            className='film-info-holder'
            style={{
            backgroundImage: `url(${props.sendUrl})`
            // fontSize:`${props.size}px`
          }}>
            <h2>{props.title}</h2>
            <p>{props.overview}</p>
        </div>
    )
}
