import React from "react";

import './Input.css'

export const Input = ({value, onChange}) => {
    return(
        <input className='input' value={value}  onChange={onChange} />
    )
}