import React from "react";

import './Button.css'

export const Button = (props) => {
    return (
        <button
            className={props.className +' button'}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    )
}