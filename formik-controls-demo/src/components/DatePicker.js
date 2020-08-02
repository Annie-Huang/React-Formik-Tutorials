import React from 'react';
import {Field} from "formik";

const DatePicker = ({label, name, ...rest}) => {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const {setFieldValue} = form;
                        const {value} = field;
                    }
                }
            </Field>
        </div>
    );
};

export default DatePicker;
