import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from "./TextError";

/*
  Need to pass: control = 'textarea', label = 'Description', name = 'description'
 */
const Textarea = ({label, name, ...rest}) => (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError}/>
    </div>
);

export default Textarea;
