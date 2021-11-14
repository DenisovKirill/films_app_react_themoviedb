import React from "react";
import Container from '@material-ui/core/Container';
import { Options } from "../../components/options/Options";
import { FilmsContainer } from "../../components/filmsContainer/FilmsContainer";


export const Main = () => {
    return(
        <div>
            <Container>
                <Options/>
                <FilmsContainer/>
            </Container>
        </div>
    )
}

