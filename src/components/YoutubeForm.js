import React from 'react';
import {useFormik, Formik, Form} from "formik";
import * as Yup from 'yup';

const initialValues = {
    // name: 'Vishwas',
    name: '',
    email: '',
    channel: ''
}

// You cannot get into onSubmit if your errors from validate return is not an empty object
const onSubmit = values => {
    console.log('From data', values);
}

/*const validate = values => {
    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    // errors.name = 'This field is required'
    let errors = {};

    if(!values.name) {
        errors.name = 'Required';
    }

    if(!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if(!values.channel) {
        errors.channel = 'Required';
    }

    return errors;
}*/

const validationSchema = Yup.object({
    name: Yup.string().required('Required!!!'), // Use a differnt string from validate
    email: Yup.string().email('Invalid email format').required('Required!!!'),
    channel: Yup.string().required('Required!!!')
});

/*const YoutubeForm = () => {

    // initialValues needs to match the name field in each input
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    });

    console.log('Form values', formik.values);
    console.log('Form errors', formik.errors);
    console.log('Visited fields', formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    {/!*<input type="text" id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>*!/}
                    <input type="text" id='name' name='name' {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    {/!*<input type="text" id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>*!/}
                    <input type="text" id='email' name='email' {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    {/!*<input type="text" id='channel' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.chanel}/>*!/}
                    <input type="text" id='channel' name='channel' {...formik.getFieldProps('channel')} />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};*/
// // Use Formik component
// const YoutubeForm = () => {
//     return (
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
//             <form onSubmit={formik.handleSubmit}>
//                 <div className="form-control">
//                     <label htmlFor='name'>Name</label>
//                     <input type="text" id='name' name='name' {...formik.getFieldProps('name')} />
//                     {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='email'>E-mail</label>
//                     <input type="text" id='email' name='email' {...formik.getFieldProps('email')} />
//                     {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='channel'>Channel</label>
//                     <input type="text" id='channel' name='channel' {...formik.getFieldProps('channel')} />
//                     {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
//                 </div>
//
//                 <button type='submit'>Submit</button>
//             </form>
//         </Formik>
//     );
// };
// Use Form component
const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <input type="text" id='name' name='name' {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <input type="text" id='email' name='email' {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <input type="text" id='channel' name='channel' {...formik.getFieldProps('channel')} />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;
