import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from "./TextError";

/*
  Need to pass: control = 'select', label = 'Select a topic', name = 'selectOption', options = [{key, value}]
 */
const Select = ({label, name, options, ...rest}) => (
  <div className='form-control'>
    <label htmlFor={name}>{label}</label>
    <Field as='select' id={name} name={name} {...rest}>
      {
        options.map(option => <option key={option.value} value={option.value}>{option.key}</option>)
      }
    </Field>
    <ErrorMessage name={name} component={TextError}/>
  </div>
);

export default Select;
