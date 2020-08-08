import React from 'react';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import FormikControl from "./FormikControl";

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: ''
  }
  const initialValues2 = {
    email2: '',
    password2: ''
  }

  /*
      Validation:
      - Email required
      - Email format
      - Password required
   */
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });
  const validationSchema2 = Yup.object({
    email2: Yup.string().email('Invalid email format').required('Required'),
    password2: Yup.string().required('Required'),
  });

  const onSubmit = values => {
    console.log('Form data', values);
  }
  const onSubmit2 = values => {
    console.log('Form data', values);
  }

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          formik => {
            return <Form>
              <FormikControl control='input' type='email' label='Email' name='email'/>
              <FormikControl control='input' type='password' label='Password' name='password'/>
              <button type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
          }
        }
      </Formik>
      <Formik initialValues={initialValues2} validationSchema={validationSchema2} onSubmit={onSubmit2}>
        {
          formik => {
            return <Form>
              <FormikControl control='chakrainput' type='email' label='Email' name='email2'/>
              <FormikControl control='chakrainput' type='password' label='Password' name='password2'/>
              <button type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
          }
        }
      </Formik>
    </>
  );
};

export default LoginForm;
