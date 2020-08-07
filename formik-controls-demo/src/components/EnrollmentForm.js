import React from 'react';
import * as Yup from "yup";

const EnrollmentForm = () => {
  const dropdownOptions = [
    {key: 'Select your course', value: ''},
    {key: 'React', value: 'react'},
    {key: 'Angular', value: 'angular'},
    {key: 'Vue', value: 'vue'},
  ];

  const checkboxOptions = [
    {key: 'HTML', value: 'html'},
    {key: 'CSS', value: 'css'},
    {key: 'JavaScript', value: 'javascript'},
  ];

  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null,
  }

  /*
    Validation:
    - Email required
    - Bio required
    - Course required
    - Course date required
  */
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    courseDate: Yup.date().required('Required').nullable(),
  });

  const onSubmit = values => {
    console.log('Form data', values);
  }

  return (
    <div>

    </div>
  );
};

export default EnrollmentForm;
