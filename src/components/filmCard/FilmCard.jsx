import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '16px'
    },
    card: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: '5px',
        padding: '10px 5px'
    },
    image: {
        display: 'block',
        margin: '0 auto',
        width: '100%'
    },
    content: {
        padding: '0'
    }
})

export const FilmCard = (props) => {
    const classes = useStyles();

    return(
        <Grid item xs={3}>
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography className={classes.title}>{props.title}</Typography>
                <img  className={classes.image} src={props.src} alt='poster'></img>
            </CardContent>
        </Card>
    </Grid>
    )
}