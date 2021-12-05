import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

import { Button } from '../button/Button';

import './Form.css'

const LoginForm = (props) => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup
            .string()
            .email('Invalid email format')
            .required('Required'),
        password: Yup
            .string()
            .required('Required')
            .min(5, 'Too Short!')
            .max(20, 'Too Long!')
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }

  return (
    <div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {formik => {
            return (
                <Form className='login-form'>
                <FormikControl
                    control='input'
                    type='email'

                    label='Email'
                    name='email'
                />
                <FormikControl
                    control='input'
                    type='password'
                    label='Password'
                    name='password'
                />
                <Button
                    className='login-btn'
                    text='Login'
                    onClick={props.goTo}
                    disabled={!formik.isValid}
                />
                </Form>
            )
        }}
    </Formik>
    </div>
  )
}

export default LoginForm