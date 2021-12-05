import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";

import './Login.css';

export const Login = (props) => {
    const goToFilms = () => {
        const history = props.history;
        history.push('/films')
    }
    return (
        <div className= 'login'>
            <LoginForm goTo={goToFilms}/>
        </div>

    )
};
