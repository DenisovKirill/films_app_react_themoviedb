import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import { Form } from "../../components/form/Form";

// import { loginStyle } from '../../components/form/style'

// const useStyles = makeStyles({
//     loginStyle
// });

export const Login = (props) => {
    const goToFilms = () => {
        const history = props.history;
        history.push('/films')
    }
    return (
        <Form goTo={goToFilms}/>
    )
}