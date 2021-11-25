import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '16px'
    },
    card: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        background: 'linear-gradient(90deg, rgba(192,214,219,1) 0%, rgba(6,180,218,1) 100%)',
        margin: '5px',
        padding: '10px 5px'
    },
    image: {
        display: 'block',
        margin: '0 auto',
        width: '100%'
    },
    content: {
        padding: '0',
        flexGrow: '1',
        flex: '1'
    },
    container: {
        display: 'flex'
    }
})

export const FilmCard = (props) => {
    const classes = useStyles();

    return(
        <Grid className={classes.container} item xs={3}>
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                {/* <img
                    className={classes.image}
                    src={props.src}
                    alt='poster'
                    onClick={props.onClick}
                /> */}
                {<Link to='/about'>
                    <img
                        className={classes.image}
                        src={props.src}
                        alt='poster'
                        onClick={props.onClick}
                    />
                </Link>}
                <Typography className={classes.title}>{props.title}</Typography>
                {/* <Typography className={classes.title}>{props.score}</Typography> */}
            </CardContent>
        </Card>
    </Grid>
    )
}