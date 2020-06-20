import React from 'react';
import {useFormik, Formik, Form, Field, ErrorMessage, FieldArray, FastField} from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}

const onSubmit = values => {
    console.log('From data', values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!!!'), // Use a different string from validate
    email: Yup.string().email('Invalid email format').required('Required!!!'),
    channel: Yup.string().required('Required!!!')
});

// You will use this, e.g. when you want to render your fields based on a json that you fetch from an api call
// Once you get the json representation of your form you iterate over the different objects building the validation function in each
// iteration and assigning it to the validate prop on the field or the fast field component
const validateComments = value => {
    let error;
    if(!value) {
        error = 'Required';
    }
    return error;
}

// /*
// form.errors get populated when
// 1. A change event has occurred (e.g. typing in something in the channel field.)         << can change through validateOnChange props
// 2. After any blur event in the form (e.g click into the channle field and click out)    << can change through validateOnBlur props
// 3. Clicks on the submit button
// */
// const YoutubeForm = () => {
//     return (
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={false} validateOnBlur={false}>
//             <Form>
//                 <div className="form-control">
//                     <label htmlFor='name'>Name</label>
//                     <Field type="text" id='name' name='name' />
//                     <ErrorMessage name='name' component={TextError} />
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='email'>E-mail</label>
//                     <Field type="text" id='email' name='email' />
//                     <ErrorMessage name='email'>
//                         {
//                             (errorMsg) => <div className='error'>{errorMsg}</div>
//                         }
//                     </ErrorMessage>
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='channel'>Channel</label>
//                     <Field type="text" id='channel' name='channel' placeholder='Youtube channel name' />
//                     <ErrorMessage name='channel' />
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='comments'>Comments</label>
//                     <Field as='textarea' id='comments' name='comments' />
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='address'>Address</label>
//
//                     <FastField name='address'>
//                         {
//                             // If you update channel, the address will not keep re-rendering if you use FastField, it implement shouldComponentUpdate internally
//                             (props) => {
//                                 console.log('Render props', props);
//                                 const {field, form, meta} = props;
//                                 return (
//                                     <div>
//                                         <input type='text' id='address' {...field}/>
//                                         {meta.touched && meta.error ? <div>{meta.error}</div> : null}
//                                     </div>
//                                 )
//                             }
//                         }
//                     </FastField>
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='facebook'>Facebook profile</label>
//                     <Field type='text' id='facebook' name='social.facebook' />
//                 </div>
//                 <div className="form-control">
//                     <label htmlFor='twitter'>Twitter profile</label>
//                     <Field type='text' id='twitter' name='social.twitter' />
//                 </div>
//
//                 <div className='form-control'>
//                     <label htmlFor='primaryPh'>Primary phone number</label>
//                     <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
//                 </div>
//                 <div className='form-control'>
//                     <label htmlFor='secondaryPh'>Secondary phone number</label>
//                     <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
//                 </div>
//
//                 <div className='form-control'>
//                     <label>List of phone numbers</label>
//                     <FieldArray name='phNumbers'>
//                         {
//                             (fieldArrayProps) => {
//                                 // console.log('fieldArrayProps', fieldArrayProps); // you can check other methods available in fieldArrayProps
//                                 const {push, remove, form} = fieldArrayProps;
//                                 const {values} = form;
//                                 const {phNumbers} = values;
//                                 console.log('Form errors', form.errors);
//                                 return <div>
//                                     {
//                                         phNumbers.map((phNumber, index) => (
//                                             <div key={index}>
//                                                 <Field name={`phNumbers[${index}]`} />
//                                                 {index > 0 && <button type='button' onClick={() => remove(index)}> - </button>}
//                                                 <button type='button' onClick={() => push('')}> + </button>
//                                             </div>
//                                         ))
//                                     }
//                                 </div>
//                             }
//                         }
//                     </FieldArray>
//                 </div>
//
//                 <button type='submit'>Submit</button>
//             </Form>
//         </Formik>
//     );
// };
/*const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <Field type="text" id='name' name='name' />
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <Field type="text" id='email' name='email' />
                    <ErrorMessage name='email'>
                        {
                            (errorMsg) => <div className='error'>{errorMsg}</div>
                        }
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <Field type="text" id='channel' name='channel' placeholder='Youtube channel name' />
                    <ErrorMessage name='channel' />
                </div>

                <div className="form-control">
                    <label htmlFor='comments'>Comments</label>
                    <Field as='textarea' id='comments' name='comments' validate={validateComments}/>
                    <ErrorMessage name='comments' component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor='address'>Address</label>

                    <FastField name='address'>
                        {
                            // If you update channel, the address will not keep re-rendering if you use FastField, it implement shouldComponentUpdate internally
                            (props) => {
                                console.log('Render props', props);
                                const {field, form, meta} = props;
                                return (
                                    <div>
                                        <input type='text' id='address' {...field}/>
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </FastField>
                </div>

                <div className="form-control">
                    <label htmlFor='facebook'>Facebook profile</label>
                    <Field type='text' id='facebook' name='social.facebook' />
                </div>
                <div className="form-control">
                    <label htmlFor='twitter'>Twitter profile</label>
                    <Field type='text' id='twitter' name='social.twitter' />
                </div>

                <div className='form-control'>
                    <label htmlFor='primaryPh'>Primary phone number</label>
                    <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                </div>
                <div className='form-control'>
                    <label htmlFor='secondaryPh'>Secondary phone number</label>
                    <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                </div>

                <div className='form-control'>
                    <label>List of phone numbers</label>
                    <FieldArray name='phNumbers'>
                        {
                            (fieldArrayProps) => {
                                // console.log('fieldArrayProps', fieldArrayProps); // you can check other methods available in fieldArrayProps
                                const {push, remove, form} = fieldArrayProps;
                                const {values} = form;
                                const {phNumbers} = values;
                                console.log('Form errors', form.errors);
                                return <div>
                                    {
                                        phNumbers.map((phNumber, index) => (
                                            <div key={index}>
                                                <Field name={`phNumbers[${index}]`} />
                                                {index > 0 && <button type='button' onClick={() => remove(index)}> - </button>}
                                                <button type='button' onClick={() => push('')}> + </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        }
                    </FieldArray>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};*/

const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {formik => {
                console.log('Formik props', formik);
                return (
                    <Form>
                        <div className="form-control">
                            <label htmlFor='name'>Name</label>
                            <Field type="text" id='name' name='name' />
                            <ErrorMessage name='name' component={TextError} />
                        </div>

                        <div className="form-control">
                            <label htmlFor='email'>E-mail</label>
                            <Field type="text" id='email' name='email' />
                            <ErrorMessage name='email'>
                                {
                                    (errorMsg) => <div className='error'>{errorMsg}</div>
                                }
                            </ErrorMessage>
                        </div>

                        <div className="form-control">
                            <label htmlFor='channel'>Channel</label>
                            <Field type="text" id='channel' name='channel' placeholder='Youtube channel name' />
                            <ErrorMessage name='channel' />
                        </div>

                        <div className="form-control">
                            <label htmlFor='comments'>Comments</label>
                            <Field as='textarea' id='comments' name='comments' validate={validateComments}/>
                            <ErrorMessage name='comments' component={TextError}/>
                        </div>

                        <div className="form-control">
                            <label htmlFor='address'>Address</label>

                            <FastField name='address'>
                                {
                                    // If you update channel, the address will not keep re-rendering if you use FastField, it implement shouldComponentUpdate internally
                                    (props) => {
                                        console.log('Render props', props);
                                        // The form below is like the formik property just under the <Formik> tag
                                        const {field, form, meta} = props;
                                        return (
                                            <div>
                                                <input type='text' id='address' {...field}/>
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }
                                }
                            </FastField>
                        </div>

                        <div className="form-control">
                            <label htmlFor='facebook'>Facebook profile</label>
                            <Field type='text' id='facebook' name='social.facebook' />
                        </div>
                        <div className="form-control">
                            <label htmlFor='twitter'>Twitter profile</label>
                            <Field type='text' id='twitter' name='social.twitter' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='primaryPh'>Primary phone number</label>
                            <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='secondaryPh'>Secondary phone number</label>
                            <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                        </div>

                        <div className='form-control'>
                            <label>List of phone numbers</label>
                            <FieldArray name='phNumbers'>
                                {
                                    (fieldArrayProps) => {
                                        // console.log('fieldArrayProps', fieldArrayProps); // you can check other methods available in fieldArrayProps
                                        const {push, remove, form} = fieldArrayProps;
                                        const {values} = form;
                                        const {phNumbers} = values;
                                        console.log('Form errors', form.errors);
                                        return <div>
                                            {
                                                phNumbers.map((phNumber, index) => (
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`} />
                                                        {index > 0 && <button type='button' onClick={() => remove(index)}> - </button>}
                                                        <button type='button' onClick={() => push('')}> + </button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                }
                            </FieldArray>
                        </div>

                        {/*When you clicks Validate comments and Validate all, even though the error is there in the form errors*/}
                        {/*but because form's touched field is empty, it will not show the error. Use setFieldTouched and setTouched to change it*/}
                        <button type='button' onClick={() => formik.validateField('comments')}>Validate comments</button>
                        <button type='button' onClick={() => formik.validateForm()}>Validate all</button>
                        <button type='button' onClick={() => formik.setFieldTouched('comments')}>Visit comments</button>
                        <button type='button' onClick={() => formik.setTouched({
                            name: true,
                            email: true,
                            channel: true,
                            comments: true
                        })}>Visit all</button>
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default YoutubeForm;
