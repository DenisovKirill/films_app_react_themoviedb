import React from "react";
import { useState, useEffect } from "react";

import { Input } from "../input/Input";
import { Button } from "../button/Button";

import './Form.css'

export const Form = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email can not be empty');
    const [passwordError, setPasswordError] = useState('Password can not be empty');
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }
    }, [email, password]);

    const handleBlur = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break

            case 'password':
                setPasswordDirty(true)
                break

            default:
                return
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!reg.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrect email');
        } else {
            setEmailError('');
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 3 || e.target.value.length > 15) {
            setPasswordError('Incorrect password');
            if(!e.target.value) {
                setPasswordError();
            }
        } else {
            setPasswordError('');
        }
    };

    return (
        <form className='form'>
            {(emailDirty && emailError) && <div className={'form__error'}>{emailError}</div>}
            <Input
                className='form__input'
                name='email'
                type='text'
                placeHolder='Enter your email'
                value={email}
                onChange={e => emailHandler(e)}
                onBlur={e => handleBlur(e)}
            />
            {(passwordDirty && passwordError) && <div  className={'form__error'}>{passwordError}!</div>}
            <Input
                className='form__input'
                name='password'
                type='password'
                placeHolder='Enter your password'
                value={password}
                onChange={e => passwordHandler(e)}
                onBlur={e => handleBlur(e)}
            />
            <Button
                text='login'
                onClick={props.goTo}
                disabled={!formValid}
            />
        </form>
    )
};

