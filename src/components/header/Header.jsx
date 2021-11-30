import React from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";

import './Header.css';

export const Header = () => {
    return(
        <div className='header'>
            <Container>
                <Grid container alignItems='center'>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={2}>
                        <Logo />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={3}>
                        <Navigation />
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Container>
        </div>

    )
};
