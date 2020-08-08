import React from 'react';
import {Field} from "formik";
import {Input, FormControl, FormErrorMessage, FormLabel} from "@chakra-ui/core";

// The isInvalid property in FormControl applies two thing.
// 1. The entire FormControl will have a red border if the field state is invalid.
// 2. It controls the display of the form error message component.
// Compare this with Input.js
const ChakraInput = ({label, name, ...rest}) => {
  return (
    <Field name={name}>
      {
        ({field, form}) => {
          return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input id={name} {...rest} {...field}/>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        }
      }

    </Field>
  );
};

export default ChakraInput;
