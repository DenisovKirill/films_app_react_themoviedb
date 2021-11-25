import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";

const useStyles = makeStyles({
    header: {
        margin: '0 0 10px',
        padding: '5px',
        background: 'linear-gradient(90deg, rgba(192,214,219,1) 0%, rgba(6,180,218,1) 100%)'
    }
});

export const Header = () => {
    const classes = useStyles();
    return(
        <div className={classes.header}>
            <Container>
                <Grid container alignItems='center'>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={2}>
                        <Logo />
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3}>
                        <Navigation />
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
};
