import React from "react";
import { Container } from "@material-ui/core";
// import { useSelector } from "react-redux";

import "./FilmInfo.css";

export const FilmInfo = (props) => {
    return (
        <div
            className='film-info__wrapper'
            style={{
            backgroundImage: `url(${props.sendUrl})`
          }}>
              <Container>
                <div className='film-info__block'>
                    <h2 className='film-info__title'>{props.title}</h2>
                    <p className='film-info__overview'>{props.overview}</p>
                </div>
              </Container>


        </div>
    )
}
