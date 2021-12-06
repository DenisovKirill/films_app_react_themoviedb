import React from "react";

import './Input.css';

export const Input = (props) => {
    return(
        <input
            className='input'
            name={props.name}
            type={props.type}
            placeholder={props.placeHolder}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
    )
};
