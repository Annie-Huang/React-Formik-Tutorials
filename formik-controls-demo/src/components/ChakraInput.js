import React from 'react';
import {Field} from "formik";
import FormikControl from "./FormikControl";
import {FormErrorMessage, FormLabel} from "@chakra-ui/core";

const ChakraInput = ({label, name, ...rest}) => {
  return (
    <Field name={name}>
      {
        ({field, form}) => {
          return <FormikControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <input id={name} {...rest} {...field}/>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormikControl>
        }
      }

    </Field>
  );
};

export default ChakraInput;
