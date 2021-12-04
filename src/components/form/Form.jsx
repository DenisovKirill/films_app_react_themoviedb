import React from "react";
import { Input } from "../input/Input";
import { Button } from "../button/Button";

import './Form.css'

export const Form = (props) => {


    return (
        <div className='form'>
            <Input className='form__input' />
            <Input className='form__input' />
            <Button text='login' onClick={props.goTo}/>
        </div>
    )
}
