import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from "./TextError";

/*
  Need to pass: control = 'input', label = 'Email', name = 'email', type = 'email'
 */
const Input = ({label, name, ...rest}) => (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError}/>
    </div>
)

export default Input;
