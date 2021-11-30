import React from "react";

import './Button.css'

export const Button = (props) => {
    return (
        <button
            className={props.className +' button'}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}