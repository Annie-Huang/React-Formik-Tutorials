import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from "./TextError";

/*
  Need to pass: control = 'radio', label = 'Pick one option', name = 'radioOption', options = [{key, value}]
 */
const RadioButton = ({label, name, options, ...rest}) => (
    <div className='form-control'>
        <label>{label}</label>
        <Field name={name} {...rest}>
            {
                ({field}) => (
                    options.map(option => (
                        <React.Fragment key={option.key}>
                            <input
                                type="radio"
                                id={option.value}
                                {...field}
                                value={option.value}
                                checked={field.value === option.value}
                            />
                            <label htmlFor={option.value}>{option.key}</label>
                        </React.Fragment>
                    ))
                )
            }
        </Field>
        <ErrorMessage name={name} component={TextError}/>
    </div>
);

export default RadioButton;
