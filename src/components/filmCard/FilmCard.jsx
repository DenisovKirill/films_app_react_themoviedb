import React from "react";
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { Rating } from "@material-ui/lab";
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';

import defaultPoster from '../../images/no-img.jpg'

import './FilmCard.css';


export const FilmCard = (props) => {
    React.useEffect(() => {
      const node = loadCSS(
        'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
        document.querySelector('#font-awesome-css'),
      );

      return () => {
        node.parentNode.removeChild(node);
      };
    }, []);

    const src = props.src ? `https://image.tmdb.org/t/p/original/${props.src}` : defaultPoster;

    return(
        <Grid className='film-card__container' item xs={3}>
        <div className='film-card__card'>
            <div className='film-card__content' data-id={props.id}>
                {<Link to={`/about/${props.id}`}>
                    <img
                        className='film-card__image'
                        src={src}
                        alt='poster'
                        onClick={props.onClick}
                    />
                </Link>}
                <h2 className='film-card__title'>{props.title}</h2>
                <Rating
                    className='film-card__rating'
                    size='small'
                    precision={0.1}
                    name="read-only"
                    value={props.rating}
                    max={10}
                    readOnly
                />
                <Icon className='film-card__btn fa fa-heart' onClick={props.favAction}/>

            </div>
        </div>
    </Grid>
    )
};
