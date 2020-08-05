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
        ({field}) => {
          // field has name, onBlur, onChange, value
          // But adding value={option.value} after {...field}, the value will be override to stick with option.value
          // console.log('Field', field);

          return options.map(option => (
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
        }
      }
    </Field>
    <ErrorMessage name={name} component={TextError}/>
  </div>
);

export default RadioButton;
