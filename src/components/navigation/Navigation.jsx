import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    item: {
        margin: '0 15px',
        fontSize: '18px',
        fontWeight: '600',
        color: '#FFF',
        cursor: 'pointer'
    }
});

export const Navigation = () => {
    const classes = useStyles();

    return(
        <Grid container >
            <Grid className={classes.item} item>
                Home
            </Grid>
            <Grid className={classes.item} item>
                Films
            </Grid>
            <Grid className={classes.item} item>
                Logout
            </Grid>
        </Grid>
    )
}
