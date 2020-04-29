import React from 'react';
import {useFormik} from "formik";

const YoutubeForm = () => {

    // initialValues needs to match the name field in each input
    const formik = useFormik({
        initialValues: {
            name: 'Vishwas',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log('From data', values);
        },
        validate: values => {
            // values.name values.email values.channel
            // errors.name errors.email errors.channel
            // errors.name = 'This field is required'
            let errors = {};

            if(!values.name) {
                errors.name = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email format'
              }

            if(!values.email) {
                errors.email = 'Required';
            }

            if(!values.channel) {
                errors.channel = 'Required';
            }

            return errors;
        }
    });

    // console.log('Form values', formik.values);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>

                <label htmlFor='email'>E-mail</label>
                <input type="text" id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

                <label htmlFor='channel'>Channel</label>
                <input type="text" id='channel' name='channel' onChange={formik.handleChange} value={formik.values.chanel}/>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;
