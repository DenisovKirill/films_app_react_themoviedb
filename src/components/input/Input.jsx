import React from "react";

import './Input.css'

export const Input = ({onChange}) => {
    return(
        <input className='input' onChange={onChange} />
    )
}