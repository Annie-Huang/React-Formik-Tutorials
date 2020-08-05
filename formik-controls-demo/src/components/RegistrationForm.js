import React from 'react';
import * as Yup from "yup";
import {Form, Formik} from "formik";
import FormikControl from "./FormikControl";

const RegistrationForm = () => {
  const options = [
    {key: 'Email', value: 'emailmoc'},
    {key: 'Telephone', value: 'telephonemoc'},
  ]

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    madeOfContact: '',
    phone: '',
  }

  /*
    Validation:
    - Email required
    - Email format
    - Password required
    - Confirm password must match Password
    - Mode of contact required
    - Phone required only if MOC is telephone
 */
  // .oneOf([Yup.ref('password'), ''] means the confirmed password must be either the same as password or equals ''
  // https://github.com/jquense/yup#mixedoneofarrayofvalues-arrayany-message-string--function-schema-alias-equals
  //
  // when('modeOfContact', {
  //       is: 'telephonemoc',
  //       then: Yup.string().required('Required'),
  //     })
  // when mode of Contact is equals to 'telephonemoc', then the validation is 'required'
  // https://github.com/jquense/yup#mixedwhenkeys-string--arraystring-builder-object--value-schema-schema-schema
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required'),
    modeOfContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: Yup.string().required('Required'),
    })
  });

  const onSubmit = values => {
    console.log('Form data', values);
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik => {
          return <Form>
            <FormikControl control='input' type='email' label='Email' name='email'/>
            <FormikControl control='input' type='password' label='Password' name='password'/>
            <FormikControl control='input' type='password' label='Confirm Password' name='confirmPassword'/>
            <FormikControl control='radio' label='Mode of contact' name='modeOfContact' options={options} />
            <FormikControl control='input' type='text' label='Phone number' name='phone'/>
            <button type="submit" disabled={!formik.isValid}>Submit</button>
          </Form>
        }
      }
    </Formik>
  );
};

export default RegistrationForm;
