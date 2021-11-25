import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/screen.png';

const useStyles = makeStyles({
    logo: {
        width: '50px'
    }
});

export const Logo = () => {
    const classes = useStyles();

    return(
        <div>
            <img className={classes.logo} src={logo} alt="logo"/>
        </div>
    )
};
