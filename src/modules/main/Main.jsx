import React from "react";
import Container from '@material-ui/core/Container';
import { Grid } from "@material-ui/core";
import { Options } from "../../components/options/Options";
import { FilmsContainer } from "../../components/filmsContainer/FilmsContainer";
import { Header } from "../../components/header/Header";

export const Main = () => {
    return(
        <div>
            <Header/>
            <Container>
                <Grid container>
                    <Grid item xs={2}>
                        <Options />
                    </Grid>
                    <Grid item xs={10}>
                        <FilmsContainer />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

