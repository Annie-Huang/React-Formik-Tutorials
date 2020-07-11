import React from 'react';
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButton from "./RadioButton";

const FormikControl = ({control, ...rest}) => {
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        case 'textarea':
            return <Textarea {...rest} />;
        case 'select':
            return <Select {...rest} />;
        case 'radio':
            return <RadioButton {...rest} />;
        case 'checkbox':
        case 'date':
        default: return null
    }
};

export default FormikControl;
